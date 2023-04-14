import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  query,
  orderBy,
  limit,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const fetchStories = createAsyncThunk(
  "stories/fetchStories",
  async (number) => {
    const storiesRef = collection(db, "stories");
    const q = query(storiesRef, orderBy("date", "desc"), limit(number));
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    data.map(
      (obj) => (obj.date = new Date(obj.date.seconds * 1000).toString())
    );
    return data;
  }
);

export const fetchStory = createAsyncThunk("stories/fetchStory", async () => {
  let data = "";
  const docRef = doc(db, "story", "0");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    data = docSnap.data();
    data.date = new Date(data.date.seconds * 1000).toString();
  }

  return data;
});

const StoriesSlice = createSlice({
  name: "stories",
  initialState: { stories: "", story: "" },
  reducers: {
    setStories(state, action) {
      state.stories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStories.pending, (state) => {
      state.stories = "";
    });
    builder.addCase(fetchStories.rejected, (state) => {
      state.stories = "";
    });
    builder.addCase(fetchStories.fulfilled, (state, action) => {
      state.stories = action.payload;
    });
    builder.addCase(fetchStory.pending, (state) => {
      state.story = "";
    });
    builder.addCase(fetchStory.rejected, (state) => {
      state.story = "";
    });
    builder.addCase(fetchStory.fulfilled, (state, action) => {
      state.story = action.payload;
    });
  },
});

export const { setStories } = StoriesSlice.actions;
export default StoriesSlice.reducer;

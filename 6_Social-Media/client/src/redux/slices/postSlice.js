// // Lec_6
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosClient } from "../../utils/axiosClient";
// import { setLoading } from "./appConfigSlice";

// export const getUserProfile = createAsyncThunk(
//   "user/getUserProfile",
//   async (body, thunkAPI) => {
//     try {
//       thunkAPI.dispatch(setLoading(true));
//       const response = await axiosClient.post("/user/getUserProfile", body);
//       console.log("userProfile", response);
//       return response.result;
//     } catch (e) {
//       return Promise.reject(e);
//     } finally {
//       thunkAPI.dispatch(setLoading(false));
//     }
//   }
// );
// export const likeAndUnlikePost = createAsyncThunk(
//   "post/likeAndUnlike",
//   async (body) => {
//     try {
//       const response = await axiosClient.post("/posts/like", body);
//       console.log("userProfile", response);
//       return response.result.post;
//     } catch (e) {
//       return Promise.reject(e);
//     }
//   }
// );

// const postSlice = createSlice({
//   name: "postSlice",
//   initialState: {
//     userProfile: {},
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getUserProfile.fulfilled, (state, action) => {
//       state.userProfile = action.payload;
//     });
//   },
// });

// export default postSlice.reducer;

// Lec_7
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";
import { setLoading } from "./appConfigSlice";

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (body) => {
    try {
      const response = await axiosClient.post("/user/getUserProfile", body);
      console.log("userProfile", response);
      return response.result;
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

export const likeAndUnlikePost = createAsyncThunk(
  "post/likeAndUnlike",
  async (body) => {
    try {
      const response = await axiosClient.post("/posts/like", body);
      console.log("userProfile", response);
      return response.result.post;
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    userProfile: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload;
      })
      .addCase(likeAndUnlikePost.fulfilled, (state, action) => {
        const post = action.payload;
        // console.log("like post", post);
        const index = state?.userProfile?.posts?.findIndex(
          (item) => item._id === post._id
        );
        // console.log("like post", post, index);

        if (index != undefined && index != -1) {
          state.userProfile.posts[index] = post;
        }
      });
  },
});

export default postSlice.reducer;

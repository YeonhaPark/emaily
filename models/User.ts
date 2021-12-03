import mongoose from "mongoose";
const { Schema } = mongoose;
// mongoose는 스키마를 지정해주어야함. 레코드마다 다른 키값을 가질수 없음.

const userSchema = new Schema({
  googleId: String,
});

mongoose.model("users", userSchema); // create new collection called users. mongoose에 올림

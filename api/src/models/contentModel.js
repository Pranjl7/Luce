import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const contentSchema = new mongoose.Schema({
  thumbnail: { type: String },
  tags: [{ type: String }],
  title: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: [{ type: String }],
  createdat: { type: String },
  author: { type: ObjectId, ref: 'User', required: true },
});

export const Content = mongoose.model('Content', contentSchema);

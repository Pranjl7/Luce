import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const contentSchema = new mongoose.Schema({
  thumbnail: { type: String },
  tags: [{ type: String }],
  title: { type: String, required: true },
  contentimage: { type: String },
  content: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: [{ type: String }],
  createdat: { type: String },
  author: { type: ObjectId, ref: 'User' },
});

export const Content = mongoose.model('Content', contentSchema);

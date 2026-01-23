import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = {
  userclerkid: { type: String, unique: true, required: true },
  username: { type: String },
  emailid: { type: String, unique: true, required: true },
  avatarurl: { type: String },
  followers: [{ type: ObjectId, ref: 'User' }],
  following: [{ type: ObjectId, ref: 'User' }],
  lastsignedin: { type: String },
  createdat: { type: String },
  usercontents: [{ type: ObjectId, ref: 'Content' }],
};

export const User = mongoose.model('User', userSchema);

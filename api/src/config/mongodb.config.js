import mongoose from 'mongoose';

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Db Connected.');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectdb;

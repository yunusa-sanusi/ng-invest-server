require('dotenv').config();
const mockData = require('./mockData.json');
const Portfolio = require('./Model');
const connectDB = require('./dbConnect');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Portfolio.create(mockData);
    console.log('Success !!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();

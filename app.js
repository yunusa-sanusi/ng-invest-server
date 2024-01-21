require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');

const connectDB = require('./dbConnect');
const Portfolio = require('./Model');

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.get('/', async (req, res) => {
  try {
    const portfolios = await Portfolio.find({}).sort('riskScore');
    return res.status(200).json({ data: portfolios });
  } catch (error) {
    console.log(error);
  }
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log('Database connected successfully');
    app.listen(5000, () => console.log(`Server listening on port 5000...`));
  } catch (error) {
    console.log(error);
  }
};

start();

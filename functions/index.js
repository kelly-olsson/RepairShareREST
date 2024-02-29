import functions from 'firebase-functions';
import cors from 'cors';
import express from 'express';

// Express app configuration
const app = express();

// Since Express version 4.16.0, bodyParser.json() and bodyParser.urlencoded()
// are deprecated and replaced with express.json() and express.urlencoded()
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Enable CORS with default configuration
// The { origin: true } option allows requests from any origin
app.use(cors({origin: true}));

// A simple API to get all tasks
app.get('/test', (request, response) => {
  response.status(200).send([
    {
      id: '123',
      name: 'Task 1',
      isComplete: false,
    },
    {
      id: '456',
      name: 'Task 2',
      isComplete: true,
    },
  ]);
});

// Define the Firebase function that will act as Express application
export const api = functions.https.onRequest(app);

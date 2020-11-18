import express from 'express';
import mongoose from 'mongoose';
import router from './routes';

mongoose.connect("mongodb+srv://developer:devops@mongodb.l1fvw.mongodb.net/sosvet?retryWrites=true&w=majority",
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server started at localhost:3333"));
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import retirementRoute from './routes/retirementRoute';
import bodyParser from 'body-parser';


const app = express();

mongoose.connect('mongodb://localhost/rules');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use('/api/v1', retirementRoute);

const server = app.listen(3001, () => {
    const {port} = server.address();
    console.log(`Running at port ${port}`);
});
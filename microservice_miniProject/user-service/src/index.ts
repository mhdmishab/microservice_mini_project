import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoutes';
import { dbConnection } from './dbConfig/dbConfig';


const app = express();

app.use(bodyParser.json());

dbConnection();
app.use('/users',userRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
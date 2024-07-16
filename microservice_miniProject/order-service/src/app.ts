import express from 'express';
import ordreRoute from './routes/ordreRoute';
import { dbConnection } from './config/dbConfig';

const app = express();
app.use(express.json()); 
dbConnection();

app.use('/orders',ordreRoute);

app.listen(3000,()=>{
    console.log("order Service is lisenting on 3000")
})

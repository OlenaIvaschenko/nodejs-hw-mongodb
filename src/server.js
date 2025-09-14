import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from "dotenv";


export const setupServer = ()=>{
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.use(
  pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
);

app.use(cors());

app.use((req, res, next) => {
  res.status(404).json({ status: 404, message: 'Not found' });
});

dotenv.config();

}
 export default setupServer;
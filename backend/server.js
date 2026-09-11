import express from 'express';
import cors from 'cors';
import apiRouter from './routes/api.js'; 


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', apiRouter); 


const PORT = 3000;
app.listen(PORT, function() {
    console.log(`Server running on http://localhost:${PORT}`);
});
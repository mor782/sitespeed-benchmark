import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;
app.listen(PORT, function() {
    console.log(`Server running on http://localhost:${PORT}`);
});
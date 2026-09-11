import { runPerformanceTests } from '../services/sitespeedRunner.mock.js';
import express from 'express';


const router = express.Router();

router.post('/run', async function(req, res) {
    const urls = req.body.urls;
    const results = await runPerformanceTests(urls);
    res.json({ results: results });
});

export default router;
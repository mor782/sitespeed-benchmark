import { runPerformanceTests } from '../services/sitespeedRunner.mock.js';
import { saveResults } from '../services/historyService.js';
import express from 'express';


const router = express.Router();

router.post('/run', async function(req, res) {
    const urls = req.body.urls;
    const results = await runPerformanceTests(urls);
    saveResults(results);
    res.json({ results: results });
});

export default router;
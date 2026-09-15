import { runPerformanceTests } from '../services/sitespeedRunner.js';
import express from 'express';
import { saveResults, getHistoryForUrl } from '../services/historyService.js';

const router = express.Router();

router.post('/run', async function (req, res) {
    const urls = req.body.urls;
    const results = await runPerformanceTests(urls);
    saveResults(results);
    res.json({ results: results });
});

router.get('/history', function (req, res) {
    const url = req.query.url;
    const history = getHistoryForUrl(url);
    res.json({ history: history });
});

export default router;


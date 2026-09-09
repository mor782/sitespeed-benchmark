import { runPerformanceTests } from './sitespeedRunner.js';

const results = await runPerformanceTests(['https://www.sitespeed.io', 'https://example.com']);
console.log(results);
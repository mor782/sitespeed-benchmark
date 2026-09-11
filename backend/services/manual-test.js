// import { runPerformanceTests } from './sitespeedRunner.js';
import runPerformanceTests from './sitespeedRunner.mock.js';

const results = await runPerformanceTests(['https://www.sitespeed.io', 'https://example.com']);
console.log(results);
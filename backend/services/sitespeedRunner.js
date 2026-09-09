import { BrowsertimeEngine, browserScripts } from 'browsertime';

const engine = new BrowsertimeEngine({ browser: 'chrome', headless: true });

export async function runPerformanceTests(urls) {
    await engine.start();
    const scriptCategories = await browserScripts.allScriptCategories();
    let scriptsByCategory = await browserScripts.getScriptsForCategories(scriptCategories);

    const results = [];
    for (const url of urls) {
        const runResult = await engine.run(url, scriptsByCategory);
        console.log(JSON.stringify(runResult, null, 2));
        const summary = {
            url: url,
            ttfb: runResult[0].statistics.googleWebVitals.ttfb.median,
            lcp: runResult[0].statistics.googleWebVitals.largestContentfulPaint.median,
            totalTime: runResult[0].statistics.timings.fullyLoaded.median
        }
        results.push(summary);
    }

    await engine.stop();
    return results;
}



import * as sitespeed from 'sitespeed.io';
import fs from 'fs';

const urlsText = fs.readFileSync('./urls.json', 'utf8');
const urls = JSON.parse(urlsText);

sitespeed.run({
    urls: urls,
    verbose: true,
    browser: 'chrome',
    browsertime: { visualMetrics: false }

}).then((result) => {console.log("Finished running tests!"); 
    const summary = result.browsertime.map((page) => ({
        url: page[0].info.url,
        ttfb: page[0].timings.ttfb,
        lcp: page[0].timings.googleWebVitals?.largestContentfulPaint,
        totalTime: page[0].timings.fullyLoaded
    }));
    fs.writeFileSync('./summary.json', JSON.stringify(summary, null, 2));
});




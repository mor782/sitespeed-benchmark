import * as sitespeed from 'sitespeed.io';

sitespeed.run({
    urls: ['https://www.google.com', 'https://www.wikipedia.org'],
    verbose: true,
    browser: 'chrome',
    browsertime: { visualMetrics: false }

}).then((result) => { console.log("Finished running tests!", result) });
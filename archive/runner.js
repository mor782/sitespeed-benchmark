import * as sitespeed from 'sitespeed.io';
import fs from 'fs';

const urlsText = fs.readFileSync('./urls.json', 'utf8');
const urls = JSON.parse(urlsText);

sitespeed.run({
    urls: urls,
    verbose: true,
    browser: 'chrome',
    browsertime: { visualMetrics: false, headless: true },
    plugins: {
        remove: ['html']
    }

}).then((result) => {
    console.log("Finished running tests!");
    console.log(JSON.stringify(result, null, 2))
});

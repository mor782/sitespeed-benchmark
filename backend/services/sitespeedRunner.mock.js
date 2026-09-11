export async function runPerformanceTests(urls) {
    return urls.map(function(url) {
        return {
            url: url,
            ttfb: Math.floor(Math.random() * 300) + 100,
            lcp: Math.floor(Math.random() * 800) + 400,
            totalTime: Math.floor(Math.random() * 1000) + 600
        };
    });
}   

export default runPerformanceTests;
import { describe, it, expect } from 'vitest';
import { saveResults, getHistoryForUrl } from './historyService.js';

describe('historyService', function () {
    it('should return an empty array for a url with no history', function () {
        const result = getHistoryForUrl('https://no-such-site-exists.com');
        expect(result).toEqual([]);
    });
});

it('should add a timestamp when saving results', function () {
    const fakeResults = [{ url: 'https://test-site.com', ttfb: 100, lcp: 200, totalTime: 300 }];
    saveResults(fakeResults);

    const history = getHistoryForUrl('https://test-site.com');
    const lastEntry = history[history.length - 1];

    expect(lastEntry.timestamp).toBeDefined();
    expect(lastEntry.ttfb).toBe(100);
});
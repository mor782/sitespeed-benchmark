import fs from 'fs';

const HISTORY_PATH = './data/history.json';

export function saveResults(results) {
    let existingHistory;
    try {
        existingHistory = JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf8'));
    } catch (error) {
        existingHistory = [];
    }
    
    const timestamp = new Date().toISOString();
    const newEntries = results.map(function(result) {
        return { ...result, timestamp: timestamp };
    });
    
    const updatedHistory = existingHistory.concat(newEntries);
    fs.writeFileSync(HISTORY_PATH, JSON.stringify(updatedHistory, null, 2));
}
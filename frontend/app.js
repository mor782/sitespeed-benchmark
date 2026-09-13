const urlInput = document.getElementById('urlInput');
const addButton = document.getElementById('addButton');
const urlList = document.getElementById('urlList');
const runButton = document.getElementById('runButton');


console.log('app.js loaded!');

addButton.addEventListener('click', function() {
    const url = urlInput.value.trim();
    if(url === ''){
        return;
    }
    const newItem = document.createElement('li');
    newItem.textContent = url;
    newItem.dataset.url = url;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    
    deleteButton.addEventListener('click', function(){
        newItem.remove();
    })

    newItem.appendChild(deleteButton);
    urlList.appendChild(newItem);
    urlInput.value = '';
})

function getAllUrls() {
    const liElements = urlList.querySelectorAll('li');
    const urls = [];
    for (const li of liElements) {
        urls.push(li.dataset.url);
    }
    return urls;
}

const resultsBody = document.getElementById('resultsBody');

function displayResults(results) {
    resultsBody.innerHTML = '';
    for (const result of results) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.url}</td>
            <td>${result.ttfb}</td>
            <td>${result.lcp}</td>
            <td>${result.totalTime}</td>
        `;
        resultsBody.appendChild(row);
    }
}

let chart;

function displayChart(results) {
    const labels = results.map(r => r.url);
    const lcpValues = results.map(r => r.lcp);
    if (chart) {
        chart.destroy();
    }
    const ctx = document.getElementById('comparisonChart');
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'LCP (ms)',
                data: lcpValues
            }]
        }
    });
}

runButton.addEventListener('click', async function() {
    const urls = getAllUrls();
    
    try {
        const response = await fetch('http://localhost:3000/api/run', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ urls: urls })
        });
        const data = await response.json();
        displayResults(data.results);
        displayChart(data.results);
    } catch (error) {
        console.log('FETCH FAILED:', error.message);
    }
});
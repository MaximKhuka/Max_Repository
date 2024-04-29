// *** task1 ***

let vote = document.getElementById('vote');

vote.addEventListener('click', function() {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

    ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.readyState === XMLHttpRequest.DONE && ajaxRequest.status === 200) {
            const currentDate = new Date().toLocaleString('en-US', { timeZoneName: 'short' });
            vote.innerHTML = `Your vote is accepted: ${currentDate}`;
        } else if (ajaxRequest.readyState === XMLHttpRequest.DONE) {
            console.error('Request failed:', ajaxRequest.status);
        }
    };

    ajaxRequest.send();
});





// *** task2 ***

let books = document.getElementById('books');

books.addEventListener('click', function() {
    fetch('https://freetestapi.com/api/v1/books?limit=4')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const ulList = document.createElement('ul');
        data.forEach(function(element) {
            const li = document.createElement('li');
            li.textContent = element.author;
            ulList.appendChild(li);
        });
        document.body.appendChild(ulList);
    });
});
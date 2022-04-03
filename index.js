var searchBtn = document.querySelector('#searchBtn');
var resultCon = document.querySelector('#resultCon');

// getting user input
const getSearchTerm = () => {
    var searchTerm = document.querySelector('#searchTerm').value;
    return searchTerm;
}


// adding on click event to the button
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    var userInput = getSearchTerm();

    // creating the fetchGif function which will contain the API
    const fetchGif = async (searchQuery) => {
        var apiKey = 'SZ4WkzrhwxQvvmYvs2YxYwYzEBsfNdj1';

        const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=SZ4WkzrhwxQvvmYvs2YxYwYzEBsfNdj1&q=" + searchQuery);

        if (response.status === 200) {
            data = response.json();
        } else {
            data = "Oops, something went wrong"
        }
        return data;
    };


    const getData = fetchGif(userInput)
        .then(data => {
            // console.log(data.data.images)
            data = data.data;

            for (let i = 0; i < data.length; i++) {
                console.log(data[i].images.fixed_height.url);

                // resultCon.innerHTML = '';

                var resultChild = document.createElement('img');
                resultChild.classList.add('resultChild');
                resultChild.setAttribute('src', '');
                resultCon.appendChild(resultChild);

                var img = data[i].images.fixed_height.url;

                resultChild.src = img;
                resultChild.href = img;
            };
        });

        getData();


});



var apiKey = 'SZ4WkzrhwxQvvmYvs2YxYwYzEBsfNdj1';
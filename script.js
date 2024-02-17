// Fetching data from the API
fetch('https://dogs-care.onrender.com/api/dogs_care')
    .then(response => response.json())
    .then(data => {
        // Assuming data is an array with a single object containing the required properties
        const imageData = data[0];
        const bgImageUrl = imageData.image1;
        const dogImageUrl = imageData.image2;
        const dogImageUrl3 = imageData.image3;
        const title = imageData.text_title;
        const summary = imageData.text_summary;

        // Updating DOM elements with fetched data
        const bgImage = document.getElementById('bgImage');
        const dogImage = document.getElementById('dogImage');
        const dogImage1 = document.getElementById('dogImage1')
        bgImage.src = bgImageUrl;
        dogImage.src = dogImageUrl;
        dogImage1.src= dogImageUrl3;
        

        const titleElement = document.getElementById('title');
        const summaryElement = document.getElementById('summary');
        titleElement.textContent = title;
        summaryElement.textContent = summary;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

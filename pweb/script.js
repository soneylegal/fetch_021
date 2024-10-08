function fetchImage(buttonId, imageId, pId, apiUrl, message) {
    document.querySelector(buttonId).addEventListener("click", function () {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json();
            })
            .then(data => {
                document.querySelector(imageId).src = data.url;
                document.querySelector(pId).textContent = message;
                console.log(data);
            })
            .catch(error => console.error('Erro:', error));
    });
}

fetchImage("#botao1", "#image1", "#p1", 'https://api.thecatapi.com/v1/images/0XYvRd7oD', "Gato mané");
fetchImage("#botao2", "#image2", "#p2", 'https://api.thecatapi.com/v1/images/0XYvRd7oD', "Gato legal");
fetchImage("#botao3", "#image3", "#p3", 'https://api.thecatapi.com/v1/images/0XYvRd7oD', "Gato massa");
fetchImage("#botao4", "#image4", "#p4", 'https://api.thecatapi.com/v1/images/0XYvRd7oD', "Gato brabo");

const cards = document.getElementsByClassName("container-personagem"); // array

const numeroMaximoDePersonagens = 671;

generateRandomNumber = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
};

getCharacter = () => {
    for (let i = 0; i < cards.length; i++) {
        // percorre o array
        const id = generateRandomNumber();

        fetch(`https://rickandmortyapi.com/api/character/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                /* Cria a imagem e adiciona a url a propriedade src */
                let imagem = document.createElement("img");
                imagem.src = data.image;

                /* Cria o H2 e o texto */
                let nome = document.createElement("h2");
                let text = document.createTextNode(data.name);
                nome.appendChild(text); // adiciona o texto no h2

                cards[i].appendChild(imagem); // adiciona a imagem no card
                cards[i].appendChild(nome); // adiciona o texto no card
            });
    }
};

getCharacter();

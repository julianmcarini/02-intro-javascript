
//fetch API

const apiKey = 'niARFUGocRUm0g3B2rJr00lBJj5UC5Lq';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then(resp => {
//     console.log(resp)
//     resp.json().then(data => {
//         console.log(data);
//     })
// })
// .catch(console.warn);

//Las peticiones pueden encadenarse.

peticion.then(resp => resp.json())
.then(({data}) => {
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);


})
.catch(console.warn);
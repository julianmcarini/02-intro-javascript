 //ASYNC

//  const getImagePromesa = () => {
//      const promesa = new Promise((resolve, reject) => {
//          resolve('https://asdaasdsd.com')
//      })

//      return promesa;
//  };

//  getImagePromesa().then(console.log);



// const getImagePromesa = () =>
//     new Promise(resolve =>
//         resolve('https://asdaasdsd.com'));

// getImagePromesa().then(console.log);


const getImage = async() => {

    try {
        
        const apiKey = 'niARFUGocRUm0g3B2rJr00lBJj5UC5Lq';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        console.log(data);
        const img = document.createElement('img');
        img.src = data.images.original.url;
        console.log(img)
        document.body.append(img);
        
    } catch (error) {
        console.error(error);
    }
    
};

getImage();


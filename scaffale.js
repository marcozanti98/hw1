function mybooks(){
    fetch("mybooks.php").then(mybookResponse).then(mybooksJson);
}


function mybookResponse(response) {
    if (!response.ok) {return null};
    return response.json();
}


function mybooksJson(json){

    console.log(json);
    if (!json.length) {
        noResults();
         return;  }

    const container = document.getElementById('results-scaffale');
    container.innerHTML = '';   

    for(let i in json){
        const spazio_libro= document.createElement('div');
        spazio_libro.classList.add('spazio_libro');        

        const img = document.createElement('img');
        img.classList.add('book-image');
        img.src=json[i].content.img;
        spazio_libro.appendChild(img);

        const title= document.createElement('span');
        title.classList.add('class-title');
        title.innerHTML=json[i].content.title;
        spazio_libro.appendChild(title);

        const addFavourite = document.createElement('div');
        addFavourite.classList.add('addFavourite');
        spazio_libro.appendChild(addFavourite);
        
        const textFavourite = document.createElement('span');
        textFavourite.textContent='Rimuovi dallo scaffale';

        const immagine = document.createElement('img');
        immagine.src="remove.png";
        immagine.classList.add('plus-image');

        immagine.addEventListener("click", removeFavourite);
        
        addFavourite.appendChild(textFavourite);
        addFavourite.appendChild(immagine);

        container.appendChild(spazio_libro);

      container.classList.add('scrolling-div');
      container.addEventListener('mousemove', scorriLibri);         

    }
}

function scorriLibri(event) {
    const div = event.currentTarget.parentNode;  
    const book_scroll = div.querySelector('#results-scaffale');
    const speed = event.clientY / div.offsetHeight * 5;
    book_scroll.style.transform = `translateY(-${div.scrollTop}px)`;
    book_scroll.style.transition = `transform ${speed}s linear`;
  }
  

function removeFavourite(event){
    const selectDiv = event.currentTarget.parentNode;
    const x= selectDiv.parentNode;

    const title=x.querySelector('.class-title').textContent;

    fetch("removeFavourite.php?title=" + encodeURIComponent(title)).then(searchResponse);

    x.classList.add('hidden');    
    
}

function searchResponse(response){
    console.log(response);
    return response.json();
}

function noResults() {
    // Definisce il comportamento nel caso in cui non ci siano contenuti da mostrare
    const container = document.getElementById('results');
    container.innerHTML = '';

    const nores = document.createElement('div');
    nores.className = "nores";
    nores.textContent = "Il tuo scaffale è vuoto :(";
    container.appendChild(nores);
  }

  mybooks();
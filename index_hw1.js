fetch("gialli.php").then(onResponse).then(onJsonGialli);
fetch("narrativa.php").then(onResponse).then(onJsonNarrativa);
fetch("fantasy.php").then(onResponse).then(onJsonFantasy);
fetch("rosa.php").then(onResponse).then(onJsonRosa);
fetch("poesia.php").then(onResponse).then(onJsonPoesia);
fetch("scienza.php").then(onResponse).then(onJsonScienza);
fetch("storia.php").then(onResponse).then(onJsonStoria);


function onResponse(response){
    console.log(response);
    return response.json();
}
function onJsonStoria(json){  
    console.log('JSON libri ricevuto');
    console.log(json);
  
    const library = document.querySelector('.libriStoria-vetrina');
  
    library.innerHTML = '';
  
    const array_libri = json.items;
  
    // Controllo se esistono dei libri
    if (!array_libri || array_libri.length === 0) {
      alert("Nessun libro trovato (ricorda di inserire il nome dell'autore) :(");
    } else {
      for (let i = 0; i < array_libri.length; i++) {
        const libro = array_libri[i];
  
        // Controllo se ci sono sia il titolo che l'immagine del libro
        if (!libro.volumeInfo.imageLinks || !libro.volumeInfo.title) {
          continue;
        }
  
        const libro_img = libro.volumeInfo.imageLinks.thumbnail;
        const libro_titolo = libro.volumeInfo.title;
        // Creo il div che conterrà l'immagine e il titolo del libro
        const spazio_img_libro = document.createElement('div');
        spazio_img_libro.classList.add('spazio_libro');
        // Creo l'immagine
        const img = document.createElement('img');
        img.classList.add('book-image');
        img.src = libro_img;
        // Creo titolo ed info
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('addFavourite');
        const title = document.createElement('span');
        title.classList.add('class-title');
        title.textContent = libro_titolo;
        const info=document.createElement('img');
        info.classList.add('info-image');
        info.src="info.png";        
        info.addEventListener("click", blockAll); 
        //creo il bottone per salvare il libro
        const addFavourite = document.createElement('div');
        addFavourite.classList.add('addFavourite');
        const textFavourite = document.createElement('span');
        textFavourite.textContent='Aggiungi allo scaffale';           
        const immagine = document.createElement('img');
        immagine.src="plus.png";
        immagine.classList.add('plus-image');
        immagine.addEventListener("click", blockAll); 
        // Aggiungo tutto al container
        spazio_img_libro.appendChild(img);
        bookInfo.appendChild(info);
        bookInfo.appendChild(title);
        spazio_img_libro.appendChild(bookInfo);
        spazio_img_libro.appendChild(addFavourite);     
        addFavourite.appendChild(textFavourite);
        addFavourite.appendChild(immagine);
  
        // Aggiungo il div alla libreria
        library.appendChild(spazio_img_libro);  
        library.classList.add('scrolling-div-vetrina');
        library.addEventListener('mousemove', scorriStoria);    
      }
    }
  }
  function onJsonPoesia(json){  
    console.log('JSON libri ricevuto');
    console.log(json);
  
    const library = document.querySelector('.libriPoesia-vetrina');
  
    library.innerHTML = '';
  
    const array_libri = json.items;
  
    // Controllo se esistono dei libri
    if (!array_libri || array_libri.length === 0) {
      alert("Nessun libro trovato (ricorda di inserire il nome dell'autore) :(");
    } else {
      for (let i = 0; i < array_libri.length; i++) {
        const libro = array_libri[i];
  
        // Controllo se ci sono sia il titolo che l'immagine del libro
        if (!libro.volumeInfo.imageLinks || !libro.volumeInfo.title) {
          continue;
        }
  
        const libro_img = libro.volumeInfo.imageLinks.thumbnail;
        const libro_titolo = libro.volumeInfo.title;
        // Creo il div che conterrà l'immagine e il titolo del libro
        const spazio_img_libro = document.createElement('div');
        spazio_img_libro.classList.add('spazio_libro');
        // Creo l'immagine
        const img = document.createElement('img');
        img.classList.add('book-image');
        img.src = libro_img;
        // Creo titolo ed info
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('addFavourite');
        const title = document.createElement('span');
        title.classList.add('class-title');
        title.textContent = libro_titolo;
        const info=document.createElement('img');
        info.classList.add('info-image');
        info.src="info.png";        
        info.addEventListener("click", blockAll); 
        //creo il bottone per salvare il libro
        const addFavourite = document.createElement('div');
        addFavourite.classList.add('addFavourite');
        const textFavourite = document.createElement('span');
        textFavourite.textContent='Aggiungi allo scaffale';           
        const immagine = document.createElement('img');
        immagine.src="plus.png";
        immagine.classList.add('plus-image');
        immagine.addEventListener("click", blockAll); 
        // Aggiungo tutto al container
        spazio_img_libro.appendChild(img);
        bookInfo.appendChild(info);
        bookInfo.appendChild(title);
        spazio_img_libro.appendChild(bookInfo);
        spazio_img_libro.appendChild(addFavourite);     
        addFavourite.appendChild(textFavourite);
        addFavourite.appendChild(immagine);
  
        // Aggiungo il div alla libreria
        library.appendChild(spazio_img_libro);  
        library.classList.add('scrolling-div-vetrina');
        library.addEventListener('mousemove', scorriPoesia);    
      }
    }
  }
  function onJsonGialli(json){  
    console.log('JSON libri ricevuto');
    console.log(json);
  
    const library = document.querySelector('.libriGialli-vetrina');
  
    library.innerHTML = '';
  
    const array_libri = json.items;
  
    // Controllo se esistono dei libri
    if (!array_libri || array_libri.length === 0) {
      alert("Nessun libro trovato (ricorda di inserire il nome dell'autore) :(");
    } else {
      for (let i = 0; i < array_libri.length; i++) {
        const libro = array_libri[i];
  
        // Controllo se ci sono sia il titolo che l'immagine del libro
        if (!libro.volumeInfo.imageLinks || !libro.volumeInfo.title) {
          continue;
        }
  
        const libro_img = libro.volumeInfo.imageLinks.thumbnail;
        const libro_titolo = libro.volumeInfo.title;
        // Creo il div che conterrà l'immagine e il titolo del libro
        const spazio_img_libro = document.createElement('div');
        spazio_img_libro.classList.add('spazio_libro');
        // Creo l'immagine
        const img = document.createElement('img');
        img.classList.add('book-image');
        img.src = libro_img;
        // Creo titolo ed info
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('addFavourite');
        const title = document.createElement('span');
        title.classList.add('class-title');
        title.textContent = libro_titolo;
        const info=document.createElement('img');
        info.classList.add('info-image');
        info.src="info.png";        
        info.addEventListener("click", blockAll); 
        //creo il bottone per salvare il libro
        const addFavourite = document.createElement('div');
        addFavourite.classList.add('addFavourite');
        const textFavourite = document.createElement('span');
        textFavourite.textContent='Aggiungi allo scaffale';           
        const immagine = document.createElement('img');
        immagine.src="plus.png";
        immagine.classList.add('plus-image');
        immagine.addEventListener("click", blockAll); 
        // Aggiungo tutto al container
        spazio_img_libro.appendChild(img);
        bookInfo.appendChild(info);
        bookInfo.appendChild(title);
        spazio_img_libro.appendChild(bookInfo);
        spazio_img_libro.appendChild(addFavourite);     
        addFavourite.appendChild(textFavourite);
        addFavourite.appendChild(immagine);
  
        // Aggiungo il div alla libreria
        library.appendChild(spazio_img_libro);  
        library.classList.add('scrolling-div-vetrina');
        library.addEventListener('mousemove', scorriGialli);    
      }
    }
  }
  function onJsonScienza(json){  
    console.log('JSON libri ricevuto');
    console.log(json);
  
    const library = document.querySelector('.libriScienza-vetrina');
  
    library.innerHTML = '';
  
    const array_libri = json.items;
  
    // Controllo se esistono dei libri
    if (!array_libri || array_libri.length === 0) {
      alert("Nessun libro trovato (ricorda di inserire il nome dell'autore) :(");
    } else {
      for (let i = 0; i < array_libri.length; i++) {
        const libro = array_libri[i];
  
        // Controllo se ci sono sia il titolo che l'immagine del libro
        if (!libro.volumeInfo.imageLinks || !libro.volumeInfo.title) {
          continue;
        }
  
        const libro_img = libro.volumeInfo.imageLinks.thumbnail;
        const libro_titolo = libro.volumeInfo.title;
        // Creo il div che conterrà l'immagine e il titolo del libro
        const spazio_img_libro = document.createElement('div');
        spazio_img_libro.classList.add('spazio_libro');
        // Creo l'immagine
        const img = document.createElement('img');
        img.classList.add('book-image');
        img.src = libro_img;
        // Creo titolo ed info
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('addFavourite');
        const title = document.createElement('span');
        title.classList.add('class-title');
        title.textContent = libro_titolo;
        const info=document.createElement('img');
        info.classList.add('info-image');
        info.src="info.png";        
        info.addEventListener("click", blockAll); 
        //creo il bottone per salvare il libro
        const addFavourite = document.createElement('div');
        addFavourite.classList.add('addFavourite');
        const textFavourite = document.createElement('span');
        textFavourite.textContent='Aggiungi allo scaffale';           
        const immagine = document.createElement('img');
        immagine.src="plus.png";
        immagine.classList.add('plus-image');
        immagine.addEventListener("click", blockAll); 
        // Aggiungo tutto al container
        spazio_img_libro.appendChild(img);
        bookInfo.appendChild(info);
        bookInfo.appendChild(title);
        spazio_img_libro.appendChild(bookInfo);
        spazio_img_libro.appendChild(addFavourite);     
        addFavourite.appendChild(textFavourite);
        addFavourite.appendChild(immagine);
  
        // Aggiungo il div alla libreria
        library.appendChild(spazio_img_libro);  
        library.classList.add('scrolling-div-vetrina');
        library.addEventListener('mousemove', scorriScienza);    
      }
    }
  }
  function onJsonRosa(json){  
    console.log('JSON libri ricevuto');
    console.log(json);
  
    const library = document.querySelector('.libriRosa-vetrina');
  
    library.innerHTML = '';
  
    const array_libri = json.items;
  
    // Controllo se esistono dei libri
    if (!array_libri || array_libri.length === 0) {
      alert("Nessun libro trovato (ricorda di inserire il nome dell'autore) :(");
    } else {
      for (let i = 0; i < array_libri.length; i++) {
        const libro = array_libri[i];
  
        // Controllo se ci sono sia il titolo che l'immagine del libro
        if (!libro.volumeInfo.imageLinks || !libro.volumeInfo.title) {
          continue;
        }
  
        const libro_img = libro.volumeInfo.imageLinks.thumbnail;
        const libro_titolo = libro.volumeInfo.title;
        // Creo il div che conterrà l'immagine e il titolo del libro
        const spazio_img_libro = document.createElement('div');
        spazio_img_libro.classList.add('spazio_libro');
        // Creo l'immagine
        const img = document.createElement('img');
        img.classList.add('book-image');
        img.src = libro_img;
        // Creo titolo ed info
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('addFavourite');
        const title = document.createElement('span');
        title.classList.add('class-title');
        title.textContent = libro_titolo;
        const info=document.createElement('img');
        info.classList.add('info-image');
        info.src="info.png";        
        info.addEventListener("click", blockAll); 
        //creo il bottone per salvare il libro
        const addFavourite = document.createElement('div');
        addFavourite.classList.add('addFavourite');
        const textFavourite = document.createElement('span');
        textFavourite.textContent='Aggiungi allo scaffale';           
        const immagine = document.createElement('img');
        immagine.src="plus.png";
        immagine.classList.add('plus-image');
        immagine.addEventListener("click", blockAll); 
        // Aggiungo tutto al container
        spazio_img_libro.appendChild(img);
        bookInfo.appendChild(info);
        bookInfo.appendChild(title);
        spazio_img_libro.appendChild(bookInfo);
        spazio_img_libro.appendChild(addFavourite);     
        addFavourite.appendChild(textFavourite);
        addFavourite.appendChild(immagine);
  
        // Aggiungo il div alla libreria
        library.appendChild(spazio_img_libro);  
        library.classList.add('scrolling-div-vetrina');
        library.addEventListener('mousemove', scorriRosa);    
      }
    }
  }
  function onJsonFantasy(json){  
    console.log('JSON libri ricevuto');
    console.log(json);
  
    const library = document.querySelector('.libriFantasy-vetrina');
  
    library.innerHTML = '';
  
    const array_libri = json.items;
  
    // Controllo se esistono dei libri
    if (!array_libri || array_libri.length === 0) {
      alert("Nessun libro trovato (ricorda di inserire il nome dell'autore) :(");
    } else {
      for (let i = 0; i < array_libri.length; i++) {
        const libro = array_libri[i];
  
        // Controllo se ci sono sia il titolo che l'immagine del libro
        if (!libro.volumeInfo.imageLinks || !libro.volumeInfo.title) {
          continue;
        }
  
        const libro_img = libro.volumeInfo.imageLinks.thumbnail;
        const libro_titolo = libro.volumeInfo.title;
        // Creo il div che conterrà l'immagine e il titolo del libro
        const spazio_img_libro = document.createElement('div');
        spazio_img_libro.classList.add('spazio_libro');
        // Creo l'immagine
        const img = document.createElement('img');
        img.classList.add('book-image');
        img.src = libro_img;
        // Creo titolo ed info
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('addFavourite');
        const title = document.createElement('span');
        title.classList.add('class-title');
        title.textContent = libro_titolo;
        const info=document.createElement('img');
        info.classList.add('info-image');
        info.src="info.png";        
        info.addEventListener("click", blockAll); 
        //creo il bottone per salvare il libro
        const addFavourite = document.createElement('div');
        addFavourite.classList.add('addFavourite');
        const textFavourite = document.createElement('span');
        textFavourite.textContent='Aggiungi allo scaffale';           
        const immagine = document.createElement('img');
        immagine.src="plus.png";
        immagine.classList.add('plus-image');
        immagine.addEventListener("click", blockAll); 
        // Aggiungo tutto al container
        spazio_img_libro.appendChild(img);
        bookInfo.appendChild(info);
        bookInfo.appendChild(title);
        spazio_img_libro.appendChild(bookInfo);
        spazio_img_libro.appendChild(addFavourite);     
        addFavourite.appendChild(textFavourite);
        addFavourite.appendChild(immagine);
  
        // Aggiungo il div alla libreria
        library.appendChild(spazio_img_libro);  
        library.classList.add('scrolling-div-vetrina');
        library.addEventListener('mousemove', scorriFantasy);    
      }
    }
  }
  function onJsonNarrativa(json){  
    console.log('JSON libri ricevuto');
    console.log(json);
  
    const library = document.querySelector('.libriNarrativa-vetrina');
  
    library.innerHTML = '';
  
    const array_libri = json.items;
  
    // Controllo se esistono dei libri
    if (!array_libri || array_libri.length === 0) {
      alert("Nessun libro trovato (ricorda di inserire il nome dell'autore) :(");
    } else {
      for (let i = 0; i < array_libri.length; i++) {
        const libro = array_libri[i];
  
        // Controllo se ci sono sia il titolo che l'immagine del libro
        if (!libro.volumeInfo.imageLinks || !libro.volumeInfo.title) {
          continue;
        }
  
        const libro_img = libro.volumeInfo.imageLinks.thumbnail;
        const libro_titolo = libro.volumeInfo.title;
        // Creo il div che conterrà l'immagine e il titolo del libro
        const spazio_img_libro = document.createElement('div');
        spazio_img_libro.classList.add('spazio_libro');
        // Creo l'immagine
        const img = document.createElement('img');
        img.classList.add('book-image');
        img.src = libro_img;
        // Creo titolo ed info
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('addFavourite');
        const title = document.createElement('span');
        title.classList.add('class-title');
        title.textContent = libro_titolo;
        const info=document.createElement('img');
        info.classList.add('info-image');
        info.src="info.png";        
        info.addEventListener("click", blockAll); 
        //creo il bottone per salvare il libro
        const addFavourite = document.createElement('div');
        addFavourite.classList.add('addFavourite');
        const textFavourite = document.createElement('span');
        textFavourite.textContent='Aggiungi allo scaffale';           
        const immagine = document.createElement('img');
        immagine.src="plus.png";
        immagine.classList.add('plus-image');
        immagine.addEventListener("click", blockAll); 
        // Aggiungo tutto al container
        spazio_img_libro.appendChild(img);
        bookInfo.appendChild(info);
        bookInfo.appendChild(title);
        spazio_img_libro.appendChild(bookInfo);
        spazio_img_libro.appendChild(addFavourite);     
        addFavourite.appendChild(textFavourite);
        addFavourite.appendChild(immagine);
  
        // Aggiungo il div alla libreria
        library.appendChild(spazio_img_libro);  
        library.classList.add('scrolling-div-vetrina');
        library.addEventListener('mousemove', scorriNarrativa);    
      }
    }
  }


  function scorriLibri(event) {
    const div = event.currentTarget.parentNode;  
    const book_scroll = div.querySelector('#results');
    const speed = event.clientY / div.offsetHeight * 5;
    book_scroll.style.transform = `translateY(-${div.scrollTop}px)`;
    book_scroll.style.transition = `transform ${speed}s linear`;
  }  
  function scorriGialli(event) {
    const div = event.currentTarget.parentNode;  
    const book_scroll = div.querySelector('.libriGialli-vetrina');
    const speed = event.clientY / div.offsetHeight * 5;
    book_scroll.style.transform = `translateY(-${div.scrollTop}px)`;
    book_scroll.style.transition = `transform ${speed}s linear`;
  }
  function scorriNarrativa(event) {
    const div = event.currentTarget.parentNode;  
    const book_scroll = div.querySelector('.libriNarrativa-vetrina');
    const speed = event.clientY / div.offsetHeight * 5;
    book_scroll.style.transform = `translateY(-${div.scrollTop}px)`;
    book_scroll.style.transition = `transform ${speed}s linear`;
  }
  function scorriFantasy(event) {
    const div = event.currentTarget.parentNode;  
    const book_scroll = div.querySelector('.libriFantasy-vetrina');
    const speed = event.clientY / div.offsetHeight * 5;
    book_scroll.style.transform = `translateY(-${div.scrollTop}px)`;
    book_scroll.style.transition = `transform ${speed}s linear`;
  }
  function scorriPoesia(event) {
    const div = event.currentTarget.parentNode;  
    const book_scroll = div.querySelector('.libriPoesia-vetrina');
    const speed = event.clientY / div.offsetHeight * 5;
    book_scroll.style.transform = `translateY(-${div.scrollTop}px)`;
    book_scroll.style.transition = `transform ${speed}s linear`;
  }
  function scorriStoria(event) {
    const div = event.currentTarget.parentNode;  
    const book_scroll = div.querySelector('.libriStoria-vetrina');
    const speed = event.clientY / div.offsetHeight * 5;
    book_scroll.style.transform = `translateY(-${div.scrollTop}px)`;
    book_scroll.style.transition = `transform ${speed}s linear`;
  }
  function scorriScienza(event) {
    const div = event.currentTarget.parentNode;  
    const book_scroll = div.querySelector('.libriScienza-vetrina');
    const speed = event.clientY / div.offsetHeight * 5;
    book_scroll.style.transform = `translateY(-${div.scrollTop}px)`;
    book_scroll.style.transition = `transform ${speed}s linear`;
  }
  function scorriRosa(event) {
    const div = event.currentTarget.parentNode;  
    const book_scroll = div.querySelector('.libriRosa-vetrina');
    const speed = event.clientY / div.offsetHeight * 5;
    book_scroll.style.transform = `translateY(-${div.scrollTop}px)`;
    book_scroll.style.transition = `transform ${speed}s linear`;
  }

function blockAll(){       
      
        //seleziono la modale dall'html e la mostro
        const modal=document.getElementById('modal-view');  
        document.body.classList.add('no-scroll');
        modal.style.top= window.pageYOffset + 'px';
      
        //creo il contenitore all'interno dalla modale dove mostrare le info
        const modal_box=document.createElement('div');
        modal_box.classList.add('modal-block');
        modal.appendChild(modal_box);

        const span_block=document.createElement('span');
        span_block.textContent="Effettua l'accesso per utilizzare le funzioni di LetteralMente";
        modal_box.appendChild(span_block);

        const accedi= document.createElement('a');
        accedi.setAttribute('href','accesso.php');
        accedi.textContent='Accedi';
        modal_box.appendChild(accedi);

        const iscriviti= document.createElement('a');
        iscriviti.setAttribute('href','iscriviti.php');
        iscriviti.textContent='Registrati';
        modal_box.appendChild(iscriviti);      
              
      
        modal.classList.remove('hidden');
}



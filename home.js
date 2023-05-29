fetch("gialli.php").then(searchResponse).then(onJsonGialli);
fetch("narrativa.php").then(searchResponse).then(onJsonNarrativa);
fetch("fantasy.php").then(searchResponse).then(onJsonFantasy);
fetch("rosa.php").then(searchResponse).then(onJsonRosa);
fetch("poesia.php").then(searchResponse).then(onJsonPoesia);
fetch("scienza.php").then(searchResponse).then(onJsonScienza);
fetch("storia.php").then(searchResponse).then(onJsonStoria);

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
      info.addEventListener("click", modalBook); 
      //creo il bottone per salvare il libro
      const addFavourite = document.createElement('div');
      addFavourite.classList.add('addFavourite');
      const textFavourite = document.createElement('span');
      textFavourite.textContent='Aggiungi allo scaffale';           
      const immagine = document.createElement('img');
      immagine.src="plus.png";
      immagine.classList.add('plus-image');
      immagine.addEventListener("click", saveFavourite); 
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

      const hiddenInfo=document.createElement('div');
      hiddenInfo.classList.add('hidden');
      
      //lingua
      if (libro.volumeInfo.language) {        
      const lingua=document.createElement('p');
      lingua.classList.add('lingua');
      lingua.textContent=libro.volumeInfo.language;
      hiddenInfo.appendChild(lingua);
      } else {
        const notlang=document.createElement('span');
        notlang.classList.add('lingua');
        notlang.textContent='Informazione non disponibile';   
        hiddenInfo.appendChild(notlang);     
      }        
      
      //prezzo
      if (libro.saleInfo && libro.saleInfo.listPrice && 
        libro.saleInfo.listPrice.amount) {
        
        const prezzo = document.createElement('span');
        prezzo.classList.add('prezzo');
        prezzo.textContent = libro.saleInfo.listPrice.amount;
        hiddenInfo.appendChild(prezzo);
        
      } else {
        const notprice=document.createElement('span');
        notprice.textContent='Informazione non disponibile';  
        notprice.classList.add('prezzo');
        hiddenInfo.appendChild(notprice);       
      }

      //valuta
      if(libro.saleInfo && libro.saleInfo.listPrice && 
        libro.saleInfo.listPrice.currencyCode){

        const valuta = document.createElement('span');
        valuta.classList.add('valuta');
        valuta.textContent = libro.saleInfo.listPrice.currencyCode;
        hiddenInfo.appendChild(valuta);
        }else {
          const notvalue=document.createElement('span');
          notvalue.textContent='Informazione non disponibile';  
          notvalue.classList.add('valuta');
          hiddenInfo.appendChild(notvalue);       
        }     

      //descrizione
      if (libro.volumeInfo.description) {        
      const descrizione=document.createElement('p');
      descrizione.textContent=libro.volumeInfo.description;
      descrizione.classList.add('descrizione');
      hiddenInfo.appendChild(descrizione);
      } else {
        const notdesc=document.createElement('span');
        notdesc.textContent='Informazione non disponibile';  
        notdesc.classList.add('descrizione');
        hiddenInfo.appendChild(notdesc);       
      }   
      
      //casaeditrice      
      if (libro.volumeInfo.publisher) {        
        const casaEditrice=document.createElement('p');
        casaEditrice.textContent=libro.volumeInfo.publisher;
        casaEditrice.classList.add('casaEditrice');
        hiddenInfo.appendChild(casaEditrice);
      } else {
        const notpublisher=document.createElement('span');
        notpublisher.textContent='Informazione non disponibile';
        notpublisher.classList.add('casaEditrice'); 
        hiddenInfo.appendChild(notpublisher);        
      }  

      //pagine
      if (libro.volumeInfo.pageCount) {        
        const pagine=document.createElement('span');
        pagine.classList.add('pagine');
        pagine.textContent=libro.volumeInfo.pageCount;
        hiddenInfo.appendChild(pagine);
      } else {
        const notpage=document.createElement('span');
        notpage.textContent='Informazione non disponibile'; 
        notpage.classList.add('pagine');   
        hiddenInfo.appendChild(notpage);     
      }  

      //pubblicazione
      if (libro.volumeInfo.publishedDate) {        
        const dataPubblicazione=document.createElement('span');
        dataPubblicazione.classList.add('dataPubblicazione');
      dataPubblicazione.textContent=libro.volumeInfo.publishedDate;
      hiddenInfo.appendChild(dataPubblicazione);
      } else {
        const notdate=document.createElement('span');
        notdate.textContent='Informazione non disponibile'; 
        notdate.classList.add('dataPubblicazione');
        hiddenInfo.appendChild(notdate);        
      }    
      
      spazio_img_libro.appendChild(hiddenInfo);

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
      info.addEventListener("click", modalBook); 
      //creo il bottone per salvare il libro
      const addFavourite = document.createElement('div');
      addFavourite.classList.add('addFavourite');
      const textFavourite = document.createElement('span');
      textFavourite.textContent='Aggiungi allo scaffale';           
      const immagine = document.createElement('img');
      immagine.src="plus.png";
      immagine.classList.add('plus-image');
      immagine.addEventListener("click", saveFavourite); 
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

      const hiddenInfo=document.createElement('div');
      hiddenInfo.classList.add('hidden');
      
      //lingua
      if (libro.volumeInfo.language) {        
      const lingua=document.createElement('p');
      lingua.classList.add('lingua');
      lingua.textContent=libro.volumeInfo.language;
      hiddenInfo.appendChild(lingua);
      } else {
        const notlang=document.createElement('span');
        notlang.classList.add('lingua');
        notlang.textContent='Informazione non disponibile';   
        hiddenInfo.appendChild(notlang);     
      }        
      
      //prezzo
      if (libro.saleInfo && libro.saleInfo.listPrice && 
        libro.saleInfo.listPrice.amount) {
        
        const prezzo = document.createElement('span');
        prezzo.classList.add('prezzo');
        prezzo.textContent = libro.saleInfo.listPrice.amount;
        hiddenInfo.appendChild(prezzo);
        
      } else {
        const notprice=document.createElement('span');
        notprice.textContent='Informazione non disponibile';  
        notprice.classList.add('prezzo');
        hiddenInfo.appendChild(notprice);       
      }

      //valuta
      if(libro.saleInfo && libro.saleInfo.listPrice && 
        libro.saleInfo.listPrice.currencyCode){

        const valuta = document.createElement('span');
        valuta.classList.add('valuta');
        valuta.textContent = libro.saleInfo.listPrice.currencyCode;
        hiddenInfo.appendChild(valuta);
        }else {
          const notvalue=document.createElement('span');
          notvalue.textContent='Informazione non disponibile';  
          notvalue.classList.add('valuta');
          hiddenInfo.appendChild(notvalue);       
        }     

      //descrizione
      if (libro.volumeInfo.description) {        
      const descrizione=document.createElement('p');
      descrizione.textContent=libro.volumeInfo.description;
      descrizione.classList.add('descrizione');
      hiddenInfo.appendChild(descrizione);
      } else {
        const notdesc=document.createElement('span');
        notdesc.textContent='Informazione non disponibile';  
        notdesc.classList.add('descrizione');
        hiddenInfo.appendChild(notdesc);       
      }   
      
      //casaeditrice      
      if (libro.volumeInfo.publisher) {        
        const casaEditrice=document.createElement('p');
        casaEditrice.textContent=libro.volumeInfo.publisher;
        casaEditrice.classList.add('casaEditrice');
        hiddenInfo.appendChild(casaEditrice);
      } else {
        const notpublisher=document.createElement('span');
        notpublisher.textContent='Informazione non disponibile';
        notpublisher.classList.add('casaEditrice'); 
        hiddenInfo.appendChild(notpublisher);        
      }  

      //pagine
      if (libro.volumeInfo.pageCount) {        
        const pagine=document.createElement('span');
        pagine.classList.add('pagine');
        pagine.textContent=libro.volumeInfo.pageCount;
        hiddenInfo.appendChild(pagine);
      } else {
        const notpage=document.createElement('span');
        notpage.textContent='Informazione non disponibile'; 
        notpage.classList.add('pagine');   
        hiddenInfo.appendChild(notpage);     
      }  

      //pubblicazione
      if (libro.volumeInfo.publishedDate) {        
        const dataPubblicazione=document.createElement('span');
        dataPubblicazione.classList.add('dataPubblicazione');
      dataPubblicazione.textContent=libro.volumeInfo.publishedDate;
      hiddenInfo.appendChild(dataPubblicazione);
      } else {
        const notdate=document.createElement('span');
        notdate.textContent='Informazione non disponibile'; 
        notdate.classList.add('dataPubblicazione');
        hiddenInfo.appendChild(notdate);        
      }    
      
      spazio_img_libro.appendChild(hiddenInfo);

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
      info.addEventListener("click", modalBook); 
      //creo il bottone per salvare il libro
      const addFavourite = document.createElement('div');
      addFavourite.classList.add('addFavourite');
      const textFavourite = document.createElement('span');
      textFavourite.textContent='Aggiungi allo scaffale';           
      const immagine = document.createElement('img');
      immagine.src="plus.png";
      immagine.classList.add('plus-image');
      immagine.addEventListener("click", saveFavourite); 
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

      const hiddenInfo=document.createElement('div');
      hiddenInfo.classList.add('hidden');
      
      //lingua
      if (libro.volumeInfo.language) {        
      const lingua=document.createElement('p');
      lingua.classList.add('lingua');
      lingua.textContent=libro.volumeInfo.language;
      hiddenInfo.appendChild(lingua);
      } else {
        const notlang=document.createElement('span');
        notlang.classList.add('lingua');
        notlang.textContent='Informazione non disponibile';   
        hiddenInfo.appendChild(notlang);     
      }        
      
      //prezzo
      if (libro.saleInfo && libro.saleInfo.listPrice && 
        libro.saleInfo.listPrice.amount) {
        
        const prezzo = document.createElement('span');
        prezzo.classList.add('prezzo');
        prezzo.textContent = libro.saleInfo.listPrice.amount;
        hiddenInfo.appendChild(prezzo);
        
      } else {
        const notprice=document.createElement('span');
        notprice.textContent='Informazione non disponibile';  
        notprice.classList.add('prezzo');
        hiddenInfo.appendChild(notprice);       
      }

      //valuta
      if(libro.saleInfo && libro.saleInfo.listPrice && 
        libro.saleInfo.listPrice.currencyCode){

        const valuta = document.createElement('span');
        valuta.classList.add('valuta');
        valuta.textContent = libro.saleInfo.listPrice.currencyCode;
        hiddenInfo.appendChild(valuta);
        }else {
          const notvalue=document.createElement('span');
          notvalue.textContent='Informazione non disponibile';  
          notvalue.classList.add('valuta');
          hiddenInfo.appendChild(notvalue);       
        }     

      //descrizione
      if (libro.volumeInfo.description) {        
      const descrizione=document.createElement('p');
      descrizione.textContent=libro.volumeInfo.description;
      descrizione.classList.add('descrizione');
      hiddenInfo.appendChild(descrizione);
      } else {
        const notdesc=document.createElement('span');
        notdesc.textContent='Informazione non disponibile';  
        notdesc.classList.add('descrizione');
        hiddenInfo.appendChild(notdesc);       
      }   
      
      //casaeditrice      
      if (libro.volumeInfo.publisher) {        
        const casaEditrice=document.createElement('p');
        casaEditrice.textContent=libro.volumeInfo.publisher;
        casaEditrice.classList.add('casaEditrice');
        hiddenInfo.appendChild(casaEditrice);
      } else {
        const notpublisher=document.createElement('span');
        notpublisher.textContent='Informazione non disponibile';
        notpublisher.classList.add('casaEditrice'); 
        hiddenInfo.appendChild(notpublisher);        
      }  

      //pagine
      if (libro.volumeInfo.pageCount) {        
        const pagine=document.createElement('span');
        pagine.classList.add('pagine');
        pagine.textContent=libro.volumeInfo.pageCount;
        hiddenInfo.appendChild(pagine);
      } else {
        const notpage=document.createElement('span');
        notpage.textContent='Informazione non disponibile'; 
        notpage.classList.add('pagine');   
        hiddenInfo.appendChild(notpage);     
      }  

      //pubblicazione
      if (libro.volumeInfo.publishedDate) {        
        const dataPubblicazione=document.createElement('span');
        dataPubblicazione.classList.add('dataPubblicazione');
      dataPubblicazione.textContent=libro.volumeInfo.publishedDate;
      hiddenInfo.appendChild(dataPubblicazione);
      } else {
        const notdate=document.createElement('span');
        notdate.textContent='Informazione non disponibile'; 
        notdate.classList.add('dataPubblicazione');
        hiddenInfo.appendChild(notdate);        
      }    
      
      spazio_img_libro.appendChild(hiddenInfo);

    }
  }
}

function onJsonRosa(json){  
  console.log('JSON libri ricevuto');
  console.log(json);

  const library = document.querySelector('.libriRosa-vetrina');

  library.innerHTML = '';

  const array_libri = json.items;  
 
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
      info.addEventListener("click", modalBook); 
      //creo il bottone per salvare il libro
      const addFavourite = document.createElement('div');
      addFavourite.classList.add('addFavourite');
      const textFavourite = document.createElement('span');
      textFavourite.textContent='Aggiungi allo scaffale';           
      const immagine = document.createElement('img');
      immagine.src="plus.png";
      immagine.classList.add('plus-image');
      immagine.addEventListener("click", saveFavourite); 
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

      const hiddenInfo=document.createElement('div');
      hiddenInfo.classList.add('hidden');
      
      //lingua
      if (libro.volumeInfo.language) {        
      const lingua=document.createElement('p');
      lingua.classList.add('lingua');
      lingua.textContent=libro.volumeInfo.language;
      hiddenInfo.appendChild(lingua);
      } else {
        const notlang=document.createElement('span');
        notlang.classList.add('lingua');
        notlang.textContent='Informazione non disponibile';   
        hiddenInfo.appendChild(notlang);     
      }        
      
      //prezzo
      if (libro.saleInfo && libro.saleInfo.listPrice && 
        libro.saleInfo.listPrice.amount) {
        
        const prezzo = document.createElement('span');
        prezzo.classList.add('prezzo');
        prezzo.textContent = libro.saleInfo.listPrice.amount;
        hiddenInfo.appendChild(prezzo);
        
      } else {
        const notprice=document.createElement('span');
        notprice.textContent='Informazione non disponibile';  
        notprice.classList.add('prezzo');
        hiddenInfo.appendChild(notprice);       
      }

      //valuta
      if(libro.saleInfo && libro.saleInfo.listPrice && 
        libro.saleInfo.listPrice.currencyCode){

        const valuta = document.createElement('span');
        valuta.classList.add('valuta');
        valuta.textContent = libro.saleInfo.listPrice.currencyCode;
        hiddenInfo.appendChild(valuta);
        }else {
          const notvalue=document.createElement('span');
          notvalue.textContent='Informazione non disponibile';  
          notvalue.classList.add('valuta');
          hiddenInfo.appendChild(notvalue);       
        }     

      //descrizione
      if (libro.volumeInfo.description) {        
      const descrizione=document.createElement('p');
      descrizione.textContent=libro.volumeInfo.description;
      descrizione.classList.add('descrizione');
      hiddenInfo.appendChild(descrizione);
      } else {
        const notdesc=document.createElement('span');
        notdesc.textContent='Informazione non disponibile';  
        notdesc.classList.add('descrizione');
        hiddenInfo.appendChild(notdesc);       
      }   
      
      //casaeditrice      
      if (libro.volumeInfo.publisher) {        
        const casaEditrice=document.createElement('p');
        casaEditrice.textContent=libro.volumeInfo.publisher;
        casaEditrice.classList.add('casaEditrice');
        hiddenInfo.appendChild(casaEditrice);
      } else {
        const notpublisher=document.createElement('span');
        notpublisher.textContent='Informazione non disponibile';
        notpublisher.classList.add('casaEditrice'); 
        hiddenInfo.appendChild(notpublisher);        
      }  

      //pagine
      if (libro.volumeInfo.pageCount) {        
        const pagine=document.createElement('span');
        pagine.classList.add('pagine');
        pagine.textContent=libro.volumeInfo.pageCount;
        hiddenInfo.appendChild(pagine);
      } else {
        const notpage=document.createElement('span');
        notpage.textContent='Informazione non disponibile'; 
        notpage.classList.add('pagine');   
        hiddenInfo.appendChild(notpage);     
      }  

      //pubblicazione
      if (libro.volumeInfo.publishedDate) {        
        const dataPubblicazione=document.createElement('span');
        dataPubblicazione.classList.add('dataPubblicazione');
      dataPubblicazione.textContent=libro.volumeInfo.publishedDate;
      hiddenInfo.appendChild(dataPubblicazione);
      } else {
        const notdate=document.createElement('span');
        notdate.textContent='Informazione non disponibile'; 
        notdate.classList.add('dataPubblicazione');
        hiddenInfo.appendChild(notdate);        
      }    
      
      spazio_img_libro.appendChild(hiddenInfo);

    }
}

function onJsonFantasy(json){  
    console.log('JSON libri ricevuto');
    console.log(json);
  
    const library = document.querySelector('.libriFantasy-vetrina');
  
    library.innerHTML = '';
  
    const array_libri = json.items;  
   
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
        info.addEventListener("click", modalBook); 
        //creo il bottone per salvare il libro
        const addFavourite = document.createElement('div');
        addFavourite.classList.add('addFavourite');
        const textFavourite = document.createElement('span');
        textFavourite.textContent='Aggiungi allo scaffale';           
        const immagine = document.createElement('img');
        immagine.src="plus.png";
        immagine.classList.add('plus-image');
        immagine.addEventListener("click", saveFavourite); 
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
  
        const hiddenInfo=document.createElement('div');
        hiddenInfo.classList.add('hidden');
        
        //lingua
        if (libro.volumeInfo.language) {        
        const lingua=document.createElement('p');
        lingua.classList.add('lingua');
        lingua.textContent=libro.volumeInfo.language;
        hiddenInfo.appendChild(lingua);
        } else {
          const notlang=document.createElement('span');
          notlang.classList.add('lingua');
          notlang.textContent='Informazione non disponibile';   
          hiddenInfo.appendChild(notlang);     
        }        
        
        //prezzo
        if (libro.saleInfo && libro.saleInfo.listPrice && 
          libro.saleInfo.listPrice.amount) {
          
          const prezzo = document.createElement('span');
          prezzo.classList.add('prezzo');
          prezzo.textContent = libro.saleInfo.listPrice.amount;
          hiddenInfo.appendChild(prezzo);
          
        } else {
          const notprice=document.createElement('span');
          notprice.textContent='Informazione non disponibile';  
          notprice.classList.add('prezzo');
          hiddenInfo.appendChild(notprice);       
        }
  
        //valuta
        if(libro.saleInfo && libro.saleInfo.listPrice && 
          libro.saleInfo.listPrice.currencyCode){
  
          const valuta = document.createElement('span');
          valuta.classList.add('valuta');
          valuta.textContent = libro.saleInfo.listPrice.currencyCode;
          hiddenInfo.appendChild(valuta);
          }else {
            const notvalue=document.createElement('span');
            notvalue.textContent='Informazione non disponibile';  
            notvalue.classList.add('valuta');
            hiddenInfo.appendChild(notvalue);       
          }     
  
        //descrizione
        if (libro.volumeInfo.description) {        
        const descrizione=document.createElement('p');
        descrizione.textContent=libro.volumeInfo.description;
        descrizione.classList.add('descrizione');
        hiddenInfo.appendChild(descrizione);
        } else {
          const notdesc=document.createElement('span');
          notdesc.textContent='Informazione non disponibile';  
          notdesc.classList.add('descrizione');
          hiddenInfo.appendChild(notdesc);       
        }   
        
        //casaeditrice      
        if (libro.volumeInfo.publisher) {        
          const casaEditrice=document.createElement('p');
          casaEditrice.textContent=libro.volumeInfo.publisher;
          casaEditrice.classList.add('casaEditrice');
          hiddenInfo.appendChild(casaEditrice);
        } else {
          const notpublisher=document.createElement('span');
          notpublisher.textContent='Informazione non disponibile';
          notpublisher.classList.add('casaEditrice'); 
          hiddenInfo.appendChild(notpublisher);        
        }  
  
        //pagine
        if (libro.volumeInfo.pageCount) {        
          const pagine=document.createElement('span');
          pagine.classList.add('pagine');
          pagine.textContent=libro.volumeInfo.pageCount;
          hiddenInfo.appendChild(pagine);
        } else {
          const notpage=document.createElement('span');
          notpage.textContent='Informazione non disponibile'; 
          notpage.classList.add('pagine');   
          hiddenInfo.appendChild(notpage);     
        }  
  
        //pubblicazione
        if (libro.volumeInfo.publishedDate) {        
          const dataPubblicazione=document.createElement('span');
          dataPubblicazione.classList.add('dataPubblicazione');
        dataPubblicazione.textContent=libro.volumeInfo.publishedDate;
        hiddenInfo.appendChild(dataPubblicazione);
        } else {
          const notdate=document.createElement('span');
          notdate.textContent='Informazione non disponibile'; 
          notdate.classList.add('dataPubblicazione');
          hiddenInfo.appendChild(notdate);        
        }    
        
        spazio_img_libro.appendChild(hiddenInfo);
  
      }
}
  
function onJsonNarrativa(json){  
      console.log('JSON libri ricevuto');
      console.log(json);
    
      const library = document.querySelector('.libriNarrativa-vetrina');
    
      library.innerHTML = '';
    
      const array_libri = json.items;  
     
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
          info.addEventListener("click", modalBook); 
          //creo il bottone per salvare il libro
          const addFavourite = document.createElement('div');
          addFavourite.classList.add('addFavourite');
          const textFavourite = document.createElement('span');
          textFavourite.textContent='Aggiungi allo scaffale';           
          const immagine = document.createElement('img');
          immagine.src="plus.png";
          immagine.classList.add('plus-image');
          immagine.addEventListener("click", saveFavourite); 
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
    
          const hiddenInfo=document.createElement('div');
          hiddenInfo.classList.add('hidden');
          
          //lingua
          if (libro.volumeInfo.language) {        
          const lingua=document.createElement('p');
          lingua.classList.add('lingua');
          lingua.textContent=libro.volumeInfo.language;
          hiddenInfo.appendChild(lingua);
          } else {
            const notlang=document.createElement('span');
            notlang.classList.add('lingua');
            notlang.textContent='Informazione non disponibile';   
            hiddenInfo.appendChild(notlang);     
          }        
          
          //prezzo
          if (libro.saleInfo && libro.saleInfo.listPrice && 
            libro.saleInfo.listPrice.amount) {
            
            const prezzo = document.createElement('span');
            prezzo.classList.add('prezzo');
            prezzo.textContent = libro.saleInfo.listPrice.amount;
            hiddenInfo.appendChild(prezzo);
            
          } else {
            const notprice=document.createElement('span');
            notprice.textContent='Informazione non disponibile';  
            notprice.classList.add('prezzo');
            hiddenInfo.appendChild(notprice);       
          }
    
          //valuta
          if(libro.saleInfo && libro.saleInfo.listPrice && 
            libro.saleInfo.listPrice.currencyCode){
    
            const valuta = document.createElement('span');
            valuta.classList.add('valuta');
            valuta.textContent = libro.saleInfo.listPrice.currencyCode;
            hiddenInfo.appendChild(valuta);
            }else {
              const notvalue=document.createElement('span');
              notvalue.textContent='Informazione non disponibile';  
              notvalue.classList.add('valuta');
              hiddenInfo.appendChild(notvalue);       
            }     
    
          //descrizione
          if (libro.volumeInfo.description) {        
          const descrizione=document.createElement('p');
          descrizione.textContent=libro.volumeInfo.description;
          descrizione.classList.add('descrizione');
          hiddenInfo.appendChild(descrizione);
          } else {
            const notdesc=document.createElement('span');
            notdesc.textContent='Informazione non disponibile';  
            notdesc.classList.add('descrizione');
            hiddenInfo.appendChild(notdesc);       
          }   
          
          //casaeditrice      
          if (libro.volumeInfo.publisher) {        
            const casaEditrice=document.createElement('p');
            casaEditrice.textContent=libro.volumeInfo.publisher;
            casaEditrice.classList.add('casaEditrice');
            hiddenInfo.appendChild(casaEditrice);
          } else {
            const notpublisher=document.createElement('span');
            notpublisher.textContent='Informazione non disponibile';
            notpublisher.classList.add('casaEditrice'); 
            hiddenInfo.appendChild(notpublisher);        
          }  
    
          //pagine
          if (libro.volumeInfo.pageCount) {        
            const pagine=document.createElement('span');
            pagine.classList.add('pagine');
            pagine.textContent=libro.volumeInfo.pageCount;
            hiddenInfo.appendChild(pagine);
          } else {
            const notpage=document.createElement('span');
            notpage.textContent='Informazione non disponibile'; 
            notpage.classList.add('pagine');   
            hiddenInfo.appendChild(notpage);     
          }  
    
          //pubblicazione
          if (libro.volumeInfo.publishedDate) {        
            const dataPubblicazione=document.createElement('span');
            dataPubblicazione.classList.add('dataPubblicazione');
          dataPubblicazione.textContent=libro.volumeInfo.publishedDate;
          hiddenInfo.appendChild(dataPubblicazione);
          } else {
            const notdate=document.createElement('span');
            notdate.textContent='Informazione non disponibile'; 
            notdate.classList.add('dataPubblicazione');
            hiddenInfo.appendChild(notdate);        
          }    
          
          spazio_img_libro.appendChild(hiddenInfo);
    
        }
}

function onJsonGialli(json) {
  console.log('JSON libri ricevuto');
  console.log(json);

  const library = document.querySelector('.libriGialli-vetrina');

  library.innerHTML = '';

  const array_libri = json.items;
 
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
      info.addEventListener("click", modalBook); 
      //creo il bottone per salvare il libro
      const addFavourite = document.createElement('div');
      addFavourite.classList.add('addFavourite');
      const textFavourite = document.createElement('span');
      textFavourite.textContent='Aggiungi allo scaffale';           
      const immagine = document.createElement('img');
      immagine.src="plus.png";
      immagine.classList.add('plus-image');
      immagine.addEventListener("click", saveFavourite); 
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

      const hiddenInfo=document.createElement('div');
      hiddenInfo.classList.add('hidden');
      
      //lingua
      if (libro.volumeInfo.language) {        
      const lingua=document.createElement('p');
      lingua.classList.add('lingua');
      lingua.textContent=libro.volumeInfo.language;
      hiddenInfo.appendChild(lingua);
      } else {
        const notlang=document.createElement('span');
        notlang.classList.add('lingua');
        notlang.textContent='Informazione non disponibile';   
        hiddenInfo.appendChild(notlang);     
      }        
      
      //prezzo
      if (libro.saleInfo && libro.saleInfo.listPrice && 
        libro.saleInfo.listPrice.amount) {
        
        const prezzo = document.createElement('span');
        prezzo.classList.add('prezzo');
        prezzo.textContent = libro.saleInfo.listPrice.amount;
        hiddenInfo.appendChild(prezzo);
        
      } else {
        const notprice=document.createElement('span');
        notprice.textContent='Informazione non disponibile';  
        notprice.classList.add('prezzo');
        hiddenInfo.appendChild(notprice);       
      }

      //valuta
      if(libro.saleInfo && libro.saleInfo.listPrice && 
        libro.saleInfo.listPrice.currencyCode){

        const valuta = document.createElement('span');
        valuta.classList.add('valuta');
        valuta.textContent = libro.saleInfo.listPrice.currencyCode;
        hiddenInfo.appendChild(valuta);
        }else {
          const notvalue=document.createElement('span');
          notvalue.textContent='Informazione non disponibile';  
          notvalue.classList.add('valuta');
          hiddenInfo.appendChild(notvalue);       
        }     

      //descrizione
      if (libro.volumeInfo.description) {        
      const descrizione=document.createElement('p');
      descrizione.textContent=libro.volumeInfo.description;
      descrizione.classList.add('descrizione');
      hiddenInfo.appendChild(descrizione);
      } else {
        const notdesc=document.createElement('span');
        notdesc.textContent='Informazione non disponibile';  
        notdesc.classList.add('descrizione');
        hiddenInfo.appendChild(notdesc);       
      }   
      
      //casaeditrice      
      if (libro.volumeInfo.publisher) {        
        const casaEditrice=document.createElement('p');
        casaEditrice.textContent=libro.volumeInfo.publisher;
        casaEditrice.classList.add('casaEditrice');
        hiddenInfo.appendChild(casaEditrice);
      } else {
        const notpublisher=document.createElement('span');
        notpublisher.textContent='Informazione non disponibile';
        notpublisher.classList.add('casaEditrice'); 
        hiddenInfo.appendChild(notpublisher);        
      }  

      //pagine
      if (libro.volumeInfo.pageCount) {        
        const pagine=document.createElement('span');
        pagine.classList.add('pagine');
        pagine.textContent=libro.volumeInfo.pageCount;
        hiddenInfo.appendChild(pagine);
      } else {
        const notpage=document.createElement('span');
        notpage.textContent='Informazione non disponibile'; 
        notpage.classList.add('pagine');   
        hiddenInfo.appendChild(notpage);     
      }  

      //pubblicazione
      if (libro.volumeInfo.publishedDate) {        
        const dataPubblicazione=document.createElement('span');
        dataPubblicazione.classList.add('dataPubblicazione');
      dataPubblicazione.textContent=libro.volumeInfo.publishedDate;
      hiddenInfo.appendChild(dataPubblicazione);
      } else {
        const notdate=document.createElement('span');
        notdate.textContent='Informazione non disponibile'; 
        notdate.classList.add('dataPubblicazione');
        hiddenInfo.appendChild(notdate);        
      }    
      
      spazio_img_libro.appendChild(hiddenInfo);

    }
}

function saveFavourite(event){
  //seleziono il div addFavourite
  const selectDiv = event.currentTarget.parentNode;
  console.log(selectDiv);
  //risalgo al div che lo contiene
  const x= selectDiv.parentNode;
  
  const img=x.querySelector('img').src;
  console.log(img );
     
  const title=x.querySelector('.class-title').textContent;
  console.log(title);
  fetch("saveFavourite.php?img=" + encodeURIComponent(img) + "&title=" + encodeURIComponent(title)).then(searchResponse);

  //aggiorna span e immagine
  const updateSpan=selectDiv.querySelector('span');
  const updateImg=selectDiv.querySelector('img');  

  updateSpan.textContent='Libro aggiunto!';
  updateImg.src='scaffale.png';

}

function search(event){
  event.preventDefault();
     
    const search_value= document.querySelector("#search input").value;
    if(!search_value) {
      alert('Inserisci un autore');
      return;
    }

    const form_data = new FormData(document.querySelector("#search form"));
    
    fetch("search_content.php?q="+encodeURIComponent(form_data.get('search')))
    .then(searchResponse)
    .then(onJsonLibro);  
    
    
}

function searchResponse(response){
    console.log(response);
    return response.json();
}

function onJsonLibro(json) {
  console.log('JSON libri ricevuto');
  console.log(json);

  const library = document.querySelector('#results');

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
      info.addEventListener("click", modalBook); 
      //creo il bottone per salvare il libro
      const addFavourite = document.createElement('div');
      addFavourite.classList.add('addFavourite');
      const textFavourite = document.createElement('span');
      textFavourite.textContent='Aggiungi allo scaffale';           
      const immagine = document.createElement('img');
      immagine.src="plus.png";
      immagine.classList.add('plus-image');
      immagine.addEventListener("click", saveFavourite); 
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
      library.classList.add('scrolling-div');
      library.addEventListener('mousemove', scorriLibri);  

      const hiddenInfo=document.createElement('div');
      hiddenInfo.classList.add('hidden');
      
      //lingua
      if (libro.volumeInfo.language) {        
      const lingua=document.createElement('p');
      lingua.classList.add('lingua');
      lingua.textContent=libro.volumeInfo.language;
      hiddenInfo.appendChild(lingua);
      } else {
        const notlang=document.createElement('span');
        notlang.classList.add('lingua');
        notlang.textContent='Informazione non disponibile';   
        hiddenInfo.appendChild(notlang);     
      }        
      
      //prezzo
      if (libro.saleInfo && libro.saleInfo.listPrice && 
        libro.saleInfo.listPrice.amount) {
        
        const prezzo = document.createElement('span');
        prezzo.classList.add('prezzo');
        prezzo.textContent = libro.saleInfo.listPrice.amount;
        hiddenInfo.appendChild(prezzo);
        
      } else {
        const notprice=document.createElement('span');
        notprice.textContent='Informazione non disponibile';  
        notprice.classList.add('prezzo');
        hiddenInfo.appendChild(notprice);       
      }

      //valuta
      if(libro.saleInfo && libro.saleInfo.listPrice && 
        libro.saleInfo.listPrice.currencyCode){

        const valuta = document.createElement('span');
        valuta.classList.add('valuta');
        valuta.textContent = libro.saleInfo.listPrice.currencyCode;
        hiddenInfo.appendChild(valuta);
        }else {
          const notvalue=document.createElement('span');
          notvalue.textContent='Informazione non disponibile';  
          notvalue.classList.add('valuta');
          hiddenInfo.appendChild(notvalue);       
        }     

      //descrizione
      if (libro.volumeInfo.description) {        
      const descrizione=document.createElement('p');
      descrizione.textContent=libro.volumeInfo.description;
      descrizione.classList.add('descrizione');
      hiddenInfo.appendChild(descrizione);
      } else {
        const notdesc=document.createElement('span');
        notdesc.textContent='Informazione non disponibile';  
        notdesc.classList.add('descrizione');
        hiddenInfo.appendChild(notdesc);       
      }   
      
      //casaeditrice      
      if (libro.volumeInfo.publisher) {        
        const casaEditrice=document.createElement('p');
        casaEditrice.textContent=libro.volumeInfo.publisher;
        casaEditrice.classList.add('casaEditrice');
        hiddenInfo.appendChild(casaEditrice);
      } else {
        const notpublisher=document.createElement('span');
        notpublisher.textContent='Informazione non disponibile';
        notpublisher.classList.add('casaEditrice'); 
        hiddenInfo.appendChild(notpublisher);        
      }  

      //pagine
      if (libro.volumeInfo.pageCount) {        
        const pagine=document.createElement('span');
        pagine.classList.add('pagine');
        pagine.textContent=libro.volumeInfo.pageCount;
        hiddenInfo.appendChild(pagine);
      } else {
        const notpage=document.createElement('span');
        notpage.textContent='Informazione non disponibile'; 
        notpage.classList.add('pagine');   
        hiddenInfo.appendChild(notpage);     
      }  

      //pubblicazione
      if (libro.volumeInfo.publishedDate) {        
        const dataPubblicazione=document.createElement('span');
        dataPubblicazione.classList.add('dataPubblicazione');
      dataPubblicazione.textContent=libro.volumeInfo.publishedDate;
      hiddenInfo.appendChild(dataPubblicazione);
      } else {
        const notdate=document.createElement('span');
        notdate.textContent='Informazione non disponibile'; 
        notdate.classList.add('dataPubblicazione');
        hiddenInfo.appendChild(notdate);        
      }    
      
      spazio_img_libro.appendChild(hiddenInfo);

    }
  }
}

function modalBook(event){  

  const y = event.currentTarget.parentNode;
  const bookInfo=y.parentNode;
  //bookinfo è il div spazio_libro

  //seleziono la modale dall'html e la mostro
  const modal=document.getElementById('modal-view');  
  document.body.classList.add('no-scroll');
  modal.style.top= window.pageYOffset + 'px';

  //creo il contenitore all'interno dalla modale dove mostrare le info
  const modal_box=document.createElement('div');
  modal_box.classList.add('modal-box');
  modal.appendChild(modal_box);

  //creo il div per la prima metà
  const modal_first=document.createElement('div');
  modal_first.classList.add('modal-first');
  modal_box.appendChild(modal_first);

  //creo il div per le info libro
  const modal_book_info=document.createElement('div');
  modal_book_info.classList.add('modal-info');
  modal_first.appendChild(modal_book_info);

  //copertina
  const copertina=bookInfo.querySelector('.book-image').src;
  const box_copertina=document.createElement('img');
  box_copertina.src=copertina;
  modal_first.appendChild(box_copertina);

  //titolo
  const div_titolo=document.createElement('div');
  div_titolo.classList.add('standard-set');
  const set1=document.createElement('h5');
  set1.textContent='Titolo:';
  div_titolo.appendChild(set1);

  const title_book=bookInfo.querySelector('.class-title').textContent;
  const span_titolo=document.createElement('span');  
  span_titolo.textContent=title_book;
  div_titolo.appendChild(span_titolo);
  modal_book_info.appendChild(div_titolo);

  //editore
  const div_editore=document.createElement('div');
  div_editore.classList.add('standard-set');
  const set2=document.createElement('h5');
  set2.textContent='Editore:';
  div_editore.appendChild(set2);

  const editor_book=bookInfo.querySelector('.casaEditrice').textContent;
  const span_editor=document.createElement('span');
  span_editor.textContent=editor_book;
  div_editore.appendChild(span_editor);
  modal_book_info.appendChild(div_editore);

  //data pubblicazione
  const div_data=document.createElement('div');
  div_data.classList.add('standard-set');
  const set3=document.createElement('h5');
  set3.textContent='Pubblicato il:';
  div_data.appendChild(set3);

  const date_book=bookInfo.querySelector('.dataPubblicazione').textContent;
  const span_date=document.createElement('span');
  span_date.textContent=date_book;
  div_data.appendChild(span_date);
  modal_book_info.appendChild(div_data);

  //lingua
  const div_lingua=document.createElement('div');
  div_lingua.classList.add('standard-set');
  const set4=document.createElement('h5');
  set4.textContent='Lingua:';
  div_lingua.appendChild(set4);

  const lang_book=bookInfo.querySelector('.lingua').textContent;
  const span_lingua=document.createElement('span');
  span_lingua.textContent=lang_book;
  div_lingua.appendChild(span_lingua);
  modal_book_info.appendChild(div_lingua);

  //pagine
  const div_pagine=document.createElement('div');
  div_pagine.classList.add('standard-set');
  const set5=document.createElement('h5');
  set5.textContent='Pagine:';
  div_pagine.appendChild(set5);

  const page_book=bookInfo.querySelector('.pagine').textContent;
  const span_page=document.createElement('span');
  span_page.textContent=page_book;
  div_pagine.appendChild(span_page);
  modal_book_info.appendChild(div_pagine);

  //prezzo
  const div_prezzo=document.createElement('div');
  div_prezzo.classList.add('standard-set');
  const set6=document.createElement('h5');
  set6.textContent='Prezzo:';
  div_prezzo.appendChild(set6);

  const price_book=bookInfo.querySelector('.prezzo').textContent;
  const span_prezzo=document.createElement('span');
  span_prezzo.textContent=price_book;
  div_prezzo.appendChild(span_prezzo);
  

  //valuta
  const value_book=bookInfo.querySelector('.valuta').textContent;
  const span_valuta=document.createElement('span');
  span_valuta.textContent=value_book;
  div_prezzo.appendChild(span_valuta);
  modal_book_info.appendChild(div_prezzo);

  //creo div per la descrizione
  const modal_second=document.createElement('div');
  modal_second.classList.add('modal-second');
  modal_box.appendChild(modal_second);

  //descrizione
  const div_descrizione=document.createElement('div');
  div_descrizione.classList.add('standard-set');
  const set7=document.createElement('h5');
  set7.textContent='Descrizione:';
  div_descrizione.appendChild(set7);

  const scorrimento =document.createElement('div');
  scorrimento.classList.add('scrolling-div');
  scorrimento.addEventListener('mousemove', scorriTesto);  
  
  const desc_book=bookInfo.querySelector('.descrizione').textContent;
  const span_descrizione=document.createElement('span');
  span_descrizione.textContent=desc_book;
  modal_second.appendChild(div_descrizione);
  scorrimento.appendChild(span_descrizione);
  modal_second.appendChild(scorrimento);

  modal.addEventListener('click',chiudiModale);
  modal.classList.remove('hidden');
}

function chiudiModale(){
  document.body.classList.remove('no-scroll');
  const modal=document.getElementById('modal-view');
  modal.classList.add('hidden');
  modal.innerHTML='';
}

function scorriTesto(event){
  const div = event.currentTarget;
  const span_desc_scroll = div.querySelector('span');
  const speed = event.clientY / div.offsetHeight * 5;
  span_desc_scroll.style.transform = `translateY(-${div.scrollTop}px)`;
  span_desc_scroll.style.transition = `transform ${speed}s linear`;

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

document.querySelector("#search form").addEventListener("submit", search);

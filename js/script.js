/* 
1. MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

2. MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for. Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri metodi di manipolazione del DOM che abbiamo visto insieme. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

3. MILESTONE 3
Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.

4.BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la prima e l'utente clicca la freccia per andare indietro, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso avanti, deve attivarsi la prima immgine.

5.BONUS 2:
Creiamo delle miniature di tutte le immagni, in cui dovrà apparire in evidenza l’immagine equivalente a quella attiva, scegliete liberamente se scurire le altre immagini oppure se evidenziarla semplicemente con un bordo. Tra queste miniature, quella corrispondente all'immagine attiva deve evidenziarsi, scegliete voi l'effetto estetico, potete colorarla diversamente rispetto alle altre o aggiungere un semplice bordo.

*/

// creo un array per le immagini
const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// prendo dal dom gli elementi che mi servono
const gallery = document.getElementById('gallery');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const thumbs = document.getElementById('thumbnails');

// creo le immagini direttamente da js
for(i = 0; i < images.length; i++){
    const image = document.createElement('img');
    image.src = images[i];
    gallery.appendChild(image);
};
// creo le miniature da js
for(i = 0; i < images.length; i++){
    imgMin = document.createElement('img');
    imgMin.src = images[i];
    thumbs.appendChild(imgMin);
};

// recupero le immagini dal dom
const imgs = document.querySelectorAll('img');

// rendo visibile la prima immagine da js
let currentActiveIndex = 0;
imgs[currentActiveIndex].classList.add('active');

// quando clicco sulla freccia avanti mi cambia immagine
nextButton.addEventListener('click', function(){
    imgs[currentActiveIndex].classList.remove('active')
    currentActiveIndex++;
    if(currentActiveIndex < images.length){
        imgs[currentActiveIndex].classList.add('active');
    }else{
        currentActiveIndex = 0;
        imgs[currentActiveIndex].classList.add('active');
    }
});

// stessa cosa pero andando indietro
prevButton.addEventListener('click', function(){
    imgs[currentActiveIndex].classList.remove('active')
    currentActiveIndex--;
    if(currentActiveIndex >= 0){
        imgs[currentActiveIndex].classList.add('active');
    }else{
        currentActiveIndex = imgs.length - 1;
        imgs[currentActiveIndex].classList.add('active');
    }
});



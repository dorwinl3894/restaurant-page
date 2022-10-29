
const content = document.getElementById('content');
const homeButton = document.getElementById('home-button');
const contactButton = document.getElementById('contact-button');
const galleryButton = document.getElementById('gallery-button');


const createGalleryContent = () => {
    /* HEADER BUTTONS */ 
    homeButton.classList.remove('header-active-link');
    contactButton.classList.remove('header-active-link');
    galleryButton.classList.add('header-active-link');
    
    /* MAIN DIV */ 
    const main = document.createElement('main');
    main.setAttribute('id','main-section');

    /* TITLE */ 
    const pageTitle = document.createElement('h1');
    const pageTitleText = document.createTextNode('A.I Art Gallery');
    pageTitle.appendChild(pageTitleText);
    pageTitle.setAttribute('class','page-title');
    
    /* GRID */ 
    const galleryGrid = document.createElement('div');
    galleryGrid.setAttribute('id','gallery-grid');
    
    /* IMAGES */ 
    const pic1 = document.createElement('img');
    const pic2 = document.createElement('img');
    const pic3 = document.createElement('img');
    const pic4 = document.createElement('img');
    const pic5 = document.createElement('img');
    const pic6 = document.createElement('img');
    pic1.classList.add('gallery-grid-img');
    pic1.src = "../src/images/pic1.png";
    pic1.alt = "picture of A.I art";

    pic2.classList.add('gallery-grid-img');
    pic2.src = "../src/images/pic2.jpg";
    pic2.alt = "2nd picture of A.I art";

    pic3.classList.add('gallery-grid-img');
    pic3.src = "../src/images/pic3.jpg";
    pic3.alt = "3rd picture of A.I art";

    pic4.classList.add('gallery-grid-img');
    pic4.src = "../src/images/pic4.jpg";
    pic4.alt = "4th picture of A.I art";

    pic5.classList.add('gallery-grid-img');
    pic5.src = "../src/images/pic5.png";
    pic5.alt = "5th picture of A.I art";

    pic6.classList.add('gallery-grid-img');
    pic6.src = "../src/images/pic6.png";
    pic6.alt = "6th picture of A.I art";



    galleryGrid.appendChild(pic1);
    galleryGrid.appendChild(pic2);
    galleryGrid.appendChild(pic3);
    galleryGrid.appendChild(pic4);
    galleryGrid.appendChild(pic5);
    galleryGrid.appendChild(pic6);
    
    main.appendChild(pageTitle); 
    main.appendChild(galleryGrid);

    content.appendChild(main);

}

export { createGalleryContent };
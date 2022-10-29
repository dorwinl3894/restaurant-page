
const content = document.getElementById('content');
const homeButton = document.getElementById('home-button');
const contactButton = document.getElementById('contact-button');
const galleryButton = document.getElementById('gallery-button');


const createHomeContent = () => {
    homeButton.classList.add('header-active-link');
    contactButton.classList.remove('header-active-link');
    galleryButton.classList.remove('header-active-link');
    /*  Header Making Code
    const header = document.createElement('header');
    header.setAttribute('id','header');

    //Make Buttons 
    const homeButton = document.createElement('button');
    homeButton.classList.add('header-button', 'header-active-link');
    homeButton.setAttribute('id','home-button');
    const homeButtonText = document.createTextNode('Home');
    homeButton.appendChild(homeButtonText);

    const galleryButton = document.createElement('button');
    galleryButton.classList.add('header-button');
    galleryButton.setAttribute('id','gallery-button');
    const galleryButtonText = document.createTextNode('Gallery');
    galleryButton.appendChild(galleryButtonText);

    const contactButton = document.createElement('button');
    contactButton.classList.add('header-button');
    contactButton.setAttribute('id','contact-button');
    const contactButtonText = document.createTextNode('Contact');
    contactButton.appendChild(contactButtonText);
     //Make Buttons END
*/

    const main = document.createElement('main');
    main.setAttribute('id','main-section');

    const pageTitle = document.createElement('h1');
    const pageTitleText = document.createTextNode('A.I Art Restuarant');
    pageTitle.appendChild(pageTitleText);
    pageTitle.setAttribute('class','page-title');

    const homeImage = document.createElement('img');
    homeImage.setAttribute('id','home-img');
    homeImage.src = "../src/images/pic1.png";
    homeImage.alt = "picture of A.I art";

//SECTION-TITLE-------------------------------------
    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('section-title');
    const sectionTitleText = document.createTextNode('The Story');
    sectionTitle.appendChild(sectionTitleText);
//SECTION-TITLE END -----------------------------------

//SECTION-PARAGRAPH -----------------------------------
    const sectionParagraph = document.createElement('p');
    sectionParagraph.classList.add('section-paragraph');
    const sectionParagraphText = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et omnis vero harum libero, laborum nostrum repellat, qui ea illo quo tempora corrupti, quis dolorem quae? Earum quae pariatur iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et omnis vero harum libero, laborum nostrum repellat, qui ea illo quo te mpora corrupti, quis dolorem quae? Earum quae pariatur iusto.');
    sectionParagraph.appendChild(sectionParagraphText);

    const sectionParagraph1 = document.createElement('p');
    sectionParagraph1.classList.add('section-paragraph');
    const sectionParagraphText1 = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et omnis vero harum libero, laborum nostrum repellat, qui ea illo quo tempora corrupti, quis dolorem quae? Earum quae pariatur iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et omnis vero harum libero, laborum nostrum repellat, qui ea illo quo te mpora corrupti, quis dolorem quae? Earum quae pariatur iusto.');
    sectionParagraph1.appendChild(sectionParagraphText1);

    const sectionParagraph2 = document.createElement('p');
    sectionParagraph2.classList.add('section-paragraph');
    const sectionParagraphText2 = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et omnis vero harum libero, laborum nostrum repellat, qui ea illo quo tempora corrupti, quis dolorem quae? Earum quae pariatur iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et omnis vero harum libero, laborum nostrum repellat, qui ea illo quo te mpora corrupti, quis dolorem quae? Earum quae pariatur iusto.');
    sectionParagraph2.appendChild(sectionParagraphText2);

//SECTION-PARAGRAPH END -----------------------------------

//SECTION-PARAGRAPH -----------------------------------

//SECTION-PARAGRAPH END -----------------------------------

/*
    header.appendChild(homeButton);
    header.appendChild(galleryButton);
    header.appendChild(contactButton);

*/

    main.appendChild(pageTitle); 
    main.appendChild(homeImage);
    main.appendChild(sectionTitle);
    main.appendChild(sectionParagraph);
    main.appendChild(sectionParagraph1);
    main.appendChild(sectionParagraph2);

    //content.appendChild(header);
    content.appendChild(main);

}

export { createHomeContent };
const content = document.getElementById('content');
const homeButton = document.getElementById('home-button');
const contactButton = document.getElementById('contact-button');
const galleryButton = document.getElementById('gallery-button');

const createContactContent = () => {
    homeButton.classList.remove('header-active-link');
    contactButton.classList.add('header-active-link');
    galleryButton.classList.remove('header-active-link');

    /* MAIN DIV */ 
    const main = document.createElement('main');
    main.setAttribute('id','main-section');

    /* TITLE */ 
    const pageTitle = document.createElement('h1');
    const pageTitleText = document.createTextNode('Conact Us');
    pageTitle.appendChild(pageTitleText);
    pageTitle.setAttribute('class','page-title');

    /*CONTACT */ 
    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('section-title','contact-section-title');
    const sectionTitleText = document.createTextNode('Our Social Media');
    sectionTitle.appendChild(sectionTitleText);

    /*SOCIAL MEDIA LINKS*/
    const link1 = document.createElement('a');
    const link2 = document.createElement('a');
    const link3 = document.createElement('a');
    const link4 = document.createElement('a');
    const link5 = document.createElement('a');
    link1.classList.add('section-paragraph');
    link2.classList.add('section-paragraph');
    link3.classList.add('section-paragraph');
    link4.classList.add('section-paragraph');
    link5.classList.add('section-paragraph');
    link1.setAttribute('href','htttp://facebook.com')
    link2.setAttribute('href','htttp://twitter.com')
    link3.setAttribute('href','htttp://YouTube.com')
    link4.setAttribute('href','htttp://Pinterest.com')
    link5.setAttribute('href','htttp://Reddit.com')
    const link1Text = document.createTextNode('Facebook');
    const link2Text = document.createTextNode('Twitter');
    const link3Text = document.createTextNode('YouTube');
    const link4Text = document.createTextNode('Pinterest');
    const link5Text = document.createTextNode('Reddit');
    link1.appendChild(link1Text);
    link2.appendChild(link2Text);
    link3.appendChild(link3Text);
    link4.appendChild(link4Text);
    link5.appendChild(link5Text);



    main.appendChild(pageTitle); 
    main.appendChild(sectionTitle);
    main.appendChild(link1);
    main.appendChild(link2);
    main.appendChild(link3);
    main.appendChild(link4);
    main.appendChild(link5);


    content.appendChild(main);

}

export {createContactContent};
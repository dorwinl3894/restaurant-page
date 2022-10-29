import './style.css';
import {clearContent} from './clearContent';
import { createHomeContent } from './home';
import {createGalleryContent} from './gallery';
import {createContactContent} from './contact';


createHomeContent();


let homeButton = document.getElementById('home-button');
let galleryButton = document.getElementById('gallery-button');
let contactButton = document.getElementById('contact-button');



homeButton.addEventListener('click',() => {
    clearContent();
    createHomeContent();
    console.log("Clicked");

    
})


galleryButton.addEventListener('click',() => {
    clearContent();
    createGalleryContent();
    console.log("Clicked");
})


contactButton.addEventListener('click',() => {
    clearContent();
    createContactContent();
    console.log("Clicked");
})


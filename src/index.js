import './style.css';
import {clearContent} from './clearContent';
import { createHomeContent } from './home';
import {createGalleryContent} from './gallery';
import {createContactContent} from './contact';



let homeButton = document.getElementById('home-button');
let galleryButton = document.getElementById('gallery-button');
let contactButton = document.getElementById('contact-button');

createHomeContent();

homeButton.addEventListener('click',() => {
    clearContent();
    createHomeContent();
})


galleryButton.addEventListener('click',() => {
    clearContent();
    createGalleryContent();
})


contactButton.addEventListener('click',() => {
    clearContent();
    createContactContent();
})


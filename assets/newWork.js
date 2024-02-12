import { storage } from './firebase.js';
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js';

var galleryContainer = document.querySelector('.gallery');

// Array of the three random classes
var randomClasses = ['h-stretch', 'v-stretch', 'big-stretch'];

// Reference to the Images folder in Firebase Storage
var imagesRef = ref(storage, 'Images');
console.log('Test');

// List all items in the Images folder
listAll(imagesRef)
  .then(function (result) {
    result.items.forEach(function (imageRef) {
      // Create a new div for each image
      var imageDiv = document.createElement('div');

      // Get a random class from the array
      var randomClass = randomClasses[Math.floor(Math.random() * randomClasses.length)];

      // Add 'fade-in' class to every image
      // imageDiv.classList.add('fade-in');

      // Add the random class to the inner div
      imageDiv.classList.add(randomClass);

      getDownloadURL(imageRef).then(function (url) {
        // Create an image element and set its source to the download URL
        var img = document.createElement('img');
        img.src = url;

        // Append the image to the inner div
        imageDiv.appendChild(img);

        // Append the inner div directly to the existing gallery div
        galleryContainer.appendChild(imageDiv);
      });
    });
  })
  .catch(function (error) {
    console.error('Error fetching images:', error);
  });

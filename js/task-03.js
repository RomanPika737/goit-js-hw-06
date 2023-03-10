const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  }
];

// const gallery = document.querySelector(".gallery");

// const galleryElements = images.map(image => `
//   <li class = "gallery_item">
//   <img class = "gallery_img" src="${image.url}" alt="${image.alt}" />
//   </li>
// `).join('');

// gallery.insertAdjacentHTML('beforeend', `${galleryElements}`);



const makeGallery = ({ url, alt }) => {

  return `
   <li class = "gallery_item">
  <img class = "gallery_img" src="${url}" alt="${alt}" />
  </li>
  `;
};


const gallery = document.querySelector('.gallery');

const makeGalleryItem = images
  .map(makeGallery)
  .join('');

gallery.insertAdjacentHTML('beforeend', makeGalleryItem);

// console.log(makeGalleryItem);





// const gallery = document.body.querySelector('.gallery');

// images.forEach(({ url, alt }) => {
//   const li = document.createElement("li");
//   li.classList.add("gallery_item")
//   const image = document.createElement('img');
//   image.src = url;
//   image.alt = alt;
//   image.classList.add("gallery_img");
//   li.append(image);
//   gallery.append(li);
// });
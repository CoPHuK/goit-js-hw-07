const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.getElementById('gallery')
console.dir(galleryRef)
// galleryRef.insertAdjacentHTML
// images.map(el => { 
//     let createImg = document.createElement('img')
//     createImg.url = el.url
//     createImg.alt = el.alt
//     console.dir(createImg)
//     galleryRef.insertAdjacentHTML('afterbegin' 'createImg')
// })
const createGallery = ({ url, alt }) => { 
    return `<li style="display:inline"> 
    <img src="${url}" alt="${alt}" width="120">  
    </li> `
}

const makeHTML = images.map(createGallery).join('');
galleryRef.insertAdjacentHTML('beforeend', makeHTML);
console.dir(galleryRef.li)
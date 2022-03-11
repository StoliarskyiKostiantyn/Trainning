const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
const galleryEl = document.querySelector(".js-gallery");
const modalEl = document.querySelector(".js-lightbox");
const bigImgEl = document.querySelector(".lightbox__image");
const overlayEl = document.querySelector("div .lightbox__overlay");
let bigImgArr = [];
let currentId = null;
function createGalleryMarkup(gallery) {
  let markupString = "";
  for (let i = 0; i < gallery.length; i++) {
    bigImgArr.push(gallery[i].original);
    markupString =
      markupString +
      `<li class="gallery__item"} >
     <a
       class="gallery__link"
       href="#"
     >
       <img
       id=${i}
         class="gallery__image"
         src="${gallery[i].preview}"
         data-source="${gallery[i].original}"
         alt="${gallery[i].description}"
     />
   </a>
   </li>`;
  }
  return markupString;
}
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);
function modalImg(id) {
  bigImgEl.src = `${bigImgArr[id]}`;
}
function onGalleryImgClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  } else {
    modalEl.classList.add("is-open");
    modalImg(e.target.id);
    currentId = e.target.id;
  }
}
function onModalClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  modalEl.classList.remove("is-open");
  bigImgEl.src = "";
}
function onOverlayClick(e) {
  modalEl.classList.remove("is-open");
  bigImgEl.src = "";
}
function onKeyPressed(e) {
  if (e.code === "Escape") {
    modalEl.classList.remove("is-open");
    bigImgEl.src = "";
  } else if (e.code === "ArrowRight") {
    currentId = Number(currentId) + 1;
    if (currentId >= bigImgArr.length) {
      currentId = 0;
      modalImg(currentId);
    } else {
      modalImg(currentId);
    }
  } else if (e.code === "ArrowLeft") {
    currentId = Number(currentId) - 1;
    console.log(currentId);
    if (Number(currentId) < 0) {
      currentId = bigImgArr.length - 1;
      modalImg(currentId);
    } else {
      modalImg(currentId);
    }
  }
}
galleryEl.addEventListener("click", onGalleryImgClick);
modalEl.addEventListener("click", onModalClick);
overlayEl.addEventListener("click", onOverlayClick);
window.addEventListener("keydown", onKeyPressed);

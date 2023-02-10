import { galleryItems } from "./gallery-items.js";
// Change code below this line
const photosList = document.querySelector(".gallery");

function photoMurkupItems(data) {
  return data
    .map((item) => {
      return `
        <li>
            <a class="gallery__item" href="${item.original}" >
                <img
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
                class="gallery__image"
                />
            </a>
        </li>`;
    })
    .join("");
}

const handleMurkupItems = photoMurkupItems(galleryItems);
photosList.innerHTML = handleMurkupItems;
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});

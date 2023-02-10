import { galleryItems } from "./gallery-items.js";
// Change code below this line
const photosList = document.querySelector(".gallery");

function photoMurkupItems(data) {
  return data
    .map((item) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
                class="gallery__image"
                />
            </a>
        </div>`;
    })
    .join("");
}

const handleMurkupItems = photoMurkupItems(galleryItems);
photosList.innerHTML = handleMurkupItems;

photosList.addEventListener("click", handlePhotoOriginal);

function handlePhotoOriginal(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" class="gallery__image" alt="${e.target.alt}">
`);
  instance.show();
  e.preventDefault();
  document.addEventListener("keydown", closeModalOnEscape);

  function closeModalOnEscape(e) {
    if (e.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeModalOnEscape);
    }
  }
}

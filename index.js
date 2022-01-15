function carouselImages() {
  const images = document.querySelectorAll(".carousel-images img");
  const totalImages = images.length;
  const nextBtn = document.querySelector(".carousel-next");
  const previousBtn = document.querySelector(".carousel-previous");

  let currentImg = 1;
  displayImage(images, currentImg);

  nextBtn.addEventListener("click", () => {
    currentImg++;
    if (currentImg > totalImages) currentImg = 1;
    displayImage(images, currentImg);
  });

  previousBtn.addEventListener("click", () => {
    currentImg--;
    if (currentImg < 1) currentImg = totalImages;
    displayImage(images, currentImg);
  });
}

function displayImage(images, currentImg) {
  images.forEach((image) => {
    if (
      image !==
      document.querySelector(`.carousel-images img:nth-child(${currentImg})`)
    ) {
      image.style.display = "none";
    } else {
      image.style.display = "initial";
    }
  });
}

carouselImages();

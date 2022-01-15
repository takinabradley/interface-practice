function carouselImages() {
  const images = document.querySelectorAll(".carousel-images img");
  const totalImages = images.length;
  const nextBtn = document.querySelector(".carousel-next");
  const previousBtn = document.querySelector(".carousel-previous");
  const displayImage = () => {
    images.forEach((image) => {
      if (
        image !==
        document.querySelector(`.carousel-images img:nth-child(${currentImg})`)
      ) {
        image.style.visibility = "hidden";
        image.classList.remove('active');
      } else {
        image.style.visibility = "initial";
        image.classList.add('active');
      }
    });
  }

  let currentImg = 1;
  displayImage();

  const intervalID = setInterval(() => {
    currentImg++;
    if (currentImg > totalImages) currentImg = 1;
    displayImage();
  }, 5000)

  nextBtn.addEventListener("click", () => {
    clearInterval(intervalID)
    currentImg++;
    if (currentImg > totalImages) currentImg = 1;
    displayImage();
  });

  previousBtn.addEventListener("click", () => {
    clearInterval(intervalID)
    currentImg--;
    if (currentImg < 1) currentImg = totalImages;
    displayImage();
  });
}

carouselImages();

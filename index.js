function carouselImages() {
  const images = document.querySelectorAll(".carousel-images img");
  const totalImages = images.length;
  const nextBtn = document.querySelector(".carousel-next");
  const previousBtn = document.querySelector(".carousel-previous");
  const indicatorContainer = document.querySelector(".carousel-indicators");

  const indicators = (() => {
    for (let i = 1; i < totalImages + 1; i++) {
      let indicator = document.createElement("button");
      indicator.classList.add("carousel-indicator");
      indicator.textContent = i;
      indicatorContainer.appendChild(indicator);
    }
    return indicatorContainer.querySelectorAll(".carousel-indicator");
  })();;

  const currentIndicator = () => {
    return indicatorContainer.querySelector(`button:nth-child(${currentImg})`);
  };

  let currentImg = 1;

  
  const displayImage = () => {
    images.forEach((image) => {
      if (
        image ===
        document.querySelector(`.carousel-images img:nth-child(${currentImg})`)
      ) {
        image.style.visibility = "initial";
        image.classList.add("active");
        currentIndicator().classList.add("active");
      } else {
        image.style.visibility = "hidden";
        image.classList.remove("active");
        indicators.forEach((indicator) => {
          if (indicator !== currentIndicator()) {
            indicator.classList.remove("active");
          }
        });
      }
    });
  };

  displayImage();

  const intervalID = setInterval(() => {
    currentImg++;
    if (currentImg > totalImages) currentImg = 1;
    displayImage();
  }, 5000);

  nextBtn.addEventListener("click", () => {
    clearInterval(intervalID);
    currentImg++;
    if (currentImg > totalImages) currentImg = 1;
    displayImage();
  });

  previousBtn.addEventListener("click", () => {
    clearInterval(intervalID);
    currentImg--;
    if (currentImg < 1) currentImg = totalImages;
    displayImage();
  });

  indicators.forEach((indicator) =>
    indicator.addEventListener("click", (e) => {
      clearInterval(intervalID);
      currentImg = e.target.textContent;
      displayImage();
    })
  );
}

carouselImages();

const divs = document.querySelectorAll("div.photo");

divs.forEach(div => {
  const originalImage = div.querySelector("img");
  const originalImageSource = originalImage.getAttribute("src");

  div.innerHTML = " ";

  const app = new PIXI.Application({
    width: 400,
    height: 400,
    transparent: true
  });

  div.appendChild(app.view);

  const loader = new PIXI.loaders.Loader();

  loader.add("image", originalImageSource);
  loader.load((loader, resources) => {
    const image = new PIXI.Sprite(resources.image.texture);

    image.width = 400;
    image.height = 400;
    app.stage.addChild(image);
  });
});

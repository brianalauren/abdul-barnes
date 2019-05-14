// hide/show menu
const menu = document.querySelector("section.contact");
const menuButton = document.querySelector("a.menu");
const closeButton = document.querySelector("a.close-menu");

$(menuButton).click(function() {
  $(menu).css("display", "flex");
  return false;
});

$(closeButton).click(function() {
  $(menu).css("display", "none");
  return false;
});

// contentful
const spaceId = "ewzub8b1gfrm";
const environmentId = "master";
const accessToken =
  "6cb9ddf756125aa1d52f50a4157a2a05e8363e2c6fc9f95adf3ae1cc915f6a64";
const url = `https://cdn.contentful.com
/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`;

const sectionTag = document.querySelector("section.images");

const grabData = function() {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const assets = data.includes.Asset;
      return data.items.map(item => {
        let imageUrl = "image1.jpg";
        const imageId = item.fields.image.sys.id;
        const imageData = assets.find(asset => {
          return asset.sys.id == imageId;
        });
        if (imageData) {
          imageUrl = imageData.fields.file.url;
        }
        item.fields.image = imageUrl;
        return item.fields;
      });
    });
};

grabData().then(data => {
  console.log(data);
  sectionTag.innerHTML = "";
  data.forEach(item => {
    sectionTag.innerHTML =
      sectionTag.innerHTML +
      `
      <div class="photo" data-parallax="0.5">
        <div class="overlay">
          <h3>${item.title}</h3>
          <h5>${item.year}</h5>
          <p>${item.description}</p>
        </div>
        <img src="${item.image}" />
      </div>
	`;
  });
});

// parallax
// document.addEventListener("scroll", function() {
//   const topView = window.pageYOffset;
//   const midView = topView + 0.5 * window.innerHeight;
//
//   sections.forEach(section => {
//     const topSection = section.offsetTop;
//     const midSection = topSection + section.offsetHeight / 2;
//
//     const distanceToSection = midView - midSection;
//
//     const parallaxTags = section.querySelectorAll(`[data-parallax]`);
//
//     parallaxTags.forEach(tag => {
//       const speed = parseFloat(tag.getAttribute("data-parallax"));
//       tag.style.transform = `translate(0, ${distanceToSection * speed}px)`;
//     });
//   });
// });

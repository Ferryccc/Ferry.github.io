const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');


for(let i = 1; i <= 4; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'image/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    displayedImage.src = e.target.src;
  }
}
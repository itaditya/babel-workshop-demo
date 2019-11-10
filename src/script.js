const elemImg = document.querySelector('.js-img');
const elemBtn = document.querySelector('.js-btn');

let originalBtnText;

async function ajaxGetDogImg() {
  const resRandomDog = await fetch('https://dog.ceo/api/breeds/image/random');
  const dataRandomDog = await resRandomDog.json();

  const { message } = dataRandomDog;
  return message;
}

function handleImgLoad(event) {
  elemBtn.removeAttribute('disabled');
  elemBtn.innerText = originalBtnText;
}

async function handleBtnClick(event) {
  originalBtnText = elemBtn.innerText;
  elemBtn.setAttribute('disabled', 'disabled');
  elemBtn.innerText = 'Loading...';
  const urlDog = await ajaxGetDogImg();
  elemImg.setAttribute('src', urlDog);
}

elemBtn.addEventListener('click', (event) => {
  const { x, y } = getWindowSize(window);
  console.log(`width is ${x}, height is ${y}`);
  handleBtnClick(event);
});

elemImg.addEventListener('load', (event) => {
  handleImgLoad(event);
});

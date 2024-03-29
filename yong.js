const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};


// navbar

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 0){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }
})


function openMore() {
    document.getElementById("more-content").classList.add("open");
}
window.onclick = (event) =>{
    if(!event.target.matches('.more-btn')){
        if(document.getElementById("more-content").classList.contains("open")){
            document.getElementById("more-content").classList.remove("open");
        }
    }
    console.log("window clicked clicked clicked");
}
  
// Accomodation image slider
const SLIDER_WIDTH = 5;

let coreUrl = '/assets/accommodation';
let images = [
  `${coreUrl}1.jpeg`,
  `${coreUrl}2.jpeg`,
  `${coreUrl}3.jpeg`,
  `${coreUrl}4.jpeg`,
  `${coreUrl}5.jpeg`,
  `${coreUrl}7.jpeg`,
  `${coreUrl}8.jpeg`,
  `${coreUrl}9.jpeg`,
  `${coreUrl}10.jpeg`,
  `${coreUrl}11.jpeg`,
  `${coreUrl}12.jpeg`,
  `${coreUrl}13.jpeg`,
  `${coreUrl}14.jpeg`,
  `${coreUrl}15.jpeg`,
  `${coreUrl}16.jpeg`,
  `${coreUrl}17.jpeg`,
  `${coreUrl}18.jpeg`,
  `${coreUrl}19.jpeg`,
  `${coreUrl}20.jpeg`
];


if(document.getElementById('leftBtn') !== null){
document.getElementById('leftBtn').addEventListener('mouseup', () => {
    permuteToLeft();
    insertToDom();
});

document.getElementById('rightBtn').addEventListener('mouseup', () => {
    permuteToRight();
    insertToDom();
})



insertToDom = () => {
  let slider = document.getElementById('slider');
  let seperateView = document.getElementById('seperate-view');
    for(let i = 0; i < SLIDER_WIDTH; i++) {
        slider.getElementsByTagName('img')[i].src = images[i];
    }
    slider.getElementsByTagName('img')[2].style.transform = 'scale(1.2)';
    slider.getElementsByTagName('img')[2].style.margin = '6rem';
    seperateView.getElementsByTagName('img')[0].src = images[2];
}

permuteToLeft = () => {
  let tmp = images[0];
    for(let i = 0; i < images.length - 1; i++) {
        images[i] = images[i+1]
    }
    images[images.length - 1] = tmp;
}

permuteToRight = () => {
   let tmp = images[images.length - 1];
    for(let i = images.length - 1; i > 0; i--) {
        images[i] = images[i-1]
    }
    images[0] = tmp;
}

// Accomodation room slider
let dormRooms = ['/assets/dorm-01.jpg', '/assets/dorm-02.jpg'];
let chimneyRooms = ['/assets/chimney-01.jpg', '/assets/chimney-02.jpg'];
let _4doorsRooms = ['/assets/4doors-01.jpg', '/assets/4doors-02.jpg'];

let slideIndex = 0;

// Next-previous control
function nextSlide(n) {
  slideIndex++;
  showSlides(n);
  timer = _timer;
}

function prevSlide(n) {
  slideIndex--;
  showSlides(n);
  timer = _timer;
}


function showSlides(n) {
    let slides = document.querySelector(".mySlides" + n);

    if(slideIndex < 0)  slideIndex *= -1;
    slideIndex %= 2; 
  
    if(n===1)
        slides.getElementsByTagName('img')[0].src = dormRooms[slideIndex];
    if(n===2)
        slides.getElementsByTagName('img')[0].src = chimneyRooms[slideIndex];
    if(n===3)
        slides.getElementsByTagName('img')[0].src = _4doorsRooms[slideIndex];

}
// autoplay slides --------
let timer = 4; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide(1);
    nextSlide(2);
    nextSlide(3);
    timer = _timer; // reset timer
  }
}, 1000);
}


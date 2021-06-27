const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const galleryImage = document.querySelectorAll(".gallery-img");
let currentlySelected = 0;

prevBtn.addEventListener("click", function(){
galleryImage[currentlySelected].classList.remove("active");
currentlySelected--;
galleryImage[currentlySelected].classList.add("active");
nextBtn.disabled = true;
if(currentlySelected.length === 0){
    prevBtn.disabled = 0;
}
});

nextBtn.addEventListener("click", function(){
galleryImage[currentlySelected].classList.remove("active");
currentlySelected++;
galleryImage[currentlySelected].classList.add("active");
prevBtn.disabled = false;
if(galleryImage.length === currentlySelected + 1){
    nextBtn.disabled = true;
}
});
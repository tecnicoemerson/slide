let slideIndex = 1;

const showSlides = (num) => {
    let count;
    let slides = document.getElementsByClassName(`slide`);
    let dots = document.getElementsByClassName(`dot`);

    //estrutura condicional
    if(num > slides.length) {slideIndex = 1}
    if(num < 1) {slideIndex = slides.length}

    // estruturas de repetiçao: for,while,map,do while

    for(count=0; count < slides.length; count++) {
        slides[count].style.display = "none";
    }

    for(count=0; count < dots.length; count++) {
        dots[count].className = dots[count].className.replace("active" , "")
    }

    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className += " active";

}

showSlides(slideIndex);

const changeSlide = (num) => {
    showSlides(slideIndex += num)
}

const currentSlide = (num) => {
    showSlides(slideIndex = num)
}


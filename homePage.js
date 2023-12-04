const parentElement = document.querySelector('.post-container');
const childImage = document.querySelectorAll(".post-container img");
const childText = document.querySelector(".post-text");
// const mediaQueryLargeScreens = window.matchMedia('screen and (min-width: 1201px) and (orientation: landscape) ');
const mediaQueryLargeScreens = window.matchMedia('screen and (min-width: 1201px) ');
const mediaQueryMedium = window.matchMedia('screen and (min-width: 640px) and (max-width: 1200px) and (orientation: portrait)');
const mediaQuerySmallestScreen = window.matchMedia('screen and (max-width: 639px) and  (orientation: portrait)');





childImage.forEach(img => {
    img.addEventListener('mouseover', (event)=> {
        console.log(window.matchMedia(mediaQueryLargeScreens).matches);
        if(mediaQueryLargeScreens.matches){
            const element = event.target.parentNode.querySelector('.post-text');
            element.classList.toggle("post-text-large-screen");
        }
        else if(mediaQueryMedium.matches){
            const element = event.target.parentNode.querySelector('.post-text');
            element.classList.toggle("post-text-medium-screen");
            console.log(element.classList);
        }
        else if(mediaQuerySmallestScreen.matches)
        {
            const imageElement = event.target.parentNode.querySelector(".post-text");
            // imageElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            toggleClass(event);
        }
    });
    img.addEventListener('mouseout', (event) => {
        if(mediaQueryLargeScreens.matches){
            const element = event.target.parentNode.querySelector('.post-text');
            element.classList.toggle("post-text-large-screen");
        }
        else if(mediaQueryMedium.matches){
            const element = event.target.parentNode.querySelector('.post-text');
            element.classList.toggle("post-text-medium-screen");
            // element.style.setProperty('width', '44%', 'important');
            
        }
        else if(mediaQuerySmallestScreen.matches)
        {
            toggleClass(event);
        }
    })
});



function toggleClass(event) {
    const element = event.target.parentNode.querySelector('.post-text');
    element.classList.toggle("postTextHover");
}


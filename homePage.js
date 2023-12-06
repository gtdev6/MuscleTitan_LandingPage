const parentElementAll = document.querySelectorAll('.post-container');
const childImage = document.querySelectorAll(".post-container img");
const childTextAll = document.querySelectorAll(".post-text");
const mediaQueryLargeScreens = window.matchMedia('screen and (min-width: 1201px) ');
const mediaQueryMedium = window.matchMedia('screen and (min-width: 640px) and (max-width: 1200px) and (orientation: portrait)');
const mediaQuerySmallestScreen = window.matchMedia('screen and (max-width: 639px) and  (orientation: portrait)');





childImage.forEach(img => {
    img.addEventListener('mouseover', (event)=> {
        if(mediaQueryLargeScreens.matches){
            const element = event.target.parentNode.querySelector('.post-text');
            element.classList.toggle("post-text-large-screen");
        }
        else if(mediaQueryMedium.matches){
            const element = event.target.parentNode.querySelector('.post-text');
            element.classList.toggle("post-text-medium-screen");
        }
        else if(mediaQuerySmallestScreen.matches)
        {
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

parentElementAll.forEach((container) =>{
    container.addEventListener("click", (event)=>{
        console.log(container.id);
        switch(container.id){
            case "workoutContainer":
                window.open("workoutPage.html", '_blank');
                break;
            case "nutritionsContainer":
                window.open("dietPlansPage.html", '_blank');
                break;
            case "articlesContainer":
                window.open("articlesPage.html", '_blank');
                break;

        }
    });
});

// const navLinks = document.querySelectorAll('.nav-item-link');
// navLinks.forEach((navLink) => {
//     navLink.addEventListener('click', (event) => {
//         console.log(navLink);
//         const href = navLink.getAttribute('href');
//         window.open(href, "blank");
//     });
// });







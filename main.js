let classList = [
    {
        querySelector:'.in-main-secondary',
        animationClass:'scale-up-bottom',
        parentClass:'.main-secondary-container'
    },
    {
        querySelector:'.second-sec-li-img',
        animationClass:'scale-up-bottom',
        parentClass:'.second-section-fourth-li'
    },
    {
        querySelector:'.second-sec-title',
        animationClass:'fade-to-right',
        parentClass:'.second-sec-li-seven-cont'
    },
    {
        querySelector:'.li-h3',
        animationClass:'fade-to-right',
        parentClass:'.li-three'
    },
    {
        querySelector:'.li-three-img',
        animationClass:'fade-to-left',
        parentClass:'.li-three'
    },
    {
        querySelector:'.li-h3',
        animationClass:'fade-to-right',
        parentClass:'.li-four'
    },
    {
        querySelector:'.li-four-img',
        animationClass:'fade-to-left',
        parentClass:'.li-four'
    },
    {
        querySelector:'.li-h3',
        animationClass:'fade-to-right',
        parentClass:'.li-five'
    },
    {
        querySelector:'.li-five-img',
        animationClass:'fade-to-left',
        parentClass:'.li-five'
    },
    {
        querySelector:'.iphone-home',
        animationClass:'normal-fade',
        parentClass:'.li-seven-main-cont'
    },
    {
        querySelector:'.section-three-bg-type',
        animationClass:'fade-to-left',
        parentClass:'.li-seven-main-cont'
    },
]

classList.forEach(item =>{
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        const square = entry.target.querySelector(item.querySelector);
    
        if (entry.isIntersecting) {
            square.classList.add(item.animationClass);
            return; // if we added the class, exit the function
        }
            // not intersecting
            square.classList.remove(item.animationClass);
        });
    });
    observer.observe(document.querySelector(item.parentClass));
})

let observer = new IntersectionObserver(entries=> {
	// no intersection with screen
	if(entries[0].intersectionRatio === 0)
		document.querySelector(".nav-container").classList.add("flex");
	// fully intersects with screen
	else if(entries[0].intersectionRatio === 1)
		document.querySelector(".nav-container").classList.remove("flex");
}, { threshold: [0,1] });

observer.observe(document.querySelector("#observe-stick"));

function showSideBar() {
    let element = document.getElementById("side-bar-menu");
    element.classList.add("side-bar-menu-show");
    element.classList.remove("side-bar-menu-hide");
}

function hideSideBar() {
    let element = document.getElementById("side-bar-menu");
    element.classList.remove("side-bar-menu-show");
    element.classList.add("side-bar-menu-hide");;
}


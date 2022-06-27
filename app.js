const hoverDiv = document.querySelector(".moving_div");
const searchIcon = document.querySelector(".search_btn");
const globeIcon = document.querySelector(".globe");
const searchBar = document.querySelector(".search_bar");


item1.addEventListener("mouseover", () => {
    hoverDiv.style.left = "-3px";
});
item2.addEventListener("mouseover", () => {
    hoverDiv.style.left = "94px";
});
item3.addEventListener("mouseover", () => {
    hoverDiv.style.left = "187px";
});
item4.addEventListener("mouseover", () => {
    hoverDiv.style.left = "280px";
});
item5.addEventListener("mouseover", () => {
    hoverDiv.style.left = "375px";
});
item6.addEventListener("mouseover", () => {
    hoverDiv.style.left = "640px";
});
item7.addEventListener("mouseover", () => {
    hoverDiv.style.left = "732px";
});

searchIcon.addEventListener("click", () => {
    if(searchBar.classList.contains("active")){
        searchBar.classList.remove("active");
        globeIcon.style.display = "block";
        searchBar.style.borderBottom = "none";
        inp.style.display = "none";
    }
    else{
        searchBar.classList.add("active");
        globeIcon.style.display = "none";
        searchBar.style.borderBottom = "1px solid #fff";
        inp.style.display = "block";
    }
})

document.addEventListener("scroll", (e) => {
    let scrollPosition = window.scrollY;
    console.log(Math.floor(scrollPosition));
    let scrollValue = Math.floor(scrollPosition);
    if(scrollValue < 420){
        document.querySelector('.container').style.transform = 'translateY(-300pv)'
    }
})
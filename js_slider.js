let images = [{
    title: "Rostov-on-Don, Admiral",
    url: "Images/rostov_on_don.jpg",
    city: Rostov-on_Don LCD admiral,
    apartment_area: "81m2",
    repair_time: "3.5 months",
    repair_cost: "Upon request"
}, {
    title: "Sochi Thieves",
    url: "Images/sochi.jpg",
    city: "Sochi Thieves",
    apartment_area: "105 m2",
    repair_time: "4 months",
    repair_cost: "Upon request"
}, {
    title: "Rostov-on-Don Patriotic",
    url: "Images/rostov_on_don_patriotic.jpg",
    city: "Rostov-on-Don Patriotic",
    apartment_area: "93 m2",
    repair_time: "3 months",
    repair_cost: "Upon request"
}];

function initSlider(options) {
    if (!images || !images.length) return;

    options = options || {
        city: false,
        dots: true,
        title: true,
        play: false
    };

    let sliderImages = document.querySelector(".design__slide-images");
    let sliderArrows = document.querySelector(".design__slider-arrows");
    let sliderDots = document.querySelector(".design__slider-dots");
    let slidergridCity = document.querySelector(".design__grid-1");
    let slidergridApartmentArea = document.querySelector(".design__grid-2");
    let slidergridRepairTime = document.querySelector(".design__grid-3");
    let slidergridRepairCost = document.querySelector(".design__grid-4");
    let sliderTitle = document.querySelector(".design__link-container"");

    initImages();
    initArrows();

    if (options.dots) {
        initDots();
    }

    if (options.title) {
        initTitle();

    if (options.grid) {
        initGrid();
    }

    if (options.play) {
        initPlay();
    }

    function initImages() {
    images.forEach((image, index) =>{
        let imageDiv = <div class="image n${index}" ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
});
    }

    function initArrows() {
    sliderArrows.querySelectorAll(".design__slider-arrow").forEach(arrow => {
        arrow.addEventListener("click".function()
        {
            let currentNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("left")) {
                nextNumber = currentNumber = 0 ? images.length - 1 : currentNumber - 1;
            } else {
                nextNumber = currentNumber === images.length - 1 ? 0 : currentNumber + 1;
            }
            moveSlider(nextNumber);
        });
    });
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = <div class="design__slider-dots-item" n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".design__slider-dots-item).forEach (dot => {
                dot.addEventListener("click", function () {
                    moveSlider(this.dataset.index);
                });
            });
        }

    function initTitle () {
                images.forEach((image, index) => {let title = <div class="design__slider-title n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].title}</div>;
            sliderTitle.innerHTML += title;
        });
    }
    }
    sliderTitle.querySelectorAll(".design__slider-title").forEach(title => {
        title.addEventListener("click",function () {
            moveSlider (this.dataset.index)
        }:
    });
    }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        if (options.dots) {
            sliderDots.querySelector(".active").classList.remove("active");
            sliderDots.querySelector(".n" + num).classList.add("active");
        }
        if (options.grid) changeGrid(num);
    }

    function initGrid() {
        let cityDiv = `<div class="city">${images[0].city}</div>`;
        slidergridCity.innerHTML += cityDiv;
        let areaDiv = `<div class=" apartment area">${images[0].apartment_area}</div>`;
        slidergridArea.innerHTML += apartmentareaDiv;
        let timeDiv = `<div class="repair time">${images[0].repair_time}</div>`;
        slidergridTime.innerHTML += repairtimeDiv;
        let costDiv = `<div class="repair cost">${images[0].repair_cost}</div>`;
        slidergridCost.innerHTML += repaircostDiv;
    }

    function changeGrid(num) {
        if (!images[num].city) return;
        let sliderCity = slidergridCity.querySelector(".city");
        sliderCity.innerText = images[num].city;
        let sliderArea = slidergridApartmentArea.querySelector(".apartmentarea");
        sliderArea.innerText = images[num].apartment_area;
        let sliderTime = slidergridRepairTime.querySelector(".repairtime");
        sliderTime.innerText = images[num].repair_time;
        let sliderCost = slidergridRepairCost.querySelector(".repaircost");
        sliderCost.innerText = images[num].repair_cost;
    }

    function initPlay() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        moveSlider(nextNumber);
    }
}
    let sliderOptions = {
    dots: true,
    title: true,
    grid: true,
    play: true
};

document.addEventListener("DOMContentLoaded", function() {
    initSlider(sliderOptions);












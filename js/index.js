const header = document.querySelector("header")
const sections = document.querySelectorAll(".section")


new fullpage('#fullpage', {
    afterLoad: function (origin, destination, direction) {
        if (destination.index == 0) {
                header.classList.add("active");
            } else {
                header.classList.remove("active");
            }
    },
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
    offsetSections : true,
    fixedElements: '#header-section'
});


var swiper = new Swiper(".sec1Swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },

    on: {
        slideChangeTransitionEnd: function () {
            $(".swiper-slide-active").find(".mainTexts").addClass("active")
        },
        slideChange: function(e) {
            console.log(e)
            var currentSlideIndex = e.activeIndex;
            if (currentSlideIndex == 3 || currentSlideIndex == 4) {
                $(".gnb > li > a").addClass("active");
            } else {
                $(".gnb > li > a").removeClass("active");
            }			
        }
    }
});

// Initialize Swiper
var swiper = new Swiper(".sec2Swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    },
});

var swiper = new Swiper(".sec4Swiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    loop: true,
    loopAdditionalSlides : 4,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
});





const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();





const wText1 = document.querySelector(".wText1");
const wText2 = document.querySelector(".wText2");
const wText3 = document.querySelector(".wText3");
const wText4 = document.querySelector(".wText4");
const wText5 = document.querySelector(".wText5");
const dateTag = document.querySelector(".section5 .info div p:nth-of-type(1)")


const calcDate = `${String(year).padStart(2, "0")}${String(month+1).padStart(2, "0")}${String(day).padStart(2, "0")}`;
const calcTime = `${String(hour-1).padStart(2, "0")}30`;

const weatherIcon = document.querySelector(".weatherIcon > img");

fetch(`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=ngqOdvltpGhzMol6rHjhjR06JQdvHSi2z8gtrRpZxqrP1ACdp1TbqPTZ1MhAIMxHZ8nw6BRDHgI%2BMcgLq85pbA%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${calcDate}&base_time=${calcTime}&nx=64&ny=121`)
.then(res => res.json())
.then(data => {
    const sky = data.response.body.items.item[18].fcstValue;

    // function submitSky() {
    //     switch(sky) {
    //         case "1" : 
    //         wText2.innerText = "현재 하늘 맑음🌞";
    //         break;
    //         case "3" :
    //         wText2.innerText = "현재 하늘 구름많음☁";
    //         weatherIcon.src = "../asset/image/main/weather_cloud.png";
    //         break;
    //         case "4" :
    //         wText2.innerText = "현재 하늘 흐림⛅";
    //         weatherIcon.src = "../asset/image/main/weather_tinyCloud.png";
    //         break;
    //         default : wText2.innerText = "일시적으로 불러올 수 없습니다.";
    //     }
    // }
    // setInterval(submitSky, 500);
})


fetch(`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=ngqOdvltpGhzMol6rHjhjR06JQdvHSi2z8gtrRpZxqrP1ACdp1TbqPTZ1MhAIMxHZ8nw6BRDHgI%2BMcgLq85pbA%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${calcDate}&base_time=${calcTime}&nx=64&ny=121`)
.then(res => res.json())
.then(data => {
    const temp = data.response.body.items.item[3].obsrValue;
    const weather = data.response.body.items.item[0].obsrValue;

    function submitTemp() {
        wText1.innerText = `${temp}°C`
        dateTag.innerText = `${month+1}월 ${day}일`
        switch(weather) {
            case "0" : 
            wText3.innerText = `현재 하늘 맑음`;
            weatherIcon.src = "../asset/image/main/weather_sun.png";
            break;
            case "1" : 
            wText3.innerText = `현재 비 옴`;
            weatherIcon.src = "../asset/image/main/weather_rainy.png";
            break;
            // case "2" : wText5.innerText = `현재 비와 눈 옴`; break;
            // case "3" : wText5.innerText = `현재 눈 옴`; break;
            case "5" : 
            wText3.innerText = "현재 하늘 흐림⛅";
            weatherIcon.src = "../asset/image/main/weather_tinyCloud.png";
            break;
            case "6" :
            wText3.innerText = `현재 바람 주의`;
            weatherIcon.src = "../asset/image/main/weather_windy.png";
            break;
            // case "7" : wText5.innerText = `현재 눈`; break;
            default : wText3.innerText = `날씨 불러올 수 없음`;
        }
    }
    setInterval(submitTemp, 500);
}
)

fetch(`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=ngqOdvltpGhzMol6rHjhjR06JQdvHSi2z8gtrRpZxqrP1ACdp1TbqPTZ1MhAIMxHZ8nw6BRDHgI%2BMcgLq85pbA%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${calcDate}&base_time=0500&nx=64&ny=121`)
.then(res => res.json())
.then(data => {
    const rainy = data.response.body.items.item[7].fcstValue;
    const tmn = data.response.body.items.item[301].fcstValue;
    const tmx = data.response.body.items.item[120].fcstValue;

    function submitRainy() {
        wText2.innerText = `강수확률${rainy}%`
        wText4.innerText = `최저${tmn}°C`
        wText5.innerText = `최고${tmx}°C`
        
    }
    setInterval(submitRainy, 500);
})



// const sec1Texts1 = document.querySelector('.text1');
// const sec1Texts2 = document.querySelector('.text2');
// const sec1Texts3 = document.querySelector('.text3');
// const sec1Texts4 = document.querySelector('.text4');

// let ob = new IntersectionObserver(function(entries, observer) {
//     console.log(entries.target)
//     entries.forEach(function(entriesV, entriesK) {
//         if(entriesV.isIntersecting) {
//             entriesV.target.classList.add("active");
//         } else {
//             entriesV.target.classList.remove("active");
//         }
//     })
// })

// function see() {
//     ob.observe(sec1Texts1);
//     ob.observe(sec1Texts2);
//     ob.observe(sec1Texts3);
//     ob.observe(sec1Texts4);
// }

// see();

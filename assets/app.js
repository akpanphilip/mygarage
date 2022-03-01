let backTop = document.querySelector('.backTop');

window.addEventListener('scroll', showBtn);

function showBtn() {
    if (window.pageYOffset > 1400) {
        backTop.style.display = "block";
    } else {
        backTop.style.display = "none";
    }
}
backTop.addEventListener('click', backUp);

function backUp(){
    scrollTo(0,0);
}

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    // console.log(btn);
    console.log(btn);

    btn.addEventListener("click", function () {
        question.classList.toggle("show-text");
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     new Splide('#vehicle', {
//         type: 'loop',
//         perPage: 4,
//         perMove: 1,
//         gap: "30px",
//         pagination: false,
//     }).mount();
// });

    document.addEventListener("DOMContentLoaded", function () {
        new Splide("#vehicle", {
          type: "loop",
          heightRatio: 0.5,
          perPage: 4,
          breakpoints: {
            1024: {
              perPage: 3,
             
            },
            767: {
              perPage: 2,
          
            },
            640: {
              perPage: 1,
        
            },
          },
          focus: "center",
          gap: '2em',
          updateOnMove : true,
          pagination: false,
        }).mount();
      });
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#location', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: "20px",
        pagination: false,
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#explore', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: "20px",
        pagination: false,
    }).mount();
});
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#ratings', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: "20px",
        pagination: false,
    }).mount();
});

    
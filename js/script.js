// плавное затемнение фона header при скролле
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $(".header").addClass("header--scroll");

    } else {
        $(".header").removeClass("header--scroll");
    }
});


const all__view = document.getElementById("all__view");
const living__view = document.getElementById("living__view");
const kitchen__view = document.getElementById("kitchen__view");
const bed__view = document.getElementById("bed__view");
const bath__view = document.getElementById("bath__view");
const pool__view = document.getElementById("pool__view");
const infrastructure__view = document.getElementById("infrastructure__view");


// если в классе есть active, то убрать его и добавить style="display: block"


const tabs = document.querySelectorAll('.view__link');
const views = document.querySelectorAll('.view__galery-images');


tabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
        e.preventDefault();
        let curentTab = tab;


        let TabId = "view_" + e.target.id // получить id таба и добавить к нему view_  
        let curentTabId = document.getElementById(TabId);
        // если tab id = view_all, то  не показать все картинки
        if (e.target.id != "all") {
            if (window.innerWidth < 660) {
                fuck = document.getElementById("view_all_mobile");
                fuck.style.display = "none";
            }
            else {
                fuck = document.getElementById("view_all_desktop");
                fuck.style.display = "none";
            }
        }
        else {
            if (window.innerWidth < 960) {
                fuck = document.getElementById("view_all_mobile");
                fuck.style.display = "block";
            }
            else {
                fuck = document.getElementById("view_all_desktop");
                fuck.style.display = "block";
            }


        }

        tabs.forEach(function (tab) {
            tab.classList.remove('active'); // убрать класс active у всех табов 
        });
        views.forEach(function (view) {
            view.style.display = "none"; // убрать style="display: block" в классе с id = view_ + id таба  
        });


        curentTab.classList.add('active');
        curentTabId.style.display = "block"; // добавить style="display: block" в класс с id = view_ + id таба 

    });
});



const nav_toggle = document.getElementsByClassName("nav-toggle")[0];
const header = document.getElementsByClassName("header")[0];
const nav = document.getElementsByClassName("header__nav")[0];

nav_toggle.addEventListener('click', function (e) {
    e.preventDefault();
    if (window.innerWidth < 860) {
        nav_toggle.classList.toggle('active');
        nav.classList.toggle('active');
        window.scrollTo(10, 10);
        header.addClass("header--scroll");
        // плавное появление и исчезание меню
        nav_toggle.slideToggle(300);
    }
});

// плавное затемнение фона header при скролле
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
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
        if (TabId != "view_all") {
            fuck = document.getElementById("view_all");
            fuck.style.display = "none";
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





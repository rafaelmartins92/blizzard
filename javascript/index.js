"use strict";var allFilters=document.querySelectorAll(".js-nav-games li a"),tabPane=document.querySelectorAll(".tab-pane-games"),slideThumbnail=(allFilters.forEach(function(a,i){a.addEventListener("click",function(e){e.preventDefault(),allFilters.forEach(function(e){e.classList.remove("active")}),tabPane.forEach(function(e){e.classList.remove("active")}),tabPane[i].classList.add("active"),a.classList.add("active")})}),new Swiper(".slide-thumbnail",{slidesPerView:5,direction:"vertical",spaceBetween:20,watchSlidesProgress:!0})),slideHero=new Swiper(".slide-principal",{effect:"fade",thumbs:{swiper:slideThumbnail},autoplay:{delay:5e3,disabledOnInteraction:!1}});
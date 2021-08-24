const navButton = $("#nav-btn");
const navIcon = $("#nav-icon");
const navDropDown = $(".nav-dropdown");
let count = 0;

navButton.click(function () {
    count++;
    if (count % 2 != 0) {
        navDropDown.css("display", "block");
        navIcon.removeClass("fas fa-bars");
        navIcon.addClass("far fa-window-close");
    } else if (count % 2 == 0) {
        navDropDown.css("display", "none");
        navIcon.removeClass("far fa-window-close");
        navIcon.addClass("fas fa-bars");
    };
});
// For main menu dropdown pop-in nad pop-out
// create open function
// function sideMenuAppears1() {
//     document.getElementById("menu-1").style.display = "block";
// document.getElementById("menu-2").style.display = "none";
// document.getElementById("menu-3").style.display = "none";
// }

// function sideMenuAppears2() {
//     document.getElementById("menu-2").style.display = "block";
//     document.getElementById("menu-1").style.display = "none";
//     document.getElementById("menu-3").style.display = "none";
// }

// function sideMenuAppears3() {
//     document.getElementById("menu-3").style.display = "block";
//     document.getElementById("menu-2").style.display = "none";
//     document.getElementById("menu-1").style.display = "none";
// }

// // close the sidebar
// function hideMenu() {
//     document.getElementById("menu-3").style.display = "none";
//     document.getElementById("menu-2").style.display = "none";
//     document.getElementById("menu-1").style.display = "none";
// }

// set open function
// document
//     .getElementById("menu-1-button")
//     .addEventListener("mouseover", sideMenuAppears1);

// document
//     .getElementById("menu-2-button")
//     .addEventListener("mouseover", sideMenuAppears2);

// close menu
// document.getElementById("logo-menu-out")
//     .addEventListener("click", hideMenu);
// another easy way to use

function sideMenuAppears1() {
    document.getElementById("menu-1").classList.toggle("main-menu-appear");
}

function sideMenuAppears2() {
    document.getElementById("menu-2").classList.toggle("main-menu-appear");
}

function sideMenuAppears3() {
    document.getElementById("menu-3").classList.toggle("main-menu-appear");
}

document
    .getElementById("menu-1-button")
    .addEventListener("mouseover", sideMenuAppears1);


document
    .getElementById("menu-2-button")
    .addEventListener("mouseover", sideMenuAppears2);

document
    .getElementById("menu-3-button")
    .addEventListener("mouseover", sideMenuAppears3);



// For side-bar appears and close
function appearSiderMenu() {
    document.querySelector('#side-menu').classList.toggle('show-menu');
}

document
    .getElementById("menu-trigger")
    .addEventListener("click", appearSiderMenu);

function hideSiderMenu() {
    document.querySelector("#side-menu").classList.toggle('show-menu');
}

document
    .getElementById("menu-close")
    .addEventListener("click", hideSiderMenu);

// for side menu sub
//open when click
function appearSiderSub1() {
    document.querySelector('#side-menu-sub-1').classList.toggle('show-menu');
}

document
    .getElementById("side-dropdown-1")
    .addEventListener("click", appearSiderSub1);

//close when hit previous
function closeSiderSub1() {
    document.querySelector('#side-menu-sub-1').classList.toggle('show-menu');
}

document
    .getElementById("back-frontpage-1")
    .addEventListener("click", closeSiderSub1);

//page 2    
function appearSiderSub2() {
    document.querySelector('#side-menu-sub-2').classList.toggle('show-menu');
}

document
    .getElementById("side-dropdown-2")
    .addEventListener("click", appearSiderSub2);

//close when hit previous
function closeSiderSub2() {
    document.querySelector('#side-menu-sub-2').classList.toggle('show-menu');
}

document
    .getElementById("back-frontpage-2")
    .addEventListener("click", closeSiderSub2);

//page 3
function appearSiderSub3() {
    document.querySelector('#side-menu-sub-3').classList.toggle('show-menu');
}

document
    .getElementById("side-dropdown-3")
    .addEventListener("click", appearSiderSub3);

//close when hit previous
function closeSiderSub3() {
    document.querySelector('#side-menu-sub-3').classList.toggle('show-menu');
}

document
    .getElementById("back-frontpage-3")
    .addEventListener("click", closeSiderSub3);

//
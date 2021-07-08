/*!
* Start Bootstrap - NeoPrint3D v7.0.1 (https://github.com/NeoPrint3D/store)
* Copyright 2013-2021 undefined
* Licensed under undefined (https://github.com/StartBootstrap/store/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
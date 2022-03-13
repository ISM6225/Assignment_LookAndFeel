/**
 * Your JS code here
 */

/**
 * Sample code
 */
//document.addEventListener('DOMContentLoaded', function() {
//  var ulElement = document.getElementById('links');
//  var liElement = document.createElement('li');
//  liElement.appendChild(document.createTextNode('created by main.js'));

//  ulElement.appendChild(liElement);
//});
const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');
menu.addEventListener('click', function () {
    menu.classList.toggle('is_active');
    menuLinks.classList.toggle('active');
})
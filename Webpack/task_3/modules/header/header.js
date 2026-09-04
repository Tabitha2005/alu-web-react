// interesting jquery import thanks to babel
import $ from 'jquery';
// styles
import './header.css';

// append elements
$('body').append(`<div id="logo"></div>`);
$('body').append(`<h1>Holberton Dashboard</h1>`);
console.log('Init header');
'use strict';
import '../css/main.css';
const $ = require('jquery');
const _ = require('lodash');

$('body').append('<p>Holberton Dashboard</p>');
$('body').prepend('<div id="logo"></div>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

const updateCounter = () => {
  count++;
  $('#count').text(`${count} clicks on the button`);
};

let count = 0;
$('button').on('click', _.debounce(updateCounter, 500));

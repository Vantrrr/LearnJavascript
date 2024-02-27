// HTML DOM
// Có 3 thành phần 

/**
 * 1. Element: ID, class, tag, css Selector, HTML collection
 * 2. Attribute
 * 3. Text
 */

// 1. Element
// var headingNode = document.getElementsByClassName('heading');
// var headingNodes = document.getElementsByTagName('p');
// var headingNodesd = document.querySelectorAll('.box .heading2:first-child');

// console.log(headingNodesd);

// 2. Attribute

var boxNode = document.querySelector('h1');
boxNode.title = 'heading';
console.log(boxNode);




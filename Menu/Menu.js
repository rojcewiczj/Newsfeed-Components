/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
window.addEventListener('load', (e) => {

const Menu = document.querySelector('.header');
console.log(Menu);

Menu.appendChild(menuCreator(menuItems));



function menuCreator (array) {
  //defining new elements
  const menu = document.createElement('div');
 
  const UL = document.createElement('ul');
  
  //setup for parent/child relationships
   array.forEach(element =>{
     const LI = document.createElement('li');
      UL.appendChild(LI);
      LI.textContent = element;
  
   })
  
  menu.appendChild(UL);
  
  


  /// set class names

  menu.classList.add('menu');


 // set text content
 
 ///



return menu
}

 document.querySelector('.menu-button').addEventListener('click', event => {
  console.log('button clicked', event.target)
  document.querySelector('.menu').classList.toggle('menu--open');
  TweenLite.from(document.querySelector('.menu'), 5, {y: '-=200px', autoAlpha: 0});
})


});
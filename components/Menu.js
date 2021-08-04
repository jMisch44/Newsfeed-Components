// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

//step 1 
function menuMaker(array){
  const menuListHolder = document.createElement('div');
  const menuListStart = document.createElement('ul');
  // let menuItem = document.createElement('li');
  // const student = document.createElement('li');
  // const faculty = document.createElement('li');
  // const whatsNew = document.createElement('li');
  // const techTrends = document.createElement('li');
  // const music = document.createElement('li');
  // const logOut = document.createElement('li');
  
//parent child
  menuListHolder.appendChild(menuListStart);
 
//class names
  menuListHolder.classList.add('menu');
//step 2 iterate over array for menu items
  array.forEach((item) => { 
    let menuItem = document.createElement('li');
    menuListStart.appendChild(menuItem);
    menuItem.textContent = item;
    return menuItem;
  }); 
//toggling menu bar on and off
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', event => {
    menuListHolder.classList.toggle('menu--open');
  })
  return menuListHolder;
}
//appending to header element
const headerElem = document.querySelector('.header');
const madeMenu = menuMaker(menuItems);
headerElem.appendChild(madeMenu);

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

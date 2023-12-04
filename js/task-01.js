const listCategories = document.querySelector('#categories');

const hasChildCategories = listCategories.children;
console.log(`Number of categories: ${hasChildCategories.length}`);

const firstElement = listCategories.firstElementChild;
console.log(`Category: ${firstElement.firstElementChild.textContent}`);
console.log(`Elements: ${firstElement.lastElementChild.children.length}`);

const nextElement = firstElement.nextElementSibling;
console.log(`Category: ${nextElement.firstElementChild.textContent}`);
console.log(`Elements: ${nextElement.lastElementChild.children.length}`);

const lastElement = listCategories.lastElementChild;
console.log(`Category: ${lastElement.firstElementChild.textContent}`);
console.log(`Elements: ${lastElement.lastElementChild.children.length}`);

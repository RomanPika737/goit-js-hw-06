

const categoriesEl = document.querySelectorAll('#categories li.item');
// console.log(categoriesEl);
console.log(`
    Number of categories: ${categoriesEl.length}`);


categoriesEl.forEach(category => {
    const title = category.querySelector('h2');
    // console.log(title);
    const items = category.querySelectorAll('li');
    // console.log(items);

    console.log(`
    Category: ${title.textContent}
    Elements: ${items.length}`);
    

})
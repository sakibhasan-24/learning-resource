/* 
All category : - https://openapi.programming-hero.com/api/videos/categories

ALL data by categoryId
URL Format: - https://openapi.programming-hero.com/api/videos/category/${id}

Example: - https://openapi.programming-hero.com/api/videos/category/1000

*/

// laoding header categories

const headerUrl = ` https://openapi.programming-hero.com/api/videos/categories
`;
fetch(headerUrl)
  .then((res) => res.json())
  .then((data) => getHeaderCategory(data.data));

const categoriesContainer = document.getElementById("categories-container");
function getHeaderCategory(categories) {
  categories.forEach((data) => {
    const allCategory = data.category;
    const h3 = document.createElement("h3");
    h3.innerText = `${allCategory}`;
    categoriesContainer.appendChild(h3);
  });
}

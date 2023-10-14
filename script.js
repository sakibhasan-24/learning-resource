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
const newsContainer = document.getElementById("news-container");
function getHeaderCategory(categories) {
  categories.forEach((data) => {
    console.log(data);
    const allCategory = data.category;
    const h3 = document.createElement("h3");

    h3.innerText = `${allCategory} `;
    categoriesContainer.appendChild(h3);
  });
}
const showCategories = (data) => {
  console.log(data);
};
// loading news all by default
fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
  .then((res) => res.json())
  .then((data) => displayData(data.data));
function displayData(newsData) {
  newsData.forEach((news) => {
    console.log(news);
    const newsDiv = document.createElement("div");
    newsDiv.innerHTML = `
    
    <div class="news">
          <div class="image-container">
            <img
              src="${news.thumbnail}"
              alt=""
            />
            <p class="minutes">${news.others.posted_date}</p>
          </div>
          <div class="info">
            <div class="icon">
              <img src="${news.authors[0].profile_picture}" alt="" />
            </div>
            <div class="text">
              <h2 class="news-title">
               ${news.title}
              </h2>
              <p>${news.authors[0].profile_name} <span class="verfiy">icon</span></p>
              <p>${news.others.views}</p>
            </div>
          </div>
        </div>
    
    `;
    newsContainer.appendChild(newsDiv);
  });
}

// loading by categories

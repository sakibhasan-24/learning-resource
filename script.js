/* 
All category : - https://openapi.programming-hero.com/api/videos/categories

ALL data by categoryId
URL Format: - https://openapi.programming-hero.com/api/videos/category/${id}

Example: - https://openapi.programming-hero.com/api/videos/category/1000

*/

const categoriesContainer = document.getElementById("categories-container");
const newsContainer = document.getElementById("news-container");
const noContent = document.getElementById("no-content");

// laoding header categories

const headerUrl = ` https://openapi.programming-hero.com/api/videos/categories
`;
fetch(headerUrl)
  .then((res) => res.json())
  .then((data) => getHeaderCategory(data.data));
function getHeaderCategory(categories) {
  categories.forEach((data) => {
    // console.log(data);
    const allCategory = data.category;
    const h3 = document.createElement("h3");

    h3.innerHTML = `<span onclick="showCategories('${data.category_id}')"> ${allCategory}</span>`;
    categoriesContainer.appendChild(h3);
  });
}
const showCategories = (id) => {
  newsContainer.style.opacity = "0";
  newsContainer.textContent = "";
  fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.data.length === 0) {
        return (noContent.style.display = "block");
      }
      noContent.style.display = "none";
      displayData(data.data);
    });
};
// loading news all by default
fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
  .then((res) => res.json())
  .then((data) => displayData(data.data));

function displayData(newsData) {
  newsData.forEach((news) => {
    // console.log(news);
    const newsDiv = document.createElement("div");
    newsContainer.style.opacity = "1";
    const timeRemaining = convertSecond(news.others.posted_date);
    console.log(timeRemaining);
    const handleTime =
      timeRemaining === "0 hrs 0 minutes " ? "upcoming" : timeRemaining;
    // console.log(timeRemaining);
    newsDiv.innerHTML = `
    
    <div class="news">
          <div class="image-container">
            <img
              src="${news.thumbnail}"
              alt=""
            />
            <p class="minutes">${handleTime}</p>
          </div>
          <div class="info">
            <div class="icon">
              <img src="${news.authors[0].profile_picture}" alt="" />
            </div>
            <div class="text">
              <h2 class="news-title">
               ${news.title}
              </h2>
              <p class="author-name">${
                news.authors[0].profile_name
              } <span class="verfiy">${
      news.authors[0].verified
        ? "<img class='verify-icon' src='https://seeklogo.com/images/S/steam-deck-compatibility-verified-icon-logo-22967717C1-seeklogo.com.png' alt='icon'/>"
        : ""
    }</span></p>
              <p class='views'>${news.others.views}</p>
            </div>
          </div>
        </div>
    
    `;
    newsContainer.appendChild(newsDiv);
  });
}

// loading by categories

// function seconds to minutes

function convertSecond(second) {
  const hours = second / 3600;
  // console.log(hours)
  const remainingSecond = second % 3600;
  const message = `${Math.floor(hours)} hrs ${Math.floor(
    remainingSecond / 60
  )} minutes `;
  // console.log(message);
  return message;
}

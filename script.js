/* 
All category : - https://openapi.programming-hero.com/api/videos/categories

ALL data by categoryId
URL Format: - https://openapi.programming-hero.com/api/videos/category/${id}

Example: - https://openapi.programming-hero.com/api/videos/category/1000

*/
fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
  .then((res) => res.json())
  .then((data) => console.log(data.data[3]));

function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
  .then((data) => displayCategories(data.categories))
}

function displayCategories(categories) {
  //get the contaier....
  const categoryContainer = document.getElementById("category-container");

  //Loop operation on Array of object
  for (let cat of categories) {
    //creat element..
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
      
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>

      
    `;
    //Appaend the Elements

    categoryContainer.append(categoryDiv);
  }


}

loadCategories();
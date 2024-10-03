
const categoryFetching = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data = await res.json();
    displayCategoryBtn(data.categories)
    
}

const displayCategoryBtn = (data) =>{
    const categoryBtnDiv = document.getElementById('category-btn');
    data.map((item)=>{
        categoryBtnDiv.innerHTML += `
            <button class="btn"> ${item.category} </button>
        `
        
    })
    
}

categoryFetching();

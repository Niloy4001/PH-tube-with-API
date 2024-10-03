// category button fetching
const categoryFetching = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
        const data = await res.json();
        displayCategoryBtn(data.categories)
    }
    catch (err) {
        console.log('an error happened', err);

    }


}



// videos fetching

const videosFetching = async () => {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
        const data = await response.json();
        displayVideos(data.videos);
    }
    catch (error) {
        console.log('an error happened', error);

    }

}



// display category btn function
const displayCategoryBtn = (data) => {
    const categoryBtnDiv = document.getElementById('category-btn');
    data.map((item) => {
        categoryBtnDiv.innerHTML += `
            <button class="btn"> ${item.category} </button>
        `

    })

}

// display videos function 
const displayVideos = (data) => {
    const videosBox = document.getElementById('videosDiv');
    videosBox.innerHTML = '';
    
    data.map((item) =>{
        // console.log(item);
        console.log(item.thumbnail);
        videosBox.innerHTML +=
        `
            <div class="card card-compact bg-base-100 w-full">
                <figure class="h-[200px]">
                    <img src="${item.thumbnail}" class="w-full h-full object-cover" alt="Shoes" />
                </figure>
                <div class="py-2 flex gap-2">
                    <div class="w-[10%] rounded-full"><img src="asset/Logo.png" class="w-full" alt=""></div>
                    <div class="space-y-2">
                        <h1 class="font-bold text-base text-[#171717]">Building a Winning UX Strategy Using the Kano Model</h1>
                        <div class="font-normal text-sm text-[#171717]/[0.7] flex items-center gap-2">
                            <h1>Awlad Hossain</h1><i><img src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" class="w-4 h-4" alt=""></i>
                        </div>
                        <p  class="font-normal text-sm text-[#171717]/[0.7]">91K views</p>
                    </div>

                </div>
            </div>
    `
        
    })
    
}

categoryFetching();
videosFetching();

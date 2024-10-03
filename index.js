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

    data.map((item) => {
        // console.log(item);
        // console.log(item.title);
        console.log(item.others.posted_date);
        // console.log(item.authors[0].verified);
        // <img src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" class="w-4 h-4" alt=""></img>

        videosBox.innerHTML +=
            `
            <div class="card card-compact bg-base-100 w-full">
                <figure class="h-[200px] relative">
                    <img src="${item.thumbnail}" class="w-full h-full object-cover" alt="Shoes" />
                    <div class="absolute right-1 bottom-2 rounded bg-[#171717] text-[12px] font-normal text-white ">
                    <div>${item.others.posted_date !== '' ?  getTime(item.others.posted_date) : ''}</div>
                    </div>
                </figure>
                <div class="py-2 flex gap-2">
                    <div class="w-[9%] rounded-full h-7"><img src="${item.authors[0].profile_picture}" class="w-full rounded-[100%] h-full object-cover"  alt=""></div>
                    <div class="space-y-2">
                        <h1 class="font-bold text-base text-[#171717]">${item.title}</h1>
                        <div class="font-normal text-sm text-[#171717]/[0.7] flex items-center gap-2">
                            <h1>${item.authors[0].profile_name}</h1>
                            <i>${item.authors[0].verified == true ? `<img src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" class="w-4 h-4" alt=""></img>` : ``}</i>
                        </div>
                        <p  class="font-normal text-sm text-[#171717]/[0.7]">${item.others.views}</p>
                    </div>

                </div>
            </div>
    `

    })

}
//  time conversion
const getTime = (string) => {
    const hours = parseInt(string / 3600);
    const min = parseInt((string % 3600) / 60);
    return (` ${hours} hrs ${min} min ago `);

}

categoryFetching();
videosFetching();

const handleCatagory = async () => {
    const respons = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await respons.json();

    const tabContainer = document.getElementById('tab-container');

    const trimData = data.data;
    trimData.forEach((catagory) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <a onclick="handleLoad(${catagory.category_id})" class="tab">${catagory.category}</a>
        `
        tabContainer.appendChild(div);


    });

    // console.log(data.data);
}


const handleLoad = async (catagoryId) => {
    // console.log(catagoryId);

    const respons = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catagoryId}`);
    const data = await respons.json();

    console.log(data.data);


    const cardContainer = document.getElementById('card-container');
    // clear the old cards
    cardContainer.innerHTML = "";


    // ---------- no found------------
    if (data.data.length === 0) {
        console.log('no found');

        cardContainer.classList.remove("grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-3");


        cardContainer.innerHTML = `
        <div class="flex flex-col text-center items-center text-3xl font-bold mt-40">
        <div>
            <img src="./images/Icon.png" alt="">
        </div>
        <div>
            <p>Oops!! Sorry, There is no <br> content here</p>
        </div>
    </div>
        
        `

    }
    else {
        cardContainer.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-3");

    }
    // -----------------------------



    data.data.forEach((cards) => {
        const div = document.createElement("div");

        // ----------------------------

        // console.log(cards.authors[0].profile_picture);
        div.innerHTML = `
        
        <div class="card  bg-base-100 shadow-xl">
        <!-- card main img -->
        <figure><img src=${cards?.thumbnail} /></figure>
        <div class="card-body">
            <div class="flex">
                <div>
                    <!-- card profile img -->
                      <figure><img class="rounded-full w-10 h-10" src=${cards?.authors[0]?.profile_picture} /></figure>
                </div>

                <div>
                    <!-- title -->
                    <h2 class="card-title">${cards?.title}</h2>

                    <div class="flex">
                        <div>
                            <!-- profile name -->
                            <p>${cards?.authors[0]?.profile_name}</p>
                        </div>

                        <div  class="pl-1 text-blue-600">
                         ${cards?.authors[0]?.verified ? '<i class="fa-solid fa-circle-check"></i>' : ""}
                       
                        </div>
                    </div>

                    <!-- views -->
                    <p>${cards?.others?.views}</p>

                </div>
            </div>

        </div>
    </div>
        
        `

        cardContainer.appendChild(div);

    })
}

handleCatagory();

handleLoad("1000");
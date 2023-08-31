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

    console.log(data.data);
}


const handleLoad = async(catagoryId) =>{
    // console.log(catagoryId);
    const respons = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catagoryId}`);
    const data = await respons.json();
    // console.log(data.data);

    const cardContainer = document.getElementById('card-container');
    data.data.forEach((cards) => {
        const div = document.createElement("div");
        div.innerHTML = `
        
        <div class="card  bg-base-100 shadow-xl">
        <!-- card main img -->
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div class="card-body">
            <div class="flex">
                <div>
                    <!-- card profile img -->
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="">
                </div>

                <div>
                    <!-- title -->
                    <h2 class="card-title">Shoes!</h2>
                    <div>
                        <div>
                            <!-- profile name -->
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                        <div>
                            <!-- blue verified -->

                        </div>
                    </div>
                    <!-- views -->
                    <p> views </p>

                </div>
            </div>

        </div>
    </div>
        
        `

        cardContainer.appendChild(div);

    })
}

handleCatagory();
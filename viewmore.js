// console.log(localStorage.getItem("id"));

// async function getProducts() {
//     const response = await fetch(`https://dummyjson.com/products/${id}`);
//     const product = await response.json();
//     display(product);
// }

// function display(product){
//     let details = document.getElementById("product");
//     console.log(product);
//     details.innerHTML=`
//     <div class="box">
//     <div class="leftbox">
//     <img src="${product.thumbnail}">
//     </div>
//     <div class="rightnox">
//     <h1>${product.tittle}</h1>
//     <h3><span class="productTittle">Brand:</span> ${product.brand} </h3>
//      <h3><span class="productTittle">Category:</span> ${product.category} </h3>
//      <span class="productTittle"></span>
//      <p> <span class="productTittle">Description:</span> ${product.user}
//     </div>
    
//     </div>

    
//     `;
// }









// const id = localStorage.getItem("id");
// console.log(id);

// async function getProducts() {
//     const response = await fetch(`https://dummyjson.com/products/${id}`);
//     const product = await response.json();
//     display(product);
// }

// function display(product) {
//     let details = document.getElementById("product");

//     details.innerHTML = `
//         <div class="box">
//             <div class="leftbox">
//                 <img src="${product.thumbnail}" alt="${product.title}">
//             </div>

//             <div class="rightbox">
//                 <h1>${product.title}</h1>
//                 <p><span class="productTitle">Brand:</span> ${product.brand}</p>
//                 <p><span class="productTitle">Category:</span> ${product.category}</p>
//                 <span class="productTitle"></span>
//                 <p><span class="productTitle">price:</span>${(product.price * 96.54).toFixed(2)}  INR</p>
//                 <p><span class="productTitle">Rating:</span> ${"⭐".repeat(product.rating.tofixed())}</p>
//                 <p> <span class="productTitle">WarrnantyInformation:</span> ${product.warrantyInformation}</p>
//                 <p><span class="productTitle">Description:</span> ${product.description}</p>
//                 <button>Add to Card</button>
//                 <button>Add to Wishlist ${"❤️"}</button>
//             </div>
//         </div>
//     `;
// }

// getProducts();

// const id = localStorage.getItem("id");
//  console.log(id);

//  async function getProducts() {
//     const response = await fetch(`https://dummyjson.com/products/${id}`);
//      const product = await response.json();
//      display(product);
// }



// function display(product) {
//     let details = document.getElementById("product");

//     details.innerHTML = `
//         <div class="box">
//             <div class="leftbox">
//                 <img src="${product.thumbnail}" alt="${product.title}">
//             </div>

//             <div class="rightbox">
//                 <h1>${product.title}</h1>

//                 <p><span class="productTitle">Brand:</span> ${product.brand}</p>

//                 <p><span class="productTitle">Category:</span> ${product.category}</p>

//                 <p><span class="productTitle">Price:</span> ₹${(product.price * 96.54).toFixed(2)} INR</p>

//                 <p><span class="productTitle">Rating:</span> ⭐ ${product.rating}</p>

                

//                 <p><span class="productTitle">Warranty:</span> ${product.warrantyInformation}</p>

//                 <p><span class="productTitle">Description:</span> ${product.description}</p>

//                 <button>Add to Cart</button>
//                 <button>Add to Wishlist ❤️</button>
//             </div>
//         </div>
//     `;

//     let reviews = document.getElementById("reviews");

//     product.reviews.foreach((ele)=>{
//         console.log(ele);
//         reviews.innerHTML +=`
//         <div class="review_Card">
//         <div class="reviweHead">
//         <p>${"⭐".repeat(ele.rating)}</p>
//         </div>
//         <div>
//         <p>${ele.comment}</p>
//         </div>
//         </div>

//         `;
//     })

//     reviews.innerHTML +=`
//     <input id="newReview" type="text"/>
//     <button> Submit Feedback</button>
    
//     `;





// }

// getProducts();


const id = localStorage.getItem("id");
console.log(id);


async function getProducts() {

    const response = await fetch(`https://dummyjson.com/products/${id}`);

    const product = await response.json();

    display(product);

}



function display(product) {

    let details = document.getElementById("product");


    details.innerHTML = `

    <div class="box">

        <div class="leftbox">

            <img src="${product.thumbnail}" alt="${product.title}">

        </div>


        <div class="rightbox">

            <h1>${product.title}</h1>


            <p>
            <span class="productTitle">Brand:</span> 
            ${product.brand}
            </p>


            <p>
            <span class="productTitle">Category:</span> 
            ${product.category}
            </p>


            <p>
            <span class="productTitle">Price:</span> 
            ₹${(product.price * 96.54).toFixed(2)} INR
            </p>


            <p>
            <span class="productTitle">Rating:</span> 
            ⭐ ${product.rating}
            </p>


            <p>
            <span class="productTitle">Warranty:</span> 
            ${product.warrantyInformation}
            </p>


            <p>
            <span class="productTitle">Description:</span> 
            ${product.description}
            </p>


            <button>Add to Cart</button>

            <button>Add to Wishlist ❤️</button>


        </div>

    </div>

    `;



    let reviews = document.getElementById("reviews");


    product.reviews.forEach((ele)=>{


        reviews.innerHTML += `

        <div class="review_Card">

            <div class="reviewHead">

                <p>${"⭐".repeat(ele.rating)}</p>

            </div>


            <div>

                <p>${ele.comment}</p>

            </div>


        </div>

        `;


    });



    reviews.innerHTML += `

    <input id="newReview" type="text" placeholder="Write your feedback">

    <button>
        Submit Feedback
    </button>

    `;


}



getProducts();


let products = [];

async function fetchProduct() {
 let response = await fetch("https://dummyjson.com/products");
 let data = await response.json();
 allProducts = [];
 allProducts = data.products; 

 displayProducts(allProducts);
}

function displayProducts(products){
    const container=document.getElementById("root");
    container.innerHTML="";
    console.log(products);

    products.forEach((ele)=>{
        container.innerHTML+=`
        <div class="card">
            <div class="img_container">
                <img src="${ele.thumbnail}"/>
            </div>
      
        <div class="main_conatiner">

        <h1>${ele.title.slice(0,15).concat("...")}</h1>
        <p>category:${ele.category}</p>
        <p>price:${(ele.price * 96.54).toFixed()}INR </p>
        <p>rating:$c
        <div class="viewcontainer"><a href="viewmore.html" onclick="getProduct(${ele.id})">view more...</a></div></div>
         </div>
         
         
         
         

        `;
        
        
    });
}
fetchProduct();



let  sea = document.querySelector('[name="SearchProduct"]');

 sea.addEventListener("input",(eve)=>{
    let value = eve.target.value.toLowerCase()

    let filterProduct = allProducts.filter((pro)=>
        pro.title.toLowerCase().includes(value)
    );
    displayProducts(filterProduct);
 });


const popup = document.getElementById("popup");
const btn = document.getElementById("btn");

window.onload = () => {
    popup.style.display = "flex";
};

btn.onclick = () => {
    popup.style.display = "none";
};


function getProduct(id){
    localStorage.setItem("id",id);

    
}




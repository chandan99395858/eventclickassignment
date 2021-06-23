console.log("Script Loaded!!!");


var productData = {
  "id": "1",
  "name": "Men Navy Blue Solid Sweatshirt",
  "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  "photos": [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
  ],
  "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  "size": [
    1,
    1,
    0,
    1,
    0
  ],
  "isAccessory": false,
  "brand": "United Colors of Benetton",
  "price": 2599
}

// Selecting the Product Main Page
var productMainPage = document.getElementById("product-mainpage");


// ============ Creating Product Details Page ============ // 

//*** Creating Product Container  ***// 
var productContainer = document.createElement('div');         // Entire Container 
productContainer.id = "product-container";


//============ Creating Image Section ============// 
//*** Creating Product Image Container - Main ***// 
var mainImageContainer = document.createElement('div');
mainImageContainer.className = "left-mainImage";

//*** Creating the Product Image Element - Main ***//  
var mainImage = document.createElement('img');
mainImage.id = "main-image";
mainImage.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"

//*** Appending the Product Image to the Container ***// 
mainImageContainer.appendChild(mainImage);                //  Appending MainImage to the MainImageContainer
productContainer.appendChild(mainImageContainer);         //  Appending MainImageContainer to the ProductContainer


//============ Creating Details Section ============//
//*** Creating Product Details Container - Main ***// 
var detailsContainer = document.createElement('div');
detailsContainer.className = "right-productdetails";

var productDescription = document.createElement('div');    // Product description - Container 
productDescription.className = "product-description";

//*** Creating Name Element - Product Name  ***// 
var productName = document.createElement('h1');
productName.id = "name";
productName.innerHTML = productData.name;
//*** Append Name Element to Product description ***//
productDescription.appendChild(productName);

//*** Creating Brand Element - Product Brand ***// 
var brandName = document.createElement('h4');
brandName.id = "brand";
brandName.innerHTML = productData.brand;
//*** Append Brand Element to Product description ***// 
productDescription.appendChild(brandName);

//*** Creating Price Element - Product Price ***// 
var productPrice = document.createElement('h3');
productPrice.className = "product-price";
productPrice.innerHTML = "Price: Rs ";

var priceAmount = document.createElement('span');    // Span Element for Price Amount 
priceAmount.id = "price-amount";
priceAmount.innerHTML = productData.price;
productPrice.appendChild(priceAmount);               // Appending Price Amount to Product Price

//*** Append Price Element to Product description ***//
productDescription.appendChild(productPrice);


//*** Creating Description Element - Product Description ***// 
var productInfo = document.createElement('div');             // Product Information Container
productInfo.className = "product-info";

var infoTitle = document.createElement('h3');                // Product Information Title
infoTitle.className = "info-title";
infoTitle.innerHTML = "Description";
productInfo.appendChild(infoTitle);                          // Append Information Title to Information Container

var infoDetails = document.createElement('p');               // Product Information Details
infoDetails.id = "info-details";
infoDetails.innerHTML = productData.description;
productInfo.appendChild(infoDetails);                        // Append Information Details to Information Container

//*** Append Description Element to Product description ***// 
productDescription.appendChild(productInfo);


//*** Creating Preview Element - Product Preview ***// 
var productPreview = document.createElement('div');           // Product Preview Container 
productPreview.className = "product-preview";

var previewTitle = document.createElement('h3');              // Product Preview Title 
previewTitle.className = "preview-title";
previewTitle.innerHTML = "Product Preview";
productPreview.appendChild(previewTitle);                     // Append Preview Title to Preview Container

var previewImageWrapper = document.createElement('div');      // Preview Image Container 
previewImageWrapper.className = "preview-imageWrapper";

for (var pos = 0; pos < productData.photos.length; pos++) {       // Create Preview Images 
  var previewImage = document.createElement('img');
  previewImage.className = "preview-image";
  previewImage.id = "img" + pos;
  if (pos === 0) {
    previewImage.classList.add('active');                     // Adding Active class to the first Preview Image
  }
  previewImage.src = productData.photos[pos];
  previewImageWrapper.appendChild(previewImage);              // Append Preview Image to the Wrapper for each Image
}

productPreview.appendChild(previewImageWrapper);              // Append Image Wrapper to Preview Container


//*** Append Preview Element to Product description ***// 
productDescription.appendChild(productPreview);

//*** Append Product Description to Details Container ***/
detailsContainer.appendChild(productDescription);

//*** Creating Button Element - Add To Cart Button ***// 
var btnContainer = document.createElement('div');            // Button Container
btnContainer.className = "btn-container";



//*** Append Button to Details Container ***/
detailsContainer.appendChild(btnContainer);


//*** Appending the Product Details to the Container ***// 
productContainer.appendChild(detailsContainer);

//*** Appending the Product Image and Details to the Main Product  ***// 
productMainPage.appendChild(productContainer);



// For Debugging 
// productMainPage.appendChild(detailsContainer)
// console.log(productContainer); 


//=====================  On Click Change ========================== //  

// Toggle Class Function 

function toggleClass(previewPhoto) {
  //console.log(previewPhoto);
  // console.log(preImages.length);
  /*
  preImages[0].classList.remove('active');
  preImages[1].classList.remove('active');
  preImages[2].classList.remove('active');
  preImages[3].classList.remove('active');
  preImages[4].classList.remove('active');  */

  for (var pos = 0; pos < preImages.length; pos++) {
    preImages[pos].classList.remove('active');             // Remove Class from Other Images 
  }
  previewPhoto.classList.add('active');                    // Add Class to the Present One 
}

// var preImages = document.querySelectorAll('.preview-imageWrapper img');
var preImages = document.getElementsByClassName('preview-image');
console.log(preImages);

preImages[0].addEventListener("click", function () {
  // preImages[0].style.border = "2px dotted red";
  mainImage.src = productData.photos[0];
  toggleClass(preImages[0]);
});

preImages[1].addEventListener("click", function () {
  // preImages[1].style.border = "2px dotted red";
  mainImage.src = productData.photos[1];
  toggleClass(preImages[1]);
});

preImages[2].addEventListener("click", function () {
  // preImages[2].style.border = "2px dotted red";
  mainImage.src = productData.photos[2];
  toggleClass(preImages[2]);
});

preImages[3].addEventListener("click", function () {
  // preImages[3].style.border = "2px dotted red";
  mainImage.src = productData.photos[3];
  toggleClass(preImages[3]);
});

preImages[4].addEventListener("click", function () {
  // preImages[4].style.border = "2px dotted red";
  mainImage.src = productData.photos[4];
  toggleClass(preImages[4]);
});

document.addEventListener("DOMContentLoaded", function() {
    var categoryLinks = document.querySelectorAll('.category');
    var subcategoriesContainer = document.getElementById('subcategories');
    var selectedCategoryVideo = document.querySelector('#selected-category-video');
    var landscapeRec= document.querySelector('.landscape-rec.defaultlandscape');

    var category=window.location.hash.replace('#','');
    
    
    if (category) {
        updateContentnVid(category);
    }


     var subcategoriesContent={
        'women': `  <div class="subcategories">
            <div class="subcategory">   <a href="wtops.html"><img src="topswomenFF.jpg" alt="tops"></a> <h2>Tops</h2> </div>
            <div class="subcategory">  <a href="wbottoms.html"><img src="bottomswomenFF.jpg" alt="bottoms">  </a> <h2>Bottoms</h2> </div>
            <div class="subcategory">  <a href="dress.html"> <img src="dressesFF.jpg" alt="dresses">  </a> <h2>Dresses</h2>  </div>
            <div class="subcategory">  <a href="wouterwear.html"> <img src="jacketswomenFF.jpg" alt="jackets"> </a> <h2>Jackets & Coats</h2> </div>
            <div class="subcategory">  <a href="wsportswear.html"> <img src="sportswearFF.jpg" alt="sportswear"></a> <h2>SportsWear</h2> </div>
            <div class="subcategory"> <a href="wshoes.html"><img src="shoes2womenFF.jpg" alt="shoes"> </a> <h2>Shoes</h2> </div>
            <div class="subcategory">  <a href="wbag.html"><img src="bagswomenFF.jpg" alt="bags"></a><h2>Bags</h2> </div>
            <div class="subcategory"> <a href="waccessories.html"><img src="accessoriesFF.jpg" alt="accessories"> </a><h2>Accessories</h2> </div>
           
        </div>`
        ,
        'men' : `  <div class="subcategories"> <div class="subcategory">   <a href="mtops.html"><img src="topsmenFF.jpg" alt="tops"></a> <h2>Tops</h2> </div>
        <div class="subcategory">  <a href="mbottoms.html"><img src="bottomsmenFF.jpg" alt="bottoms">  </a> <h2>Bottoms</h2> </div>
        <div class="subcategory">  <a href="mouterwear.html"> <img src="jacketsmenFF.jpg" alt="jackets"> </a> <h2>Jackets & Coats</h2> </div>
        <div class="subcategory">  <a href="msportwear.html"> <img src="sportswearF.jpg" alt="sportswear"></a> <h2>SportsWear</h2> </div>
        <div class="subcategory"> <a href="mshoes.html"><img src="shoesmenFF.jpg" alt="shoes"> </a> <h2>Shoes</h2> </div>
        <div class="subcategory">  <a href="mbags.html"><img src="menbags2F.jpg" alt="bags"></a><h2>Bags</h2> </div>
        <div class="subcategory"> <a href="maccessories.html"><img src="accessoriesmenFF.jpg" alt="accessories"> </a><h2>Accessories</h2> </div> </div> `
        ,
        'girls': ` <div class="subcategories"> <div class="subcategory"><a href="girltop.html"><img src="girlstopsFF.jpg" alt="tops"></a><h2>Tops</h2> </div>
        <div class="subcategory"><a href="girlbottom.html"><img src="girlsbottomsFF.jpg" alt="bottoms"></a><h2>Bottoms</h2></div>
        <div class="subcategory"><a href="girldess.html"><img src="girlsdressesF.jpg" alt="dresses"></a><h2>Dresses</h2></div>
        <div class="subcategory"><a href="girljacket.html"><img src="girlsjacketsF.jpg" alt="jackets & coats"></a><h2>Jackets & Coats</h2></div>
        <div class="subcategory"><a href="girlsportwear.html"><img src="girlssportswearF.jpg" alt="sportswear"></a><h2>SportsWear</h2></div>
        <div class="subcategory"><a href="girlcustomes.html"><img src="girlscostumesF.jpg" alt="costumes"></a><h2>Costumes</h2></div>
        <div class="subcategory"><a href="girlshoes.html"><img src="girlshsoesF (1).jpg" alt="shoes"></a><h2>Shoes</h2></div>
        <div class="subcategory"><a href="girlbag.html"><img src="girlsbagsF.jpg" alt="bags"></a><h2>Bags</h2></div>
        <div class="subcategory"><a href="girlaccessories.html"><img src="girlsaccessoriesF.jpg" alt="accessories"></a><h2>Accessories</h2></div> </div>`
        ,
        'boys':`  <div class="subcategories">  <div class="subcategory"><a href="boytop.html"><img src="boystopsF.jpg" alt="tops"></a><h2>Tops</h2></div>
        <div class="subcategory"><a href="boybottom.html"><img src="boysbottomsF.jpg" alt="bottoms"></a><h2>Bottoms</h2></div>
        <div class="subcategory"><a href="boyjackets.html"><img src="boysjacketsF.jpg" alt="jackets & coats"></a><h2>Jackets & Coats</h2></div>
        <div class="subcategory"><a href="boysportwear.html"><img src="boyssportswearF.jpg" alt="sportswear"></a><h2>SportsWear</h2></div>
        <div class="subcategory"><a href="boycostumes.html"><img src="boyscostumesF.jpg" alt="costumes"></a><h2>Costumes</h2></div>
        <div class="subcategory"><a href="boybag.html"><img src="boysshoesF.jpg" alt="shoes"></a><h2>Shoes</h2></div>
        <div class="subcategory"><a href="boybag.html"><img src="boysbagF.jpg" alt="bags"></a><h2>Bags</h2></div>
        <div class="subcategory"><a href="boyaccessories.html"><img src="boysaccessoriesF.jpg" alt="accessories"></a><h2>Accessories</h2></div> </div>`

        ,
        'baby': `   <div class="subcategories"> <div class="subcategory"><a href="bbsleepsuit.html"><img src="babysleepsuitsF.jpg" alt="sleepsuits"></a><h2>Sleepsuits</h2></div> 
         <div class="subcategory"> <a href="bbbodysuit.html"><img src="babybodysuitsF.jpg" alt="bodysuits"></a><h2>Bodysuits</h2></div>
        <div class="subcategory"><a href="bbtops.html"><img src="babytopsF.jpg" alt="tops"></a><h2>Tops</h2></div>
        <div class="subcategory"><a href="bbbottoms.html"><img src="babybottomsF.jpg" alt="bottoms"></a><h2>Bottoms</h2></div>
       <div class="subcategory"><a href="bbjackets.html"><img src="babyjacketsF.jpg" alt="jackets"></a><h2>Jackets</h2></div>
        <div class="subcategory"><a href="bbcostumes.html"><img src="babycostumesF.jpg" alt="costumes"></a><h2>Costumes</h2></div>
        <div class="subcategory"> <a href="bbshoes.html"><img src="babyshoes2FF.jpg" alt="shoes"></a><h2>Shoes</h2></div>
        <div class="subcategory"><a href="bbaccessories.html"><img src="babyaccessoriesF.jpg" alt="accessories"></a><h2>Accessories</h2></div> </div> `

        ,
        'home': `  <div class="subcategories"> <div class="subcategory"><a href="HomeFragrance.html"><img src="homefragranceF.jpg" alt="home fragrance"></a>Home Fragrance</h2> </div>
        <div class="subcategory"><a href="HomeFurniture.html"><img src="homefurnitureF.jpg" alt="Furniture"></a>Furniture</h2></div>
        <div class="subcategory"><a href="HomeDining.html"><img src="homediningF.jpg" alt="dining"></a>Dining</h2></div>
        <div class="subcategory"><a href="HomeKitchen.html"><img src="homekitchenF.jpg" alt="kitchen"></a>Kitchen</h2></div>
        <div class="subcategory"><a href="HomeBath.html"><img src="homebathF.jpg" alr="bathroom"></a>Bathroom</h2></div>
        <div class="subcategory"><a href="HomeDecore&lighting.html"><img src="homelightingF.jpg" alt="decor & lighting"></a>Decor & Lighting</h2></div></div>`
  
     };

     var videoSrcs={
       'women': 'womenvid.mp4', 
       'men': 'menvid.mp4', 
       'girls': 'girlsvid.mp4', 
       'boys': 'boysvid3.mp4', 
       'baby':'babyvid.mp4', 
       'home': 'homevid.mp4'
     };

    var landscape={
        'women': 'landscapewmn.jpg',
        'men': 'landscapemen.jpg' ,
        'girls': 'landscapegirls222.jpg' ,
        'boys': 'landscapeboys.jpg' ,
        'baby': 'landscapebaby.jpg' ,
        'home':'landscapehome2.jpg' 
    };

     function updateContentnVid(category){
        subcategoriesContainer.innerHTML='';

        subcategoriesContainer.innerHTML+=subcategoriesContent[category];
        selectedCategoryVideo.src=videoSrcs[category];
        selectedCategoryVideo.load();

        document.getElementById('landscape-image').src=landscape[category];
        document.getElementById('landscape-image').alt=category.charAt(0).toUpperCase() + category.slice(1); // Update alt text
      
     }

     function getURLParameter(name) {
        return new URLSearchParams(window.location.search).get(name);
    }

     

     categoryLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
        
            event.preventDefault();
          
            var category = this.getAttribute('data-category');
            updateContentnVid(category);
        });
    });

});
// Search Function

const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("keyup", function(){

    let filter = searchBox.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let text = card.querySelector("h3").textContent.toLowerCase();

        if(text.includes(filter)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});


// Open Image

function openImage(src){
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}


// Close Image

function closeImage(){
    document.getElementById("lightbox").style.display = "none";
}
$(document).ready(function(){

    // AJAX CALL
    $.ajax({
        url: "https://fakestoreapi.com/products?limit=4",
        method: "GET",
        success: function(data){

            $("#featured-container").html("");

            data.forEach(function(product){

                let card = `
                    <div class="featured-card
                    
                    
                    ">
                        <div class="imgwrap">
                            <img src="${product.image}" class="normal">
                        </div>

                        <div class="scard-text">
                            <p>${product.title.substring(0,40)}...</p>
                            <p>$${product.price}</p>

                            <button class="quick-view"
                                data-title="${product.title}"
                                data-desc="${product.description}"
                                data-rating="${product.rating.rate}">
                                Quick View
                            </button>
                        </div>
                    </div>
                `;

                $("#featured-container").append(card);
            });
        }
    });

    // QUICK VIEW CLICK
    $(document).on("click", ".quick-view", function(){

        $("#modal-title").text($(this).data("title"));
        $("#modal-desc").text($(this).data("desc"));
        $("#modal-rating").text("Rating: " + $(this).data("rating"));

        $("#modal").css("display", "flex");
    });

    // CLOSE MODAL
    $("#close").click(function(){
        $("#modal").hide();
    });

    // CLOSE ON OUTSIDE CLICK
    $(window).click(function(e){
        if(e.target.id === "modal"){
            $("#modal").hide();
        }
    });

});


$(document).ready(function() {
    // 1️⃣ AJAX call to fetch and inject featured deals
    $.ajax({
        url: "https://fakestoreapi.com/products?limit=4",
        method: "GET",
        success: function(data){
            // generate cards dynamically
        }
    });

    // 2️⃣ Quick View modal handling
    $(document).on("click", ".quick-view", function(){
        // open modal and fill data
    });

    $(".close, .modal").click(function(e){
        // close modal
    });
});
var width = screen.width;

// alert(width);
if(width > 1000){
  $(".JS-img").on("mouseover", function(){
    $(".JS-img").animate({
      width:"15%"
    });
  });

  $(".JS-img").on("mouseout", function(){
    $(".JS-img").animate({
      width:"13%"
    });
  });

  $(".node-img").on("mouseover", function(){
    $(".node-img").animate({
      width:"15%"
    });
  });

  $(".node-img").on("mouseout", function(){
    $(".node-img").animate({
      width:"13%"
    });
  });

  $(".React-img").on("mouseover", function(){
    $(".React-img").animate({
      width:"18.5%"
    });
  });

  $(".React-img").on("mouseout", function(){
    $(".React-img").animate({
      width:"16.5%"
    });
  });

  $(".card-1").on("mouseenter", function(){
    $(".card-1").animate({
      position: "absolute",
      bottom: "30px",
    });
  });
  $(".card-2").on("mouseenter", function(){
    $(".card-2").animate({
      position: "relative",
      bottom: "30px"
    });
  });
  $(".card-3").on("mouseenter", function(){
    $(".card-3").animate({
      position: "relative",
      bottom: "30px"
    });
  });
  $(".card-4").on("mouseenter", function(){
    $(".card-4").animate({
      position: "relative",
      bottom: "30px"
    });
  });

  //
  $(".card-1").on("mouseleave", function(){
    $(".card-1").animate({
      position: "relative",
      bottom: "0px"
    });
  });
  $(".card-2").on("mouseleave", function(){
    $(".card-2").animate({
      position: "relative",
      bottom: "0px"
    });
  });
  $(".card-3").on("mouseleave", function(){
    $(".card-3").animate({
      position: "relative",
      bottom: "0px"
    });
  });
  $(".card-4").on("mouseleave", function(){
    $(".card-4").animate({
      position: "relative",
      bottom: "0px"
    });
  });

  $(".rishi-picture").on("mouseenter", function(){
    $(".rishi-picture").animate({
      height: "330px",
    });
  });

  $(".rishi-picture").on("mouseleave", function(){
    $(".rishi-picture").animate({
      height: "300px"
    });
  });

}


  // For Pop Up
  $(".drum-kit-popup").on("click", function(){
    $(".drum-kit-modal").css("display", "block");
    $(".blurred").css("filter", "blur(10px)");
  });

  $(".image-cap-popup").on("click", function(){
    $(".image-cap-modal").css("display", "block");
    $(".blurred").css("filter", "blur(10px)");
  });

  $(".heart-flex-popup").on("click", function(){
    $(".heart-flex-modal").css("display", "block");
    $(".blurred").css("filter", "blur(10px)");
  });

  $(".emotion-det-popup").on("click", function(){
    $(".emotion-det-modal").css("display", "block");
    $(".blurred").css("filter", "blur(10px)");
  });

  $(".news-letter-popup").on("click", function(){
    $(".news-letter-modal").css("display", "block");
    $(".blurred").css("filter", "blur(10px)");
  });

  $(".close-popup").on("click", function(){
    $(".modal").css("display", "none");
    $(".blurred").css("filter", "blur(0px)");
  });

  $(".drum-kit-btn-1").on("click", function(){
    location.href = "https://github.com/rishi-koul/Virtual-Drum-Kit.git";
  });
  $(".drum-kit-btn-2").on("click", function(){
    location.href = "https://rishi-koul.github.io/Virtual-Drum-Kit/";
  });
  $(".image-cap-btn").on("click", function(){
    location.href = "https://github.com/rishi-koul/ImageCaptionApp.git";
  });
  $(".emotion-det-btn").on("click", function(){
    location.href = "https://github.com/rishi-koul/Facial-Expression-Detection.git";
  });
  $(".heart-flex-btn").on("click", function(){
    location.href = "https://github.com/rishi-koul/Heart-Disease-Predictor.git";
  });
  $(".news-letter-btn").on("click", function(){
    location.href = "https://github.com/rishi-koul/Newsletter-Signup.git";
  });

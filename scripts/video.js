  function playButton() {
    $(".play-button").on("click", function () {
      console.log('click');
      var $gallery = $("#insert_gallery");
      var $video = $(".video");
      var $returnButton = $(".return-button");
      $gallery.slideUp(600, "swing");
      $video.fadeIn(600, "swing");

      $returnButton.on("click", function(){
        $gallery.slideDown(600, "swing");
        $video.fadeOut(600, "swing");
      });
    })
  };


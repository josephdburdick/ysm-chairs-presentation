/*global $:false*/
$(() => {
  let $video = $('#demo-video'),
    $body = $('body');

    autoPlayYouTubeModal();
    //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
    function autoPlayYouTubeModal() {
      var trigger = $("body").find('[data-toggle="modal"]');
      trigger.click((e) => {
        e.preventDefault();
        let _this = $(e.currentTarget),
            theModal = _this.data("target"),
            videoSRC = _this.attr("data-fullscreenyoutube"),
            videoSRCauto = videoSRC + "?rel=0&controls=0&showinfo=0&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);

        $(theModal + ' button.close').click(()  =>{
          $(theModal + ' iframe').attr('src', videoSRC);
        });

        $('.modal').click(()  =>{
          $(theModal + ' iframe').attr('src', videoSRC);
        });
      });
    }

    let $cursor = $('.blinking-cursor--container');
      function runIt() {
       $cursor.delay(300).animate({opacity:'1'}, 100);
       $cursor.delay(300).animate({opacity:'0'}, 100, runIt);
     }
    runIt();

    $video
      .on('mouseenter', () => {
        $video.get(0).play();
      })
      .on('mouseleave', () => {
        $video.get(0).pause();
        $video.get(0).currentTime = 0;
      });
});

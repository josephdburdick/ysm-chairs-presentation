/*global $:false*/
'use strict';

$(function () {
  var $video = $('#demo-video'),
      $body = $('body');
  $video.on('mouseenter', function () {
    $video.get(0).play();
  }).on('mouseleave', function () {
    $video.get(0).pause();
    $video.get(0).currentTime = 0;
  }).on('click', function (e) {
    e.preventDefault();
    var fullScreenVideoURL = this.dataset.fullscreenvideo;

    if (!$body.find('#video-fullscreen').length) {
      $body.append('<div id="video-fullscreen"><video><source></source></video></div>');
    }
    var $fullScreenVideoContainer = $('#video-fullscreen'),
        $fullScreenVideo = $fullScreenVideoContainer.find('video');

    $fullScreenVideo.find('source').attr({
      src: fullScreenVideoURL,
      type: 'video/mp4'
    });
    $fullScreenVideo.get(0).play();

    if ($fullScreenVideo.get(0).requestFullscreen) {
      $fullScreenVideo.get(0).requestFullscreen();
    } else if ($fullScreenVideo.get(0).mozRequestFullScreen) {
      $fullScreenVideo.get(0).mozRequestFullScreen();
    } else if ($fullScreenVideo.get(0).webkitRequestFullscreen) {
      $fullScreenVideo.get(0).webkitRequestFullscreen();
    }
  });
});
//# sourceMappingURL=main.js.map
/*global $:false*/
$(function() {
  let $video = $('#demo-video'),
    $body = $('body');
    $video
      .on('mouseenter', function() {
        $video.get(0).play();
      })
      .on('mouseleave', function() {
        $video.get(0).pause();
        $video.get(0).currentTime = 0;
      })
      .on('click', function(e) {
        e.preventDefault();
        let fullScreenVideoURL = this.dataset.fullscreenvideo;

        if (!$body.find('#video-fullscreen').length){
          $body.append('<div id="video-fullscreen"><video><source></source></video></div>');
        }
        let $fullScreenVideoContainer = $('#video-fullscreen'),
            $fullScreenVideo = $fullScreenVideoContainer.find('video');

        $fullScreenVideo
          .find('source').attr({
            src: fullScreenVideoURL,
            type: 'video/mp4'
          });
        $fullScreenVideo.get(0).play();

        if ($fullScreenVideo.get(0).requestFullscreen) {
          $fullScreenVideo.get(0).requestFullscreen();
        } else if ($fullScreenVideo.get(0).mozRequestFullScreen) {
          $fullScreenVideo.get(0).mozRequestFullScreen();
        } else if ($fullScreenVideo.get(0).webkitRequestFullscreen) {
          $fullScreenVideo.get(0).webkitRequestFullscreen();
        }
      });
});

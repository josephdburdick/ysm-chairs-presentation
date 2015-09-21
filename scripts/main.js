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
    var fullScreenVideoURL = e.currentTarget.dataset.fullscreenvideo;

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

    $fullScreenVideo.on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (e) {
      var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
      var event = state ? 'FullscreenOn' : 'FullscreenOff';
      if (event === "FullscreenOff") {
        $fullScreenVideo.get(0).pause();
        $fullScreenVideo.get(0).currentTime = 0;
        $fullScreenVideo = null;
        $('#video-fullscreen').remove();
      }
    });
  });
});
/*global $:false*/
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
    var fullScreenVideoURL = e.currentTarget.dataset.fullscreenvideo;

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

    $fullScreenVideo.on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (e) {
      var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
      var event = state ? 'FullscreenOn' : 'FullscreenOff';
      if (event === "FullscreenOff") {
        $fullScreenVideo.get(0).pause();
        $fullScreenVideo.get(0).currentTime = 0;
        $fullScreenVideo = null;
        $('#video-fullscreen').remove();
      }
    });
  });
});
/*global $:false*/
$(() => {
  let $video = $('#demo-video'),
    $body = $('body');
    $video
      .on('mouseenter', () => {
        $video.get(0).play();
      })
      .on('mouseleave', () => {
        $video.get(0).pause();
        $video.get(0).currentTime = 0;
      })
      .on('click', (e) => {
        e.preventDefault();
        let fullScreenVideoURL = e.currentTarget.dataset.fullscreenvideo;

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

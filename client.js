$(function(){
    // preload audio
    var toast = new Audio('toast.wav');
    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#product').html($(this).data("name"));
        $('#code').html($(this).data("code"));
        $('#toast').toast({ autohide: false }).toast('show');
    });
});

function doWhichKey(e) { 
    e = e || window.event; 
    return charCode = e.keyCode || e.which; 
  } 
window.addEventListener('keydown', function (e) {
    if (doWhichKey(e) === 27) {
        $('#toast').toast({ autohide: false }).toast('hide');
    }
  }, false);
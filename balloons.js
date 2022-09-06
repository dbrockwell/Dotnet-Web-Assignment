$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
        $('#red').is(":checked") && $('#green').is(":checked") && $('#blue').is(":checked") ?
            $('#selectText').html("Unselect All"):
            $('#selectText').html("Select All");
    });

    $('#submit').on('click', function(e) {
        if ($('#red').is(":checked")===false && $('#green').is(":checked")===false && $('#blue').is(":checked")===false){
            e.preventDefault();
            $('#toast').toast({ autohide: false }).toast('show');
        }
    })

    const colors = ["red", "green", "blue"]

    $('#selectAll').on('click', function(e) {
        if ($('#red').is(":checked") && $('#green').is(":checked") && $('#blue').is(":checked")){
            colors.forEach(color => {
                $('#' + color).prop( "checked", false )
                $('#' + color + 'Img').addClass('animate__animated animate__bounceOutUp');  
            });
            $('#selectText').html("Select All");
        }
        else {
            colors.forEach(color => {
                $('#' + color).prop( "checked", true )
                $('#' + color + 'Img').css('visibility', 'visible')
                $('#' + color + 'Img').removeClass().addClass('animate__animated animate__bounceInDown')   
            });
            $('#selectText').html("Unselect All");
        }
    })

    colors.forEach(color => {
        $("#" + color + "Full").on("mouseover", function () {
            $("h1").css("color", color);
        });
        $("#" + color + "Full").on("mouseout", function () {
            $("h1").css("color", "grey");
        });
    })
});

var number = Math.floor(Math.random() * 6);
const animations = ["heartBeat", "bounce", "jello", "swing", "rubberBand", "tada"]
var animation = animations[number]
$('#titleText').addClass('animate__animated animate__' + animation)
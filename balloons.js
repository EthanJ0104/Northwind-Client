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
    });
});

$(document).ready(function() {
    let classes = new Array ('animate__animated animate__bounce', 'animate__animated animate__flash', 
    'animate__animated animate__pulse', 'animate__animated animate__rubberBand', 'animate__animated animate__shakeX', 
    'animate__animated animate__shakeY', 'animate__animated animate__headShake', 'animate__animated animate__swing', 
    'animate__animated animate__tada', 'animate__animated animate__wobble', 
    'animate__animated animate__jello', 'animate__animated animate__heartBeat');

    let length = classes.length;

    let header = $('h1');

    $.each (header, function(key, value){
        $(value).addClass(classes[Math.floor(Math.random() * length)]);
    });
});



function selects(){  
    var ele=document.getElementsByName('chk');  
    for(var i=0; i<ele.length; i++){  
        if(ele[i].type=='checkbox')
        {
            ele[i].checked=true;
        } 
    } 
    $('#' + 'red' + 'Img').css('visibility', 'visible') 
    $('#' + 'green' + 'Img').css('visibility', 'visible') 
    $('#' + 'blue' + 'Img').css('visibility', 'visible') 
}  

function unchekcs(){  
    var ele=document.getElementsByName('chk');  
    for(var i=0; i<ele.length; i++){  
        if(ele[i].type=='checkbox')
        {
            ele[i].checked=false;
        } 
    } 
    $('#' + 'red' + 'Img').css('visibility', 'hidden') 
    $('#' + 'green' + 'Img').css('visibility', 'hidden') 
    $('#' + 'blue' + 'Img').css('visibility', 'hidden') 
}  

let title = document.getElementById('header');
let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');

red.addEventListener('mouseover', function(){
    title.classList.add("red");
});
red.addEventListener('mouseout', function(){
    title.classList.remove("red");
});

green.addEventListener('mouseover', function(){
    title.classList.add("green");
});
green.addEventListener('mouseout', function(){
    title.classList.remove("green");
});

blue.addEventListener('mouseover', function(){
    title.classList.add("blue");
});
blue.addEventListener('mouseout', function(){
    title.classList.remove("blue");
});

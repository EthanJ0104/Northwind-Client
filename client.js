// $(function(){
//     // preload audio
//     var toast = new Audio('toast.wav');
//     $('.code').on('click', function(e) {
//         e.preventDefault();
//         // first pause the audio (in case it is still playing)
//         toast.pause();
//         // reset the audio
//         toast.currentTime = 0;
//         // play audio
//         toast.play();
//         $('#liveToast').toast({ autohide: false }).toast('show');
//     });
// });

$(function(){
    $('.code1').on('click', function(e) {
        document.getElementById("toastHeader").innerHTML = "Chef Anton's Italian Seasoning";
        document.getElementById("code").innerHTML = "1234";
        e.preventDefault();
        $('#liveToast').toast({ autohide: false }).toast('show');
        window.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                $('#liveToast').toast({ autohide: false }).toast('hide');
            }
        })
    });
});

$(function(){
    $('.code2').on('click', function(e) {
        document.getElementById("toastHeader").innerHTML = "Genen Shouyu";
        document.getElementById("code").innerHTML = "3456";
        e.preventDefault();
        $('#liveToast').toast({ autohide: false }).toast('show');
        window.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                $('#liveToast').toast({ autohide: false }).toast('hide');
            }
        })
    });
});

$(function(){
    $('.code3').on('click', function(e) {
        document.getElementById("toastHeader").innerHTML = "Schoggi Schokolade";
        document.getElementById("code").innerHTML = "7789";
        e.preventDefault();
        $('#liveToast').toast({ autohide: false }).toast('show');
        window.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                $('#liveToast').toast({ autohide: false }).toast('hide');
            }
        })
    });
});

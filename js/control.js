var typed = new Typed('.element', {
strings: ["Web Sieu Dinh.", "Master Developer.","Super Designer.","Film Maker"],
typeSpeed:40,
backSpeed:40,
loop:true,
});
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
$('.counter').countUp();


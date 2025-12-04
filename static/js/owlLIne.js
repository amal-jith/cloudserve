var owl = $('.my-owl-2');
var totalSlides;

owl.on('initialized.owl.carousel', function(e) {
    totalSlides = e.item.count;
    updateProgress(e.item.index);
});

owl.on('changed.owl.carousel', function(e) {
    updateProgress(e.item.index);
});

// Update progress bar width
function updateProgress(index) {
    var percentage = ((index + 1) / totalSlides) * 100;
    $('.progress-fill').css('width', percentage + '%');
}

// Arrow events
$('.p-arrow.left').click(function(){
    owl.trigger('prev.owl.carousel');
});

$('.p-arrow.right').click(function(){
    owl.trigger('next.owl.carousel');
});

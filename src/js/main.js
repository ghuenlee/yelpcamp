var container = document.querySelector('#masonry-grid');
3
var msnry = new Masonry(container, {
    4
    // options
    5
    columnWidth: 200,
    6
    itemSelector: '.grid-item'
    7
});
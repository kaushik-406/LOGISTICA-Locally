lozad('.lozad', {
    load: function(el) {
        el.src = el.dataset.src;
        el.onload = function() {
            el.classList.add('fade')
        }
    }
}).observe()

new EagerImageLoader([
    '#img-1',
    '#img-2a', 
    '#img-2b', 
    '#img-2c',
    '#img-3'
  ]);
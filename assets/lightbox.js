(function() {
  var tiles = document.querySelectorAll('.screenshot-tile');
  var lightbox = document.getElementById('lightbox');
  if (!tiles.length || !lightbox) return;
  var images = Array.from(tiles).map(function(tile) {
    var img = tile.querySelector('img');
    return {
      src: img.getAttribute('src'),
      alt: img.getAttribute('alt'),
      caption: img.getAttribute('alt')
    };
  });
  var lightboxImg = lightbox.querySelector('.lightbox-img');
  var lightboxCap = lightbox.querySelector('.lightbox-cap');
  var closeBtn = lightbox.querySelector('.lightbox-close');
  var prevBtn = lightbox.querySelector('.lightbox-prev');
  var nextBtn = lightbox.querySelector('.lightbox-next');
  var currentIndex = 0;
  function show(index) {
    currentIndex = (index + images.length) % images.length;
    var item = images[currentIndex];
    lightboxImg.setAttribute('src', item.src);
    lightboxImg.setAttribute('alt', item.alt);
    lightboxCap.textContent = item.caption;
  }
  function open(index) {
    show(index);
    lightbox.classList.add('open');
    document.body.classList.add('lightbox-open');
  }
  function close() {
    lightbox.classList.remove('open');
    document.body.classList.remove('lightbox-open');
  }
  tiles.forEach(function(tile, index) {
    tile.addEventListener('click', function() {
      open(index);
    });
  });
  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', function() {
    show(currentIndex - 1);
  });
  nextBtn.addEventListener('click', function() {
    show(currentIndex + 1);
  });
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) close();
  });
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
  });
})();

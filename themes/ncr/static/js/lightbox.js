document.addEventListener('DOMContentLoaded', function () {
  var essay = document.querySelector('.photo-essay');
  if (!essay) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox';
  var img = document.createElement('img');
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  essay.addEventListener('click', function (e) {
    var target = e.target;
    if (target.tagName !== 'IMG') return;
    var container = target.closest('.photo-row, .photo-single, .photo-pano');
    if (!container) return;

    img.src = target.src;
    overlay.className = 'lightbox active';
    if (container.classList.contains('photo-pano')) {
      overlay.classList.add('pano-mode');
    }
  });

  overlay.addEventListener('click', function () {
    overlay.className = 'lightbox';
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') overlay.className = 'lightbox';
  });
});

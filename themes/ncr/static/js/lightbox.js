document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('.post-content');
  if (!content) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox';
  var img = document.createElement('img');
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  content.addEventListener('click', function (e) {
    var target = e.target;
    if (target.tagName !== 'IMG') return;

    img.src = target.src;
    overlay.className = 'lightbox active';

    // Panorama mode for photo essay panos
    var pano = target.closest('.photo-pano');
    if (pano) {
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

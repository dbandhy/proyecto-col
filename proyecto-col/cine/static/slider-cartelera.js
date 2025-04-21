(function() {
  var currentIndex = 0;

  window.slideCarousel = function(direction) {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.movie-card');
    if (!track || cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth;
    const totalCards = cards.length;
    const visibleCards = 4;

    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex > totalCards - visibleCards) {
      currentIndex = totalCards - visibleCards;
    }

    const newTransform = -(currentIndex * cardWidth);
    track.style.transform = `translateX(${newTransform}px)`;
  };
})();
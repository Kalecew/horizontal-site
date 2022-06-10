let xDown = null;

export function handleTouchStart(e) {
  const firstTouch = e.touches[0];
  xDown = firstTouch.clientX;
};

export function handleTouchMove(e) {
  if ( !xDown ) return;
  if ( document.body.dataset.noScroll ) return;
  let xUp = e.touches[0].clientX;
  let xDiff = xDown - xUp;
  if ( xDiff > 10 ) {
    // свайп влево
    const next = e.target.closest('section').nextSibling
    if (next) {
      window.location.hash = ''
      window.location.hash = next.id
    }
  } else if ( xDiff < -10 ) {
    // свайп вправо
    const prev = e.target.closest('section').previousSibling
    if (prev) {
      window.location.hash = ''
      window.location.hash = prev.id
    }
  }
  xDown = null;
}
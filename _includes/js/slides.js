const SLIDES_SPACING_PX = 10 //must match the --slides-spacing css variable!
let slider = document.getElementById('slider'),
  sliderItems = document.getElementById('slides'),
  prev = document.getElementById('prev'),
  next = document.getElementById('next'),
  dots = document.getElementById('dots')

function slide(wrapper, items, prev, next, dots) {
  let posX1 = 0,
    posX2 = 0,
    slidesSpacing = getComputedStyle(document.documentElement).getPropertyValue('--'),
    posInitial,
    posFinal,
    threshold = 100,
    slides = items.getElementsByClassName('slide'),
    slidesLength = slides.length,
    slideSize = slides[0].offsetWidth + SLIDES_SPACING_PX,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    index = 0,
    allowShift = true

  wrapper.classList.add('loaded')

  // Mouse events
  items.onmousedown = dragStart

  // Touch events
  items.addEventListener('touchstart', dragStart)
  items.addEventListener('touchend', dragEnd)
  items.addEventListener('touchmove', dragAction)

  // Click events
  prev.addEventListener('click', function() {
    shiftSlide(index - 1)
  })
  next.addEventListener('click', function() {
    shiftSlide(index + 1)
  })

  // Transition events
  items.addEventListener('transitionend', onLanded)

  // React to slide resize
  new ResizeObserver(() => {
    items.style.left = 0
    index = 0
    slideSize = slides[0].offsetWidth + SLIDES_SPACING_PX
  }).observe(items.getElementsByClassName('slide')[0])

  //create dots
  createDots()

  //initialize buttons visibility
  onLanded()

  function dragStart(e) {
    e = e || window.event
    e.preventDefault()
    posInitial = items.offsetLeft

    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX
    } else {
      posX1 = e.clientX
      document.onmouseup = dragEnd
      document.onmousemove = dragAction
    }
  }


  function dragAction(e) {
    e = e || window.event

    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX
      posX1 = e.touches[0].clientX
    } else {
      posX2 = posX1 - e.clientX
      posX1 = e.clientX
    }
    items.style.left = (items.offsetLeft - posX2) + 'px'
  }

  function dragEnd(e) {
    posFinal = items.offsetLeft
    if (posFinal - posInitial < -threshold) {
      shiftSlide(index + 1, 'drag')
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(index - 1, 'drag')
    } else {
      items.style.left = (posInitial) + 'px'
    }

    document.onmouseup = null
    document.onmousemove = null
  }

  function shiftSlide(targetIndex, action) {
    items.classList.add('shifting')

    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft
      }

      if (targetIndex < 0) targetIndex = 0
      if (targetIndex > slidesLength - 1) targetIndex = slidesLength - 1
      let targetOffset = (targetIndex * -slideSize) + 'px'

      if (targetOffset !== items.style.left) {
        items.style.left = targetOffset
        index = targetIndex
        allowShift = false
      }
    }
  }

  function onLanded() {
    items.classList.remove('shifting')
    updatePrevNextButtons()
    updateDots()
    allowShift = true
  }

  function createDots() {
    // Creates dots and add listeners to them
    for (let i = 0; i < slidesLength; ++i) {
      const dot = document.createElement('div')
      dot.classList.add('dot')
      dots.appendChild(dot)
      dot.addEventListener('click', dotClick.bind(null, i), false)
    }

    function dotClick(target) {
      shiftSlide(target)
    }

    updateDots()
  }

  function updateDots() {
    const allDots = dots.querySelectorAll('.dot')
    allDots.forEach(d => d.classList.remove('active-dot'))
    allDots[index].classList.add('active-dot')
  }

  function updatePrevNextButtons() {
    prev.style.visibility = index === 0 ? 'hidden' : 'visible'
    next.style.visibility = index === slidesLength - 1 ? 'hidden' : 'visible'
  }
}

if(self !== top) {
  slide(slider, sliderItems, prev, next, dots)
}

const defaultFromValue = 'right' // or 'left';
const defaultSpeedValue = 0.5;
const defaultDelayValue = 0;
const defaultTheresholdValue = 0.5;

// Handle the intersection event
function handleIntersection(el, observer, from) {
  const { isIntersecting } = observer;
  function slideInElementFromRight() {
    if (isIntersecting) {
      el.style.opacity = 1;
      el.style.transform = "translateX(0px)";
    } else {
      el.style.opacity = 0;
      el.style.transform = "translateX(100px)";
    }
  }

  function slideInElementFromLeft() {
    if (isIntersecting) {
      el.style.opacity = 1;
      el.style.transform = "translateX(0px)";
    } else {
      el.style.opacity = 0;
      el.style.transform = "translateX(-100px)";
    }
  }

  if (from === 'right') {
    slideInElementFromRight();
  }

  if (from === 'left') {
    slideInElementFromLeft();
  }
}

const vMotion = {
  mounted: (el, binding) => {
    const {
      from = defaultFromValue,
      speed = defaultSpeedValue,
      threshold = defaultTheresholdValue,
      delay = defaultDelayValue,
    } = binding.value

    el.style.transition = `all ${speed}s`
    if (delay) el.style.delay = delay

    const observer = new IntersectionObserver(
      (entries) => {
        return handleIntersection(el, entries[0], from)
      },
      {
        threshold
      }
    )

    observer.observe(el);
  }
};

export default vMotion;
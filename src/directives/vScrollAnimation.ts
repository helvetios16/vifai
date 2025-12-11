import type { Directive } from 'vue'

const animatedScrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('enter')
      observer.unobserve(entry.target)
    }
  })
})

export const vScrollAnimation: Directive = {
  mounted(el) {
    el.classList.add('before-enter')
    animatedScrollObserver.observe(el)
  },
}

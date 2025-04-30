document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")
  const backToTopBtn = document.getElementById("backToTop")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
      backToTopBtn.classList.add("active")
    } else {
      navbar.classList.remove("scrolled")
      backToTopBtn.classList.remove("active")
    }
  })

  // Back to top button
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#") {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Animation on scroll
  const animateElements = document.querySelectorAll(".solution-card, .stat-card, .credential-card")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp")
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  animateElements.forEach((element) => {
    observer.observe(element)
  })

  // Counter animation for stats
  const counterElements = document.querySelectorAll(".counter")

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target
          const countTo = Number.parseInt(target.innerText)

          if (!isNaN(countTo)) {
            let count = 0
            const updateCount = () => {
              const increment = countTo / 20
              if (count < countTo) {
                count += increment
                target.innerText = Math.ceil(count)
                setTimeout(updateCount, 50)
              } else {
                target.innerText = countTo
              }
            }
            updateCount()
          }

          counterObserver.unobserve(target)
        }
      })
    },
    {
      threshold: 0.5,
    },
  )

  counterElements.forEach((element) => {
    counterObserver.observe(element)
  })
})

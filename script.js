document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const navMenu = document.querySelector(".nav-menu")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenuBtn.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  }

  // Image Slider
  const slider = document.querySelector(".slider")
  const prevBtn = document.querySelector(".prev")
  const nextBtn = document.querySelector(".next")

  if (slider && prevBtn && nextBtn) {
    let slideIndex = 0
    const slides = document.querySelectorAll(".slide")
    const slideWidth = 100 / getVisibleSlides()

    // Set initial width for slides
    slides.forEach((slide) => {
      slide.style.minWidth = `${slideWidth}%`
    })

    // Update slide width on window resize
    window.addEventListener("resize", () => {
      const newSlideWidth = 100 / getVisibleSlides()
      slides.forEach((slide) => {
        slide.style.minWidth = `${newSlideWidth}%`
      })

      // Reset position when resizing
      slideIndex = 0
      updateSliderPosition()
    })

    function getVisibleSlides() {
      const windowWidth = window.innerWidth
      if (windowWidth < 576) return 1
      if (windowWidth < 768) return 2
      if (windowWidth < 992) return 3
      return 4
    }

    function updateSliderPosition() {
      const visibleSlides = getVisibleSlides()
      const maxIndex = slides.length - visibleSlides

      // Ensure slideIndex is within bounds
      if (slideIndex > maxIndex) slideIndex = maxIndex
      if (slideIndex < 0) slideIndex = 0

      // Update slider position
      slider.style.transform = `translateX(-${slideIndex * slideWidth}%)`

      // Update button states
      prevBtn.disabled = slideIndex === 0
      nextBtn.disabled = slideIndex === maxIndex
    }

    prevBtn.addEventListener("click", () => {
      slideIndex--
      updateSliderPosition()
    })

    nextBtn.addEventListener("click", () => {
      slideIndex++
      updateSliderPosition()
    })

    // Initialize slider position
    updateSliderPosition()
  }

  // Newsletter Form
  const newsletterForm = document.getElementById("newsletter-form")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const emailInput = this.querySelector('input[type="email"]')

      if (emailInput.value) {
        // In a real application, you would send this to your server
        alert("Thank you for subscribing to our newsletter!")
        emailInput.value = ""
      }
    })
  }

  // Contact Form Validation
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      let isValid = true

      // Validate Name
      const nameInput = document.getElementById("name")
      const nameError = document.getElementById("name-error")

      if (!nameInput.value.trim()) {
        nameError.textContent = "Name is required"
        nameError.style.display = "block"
        isValid = false
      } else {
        nameError.style.display = "none"
      }

      // Validate Email
      const emailInput = document.getElementById("email")
      const emailError = document.getElementById("email-error")
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!emailInput.value.trim()) {
        emailError.textContent = "Email is required"
        emailError.style.display = "block"
        isValid = false
      } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address"
        emailError.style.display = "block"
        isValid = false
      } else {
        emailError.style.display = "none"
      }

      // Validate Phone (optional)
      const phoneInput = document.getElementById("phone")
      const phoneError = document.getElementById("phone-error")

      if (phoneInput.value.trim() && !/^\d{10}$/.test(phoneInput.value.replace(/\D/g, ""))) {
        phoneError.textContent = "Please enter a valid phone number"
        phoneError.style.display = "block"
        isValid = false
      } else {
        phoneError.style.display = "none"
      }

      // Validate Subject
      const subjectInput = document.getElementById("subject")
      const subjectError = document.getElementById("subject-error")

      if (!subjectInput.value) {
        subjectError.textContent = "Please select a subject"
        subjectError.style.display = "block"
        isValid = false
      } else {
        subjectError.style.display = "none"
      }

      // Validate Message
      const messageInput = document.getElementById("message")
      const messageError = document.getElementById("message-error")

      if (!messageInput.value.trim()) {
        messageError.textContent = "Message is required"
        messageError.style.display = "block"
        isValid = false
      } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters"
        messageError.style.display = "block"
        isValid = false
      } else {
        messageError.style.display = "none"
      }

      // If form is valid, show success message
      if (isValid) {
        const formSuccess = document.getElementById("form-success")
        formSuccess.textContent = "Your message has been sent successfully! We will get back to you soon."
        formSuccess.style.display = "block"

        // Reset form
        contactForm.reset()

        // Hide success message after 5 seconds
        setTimeout(() => {
          formSuccess.style.display = "none"
        }, 5000)
      }
    })
  }

  // Shop Page Functionality
  if (document.querySelector(".shop-content")) {
    // Sample product data
    const products = [
      {
        id: 1,
        name: "Girls Floral Dress",
        price: 29.99,
        category: "girls",
        image: "/Online-Shop-Web_Project/Images/products/Girls/girls-floral-dress.jpeg?height=400&width=300",
      },
      {
        id: 2,
        name: "Boys Casual Set",
        price: 24.99,
        category: "boys",
        image: "/Online-Shop-Web_Project/Images/products/Boys/boys-casual-set.jpeg?height=400&width=300",
      },
      {
        id: 3,
        name: "Ladies Blouse",
        price: 19.99,
        category: "ladies",
        image: "/Online-Shop-Web_Project/Images/products/Girls/ladies-blouse.webp?height=400&width=300",
      },
      {
        id: 4,
        name: "Girls Party Dress",
        price: 34.99,
        category: "girls",
        image: "/Online-Shop-Web_Project/Images/products/Girls/girls-party-dress.jpeg?height=400&width=300",
      },
      {
        id: 5,
        name: "Boys Denim Jeans",
        price: 22.99,
        category: "boys",
        image: "/Online-Shop-Web_Project/Images/products/Boys/boys-denim-jeans.jpeg?height=400&width=300",
      },
      {
        id: 6,
        name: "Ladies Summer Dress",
        price: 39.99,
        category: "ladies",
        image: "/Online-Shop-Web_Project/Images/products/Girls/ladies-summer-dress.jpeg?height=400&width=300",
      },
      {
        id: 7,
        name: "Girls Casual Tee",
        price: 14.99,
        category: "girls",
        image: "/Online-Shop-Web_Project/Images/products/Girls/girls-casual-tee.jpeg?height=400&width=300",
      },
      {
        id: 8,
        name: "Boys Graphic Tee",
        price: 12.99,
        category: "boys",
        image: "/Online-Shop-Web_Project/Images/products/Boys/boys-graphiks-tee.webp?height=400&width=300",
      },
      { id: 9, 
        name: "Ladies Jeans", 
        price: 32.99, 
        category: "ladies", 
        image: "/Online-Shop-Web_Project/Images/products/Girls/ladies-jeans.jpeg?height=400&width=300" },
      {
        id: 10,
        name: "Hair Accessories",
        price: 9.99,
        category: "accessories",
        image: "/Online-Shop-Web_Project/Images/products/hair-accessories.jpeg?height=400&width=300",
      },
      {
        id: 11,
        name: "Children's Backpack",
        price: 19.99,
        category: "accessories",
        image: "/Online-Shop-Web_Project/Images/products/children-backpack.webp?height=400&width=300",
      },
      {
        id: 12,
        name: "Ladies Scarf",
        price: 15.99,
        category: "accessories",
        image: "/Online-Shop-Web_Project/Images/products/Girls/ladies-skarf.webp?height=400&width=300",
      },
    ]

    const productsContainer = document.getElementById("productsContainer")
    const categoryLinks = document.querySelectorAll(".filter-list a")
    const priceRange = document.getElementById("priceRange")
    const priceValue = document.getElementById("priceValue")
    const sizeButtons = document.querySelectorAll(".size-btn")
    const colorButtons = document.querySelectorAll(".color-btn")
    const applyFiltersBtn = document.getElementById("applyFilters")
    const resetFiltersBtn = document.getElementById("resetFilters")
    const sortBySelect = document.getElementById("sortBy")
    const productCount = document.getElementById("productCount")

    // Initialize with all products
    displayProducts(products)

    // Update price value display
    if (priceRange && priceValue) {
      priceRange.addEventListener("input", function () {
        priceValue.textContent = `$${this.value}`
      })
    }

    // Category filter
    if (categoryLinks) {
      categoryLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault()

          // Remove active class from all links
          categoryLinks.forEach((l) => l.classList.remove("active"))

          // Add active class to clicked link
          this.classList.add("active")
        })
      })
    }

    // Size buttons
    if (sizeButtons) {
      sizeButtons.forEach((button) => {
        button.addEventListener("click", function () {
          this.classList.toggle("active")
        })
      })
    }

    // Color buttons
    if (colorButtons) {
      colorButtons.forEach((button) => {
        button.addEventListener("click", function () {
          this.classList.toggle("active")
        })
      })
    }

    // Apply filters
    if (applyFiltersBtn) {
      applyFiltersBtn.addEventListener("click", () => {
        let filteredProducts = [...products]

        // Filter by category
        const activeCategory = document.querySelector(".filter-list a.active").getAttribute("data-category")
        if (activeCategory && activeCategory !== "all") {
          filteredProducts = filteredProducts.filter((product) => product.category === activeCategory)
        }

        // Filter by price
        const maxPrice = Number.parseInt(priceRange.value)
        filteredProducts = filteredProducts.filter((product) => product.price <= maxPrice)

        // Sort products
        const sortValue = sortBySelect.value
        if (sortValue === "price-low") {
          filteredProducts.sort((a, b) => a.price - b.price)
        } else if (sortValue === "price-high") {
          filteredProducts.sort((a, b) => b.price - a.price)
        } else if (sortValue === "newest") {
          // In a real app, you would sort by date
          filteredProducts.reverse()
        }

        // Display filtered products
        displayProducts(filteredProducts)
      })
    }

    // Reset filters
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener("click", () => {
        // Reset category
        categoryLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("data-category") === "all") {
            link.classList.add("active")
          }
        })

        // Reset price range
        priceRange.value = 100
        priceValue.textContent = "$100"

        // Reset size buttons
        sizeButtons.forEach((button) => {
          button.classList.remove("active")
        })

        // Reset color buttons
        colorButtons.forEach((button) => {
          button.classList.remove("active")
        })

        // Reset sort
        sortBySelect.value = "featured"

        // Display all products
        displayProducts(products)
      })
    }

    // Sort products
    if (sortBySelect) {
      sortBySelect.addEventListener("change", () => {
        // Trigger filter application
        applyFiltersBtn.click()
      })
    }

    // Function to display products
    function displayProducts(productsToDisplay) {
      if (!productsContainer) return

      // Update product count
      if (productCount) {
        productCount.textContent = productsToDisplay.length
      }

      // Clear container
      productsContainer.innerHTML = ""

      // Add products
      productsToDisplay.forEach((product) => {
        const productCard = document.createElement("div")
        productCard.className = "product-card"

        productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <button class="btn-small">Add to Cart</button>
                `

        productsContainer.appendChild(productCard)
      })
    }
  }
})

(() => {
  "use strict";

  const courses = [
    {
      id: 1,
      title: "Summer Robotics Camp",
      description: "Hands-on robotics and coding for kids.",
      ageGroup: "7-10",
      language: "English",
      level: "Intermediate",
      classes: 45,
      instructor: "Daniel James",
      price: 299,
      rating: 4.9,
      learners: 200,
      tags: ["Coding", "Intermediate"],
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=220&q=80",
      sellingFast: true,
      time: "Morning",
      session: "Morning classes (8am–12pm)",
    },
    {
      id: 2,
      title: "Creative Coding for Kids",
      description: "Learn to code fun animations and games.",
      ageGroup: "4-6",
      language: "English",
      level: "Beginner",
      classes: 20,
      instructor: "Sunny Patel",
      price: 199,
      rating: 4.7,
      learners: 150,
      tags: ["Coding", "Beginner"],
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=220&q=80",
      sellingFast: false,
      time: "Afternoon",
      session: "Afternoon classes (12pm–4pm)",
    },
    {
      id: 3,
      title: "Chess Mastery",
      description: "Sharpen strategic thinking through chess.",
      ageGroup: "11-14",
      language: "English",
      level: "Advanced",
      classes: 30,
      instructor: "Maya Singh",
      price: 250,
      rating: 4.8,
      learners: 180,
      tags: ["Chess", "Advanced"],
      img: "https://images.unsplash.com/photo-1602526242308-522d9cf105c8?auto=format&fit=crop&w=220&q=80",
      sellingFast: true,
      time: "Evening",
      session: "Evening classes (4pm–8pm)",
    },
    {
      id: 4,
      title: "Public Speaking Essentials",
      description: "Build confidence and communication skills.",
      ageGroup: "15-18",
      language: "English",
      level: "Intermediate",
      classes: 25,
      instructor: "Arjun Mehta",
      price: 220,
      rating: 4.6,
      learners: 130,
      tags: ["Public speaking", "Intermediate"],
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=220&q=80",
      sellingFast: false,
      time: "Late Evening",
      session: "Late evening classes (8pm–11pm)",
    },
  ];

  const teachers = [
    {
      name: "Andy Brew",
      credentials: "MSc, BEd | 15+ Years | 1000+ Students",
      field: "Computer science",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Ella Grace",
      credentials: "MA Education | 12 years",
      field: "English",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Mike Taylor",
      credentials: "BSc, Coding Expert",
      field: "Coding",
      img: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
      name: "Julia Banks",
      credentials: "Early Childhood Educator",
      field: "Early educator",
      img: "https://randomuser.me/api/portraits/women/43.jpg",
    },
  ];

  const categories = [
    { name: "Coding", icon: "💻" },
    { name: "Public speaking", icon: "🗣️" },
    { name: "Chess", icon: "♟️" },
    { name: "Homework help", icon: "📚" },
    { name: "App building", icon: "📱" },
  ];

  const timeFilters = [
    "Morning classes (8am–12pm)",
    "Afternoon classes (12pm–4pm)",
    "Evening classes (4pm–8pm)",
    "Late evening classes (8pm–11pm)",
  ];

  // --- UPDATED COURSE CARD FUNCTION for Screenshot 1 STYLE ---
  function createCourseCard(course) {
    const card = document.createElement("div");
    card.className = "course-card";
    card.setAttribute("role", "listitem");
    card.tabIndex = 0;

    // SVG icons
    const iconClock = `<svg width="16" height="16" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
    const iconUsers = `<svg width="16" height="16" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M7 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/></svg>`;
    const iconRupee = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6a5afe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h-7c-3 0-3 2 0 2h7c3 0 3 2 0 2h-7"/><path d="M6 17h10"/></svg>`;

    card.innerHTML = `
      <img class="course-image" src="${course.img}" alt="Course image: ${course.title}">
      <div class="course-content">
        <div class="course-card-top">
          ${course.sellingFast ? '<span class="course-badge badge-selling">Selling Fast</span>' : ''}
          <div class="course-rating-learners">
            <span class="course-rating">⭐ ${course.rating}</span>
            <span class="course-learners">${course.learners}+ learners</span>
          </div>
          <div class="course-title">${course.title}</div>
          <div class="course-desc">${course.description}</div>
          <div class="course-meta-pills">
            <span class="pill bg-main">${course.language}</span>
            <span class="pill bg-level">${course.level}</span>
            <span class="pill bg-classes">${course.classes} classes</span>
          </div>
        </div>
        <div class="course-bottom-row">
          <span class="age">${course.ageGroup} yrs</span>
          <span class="cb-icon">${iconClock} ${course.classes}</span>
          <span class="cb-icon">${iconUsers} ${course.learners}</span>
          <span class="price">${iconRupee} ₹${course.price}</span>
        </div>
        <div class="course-instructor">By: ${course.instructor}</div>
      </div>
    `;
    return card;
  }

  // Render carousels
  function createTeacherCard(teacher) {
    const card = document.createElement("div");
    card.className = "teacher-card";
    card.setAttribute("role", "listitem");
    card.tabIndex = 0;
    card.innerHTML = `
      <img class="teacher-avatar" src="${teacher.img}" alt="Photo of teacher ${teacher.name}">
      <div class="teacher-name">${teacher.name}</div>
      <div class="teacher-experience">${teacher.credentials}</div>
      <div class="teacher-field">${teacher.field}</div>
    `;
    return card;
  }
  function createCategoryCard(category) {
    const card = document.createElement("button");
    card.className = "category-card";
    card.type = "button";
    card.setAttribute("aria-pressed", "false");
    card.setAttribute("role", "switch");
    card.tabIndex = 0;
    card.innerHTML = `<span class="icon" aria-hidden="true">${category.icon}</span><span>${category.name}</span>`;
    return card;
  }
  function renderCarousel(container, items, createCardFn) {
    container.innerHTML = "";
    items.forEach((item) => { container.appendChild(createCardFn(item)); });
  }

  // -- DOM queries, initialization
  const newLaunchesEl         = document.getElementById("newLaunchesCarousel");
  const featuredCoursesEl     = document.getElementById("featuredCoursesCarousel");
  const teachersEl            = document.getElementById("teachersCarousel");
  const webinarEl             = document.getElementById("webinarCarousel");
  const categoryGridEl        = document.getElementById("categoryGrid");
  const filterCategoryChips   = document.getElementById("filterCategoryChips");
  const filterTimeChips       = document.getElementById("filterTimeChips");
  const filteredCoursesCarousel = document.getElementById("filteredCoursesCarousel");

  renderCarousel(newLaunchesEl, courses, createCourseCard);
  renderCarousel(featuredCoursesEl, courses, createCourseCard);
  renderCarousel(teachersEl, teachers, createTeacherCard);
  renderCarousel(webinarEl, courses, createCourseCard);

  categories.forEach((cat) => {
    const chip = document.createElement("button");
    chip.type = "button"; chip.textContent = cat.name;
    chip.dataset.category = cat.name; chip.className = "filter-chip";
    filterCategoryChips.appendChild(chip);
  });

  timeFilters.forEach((time) => {
    const chip = document.createElement("button");
    chip.type = "button"; chip.textContent = time;
    chip.dataset.time = time; chip.className = "filter-chip";
    filterTimeChips.appendChild(chip);
  });

  categories.forEach((cat) => {
    const catCard = createCategoryCard(cat); catCard.dataset.category = cat.name;
    categoryGridEl.appendChild(catCard);
  });

  // Age filter active state only (no filtering logic)
  document.querySelectorAll(".age-filter button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".age-filter button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Category/Time filter logic (as before)
  let selectedCategory = null, selectedTime = null;
  [...filterCategoryChips.children].forEach(chip => {
    chip.addEventListener("click", () => {
      if (selectedCategory === chip.dataset.category) {
        chip.classList.remove("active"); chip.setAttribute("aria-pressed", "false");
        selectedCategory = null;
      } else {
        selectedCategory = chip.dataset.category;
        [...filterCategoryChips.children].forEach(c => { c.classList.remove("active"); c.setAttribute("aria-pressed", "false"); });
        chip.classList.add("active"); chip.setAttribute("aria-pressed", "true");
      }
      filterCourses();
    });
  });
  [...filterTimeChips.children].forEach(chip => {
    chip.addEventListener("click", () => {
      if (selectedTime === chip.dataset.time) {
        chip.classList.remove("active"); chip.setAttribute("aria-pressed", "false");
        selectedTime = null;
      } else {
        selectedTime = chip.dataset.time;
        [...filterTimeChips.children].forEach(c => { c.classList.remove("active"); c.setAttribute("aria-pressed", "false"); });
        chip.classList.add("active"); chip.setAttribute("aria-pressed", "true");
      }
      filterCourses();
    });
  });
  // sync popular category cards with filter chips
  const categoryCards = categoryGridEl.querySelectorAll(".category-card");
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const catName = card.dataset.category;
      const matchingChip = [...filterCategoryChips.children].find((c) => c.dataset.category === catName);
      if (selectedCategory === catName) {
        card.classList.remove("active"); selectedCategory = null;
        matchingChip && matchingChip.classList.remove("active"), matchingChip.setAttribute("aria-pressed", "false");
      } else {
        selectedCategory = catName;
        categoryCards.forEach(c => c.classList.remove("active")); card.classList.add("active");
        if (matchingChip) {
          [...filterCategoryChips.children].forEach(c => { c.classList.remove("active"); c.setAttribute("aria-pressed", "false"); });
          matchingChip.classList.add("active"); matchingChip.setAttribute("aria-pressed", "true");
        }
      }
      filterCourses();
    });
  });
  function filterCourses() {
    const filtered = courses.filter(course => {
      const categoryMatch = selectedCategory ? course.tags.includes(selectedCategory) : true;
      const timeMatch = selectedTime ? course.session === selectedTime : true;
      return categoryMatch && timeMatch;
    });
    renderCarousel(filteredCoursesCarousel, filtered, createCourseCard);
  }
  filterCourses();
  // Search
  document.getElementById("searchForm").addEventListener("submit", () => {
    const q = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!q) { filterCourses(); return; }
    const results = courses.filter(c=>c.title.toLowerCase().includes(q)||c.description.toLowerCase().includes(q));
    renderCarousel(filteredCoursesCarousel, results, createCourseCard);
  });
  // Keyboard
  document.querySelectorAll(".carousel-container").forEach(carousel => {
    carousel.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault(); carousel.scrollBy({ left: 260, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        e.preventDefault(); carousel.scrollBy({ left: -260, behavior: "smooth" });
      }
    });
  });
})();

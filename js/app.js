
// Main JavaScript for the website

// Global variables
let currentLanguage = 'es';
const ITEMS_PER_PAGE = 6;
const PRESS_ITEMS_PER_PAGE = 8;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize language
  initLanguage();
  
  // Update current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Initialize navigation
  initNavigation();
  
  // Initialize page-specific functions
  const currentPage = getCurrentPage();
  
  switch (currentPage) {
    case 'index':
      initHomePage();
      break;
    case 'biografia':
      initBiographyPage();
      break;
    case 'articulos':
      initArticlesPage();
      break;
    case 'prensa':
      initPressPage();
      break;
    case 'libros':
      initBooksPage();
      break;
    case 'fotos':
      initPhotosPage();
      break;
    case 'galeria':
      initGalleryPage();
      break;
    case 'contacto':
      initContactPage();
      break;
  }
});

// Helper function to get current page name
function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes('/biografia.html')) return 'biografia';
  if (path.includes('/articulos.html')) return 'articulos';
  if (path.includes('/prensa.html')) return 'prensa';
  if (path.includes('/libros.html')) return 'libros';
  if (path.includes('/fotos.html')) return 'fotos';
  if (path.includes('/galeria.html')) return 'galeria';
  if (path.includes('/contacto.html')) return 'contacto';
  return 'index';
}

// Initialize Language
function initLanguage() {
  // Get language from local storage or default to Spanish
  const storedLanguage = localStorage.getItem('language') || 'es';
  setLanguage(storedLanguage);
  
  // Add event listener to language selector
  const languageButton = document.querySelector('.language-button');
  const languageDropdown = document.getElementById('languageDropdown');
  const languageOptions = document.querySelectorAll('.language-option');
  
  // Toggle dropdown
  languageButton.addEventListener('click', function() {
    languageDropdown.classList.toggle('show');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.language-selector')) {
      languageDropdown.classList.remove('show');
    }
  });
  
  // Set language on option click
  languageOptions.forEach(option => {
    option.addEventListener('click', function() {
      const language = this.getAttribute('data-language');
      setLanguage(language);
      languageDropdown.classList.remove('show');
    });
  });
}

// Set language and update UI
function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem('language', language);
  
  // Update all translated elements
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[key] && translations[key][language]) {
      element.textContent = translations[key][language];
    }
  });
  
  // Update placeholder attributes
  document.querySelectorAll('[data-placeholder]').forEach(element => {
    const key = element.getAttribute('data-placeholder');
    if (translations[key] && translations[key][language]) {
      element.placeholder = translations[key][language];
    }
  });
  
  // Toggle elements with language-specific content
  document.querySelectorAll('[data-lang-key]').forEach(element => {
    const lang = element.getAttribute('data-lang-key');
    if (lang === language) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = language;
  
  // Refresh page-specific content
  const currentPage = getCurrentPage();
  
  switch (currentPage) {
    case 'index':
      loadFeaturedContent();
      break;
    case 'biografia':
      loadBiographyContent();
      break;
    case 'articulos':
      loadArticles();
      break;
    case 'prensa':
      loadPressItems();
      break;
    case 'libros':
      loadBooks();
      break;
    case 'fotos':
      loadGalleries();
      break;
    case 'galeria':
      loadGalleryPhotos();
      break;
  }
}

// Initialize Navigation
function initNavigation() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  
  menuToggle.addEventListener('click', function() {
    mobileNav.classList.toggle('show');
    menuToggle.classList.toggle('active');
  });
  
  // Navbar scroll behavior
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Format date function
function formatDate(dateString, language) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  
  return date.toLocaleDateString(language === 'es' ? 'es-AR' : 'en-US', options);
}

// Pagination function
function createPagination(totalItems, itemsPerPage, currentPage, containerId, clickHandler) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const container = document.getElementById(containerId);
  
  if (!container) return;
  
  container.innerHTML = '';
  
  if (totalPages <= 1) return;
  
  // Previous button
  const prevButton = document.createElement('button');
  prevButton.className = `pagination-item pagination-nav ${currentPage === 1 ? 'disabled' : ''}`;
  prevButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  `;
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      clickHandler(currentPage - 1);
    }
  });
  container.appendChild(prevButton);
  
  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.className = `pagination-item ${i === currentPage ? 'active' : ''}`;
    pageButton.textContent = i;
    pageButton.addEventListener('click', () => clickHandler(i));
    container.appendChild(pageButton);
  }
  
  // Next button
  const nextButton = document.createElement('button');
  nextButton.className = `pagination-item pagination-nav ${currentPage === totalPages ? 'disabled' : ''}`;
  nextButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  `;
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      clickHandler(currentPage + 1);
    }
  });
  container.appendChild(nextButton);
}

// Show toast notification
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  
  if (!toast || !toastMessage) return;
  
  toastMessage.textContent = message;
  toast.classList.remove('hidden');
  
  setTimeout(() => {
    toast.classList.add('hidden');
  }, duration);
  
  // Close toast on button click
  const closeToast = document.getElementById('closeToast');
  if (closeToast) {
    closeToast.addEventListener('click', () => {
      toast.classList.add('hidden');
    });
  }
}

// ------------------------------------------
// Page-specific functions
// ------------------------------------------

// Home Page
function initHomePage() {
  loadFeaturedContent();
}

function loadFeaturedContent() {
  // Load featured articles
  const featuredArticles = getFeaturedArticles();
  const articlesContainer = document.getElementById('featuredArticles');
  
  if (articlesContainer) {
    articlesContainer.innerHTML = '';
    
    featuredArticles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.className = 'article-card';
      articleElement.innerHTML = `
        <div class="article-image">
          <img src="${article.image}" alt="${currentLanguage === 'es' ? article.title : article.titleEn}">
        </div>
        <div class="article-content">
          <span class="article-date">${formatDate(article.date, currentLanguage)}</span>
          <h3 class="article-title">${currentLanguage === 'es' ? article.title : article.titleEn}</h3>
          <p class="article-excerpt">${currentLanguage === 'es' ? article.excerpt : article.excerptEn}</p>
          <a href="articulos.html?slug=${article.slug}" class="article-link">
            <span>${translations['articles.readmore'][currentLanguage]}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      `;
      articlesContainer.appendChild(articleElement);
    });
  }
  
  // Load featured book
  const featuredBook = getFeaturedBook();
  const bookContainer = document.getElementById('featuredBook');
  
  if (bookContainer && featuredBook) {
    bookContainer.innerHTML = `
      <div class="book-card">
        <div class="book-cover">
          <img src="${featuredBook.cover}" alt="${currentLanguage === 'es' ? featuredBook.title : featuredBook.titleEn}">
        </div>
        <div class="book-content">
          <h3 class="book-title">${currentLanguage === 'es' ? featuredBook.title : featuredBook.titleEn}</h3>
          <p class="book-description">${currentLanguage === 'es' ? featuredBook.description : featuredBook.descriptionEn}</p>
          <div class="book-details">
            <span class="book-publisher">${currentLanguage === 'es' ? featuredBook.publisher : featuredBook.publisherEn}</span>
            <span class="book-date">${formatDate(featuredBook.publishDate, currentLanguage)}</span>
          </div>
          <a href="libros.html" class="book-link">
            <span>${translations['home.view.all'][currentLanguage]}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    `;
  }
  
  // Load featured press
  const featuredPress = getFeaturedPress();
  const pressContainer = document.getElementById('featuredPress');
  
  if (pressContainer) {
    pressContainer.innerHTML = '';
    
    featuredPress.forEach(press => {
      const pressElement = document.createElement('div');
      pressElement.className = 'press-card';
      pressElement.innerHTML = `
        <div class="press-image">
          <img src="${press.image}" alt="${currentLanguage === 'es' ? press.title : press.titleEn}">
          <span class="press-type">${currentLanguage === 'es' ? 
            (press.type === 'interview' ? 'Entrevista' : press.type === 'mention' ? 'Mención' : 'Reseña') : 
            (press.type === 'interview' ? 'Interview' : press.type === 'mention' ? 'Mention' : 'Review')}</span>
        </div>
        <div class="press-content">
          <span class="press-date">${formatDate(press.date, currentLanguage)}</span>
          <h3 class="press-title">${currentLanguage === 'es' ? press.title : press.titleEn}</h3>
          <p class="press-summary">${currentLanguage === 'es' ? press.summary : press.summaryEn}</p>
          <span class="press-publication">${press.publication}</span>
        </div>
      `;
      pressContainer.appendChild(pressElement);
    });
  }
  
  // Load featured gallery
  const featuredGallery = getFeaturedGallery();
  const galleryContainer = document.getElementById('featuredGallery');
  
  if (galleryContainer && featuredGallery) {
    galleryContainer.innerHTML = `
      <div class="gallery-preview">
        <div class="gallery-preview-image">
          <img src="${featuredGallery.coverImage}" alt="${currentLanguage === 'es' ? featuredGallery.title : featuredGallery.titleEn}">
          <div class="gallery-overlay">
            <span class="gallery-count">${featuredGallery.photos.length} ${currentLanguage === 'es' ? 'fotos' : 'photos'}</span>
          </div>
        </div>
        <div class="gallery-preview-content">
          <h3 class="gallery-title">${currentLanguage === 'es' ? featuredGallery.title : featuredGallery.titleEn}</h3>
          <p class="gallery-description">${currentLanguage === 'es' ? featuredGallery.description : featuredGallery.descriptionEn}</p>
          <a href="galeria.html?id=${featuredGallery.id}" class="gallery-link">
            <span>${currentLanguage === 'es' ? 'Ver galería' : 'View gallery'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    `;
  }
}

// Biography Page
function initBiographyPage() {
  loadBiographyContent();
}

function loadBiographyContent() {
  const bioContent = document.getElementById('bioContent');
  
  if (bioContent) {
    bioContent.innerHTML = biographyContent[currentLanguage];
  }
}

// Articles Page
function initArticlesPage() {
  // Check for article slug in URL params
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');
  
  if (slug) {
    // Show article detail
    showArticleDetail(slug);
  } else {
    // Show articles list
    loadArticleCategories();
    loadArticles();
    
    // Setup search
    const searchInput = document.getElementById('articleSearch');
    if (searchInput) {
      searchInput.addEventListener('input', debounce(loadArticles, 300));
    }
  }
}

function loadArticleCategories() {
  const categoriesContainer = document.getElementById('articleCategories');
  
  if (!categoriesContainer) return;
  
  const categories = currentLanguage === 'es' ? getArticleCategories() : getArticleCategoriesEn();
  categoriesContainer.innerHTML = '';
  
  // Create category filter buttons
  categories.forEach(category => {
    const button = document.createElement('button');
    button.className = 'category-button';
    button.textContent = category;
    button.setAttribute('data-category', category);
    button.addEventListener('click', function() {
      const activeButton = categoriesContainer.querySelector('.category-button.active');
      
      if (activeButton === this) {
        // Deselect if already active
        this.classList.remove('active');
      } else {
        // Remove active class from previous button
        if (activeButton) {
          activeButton.classList.remove('active');
        }
        
        // Set active class on clicked button
        this.classList.add('active');
      }
      
      // Reload articles with filter
      loadArticles();
    });
    
    categoriesContainer.appendChild(button);
  });
}

function loadArticles() {
  const articlesContainer = document.getElementById('articleList');
  
  if (!articlesContainer) return;
  
  // Get current page or default to 1
  const currentPage = parseInt(localStorage.getItem('articlesPage') || '1');
  
  // Get filter parameters
  const searchInput = document.getElementById('articleSearch');
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
  const activeCategoryButton = document.querySelector('#articleCategories .category-button.active');
  const selectedCategory = activeCategoryButton ? activeCategoryButton.getAttribute('data-category') : null;
  
  // Filter articles
  const filteredArticles = articlesData.filter(article => {
    const titleMatch = (currentLanguage === 'es' ? 
      article.title.toLowerCase() : article.titleEn.toLowerCase()).includes(searchTerm);
    
    const categoryMatch = !selectedCategory || (currentLanguage === 'es' ? 
      article.category === selectedCategory : article.categoryEn === selectedCategory);
    
    return titleMatch && categoryMatch;
  });
  // Sort articles by date
  filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Pagination
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  // Render articles
  articlesContainer.innerHTML = '';
  
  if (paginatedArticles.length === 0) {
    articlesContainer.innerHTML = `
      <div class="no-results">
        <p>${currentLanguage === 'es' ? 'No se encontraron artículos' : 'No articles found'}</p>
      </div>
    `;
    return;
  }
  
  paginatedArticles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.className = 'article-card fade-in';
    articleElement.innerHTML = `
      <div class="article-image">
        <img src="${article.image}" alt="${currentLanguage === 'es' ? article.title : article.titleEn}">
      </div>
      <div class="article-content">
        <span class="article-date">${article.source}, ${formatDate(article.date, currentLanguage)}</span>
        <h3 class="article-title">${currentLanguage === 'es' ? article.title : article.titleEn}</h3>
        <p class="article-excerpt">${currentLanguage === 'es' ? article.excerpt : article.excerptEn}</p>
        <a href="${article.link}" class="article-link" target="_blank">
          <span>${currentLanguage === 'es' ? 'Ver Artículo' : 'View Article'}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    `;
    articlesContainer.appendChild(articleElement);
  });
  
  // Create pagination
  createPagination(
    filteredArticles.length,
    ITEMS_PER_PAGE,
    currentPage,
    'articlesPagination',
    function(page) {
      localStorage.setItem('articlesPage', page);
      loadArticles();
      window.scrollTo(0, 0);
    }
  );
}

function showArticleDetail(slug) {
  const article = getArticleBySlug(slug);
  const articlesList = document.getElementById('articleList');
  const articleDetail = document.getElementById('articleDetail');
  const pagination = document.getElementById('articlesPagination');
  
  if (!article || !articlesList || !articleDetail) return;
  
  // Hide article list and pagination
  articlesList.classList.add('hidden');
  if (pagination) pagination.classList.add('hidden');
  
  // Show article detail
  articleDetail.classList.remove('hidden');
  
  articleDetail.innerHTML = `
    <a href="articulos.html" class="back-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      <span>${currentLanguage === 'es' ? 'Volver a todos los artículos' : 'Back to all articles'}</span>
    </a>
    
    <article class="article-full">
      <header class="article-header">
        <span class="article-category">${currentLanguage === 'es' ? article.category : article.categoryEn}</span>
        <h1 class="article-title">${currentLanguage === 'es' ? article.title : article.titleEn}</h1>
        <div class="article-meta">
          <span class="article-date">${formatDate(article.date, currentLanguage)}</span>
        </div>
      </header>
      
      <div class="article-featured-image">
        <img src="${article.image}" alt="${currentLanguage === 'es' ? article.title : article.titleEn}">
      </div>
      
      <div class="article-body">
        ${currentLanguage === 'es' ? article.content : article.contentEn}
      </div>
    </article>
  `;
  
  // Hide filters and search
  const articlesControls = document.querySelector('.articles-controls');
  if (articlesControls) {
    articlesControls.classList.add('hidden');
  }
}

// Press Page
function initPressPage() {
  loadPressItems();
  
  // Initialize tabs
  const tabs = document.querySelectorAll('.press-tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Store active tab
      localStorage.setItem('pressTab', this.getAttribute('data-tab'));
      
      // Reset to page 1
      localStorage.setItem('pressPage', '1');
      
      // Load filtered items
      loadPressItems();
    });
  });
  
  // Set active tab from storage
  const activeTab = localStorage.getItem('pressTab') || 'all';
  const tabToActivate = document.querySelector(`.press-tab[data-tab="${activeTab}"]`);
  
  if (tabToActivate) {
    tabs.forEach(t => t.classList.remove('active'));
    tabToActivate.classList.add('active');
  }
}

function loadPressItems() {
  const pressContainer = document.getElementById('pressList');
  
  if (!pressContainer) return;
  
  // Get active tab
  const activeTab = localStorage.getItem('pressTab') || 'all';
  
  // Get current page
  const currentPage = parseInt(localStorage.getItem('pressPage') || '1');
  
  // Filter press items based on tab
  let filteredItems;
  
  switch (activeTab) {
    case 'interviews':
      filteredItems = getPressInterviews();
      break;
    case 'mentions':
      filteredItems = getPressMentions();
      break;
    default:
      filteredItems = pressData;
  }
   // Sort press items by date (newest first)
   filteredItems.sort((a, b) => new Date(b.date) - new Date(a.date));
  // Pagination
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * PRESS_ITEMS_PER_PAGE,
    currentPage * PRESS_ITEMS_PER_PAGE
  );
  
  // Render press items
  pressContainer.innerHTML = '';
  
  if (paginatedItems.length === 0) {
    pressContainer.innerHTML = `
      <div class="no-results">
        <p>${currentLanguage === 'es' ? 'No se encontraron items' : 'No items found'}</p>
      </div>
    `;
    return;
  }
  
  paginatedItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'press-card fade-in';
    itemElement.innerHTML = `
      <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="press-card-inner">
        <div class="press-image">
          <img src="${item.image}" alt="${currentLanguage === 'es' ? item.title : item.titleEn}">
          
        </div>
        <div class="press-content">
          <span class="press-date">${formatDate(item.date, currentLanguage)}</span>
          <h3 class="press-title">${currentLanguage === 'es' ? item.title : item.titleEn}</h3>
          <p class="press-summary">${currentLanguage === 'es' ? item.summary : item.summaryEn}</p>
          <div class="press-footer">
            <span class="press-publication">${item.publication}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
        </div>
      </a>
    `;
    pressContainer.appendChild(itemElement);
  });
  
  // Create pagination
  createPagination(
    filteredItems.length,
    ITEMS_PER_PAGE,
    currentPage,
    'pressPagination',
    function(page) {
      localStorage.setItem('pressPage', page);
      loadPressItems();
      window.scrollTo(0, 0);
    }
  );
}

// Books Page
function initBooksPage() {
  loadBooks();
}

function loadBooks() {
  const booksContainer = document.getElementById('booksList');
  
  if (!booksContainer) return;
  
  // Render books
  booksContainer.innerHTML = '';
  
  booksData.forEach((book, index) => {
    const bookElement = document.createElement('div');
    bookElement.className = 'book-item fade-in';
    bookElement.innerHTML = `
      <div class="book-container ${index % 2 === 0 ? 'even' : 'odd'}">
        <div class="book-cover-container">
          <div class="book-cover-bg"></div>
          <div class="book-cover-img">
            <img src="${book.cover}" alt="${currentLanguage === 'es' ? book.title : book.titleEn}">
          </div>
        </div>
        
        <div class="book-details">
        <div>
          <h2 class="book-title">${currentLanguage === 'es' ? book.title : book.titleEn}</h2>
          
          <p class="book-description">${currentLanguage === 'es' ? book.description : book.descriptionEn}</p>
          </div>
          <div class="book-info">
            <div class="book-info-grid">
              <h3 class="book-info-title">${currentLanguage === 'es' ? 'Detalles' : 'Details'}</h3>
              <ul class="book-info-list">
                
                <li class="book-info-item">
                  <span class="book-info-label">${translations['books.publisher'][currentLanguage]}:</span>
                  <span class="book-info-value">${ book.publisher}</span>
                </li>
                <li class="book-info-item">
                  <span class="book-info-label">${translations['books.published'][currentLanguage]}:</span>
                  <span class="book-info-value">${book.publishDate}</span>
                </li>
              </ul>
            </div>
          </div>
          
          
        </div>
      </div>
    `;
    booksContainer.appendChild(bookElement);
  });
}

// Photos Page
function initPhotosPage() {
  loadGalleries();
}

function loadGalleries() {
  const galleriesContainer = document.getElementById('galleriesList');
  
  if (!galleriesContainer) return;
  
  // Render galleries
  galleriesContainer.innerHTML = '';
  
  galleries.forEach((gallery, index) => {
    const galleryElement = document.createElement('div');
    galleryElement.className = 'gallery-card fade-in';
    galleryElement.setAttribute('data-delay', index * 100);
    galleryElement.innerHTML = `
      <a href="galeria.html?id=${gallery.id}" class="gallery-card-inner">
        <div class="gallery-card-gradient"></div>
        <img src="${gallery.coverImage}" alt="${currentLanguage === 'es' ? gallery.title : gallery.titleEn}" class="gallery-card-image">
        <div class="gallery-card-content">
          <h2 class="gallery-card-title">${currentLanguage === 'es' ? gallery.title : gallery.titleEn}</h2>
          <p class="gallery-card-description">${currentLanguage === 'es' ? gallery.description : gallery.descriptionEn}</p>
          <span class="gallery-card-count">${gallery.photos.length} ${currentLanguage === 'es' ? 'fotos' : 'photos'}</span>
        </div>
      </a>
    `;
    galleriesContainer.appendChild(galleryElement);
  });
}

// Gallery Page (Individual photo gallery)
function initGalleryPage() {
  // Get gallery ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const galleryId = urlParams.get('id');
  
  if (!galleryId) {
    window.location.href = 'fotos.html';
    return;
  }
  
  loadGalleryPhotos(galleryId);
  initLightbox();
}

function loadGalleryPhotos(galleryId) {
  // If galleryId is not provided, try to get it from URL
  if (!galleryId) {
    const urlParams = new URLSearchParams(window.location.search);
    galleryId = urlParams.get('id');
    
    if (!galleryId) {
      window.location.href = 'fotos.html';
      return;
    }
  }
  
  const gallery = getGalleryById(galleryId);
  
  if (!gallery) {
    window.location.href = 'fotos.html';
    return;
  }
  
  // Set gallery info
  const galleryInfo = document.getElementById('galleryInfo');
  if (galleryInfo) {
    galleryInfo.innerHTML = `
      <h1 class="gallery-title">${currentLanguage === 'es' ? gallery.title : gallery.titleEn}</h1>
      <p class="gallery-description">${currentLanguage === 'es' ? gallery.description : gallery.descriptionEn}</p>
    `;
  }
  
  // Set back link text
  const backToGalleries = document.getElementById('backToGalleries');
  if (backToGalleries) {
    const backText = backToGalleries.querySelector(`[data-lang-key="${currentLanguage}"]`);
    if (backText) {
      backText.classList.remove('hidden');
    }
  }
  
  // Load photos
  const photoGrid = document.getElementById('photoGrid');
  
  if (!photoGrid) return;
  
  photoGrid.innerHTML = '';
  
  gallery.photos.forEach((photo, index) => {
    const photoElement = document.createElement('div');
    photoElement.className = 'photo-item fade-in';
    photoElement.setAttribute('data-index', index);
    photoElement.innerHTML = `
      <div class="photo-container">
        <img src="${photo.imageUrl}" alt="${currentLanguage === 'es' ? photo.title : photo.titleEn}" loading="lazy">
      </div>
    `;
    photoElement.addEventListener('click', () => openPhoto(index));
    photoGrid.appendChild(photoElement);
  });
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const closeLightbox = document.getElementById('closeLightbox');
  const prevPhoto = document.getElementById('prevPhoto');
  const nextPhoto = document.getElementById('nextPhoto');
  
  if (!lightbox || !closeLightbox || !prevPhoto || !nextPhoto) return;
  
  // Close lightbox
  closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
    document.body.classList.remove('no-scroll');
  });
  
  // Navigation
  prevPhoto.addEventListener('click', () => navigatePhoto('prev'));
  nextPhoto.addEventListener('click', () => navigatePhoto('next'));
  
  // Close on overlay click (but not on the photo)
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      lightbox.classList.remove('show');
      document.body.classList.remove('no-scroll');
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('show')) return;
    
    if (e.key === 'Escape') {
      lightbox.classList.remove('show');
      document.body.classList.remove('no-scroll');
    } else if (e.key === 'ArrowLeft') {
      navigatePhoto('prev');
    } else if (e.key === 'ArrowRight') {
      navigatePhoto('next');
    }
  });
}

function openPhoto(index) {
  const urlParams = new URLSearchParams(window.location.search);
  const galleryId = urlParams.get('id');
  const gallery = getGalleryById(galleryId);
  
  if (!gallery) return;
  
  const lightbox = document.getElementById('lightbox');
  const photoContainer = document.getElementById('lightboxPhotoContainer');
  const counter = document.getElementById('lightboxCounter');
  
  if (!lightbox || !photoContainer || !counter) return;
  
  const photo = gallery.photos[index];
  
  photoContainer.innerHTML = `
    <img src="${photo.imageUrl}" alt="${currentLanguage === 'es' ? photo.title : photo.titleEn}" class="lightbox-photo">
    <div class="lightbox-info">
      <h3 class="lightbox-title">${currentLanguage === 'es' ? photo.title : photo.titleEn}</h3>
      <p class="lightbox-description">${currentLanguage === 'es' ? photo.description : photo.descriptionEn}</p>
      <div class="lightbox-meta">
        <span class="lightbox-location">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          ${currentLanguage === 'es' ? photo.location : photo.locationEn}
        </span>
        <span class="lightbox-date">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          ${formatDate(photo.date, currentLanguage)}
        </span>
      </div>
    </div>
  `;
  
  counter.textContent = `${index + 1} / ${gallery.photos.length}`;
  
  // Store current photo index
  lightbox.setAttribute('data-current-index', index);
  
  // Show lightbox
  lightbox.classList.add('show');
  document.body.classList.add('no-scroll');
}

function navigatePhoto(direction) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  
  const currentIndex = parseInt(lightbox.getAttribute('data-current-index') || '0');
  const urlParams = new URLSearchParams(window.location.search);
  const galleryId = urlParams.get('id');
  const gallery = getGalleryById(galleryId);
  
  if (!gallery) return;
  
  let newIndex;
  
  if (direction === 'prev') {
    newIndex = currentIndex === 0 ? gallery.photos.length - 1 : currentIndex - 1;
  } else {
    newIndex = currentIndex === gallery.photos.length - 1 ? 0 : currentIndex + 1;
  }
  
  openPhoto(newIndex);
}

// Contact Page
function initContactPage() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Disable submit button and show loading
      const submitButton = document.getElementById('submitForm');
      
      if (submitButton) {
        const buttonText = submitButton.querySelector('[data-key="contact.send"]');
        if (buttonText) {
          buttonText.textContent = translations['contact.sending'][currentLanguage];
        }
        submitButton.disabled = true;
      }
      
      // Simulate form submission (would be an actual API call in a real site)
      setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Enable submit button
        if (submitButton) {
          const buttonText = submitButton.querySelector('[data-key="contact.send"]');
          if (buttonText) {
            buttonText.textContent = translations['contact.send'][currentLanguage];
          }
          submitButton.disabled = false;
        }
        
        // Show success message
        showToast(translations['contact.thank.you'][currentLanguage]);
      }, 1500);
    });
  }
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

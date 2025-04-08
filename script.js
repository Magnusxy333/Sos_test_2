const primaryHeader = document.querySelector('.header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const nacObserver = new IntersectionObserver((entries) => {
  primaryHeader.classList.toggle('sticking', entries[0].isIntersecting)
}, {rootMargin: "150px 0px 0px 0px"});

nacObserver.observe(scrollWatcher)

//////////////////////////////////////////


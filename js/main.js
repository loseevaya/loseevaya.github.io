// 导航栏滚动高亮
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav a');

  function setActiveLink() {
    let current = sections[0].id;
    const scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      if (scrollPos >= section.offsetTop) {
        current = section.id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();
});

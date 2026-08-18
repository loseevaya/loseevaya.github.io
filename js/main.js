// ===================== 中英文切换 =====================
document.addEventListener('DOMContentLoaded', function () {
  const zhBtn = document.getElementById('lang-zh');
  const enBtn = document.getElementById('lang-en');
  const htmlEl = document.documentElement;
  const metaDesc = document.querySelector('meta[name="description"]');
  const titleEl = document.querySelector('title');

  // 读取上次保存的语言，默认中文
  let savedLang = null;
  try { savedLang = localStorage.getItem('homepage-lang-v2'); } catch (e) { savedLang = null; }
  let currentLang = savedLang || 'en';

  function applyLanguage(lang) {
    currentLang = lang;

    // 更新所有带 data-zh / data-en 的可见文本元素
    document.querySelectorAll('body [data-zh]').forEach(function (el) {
      const text = lang === 'zh' ? el.getAttribute('data-zh') : el.getAttribute('data-en');
      if (text !== null) {
        el.innerHTML = text;
      }
    });

    // 更新页面语言属性
    htmlEl.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

    // 更新标题和描述
    if (titleEl && titleEl.getAttribute('data-' + lang)) {
      titleEl.textContent = titleEl.getAttribute('data-' + lang);
    }
    if (metaDesc && metaDesc.getAttribute('data-' + lang)) {
      metaDesc.setAttribute('content', metaDesc.getAttribute('data-' + lang));
    }

    // 更新按钮状态
    zhBtn.classList.toggle('active', lang === 'zh');
    enBtn.classList.toggle('active', lang === 'en');

    // 保存语言选择
    try { localStorage.setItem('homepage-lang-v2', lang); } catch (e) { /* 忽略 */ }
  }

  zhBtn.addEventListener('click', function () { applyLanguage('zh'); });
  enBtn.addEventListener('click', function () { applyLanguage('en'); });

  // 初始应用语言
  applyLanguage(currentLang);
});

// ===================== 导航栏滚动高亮 =====================
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav a');

  function setActiveLink() {
    let current = sections.length ? sections[0].id : '';
    const scrollPos = window.scrollY + 120;

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

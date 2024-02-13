// if (window.innerWidth < 768) {
//   const nav = document.querySelector('.nav__links');
//   const openNavBtn = document.querySelector('#nav__toggle-open');
//   const closeNavBtn = document.querySelector('#nav__toggle-close');

//   const openNav = () => {
//     nav.style.display = 'flex';
//     openNavBtn.style.display = 'none';
//     closeNavBtn.style.display = 'inline-block';
//   };

//   openNavBtn.addEventListener('click', openNav);

//   const closeNav = () => {
//     nav.style.display = 'none';
//     openNavBtn.style.display = 'inline-block';
//     closeNavBtn.style.display = 'none';
//   };

//   closeNavBtn.addEventListener('click', closeNav);

//   nav.querySelectorAll('li a').forEach(navLink => {
//     navLink.addEventListener('click', closeNav);
//   });
// }

const isSmallScreen = window.innerWidth < 768;
const isiPad = /iPad/i.test(navigator.userAgent);

if (isSmallScreen || isiPad) {
  const nav = document.querySelector('.nav__links');
  const openNavBtn = document.querySelector('#nav__toggle-open');
  const closeNavBtn = document.querySelector('#nav__toggle-close');

  const toggleNav = () => {
    if (nav.style.display === 'flex' || getComputedStyle(nav).display === 'flex') {
      nav.style.display = 'none';
      openNavBtn.style.display = 'inline-block';
      closeNavBtn.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      openNavBtn.style.display = 'none';
      closeNavBtn.style.display = 'inline-block';
    }
  };

  openNavBtn.addEventListener('click', toggleNav);
  closeNavBtn.addEventListener('click', toggleNav);

  // Use 'touchend' event for iPad
  if (isiPad) {
    openNavBtn.addEventListener('touchend', toggleNav);
    closeNavBtn.addEventListener('touchend', toggleNav);
    nav.querySelectorAll('li a').forEach(navLink => {
      navLink.addEventListener('touchend', toggleNav);
    });
  } else {
    // Use 'click' event for other devices
    nav.querySelectorAll('li a').forEach(navLink => {
      navLink.addEventListener('click', toggleNav);
    });
  }
}

const logo = document.querySelector('.nav__logo');

logo.style.opacity = 0;

window.addEventListener('load', function () {
  logo.style.transition = 'opacity 1.5s ease-in-out';
  logo.style.opacity = 1;
});

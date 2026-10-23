
  const faqHeaders = document.querySelectorAll('.Header');

  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const kartu = header.parentElement;
      const toggle = header.querySelector('.toggle');
      
      
      kartu.classList.toggle('aktif');
      
      
      if (kartu.classList.contains('aktif')) {
        toggle.textContent = '-';
      } else {
        toggle.textContent = '+';
      }
    });
  });

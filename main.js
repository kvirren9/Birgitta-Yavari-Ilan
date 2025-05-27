document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
      const section = button.closest('.expandable');
      section.classList.toggle('open');

      if (section.classList.contains('open')) {
        button.textContent = 'Visa mindre';
      } else {
        button.textContent = 'Läs mer';
      }
    });
  });

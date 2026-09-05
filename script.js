const copyButton = document.querySelector('[data-copy]');
const toast = document.querySelector('.toast');

if (copyButton && toast) {
  copyButton.addEventListener('click', async () => {
    const value = copyButton.dataset.copy;

    try {
      await navigator.clipboard.writeText(value);
      toast.textContent = `Copied ${value}`;
      toast.classList.add('show');
      window.setTimeout(() => toast.classList.remove('show'), 1800);
    } catch {
      copyButton.textContent = value;
    }
  });
}

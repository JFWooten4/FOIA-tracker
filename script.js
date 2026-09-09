const toast = document.querySelector('.toast');

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 1800);
}

async function copyText(value, fallbackElement) {
  try {
    await navigator.clipboard.writeText(value);
    showToast('Copied to clipboard');
  } catch {
    if (fallbackElement) fallbackElement.textContent = value;
  }
}

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', () => copyText(button.dataset.copy, button));
});

const builder = document.querySelector('#request-builder');
const generatedRequest = document.querySelector('#generated-request');
const copyDraft = document.querySelector('#copy-draft');

if (builder && generatedRequest && copyDraft) {
  builder.addEventListener('submit', (event) => {
    event.preventDefault();

    const subject = document.querySelector('#builder-subject').value.trim();
    const dates = document.querySelector('#builder-dates').value.trim();
    const records = document.querySelector('#builder-records').value.trim();
    const office = document.querySelector('#builder-office').value.trim();
    const terms = document.querySelector('#builder-terms').value.trim();

    const scope = [
      records ? `Records sought: ${records}.` : 'Records sought: [describe the existing records you want searched].',
      subject ? `Subject or event: ${subject}.` : 'Subject or event: [identify the subject, event, release, matter, or transaction].',
      dates ? `Date range: ${dates}.` : 'Date range: [add the narrowest useful range].',
      office ? `Likely office or custodian: ${office}.` : 'Likely office or custodian: [add if known].',
      terms ? `Identifiers or search terms: ${terms}.` : 'Identifiers or search terms: [names, release numbers, matter numbers, or distinctive terms].'
    ].join('\n');

    generatedRequest.value = `Under the Freedom of Information Act, I request copies of the following existing SEC records:\n\n${scope}\n\nPlease provide the records electronically where available. If any portion is withheld, please identify the applicable basis for withholding and release any reasonably segregable non-exempt portions. If clarification would materially improve the search, please contact me before closing the request.`;
    copyDraft.disabled = false;
    generatedRequest.focus();
    showToast('Draft built');
  });

  copyDraft.addEventListener('click', () => {
    if (generatedRequest.value) copyText(generatedRequest.value, copyDraft);
  });
}

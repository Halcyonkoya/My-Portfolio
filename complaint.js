document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('complaintForm');
  const submitBtn = document.getElementById('submitBtn');
  const statusDiv = document.getElementById('formStatus');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    statusDiv.textContent = '';
    statusDiv.style.display = 'none';

    // Basic validation
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['complaint'].value.trim();

    let errors = [];
    if (!name) errors.push('Name is required.');
    if (!email || !validateEmail(email)) errors.push('Valid email is required.');
    if (!message) errors.push('Complaint message is required.');

    if (errors.length > 0) {
      statusDiv.textContent = errors.join(' ');
      statusDiv.style.display = 'block';
      statusDiv.style.color = 'red';
      return;
    }

    // Interactivity: disable button while submitting
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    // Prepare data
    const formData = {
      name,
      email,
      complaint: message
    };

    // AJAX submission (replace 'YOUR_ENDPOINT_URL' with the actual endpoint)
    try {
      const response = await fetch('YOUR_ENDPOINT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        statusDiv.textContent = 'Your complaint has been submitted successfully!';
        statusDiv.style.color = 'green';
        form.reset();
      } else {
        statusDiv.textContent = 'There was a problem submitting your complaint. Please try again later.';
        statusDiv.style.color = 'red';
      }
    } catch (error) {
      statusDiv.textContent = 'Network error: Unable to submit form.';
      statusDiv.style.color = 'red';
    } finally {
      statusDiv.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Complaint';
    }
  });

  function validateEmail(email) {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
document.getElementById('generate-btn').addEventListener('click', function () {
    const url = document.getElementById('url-input').value.trim();
    const qrCodeDiv = document.getElementById('qr-code');
  
    if (!url) {
      alert('Please enter a valid URL.');
      return;
    }
  
    // Clear previous QR code
    qrCodeDiv.innerHTML = '';
  
    // Generate new QR code
    new QRCode(qrCodeDiv, {
      text: url,
      width: 200,
      height: 200,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
  });
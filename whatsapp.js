// JavaScript to create a floating WhatsApp icon in the middle right of the screen
(function() {
    const whatsappFloat = document.createElement('div');
    whatsappFloat.style.position = 'fixed';
    whatsappFloat.style.width = '60px';
    whatsappFloat.style.height = '60px';
    whatsappFloat.style.right = '5px';
    whatsappFloat.style.top = '70%';
    whatsappFloat.style.transform = 'translateY(-50%)';  // Center vertically
    whatsappFloat.style.backgroundColor = '#009500';  // Updated color
    whatsappFloat.style.color = '#FFF';
    whatsappFloat.style.borderRadius = '50%';
    whatsappFloat.style.textAlign = 'center';
    whatsappFloat.style.fontSize = '30px';
    whatsappFloat.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.3)';
    whatsappFloat.style.zIndex = '1000';
    whatsappFloat.innerHTML = `<a href="https://wa.me/971509880960" target="_blank" title="Chat with us on WhatsApp" style="color: #FFF; display: flex; align-items: center; justify-content: center; height: 100%; width: 100%; text-decoration: none;">&#x1F4AC;</a>`;
    document.body.appendChild(whatsappFloat);
})();

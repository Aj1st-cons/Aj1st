(function () {
    // Create a wrapper div for the new content to avoid interfering with other elements
    const wrapper = document.createElement('div');
    wrapper.id = 'unique-wrapper';

    // Create a container for the contact section
    const contactSection = document.createElement('section');
    contactSection.id = 'unique-contact-section';
    contactSection.className = 'unique-contact-section';
    contactSection.innerHTML = `
        <h2>Contact Us</h2>
        <p class="unique-contact-address">
            Dubai, United Arab Emirates
            <span class="unique-location-icon">➤</span>
        </p>
        <p class="unique-contact-email">admin@aj1st.com</p>
        <div class="unique-social-icons">
            <a href="https://www.facebook.com" class="unique-social-icon" target="_blank">
                <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com" class="unique-social-icon" target="_blank">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" class="unique-social-icon" target="_blank">
                <i class="fab fa-tiktok"></i>
            </a>
        </div>
        <a href="https://wa.me/971509880960" class="unique-whatsapp-button">Whatsapp us</a>
    `;

    // Create the footer
    const footer = document.createElement('footer');
    footer.className = 'unique-footer';
    footer.innerHTML = `
        <p>Copyright © 2025 Aj1st Consultants<br> All Rights Reserved.</p>
    `;

    // Add an image
    const image = document.createElement('img');
    image.src = 'https://img1.wsimg.com/isteam/ip/6daf5d04-0e97-4331-9056-8876550fe90c/funny.png/:/rs=w:1209,h:285';
    image.alt = 'Welcome Image';
    image.style = 'max-width: 100%; height: auto; display: block; margin: 30px auto 0;';

    // Append elements to the wrapper
    wrapper.appendChild(image);
    wrapper.appendChild(contactSection);
    wrapper.appendChild(footer);

    // Append the wrapper to the body
    document.body.appendChild(wrapper);

    // Inject styles into the document
    const style = document.createElement('style');
    style.textContent = `
        #unique-wrapper {
            font-family: Arial, sans-serif;
        }
        .unique-contact-section {
            text-align: center;
            color: #2d3b2d;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .unique-contact-section h2 {
            font-size: 1.8em;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .unique-contact-section .unique-contact-address,
        .unique-contact-section .unique-contact-email {
            font-size: 1em;
            margin: 5px 0;
        }
        .unique-contact-section .unique-location-icon {
            font-size: 0.8em;
            vertical-align: middle;
        }
        .unique-contact-section .unique-social-icons {
            display: flex;
            justify-content: center;
            margin: 15px 0;
            gap: 15px;
        }
        .unique-contact-section .unique-social-icon {
            font-size: 1.5em;
            color: #2d3b2d;
            text-decoration: none;
        }
        .unique-contact-section .unique-whatsapp-button {
            display: inline-block;
            padding: 10px 20px;
            border: 2px solid #009500;
            border-radius: 20px;
            color: #2d3b2d;
            font-size: 1em;
            font-weight: bold;
            text-decoration: none;
            margin-top: 10px;
            transition: background-color 0.3s, color 0.3s;
        }
        .unique-contact-section .unique-whatsapp-button:hover {
            background-color: #2d3b2d;
            color: #ffffff;
        }
        .unique-footer {
            background-color: #000;
            color: #808080;
            text-align: center;
            font-size: 12px;
            padding: 5px 0;
            width: 100%;
        }
    `;
    document.head.appendChild(style);

    // Add Font Awesome for social icons
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(fontAwesome);
})();

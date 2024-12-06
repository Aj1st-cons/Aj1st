// Create header container and inject content
const header = document.createElement('header');
header.classList.add('header');

// Create the logo section
const logoContainer = document.createElement('div');
logoContainer.classList.add('logo');
const logoLink = document.createElement('a');
logoLink.href = "https://aj1st.com/index.html";
const logoImage = document.createElement('img');
logoImage.src = "https://img1.wsimg.com/isteam/ip/6daf5d04-0e97-4331-9056-8876550fe90c/Aj1st_logo.png/:/rs=w:1209,h:1209";
logoImage.alt = "Logo";
logoImage.style.height = "50px";
logoLink.appendChild(logoImage);
logoContainer.appendChild(logoLink);

// Create the burger icon
const burgerIcon = document.createElement('div');
burgerIcon.classList.add('burger-icon');
burgerIcon.setAttribute('onclick', 'toggleMenu()');
const burgerLine1 = document.createElement('div');
burgerLine1.classList.add('burger-line', 'short');
const burgerLine2 = document.createElement('div');
burgerLine2.classList.add('burger-line');
burgerIcon.appendChild(burgerLine1);
burgerIcon.appendChild(burgerLine2);

// Append the logo and burger icon to the header
header.appendChild(logoContainer);
header.appendChild(burgerIcon);

// Append the header to the body
document.body.appendChild(header);

// Create fullscreen menu
const fullscreenMenu = document.createElement('div');
fullscreenMenu.classList.add('fullscreen-menu');
fullscreenMenu.id = 'fullscreenMenu';

// Close button
const closeBtn = document.createElement('button');
closeBtn.classList.add('close-btn');
closeBtn.setAttribute('onclick', 'toggleMenu()');
closeBtn.textContent = '×';

// Menu items
const menuItemsList = document.createElement('ul');
menuItemsList.classList.add('menu-items');

const menuItems = [
    { text: 'Home', href: 'http://aj1st.com/index.html' },
    { text: 'Visit UAE\'s Top Attractions', href: 'http://aj1st.com/Explore uae.html' },
    { text: 'Visit UAE to Start a Business', href: 'http://aj1st.com/Start a business.html' },
    { text: 'Visit UAE to Find a Job', href: 'http://aj1st.com/Visit uae.html' },
    { text: 'Places to Visit in UAE', href: 'http://aj1st.com/Places to visit.html' },
    { text: 'Post a Job', href: 'http://aj1st.com/Post a job.html' },
    { text: 'Find a Job', href: 'http://aj1st.com/Find a job.html' },
    { text: 'About Us', href: 'http://aj1st.com/About.html' },
    { text: 'Contact Us', href: 'http://aj1st.com#links-container' },
    { text: 'Vacancies.Aj1st.com', href: 'https://aj1st-com.pages.dev' },
];

menuItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.text;
    listItem.appendChild(link);
    menuItemsList.appendChild(listItem);
});

// WhatsApp button
const whatsappLink = document.createElement('a');
whatsappLink.href = 'https://wa.me/971509880960';
whatsappLink.style.display = 'inline-block';
whatsappLink.style.padding = '10px 20px';
whatsappLink.style.backgroundColor = '#009500';
whatsappLink.style.border = '2px solid #009500';
whatsappLink.style.borderRadius = '20px';
whatsappLink.style.color = '#fff';
whatsappLink.style.fontSize = '1.5em';
whatsappLink.style.fontWeight = 'bold';
whatsappLink.style.textDecoration = 'none';
whatsappLink.style.transition = 'background-color 0.3s, color 0.3s';
whatsappLink.style.marginTop = '10px';
whatsappLink.style.marginLeft = 'auto';
whatsappLink.style.marginRight = 'auto';
whatsappLink.style.display = 'block';
whatsappLink.style.textAlign = 'center';
whatsappLink.style.width = 'fit-content';
whatsappLink.textContent = 'WhatsApp';

// Append close button, menu items, and WhatsApp button to fullscreen menu
fullscreenMenu.appendChild(closeBtn);
fullscreenMenu.appendChild(menuItemsList);
fullscreenMenu.appendChild(whatsappLink);

// Append fullscreen menu to the body
document.body.appendChild(fullscreenMenu);

// Add styles for the header and menu
const headerStyle = document.createElement('style');
headerStyle.textContent = `
    /* General Styling */
    body, html {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #fff;
        color: #000;
    }

    .header {
        background-color: #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 10px;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 10;
        box-sizing: border-box;
    }

    .logo img {
        height: 50px;
    }

    /* Compact Burger Menu Icon */
    .burger-icon {
        display: flex;
        flex-direction: column;
        gap: 10px;
        cursor: pointer;
    }

    .burger-line {
        width: 20px;
        height: 2px;
        background-color: #fff;
        transition: width 0.2s;
    }

    .burger-line.short {
        width: 15px;
    }

    /* Fullscreen Menu Styling */
    .fullscreen-menu {
        visibility: hidden;
        opacity: 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        color: #fff;
        z-index: 20;
        padding-top: 30px;
        overflow-y: auto;
        text-align: left;
        transition: visibility 0s, opacity 0.3s ease-in-out;
    }

    .fullscreen-menu.open {
        visibility: visible;
        opacity: 1;
    }

    .menu-items {
        list-style-type: none;
        padding-left: 10px;
        margin-top: 0;
    }

    .menu-items li {
        margin: 30px 0;
    }

    .menu-items li a {
        color: #fff;
        text-decoration: none;
        font-size: 22px;
    }

    /* Close Button Styling */
    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        border: none;
        color: #fff;
        font-size: 50px;
        cursor: pointer;
    }
`;
document.head.appendChild(headerStyle);

// Toggle Fullscreen Menu
window.toggleMenu = function() {
    const menu = document.getElementById('fullscreenMenu');
    menu.classList.toggle('open');
};

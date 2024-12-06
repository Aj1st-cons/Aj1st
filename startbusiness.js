document.addEventListener("DOMContentLoaded", () => {
  // Unique class prefix to avoid conflicts
  const UNIQUE_PREFIX = "business-section";

  // Create and inject CSS styles
  const styles = `
    .${UNIQUE_PREFIX}-container {
        display: flex;
        max-width: 1200px;
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        margin: 20px auto;
        padding: 5px;
    }
    .${UNIQUE_PREFIX}-title, .${UNIQUE_PREFIX}-description {
        padding: 20px;
        background-color: #ffffff;
    }
    .${UNIQUE_PREFIX}-title {
        width: 30%;
        font-size: 24px;
        font-weight: bold;
        color: #000;
        text-align: center;
    }
    .${UNIQUE_PREFIX}-description {
        width: 70%;
        font-size: 16px;
        line-height: 1.6;
        color: #555;
        margin-top: -20px;
        text-align: justify;
    }
    .${UNIQUE_PREFIX}-responsive-image {
        width: 100vw;
        overflow: hidden;
        text-align: center;
    }
    .${UNIQUE_PREFIX}-responsive-image img {
        width: 100%;
        height: auto;
    }
    .${UNIQUE_PREFIX}-mobile-image {
        display: none;
    }
    @media (max-width: 768px) {
        .${UNIQUE_PREFIX}-container {
            flex-direction: column;
        }
        .${UNIQUE_PREFIX}-title, .${UNIQUE_PREFIX}-description {
            width: 100%;
            padding: 20px;
        }
        .${UNIQUE_PREFIX}-title {
            font-size: 24px;
        }
        .${UNIQUE_PREFIX}-description {
            font-size: 16px;
        }
        .${UNIQUE_PREFIX}-desktop-image {
            display: none;
        }
        .${UNIQUE_PREFIX}-mobile-image {
            display: block;
        }
    }
    .${UNIQUE_PREFIX}-description a {
        display: inline-block;
        padding: 10px 20px;
        background-color: #009500;
        color: #fff;
        font-weight: bold;
        border-radius: 20px;
        text-decoration: none;
        font-size: 16px;
        margin-top: 20px;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  // Create the HTML content
  const content = `
    <div class="${UNIQUE_PREFIX}-responsive-image">
      <img src="https://img1.wsimg.com/isteam/ip/6daf5d04-0e97-4331-9056-8876550fe90c/start_business_des.png/:/rs=w:1209,h:419"
           alt="Start Business" class="${UNIQUE_PREFIX}-desktop-image">
      <img src="https://img1.wsimg.com/isteam/ip/6daf5d04-0e97-4331-9056-8876550fe90c/start_business%20.jpg/:/"
           alt="Start Business" class="${UNIQUE_PREFIX}-mobile-image">
    </div>
    <div class="${UNIQUE_PREFIX}-container">
      <div class="${UNIQUE_PREFIX}-title">Start your business in UAE</div>
      <div class="${UNIQUE_PREFIX}-description">
          <p>Your trusted partner for turning business ideas into reality. Our team of experts supports you from planning and launching to providing visas, comfortable accommodations, and convenient local transportation. We connect you with the best business service providers to help you achieve your goals with confidence</p>
          <div style="text-align: center;">
       <a href="/Start%20a%20business.html">View More</a>
          </div>
      </div>
    </div>
  `;

  // Find the business-container and insert the content
  const businessContainer = document.getElementById("business-container");

  if (businessContainer) {
    businessContainer.innerHTML = content;  // Add content inside the div
  } else {
    console.warn("business-container not found. Adding to the end of the body.");
    const fallbackContainer = document.createElement("div");
    fallbackContainer.id = "business-container";
    fallbackContainer.innerHTML = content;
    document.body.appendChild(fallbackContainer); // Fallback: Append to body
  }
});

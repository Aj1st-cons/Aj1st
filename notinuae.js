document.addEventListener("DOMContentLoaded", function () {
  // Create a style element for the CSS
  const style = document.createElement("style");
  style.textContent = `
    /* Your CSS styles for #job-helper-section */
    #job-helper-section {
      background-color: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    /* Left side styling */
    #job-helper-section .text-container {
      width: 100%;
      padding-right: 2px;      
    }

    #job-helper-section .text-container h1 {
      font-size: 36px;
      color: red;
      text-align: center;
      font-weight: bold;
      margin: 0 0 20px;
      white-space: nowrap;
    }

    #job-helper-section .text-container h2 {
      font-size: 20px;
      color: #5c5c5c;
      text-align: center;
      font-weight: bold;
      margin: 0 0 20px;
    }

    #job-helper-section .text-container p {
      font-size: 16px;
      color: #5c5c5c;
      text-align: justify;
      font-weight: bold;
      margin: 0;
    }

    #job-helper-section .text-container .visit-link {
      font-size: 16px;
      font-weight: bold;
      color: #009000;
      text-align: right;
      margin-top: 20px;
    }

    #job-helper-section .text-container .visit-link a {
      color: #009000;
      text-decoration: none;            
    }

    #job-helper-section .image-container {
      width: 100%;
      text-align: right;
    }

    #job-helper-section .image-container img {
      max-width: 100%;
      height: auto;
    }

    @media screen and (min-width: 1024px) {
      #job-helper-section .image-container {
        width: 17.5%;
        padding-right: 120px;
      }

      #job-helper-section .text-container {
        width: 50%;
        padding-left: 130px;
      }      
    }
  `;
  document.head.appendChild(style);

  // Create the new section
  const section = document.createElement("section");
  section.id = "job-helper-section";
  section.innerHTML = `
    <div class="text-container">
      <h1>Not in UAE?</h1>
      <h2>Don't worry!</h2>
      <p>We help you to arrive, stay and look for jobs! Also, we place you in jobs directly.</p>
      <div class="visit-link">                    
    <a href="https://aj1st.pages.dev/Visit%20uae.html" 
       style="display: inline-block; padding: 10px 20px; background-color: #009500; color: #fff; border-radius: 20px;">Visit UAE for a Job &gt;</a>                            
      </div>
    </div>
    <div class="image-container">
      <img src="https://img1.wsimg.com/isteam/ip/6daf5d04-0e97-4331-9056-8876550fe90c/we%20are%20here.png/:/rs=w:806,h:1248" alt="We Are Here">
    </div>
  `;

  // Replace the placeholder <div> with the new section
  const placeholder = document.getElementById("notinuae");
  if (placeholder) {
    placeholder.replaceWith(section);
  }
});

document.addEventListener("DOMContentLoaded", () => {
    // Add CSS dynamically
    const style = document.createElement("style");
    style.textContent = `
        /* Styles for the links container */
        #links-container {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
        }

        #links-container h2 {
            font-weight: bold;
            font-size: 22px;
            margin-bottom: 20px;
        }

        #links-container ul {
            list-style: disc;
            padding-left: 20px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            max-width: 800px;
        }

        #links-container li {
            text-align: left;
        }

        #links-container a {
            color: #5c5c5c;
            font-weight: bold;
            font-size: 16px;
            text-decoration: none;
        }

        @media (min-width: 768px) {
            #links-container ul {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    `;
    document.head.appendChild(style);

    // Find all placeholders for the links container
    const placeholders = document.querySelectorAll('div[section="links-container"]');
    placeholders.forEach((placeholder) => {
        const linksContainer = document.createElement("section");
        linksContainer.id = "links-container";
        linksContainer.innerHTML = `
            <h2>Go to Specific Pages</h2>
            <ul>
                <li><a href="Explore uae.html">Visit UAE's Top Attractions</a></li>
                <li><a href="Start a business.html">Visit UAE to Start a Business</a></li>
                <li><a href="Visit uae.html">Visit UAE to Find a Job</a></li>
                <li><a href="Places to visit.html">Places to Visit in UAE</a></li>
                <li><a href="Post a job.html">Post a Job</a></li>
                <li><a href="Find a job.html">Find a Job</a></li>
                <li><a href="About.html">About Us</a></li>
                <li><a href="http://www.aj1st.com#Contact">Contact Us</a></li>
            </ul>
        `;
        placeholder.replaceWith(linksContainer);
    });
});

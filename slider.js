document.addEventListener('DOMContentLoaded', () => {
    // Create the slider dynamically
    const sliderHTML = `
        <section id="Slider">
            <div class="slider-container">
                <div class="slider-track">
                    <div class="slider-card">
                        <img src="https://img1.wsimg.com/isteam/ip/6daf5d04-0e97-4331-9056-8876550fe90c/Burj%20Khalifa%20.jpg/:/rs=w:806,h:604" alt="image not loaded">
                        <div class="card-title">Burj Khalifa</div>
                        <div class="card-desc">The tallest building in the world, offering panoramic views of Dubai from its observation deck</div>
                    </div>
                    <div class="slider-card">
                        <img src="https://img1.wsimg.com/isteam/ip/6daf5d04-0e97-4331-9056-8876550fe90c/Dubai%20mall.jpg/:/rs=w:1209,h:907" alt="image not loaded">
                        <div class="card-title">Dubai Mall</div>
                        <div class="card-desc">A shopping haven with luxury brands, an indoor aquarium, an ice rink, and more</div>
                    </div>
                    <div class="slider-card">
                        <img src="https://img1.wsimg.com/isteam/ip/6daf5d04-0e97-4331-9056-8876550fe90c/Palm%20Jumeirah.jpg/:/rs=w:1209,h:907" alt="image not loaded">
                        <div class="card-title">Palm Jumeirah</div>
                        <div class="card-desc">Explore this iconic man-made island, home to luxury hotels, the Atlantis resort, and exquisite beaches</div>
                    </div>
                    
<div class="slider-card"> <img src="https://img1.wsimg.com/isteam/ip/6daf5d04-0e97-4331-9056-8876550fe90c/Grand%20Mosque.jpg/:/rs=w:1209,h:907" alt="image not loaded">
<div class="card-title">Sheikh Zayed Grand Mosque</div>
<div class="card-desc">Marvel at the grandeur of this stunning mosque, known for its intricate Islamic architecture</div></div>

<div class="slider-card"><img src="https://img1.wsimg.com/isteam/ip/6daf5d04-0e97-4331-9056-8876550fe90c/Dubai%20Marina.jpg/:/rs=w:806,h:604" alt="image not loaded">
<div class="card-title">Dubai Marina</div>
<div class="card-desc">Enjoy waterfront dining, yacht cruises, and vibrant nightlife in one of Dubai’s trendiest areas</div></div>

<div class="slider-card"><img src="https://img1.wsimg.com/isteam/ip/6daf5d04-0e97-4331-9056-8876550fe90c/Historic%20District.jpeg/:/rs=w:806,h:605" alt="image not loaded">
<div class="card-title">Al Fahidi Historic District</div><div class="card-desc">Step back in time in Dubai’s oldest neighborhood, rich with history and cultural heritage</div></div>

<div class="slider-card"> <img src="https://img1.wsimg.com/isteam/ip/6daf5d04-0e97-4331-9056-8876550fe90c/Desert%20Oasis.jpeg/:/rs=w:1209,h:907" alt="image not loaded">
<div class="card-title">Desert Oasis Adventures</div>
<div class="card-desc">From serene camps to luxury desert resorts, experience the vast beauty of the UAE’s deserts</div></div>

<div class="slider-card"><img src="https://img1.wsimg.com/isteam/ip/6daf5d04-0e97-4331-9056-8876550fe90c/Ferrari%20World.jpg/:/rs=w:806,h:604" alt="image not loaded">
<div class="card-title">Ferrari World</div>
<div class="card-desc">For thrill-seekers, this theme park features the world’s fastest roller coaster and other adrenaline-pumping rides</div>
</div>                    
                                                        
                </div>
            </div>
        </section>
    `;

    // Insert the slider into the placeholder
    const sliderContainer = document.getElementById('slider-container');
    sliderContainer.innerHTML = sliderHTML;

    // JavaScript logic for slider functionality
    const track = document.querySelector('#Slider .slider-track');
    const cards = document.querySelectorAll('#Slider .slider-card');
    const totalCards = cards.length;
    let currentIndex = 0;
    let cardWidth = cards[0].offsetWidth;
    const scrollInterval = 3000; // Auto-scroll interval

    function scrollSlider() {
        currentIndex = (currentIndex + 1) % totalCards;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    setInterval(scrollSlider, scrollInterval);

    // Recalculate card width on resize
    window.addEventListener('resize', () => {
        cardWidth = cards[0].offsetWidth;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    });

    // Hammer.js swipe functionality
    const hammer = new Hammer(track);
    hammer.on('swipeleft swiperight', (event) => {
        if (event.type === 'swipeleft') {
            currentIndex = Math.min(currentIndex + 1, totalCards - 1);
        } else if (event.type === 'swiperight') {
            currentIndex = Math.max(currentIndex - 1, 0);
        }
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    });
});

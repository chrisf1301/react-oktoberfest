document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && menuToggle && navMenu) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    showActivities();
});

const getActivities = async() => {
    const url = "https://chrisf1301.github.io/csce242/projects/part6/oktoberfest-activities.json";
    
    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log("Issue");
    }
};

const showActivities = async() => {
    const activities = await getActivities();
    const activitiesSection = document.getElementById("activitiesGallery");

    activities.forEach((activity) => {
        const div = document.createElement("div");
        activitiesSection.append(div);
        div.classList.add("gallery-item");
        div.setAttribute("data-image", `images/${activity.img_name}`);
        div.setAttribute("data-title", activity.name);
        div.setAttribute("data-description", activity.description);
        div.setAttribute("data-details", `Category: ${activity.category} | Price: ${activity.price_range} | Popularity: ${activity.popularity} | Dietary: ${activity.dietary_options}`);

        const img = document.createElement("img");
        div.append(img);
        img.src = `images/${activity.img_name}`;
        img.alt = activity.name;

        const infoDiv = document.createElement("div");
        div.append(infoDiv);
        infoDiv.classList.add("activity-info");

        const h3 = document.createElement("h3");
        infoDiv.append(h3);
        h3.innerHTML = activity.name;

        const pCategory = document.createElement("p");
        infoDiv.append(pCategory);
        pCategory.innerHTML = activity.category;
        pCategory.classList.add("category");

        const pPrice = document.createElement("p");
        infoDiv.append(pPrice);
        pPrice.innerHTML = activity.price_range;
        pPrice.classList.add("price");

        const pPopularity = document.createElement("p");
        infoDiv.append(pPopularity);
        pPopularity.innerHTML = activity.popularity;
        pPopularity.classList.add("popularity");
    });
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            const altText = this.querySelector('img').alt;
            
            modalImage.src = imageSrc;
            modalImage.alt = altText;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
};


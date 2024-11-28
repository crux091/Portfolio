// Sample project data
const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce platform built with Java Spring Boot and React",
        technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
        image: "https://via.placeholder.com/300x200",
        link: "#"
    },
    {
        title: "Data Analysis Tool",
        description: "Python-based data analysis tool using pandas and matplotlib",
        technologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
        image: "https://via.placeholder.com/300x200",
        link: "#"
    },
    {
        title: "Task Management API",
        description: "RESTful API for task management built with Java and Spring",
        technologies: ["Java", "Spring", "MySQL", "Docker"],
        image: "https://via.placeholder.com/300x200",
        link: "#"
    }
];

// Populate projects
function populateProjects() {
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link">View Project</a>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
});

// Smooth scroll to Projects section from hero button
const scrollBtn = document.getElementById("scrollToProjects");
const projectsSection = document.getElementById("projects");

if (scrollBtn && projectsSection) {
  scrollBtn.addEventListener("click", () => {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });
}

// Simple contact form handler (front-end only)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formStatus.textContent = "Thank you! Your message has been recorded.";
    contactForm.reset();
  });
}

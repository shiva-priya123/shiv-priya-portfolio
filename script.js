const GITHUB_PROFILE = "https://github.com/shiva-priya123";
const LINKEDIN_PROFILE = "https://www.linkedin.com/in/shiv-priya-3a84373b8/";
const CONTACT_EMAIL = "shivapriyapillalamarri08@gmail.com"; // Replace with your preferred professional email.

const grid = document.getElementById("project-grid");
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("github-link").href = GITHUB_PROFILE;
document.querySelector(".header-cta").href = GITHUB_PROFILE;
document.getElementById("linkedin-link").href = LINKEDIN_PROFILE;
document.getElementById("email-link").href = `mailto:${CONTACT_EMAIL}`;

function safeLink(url, label) {
  if (!url) return `<span class="disabled">${label} coming soon</span>`;
  return `<a href="${url}" target="_blank" rel="noreferrer">${label} ↗</a>`;
}
function renderProjects(projects) {
  grid.innerHTML = projects.map((p, index) => `
    <article class="project-card">
      <div class="project-top"><div class="project-icon">${p.icon || "✧"}</div><span class="project-number">${p.number || `PROJECT ${String(index + 1).padStart(2, "0")}`}</span></div>
      <h3>${p.title}</h3><p>${p.description}</p>
      <div class="tech-tags">${(p.technologies || []).map(t => `<span>${t}</span>`).join("")}</div>
      <div class="project-links">${safeLink(p.github, "GitHub repository")}${p.demo ? safeLink(p.demo, "Live demo") : ""}</div>
    </article>`).join("");
}
fetch("projects.json")
  .then(response => { if (!response.ok) throw new Error("Could not load projects.json"); return response.json(); })
  .then(renderProjects)
  .catch(() => { grid.innerHTML = '<p>Project list could not load. If you opened this file directly, run the site using VS Code Live Server or publish it with GitHub Pages.</p>'; });

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

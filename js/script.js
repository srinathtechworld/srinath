// Fade-in sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); } });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Scroll progress bar & Back to Top
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById('progress-bar').style.width = (scrollTop / scrollHeight * 100) + "%";
  document.getElementById('backToTop').style.display = scrollTop > 300 ? "block" : "none";
});
document.getElementById('backToTop').addEventListener('click', () => { window.scrollTo({ top:0, behavior:'smooth' }); });

// Typing effect
const typingElement = document.getElementById('typing');
const words = ["Web Developer", "Problem Solver", "Lifelong Learner"];
let wordIndex = 0, charIndex = 0;
function type(){ 
  if(wordIndex >= words.length) wordIndex=0;
  const currentWord = words[wordIndex];
  typingElement.textContent = currentWord.slice(0,charIndex);
  charIndex++;
  if(charIndex > currentWord.length + 2){ charIndex=0; wordIndex++; }
  setTimeout(type,150);
}
type();

// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.dataset.theme = document.body.dataset.theme === "light" ? "dark" : "light";
});

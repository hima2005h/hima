// Dark/Light Mode
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.innerHTML = document.body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');

document.querySelectorAll('.lightbox-img').forEach(img => {
  img.addEventListener('click', ()=>{
    lightbox.style.display='flex';
    lightboxImg.src = img.src;
  });
});

closeLightbox.addEventListener('click', ()=>{
  lightbox.style.display='none';
});

lightbox.addEventListener('click', e=>{
  if(e.target === lightbox) lightbox.style.display='none';
});
const cards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.2});

cards.forEach(card => {observer.observe(card);});

const faqItems = document.querySelectorAll('.faq-question');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    const openItem = document.querySelector('.faq-question.active');
    if(openItem && openItem !== item){
      openItem.classList.remove('active');
      openItem.nextElementSibling.style.maxHeight = null;
      openItem.nextElementSibling.style.padding = '0 25px';
    }

    item.classList.toggle('active');
    const answer = item.nextElementSibling;
    if(item.classList.contains('active')){
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.padding = "15px 25px";
    } else {
      answer.style.maxHeight = null;
      answer.style.padding = "0 25px";
    }
  });
});


// عناصر
const whatsappBtn = document.querySelector('.whatsapp-float');
const whatsappModal = document.querySelector('.whatsapp-modal');
const closeModal = document.querySelector('.close-modal');

// فتح النافذة
whatsappBtn.addEventListener('click', () => {
  whatsappModal.style.display = 'flex';
});

// إغلاق النافذة
closeModal.addEventListener('click', () => {
  whatsappModal.style.display = 'none';
});

<script>
const scrollElements = document.querySelectorAll(".scroll-anim");

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset);
};

const displayScrollElement = (element) => {
  element.classList.add("active");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if(elementInView(el, 100)){
      displayScrollElement(el);
    }
  })
}

window.addEventListener("scroll", handleScrollAnimation);

// تشغيل الأنميشن عند تحميل الصفحة لأول مرة
window.addEventListener("load", handleScrollAnimation);
</script>

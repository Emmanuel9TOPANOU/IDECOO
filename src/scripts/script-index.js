document.addEventListener('DOMContentLoaded', () => {

    // --- 1. GESTION DU SCROLL (Top-Bar, Logo & Bouton Retour en Haut) ---
    const topBar = document.getElementById('top-bar');
    const logoNav = document.getElementById('logo-nav');
    const mainNav = document.getElementById('main-nav');
    const scrollBtn = document.getElementById('scrollToTopBtn');
    
    window.addEventListener('scroll', () => {
        const threshold = 80; 
        const scrollY = window.scrollY;

        // Logique pour la barre de navigation
        if (scrollY > threshold) {
            if (topBar) {
                topBar.classList.add('-translate-y-full', 'opacity-0');
                topBar.style.maxHeight = '0px';
            }
            if (logoNav) {
                logoNav.classList.remove('opacity-0', '-translate-y-10', 'w-0', 'pointer-events-none');
                logoNav.classList.add('opacity-100', 'translate-y-0', 'w-16', 'mr-6');
            }
            if (mainNav) mainNav.classList.add('shadow-2xl');
        } else {
            if (topBar) {
                topBar.classList.remove('-translate-y-full', 'opacity-0');
                topBar.style.maxHeight = '500px'; 
            }
            if (logoNav) {
                logoNav.classList.add('opacity-0', '-translate-y-10', 'w-0', 'pointer-events-none');
                logoNav.classList.remove('opacity-100', 'translate-y-0', 'w-16', 'mr-6');
            }
            if (mainNav) mainNav.classList.remove('shadow-2xl');
        }

        // Logique pour le bouton Scroll to Top (Seuil de 200px)
        if (scrollBtn) {
            if (scrollY > 200) {
                scrollBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-10');
                scrollBtn.classList.add('opacity-100', 'translate-y-0');
            } else {
                scrollBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-10');
                scrollBtn.classList.remove('opacity-100', 'translate-y-0');
            }
        }
    });

    // Action de clic pour remonter en haut
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- 2. GESTION DE LA NAVIGATION ACTIVE ---
    const path = window.location.pathname;
    const currentPage = path === "/" || path === "" ? "index.html" : path.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        if (linkHref === currentPage) {
            link.classList.add("text-[#2ECC71]", "border-b-4", "border-[#2ECC71]");
            link.classList.remove("text-white");
        } else {
            link.classList.remove("text-[#2ECC71]", "border-b-4", "border-[#2ECC71]");
        }
    });

    // --- 3. MENU MOBILE ---
    const openBtn = document.getElementById('mobile-menu-button');
    const closeBtn = document.getElementById('close-sidebar-button');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    const toggleMenu = () => {
        if (sidebar && overlay) {
            sidebar.classList.toggle('translate-x-full');
            overlay.classList.toggle('hidden');
        }
    };

    if (openBtn) openBtn.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);

    // --- 4. INTERACTION DES PROJETS ---
    window.switchProject = function(element, imgSrc, title, description, collect, goal, percent) {
        const allItems = document.querySelectorAll('.project-item');
        allItems.forEach(item => {
            item.classList.remove('bg-[#2ECC71]', 'active-project');
            item.classList.add('bg-[#F1F6F7]');
            
            const span = item.querySelector('span');
            const footer = item.querySelector('.flex.items-center');
            
            if(span) span.className = "text-xs font-bold uppercase text-[#2ECC71] transition-colors";
            if(footer) footer.className = "flex items-center gap-4 mt-3 text-xs text-gray-500 transition-colors";
        });

        element.classList.remove('bg-[#F1F6F7]');
        element.classList.add('bg-[#2ECC71]', 'active-project');
        
        const activeSpan = element.querySelector('span');
        const activeFooter = element.querySelector('.flex.items-center');
        if(activeSpan) activeSpan.className = "text-xs font-bold uppercase text-white transition-colors";
        if(activeFooter) activeFooter.className = "flex items-center gap-4 mt-3 text-xs text-white transition-colors";

        const mainImg = document.getElementById('main-project-image');
        const mainTitle = document.getElementById('main-project-title');
        const mainDesc = document.getElementById('main-project-desc');
        const statCollect = document.getElementById('stat-collect');
        const statGoal = document.getElementById('stat-goal');
        const statPercent = document.getElementById('stat-percent');
        const progressCircle = document.getElementById('progress-circle');

        if (mainImg) {
            mainImg.style.opacity = '0';
            setTimeout(() => {
                mainImg.src = imgSrc;
                if(mainTitle) mainTitle.innerText = title;
                if(mainDesc) mainDesc.innerText = description;
                if(statCollect) statCollect.innerText = collect;
                if(statGoal) statGoal.innerText = goal;
                if(statPercent) statPercent.innerText = percent + '%';
                
                if(progressCircle) {
                    const offset = 175 - (175 * percent / 100);
                    progressCircle.style.strokeDashoffset = offset;
                }
                mainImg.style.opacity = '1';
            }, 300);
        }
    };

    // --- 5. INITIALISATION AOS ---
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }
});
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SÉLECTEURS ---
    const topBar = document.getElementById('top-bar');
    const logoNav = document.getElementById('logo-nav');
    const mainNav = document.getElementById('main-nav');
    const scrollBtn = document.getElementById('scrollToTopBtn');
    
    // Sélecteurs pour le Menu Burger
    const openBtn = document.getElementById('mobile-menu-button');
    const closeBtn = document.getElementById('close-sidebar-button');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    // --- 2. GESTION DU SCROLL (Header & Bouton Retour Haut) ---
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Effet sur la Barre de Navigation (Seuil 80px)
        if (scrollY > 80) {
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

        // Affichage du bouton Scroll to Top (Seuil 200px)
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

    // Action : Remonter en haut au clic
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- 3. GESTION DU MENU MOBILE (Burger) ---
    const toggleMenu = () => {
        if (sidebar && overlay) {
            // Fait glisser le menu (translate-x-0 pour afficher, translate-x-full pour cacher)
            sidebar.classList.toggle('translate-x-full');
            // Affiche ou cache le voile noir
            overlay.classList.toggle('hidden');
            // Empêche le défilement de la page derrière quand le menu est ouvert
            document.body.classList.toggle('overflow-hidden');
        }
    };

    // On attache l'événement aux 3 éléments (Ouvrir, Fermer, Overlay)
    [openBtn, closeBtn, overlay].forEach(btn => {
        if (btn) btn.addEventListener('click', toggleMenu);
    });

    // --- 4. NAVIGATION ACTIVE (Couleur verte sur le lien courant) ---
    const path = window.location.pathname;
    const currentPage = path === "/" || path === "" ? "index.html" : path.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link, #mobile-sidebar a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("text-[#2ECC71]");
            // Ajoute une bordure basse seulement sur desktop
            if(link.classList.contains('nav-link')) {
                link.classList.add("border-b-4", "border-[#2ECC71]");
                link.classList.remove("text-white");
            }
        }
    });

    // --- 5. INTERACTION DES PROJETS (Switching) ---
    window.switchProject = function(element, imgSrc, title, description, collect, goal, percent) {
        // Reset toutes les cartes
        document.querySelectorAll('.project-item').forEach(item => {
            item.classList.remove('bg-[#2ECC71]', 'active-project');
            item.classList.add('bg-[#F1F6F7]');
            
            const span = item.querySelector('span');
            const h3 = item.querySelector('h3');
            if(span) span.className = "text-xs font-bold uppercase text-[#2ECC71] transition-colors";
            if(h3) h3.classList.remove('text-white');
        });

        // Activer la carte sélectionnée
        element.classList.remove('bg-[#F1F6F7]');
        element.classList.add('bg-[#2ECC71]', 'active-project');
        
        const activeSpan = element.querySelector('span');
        const activeH3 = element.querySelector('h3');
        if(activeSpan) activeSpan.className = "text-xs font-bold uppercase text-white transition-colors";
        if(activeH3) activeH3.classList.add('text-white');

        // Mise à jour de l'affichage principal avec animation d'opacité
        const mainImg = document.getElementById('main-project-image');
        if (mainImg) {
            mainImg.style.opacity = '0';
            setTimeout(() => {
                mainImg.src = imgSrc;
                document.getElementById('main-project-title').innerText = title;
                document.getElementById('main-project-desc').innerText = description;
                document.getElementById('stat-collect').innerText = collect;
                document.getElementById('stat-goal').innerText = goal;
                document.getElementById('stat-percent').innerText = percent + '%';
                
                const progressCircle = document.getElementById('progress-circle');
                if(progressCircle) {
                    const offset = 175 - (175 * percent / 100);
                    progressCircle.style.strokeDashoffset = offset;
                }
                mainImg.style.opacity = '1';
            }, 300);
        }
    };

    // --- 6. INITIALISATION AOS ---
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }
});
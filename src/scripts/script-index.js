document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SÉLECTEURS ---
    const topBar = document.getElementById('top-bar');
    const logoNav = document.getElementById('logo-nav');
    const mainNav = document.getElementById('main-nav');
    const scrollBtn = document.getElementById('scrollToTopBtn');
    
    const openBtn = document.getElementById('mobile-menu-button');
    const closeBtn = document.getElementById('close-sidebar-button');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    // --- 2. GESTION DU SCROLL ---
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
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

    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }

    // --- 3. MENU MOBILE ---
    const toggleMenu = () => {
        if (sidebar && overlay) {
            sidebar.classList.toggle('translate-x-full');
            overlay.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
        }
    };
    [openBtn, closeBtn, overlay].forEach(btn => { if (btn) btn.addEventListener('click', toggleMenu); });

    // --- 4. NAVIGATION ACTIVE (Correction pour actualités.html) ---
    const path = window.location.pathname;
    // On décode l'URL pour gérer les caractères spéciaux (accents)
    const currentPage = decodeURIComponent(path.split("/").pop()) || "index.html";
    const navLinks = document.querySelectorAll(".nav-link, #mobile-sidebar a");

    navLinks.forEach(link => {
        const href = decodeURIComponent(link.getAttribute("href"));

        // Vérification exacte ou par terminaison de chemin
        if (href === currentPage || path.endsWith(href) || (currentPage === "" && href === "index.html")) {
            link.classList.add("text-[#2ECC71]");
            
            if(link.classList.contains('nav-link')) {
                link.classList.add("active-link"); 
                link.classList.remove("text-white");
            }
        } else {
            if(link.classList.contains('nav-link')) {
                link.classList.remove("active-link");
            }
        }
    });

    // --- 5. INTERACTION DES PROJETS ---
    window.switchProject = function(element, imgSrc, title, description, collect, goal, percent) {
        // Reset de tous les items
        document.querySelectorAll('.project-item').forEach(item => {
            item.classList.remove('active', 'bg-[#2ECC71]');
            item.classList.add('bg-[#F1F6F7]');
            
            const h3 = item.querySelector('h3');
            if(h3) {
                h3.classList.remove('text-white');
                h3.classList.add('text-black');
            }
            
            item.querySelectorAll('span').forEach(s => {
                s.classList.remove('text-white');
                s.classList.add('text-[#2ECC71]');
            });
        });

        // Activer l'élément sélectionné
        element.classList.add('active', 'bg-[#2ECC71]');
        element.classList.remove('bg-[#F1F6F7]');

        const activeH3 = element.querySelector('h3');
        if(activeH3) {
            activeH3.classList.remove('text-black');
            activeH3.classList.add('text-white'); 
        }

        element.querySelectorAll('span').forEach(s => {
            s.classList.remove('text-[#2ECC71]');
            s.classList.add('text-white');
        });

        // Mise à jour du contenu avec transition
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

    // --- 6. TÉMOIGNAGES ---
    const testimonials = [
        { text: "Grâce à IDECOO, notre coopérative de femmes a pu obtenir le financement nécessaire...", name: "Aicha B.", role: "Porteuse de projet Parakou", image: "src/assets/images/img12.jpg" },
        { text: "Soutenir IDECOO, c’est avoir l’assurance que chaque contribution est utilisée...", name: "Marc D.", role: "Donateur régulier", image: "src/assets/images/img11.jpg" },
        { text: "IDECOO nous a permis d'améliorer notre activité agricole et nos revenus...", name: "Fatou K.", role: "Entrepreneure Bohicon", image: "src/assets/images/img12.jpg" },
        { text: "L'accompagnement reçu nous a aidé à créer plusieurs emplois locaux...", name: "Jean M.", role: "Responsable coopérative", image: "src/assets/images/img11.jpg" }
    ];

    let currentIndex = 0;
    const leftText = document.getElementById("left-text"), rightText = document.getElementById("right-text");

    function updateCardContent(isNext) {
        if (!leftText || !rightText) return;
        const shiftOut = isNext ? "-30px" : "30px";
        const shiftIn = isNext ? "30px" : "-30px";
        const cards = [leftText.parentElement, rightText.parentElement];

        cards.forEach((card, index) => {
            card.style.transition = "all 0.3s ease-in"; card.style.opacity = "0"; card.style.transform = `translateX(${shiftOut})`;
            setTimeout(() => {
                const data = testimonials[(currentIndex + index) % testimonials.length];
                if (index === 0) {
                    leftText.textContent = `“ ${data.text} ”`; 
                    document.getElementById("left-name").textContent = data.name; 
                    document.getElementById("left-role").textContent = data.role; 
                    document.getElementById("left-img").src = data.image;
                } else {
                    rightText.textContent = `“ ${data.text} ”`; 
                    document.getElementById("right-name").textContent = data.name; 
                    document.getElementById("right-role").textContent = data.role; 
                    document.getElementById("right-img").src = data.image;
                }
                card.style.transition = "none"; card.style.transform = `translateX(${shiftIn})`;
                setTimeout(() => { card.style.transition = "all 0.3s ease-out"; card.style.opacity = "1"; card.style.transform = "translateX(0)"; }, 50);
            }, 300);
        });
    }

    const btnNext = document.getElementById("next-btn"), btnPrev = document.getElementById("prev-btn");
    if (btnNext) btnNext.onclick = () => { currentIndex = (currentIndex + 1) % testimonials.length; updateCardContent(true); };
    if (btnPrev) btnPrev.onclick = () => { currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; updateCardContent(false); };

    // --- 7. INITIALISATION AOS ---
    if (typeof AOS !== 'undefined') { AOS.init({ duration: 800, once: true }); }
});
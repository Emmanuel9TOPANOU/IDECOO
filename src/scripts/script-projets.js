document.addEventListener('DOMContentLoaded', () => {
    const paginationContainer = document.getElementById('pagination-container');
    const allProjects = Array.from(document.querySelectorAll('.project-card'));
    const tabs = document.querySelectorAll('.tab-link');
    
    let filteredProjects = [...allProjects];
    let currentPage = 1;
    // --- MODIFICATION ICI : 9 projets par page ---
    const projectsPerPage = 9; 

    function updateUI() {
        const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
        
        // 1. Gérer la visibilité des projets
        allProjects.forEach(p => p.style.display = 'none');
        
        const start = (currentPage - 1) * projectsPerPage;
        const end = start + projectsPerPage;
        
        // On n'affiche que les projets de l'index 'start' à 'end'
        filteredProjects.slice(start, end).forEach(p => {
            p.style.display = 'block';
        });

        // 2. Gérer la visibilité du conteneur de pagination
        if (totalPages <= 1) {
            paginationContainer.classList.add('hidden');
            // On s'assure que si on filtre et qu'il n'y a qu'une page, on reste à la page 1
            currentPage = 1; 
            return;
        } else {
            paginationContainer.classList.remove('hidden');
            paginationContainer.style.display = 'flex';
        }

        // 3. Mettre à jour les boutons numérotés (.page-link)
        const pageButtons = paginationContainer.querySelectorAll('.page-link');
        pageButtons.forEach(btn => {
            const pageNum = parseInt(btn.getAttribute('data-page'));
            
            // Masquer les boutons de pages qui n'existent pas (ex: bouton page 3 si totalPages = 2)
            btn.style.display = (pageNum > totalPages) ? 'none' : 'flex';

            // Mise à jour visuelle de l'état actif
            if (pageNum === currentPage) {
                btn.className = "page-link w-10 h-10 flex items-center justify-center rounded-full bg-[#2ECC71] text-white font-bold transition-all duration-300 shadow-sm";
            } else {
                btn.className = "page-link w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#2ECC71] font-bold border border-[#2ECC71]/20 hover:border-[#2ECC71] transition-all duration-300";
            }
        });

        // 4. Gérer le bouton "Suivant"
        const nextBtn = document.getElementById('next-page');
        if (nextBtn) {
            // Cache le bouton si on est sur la dernière page
            nextBtn.style.display = (currentPage >= totalPages) ? 'none' : 'flex';
        }
    }

    // Gestion des clics sur la pagination
    paginationContainer.addEventListener('click', (e) => {
        const clickedLink = e.target.closest('a');
        if (!clickedLink) return;
        
        e.preventDefault();

        if (clickedLink.classList.contains('page-link')) {
            currentPage = parseInt(clickedLink.getAttribute('data-page'));
        } else if (clickedLink.id === 'next-page') {
            currentPage++;
        }
        
        updateUI();
        
        // Remonter doucement vers le menu de filtrage après le changement de page
        const filterNav = document.querySelector('#nav-filter');
        if(filterNav) {
            window.scrollTo({ 
                top: filterNav.offsetTop - 50, 
                behavior: 'smooth' 
            });
        }
    });

    // Gestion des clics sur les onglets (Filtres)
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = 1; // Toujours revenir à la page 1 lors d'un filtrage
            
            // Gestion visuelle des onglets (classes Tailwind)
            tabs.forEach(t => {
                t.classList.remove('text-green-600', 'border-b-2', 'border-green-600', '-mb-[2px]', 'z-10');
                t.classList.add('text-gray-500');
            });
            tab.classList.remove('text-gray-500');
            tab.classList.add('text-green-600', 'border-b-2', 'border-green-600', '-mb-[2px]', 'z-10');

            // Filtrage effectif
            const category = tab.getAttribute('data-category');
            filteredProjects = (category === 'tous') 
                ? [...allProjects] 
                : allProjects.filter(p => p.getAttribute('data-category') === category);
            
            updateUI();
        });
    });

    // Lancement au chargement
    updateUI();
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Base de données complète
    const projetsData = {
        'eau-potable': {
            titre: "Eau potable pour les villages ruraux",
            image: "src/assets/images/img30.jpg",
            categorie: "Développement",
            lieu: "Djougou, Bénin",
            date: "Nov 2025",
            budget: "80 000 FCFA",
            description: "Ce projet vise à améliorer les conditions de vie des populations rurales en assurant un approvisionnement continu en eau potable.",
            objectifs: [
                "Garantir un accès durable à l'eau potable.",
                "Réduire les maladies hydriques liées à l'eau non potable.",
                "Promouvoir l'autonomie locale grâce à la formation."
            ],
            beneficiaires: [
                "Habitants des 3 villages (1 500 personnes)",
                "Enfants et écoles locales",
                "Comités villageois de gestion"
            ],
            impact: [
                "Accès continu pour 1 500 personnes",
                "Diminution des maladies",
                "Modèle reproductible dans la région"
            ]
        },
        'sante-zinvie': {
            titre: "Energie solaire pour les centres de santé de Zinvié",
            image: "src/assets/images/img34.jpg",
            categorie: "Santé",
            lieu: "Zinvié, Bénin",
            date: "Déc 2025",
            budget: "180 000 FCFA",
            description: "Installation de systèmes photovoltaïques pour garantir l'éclairage et la conservation des vaccins dans les centres de santé.",
            objectifs: [
                "Assurer une électricité 24h/24 pour les urgences.",
                "Sécuriser la chaîne du froid pour les vaccins.",
                "Réduire les coûts énergétiques des centres."
            ],
            beneficiaires: [
                "Patients et femmes enceintes",
                "Personnel médical de Zinvié",
                "Nouveau-nés (soins néonataux)"
            ],
            impact: [
                "Zéro coupure d'électricité lors des accouchements",
                "Amélioration du taux de vaccination",
                "Conditions de travail décentes pour les soignants"
            ]
        },
        'securite-alimentaire': {
            titre: "Systèmes agricoles durables et sécurité alimentaire",
            image: "src/assets/images/img33.jpg",
            categorie: "Alimentation",
            lieu: "Djougou, Bénin",
            date: "Nov 2025",
            budget: "70 000 FCFA",
            description: "Ce projet, soutenu par les initiatives locales, vise à accroître la sécurité alimentaire dans les communautés béninoises en mettant en place des jardins communautaires et en formant les populations aux techniques de maraîchage durable.",
            objectifs: [
                "Améliorer la disponibilité des produits frais locaux.",
                "Former les agriculteurs aux méthodes de culture biologiques.",
                "Mettre en place un système d'irrigation économe en eau.",
                "Renforcer la résilience alimentaire des foyers ruraux."
            ],
            beneficiaires: [
                "Groupements d'agriculteurs locaux",
                "Familles de la commune de Djougou",
                "Cantines scolaires des environs"
            ],
            impact: [
                "Création de 5 jardins communautaires pilotes",
                "Augmentation de la diversité nutritionnelle des repas",
                "Réduction de la dépendance aux marchés extérieurs"
            ]
        },
        'centrale-solaire-bori': {
            titre: "Mini-centrale solaire au centre de santé de Bori",
            image: "src/assets/images/img35.jpg",
            categorie: "Santé",
            lieu: "Djougou (Bori), Bénin",
            date: "Nov 2025",
            budget: "200 000 FCFA",
            description: "Dans le cadre du Projet de Renforcement de la résilience énergétique, cette mini-centrale solaire photovoltaïque permet d'assurer un éclairage constant et le fonctionnement des équipements médicaux essentiels, même après la tombée de la nuit.",
            objectifs: [
                "Assurer l'autonomie électrique totale du centre de santé.",
                "Sécuriser les interventions médicales et accouchements nocturnes.",
                "Conserver les vaccins et produits thermosensibles sans interruption."
            ],
            beneficiaires: [
                "Population de Bori et villages environnants",
                "Personnel soignant du centre de santé",
                "Femmes enceintes pour des accouchements sécurisés"
            ],
            impact: [
                "Électricité garantie 24h/24",
                "Amélioration drastique de la qualité des soins d'urgence",
                "Réduction des coûts d'exploitation liés au groupe électrogène"
            ]
        },
        'cooperatives-agricoles': {
            titre: "Appui aux coopératives agricoles",
            image: "src/assets/images/img14.jpg",
            categorie: "Développement",
            lieu: "Djougou, Bénin",
            date: "Nov 2025",
            budget: "50 000 FCFA",
            description: "Ce projet vise à professionnaliser les groupements de producteurs locaux en leur fournissant des outils modernes et des formations sur l'agriculture durable. L'objectif est de sécuriser les revenus des petits exploitants tout en préservant les sols.",
            objectifs: [
                "Fournir des kits d'outillage agricole aux coopératives.",
                "Former 50 producteurs aux techniques de compostage.",
                "Faciliter l'accès aux marchés locaux pour la vente des récoltes.",
                "Mettre en place une banque de semences communautaire."
            ],
            beneficiaires: [
                "Petits producteurs de la région de Djougou",
                "Femmes transformatrices de produits agricoles",
                "Économie locale rurale"
            ],
            impact: [
                "Augmentation de 30% des rendements sur les parcelles pilotes",
                "Réduction de l'usage des pesticides chimiques",
                "Amélioration de l'autonomie financière des membres de la coopérative"
            ]
        },
        'appui-scolarisation': {
            titre: "Projet d'appui à la scolarisation",
            image: "src/assets/images/img13.jpg",
            categorie: "Education",
            lieu: "Djougou, Bénin",
            date: "Nov 2025",
            budget: "90 000 FCFA",
            description: "Ce projet s'inscrit dans la continuité des actions de la Fondation VISSIN. Il vise à lever les barrières financières et matérielles qui empêchent les enfants les plus vulnérables d'accéder à une éducation de qualité et de rester sur les bancs de l'école.",
            objectifs: [
                "Distribuer des kits scolaires complets aux orphelins et enfants démunis.",
                "Prendre en charge les frais de scolarité pour le cycle primaire.",
                "Sensibiliser les parents sur l'importance de l'éducation des filles.",
                "Assurer un suivi pédagogique régulier des bénéficiaires."
            ],
            beneficiaires: [
                "Enfants issus de familles en situation de précarité",
                "Orphelins de la commune de Djougou",
                "Écoles primaires publiques locales"
            ],
            impact: [
                "Réduction significative du taux d'abandon scolaire",
                "Augmentation du taux de réussite aux examens de fin d'année",
                "Renforcement de l'inclusion sociale par l'éducation"
            ]
        },
        'paaseb-nutrition': {
            titre: "PAASEB – Alimentation scolaire & nutrition",
            image: "src/assets/images/img32.jpg",
            categorie: "Alimentation",
            lieu: "Djougou, Bénin",
            date: "Nov 2025",
            budget: "85 000 FCFA",
            description: "Le Projet d'Appui à l'Alimentation Scolaire et au Bien-être (PAASEB) est une initiative cruciale pour garantir que chaque enfant puisse apprendre dans de bonnes conditions physiques. En fournissant des repas équilibrés, le projet lutte contre la malnutrition et l'absentéisme scolaire.",
            objectifs: [
                "Approvisionner les cantines scolaires en produits locaux nutritifs.",
                "Former les cuisiniers communautaires aux normes d'hygiène.",
                "Sensibiliser les écoliers aux bonnes pratiques nutritionnelles.",
                "Soutenir les jardins potagers scolaires pédagogiques."
            ],
            beneficiaires: [
                "Écoliers des zones rurales de Djougou",
                "Associations de parents d'élèves",
                "Petits producteurs locaux (fournisseurs de denrées)"
            ],
            impact: [
                "100% de l'objectif de financement atteint",
                "Amélioration de la concentration des élèves en classe",
                "Soutien direct à l'économie locale via l'achat de vivres"
            ]
        },
        'cascade-cantines': {
            titre: "CASCADE – Renforcement cantines scolaires",
            image: "src/assets/images/img29.jpg",
            categorie: "Education",
            lieu: "Djougou, Bénin",
            date: "Nov 2025",
            budget: "90 000 FCFA",
            description: "Le projet CASCADE vise à consolider les acquis du programme national de cantines scolaires. Il met l'accent sur la formation du personnel de cuisine, l'amélioration des infrastructures de stockage et l'intégration de produits frais issus de l'agriculture locale.",
            objectifs: [
                "Améliorer les standards de préparation des repas scolaires.",
                "Former les comités de gestion sur la durabilité du programme.",
                "Soutenir l'approvisionnement en produits locaux à haute valeur nutritionnelle.",
                "Moderniser les équipements de cuisine dans les écoles rurales."
            ],
            beneficiaires: [
                "Écoliers bénéficiant du programme national de cantines",
                "Comités de gestion scolaire (COGES)",
                "Producteurs locaux partenaires du programme"
            ],
            impact: [
                "Surplus de financement de 25% réalloué à l'achat d'équipements",
                "Standardisation de la qualité nutritionnelle des repas",
                "Renforcement du lien entre l'école et les agriculteurs locaux"
            ]
        },
        'hand-in-hand': {
            titre: "Hand-in-Hand – Transformation alimentaires",
            image: "src/assets/images/img31.jpg",
            categorie: "Développement",
            lieu: "Djougou, Bénin",
            date: "Nov 2025",
            budget: "200 000 FCFA",
            description: "L'initiative Hand-in-Hand (Main dans la main) vise à transformer les systèmes alimentaires pour les rendre plus efficaces, inclusifs et résilients. Ce projet soutient l'innovation agricole et facilite l'investissement dans les chaînes de valeur prioritaires pour éradiquer la pauvreté.",
            objectifs: [
                "Cartographier les opportunités agricoles de la région.",
                "Renforcer les capacités de transformation des produits locaux.",
                "Favoriser les partenariats entre le secteur public et privé.",
                "Réduire les pertes post-récolte pour les petits producteurs."
            ],
            beneficiaires: [
                "Unions de producteurs et transformateurs",
                "Entreprises agro-industrielles locales",
                "Communautés rurales du nord Bénin"
            ],
            impact: [
                "Objectif dépassé de 50%, permettant une extension géographique",
                "Création d'emplois locaux dans la transformation",
                "Modèle de développement durable réplicable au niveau national"
            ]
        },
        'hand-in-hand': {
            titre: "Hand-in-Hand – Transformation alimentaires",
            image: "src/assets/images/img31.jpg",
            categorie: "Développement",
            lieu: "Djougou, Bénin",
            date: "Nov 2025",
            budget: "200 000 FCFA",
            description: "Le projet Hand-in-Hand est une initiative stratégique visant à transformer les chaînes de valeur agroalimentaires à Djougou. En facilitant l'accès aux technologies de transformation, ce projet permet de réduire considérablement les pertes post-récolte et d'augmenter la valeur ajoutée des produits locaux.",
            objectifs: [
                "Moderniser les unités de transformation artisanales.",
                "Former les acteurs locaux aux normes d'hygiène et de qualité.",
                "Développer des emballages durables pour les produits transformés.",
                "Connecter les producteurs aux marchés régionaux et nationaux."
            ],
            beneficiaires: [
                "Groupements de femmes transformatrices de soja et karité",
                "Petits exploitants agricoles de la zone de Djougou",
                "Consommateurs locaux bénéficiant de produits de meilleure qualité"
            ],
            impact: [
                "Financement réussi à 150% permettant l'achat de matériel supplémentaire",
                "Amélioration directe des revenus pour plus de 80 familles",
                "Réduction du gaspillage alimentaire de 25% dans les coopératives ciblées"
            ]
        },
    };

    // 2. Récupération de l'ID dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // 3. Vérification de l'existence du projet
    if (projectId && projetsData[projectId]) {
        const p = projetsData[projectId];

        // --- FONCTION UTILITAIRE POUR INJECTER DU TEXTE ---
        const setText = (id, text) => {
            const el = document.getElementById(id);
            if (el) el.textContent = text;
        };

        // --- INJECTION DES INFOS SIMPLES ---
        setText('main-project-title', p.titre);
        setText('breadcrumb-project-title', p.titre);
        setText('project-description', p.description);
        setText('project-lieu', p.lieu);
        setText('project-date', p.date);
        setText('project-category', p.categorie);
        setText('project-budget-value', p.budget);

        // Gestion des images (précaution sur l'existence des éléments)
        const mainImg = document.getElementById('project-main-image');
        const bgImg = document.getElementById('project-bg-image');
        if (mainImg) mainImg.src = p.image;
        if (bgImg) bgImg.src = p.image;

        // --- FONCTION POUR GÉNÉRER LES LISTES ---
        const fillList = (elementId, items, isNumbered = false) => {
            const listUl = document.getElementById(elementId);
            if (!listUl) return;

            listUl.innerHTML = ''; // Nettoyage du contenu statique

            items.forEach((item, index) => {
                const li = document.createElement('li');
                li.className = "flex items-start mb-2"; // Ajout d'espacement pour le design

                if (isNumbered) {
                    // Structure numérotée (ex: 1. Objectif)
                    li.innerHTML = `<span class="font-bold text-blue-600 mr-2">${index + 1}.</span> <span>${item}</span>`;
                } else {
                    // Structure avec puce (ex: • Bénéficiaire)
                    li.innerHTML = `<span class="text-blue-600 mr-2">•</span> <span>${item}</span>`;
                }
                listUl.appendChild(li);
            });
        };

        // Remplissage des listes
        fillList('project-objectifs', p.objectifs, true);
        fillList('project-beneficiaires', p.beneficiaires);
        fillList('project-impact', p.impact);

        console.log(`Projet "${p.titre}" chargé avec succès.`);
    } else {
        // Optionnel : Gestion si le projet n'existe pas
        console.error("Projet introuvable.");
        const container = document.querySelector('main');
        if (container) {
            container.innerHTML = `
                <div class="text-center py-20">
                    <h1 class="text-2xl font-bold text-gray-800">Projet non trouvé</h1>
                    <p class="mt-4">Désolé, le projet que vous recherchez n'existe pas.</p>
                    <a href="Projets.html" class="mt-6 inline-block text-blue-600 underline">Retourner aux projets</a>
                </div>`;
        }
    }

    // ... (votre code existant au début)

    const keys = Object.keys(projetsData); // Récupère la liste des IDs ('eau-potable', 'sante-zinvie', etc.)
    const currentIndex = keys.indexOf(projectId);

    if (currentIndex !== -1) {
        const prevBtn = document.getElementById('btn-prev');
        const nextBtn = document.getElementById('btn-next');

        // --- Logique Projet Précédent ---
        if (currentIndex > 0) {
            prevBtn.href = `Projet-detail.html?id=${keys[currentIndex - 1]}`;
        } else {
            // Optionnel : masquer le bouton s'il n'y a pas de projet précédent
            prevBtn.style.visibility = 'hidden';
        }

        // --- Logique Projet Suivant ---
        if (currentIndex < keys.length - 1) {
            nextBtn.href = `Projet-detail.html?id=${keys[currentIndex + 1]}`;
        } else {
            // Optionnel : masquer le bouton s'il n'y a pas de projet suivant
            nextBtn.style.visibility = 'hidden';
        }
    }
});
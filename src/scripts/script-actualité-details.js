/**
 * Script de gestion dynamique des actualités
 */

const articlesData = {
    "alphabe-parakou": {
        titre: "Lancement du programme d'alphabétisation à Parakou",
        categorie: "Développement",
        image: "src/assets/images/img19.jpg",
        introduction: "C'est avec une grande fierté qu'IDECOO-BÉNIN a lancé un nouveau programme d'alphabétisation numérique dans la région de Parakou. Cette initiative vise à réduire la fracture numérique qui touche encore de nombreuses communautés rurales, en facilitant l'accès aux outils et aux compétences numériques de base.",
        contenuHtml: `
            <div class="space-y-6">
                <section>
                    <h2 class="text-xl md:text-2xl font-bold text-black mb-4">Un investissement pour l'avenir</h2>
                    <p class="text-gray-600 leading-relaxed">
                        Grâce au soutien de partenaires internationaux, cinq centres communautaires ont été équipés en matériel informatique moderne, comprenant des ordinateurs, des tablettes et une connexion internet haut débit par satellite. Ces infrastructures permettront à plus de 500 jeunes d'accéder à des ressources éducatives et à des opportunités d'apprentissage à l'échelle mondiale.
                    </p>
                    <p class="text-gray-600 leading-relaxed mt-4">
                        En donnant accès à ces outils numériques, IDECOO-BÉNIN contribue à renforcer les compétences des bénéficiaires et à favoriser leur insertion dans les domaines de l'emploi, de l'entrepreneuriat et de l'innovation.
                    </p>
                </section>

                <section>
                    <h2 class="text-xl md:text-2xl font-bold text-black mb-4">Formation et accompagnement</h2>
                    <p class="text-gray-600 leading-relaxed">
                        Consciente que la technologie doit être accompagnée par un encadrement humain de qualité, l'organisation a recruté et formé dix formateurs locaux. Ils assureront des sessions quotidiennes portant sur l'initiation à l'informatique, la bureautique, la navigation internet sécurisée et une introduction au codage pour les apprenants les plus motivés.
                    </p>
                    <p class="text-gray-600 leading-relaxed mt-4 font-semibold text-[#27C278]">
                        Prévu sur une durée de douze mois, ce programme ambitionne de certifier 1 000 apprenants d'ici la fin de l'année 2026. Une initiative appelée à devenir un modèle reproductible dans d'autres régions du Bénin.
                    </p>
                </section>
            </div>
        `
    },
    "vaccination-succes": {
        titre: "Succès à la campagne de vaccination",
        categorie: "Santé",
        image: "src/assets/images/img17.jpg",
        introduction: "Plus de 2000 enfants ont reçu leurs vaccins vitaux grâce à la mobilisation communautaire le mois dernier.",
        contenuHtml: `
            <h2 class="text-xl font-bold text-black mb-4">Une mobilisation sans précédent</h2>
            <p class="text-gray-600 leading-relaxed">La campagne a dépassé ses objectifs initiaux avec un taux de couverture de 95%.</p>
        `
    },
    "partenariat-unicef": {
        titre: "Partenariat stratégique avec UNICEF",
        categorie: "Institutionnel",
        image: "src/assets/images/img18.jpg",
        introduction: "IDECOO-BÉNIN signe un accord cadre pour renforcer la protection de l’enfant dans les zones rurales.",
        contenuHtml: `
            <p class="text-gray-600 leading-relaxed">Ce partenariat marque une étape décisive pour les droits de l'enfant.</p>
        `
    },
    "solutions-solaires": {
        titre: "Solutions solaires en milieu rural",
        categorie: "Santé", // 
        image: "src/assets/images/img20.jpg",
        introduction: "Des solutions durables pour soutenir l’éducation, la santé et l’activité économique dans plusieurs régions du Bénin.",
        contenuHtml: `
            <div class="space-y-6">
                <section>
                    <h2 class="text-xl md:text-2xl font-bold text-black mb-4">L'énergie au service du développement</h2>
                    <p class="text-gray-600 leading-relaxed">
                        L'accès à l'électricité est un levier fondamental pour l'amélioration des conditions de vie. IDECOO-BÉNIN déploie des systèmes photovoltaïques pour garantir une autonomie énergétique aux centres de santé et aux écoles rurales.
                    </p>
                </section>
                <section>
                    <h2 class="text-xl md:text-2xl font-bold text-black mb-4">Impact sur les communautés</h2>
                    <p class="text-gray-600 leading-relaxed">
                        Ces installations permettent non seulement d'assurer la chaîne de froid pour les vaccins, mais aussi d'offrir un éclairage adéquat pour les études nocturnes des jeunes apprenants.
                    </p>
                </section>
            </div>
        `
    },
    "soins-ruraux": {
        titre: "Renforcement de l’accès aux soins dans les zones rurales",
        categorie: "Santé & Bien-être",
        image: "src/assets/images/img38.jpg",
        introduction: "IDECOO-BÉNIN accompagne un projet communautaire visant à améliorer l’accès aux soins de base dans plusieurs localités rurales, à travers des actions de sensibilisation et de soutien logistique.",
        contenuHtml: `
        <div class="space-y-6">
            <section>
                <h2 class="text-xl md:text-2xl font-bold text-black mb-4">Une priorité pour les communautés</h2>
                <p class="text-gray-600 leading-relaxed">
                    L'accès aux soins de santé primaire est un droit fondamental. Dans les zones rurales du Bénin, les distances et le manque de ressources freinent souvent l'accès aux traitements essentiels. IDECOO-BÉNIN travaille main dans la main avec les autorités locales pour pallier ces difficultés.
                </p>
            </section>

            <section>
                <h2 class="text-xl md:text-2xl font-bold text-black mb-4">Actions de terrain</h2>
                <p class="text-gray-600 leading-relaxed">
                    Le projet inclut la réhabilitation de petits dispensaires, la fourniture de médicaments essentiels et l'organisation de campagnes de dépistage gratuites pour les maladies chroniques et infectieuses.
                </p>
                <p class="text-gray-600 leading-relaxed mt-4">
                    Grâce à la formation de 15 agents de santé communautaire, le suivi des patients est désormais assuré de manière continue, même dans les villages les plus reculés.
                </p>
            </section>
        </div>
    `
    },
    "formation-jeunes": {
        titre: "Soutien à la formation professionnelle des jeunes",
        categorie: "Éducation & Formation",
        image: "src/assets/images/img39.jpg",
        introduction: "Face aux défis du marché de l'emploi, IDECOO-BÉNIN renforce son engagement pour l'autonomisation des jeunes à travers des cycles de formation professionnelle spécialisés.",
        contenuHtml: `
        <div class="space-y-6">
            <section>
                <h2 class="text-xl md:text-2xl font-bold text-black mb-4">Développer des compétences pratiques</h2>
                <p class="text-gray-600 leading-relaxed">
                    Le programme se concentre sur des métiers porteurs tels que l'agroécologie, la maintenance informatique et les énergies renouvelables. L'objectif est de fournir aux jeunes non seulement un savoir théorique, mais surtout une expertise technique directement exploitable.
                </p>
            </section>

            <section>
                <h2 class="text-xl md:text-2xl font-bold text-black mb-4">Accompagnement et insertion</h2>
                <p class="text-gray-600 leading-relaxed">
                    Au-delà de la formation, IDECOO-BÉNIN offre un coaching personnalisé pour la rédaction de plans d'affaires et facilite l'accès à des micro-crédits pour les diplômés souhaitant lancer leur propre entreprise.
                </p>
                <p class="text-gray-600 leading-relaxed mt-4">
                    À ce jour, plus de 80 jeunes ont déjà intégré le tissu économique local grâce à ce dispositif de mentorat.
                </p>
            </section>
        </div>
    `
    },
    "appui-communautaire": {
        titre: "Appui aux initiatives locales de développement communautaire",
        categorie: "Développement communautaire",
        image: "src/assets/images/img37.jpg",
        introduction: "L'approche d'IDECOO-BÉNIN repose sur la conviction que le véritable changement vient de l'intérieur. C'est pourquoi nous soutenons activement les initiatives nées au sein même des communautés.",
        contenuHtml: `
        <div class="space-y-6">
            <section>
                <h2 class="text-xl md:text-2xl font-bold text-black mb-4">L'autonomisation par l'action</h2>
                <p class="text-gray-600 leading-relaxed">
                    Ce programme d'appui permet de financer et d'accompagner techniquement des micro-projets tels que la gestion coopérative des ressources en eau, la création de groupements d'épargne et de crédit, ainsi que l'aménagement d'espaces publics.
                </p>
            </section>

            <section>
                <h2 class="text-xl md:text-2xl font-bold text-black mb-4">Résultats et impact social</h2>
                <p class="text-gray-600 leading-relaxed">
                    En renforçant les capacités des comités de développement villageois, nous garantissons que chaque projet répond à un besoin réel exprimé par les habitants eux-mêmes. Cela renforce la cohésion sociale et la solidarité intergénérationnelle.
                </p>
                <p class="text-gray-600 leading-relaxed mt-4">
                    Depuis le début de l'année, plus de 12 nouvelles initiatives locales ont vu le jour, touchant directement des milliers de foyers.
                </p>
            </section>
        </div>
    `
    },
    "protection-environnement": {
        titre: "Actions en faveur de la protection de l’environnement local",
        categorie: "Environnement & développement durable",
        image: "src/assets/images/img36.jpg",
        introduction: "La préservation de notre environnement est le socle de tout développement durable. IDECOO-BÉNIN mobilise les communautés pour adopter des pratiques respectueuses de la nature.",
        contenuHtml: `
        <div class="space-y-6">
            <section>
                <h2 class="text-xl md:text-2xl font-bold text-black mb-4">Reboisement et restauration</h2>
                <p class="text-gray-600 leading-relaxed">
                    Grâce à une campagne de reboisement massif, plus de 5 000 plants autochtones ont été mis en terre dans les zones dégradées. Ce projet vise non seulement à restaurer la biodiversité, mais aussi à lutter contre l'érosion des sols qui menace les terres agricoles locales.
                </p>
            </section>

            <section>
                <h2 class="text-xl md:text-2xl font-bold text-black mb-4">Gestion des déchets et sensibilisation</h2>
                <p class="text-gray-600 leading-relaxed">
                    Le programme inclut la mise en place de systèmes de tri sélectif dans les villages pilotes et des ateliers de sensibilisation sur les dangers du plastique. Nous accompagnons également les femmes dans la transformation de déchets organiques en compost pour une agriculture saine.
                </p>
                <p class="text-gray-600 leading-relaxed mt-4">
                    Ces actions concrètes permettent d'éduquer les jeunes générations à la valeur de leur patrimoine naturel.
                </p>
            </section>
        </div>
    `
    },


};
function renderArticleDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const article = articlesData[id];

    if (article) {
        // 1. Fil d'Ariane
        const breadcrumb = document.getElementById('breadcrumb-project-title');
        if (breadcrumb) breadcrumb.textContent = article.titre;

        // 2. Image principale
        const mainImg = document.getElementById('main-article-image');
        if (mainImg) {
            mainImg.src = article.image;
            mainImg.alt = article.titre;
        }

        // 3. Catégorie
        const catElem = document.getElementById('article-category');
        if (catElem) catElem.textContent = article.categorie;

        // 4. Titre principal
        const titleElem = document.getElementById('main-article-title');
        if (titleElem) titleElem.textContent = article.titre;

        // 5. Zone de contenu
        const contentArea = document.getElementById('article-content-area');
        if (contentArea) {
            contentArea.innerHTML = `
                <div class="article-wrapper">
                    <p class="mb-8 text-lg font-medium text-gray-700 leading-relaxed  pl-4 italic">
                        ${article.introduction}
                    </p>
                    <div class="article-body">
                        ${article.contenuHtml}
                    </div>
                </div>
            `;
        }

        // 6. LOGIQUE DE NAVIGATION (Précédent / Suivant)
        const keys = Object.keys(articlesData); // Récupère tous les identifiants
        const currentIndex = keys.indexOf(id);

        if (currentIndex !== -1) {
            // Calcul des index (avec boucle infinie)
            const prevIndex = (currentIndex - 1 + keys.length) % keys.length;
            const nextIndex = (currentIndex + 1) % keys.length;

            const prevId = keys[prevIndex];
            const nextId = keys[nextIndex];

            // Mise à jour des liens HTML
            // On cible les liens par leur icône ou leur texte
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                if (link.innerHTML.includes('ph-caret-left') || link.innerText.includes('Précédent')) {
                    link.href = `detail-actualité.html?id=${prevId}`;
                }
                if (link.innerHTML.includes('ph-caret-right') || link.innerText.includes('Suivant')) {
                    link.href = `detail-actualité.html?id=${nextId}`;
                }
            });
        }

        // 7. Titre de l'onglet
        document.title = `${article.titre} | IDECOO-BÉNIN`;

    } else {
        console.error("Article non trouvé. ID fourni :", id);
    }
}

document.addEventListener('DOMContentLoaded', renderArticleDetail);
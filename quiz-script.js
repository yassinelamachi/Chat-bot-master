const database = {
    questions: [
        {
            id: 1,
            question: "Quel est votre domaine d'intérêt principal ?",
            options: [
                { text: "Mathématiques et Physique", scores: { "Classes Préparatoires": 3, "Génie Biomédical": 2, "Génie Digital et Intelligence Artificielle en Santé": 1, "Ingénierie Biotechnologie": 1 } },
                { text: "Informatique et Programmation", scores: { "Génie Digital et Intelligence Artificielle en Santé": 3, "Informatique Décisionnelle et e-Santé": 2, "Génie Biomédical": 1 } },
                { text: "Biologie et Sciences Médicales", scores: { "Génie Biomédical": 3, "Ingénierie Biotechnologie": 2, "Techniques de Laboratoires de Biologie Médicale": 2 } },
                { text: "Gestion et Administration", scores: { "Management et Marketing Digital du Sport et de la Santé": 3, "Sciences de Gestion en Milieu Hospitalier": 2, "Informatique Décisionnelle et e-Santé": 1 } }
            ]
        },
        {
            id: 2,
            question: "Quel est votre niveau d'études actuel ?",
            options: [
                { text: "Baccalauréat scientifique", scores: { "Classes Préparatoires": 3, "Licence en Maintenance Médicale": 2, "Licence en Génie Industriel et Logistique Hospitalière": 2 } },
                { text: "Bac+2 (CPGE, DUT, BTS, etc.)", scores: { "Cycle Ingénieur": 3, "Licence en Techniques de Santé": 1 } },
                { text: "Licence en sciences", scores: { "Master en Dispositifs Médicaux et Affaires Réglementaires": 3, "Master en Maintenance et Génie Biomédical": 2 } },
                { text: "Master ou équivalent", scores: { "Master en Entrepreneuriat et Management Technologique": 3, "Cycle Ingénieur": 1 } }
            ]
        },
        {
            id: 3,
            question: "Quel type de travail préférez-vous ?",
            options: [
                { text: "Travail technique et pratique", scores: { "Génie Biomédical": 3, "Licence en Maintenance Médicale": 2, "Ingénierie Biotechnologie": 2 } },
                { text: "Analyse de données et programmation", scores: { "Génie Digital et Intelligence Artificielle en Santé": 3, "Informatique Décisionnelle et e-Santé": 2, "Génie Biomédical": 1 } },
                { text: "Gestion et administration", scores: { "Management et Marketing Digital du Sport et de la Santé": 3, "Sciences de Gestion en Milieu Hospitalier": 2, "Licence en Génie Industriel et Logistique Hospitalière": 1 } },
                { text: "Recherche et développement", scores: { "Ingénierie Biotechnologie": 3, "Génie Biomédical": 2, "Master en Dispositifs Médicaux et Affaires Réglementaires": 2 } }
            ]
        },
        {
            id: 4,
            question: "Quel est votre objectif professionnel ?",
            options: [
                { text: "Travailler dans un hôpital ou un laboratoire médical", scores: { "Génie Biomédical": 3, "Licence en Maintenance Médicale": 2, "Techniques de Laboratoires de Biologie Médicale": 2 } },
                { text: "Devenir ingénieur en biomédical ou en informatique de santé", scores: { "Génie Biomédical": 3, "Génie Digital et Intelligence Artificielle en Santé": 2, "Informatique Décisionnelle et e-Santé": 2 } },
                { text: "Gérer un établissement de santé", scores: { "Management et Marketing Digital du Sport et de la Santé": 3, "Sciences de Gestion en Milieu Hospitalier": 2, "Licence en Génie Industriel et Logistique Hospitalière": 1 } },
                { text: "Faire de la recherche en santé ou en technologie médicale", scores: { "Ingénierie Biotechnologie": 3, "Génie Biomédical": 2, "Master en Dispositifs Médicaux et Affaires Réglementaires": 2 } }
            ]
        },
        {
            id: 5,
            question: "Quel est votre niveau de compétence en programmation ?",
            options: [
                { text: "Débutant", scores: { "Génie Biomédical": 1, "Informatique Décisionnelle et e-Santé": 1 } },
                { text: "Intermédiaire", scores: { "Informatique Décisionnelle et e-Santé": 2, "Génie Digital et Intelligence Artificielle en Santé": 2 } },
                { text: "Avancé", scores: { "Génie Digital et Intelligence Artificielle en Santé": 3, "Informatique Décisionnelle et e-Santé": 3 } },
                { text: "Aucune compétence", scores: { "Génie Biomédical": 1, "Techniques de Laboratoires de Biologie Médicale": 1 } }
            ]
        },
        {
            id: 6,
            question: "Préférez-vous un programme avec des stages en entreprise ?",
            options: [
                { text: "Oui, je veux des stages pratiques", scores: { "Génie Biomédical": 2, "Informatique Décisionnelle et e-Santé": 2, "Licence en Maintenance Médicale": 2 } },
                { text: "Non, je préfère un programme plus théorique", scores: { "Classes Préparatoires": 3, "Master en Management": 2 } }
            ]
        },
        {
            id: 7,
            question: "Quel est votre intérêt pour les technologies médicales ?",
            options: [
                { text: "Très intéressé(e)", scores: { "Génie Biomédical": 3, "Génie Digital et Intelligence Artificielle en Santé": 2 } },
                { text: "Modérément intéressé(e)", scores: { "Génie Biomédical": 2, "Informatique Décisionnelle et e-Santé": 1 } },
                { text: "Peu intéressé(e)", scores: { "Techniques de Laboratoires de Biologie Médicale": 1, "Sciences de Gestion en Milieu Hospitalier": 1 } },
                { text: "Pas intéressé(e)", scores: { "Management et Marketing Digital du Sport et de la Santé": 2, "Sciences de Gestion en Milieu Hospitalier": 1 } }
            ]
        },
        {
            id: 8,
            question: "Quel est votre objectif salarial après l'obtention de votre diplôme ?",
            options: [
                { text: "Moins de 10 000 DHS/mois", scores: { "Techniques de Laboratoires de Biologie Médicale": 1, "Sciences de Gestion en Milieu Hospitalier": 1 } },
                { text: "Entre 10 000 et 20 000 DHS/mois", scores: { "Génie Biomédical": 2, "Informatique Décisionnelle et e-Santé": 2 } },
                { text: "Plus de 20 000 DHS/mois", scores: { "Génie Biomédical": 3, "Génie Digital et Intelligence Artificielle en Santé": 3 } },
                { text: "Je ne sais pas encore", scores: { "Classes Préparatoires": 1, "Master en Management": 1 } }
            ]
        },
        {
            id: 9,
            question: "Souhaitez-vous poursuivre des études à l'étranger après votre formation ?",
            options: [
                { text: "Oui, absolument", scores: { "Génie Biomédical": 2, "Génie Digital et Intelligence Artificielle en Santé": 2 } },
                { text: "Peut-être", scores: { "Génie Biomédical": 1, "Informatique Décisionnelle et e-Santé": 1 } },
                { text: "Non, je préfère rester au Maroc", scores: { "Techniques de Laboratoires de Biologie Médicale": 1, "Sciences de Gestion en Milieu Hospitalier": 1 } }
            ]
        },
        {
            id: 10,
            question: "Quel est votre niveau de compétence en gestion de projet ?",
            options: [
                { text: "Débutant", scores: { "Sciences de Gestion en Milieu Hospitalier": 1, "Management et Marketing Digital du Sport et de la Santé": 1 } },
                { text: "Intermédiaire", scores: { "Sciences de Gestion en Milieu Hospitalier": 2, "Génie Biomédical": 1 } },
                { text: "Avancé", scores: { "Sciences de Gestion en Milieu Hospitalier": 3, "Génie Biomédical": 1 } },
                { text: "Aucune compétence", scores: { "Techniques de Laboratoires de Biologie Médicale": 1, "Informatique Décisionnelle et e-Santé": 1 } }
            ]
        }
    ]
};

let currentQuestionIndex = 0;
let userScores = {
    "Classes Préparatoires": 0,
    "Génie Biomédical": 0,
    "Génie Digital et Intelligence Artificielle en Santé": 0,
    "Ingénierie Biotechnologie": 0,
    "Informatique Décisionnelle et e-Santé": 0,
    "Licence en Maintenance Médicale": 0,
    "Licence en Génie Industriel et Logistique Hospitalière": 0,
    "Licence en Techniques de Laboratoires de Biologie Médicale": 0,
    "Licence en Sciences de Gestion en Milieu Hospitalier": 0,
    "Licence en Management et Marketing Digital du Sport et de la Santé": 0,
    "Master en Dispositifs Médicaux et Affaires Réglementaires": 0,
    "Master en Maintenance et Génie Biomédical": 0,
    "Master en Entrepreneuriat et Management Technologique": 0
};

function showQuestion() {
    const question = database.questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.addEventListener('click', () => selectOption(option.scores));
        optionsContainer.appendChild(button);
    });
}

function selectOption(scores) {
    Object.keys(scores).forEach(program => {
        userScores[program] += scores[program];
    });
    currentQuestionIndex++;
    if (currentQuestionIndex < database.questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    // Trier les programmes par score décroissant
    const sortedPrograms = Object.keys(userScores).sort((a, b) => userScores[b] - userScores[a]);

    // Sélectionner les 3 meilleures spécialités
    const top3Programs = sortedPrograms.slice(0, 3);

    // Afficher les résultats dans des cadres stylisés
    const resultContainer = document.getElementById('result-text');
    resultContainer.innerHTML = ''; // Effacer les résultats précédents

    // Ajouter le message d'explication
    const explanation = document.createElement('div');
    explanation.classList.add('explanation-message');
    explanation.innerHTML = `
       <div class="custom-message-box">
            <h3>Vos résultats personnalisés</h3>
            <p>Nous vous présentons les parcours qui correspondent le mieux à vos réponses, mais gardez à l'esprit :</p>
            <ul>
                <li>Ces suggestions sont basées sur vos choix actuels</li>
                <li>Rien ne vous empêche d'explorer d'autres domaines</li>
                <li>Parfois, les changements de parcours mènent à de belles surprises</li>
                <li>L'important est de suivre ce qui vous passionne vraiment</li>
            </ul>
            <p class="highlight">Votre avenir académique reste ouvert à toutes les possibilités !</p>
        </div>
    `;
    resultContainer.appendChild(explanation);

    top3Programs.forEach((program, index) => {
        const resultCard = document.createElement('div');
        resultCard.classList.add('result-card');

        // Ajouter le numéro du résultat
        const rank = document.createElement('span');
        rank.classList.add('rank');
        rank.textContent = `${index + 1}.`;
        resultCard.appendChild(rank);

        // Ajouter le nom du programme
        const programName = document.createElement('span');
        programName.classList.add('program-name');
        programName.textContent = program;
        resultCard.appendChild(programName);

        // Ajouter le cadre au conteneur des résultats
        resultContainer.appendChild(resultCard);
    });

    // Afficher le conteneur des résultats
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
}

document.getElementById('restart-quiz-btn').addEventListener('click', () => {
    currentQuestionIndex = 0;
    userScores = {
        "Classes Préparatoires": 0,
        "Génie Biomédical": 0,
        "Génie Digital et Intelligence Artificielle en Santé": 0,
        "Ingénierie Biotechnologie": 0,
        "Informatique Décisionnelle et e-Santé": 0,
        "Licence en Maintenance Médicale": 0,
        "Licence en Génie Industriel et Logistique Hospitalière": 0,
        "Licence en Techniques de Laboratoires de Biologie Médicale": 0,
        "Licence en Sciences de Gestion en Milieu Hospitalier": 0,
        "Licence en Management et Marketing Digital du Sport et de la Santé": 0,
        "Master en Dispositifs Médicaux et Affaires Réglementaires": 0,
        "Master en Maintenance et Génie Biomédical": 0,
        "Master en Entrepreneuriat et Management Technologique": 0
    };
    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('result-container').classList.add('hidden');
    showQuestion();
});

showQuestion();

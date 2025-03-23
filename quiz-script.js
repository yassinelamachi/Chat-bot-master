const database = {
    questions: [
        {
            id: 1,
            question: "Quel est votre domaine d'intérêt principal ?",
            options: [
                { text: "Mathématiques et Physique", scores: { "Classes Préparatoires": 3, "Génie Biomédical": 2, "Informatique Décisionnelle": 1 } },
                { text: "Informatique et Programmation", scores: { "Informatique Décisionnelle": 3, "Génie Biomédical": 1, "Techniques de Santé": 1 } },
                { text: "Biologie et Sciences Médicales", scores: { "Génie Biomédical": 3, "Techniques de Santé": 2, "Management des Établissements de Santé": 1 } },
                { text: "Gestion et Administration", scores: { "Management des Établissements de Santé": 3, "Techniques de Santé": 1, "Informatique Décisionnelle": 1 } }
            ]
        },
        {
            id: 2,
            question: "Quel est votre niveau d'études actuel ?",
            options: [
                { text: "Baccalauréat scientifique", scores: { "Classes Préparatoires": 3, "Licence en Techniques de Santé": 2 } },
                { text: "Bac+2 (CPGE, DUT, BTS, etc.)", scores: { "Cycle Ingénieur": 3, "Licence en Techniques de Santé": 1 } },
                { text: "Licence en sciences", scores: { "Master en Management": 3, "Cycle Ingénieur": 2 } },
                { text: "Master ou équivalent", scores: { "Master en Management": 3, "Cycle Ingénieur": 1 } }
            ]
        },
        {
            id: 3,
            question: "Quel type de travail préférez-vous ?",
            options: [
                { text: "Travail technique et pratique", scores: { "Génie Biomédical": 3, "Techniques de Santé": 2 } },
                { text: "Analyse de données et programmation", scores: { "Informatique Décisionnelle": 3, "Génie Biomédical": 1 } },
                { text: "Gestion et administration", scores: { "Management des Établissements de Santé": 3, "Techniques de Santé": 1 } },
                { text: "Recherche et développement", scores: { "Génie Biomédical": 2, "Informatique Décisionnelle": 2 } }
            ]
        },
        {
            id: 4,
            question: "Quel est votre objectif professionnel ?",
            options: [
                { text: "Travailler dans un hôpital ou un laboratoire médical", scores: { "Génie Biomédical": 3, "Techniques de Santé": 2 } },
                { text: "Devenir ingénieur en biomédical ou en informatique de santé", scores: { "Génie Biomédical": 3, "Informatique Décisionnelle": 2 } },
                { text: "Gérer un établissement de santé", scores: { "Management des Établissements de Santé": 3, "Techniques de Santé": 1 } },
                { text: "Faire de la recherche en santé ou en technologie médicale", scores: { "Génie Biomédical": 2, "Informatique Décisionnelle": 2 } }
            ]
        },
        {
            id: 5,
            question: "Quel est votre niveau de compétence en programmation ?",
            options: [
                { text: "Débutant", scores: { "Génie Biomédical": 1, "Informatique Décisionnelle": 1 } },
                { text: "Intermédiaire", scores: { "Informatique Décisionnelle": 2, "Génie Biomédical": 1 } },
                { text: "Avancé", scores: { "Informatique Décisionnelle": 3, "Génie Biomédical": 1 } },
                { text: "Aucune compétence", scores: { "Génie Biomédical": 1, "Techniques de Santé": 1 } }
            ]
        },
        {
            id: 6,
            question: "Préférez-vous un programme avec des stages en entreprise ?",
            options: [
                { text: "Oui, je veux des stages pratiques", scores: { "Génie Biomédical": 2, "Informatique Décisionnelle": 2, "Techniques de Santé": 2 } },
                { text: "Non, je préfère un programme plus théorique", scores: { "Classes Préparatoires": 3, "Master en Management": 2 } }
            ]
        },
        {
            id: 7,
            question: "Quel est votre intérêt pour les technologies médicales ?",
            options: [
                { text: "Très intéressé(e)", scores: { "Génie Biomédical": 3, "Informatique Décisionnelle": 2 } },
                { text: "Modérément intéressé(e)", scores: { "Génie Biomédical": 2, "Informatique Décisionnelle": 1 } },
                { text: "Peu intéressé(e)", scores: { "Techniques de Santé": 1, "Management des Établissements de Santé": 1 } },
                { text: "Pas intéressé(e)", scores: { "Management des Établissements de Santé": 2, "Techniques de Santé": 1 } }
            ]
        },
        {
            id: 8,
            question: "Quel est votre objectif salarial après l'obtention de votre diplôme ?",
            options: [
                { text: "Moins de 10 000 DHS/mois", scores: { "Techniques de Santé": 1, "Management des Établissements de Santé": 1 } },
                { text: "Entre 10 000 et 20 000 DHS/mois", scores: { "Génie Biomédical": 2, "Informatique Décisionnelle": 2 } },
                { text: "Plus de 20 000 DHS/mois", scores: { "Génie Biomédical": 3, "Informatique Décisionnelle": 3 } },
                { text: "Je ne sais pas encore", scores: { "Classes Préparatoires": 1, "Master en Management": 1 } }
            ]
        },
        {
            id: 9,
            question: "Souhaitez-vous poursuivre des études à l'étranger après votre formation ?",
            options: [
                { text: "Oui, absolument", scores: { "Génie Biomédical": 2, "Informatique Décisionnelle": 2 } },
                { text: "Peut-être", scores: { "Génie Biomédical": 1, "Informatique Décisionnelle": 1 } },
                { text: "Non, je préfère rester au Maroc", scores: { "Techniques de Santé": 1, "Management des Établissements de Santé": 1 } }
            ]
        },
        {
            id: 10,
            question: "Quel est votre niveau de compétence en gestion de projet ?",
            options: [
                { text: "Débutant", scores: { "Management des Établissements de Santé": 1, "Techniques de Santé": 1 } },
                { text: "Intermédiaire", scores: { "Management des Établissements de Santé": 2, "Génie Biomédical": 1 } },
                { text: "Avancé", scores: { "Management des Établissements de Santé": 3, "Génie Biomédical": 1 } },
                { text: "Aucune compétence", scores: { "Techniques de Santé": 1, "Informatique Décisionnelle": 1 } }
            ]
        }
    ]
};

let currentQuestionIndex = 0;
let userScores = {
    "Classes Préparatoires": 0,
    "Génie Biomédical": 0,
    "Informatique Décisionnelle": 0,
    "Techniques de Santé": 0,
    "Management des Établissements de Santé": 0,
    "Cycle Ingénieur": 0,
    "Master en Management": 0
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
    let maxScore = -1;
    let recommendedProgram = "";

    Object.keys(userScores).forEach(program => {
        if (userScores[program] > maxScore) {
            maxScore = userScores[program];
            recommendedProgram = program;
        }
    });

    const resultText = `La meilleure option pour vous est : **${recommendedProgram}**.`;
    document.getElementById('result-text').textContent = resultText;
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
}

document.getElementById('restart-quiz-btn').addEventListener('click', () => {
    currentQuestionIndex = 0;
    userScores = {
        "Classes Préparatoires": 0,
        "Génie Biomédical": 0,
        "Informatique Décisionnelle": 0,
        "Techniques de Santé": 0,
        "Management des Établissements de Santé": 0,
        "Cycle Ingénieur": 0,
        "Master en Management": 0
    };
    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('result-container').classList.add('hidden');
    showQuestion();
});

showQuestion();
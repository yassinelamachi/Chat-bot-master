const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuration de la base de données MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', // Remplacez par votre mot de passe MySQL
    database: 'suptech_chatbot'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connecté à la base de données MySQL');
});

// Route pour stocker les questions
app.post('/save-question', (req, res) => {
    const { question, email } = req.body;
    const sql = 'INSERT INTO unanswered_questions (question, email) VALUES (?, ?)';
    db.query(sql, [question, email], (err, result) => {
        if (err) {
            console.error("Erreur lors de l'enregistrement de la question :", err);
            res.status(500).send("Erreur lors de l'enregistrement de la question");
        } else {
            res.send('Question enregistrée avec succès');
        }
    });
});

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
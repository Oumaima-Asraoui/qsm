import React, { useState } from 'react';
import Question from './Question';
import { useNavigate } from 'react-router-dom';
import './quiz.css';

const allQuestionsData = {
  JavaScript: [
    {
        question: 'Comment déclarez-vous une variable en JavaScript ?',
        options: [
          'var myVariable;',
          'let myVariable;',
          'const myVariable;',
          'Toutes les réponses sont correctes',
        ],
        correctAnswer: 'Toutes les réponses sont correctes',
      },
      {
        question: 'Quelle méthode est utilisée pour ajouter un élément à la fin d\'un tableau en JavaScript ?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 'push()',
      },
      {
        question: 'Quelle est la sortie de console.log(typeof NaN) en JavaScript ?',
        options: ['number', 'NaN', 'undefined', 'object'],
        correctAnswer: 'number',
      },
      {
        question: 'Lequel des opérateurs suivants compare la valeur et le type en JavaScript ?',
        options: ['==', '===', '!=', '!=='],
        correctAnswer: '===',
      },
      {
        question: 'Comment vérifier si une variable x est un tableau en JavaScript ?',
        options: ['x.isArray()', 'Array.isArray(x)', 'x.instanceOf(Array)', 'typeof x === "array"'],
        correctAnswer: 'Array.isArray(x)',
      },
      {
        question: 'Que renvoie null === undefined en JavaScript ?',
        options: ['true', 'false', 'undefined', 'null'],
        correctAnswer: 'false',
      },
      {
        question: 'Quelle méthode permet d\'appeler une fonction après un certain délai en JavaScript ?',
        options: ['setTimeout()', 'setInterval()', 'clearTimeout()', 'clearInterval()'],
        correctAnswer: 'setTimeout()',
      },
      {
        question: 'Comment déclarer une fonction anonyme en JavaScript ?',
        options: ['function() { }', '() => { }', 'Les deux', 'Aucune des réponses'],
        correctAnswer: 'Les deux',
      },
      {
        question: 'Quelle est la sortie de console.log(0.1 + 0.2 === 0.3) ?',
        options: ['true', 'false', 'undefined', 'NaN'],
        correctAnswer: 'false',
      },
],
Database: [
    {
        question: 'Quel mot-clé SQL est utilisé pour ajouter une condition à une requête ?',
        options: ['WHERE', 'IF', 'HAVING', 'CONDITION'],
        correctAnswer: 'WHERE',
      },
      {
        question: 'Comment ajouter une nouvelle ligne de données dans une table SQL ?',
        options: ['INSERT INTO', 'ADD ROW', 'INSERT ROW', 'APPEND INTO'],
        correctAnswer: 'INSERT INTO',
      },
      {
        question: 'Quelle clause SQL est utilisée pour regrouper les résultats selon une ou plusieurs colonnes ?',
        options: ['GROUP BY', 'ORDER BY', 'SORT BY', 'PARTITION BY'],
        correctAnswer: 'GROUP BY',
      },
      {
        question: 'Quel type de jointure SQL retourne toutes les lignes lorsqu\'il y a une correspondance dans l\'une des deux tables ?',
        options: ['LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN', 'INNER JOIN'],
        correctAnswer: 'FULL OUTER JOIN',
      },
      {
        question: 'Quel mot-clé SQL est utilisé pour mettre à jour les données d\'une table ?',
        options: ['UPDATE', 'MODIFY', 'CHANGE', 'ALTER'],
        correctAnswer: 'UPDATE',
      },
      {
        question: 'Comment supprimer une table entière en SQL ?',
        options: ['DROP TABLE table_name;', 'DELETE * FROM table_name;', 'REMOVE table_name;', 'TRUNCATE TABLE table_name;'],
        correctAnswer: 'DROP TABLE table_name;',
      },
      {
        question: 'Quelle est la sortie de la requête suivante : SELECT COUNT(*) FROM table_name ?',
        options: ['Le nombre de lignes dans la table', 'Le nombre de colonnes dans la table', 'Les valeurs distinctes dans la table', 'Les lignes uniques dans la table'],
        correctAnswer: 'Le nombre de lignes dans la table',
      },
      {
        question: 'Quel type de clé permet d\'assurer l\'unicité des enregistrements dans une table ?',
        options: ['PRIMARY KEY', 'FOREIGN KEY', 'UNIQUE KEY', 'INDEX KEY'],
        correctAnswer: 'PRIMARY KEY',
      },
      {
        question: 'Quel type de jointure SQL retourne uniquement les lignes avec des correspondances dans les deux tables ?',
        options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'],
        correctAnswer: 'INNER JOIN',
      },
],

Html:[
    {
        question: 'Quel est l\'élément HTML utilisé pour créer un lien hypertexte ?',
        options: ['<a>', '<link>', '<href>', '<anchor>'],
        correctAnswer: '<a>',
      },
      {
        question: 'Quel attribut est utilisé pour spécifier l\'URL d\'une image en HTML ?',
        options: ['src', 'href', 'alt', 'link'],
        correctAnswer: 'src',
      },
      {
        question: 'Quel est l\'élément HTML utilisé pour créer une liste ordonnée ?',
        options: ['<ol>', '<ul>', '<li>', '<dl>'],
        correctAnswer: '<ol>',
      },
      {
        question: 'Quel attribut est utilisé pour ouvrir un lien dans un nouvel onglet ou une nouvelle fenêtre ?',
        options: ['target="_blank"', 'href="_new"', 'window="_new"', 'open="new_tab"'],
        correctAnswer: 'target="_blank"',
      },
      {
        question: 'Quel est l\'élément HTML utilisé pour insérer un saut de ligne ?',
        options: ['<br>', '<break>', '<line>', '<lb>'],
        correctAnswer: '<br>',
      },
      {
        question: 'Quel attribut est utilisé pour donner un identifiant unique à un élément HTML ?',
        options: ['id', 'class', 'name', 'unique'],
        correctAnswer: 'id',
      },
      {
        question: 'Quel élément HTML est utilisé pour afficher une image ?',
        options: ['<img>', '<picture>', '<figure>', '<image>'],
        correctAnswer: '<img>',
      },
      {
        question: 'Quelle est la balise HTML correcte pour un titre de niveau 1 ?',
        options: ['<h1>', '<head>', '<header>', '<heading>'],
        correctAnswer: '<h1>',
      },
      {
        question: 'Quel attribut HTML est utilisé pour spécifier du texte alternatif pour une image si elle ne peut pas être affichée ?',
        options: ['alt', 'title', 'src', 'description'],
        correctAnswer: 'alt',
      },
      {
        question: 'Quelle balise HTML est utilisée pour créer un formulaire ?',
        options: ['<form>', '<input>', '<button>', '<fieldset>'],
        correctAnswer: '<form>',
      },
],
React: [
    {
        question: 'Quelle est la syntaxe correcte pour importer React dans un fichier ?',
        options: [
          'import React, { Component } from react;',
          'import React from react;',
          'import { Component } from react;',
          'import { useState } from react;',
        ],
        correctAnswer: 'import React from react;',
      },
      {
        question: 'Comment passer des données d\'un composant parent à un composant enfant ?',
        options: ['Avec this.props', 'Avec les props', 'Avec this.state', 'Avec useState()'],
        correctAnswer: 'Avec les props',
      },
      {
        question: 'Quelle méthode est utilisée pour créer un composant dans React ?',
        options: ['createComponent()', 'renderComponent()', 'useComponent()', 'function ou class'],
        correctAnswer: 'function ou class',
      },
      {
        question: 'Quel hook permet de gérer l\'état dans un composant fonctionnel ?',
        options: ['useEffect()', 'useState()', 'useContext()', 'useReducer()'],
        correctAnswer: 'useState()',
      },
      {
        question: 'Quelle est la fonction utilisée pour rendre un composant React dans le DOM ?',
        options: ['ReactDOM.render()', 'render()', 'createElement()', 'React.createComponent()'],
        correctAnswer: 'ReactDOM.render()',
      },
      {
        question: 'Lequel des éléments suivants est un hook spécifique à la gestion d\'effets de bord dans les composants fonctionnels ?',
        options: ['useState()', 'useEffect()', 'useReducer()', 'useContext()'],
        correctAnswer: 'useEffect()',
      },
      {
        question: 'Comment définir une route dans une application React utilisant react-router-dom ?',
        options: [
          '<Route path="/about" component={About} />',
          '<Route to="/about" component={About} />',
          '<Link path="/about" component={About} />',
          '<Switch to="/about" component={About} />'
        ],
        correctAnswer: '<Route path="/about" component={About} />',
      },
      {
        question: 'Quelle est la commande pour créer une nouvelle application React avec Create React App ?',
        options: [
          'npm new react-app',
          'npx create-react-app my-app',
          'npm create react-app my-app',
          'npx create new react-app'
        ],
        correctAnswer: 'npx create-react-app my-app',
      },
      {
        question: 'Lequel des éléments suivants permet de lever une erreur si un type de prop incorrect est passé à un composant ?',
        options: ['typeProps', 'defaultProps', 'propTypes', 'checkProps'],
        correctAnswer: 'propTypes',
      },
      {
        question: 'Comment gérez-vous un état local dans un composant de classe React ?',
        options: ['this.state', 'useState()', 'useEffect()', 'this.props'],
        correctAnswer: 'this.state',
      },
],
};
function Quiz() {
  const [selectedModule, setSelectedModule] = useState('');
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate(); // Ajout de useNavigate pour la navigation

  const handleOptionChange = (question, selectedOption) => {
    setUserAnswers({ ...userAnswers, [question]: selectedOption });
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    const questionsData = allQuestionsData[selectedModule] || [];
    questionsData.forEach((q) => {
      if (userAnswers[q.question] === q.correctAnswer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setIsSubmitted(true);
  };

  const handleModuleChange = (module) => {
    setSelectedModule(module);
    setUserAnswers({});
    setIsSubmitted(false);
  };

  const questionsData = allQuestionsData[selectedModule] || [];

  if (!selectedModule) {
    return (
      <div>
        <h2>Choisissez un module:</h2>
        <button onClick={() => handleModuleChange('JavaScript')}>JavaScript</button>
        <button onClick={() => handleModuleChange('Database')}>Database</button>
        <button onClick={() => handleModuleChange('Html')}>Html</button>
        <button onClick={() => handleModuleChange('React')}>React</button>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div>
        <h2>Votre score: {score} / {questionsData.length}</h2>
        <button onClick={() => handleModuleChange('')}>Revenir aux modules</button>
        
      </div>
    );
  }

  return (
    <div>
      <h2>Module: {selectedModule.toUpperCase()}</h2>
      {questionsData.map((q, index) => (
        <Question
          key={index}
          question={q.question}
          options={q.options}
          selectedOption={userAnswers[q.question]}
          handleOptionChange={(selectedOption) => handleOptionChange(q.question, selectedOption)}
        />
      ))}
      <button onClick={handleSubmit}>Valider</button>
    </div>
  );
}

export default Quiz;
const data = [
    {
        questionText: 'HTML stands for -',
        answerOptions: [
            { answerText: 'HighText Machine Language', isCorrect: false },
            { answerText: 'HyperText and links Markup Language', isCorrect: false },
            { answerText: 'HyperText Markup Language', isCorrect: true },
            { answerText: 'None of these', isCorrect: false },
        ],
        tag: 'TU',
    },
    {
        questionText: 'The correct sequence of HTML tags for starting a webpage is -',
        answerOptions: [
            { answerText: 'Head, Title, HTML, Body', isCorrect: false },
            { answerText: 'HTML, Body, Title, Head', isCorrect: false },
            { answerText: 'HTML, Title, Head, Body', isCorrect: false },
            { answerText: 'HTML, Head, Title, Body', isCorrect: true },
        ],
        tag: 'TU',
    },
    {
        questionText: 'Which of the following element is responsible for making the text bold in HTML?',
        answerOptions: [
            { answerText: '<pre>', isCorrect: false },
            { answerText: '<a>', isCorrect: false },
            { answerText: '<b>', isCorrect: true },
            { answerText: '<br>', isCorrect: false },
        ],
        tag: 'TU'
    },
    {
        questionText: 'Which of the following tag is used for inserting the largest heading in HTML?',
        answerOptions: [
            { answerText: '<h3>', isCorrect: false },
            { answerText: '<h1>', isCorrect: true },
            { answerText: '<h5>', isCorrect: false },
            { answerText: '<h6>', isCorrect: false },
        ],
        tag: 'TU'
    },
    {
        questionText: 'CSS stands for -',
        answerOptions: [
            { answerText: 'Cascade style sheets', isCorrect: false },
            { answerText: 'Color and style sheets', isCorrect: false },
            { answerText: 'Cascading style sheets', isCorrect: true },
            { answerText: 'None of the above', isCorrect: false },
        ],
        tag: 'C'
    },
    {
        questionText: 'The property in CSS used to change the background color of an element is -',
        answerOptions: [
            { answerText: 'bgcolor', isCorrect: false },
            { answerText: 'color', isCorrect: false },
            { answerText: 'background-color', isCorrect: true },
            { answerText: 'All of the above', isCorrect: false },
        ],
        tag: 'C'
    },
    {
        questionText: 'The HTML attribute used to define the inline styles is -',
        answerOptions: [
            { answerText: 'style', isCorrect: true },
            { answerText: 'styles', isCorrect: false },
            { answerText: 'class', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
        ],
        tag: 'C'
    },
    {
        questionText: 'Which of the following CSS property is used to set the background image of an element?',
        answerOptions: [
            { answerText: 'background-attachment', isCorrect: false },
            { answerText: 'background-image', isCorrect: true },
            { answerText: 'background-color', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
        ],
        tag: 'C'
    },
    {
        questionText: 'Which type of JavaScript language is',
        answerOptions: [
            { answerText: 'Object-Oriented', isCorrect: false },
            { answerText: 'Object-Based', isCorrect: true },
            { answerText: 'Assembly-language', isCorrect: false },
            { answerText: 'High-level', isCorrect: true },
        ],
        tag: 'PSE'
    },
    {
        questionText: 'The function and var are known as',
        answerOptions: [
            { answerText: 'Keywords', isCorrect: false },
            { answerText: 'Data types', isCorrect: false },
            { answerText: 'Declaration statements', isCorrect: true },
            { answerText: 'Prototypes', isCorrect: false },
        ],
        tag: 'PSE'
    },
    {
        questionText: ' Which of the following number object function returns the value of the number?',
        answerOptions: [
            { answerText: 'toString()', isCorrect: false },
            { answerText: 'valueOf()', isCorrect: true },
            { answerText: 'toLocaleString()', isCorrect: false },
            { answerText: 'toPrecision()', isCorrect: false },
        ],
        tag: 'PSE'
    },
    {
        questionText: ' In JavaScript the x===y statement implies that:',
        answerOptions: [
            { answerText: 'Both x and y are equal in value, type and reference address as well.', isCorrect: false },
            { answerText: 'Both are x and y are equal in value only.', isCorrect: false },
            { answerText: 'Both are equal in the value and data type.', isCorrect: true },
            { answerText: 'Both are not same at all.', isCorrect: false },
        ],
        tag: 'PSE'
    },
    {
        questionText: 'Which one of the following also known as Conditional Expression:',
        answerOptions: [
            { answerText: 'Alternative to if-else', isCorrect: false },
            { answerText: 'Switch statement', isCorrect: false },
            { answerText: 'If-then-else statement', isCorrect: false },
            { answerText: 'immediate if', isCorrect: true },
        ],
        tag: 'PS'
    },
    {
        questionText: 'REPL stands for.',
        answerOptions: [
            { answerText: 'Research Eval Program Learn', isCorrect: false },
            { answerText: 'Read Eval Print Loop', isCorrect: true },
            { answerText: 'Read Earn Point Learn', isCorrect: false },
            { answerText: 'Read Eval Point Loop', isCorrect: false },
        ],
        tag: 'PS'
    },
    {
        questionText: 'What is Callback?',
        answerOptions: [
            { answerText: 'Callback is an asynchronous equivalent for a function.', isCorrect: true },
            { answerText: 'Callback is a technique in which a method call back the caller method.', isCorrect: false },
            { answerText: 'Both of the above.', isCorrect: false },
            { answerText: 'None of the above.', isCorrect: false },
        ],
        tag: 'PS'
    },
    {
        questionText: 'Which of the following is true about EventEmitter.on property?',
        answerOptions: [
            { answerText: 'on property is used to fire event.', isCorrect: false },
            { answerText: 'on property is used to bind a function with the event.', isCorrect: true },
            { answerText: 'on property is used to locate an event handler.', isCorrect: false },
            { answerText: 'None of the above.', isCorrect: false },
        ],
        tag: 'PS'
    },
    {
        questionText: 'Which of the following is not a feature for NoSQL databases?',
        answerOptions: [
            { answerText: 'Data can be easily held across multiple servers', isCorrect: false },
            { answerText: 'Relational Data', isCorrect: true },
            { answerText: 'Scalability', isCorrect: false },
            { answerText: 'Faster data access than SQL databases', isCorrect: false },
        ],
        tag: 'RO'
    },
    {
        questionText: 'Which of the following statement is correct with respect to mongoDB?',
        answerOptions: [
            { answerText: 'MongoDB is a NoSQL Database', isCorrect: true },
            { answerText: 'MongoDB used XML over JSON for data exchange', isCorrect: false },
            { answerText: 'MongoDB is not scalable', isCorrect: false },
            { answerText: 'All of the above', isCorrect: false },
        ],
        tag: 'RO'
    },
    {
        questionText: 'Which of the following is/are feature of mongoDB?',
        answerOptions: [
            { answerText: 'Vertically scalable', isCorrect: false },
            { answerText: 'Centralised database', isCorrect: false },
            { answerText: 'Dynamic schema', isCorrect: true },
            { answerText: 'All of the above', isCorrect: false },
        ],
        tag: 'RO'
    },
    {
        questionText: 'Which of the following represent column in mongoDB?',
        answerOptions: [
            { answerText: 'document', isCorrect: false },
            { answerText: 'database', isCorrect: false },
            { answerText: 'collection', isCorrect: false },
            { answerText: 'field', isCorrect: true },
        ],
        tag: 'RO'
    },
    {
        questionText: 'What is ReactJS?',
        answerOptions: [
            { answerText: 'Server-side Framework', isCorrect: false },
            { answerText: 'User-interface framework', isCorrect: false },
            { answerText: 'Both', isCorrect: true },
            { answerText: 'None', isCorrect: false },
        ],
        tag: 'DDE'
    },
    {
        questionText: 'How can you access the state of a component from inside of a member function?',
        answerOptions: [
            { answerText: 'this.getState()', isCorrect: false },
            { answerText: 'this.prototype.stateValue', isCorrect: false },
            { answerText: 'this.state', isCorrect: false },
            { answerText: 'this.values', isCorrect: true },
        ],
        tag: 'DDE'
    }, {
        questionText: 'What does the “webpack” command do?',
        answerOptions: [
            { answerText: 'Transpiles all the Javascript down into one file', isCorrect: true },
            { answerText: 'Runs react local development server4', isCorrect: false },
            { answerText: 'Both A and B', isCorrect: false },
            { answerText: 'None', isCorrect: false },
        ],
        tag: 'DDE'
    }, {
        questionText: 'What is a react.js in MVC?',
        answerOptions: [
            { answerText: 'Controller', isCorrect: true },
            { answerText: 'Middleware', isCorrect: false },
            { answerText: 'Model', isCorrect: false },
            { answerText: 'Router', isCorrect: false },
        ],
        tag: 'DDE'
    },


]

export default data;
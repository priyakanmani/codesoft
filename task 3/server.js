const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/calculate', (req, res) => {
    const { expression } = req.body;
    try {
        const result = eval(expression);
        res.send({ result });
    } catch (error) {
        res.status(400).send({ error: 'Invalid expression' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

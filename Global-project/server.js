const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    const userData = req.body;
    console.log('User Data:', userData);
    res.send('Form data received!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

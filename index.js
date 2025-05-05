const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send({message: 'Hej!'});
});

app.listen(PORT, () => {
    console.log(`Server är redo på http://localhost:${PORT}`)
})
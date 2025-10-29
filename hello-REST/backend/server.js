const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;
app.use(cors());

app.get('/message', (req, res) => {
    res.json({ text: 'Hello from Express Server!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
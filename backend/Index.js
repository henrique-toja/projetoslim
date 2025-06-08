const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Olá do backend!' });
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
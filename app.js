const express = require('express');
const app = express();
const PORT = process.env.port || 5000;

app.get('/', (req, res)=>{
    res.send('Hello you fucking asshole');
});

app.listen(PORT, () => console.log(`You are listening on PORT: ${PORT}`));
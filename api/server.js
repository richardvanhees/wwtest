const express = require('express');
const app = express();

app.get('/', (req, res) =>
    res.send('Hello World!')
);

const server = app.listen(3001, () => {
    const {port} = server.address();
    console.log(`Running at port ${port}`);
});
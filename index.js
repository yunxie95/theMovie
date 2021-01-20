// entry point of server
import express from 'express';
import apis from './src/apis/api';

const app = express();
const PORT = 4000;

apis(app);

app.get('/', (req, res) => {
    res.send(`Node and express server is running at port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});
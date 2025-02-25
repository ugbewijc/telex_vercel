import express from 'express';
import cors from 'cors';
import { integration } from './api/integration.js';
import Tick from './api/tick.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        "message": "Welcome to Vercel Telex Integration",
    });
})

app.get('/integration.json', integration)

app.post('/tick', Tick.tick)

app.get('/integration', integration)

app.use((req, res, next) => {
    res.status(404).json({ data: 'Not Found' });
});

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})
export default app
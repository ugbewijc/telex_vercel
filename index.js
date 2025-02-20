import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).json({
        "email": "ugbewijc@gmail.com",
        // "current_datetime": new Date().toISOString().split('.')[0] + 'Z',
        // "github_url": "https://github.com/ugbewijc/telex_vercel"
    });
})

app.use((req, res, next) => {
    res.status(404).json({ data: 'Not Found' });
  });

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})
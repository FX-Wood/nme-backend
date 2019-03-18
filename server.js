// import expressjs
const express = require('express');
const app = express();

// import and configure MongoDB/mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nmeBackend', { useNewUrlParser: true })
const db = mongoose.connection;
db.once('open', () => {
    console.log(`[nme-backend] Connected to MongoDB at ${db.host}:${db.port}`)
})
db.on('error', (err) => {
    console.log(`[nme-backend] Database error \n${err}`)
})

// configure middleware
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    res.send("API located at /api");
});
app.use('/api', require('./routes/api'))

const port = process.env.PORT || 3001
app.listen(port, () => console.log('[nme-backend] HTTP server listening on', port))
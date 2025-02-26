const cluster = require('node:cluster');
const os = require('os');
const express = require('express');

const totalCpu = os.cpus().length;

if(cluster.isPrimary) {
    for(let i = 0; i < totalCpu; i++) {                 
        cluster.fork();
    }
}else{
    const app = express();
    const PORT = 8000;

    app.get('/', (req, res) => {
        return res.json({
            message:`Hello from Express Server ${process.pid}`
        })
    });
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
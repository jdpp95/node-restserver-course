const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users'

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    middlewares(){
        // CORS
        this.app.use(cors());

        // Public directory
        this.app.use( express.static('public') );

        //Parse and read body
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'))
    }

    listen() {
        this.app.listen(process.env.PORT, ()=>{
            console.log('Server running in port', this.port)
        })
    }
}

module.exports = Server;
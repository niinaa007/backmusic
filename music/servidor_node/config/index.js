require('dotenv').config() 

const config = {
    port : 3001,
    DB_HOST: "mongo",
    DB_NAME: "musica",
    DB_USER: "admin",
    BB_PASSWORD: process.env 
}
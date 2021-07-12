const MongoLib = require('../lib/mongo');

class TareasService {

    constructor(){
        this.collection = 'music'; //nombre base de datos
        this.mongoDB = new MongoLib();
    }

    async getCanciones({tags}) {
        const query = tags ;
        const tareas = await this.mongoDB.getCanciones(this.collection, query);
        return canciones || [];
    }

    async getCanciones(tareaId){
        const cancion = await this.mongoDB.getCanciones(this.collection, cancionId);
        return cancion || [];
    }

    async anadirCancion({tarea}){
        const cancionAnadidaId = await this.mongoDB.anadirCancion(this.collection, cancion);
        return cancionAnadidaId || [];
    }

    async actualizarPlaylist( cancionId, cancion = {}){
        const actualizarPlaylistId = await this.mongoDB.actualizarPlaylist(this.collection, cancionId, cancion);
        return actualizarPlaylistId || [];
    }

    async borrarCancion( cancionId ){
        const cancionBorradaId = await this.mongoDB.borrarCancion(this.collection, cancionId);
        return cancionBorradaId || [];
    }
    
}

module.exports = CancionesService
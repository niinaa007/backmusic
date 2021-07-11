const { MongoClient, ObjectId } = require('mongodb');


const MONGO_URI = `mongodb+srv://admin:charizard8@cluster0.7vl6o.mongodb.net?retryWrites=true&w=majority`;
class MongoLib {
constructor(){
this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});
this.dbName = 'musica';
}
connect() {
if (!MongoLib.connection){
MongoLib.connection = new Promise ((resolve, reject) => {
this.client.connect( err => {
if (err) {
reject("error en la conexión con la BBDD ", err);
}
console.log('Conectado a la BBDD');
resolve(this.client.db(this.dbName));
})
})
}
return MongoLib.connection;
}
getMusica(collection, query) {
return this.connect().then(db => {
return db.collection(collection).find(query).toArray();
})
}
getMusica(collection, id) {
return this.connect().then(db => {
return db.collection(collection).findOne({ _id: ObjectId(id) })
})
}
anadirMusica(collection, data) {
return this.connect().then(db => {
return db.collection(collection).insertOne(data)
}).then(result => result.insertedId);
}
actualizarMusica(collection, id, data) {
return this.connect().then(db => {
return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true })
}).then(result => result.insertedId || id);
}
borrarMusica(collection, id) {
return this.connect().then(db => {
return db.collection(collection).deleteOne({ _id: ObjectId(id) })
}).then(() => id)
}
}
module.exports = MongoLib;

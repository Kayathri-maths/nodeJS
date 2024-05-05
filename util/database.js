const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect('mongodb+srv://kayathri:Njs8vSgQfSp933j5@cluster0.crjgy7j.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'
)
  .then(client => {
    console.log('connected!');
    callback();
    _db = client.db();
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
}

const getDb = () => {
  if(_db){
    return _db;
  } 
  throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;


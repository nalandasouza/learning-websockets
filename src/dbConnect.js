import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://user:password@db.1ohlgoc.mongodb.net/?retryWrites=true&w=majority&appName=db"
);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("db");
  documentosColecao = db.collection("table");

  console.log("Conectado ao banco de dados com sucesso!");

} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
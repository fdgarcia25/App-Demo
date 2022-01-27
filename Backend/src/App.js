import express from "express";
import clientesroutes from "./routes/clientes";



const App = express();
App.use(express.json());

App.use(clientesroutes)

export default App;
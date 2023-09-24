const express = require("express");
const app = express;
const port = 3000;

let lista = [ 
{
    id: 1122,
    isCompleted: false,
    description: "cocinar",
},
{
    id: 3344,
    isCompleted: true,
    description: "estudiar",
}
]

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Esta es la ruta raiz")
})

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});

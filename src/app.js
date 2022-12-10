import express from 'express';
import ProductManager from '../productManager.js';

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(8080, () => {
    console.log("funciona")
});

let productoManager = new ProductManager();

app.get('/products', (req,res) => {
   let traerProductos = productoManager.getProducts();
   let limit = req.query.limit;

   let hasta = parseInt(limit)

   if(limit){
    let traerProductosLimit = traerProductos.slice(0, hasta);
    res.json(traerProductosLimit);
   } else{
    res.json(traerProductos);
   }
})

app.get('/products/:pid', (req,res) => {
    let id = req.params;
    let idparsed = parseInt(id.pid);
    let productoById = productoManager.getProductById(idparsed);
    res.json(productoById);

    console.log(idparsed);
    console.log(id);
    
})






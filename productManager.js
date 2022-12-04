import fs from 'fs';


class ProductManager {
    constructor() {
        this.products = [];
        this.path = './productos.json';
      }

    addProduct(title, description, price, thumbnail, code, stock){
        const product ={
            title,
            description,
            price,
            thumbnail,
            id: this.#getMaxId() +1,
            stock,
            code
        }
  
        if(Object.values(product).includes(undefined)){console.log("Completar todos los campos")}
        else{
            this.#getProducts()
            if(!this.products.includes(product.id)){
                this.products.push(product)
                const productosAgregar = JSON.stringify(this.products)
                fs.writeFileSync(this.path,productosAgregar,"utf-8")
            }else{console.error("El ID no está disponible")}
            
        }
        console.log("Producto agregado con id: " + product.id)
    }
   


    getProducts () {
        this.#getProducts();
        console.table(this.products)
    }

 
    getProductById (id) {
        this.#getProducts();
        let findProduct = {}
        this.products.forEach((product)=>{
            if(product.code === id){
                findProduct = product
            }
        })
        if (!Object.keys(findProduct)) {
            return console.log("Not found")
        } else return console.table(findProduct)
    }

    updateProduct(id,title, description, price, thumbnail, code, stock){
        this.#getProducts();
        this.products.find((product) => {
            if(product.id === id){
                product.title = title;
                product.description = description;
                product.price = price;
                product.thumbnail = thumbnail;
                product.code = code;
                product.stock = stock;
            }
        })
        const productosAgregar = JSON.stringify(this.products)
        fs.writeFileSync(this.path,productosAgregar,"utf-8")
    }

    deleteProduct(ID){
        this.#getProducts();
        const find = this.products.find(product => product.id === ID)
        if(find){
            const filtered = this.products.filter(product => product.id !== ID)
            const productosAgregar = JSON.stringify(filtered)
            fs.writeFileSync(this.path,productosAgregar,"utf-8")
        }else{console.error("Error: El producto no existe")}
    }

    #getProducts () {
        if(fs.existsSync("productos.json")){
            let file = fs.readFileSync("productos.json", "utf-8")
            this.products = JSON.parse(file)
            return(this.products)
        }else{
            fs.writeFileSync("productos.json","[]","utf-8");
            let file = fs.readFileSync("productos.json", "utf-8")
            this.products = JSON.parse(file)
            
            return(this.products)
        }
        
    }

    #getMaxId(){
        let maxId = 0;
        this.products.map( (product) => {
            if(product.id > maxId) maxId = product.id
        })
        return maxId;
    }
}

/* Creo un producto */
const product = new ProductManager();

/*
function createProduct(){
    return new Promise(res=> {
        console.log("Creando productos... ")
        setTimeout(()=>{
            res(product.addProduct("queso", "queso cremoso", 200, "no tiene foto", 50));
            res(product.addProduct("jamon", "jamon cocido", 100, "no tiene foto", 100));
            res(product.addProduct("pan", "pan", 100, "no tiene foto", 200));

            console.log("------------------------------------------------")
        }, 2000)
    })
}

function getAllProducts() {
    return new Promise(res=> {
        console.log(" ")
        console.log("Obteniendo todos los productos...")
        setTimeout(()=>{
            res(product.getProducts());

            console.log("------------------------------------------------")
        }, 2000)
    })
}

function getProductById(id) {
    return new Promise(res=> {
        console.log(" ")
        console.log(`Obteniendo producto con ID : ${id}`)
        setTimeout(()=>{
            res(product.getProductById(id));
        }, 2000)
    })
}

async function global() {
    await createProduct()
    await getAllProducts()
    await getProductById(2)
}


global();

*/








class ProductManager {
    constructor() {
        this.products = [];
      }

    addProduct(title, description, price, thumbnail, stock){
        const product ={
            title,
            description,
            price,
            thumbnail,
            code: this.#getMaxCode() +1,
            stock
        }
  
        if(Object.values(product).includes(undefined)){console.log("Completar todos los campos")}
        else{
            if(!this.products.includes(product.code)){
                this.products.push(product)
            }else{
                console.log("Ya existe este producto")
            }
        }
        console.log("Producto agregado con id: " + product.code)
    }
   


    getProducts () {
        console.table(this.products)
    }

 
    getProductById (id) {
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

    #getMaxCode(){
        let maxCode = 0;
        this.products.map( (product) => {
            if(product.code > maxCode) maxCode = product.code
        })
        return maxCode;
    }
}

/* Creo un producto */
const product = new ProductManager();

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










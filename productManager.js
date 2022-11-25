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
            }
        }

    }
   


    getProducts () {
        console.log(this.products)
    }

 
    getProductById (id) {
        let productoBuscado = 0
        this.products.find((product)=>{
            if(product.id === id){
                productoBuscado = 1
                return product;
            }else{productoBuscado = 0}
        })
        if(productoBuscado === 0){console.log("Not found")}
    }




    #getMaxCode(){
        let maxCode = 0;
        this.products.map( (product) => {
            if(product.code > maxCode) maxCode = product.code
        })
        return maxCode;
    }
}
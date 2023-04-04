//Variables globales ↓↓

let arrayCodigos = []
let arrayProductos = []


//Clase ↓↓

class ProductManager {
    constructor () {
        this.product = []
    }

    //Método 1 ↓↓
    addProduct = (title, description, price, thumbnail, code, stock) => {
        
        let validarCodigos = arrayCodigos.includes(code) //Validamos al array de codigos para ver si se repite el codigo
        
        if (!title || !description || !price || !thumbnail || !code || !stock){
            console.error("Campos incompletos")
            return

        } else if (validarCodigos === true) {
            console.error("El código ingresado ya existe")
            return

        } else {
            let id = arrayCodigos.length //Agregamos un id a cada producto ingresado que sea válido
            this.product.push({title, description, price, thumbnail, code, stock, id})
            arrayCodigos.push(code)
            arrayProductos.push({title, description, price, thumbnail, code, stock, id})
        }    
    }

    //Método 2 ↓↓

    getProducts = () => {
        console.log(arrayProductos)
    }

    //Método 3 ↓↓

    getProductByID = (x) => {

        let resultado = arrayProductos.find( (z) => z.id === x) 

        if (resultado === undefined){
        console.log("El id es incorrecto.")
        return
        } else {
            console.log(resultado)
            return
        } 

        } 
    }


const productos = new ProductManager()
const prod1 = new ProductManager ()
const prod2 = new ProductManager ()
const prod3 = new ProductManager ()
const prod4 = new ProductManager ()

prod1.addProduct("Disco Sólido", "M.2", 700, "HP", 5586, 1000)  //id 0
prod2.addProduct("Mouse", "Inalambrico", 150, "Miniso", 307, 725)  // id
prod3.addProduct("Teclado", "Inalambrico", 480, "Samsung", 1000) //Le falta un dato
prod4.addProduct("Disco Sólido", "M.2", 700, "HP", 5586, 1000) //Code repetido


productos.getProducts()
productos.getProductByID(7) // para como está, sólo los id 0 y 1 serán corrrectos.



        
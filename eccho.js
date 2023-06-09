class ProductManager {
  #codeGenerator(codeLength = 15) {
    const numeros = "0123456789";
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numYLetras = numeros + letras;
    let code = "";
    for (let i = 0; i < codeLength; i++) {
      const random = Math.floor(Math.random() * numYLetras.length);
      code += numYLetras.charAt(random);
    }
    return code;
  }

  #idGenerator() {
    const id =
      this.products.length === 0
        ? 1
        : this.products[this.products.length - 1].id + 1;
    return id;
  }

  #paramsValidator(product) {
    if (
      product.title &&
      product.description &&
      product.price &&
      product.thumbnail &&
      product.stock
    ) {
      return true;
    } else {
      if (!product.title) {
        throw new Error(`Falta el title del producto.`);
      } else if (!product.description) {
        throw new Error(`Falta la descripcion del producto.`);
      } else if (!product.price) {
        throw new Error(`Falta el precio del producto.`);
      } else if (!product.thumbnail) {
        throw new Error(`Falta la imagen del producto.`);
      } else if (!product.stock) {
        throw new Error(`Falta el stock del producto.`);
      }
    }
  }

  constructor() {
    this.products = [];
  }

  addProduct(product) {
    try {
      if (this.#paramsValidator(product)) {
        return this.products.push({
          id: this.#idGenerator(),
          code: this.#codeGenerator(),
          ...product,
        });
      }
    } catch (error) {
      console.log(`Error agregando producto: ${error.message}`);
    }
  }

  getProducts() {
    try {
      return this.products;
    } catch (error) {
      console.log(`Error obteniendo todos los productos: ${error.message}`);
    }
  }

  getProductById(id) {
    try {
      const idProduct = this.products.find(product => product.id === id);
      if (idProduct) {
        console.log(idProduct);
      } else throw new Error(`Not found`);
    } catch (error) {
      console.log(`Error al buscar producto con el id ${id}: ${error.message}`);
    }
  }
}

const leandro = new ProductManager();

//leandro.getProducts();
leandro.addProduct({
  title: "Nike PANDA dunk",
  description: "Nike Dunk Low SE World Champs Black White",
  price: 2750,
  thumbnail:
    "https://drops-ba.com/wp-content/uploads/2022/10/Nike-Dunk-Low-SE-World-Champs-Black-White.jpg",
  stock: 10,
});
leandro.addProduct({
  title: "Adidas BadBunny",
  description: "adidas Forum Buckle Low Bad Bunny Blue Tint",
  price: 4500,
  thumbnail:
    "https://drops-ba.com/wp-content/uploads/2022/09/adidas-Forum-Buckle-Low-Bad-Bunny-Blue-Tint.jpg",
  stock: 5,
});
//leandro.getProducts();
//leandro.getProductById();
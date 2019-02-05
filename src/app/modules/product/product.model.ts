export class Product {

   constructor(public productName: string, public productType: string,
    public productPrice: number, public productPicture: string, public productSupplier: string ) {}
   
    
  }

  export class ProductWithId {

    constructor(public productId: string ,public productName: string, public productType: string,
     public productPrice: number, public productPicture: string, public productSupplier: string ) {}
    
     
   }
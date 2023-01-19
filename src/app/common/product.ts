export class Product {

    constructor(public id: number, //mod jan18
                public sku: string,
                public name: string,
                public description: string,
                public unitPrice: number,
                public imageUrl: string,
                public active: boolean,
                public unitsInStock: number,
                public dateCreated: Date,
                public lastUpdated: Date
        ) {
    }
}
//matches JSON data from rest
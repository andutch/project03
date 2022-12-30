export class Item {

    name: string;
   
    description: string;

    // itemId: number;

    // dateAdded: Date ;

    serialNumber: string;

    partNumber: string;

    quantity: number;

    imageUrl: string;

    // warehouseId: string;



    constructor(name:string, decription:string, partNumber: string, serialNumber: string, quantity: number, imageUrl:string) {

        this.name = name;
        this.description=decription;
        this.partNumber=partNumber;
        this.serialNumber=serialNumber;
        // this.cost = cost;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
    }


}

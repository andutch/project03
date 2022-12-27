export class Item {

    name: string;
   
    description: string;

    serialNumber: string;

    partNumber: string;

    cost: number;

    quantity: number;

    imageUrl: string;

    constructor(name:string, decription:string, partNumber: string, serialNumber: string, cost: number, quantity: number, imageUrl:string) {

        this.name = name;
        this.description=decription;
        this.partNumber=partNumber;
        this.serialNumber=serialNumber;
        this.cost = cost;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
    }


}

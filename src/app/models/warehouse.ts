import { Item } from "./item";


export class Warehouse {
    address: string;

    warehouseId:string;
   
    grid: string;

 
    contactEmail: string;

    imageUrl: string;

    description: string;


////////////////
    inventory: Item[];

    constructor(address:string, warehouseId:string, grid:string, 
        contactEmail: string, imageUrl: string, description:string, inventory:Item[]) {

        this.address = address;
        this.warehouseId=warehouseId;
        this.grid=grid;
        this.contactEmail=contactEmail;
        this.imageUrl=imageUrl;
        this.description=description;

///////////////////////////
        this.inventory=inventory;
      
    }

}

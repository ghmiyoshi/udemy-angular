import { DaoInterface } from "./dao-interface";
import { Person } from "../lesson01 - heranca/person";

export class PersonDao implements DaoInterface {

    tableName: string;   
    
    insert(person: Person): boolean {
        console.log("Inserting...", person.toString());
        return true;
    }
    update(person: Person): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    find(id: number) {
        throw new Error("Method not implemented.");
    }
    findAll(): [any] {
        throw new Error("Method not implemented.");
    }


}
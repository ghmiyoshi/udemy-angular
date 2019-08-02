import { DaoInterface } from "./dao-interface";
import { Person } from "../lesson01 - heranca/person";

export class Dao<T> implements DaoInterface<T> {
    tableName: string;    
    
    insert(object: T): boolean {
        console.log("Inserting...");
        return true;
    }
    update(object: T): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    find(id: number): T {
        throw new Error("Method not implemented.");
    }
    findAll(): [T] {
        throw new Error("Method not implemented.");
    }




}
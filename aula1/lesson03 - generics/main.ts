import { DaoInterface } from "./dao-interface";
import { Dao } from "./dao";
import { Person } from "../lesson01 - heranca/person";

let dao: Dao<Person> = new Dao<Person>();
let person: Person = new Person("Gabriel");

dao.insert(person);
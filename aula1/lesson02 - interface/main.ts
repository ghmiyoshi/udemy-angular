import { DaoInterface } from "./dao-interface";
import { PersonDao } from "./person-dao";
import { Person } from "../lesson01 - heranca/person";

let personDao : DaoInterface = new PersonDao();
let person = new Person("Gabriel");

personDao.insert(person);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_dao_1 = require("./person-dao");
var person_1 = require("../lesson01 - heranca/person");
var personDao = new person_dao_1.PersonDao();
var person = new person_1.Person("Gabriel");
personDao.insert(person);
//# sourceMappingURL=main.js.map
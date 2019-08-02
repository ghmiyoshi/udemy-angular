"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonDao = /** @class */ (function () {
    function PersonDao() {
    }
    PersonDao.prototype.insert = function (person) {
        console.log("Inserting...", person.toString());
        return true;
    };
    PersonDao.prototype.update = function (person) {
        throw new Error("Method not implemented.");
    };
    PersonDao.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    PersonDao.prototype.find = function (id) {
        throw new Error("Method not implemented.");
    };
    PersonDao.prototype.findAll = function () {
        throw new Error("Method not implemented.");
    };
    return PersonDao;
}());
exports.PersonDao = PersonDao;
//# sourceMappingURL=person-dao.js.map
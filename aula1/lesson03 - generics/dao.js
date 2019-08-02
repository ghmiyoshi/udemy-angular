"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
    }
    Dao.prototype.insert = function (object) {
        console.log("Inserting...");
        return true;
    };
    Dao.prototype.update = function (object) {
        throw new Error("Method not implemented.");
    };
    Dao.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    Dao.prototype.find = function (id) {
        throw new Error("Method not implemented.");
    };
    Dao.prototype.findAll = function () {
        throw new Error("Method not implemented.");
    };
    return Dao;
}());
exports.Dao = Dao;
//# sourceMappingURL=dao.js.map
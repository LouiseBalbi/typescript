"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejour = [];
        this._sejour.push(new Sejour('Montpellier', 50));
        this._sejour.push(new Sejour('Londres', 200));
        this._sejour.push(new Sejour('Amsterdam', 250));
    }
    SejourService.prototype.getByName = function (nom) {
        for (var _i = 0, _a = this._sejour; _i < _a.length; _i++) {
            var sejour_1 = _a[_i];
            if (sejour_1.getNom() === nom) {
                return sejour_1;
            }
        }
    };
    return SejourService;
}());
var sejourService = new SejourService();
var sejour = sejourService.getByName('Londres');
console.log(sejour);

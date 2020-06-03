var Finoer = (function () {
    function Finoer() {
        this.name = "";
    }
    Finoer.prototype.getName222 = function () {
        console.log(this.name);
        return this.name;
    };
    Finoer.prototype.setName = function (name) {
        this.name = name;
    };
    return Finoer;
}());

export default Finoer;

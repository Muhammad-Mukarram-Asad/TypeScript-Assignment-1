// Basic types in TypeScript:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = "mukii";
var b = 21;
var c = true;
console.log(a, " ", b, " ", c);
// Array in TypeScript:
var array = ["Apple", "Mango"];
console.log("Array before pushing an item is =", array);
array.push("Orange");
console.log("Array after pushing an item is =", array);
// Functions In TypeScript:
var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var btn = document.getElementById("btn");
function Addition(n1, n2) {
    console.log("Addition Starts From Here:");
    var add = n1 + n2;
    console.log("The sum of the given two numbers is = ", add);
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    Addition(+number1.value, +number2.value);
});
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    return Product;
}());
var product1 = new Product(1, "Lays", 60);
console.log(product1);
// getters and setters:
var Product2 = /** @class */ (function () {
    function Product2(_id, _name, _price) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
    }
    Object.defineProperty(Product2.prototype, "Id", {
        // make sure to not match the name of get method with the name of return value:
        /// get id(): number { return this.id} --> in this case, it will give an error.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product2.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (!newName) {
                throw new Error("Name can't be empty string...");
            }
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product2.prototype, "Price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    return Product2;
}());
var product2 = new Product2(2, "cat", 15000);
console.log("product2 details below: ");
console.log(product2.Id);
console.log(product2.Name);
console.log(product2.Price);
product2.Name = "Persian_Cat";
console.log(product2.Name);
// Inhertance in TS:
var ClothingProduct = /** @class */ (function (_super) {
    __extends(ClothingProduct, _super);
    function ClothingProduct(id, name, price, _colors, _size) {
        var _this = _super.call(this, id, name, price) || this;
        _this._colors = _colors;
        _this._size = _size;
        return _this;
    }
    ;
    return ClothingProduct;
}(Product));
var tShirt = new ClothingProduct(10, "washingWear", 2500, "black", "M");
console.log(tShirt);
// Singeltons in TS:
// we use private before the constructor for making it singelton:
var Util = /** @class */ (function () {
    function Util() {
    }
    return Util;
}());
// const url1 = new Util();  --> error

// Basic types in TypeScript:

let a = "mukii";
let b = 21;
let c = true;
console.log(a," ", b," ", c);

// Array in TypeScript:
const array:String[] = ["Apple", "Mango"];
console.log("Array before pushing an item is =",array);

array.push("Orange");
console.log("Array after pushing an item is =",array);

// Functions In TypeScript:

let number1 = document.getElementById("num1")! as HTMLInputElement;
let number2 = document.getElementById("num2")! as HTMLInputElement;
let btn = document.getElementById("btn")! as HTMLInputElement;


function Addition(n1: number,n2:number)
{
    console.log("Addition Starts From Here:");
    let add = n1 + n2;
    console.log("The sum of the given two numbers is = ", add);
}

btn?.addEventListener("click", function () {
    Addition(+number1.value , +number2.value);
     
});


class Product {
    constructor(private id: number, private name: string, private price: number)
    {}
        public getId(): number {
            return this.id;
        }
        public getName(): string {
            return this.name;
        }
        public getPrice(): number {
            return this.price;
        }    
}

const product1 = new Product(1, "Lays", 60);
console.log(product1);

// getters and setters:

class Product2 {
    constructor(private _id: number, private _name: string, private _price: number)
    {}
    // make sure to not match the name of get method with the name of return value:
    /// get id(): number { return this.id} --> in this case, it will give an error.
         get Id(): number {
            return this._id;
        }
         get Name(): string {
            return this._name;
        }
         get Price(): number {
            return this._price;
        }    

        set Name (newName: string){
            if(!newName)
            {
                throw new Error ("Name can't be empty string...")
            }
            this._name = newName;
        }
}

const product2 = new Product2(2, "cat", 15000);
console.log("product2 details below: ");
console.log(product2.Id);
console.log(product2.Name);
console.log(product2.Price);

product2.Name = "Persian_Cat";
console.log(product2.Name);

// Inhertance in TS:

class ClothingProduct extends Product {
    constructor(
        id: number,
        name: string,
        price: number,
        private _colors: string,
        private _size: "S" | "M" | "L" | "XL"
    ) 
    {super (id, name, price)};
}

const tShirt = new ClothingProduct(10,"washingWear", 2500,"black","M");
console.log(tShirt);

// Singeltons in TS:
// we use private before the constructor for making it singelton:

class Util{
    private constructor() {}
}
// const url1 = new Util();  --> error


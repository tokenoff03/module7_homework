function ElectricalAppliances (){
    this.activated = function(activated){
        console.log(`${this.name} is ${activated}`);
    }
}

function Laptop (name, hz/*сколько герц*/, demand){
    this.name = name;
    this.hz = hz;
    this.electricalDemand = demand;
}

function Lamp (name, demand){
    this.name = name;
    this.electricalDemand = demand;
}

function Printer (name, demand){
    this.name = name;
    this.electricalDemand = demand;
}

Laptop.prototype = new ElectricalAppliances;
Lamp.prototype = new ElectricalAppliances;
Printer.prototype = new ElectricalAppliances;

const lapTop = new Laptop("Asus", 144, 5);
const lamp = new Lamp("Lamp", 3);
const printer = new Printer("3D printer", 4);

Laptop.prototype.showVideo = function(nameOfVideo) {
    console.log(`Laptop is showing "${nameOfVideo}"`);
}

Printer.prototype.print = function(){
    console.log("Printer is printing");
}

lapTop.activated("On");
printer.activated("On");
lamp.activated("Off");
printer.print(); //Действует принтер
lapTop.showVideo("Собеседование Front-end developer")
console.log(lapTop, lamp, printer);




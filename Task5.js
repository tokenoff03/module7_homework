class ElectricalAppliances {
    activated (activated){
        console.log(`${this.name} is ${activated}`);
    }
}

class Laptop extends ElectricalAppliances {
    constructor (name, hz/*сколько герц*/, demand){
        super(name);
        this.name = name;
        this.hz = hz;
        this.electricalDemand = demand;
    }

    showVideo(nameOfVideo) {
        console.log(`${this.name} is showing "${nameOfVideo}"`);
    }
}

class Lamp extends ElectricalAppliances {
    constructor (name, demand){
        super(name);
        this.name = name;
        this.electricalDemand = demand;
    }
}

class Printer extends ElectricalAppliances {
    constructor (name, demand){
        super(name);
        this.name = name;
        this.electricalDemand = demand;
    }

    print(){
        console.log("Printer is printing");
    }
}

const lapTop = new Laptop("Asus", 144, 5);
const lamp = new Lamp("Lamp", 3);
const printer = new Printer("3D printer", 4);

lapTop.activated("On");
printer.activated("On");
lamp.activated("Off");
printer.print(); //Действует принтер
lapTop.showVideo("Собеседование Front-end developer")
console.log(lapTop, lamp, printer);

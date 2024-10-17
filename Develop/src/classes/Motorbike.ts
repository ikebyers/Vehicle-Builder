// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

  // Motorbike class that extends Vehicle class
class Motorbike extends Vehicle {
  // Declare properties of the Motorbike class
  // The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];


  // Create a constructor that accepts the properties of the Motorbike class
    // The constructor should call the constructor of the parent class, Vehicle
    // The constructor should initialize the properties of the Motorbike class
    // The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not

  // Constructor for the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    // Check if the wheels array has 2 elements
    // If not, create 2 new Wheel objects
    // Otherwise, use the provided wheels array
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }
  // Implement the wheelie method
    // The method should log the message "Motorbike [make] [model] is doing a wheelie!"
  wheelie() {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`)
  }
    // select vehicle
    // select perform action
    // if selected vehicle is motorbike, show "wheelie" action option

  // Override the printDetails method from the Vehicle class
  // The method should call the printDetails method of the parent class
  // The method should log the details of the Motorbike
  // The details should include the VIN, make, model, year, weight, top speed, color, and wheels
  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(
      `Front Wheel: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Rear Wheel: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
  }
}

// Export the Motorbike class as the default export
export default Motorbike;

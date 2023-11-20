//Class المركبات
class Vehicle {
  constructor(name, manufacturer, id) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.id = id;
  }
}
// Class السيارة
class Car extends Vehicle {
  constructor(name, manufacturer, id, type) {
    super(name, manufacturer, id);
    this.type = type;
  }
}

// Class الطائرة
class Plane extends Vehicle {
  constructor(name, manufacturer, id, type) {
    super(name, manufacturer, id);
    this.type = type;
  }
}

// Class الموظفين
class Employee {
  constructor(name, id, dateOfBirth) {
    this.name = name;
    this.id = id;
    this.dateOfBirth = dateOfBirth;
  }
}

// Class السائق
class Driver extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super(name, id, dateOfBirth);
    this.licenseID = licenseID;
  }
}

// Class الطيّار
class Pilot extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super(name, id, dateOfBirth);
    this.licenseID = licenseID;
  }
}

// مصفوفة المركبات
const vehicles = [
  new Car("Car1", "Manufacturer1", "C001", "Gas"),
  new Car("Car2", "Manufacturer2", "C002", "Electric"),
  new Car("Car3", "Manufacturer3", "C003", "Hybrid"),
  new Plane("Plane1", "Manufacturer4", "P001", "Commercial"),
  new Plane("Plane2", "Manufacturer5", "P002", "Private"),
];

// مصفوفة الموظفين
const employees = [
  new Pilot("Pilot1", 1, "01/01/1990", "P001"),
  new Driver("Driver1", 2, "02/02/1995", "D001"),
];

//  مصفوفة الحجوزات
const reservations = [];

// دالة للتحقق والحجز
function checkAndReserve(employeeId, vehicleId) {
  const employee = employees.find((emp) => emp.id === employeeId);
  const vehicle = vehicles.find((veh) => veh.id === vehicleId);

  if (employee && vehicle) {
    if (
      (employee instanceof Driver && vehicle instanceof Car) ||
      (employee instanceof Pilot && vehicle instanceof Plane)
    ) {
      console.log("Cannot assign the employee to the vehicle.");
    } else {
      const reservation = {
        reservationDate: new Date(),
        employeeId: employeeId,
        vehicleId: vehicleId,
        reservationID: reservations.length + 1,
      };
      reservations.push(reservation);
      console.log("Reservation successful:", reservation);
    }
  } else {
    console.log("Employee or vehicle not found.");
  }

}

// استخدام الدالة
checkAndReserve(1, "C001");
checkAndReserve(2, "P001");

// طباعة محتوى المصفوفة باستخدام map
console.log("Array content:");
reservations.map((reservation) => console.log(reservation));


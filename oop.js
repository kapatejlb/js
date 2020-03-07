class Vector {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  valueOf() {
    return "Vector";
  }
  toString() {
    return "Vector(" + this.x + ", " + this.y + ", " + this.z + ")";
  }
}

Vector.prototype.scalar = function() {
    return(new Vector(first.x * second.x, first.y * second.y, first.z * second.z));
};
Vector.prototype.plus = function(first, second) {
    return(new Vector(first.x + second.x, first.y + second.y, first.z + second.z));
};

Vector.prototype = {
  get getLength() {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
  }
};

let first = new Vector(1, 2, 3);
let second = new Vector(2, 3, 5);

alert(Vector.prototype.plus(first, second).toString())

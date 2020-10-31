// 1

/*function sliseArray(indexMin, indexMax) {
    var newMass = [];
    var count = 0;

    if (indexMin < 0) {
        indexMin = this.mass.length + indexMin;
    }
    if (indexMax < 0) {
        indexMax = this.mass.length + indexMax;
    }


    if (arguments.length == 2) {
        for (var i = indexMin; i < indexMax; i++) {
            newMass[count] = this.mass[i];
            count++;
        }
    }
    else if (arguments.length == 1) {
        for (var i = indexMin, size = this.mass.length; i < size; i++) {
            newMass[count] = this.mass[i];
            count++;
        }
    }

    return newMass;
}

var mass = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(sliseArray(-4, -2));*/

// 2

const farmAccountLog = [
    {
      id: 11,
      type: "Meat",
      class: "Cattle",
      family: "Cow",
      name: "Wiz",
      gender: "♂",
      age: 10
    },
    {
      id: 12,
      type: "Milk",
      class: "Cattle",
      family: "Cow",
      name: "Roseanne",
      gender: "♀",
      age: 2
    },
    {
      id: 13,
      type: "Egg",
      class: "Birds",
      family: "Chicken",
      name: "Bam",
      gender: "♀",
      age: 5
    },
    {
      id: 14,
      type: "Meat",
      class: "Birds",
      family: "Goose",
      name: "Gobble",
      gender: "♂",
      age: 8
    },
    {
      id: 15,
      type: "Milk",
      class: "Cattle",
      family: "Goat",
      name: "Anti",
      gender: "♀",
      age: 9
    },
    {
      id: 16,
      type: "Income",
      class: "Cattle",
      family: "Cow",
      name: "Gizmo",
      gender: "♂",
      age: 10
    },
    {
      id: 17,
      type: "Egg",
      class: "Birds",
      family: "Quail",
      name: "Maya",
      gender: "♀",
      age: 2
    },
    {
      id: 18,
      type: "Meat",
      class: "Birds",
      family: "Rooster",
      name: "Toto",
      gender: "♂",
      age: 1
    },
    {
      id: 18,
      type: "Milk",
      class: "Cattle",
      family: "Sheep",
      name: "Hannah",
      gender: "♀",
      age: 5
    },
    {
      id: 19,
      type: "Milk",
      class: "Cattle",
      family: "Cow",
      name: "Sparky",
      gender: "♀",
      age: 7
    },
    {
      id: 20,
      type: "Income",
      class: "Cattle",
      family: "Goat",
      name: "Charlie",
      gender: "♂",
      age: 3
    }
];

var massF = [];

for (var i = 0, size = farmAccountLog.length; i < size; i++) {
  massF[i] = farmAccountLog[i].family;  
}

console.log(massF);

function reduce(array, callback, initialValue) {

  for (var i = 0, size = array.length; i < size; i++) {
    count = callback(array, array[i]);
  }
};

var result = massF.reduce(function(acc, el) {
  acc[el] = (acc[el] || 0) + 1;
  return acc;
}, {});

console.log(result);
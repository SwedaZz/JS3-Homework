// Užduotis su amžiumi
const gimMet = 1991;
let data = 2022;

console.log(data - gimMet);

// Užduotis su automobiliais

let car = "BM";

switch(car){
    case "VW":
    case "Audi":
    case "Bentley":
    case "Bugatti":
    case "Lamborghini":
    case "Porsche":
        console.log("VW group");
        break;
    case "BMW":
    case "Mini":
    case "Rolls-Royce":
        console.log("BMW group");
        break;
    default:
        console.log("Amerikietiškas automobilis")
}

// užduotis su daržovėmis

let userInput = "salota";
switch(userInput){
    case "obuolys":
    case "apelsinas":
    case "mardarinas":
    case "melionas":
    case "arbūzas":
        console.log("Vaisius");
        break;
    case "morka":
    case "svogūnas":
    case "pomidoras":
    case "salota":
    case "agurkas":
        console.log("daržovė");
        break;
    default:
        console.log("nenustatyta");
}

// Užduotis su savaitės diena BLOGAS

let weekDay = 4;

switch(weekDay){
    case 0:
        console.log("Pirmadienis");
        break;
    case 1:
        console.log("Antradienis");
        break;
    case 2:
        console.log("Trečiadienis");
        break;
    case 3:
        console.log("Ketvirtadienis");
        break;
    case 4:
        console.log("Penktadienis");
        break;
    case 5:
        console.log("Šeštadienis");
        break;
    case 6:
        console.log("Sekmadienis");
        break;
    default:
        console.log("Tokios dienos nėra")
}

// Užduotis su savaitės diena GERAS

switch(weekDay){
    case 0:
        weekDay = "Pirmadienis";
        break;
    case 1:
        weekDay = "Antradienis";
        break;
    case 2:
        weekDay = "Trečiadienis";
        break;
    case 3:
        weekDay = "Ketvirtadienis";
        break;
    case 4:
        weekDay = "Penktadienis";
        break;
    case 5:
        weekDay = "Šeštadienis";
        break;
    case 6:
        weekDay = "Sekmadienis";
        break;
    default:
        weekDay = "Tokios dienos nėra";
}

console.log(weekDay);

// Užduotis su vardo ilgiu

let name = "tadas";

name = name.length > 5 ? "Long name" : "Short name";

console.log(name);

// Užduotis su galimybe vairuoti

let legalAge = 23;
let clientAge = 130;

console.log(legalAge < clientAge ? "Can drive" : "Can't drive");

// double ternary operator

console.log(clientAge < 0 || clientAge > 120 ? "Invalid age" : legalAge < clientAge ? "Can drive" : "Can't drive");

// Užduotis su phone

let phone = "iPhone";

isIphoneUser = phone === "iPhone" ? "True" : "False";

console.log(isIphoneUser);

// Vardas prasisuka 10 kartų

for(let n=0; n < 10; n++ ){
    console.log("Tadas");
}

// tiek vardas, tiek kiek kartų kartos yra kintamieji

let name1 = "Tadas";
let i = 2;

for(i; i < 10; i++ ){
    console.log(name1)
}

// Prie savo vardo atspaudink ir 'i' raidę

let name2 = "Swedaz";
let a = 3;

for(a; a < 10; a++ ){
    console.log(name2 + a)
}

// Parašyk for loopą, kuris atspaudins nuo 10 iki 1 countdown konsolėje

let c = 10;

for(c; c >= 1; c-- ){
    console.log(c)
}
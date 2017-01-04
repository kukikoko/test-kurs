var message = "in global";

console.log ("hello" + message);

function test1 (a) {
		return a / 10;
	}

var b = 3 + 8;

console.log (b);
console.log (test1(150));


if (b===13 || b===11) {
	console.log ("zgadza sie");
}
else {
	console.log ("nie zgadza sie");
}

for (b; b>1; b = b-3) {
	console.log (b);
}

var company = new Object();
company.name = "Sodom";
company.structure = new Object();
company.structure.prezes = "Pawel Banasiewicz";
company.structure.sekretarka = "Ania";
company.structure.robotnik = "Adam";

console.log (company);
console.log ("Przedsiębiorstwo: " + company["name"]);
console.log ("Struktura: ");
console.log ("Prezes: " + company.structure["prezes"]);
console.log ("Sekretarka: " + company.structure["sekretarka"]);
console.log ("Robotnik: " + company.structure["robotnik"]);

var sodom = {
	prezes: "Pawel",
	samochody: {
		sluzbowy: "Mercedes",
		prywatny: "Bmw"
	},
	warosc: 100
	};

console.log (sodom);




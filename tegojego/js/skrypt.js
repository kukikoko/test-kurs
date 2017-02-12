(function () {
	'use strict';

	angular.module('Aplikacja', [])
	.controller('Kontroler', Kontroler)
	.service ('Serwis', Serwis)
	.component ('komponent', 
		{
			templateUrl: 'ins1.html',
			controller: KontrolerKomponentu,
			bindings:
						{
							rzeczy: '<',
							tytul: '@',
							wywal: '&'
						}
				});
	
	KontrolerKomponentu.$inject = ['$scope', '$element']
	function KontrolerKomponentu ($scope, $element)
		{
			var $ctrl = this;
			var wyswietlamy;
			$ctrl.ListaZapasowa = [];
			$ctrl.cena = 0;


			$ctrl.reseta = function ()
				{
					console.log ("A HUJA TAM!");
					$ctrl.ListaZapasowa.length = 0;
					for (var i=0; i<$ctrl.rzeczy.length; i++)
					{
						$ctrl.ListaZapasowa.push($ctrl.rzeczy[i]);
					}
					wyswietlamy = 1;
				};


			$ctrl.zamow = function ()
				{
					var sumowanie = 0;
					for (var i=0; i<$ctrl.ListaZapasowa.length; i=i+1)
						{
							sumowanie =
							sumowanie+$ctrl.ListaZapasowa[i].cena;
						};
					$ctrl.cena = Math.round(sumowanie*100)/100;
					wyswietlamy = 2;
				};

			$ctrl.won = function (co)
				{
					$ctrl.ListaZapasowa.splice(co, 1);
					if ($ctrl.ListaZapasowa.length === 0)
						{ 
							wyswietlamy = 3;
						};
				};


			$ctrl.$onInit = function ()
				{
					console.log ("ON INIT");
					$ctrl.reseta ();
				};

			$ctrl.$onChanges = function (changeObj)
				{
					console.log ("changes: ",changeObj);
				}


			$ctrl.remove = function () 
				{
			    	$ctrl.wywal();
				};


			$ctrl.$doCheck = function ()
				{
					if (wyswietlamy === 2)
							{
								var Elem1 =	$element.find('.zamowienie');
								var Elem2 = $element.find('.blad');
								var Elem3 = $element.find('.kupilem');
								Elem1.slideDown(900);
								Elem2.slideUp(900);
								Elem3.slideUp(900);
							}
					else
					{
					if (wyswietlamy === 1)
							{
								var Elem1 =	$element.find('.zamowienie');
								var Elem2 = $element.find('.blad');
								var Elem3 = $element.find('.kupilem');
								Elem1.slideUp(900);
								Elem2.slideUp(900);
								Elem3.slideDown(900);
							}
					else 
							{
								var Elem1 =	$element.find('.zamowienie');
								var Elem2 = $element.find('.blad');
								var Elem3 = $element.find('.kupilem');
								Elem1.slideUp(900);
								Elem2.slideDown(900);
								Elem3.slideUp(900);
							};
					};
				};
		}

	Kontroler.$inject = ['Serwis'];
	function Kontroler (Serwis)
		{
			var k = this;
			k.soundIcon = "pics/rura.png";
			k.soundText = "wyłącz muzę!!!";
			k.login = "";
			k.haslo = "";
			k.lista = Serwis.przekaz ();
			k.wejscie = false;
			k.muza = new Audio("music/tegies.mp3");
			k.muza.autoplay = true;
			k.muza.loop = true;


			k.dodaj = function ()
				{
					var pozycja = {lg: k.login, ps: k.haslo};
					k.wejscie = Serwis.sprawdz (pozycja);
					k.login = "";
					k.haslo = "";
				};

			k.nuta = function ()
				{
					console.log (k.muza);
					if (k.soundIcon === "pics/rura.png")
					{
						k.soundIcon = "pics/morda.png";
						k.soundText = "za cicho tu!";
						k.muza.pause();
					}
					else
					{
						k.soundIcon = "pics/rura.png";
						k.soundText = "wyłącz muzę!!!";
						k.muza.play();
					};
				};

			k.wywal = function ()
				{
					k.wejscie = Serwis.reseta ();
				};
		}
	
	function Serwis ()
		{
			var s = this;
			s.menu = [
			{nazwa: "Lubię Paczeć", ilosc: "2015", cena: 3.41},
			{nazwa: "Tego Jego", ilosc: "2014", cena: 3.22},
			{nazwa: "Los Iwiczna Locos", ilosc: "2014", cena: 2.89},
			{nazwa: "Gestapowski Płaszcz Życia", ilosc: "2017", cena: 4.43},
			{nazwa: "Skrzydła z Tłuszczu", ilosc: "2017", cena: 3.99},
			{nazwa: "Pogwałcono Prawa Me", ilosc: "2018", cena: 1.87},
			{nazwa: "Dintojra", ilosc: "2018", cena: 2.33},
			{nazwa: "Kiedy Idę Najebany (ulicami mego miasta w dzień)", ilosc: "2019", cena: 5.23},
			{nazwa: "Eksmisja Komornicza", ilosc: "2019", cena: 3.43},
			{nazwa: "Zimmmmmmno Mu", ilosc: "2019", cena: 2.97},
			{nazwa: "Krójże Mnie Tasakiem Losu", ilosc: "2020", cena: 8.32},
			{nazwa: "Wolał wypić niż zaruchać", ilosc: "2020", cena: 4.31},
			{nazwa: "Zakład mięsny w Kole (remix 2020)", ilosc: "2020", cena: 9.32},
			{nazwa: "Skłóceni przy wódce", ilosc: "2023", cena: 10.22},
			{nazwa: "Ostatniej zimy przestał stawać mi", ilosc: "2025", cena: 12.32},
			{nazwa: "O kosturze i w żebraczym łachu", ilosc: "2027", cena: 14.33},
			{nazwa: "Królewskie Opierdziny - The Greatest Hits", ilosc: "2030-2033", cena: 33.22}];

			s.sprawdz = function (co)
				{
					if (co.lg === "tegojego" && co.ps === "push")
					{
						return true;
					}
					else { return false };
				};

			s.przekaz = function ()
				{
					return s.menu;
				};

			s.reseta = function ()
				{
					return false;
				}
		};

})();
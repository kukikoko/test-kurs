(function () {

	'use strict';


	angular.module('CounterpartIssues', ['ngAudio', 'ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
	.config(RoutesConfig)
	.controller('PortfolioCtrl', PortfolioCtrl)
	.controller('ContactCtrl', ContactCtrl)
	.controller('HomeCtrl', HomeCtrl)
	.controller('AboutCtrl', AboutCtrl)
	.controller('OfferCtrl', OfferCtrl)
	.service('Serwis', Serwis);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) 
		{
			
			$urlRouterProvider.otherwise('/');

			$stateProvider

			.state('home', {
    		url: '/',
    		templateUrl: 'sources/chunks/home.html',
    		controller: 'HomeCtrl as k'
			})

			.state('about', {
			url: '/about',
			templateUrl: 'sources/chunks/about.html',
			controller: 'AboutCtrl as k'
			})

			.state('offer', {
			url: '/offer',
			templateUrl: 'sources/chunks/offer.html',
			controller: 'OfferCtrl as k'
			})

			.state('portfolio', {
			url: '/portfolio',
			templateUrl: 'sources/chunks/portfolio.html',
			controller: 'PortfolioCtrl as k'
			})

			.state('contact', {
			url: '/contact',
			templateUrl: 'sources/chunks/contact.html',
			controller: 'ContactCtrl as k'
			})

		};


PortfolioCtrl.$inject = ['Serwis'];
function PortfolioCtrl (Serwis)
	{
		var k = this;
		k.photos = [];

		k.photos = [
		{
			image: 'sources/media/carousel/s1.jpg',
			text: "jadalnia",
			id : 1
		},
		{
			image: 'sources/media/carousel/s2.jpg',
			text: "pracownia",
			id : 2
		},
		{
			image: 'sources/media/carousel/s3.jpg',
			text: "bidet",
			id : 3
		},		
		{
			image: 'sources/media/carousel/s4.jpg',
			text: "wanna",
			id : 4
		},
		{
			image: 'sources/media/carousel/s5.jpg',
			text: "sracz",
			id : 5
		},
		{
			image: 'sources/media/carousel/s6.jpg',
			text: "dla pana starosty",
			id : 6
		},
		{
			image: 'sources/media/carousel/s7.jpg',
			text: "on Jamaica very nice",
			id : 7
		},
		{
			image: 'sources/media/carousel/s8.jpg',
			text: "everybody smokes cigars yo!",
			id : 8
		},
		{
			image: 'sources/media/carousel/s9.jpg',
			text: "koniec!",
			id : 9
		}];

		k.myInterval = 3000;

		var startUp = Serwis.init (3);
		k.soundIcon = startUp.music;
		k.soundShutUp = startUp.sound;

		k.nuta = function (what)
		{
			if (what === 1)
			{
				k.soundIcon = Serwis.nuta (1);
			} else
			{
				k.soundShutUp = Serwis.nuta (2);
			};
		};



		k.modal = function (numer)
			{
				console.log (numer);
			};

		console.log (k.photos);
	};




ContactCtrl.$inject = ['Serwis'];
function ContactCtrl (Serwis)
	{
		var k = this;
		k.showform = false;
		k.showass = false;
		k.paxTu1 = false;
		k.paxTu2 = false;
		k.paxTu3 = false;
		k.paxTu4 = false;
		k.paxTu5 = false;
		k.paxTu6 = false;
		k.paxTu7 = false;
		k.kiss = false;

		k.ContactDetails = {
			FirstName : "",
			Email : "",
			PhoneNumber : "",
			Subject : "",
			Comment : ""
		};

		var startUp = Serwis.init (4);
		k.soundIcon = startUp.music;
		k.soundShutUp = startUp.sound;

		k.nuta = function (what)
		{
			if (what === 1)
			{
				k.soundIcon = Serwis.nuta (1);
			} else
			{
				k.soundShutUp = Serwis.nuta (2);
			};
		};


		k.submitContactForm = function ()
		{
			console.log (k.ContactDetails);
			k.showform = false;
    		setTimeout(function(){ k.showass = true; }, 3000);
    		setTimeout(function(){ k.paxTu1 = true; }, 4100);
     		setTimeout(function(){ k.paxTu2 = true; }, 5200);
    		setTimeout(function(){ k.paxTu3 = true; }, 6300);
    		setTimeout(function(){ k.paxTu4 = true; }, 7400);
    		setTimeout(function(){ k.paxTu5 = true; }, 8500);
    		setTimeout(function(){ k.paxTu6 = true; }, 9600);
    		setTimeout(function(){ k.paxTu7 = true; }, 10700);
    		setTimeout(function(){ Serwis.kissme(); k.kiss = true; }, 14000);
		};

    setTimeout(function(){ k.showform = true; }, 3000);

	};




HomeCtrl.$inject = ['Serwis'];
function HomeCtrl (Serwis)
	{
		var k = this;
		k.hello = false;
		var startUp = Serwis.init (0);
		k.soundIcon = startUp.music;
		k.soundShutUp = startUp.sound;

		k.nuta = function (what)
		{
			if (what === 1)
			{
				k.soundIcon = Serwis.nuta (1);
			} else
			{
				k.soundShutUp = Serwis.nuta (2);
			};
		};

    	setTimeout(function(){ k.hello = true; }, 3000);

	};




AboutCtrl.$inject = ['Serwis'];
function AboutCtrl (Serwis)
	{
		var k = this;
		k.kontener1 = false;
		k.kontener2 = false;
		k.kontener3 = false;
		k.fotopad = false;
		k.mamba = false;
		k.soYoSpeak = false;
		k.alla = false;
		k.letThereBeMusic = false;
		k.writings = "";
		k.domek = false;
		k.whichLetter = 0;
		k.timeout = null;
		k.textToType = "Dzień dobry, tutaj napiszę niedługo coś bardzo mądrego o sobie. Na razie niestety nie mam gotowego tekstu, więc pochwalę się wam rysunkiem domu."




		function typeIt ()
		{
			console.log (k.timeout);
			if (k.timeout != null) { clearTimeout (k.timeout) };

			 

			if (k.whichLetter < k.textToType.length)
			{
			k.timeout =	setTimeout(function()
				{
					Serwis.typeme ();
					k.writings = k.writings + k.textToType.charAt(k.whichLetter);
					k.whichLetter = k.whichLetter + 1;
					typeIt ();
				}, (100 + Math.floor((Math.random() * 100) + 1)));
			} else
			{ setTimeout(function(){ k.domek = true; }, 2000); };
		};


		console.log (k.writings.length);

		var startUp = Serwis.init (1);
		k.soundIcon = startUp.music;
		k.soundShutUp = startUp.sound;

		k.nuta = function (what)
		{
			if (what === 1)
			{
				k.soundIcon = Serwis.nuta (1);
			} else
			{
				k.soundShutUp = Serwis.nuta (2);
			};
		};
    	setTimeout(function(){ k.kontener1 = true; }, 6000);
    	setTimeout(function(){ k.kontener2 = true; }, 8000);
    	setTimeout(function(){ k.kontener3 = true; }, 3000);
    	setTimeout(function(){ k.fotopad = true; }, 2500);
    	setTimeout(function(){ k.mamba = true; }, 1000);
   		setTimeout(function(){ k.alla = true; }, 1500);

    	setTimeout(function(){ k.soYoSpeak = true; 

    	setTimeout(function(){ typeIt (); }, 2400);
    	}, 8500);


    	setTimeout(function(){ k.letThereBeMusic = true; }, 1900);
	};




OfferCtrl.$inject = ['Serwis'];
function OfferCtrl (Serwis)
	{
		var k = this;
		var startUp = Serwis.init (2);
		k.soundIcon = startUp.music;
		k.soundShutUp = startUp.sound;
		k.particularOffer = {};

		k.nuta = function (what)
		{
			if (what === 1)
			{
				k.soundIcon = Serwis.nuta (1);
			} else
			{
				k.soundShutUp = Serwis.nuta (2);
			};
		};


    	k.goForIt = function (section)
    	{
    		k.particularOffer = Serwis.passOffer (section);
    		$('#okienkoOfert').modal();
    	};

    	k.die = function ()
    	{
    		k.particularOffer.length = 0;
    	};

	};




Serwis.$inject = ['ngAudio'];
function Serwis (ngAudio)
	{
		var s = this;
		s.soundIcon = "sources/media/icons/big-pause-button.png";
		s.soundShutUp = "sources/media/icons/big-speaker.png";
		s.bessos = ngAudio.load("sources/media/sounds/kiss.wav");
		s.typing = ngAudio.load("sources/media/sounds/typing.wav");
		s.muza = [];
		s.muza[0] = ngAudio.load("sources/media/sounds/home_song.mp3");
		s.muza[1] = ngAudio.load("sources/media/sounds/about_song.mp3");
		s.muza[2] = ngAudio.load("sources/media/sounds/offer_song.mp3");
		s.muza[3] = ngAudio.load("sources/media/sounds/portfolio_song.mp3");
		s.muza[4] = ngAudio.load("sources/media/sounds/contact_song.mp3");
		s.muza[0].volume = 0.2; s.muza[0].unbind();
		s.muza[1].volume = 0.2; s.muza[1].unbind();
		s.muza[2].volume = 0.4; s.muza[2].unbind();
		s.muza[3].volume = 0.2; s.muza[3].unbind();
		s.muza[4].volume = 0.15; s.muza[4].unbind();
		s.bessos.unbind();
		s.typing.unbind();

		s.dj = 1;

		s.offerList = [];

		s.offerList[0] = {
		title : "Cel",
		maintext : "Moja oferta skierowana jest do osób, które poszukują rozwiązań ściśle dopasowanych do swoich oczekiwań. Decyzja, jaka forma współpracy zostanie podjęta - zależy od Ciebie.Może być to jedynie porada, wsparcie koncepcyjne, aranżacja pojedynczego pomieszczenia,jak również projekt i wizualizacja wraz projektem wykonawczym całego domu łącznie z nadzorem autorskim.",
		listExistance : false,
		photo : 'sources/media/pics/Monika.jpg' };

		s.offerList[1] = {
		title : "Planowanie",
		maintext : "Po wykonaniu inwentaryzacji istniejących pomieszczeń omawiam z Tobą wszelkie kwestie związane z ich przeznaczeniem, stylem i charakterem. Poznaję Twoje wymagania i oczekiwania, dzięki czemu jestem w stanie bardziej szczegółowo zaplanować wstępną aranżację przestrzeni i wydobyć z niej to, co najlepsze. Pod uwagę branych jest bardzo wiele czynników, które wpływają na dalszy projekt:",
		listExistance : true,
		list : [
		"styl życia i ilość spędzanego czasu w danej przestrzeni",
		"liczba i wiek domowników",
		"podział funkcjonalny i hierarchia pomieszczeń",
		"ulubione tkaniny, faktury, materiały wykończeniowe, urządzenia, meble, detale, rośliny, rodzaje oświetlenia",
		"charakter i kolorystyka wnętrza",
		"indywidualne rozwiązania i koncepcje technologiczne - sala kinowa, piwniczka na wino, sala gier, strefa SPA i relaksu, przestrzeń dla zwierząt, inteligentny system sterowania, solary, itp."
		],
		photo : 'sources/media/pics/rzut_parteru.png' };

		s.offerList [2] = {
		title : "Koncepcja",
		maintext : "Prezentuję zazwyczaj dwie koncepcje podziału i zagospodarowania pomieszczeń - podpowiadam, jak lepiej rozwiązać niektóre problemy związane z ich funkcją, sugeruję zastosowanie odpowiednich zmian tak, aby doskonale pasowały do Twoich wymagań. Na podstawie tak szczegółowo omówionej aranżacji podczas kilku spotkań dokonujemy wstępnego doboru materiałów i rozwiązań architektonicznych, co w przyszłości przekształci się w spójny i przemyślany w całości projekt. Powinno zająć to około 3 - 5 spotkań",
		listExistance : false,
		photo : 'sources/media/pics/koncept.jpg'		
		};

		s.offerList [3] = {
		title : "Wizualizacja",
		maintext : "Teraz mogę przejść do stworzenia fotorealistycznej wizualizacji projektowanej przestrzeni.Na tym etapie wykonuję szczegółowy projekt pomieszczenia lub pomieszczeń.Proponuję zastosowanie określonych materiałów i kolorów, wybranych mebli czy też rodzaju oświetlenia. Prezentuję kilka wariantów przez co można swobodnie eliminować lub dodawać różne elementy oraz rozwijać stworzoną wizję w formę, która nabierze finalnego kształtu, zgodnego z Twoimi oczekiwaniami. Czas na przygotowanie wizualizacji jest uzależniony od ilości pomieszczeń i waha się od 1 do 2 tygodni.",
		listExistance : false,
		photo : 'sources/media/pics/wizualizacja.jpg'
		};

		s.offerList [4] = {
		title : "Projekt",
		maintext : "W zależności od liczby potrzebnych rysunków do wykonania czas potrzebny na ten etap, to średnio 2 tygodnie. Tworzone są wszelkie rysunki architektoniczne (rzuty, przekroje, widoki) oraz zestawienia, które pozwolą wszystkim wykonawcom wdrożyć naszą wizję w życie, m.in.:",
		listExistance : true,
		list : [
		"rzut i przekroje usytuowania wszystkich urządzeń i mebli we wnętrzu",
		"rzut podłóg i sufitów",
		"widoki rozkładu płytek ceramicznych na podłodze i ścianach",
		"rzuty i widoki przedstawiające miejsca przyłączy hydraulicznych",
		"rzut instalacji elektrycznej wraz z aranżacją oświetlenia",
		"rzut z naniesieniem usytuowania i rodzaju ogrzewania wewnętrznego",
		"rzut z naniesieniem rodzaju i kolorystyki każdej ściany",
		"rzuty i przekroje wszelkich mebli i zabudów pod wymiar",
		"rzut i przekroje schodów wraz z balustradą",
		"zestawienie ilości i rodzaju potrzebnych materiałów: płytek, tkanin, parkietu, drzwi, farb, fug, grzejników, itp.",
		"zestawienie całego wyposażenia wraz z ceną i miejscem zakupu"		
		],
		photo : 'sources/media/pics/projekt.jpg' 
		};

		s.offerList [5] = {
		title : "Nadzór",
		maintext : "Nadzór nad realizacją projektu możesz przejąć sam, jednakże z doświadczenia wiem, że niestety podczas tej czasochłonnej i wymagającej pracy niezwykle często, a można nawet powiedzieć, że zawsze zdarzają się problemy. Naprawdę nikt podejmujący się prac remontowo-budowlanych nie jest w stanie przewidzieć ich skali. Przy udziale tylu osób, które są uzależnione od kolejnego szeregu osób nietrudno o pomyłki i kwestie sporne. Wtedy okazuje się, że trzeba na bieżąco nanosić na projekt zmiany, podejmować szybko decyzje oraz mieć ogromną cierpliwość i wytrwałość. W tak mozolnej pracy niewątpliwie bardzo pomaga wsparcie projektanta. Jego regularna obecność podczas prac, analizowanie i natychmiastowe rozwiązanie problemów powoduje, że oszczędzasz czas i sporo pieniędzy. Zazwyczaj jesteś w pracy, a niektóre kwestie muszą być rozwiązane niezwłocznie.Zrozumie to ten, kto po przyjściu na plac budowy przekona sie, że płytki nie są ułożone tam, gdzie miały być, że ściana jest za krótka, że schody są krzywe, że kąty nie są równe, że okna za wąskie, że sofa nie taka, jak zamówiona, że wylewka za niska, że kabel zatynkowany, że kolor nie taki, że...Podczas nadzoru jestem zobowiązana omówić z każdym wykonawcą wszystkie szczegóły prac oraz dokonać ewentualnych modyfikacji i być na miejscu budowy lub remontu co najmniej raz w tygodniu. Dokonuję wszelkich adnotacji i przekazuję je Tobie, co pozwoli na bieżąco mieć kontrolę nad każdą rzeczą, która wymaga wykonania lub poprawki.projekt zmiany, podejmować szybko decyzje oraz mieć ogromną cierpliwość i wytrwałość. W tak mozolnej pracy niewątpliwie bardzo pomaga wsparcie projektanta. Jego regularna obecność podczas prac, analizowanie i natychmiastowe rozwiązanie problemów powoduje, że oszczędzasz czas i sporo pieniędzy. Zazwyczaj jesteś w pracy, a niektóre kwestie muszą być rozwiązane niezwłocznie.rozumie to ten, kto po przyjściu na plac budowy przekona sie, że płytki nie są ułożone tam, gdzie miały być, że ściana jest za krótka, że schody są krzywe, że kąty nie są równe, że okna za wąskie, że sofa nie taka, jak zamówiona, że wylewka za niska, że kabel zatynkowany, że kolor nie taki, że... Podczas nadzoru jestem zobowiązana omówić z każdym wykonawcą wszystkie szczegóły prac oraz dokonać ewentualnych modyfikacji i być na miejscu budowy lub remontu co najmniej raz w tygodniu. Dokonuję wszelkich adnotacji i przekazuję je Tobie, co pozwoli na bieżąco mieć kontrolę nad każdą rzeczą, która wymaga wykonania lub poprawki.",
		listExistance : false,
		photo : 'sources/media/pics/nadzor.jpg'
		};

		s.offerList [6] = {
		title : "Finalizacja",
		maintext : "Po zakończeniu wszystkich prac, posprzątaniu, wniesieniu mebli, zamontowaniu urządzeń, udekoruję wnętrze przedmiotami wcześniej wybranymi i zakupionymi tak, aby całość aranżacji była harmonijna i spójna, a przede wszystkim wywoływała uśmiech na twojej twarzy. Czas potrzebny na wszystkie etapy jest ściśle powiązany również z tempem podejmowanych przez Ciebie decyzji.",
		listExistance : false,
		photo : 'sources/media/pics/finale.jpg'		
		};

		s.offerList [7] = {
		title : "Cennik",
		maintext : "Wycena i czas przygotowywania projektu zależy przede wszystkim od skali prac i powierzchni pomieszczeń. Każdorazowo jest przygotowywana indywidualnie pod Twoje zapytanie. Cena za metr kwadratowy różnicuje się w zależności od ich ilości, rodzaju pomieszczeń oraz zakresu działań, które będą musiały być zrealizowane. Jeśli jednak nie potrzebujesz projektu, a potrzebna Ci jedynie porada, możesz zadzwonić i umówić się na spotkanie, podczas którego omówimy problem i postaramy sie go rozwiązać.",
		listExistance : false,
		photo : 'sources/media/pics/magic.gif'
		};		


		s.init = function (state)
		{

			s.muza[s.dj].stop();

			var musicDeterminieties = {
				music : s.soundIcon,
				sound : s.soundShutUp
			};

			s.dj = state;

			if (s.soundIcon === "sources/media/icons/big-pause-button.png"
				 && s.soundShutUp === "sources/media/icons/big-speaker.png") 
			{
			s.muza[s.dj].play();
			};
			return musicDeterminieties;
		};

		s.kissme = function ()
		{
			s.bessos.play();
		};

		s.typeme = function ()
		{
			s.typing.play();
		};

		s.passOffer = function (which)
		{
			console.log (s.offerList);
			return s.offerList [which];
		};

		s.nuta = function (what)
			{


				if(what===1){
				if (s.soundIcon === "sources/media/icons/big-pause-button.png")
				{
					s.soundIcon = "sources/media/icons/big-play-button.png";
					s.muza[s.dj].pause();
				}
				else
				{
					s.soundIcon = "sources/media/icons/big-pause-button.png";
					s.muza[s.dj].play();
				};

				return s.soundIcon;
				}
				else{
				if (s.soundShutUp === "sources/media/icons/big-speaker.png")
				{
					s.soundShutUp = "sources/media/icons/big-mute.png"
					ngAudio.mute();
				}else {
					s.soundShutUp = "sources/media/icons/big-speaker.png"
					ngAudio.unmute();
				};

				return s.soundShutUp;
				};
			};





	};


})();
(function () {

	'use strict';


	angular.module('CounterpartIssues', ['ngAudio', 'ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
	.run (Starter)
	.config(RoutesConfig)
	.controller('PortfolioCtrl', PortfolioCtrl)
	.controller('ContactCtrl', ContactCtrl)
	.controller('HomeCtrl', HomeCtrl)
	.controller('AboutCtrl', AboutCtrl)
	.controller('OfferCtrl', OfferCtrl)
	.controller('PokerCtrl', PokerCtrl)
	.service('Serwis', Serwis);


	Starter.$inject = ['$rootScope', '$state'];
	function Starter ($rootScope, $state)
		{
			$rootScope.$state = $state;
		};


	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) 
		{
			
			$urlRouterProvider.otherwise('/');

			$stateProvider

			.state('home', {
    		url: '/',
    		templateUrl: 'sources/chunks/home.html',
    		controller: 'HomeCtrl as k',
    		data: 	{
    			bodyClass: 'home-template'
    				}
			})

			.state('about', {
			url: '/about',
			templateUrl: 'sources/chunks/about.html',
			controller: 'AboutCtrl as k',
    		data: 	{
    			bodyClass: 'about-template'
    				}
			})

			.state('offer', {
			url: '/offer',
			templateUrl: 'sources/chunks/offer.html',
			controller: 'OfferCtrl as k',
    		data: 	{
    			bodyClass: 'offer-template'
    				}
			})

			.state('portfolio', {
			url: '/portfolio',
			templateUrl: 'sources/chunks/portfolio.html',
			controller: 'PortfolioCtrl as k',
    		data: 	{
    			bodyClass: 'portfolio-template'
    				}
			})

			.state('poker', {
			url: '/poker',
			templateUrl: 'sources/chunks/poker.html',
			controller: 'PokerCtrl as k',
			data: 	{
				bodyClass: 'poker-template'
					}
			})

			.state('contact', {
			url: '/contact',
			templateUrl: 'sources/chunks/contact.html',
			controller: 'ContactCtrl as k',
    		data: 	{
    			bodyClass: 'contact-template'
    				}
			})

		};


PokerCtrl.$inject = ['Serwis'];
function PokerCtrl (Serwis)
{
		var k = this;
		var startUp = Serwis.init (5);
		k.soundIcon = startUp.music;
		k.soundShutUp = startUp.sound;
		k.dieseLeute = {};
		k.dieseLeute = Serwis.passName ("justpass");
		k.brutality = false;

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

		setTimeout(function(){ k.brutality = true; }, 5000);

};


PortfolioCtrl.$inject = ['Serwis'];
function PortfolioCtrl (Serwis)
	{
		var k = this;
		k.photos = [];
		k.karuzelizowal = false;
		k.diabolizowal = false;
		k.whichProject = 0;

		k.photos = [
		{
			image: 'sources/media/carousel/s1.jpg',
			text: "elegancka jadalnia",
			description: 
			"Projektowałam tą jadalnię dla rodziny karłów w 2014 roku. Tak naprawdę - choć pomieszczenie wygląda na pełnowymiarowe - to ma 2 na 3 metry, a np. krzesła po ok. 40 cm. wysokości. Ciekawe wyzwanie, jedno z pierwszych. Karły ucztują tam po dziś dzień.",
			id : 1
		},
		{
			image: 'sources/media/carousel/s2.jpg',
			text: "pracownia na poddaszu",
			description: 
			"Ta pracownia powstała dla człowieka, który nic nie chciał robić - był zbyt leniwy. Prosił o stworzenie takiego wnętrza, które wręcz uniemożliwia jakąkolwiek pracę. Stąd gipsowe krzywizny, za niskie biurko i szafa z pochyłymi półkami, z których wszystko spada.",
			id : 2
		},
		{
			image: 'sources/media/carousel/s3.jpg',
			text: "turkusowa łazienka",
			description: 
			"Bardzo ucieszyło mnie, gdy o pomoc przy projektowaniu łazienki zgłosiła się do mnie para daltonistów, gdyż mogłam wypaprać zalegającą mi w składziku turkusową olejną. Wyszło nawet zgrabnie.",
			id : 3
		},		
		{
			image: 'sources/media/carousel/s4.jpg',
			text: "łazienka retro",
			description: 
			"Jest to łazienka zaprojektowana na specjalne życzenie pewnej korpulentnej pani. Pod wymiar jej niewymiarowych bioder sprowadzałam robioną na zamówienie wannę firmy Tresse z włoskiego Neppi. Wanna służy do siedzenia w niej i namydlania nogi, wystawionej w górę by wabić samców.",
			id : 4
		},
		{
			image: 'sources/media/carousel/s5.jpg',
			text: "diaboliczna ubikacja",
			description: 
			"Ta ubikacja została przeze mnie zaprojektowana dla osoby cichej i nieśmiałej, w konsultacji z psychologiem oraz matadorem. Efekt przeszedł najśmielsze oczekiwania. Użytkownik łazienki w skutek kolorystycznej stymulacji sensorycznej, w niedługim czasie po renowacji wymordował siekierą całą swoją rodzinę.",
			id : 5
		},
		{
			image: 'sources/media/carousel/s6.jpg',
			text: "szykowna sala kominkowa",
			description: 
			"Projekt sali kominkowej w stylu Barbary Niechcic został mi zlecony przez dwie panie około sześćdziesiątki. Zgodnie z ich życzeniem, jego motywem przewodnim i celem było takie dobranie kolorów, dodatków, mebli oraz tak umiejętne ich ustawienie, żeby negatywna energia feng-shui wyganiała stamtąd każdego gościa po maksymalnie trzech minutach i to z migreną. Panie nie lubiły wizyt. Spisałam się chyba dobrze, bo sama po oddaniu projektu nie mogłam tam wytrzymać.",
			id : 6
		},
		{
			image: 'sources/media/carousel/s7.jpg',
			text: "salon snobów",
			description: 
			"Salon snobów to ciąg dalszy sali kominkowej. W salonie snobów jest miejsce na czytanie romansów, układanie pasjansów i specjalny kącik obgadywania ludzi.",
			id : 7
		},
		{
			image: 'sources/media/carousel/s8.jpg',
			text: "sypialnia letnia",
			description: 
			"Sypialnia letnia - inspirowana plażami Malediwów - powstała na życzenie pewnego przeuroczego byłego gwałciciela, który odpokutowawszy grzechy młodości w zakładzie karnym, chciał stworzyć sobie bezpieczną oazę spokojnego snu. Projekt multimedialny! Prócz starannie zaprojektowanej strony wizualnej dodatkowo z wmontowanych w ściany głośników sączy się non-stop dźwięk rozpinanych rytmicznie rozporków.",
			id : 8
		},
		{
			image: 'sources/media/carousel/s9.jpg',
			text: "zakątek utraty dziewictwa",
			description: 
			"Stworzona przeze mnie zaciszna norka, w której zleceniodawczyni - czterdziestoletnia pani A. - zamierzała stracić dziewictwo z pewnym dość nieciekawym jegomościem. Czy zamiar się udał? Nie wiem. Natomiast ciekawostką było to, że pani A. zapłaciła za projekt przetworami owocowo-warzywnymi własnej produkcji. Do dziś się nimi zajadam!",
			id : 9
		},
		{
			image: 'sources/media/carousel/s10.jpg',
			text: "sala bankietowa",
			description: 
			"Jednorazowy projekt - tak zwana fuszka - na wieczorek zapoznawczy internetowego koła wielbicieli filmów erotycznych z serii Różowa Landrynka. Stąd kolorystyka. Bardzo zacna impreza odbyła się w tym wnętrzu, bardzo w skutek niej to wnętrze ucierpiało. Cóż... Któż by się spodziewał tak niecodziennej pijackiej żarliwości wśród zdawałoby się spokojnych internautów?",
			id : 10
		},
		{
			image: 'sources/media/carousel/s11.jpg',
			text: "klub jazzowy",
			description: 
			"Znajoma poprosiła mnie o przemianę jej pijalni piwa Ufo w snobistyczny klub jazzowy. Niestety nie dysponowała szerokim budżetem, stąd jedynie przemalowałam ściany i narysowałam na nich kredą instrumenty oraz udzieliłam jej kilku wskazówek tyczących skomponowania samej siebie z wnętrzem i stworzenia pajęczego matecznika, mającego wabić, kusić, nęcić. Po mej modernizacji niegdysiejsza pijalnia piwa, a obecnie klub jazzowy Tryton przynosi miesiąc w miesiąc nieliche zyski.",
			id : 11
		},
		{
			image: 'sources/media/carousel/s12.jpg',
			text: "męska jaskinia",
			description: 
			"Jeden z moich ciekawszych projektów, mężczyzna około czterdziestki, uwolniwszy się z małżeńskich sideł i wygoniwszy kobietę z domu poprosił mnie o pomoc w całkowitej modernizacji swojej przestrzeni. Zburzyliśmy garderobę, dwie łazienki i salę do aerobiku, zniszczyliśmy każdy ślad obecności kobiety w tym domu, miast tego jest kręgielnia, pokój do grania w gry, pokój pornograficzny, bar, sala kina domowego i mini izba wytrzeźwień. Koszty były ogromne, pracy dużo, jednak moja satysfakcja niebywała, gdy z każdym dniem widziałam budzącą się na twarzy tego stłamszonego przez niegodziwą kobietę człowieka dziecięcą i szczerą radość.",
			id : 12
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
				if (numer!=99)
				{
				k.karuzelizowal = false;
				k.whichProject = numer;
    			setTimeout(function(){ k.diabolizowal = true; }, 1400);
    			}	else
    			{
    			k.diabolizowal = false;
    			setTimeout(function(){ k.karuzelizowal = true; }, 1400);
    			};
			};

    	setTimeout(function(){ k.karuzelizowal = true; }, 2000);
		console.log (k.photos);
	};




ContactCtrl.$inject = ['Serwis'];
function ContactCtrl (Serwis)
	{
		var k = this;
		k.showform = false;
		k.showcontacts = false;
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
    		setTimeout(function(){ k.showass = true; }, 1200);
    		setTimeout(function(){ k.paxTu1 = true; }, 2100);
     		setTimeout(function(){ k.paxTu2 = true; }, 3100);
    		setTimeout(function(){ k.paxTu3 = true; }, 4100);
    		setTimeout(function(){ k.paxTu4 = true; }, 5100);
    		setTimeout(function(){ k.paxTu5 = true; }, 6100);
    		setTimeout(function(){ k.paxTu6 = true; }, 7100);
    		setTimeout(function(){ k.paxTu7 = true; }, 8100);
    		setTimeout(function(){ Serwis.kissme(); k.kiss = true; }, 9000);
		};

    setTimeout(function(){ k.showcontacts = true; }, 3000);
    setTimeout(function(){ k.showform = true; }, 5000);

	};





HomeCtrl.$inject = ['Serwis'];
function HomeCtrl (Serwis)
	{
		var k = this;
		k.bodyclass = 'home-template';
		k.hello = false;
		var startUp = Serwis.init (0);
		k.soundIcon = startUp.music;
		k.soundShutUp = startUp.sound;
		k.primitivity = startUp.answer;
		k.thyName = startUp.poker;
		k.innocentGames = true;
		k.validation = false;
		k.valid = false;

		k.enterYourName = true;
		k.powitanie = true;
		k.firsttime = false;
		k.showWishes = false;
		k.showVarans = false;
		k.showControls = false;
		k.pointnavi = false;
		k.pointsounds = false;
		k.pointwaran = false;


		k.sawItAll = false;

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

		k.goPlayPoker = function ()
		{
			console.log ("yay");
			k.hello = false;
			setTimeout(function(){ k.innocentGames = false; }, 3000);
			if (k.thyName!="none")
				{
					k.valid = true; k.validation = true;
				} else (k.thyName="");
			Serwis.init (6);
		};

		k.checkName = function ()
		{
			k.enterYourName = false;
			if (k.thyName.length === 0)
				{ k.thyName = "Anonim" };
			Serwis.passName (k.thyName);
  			setTimeout(function(){ k.valid = true; }, 4000);				
   			setTimeout(function(){ k.validation = true; }, 6000);			
		};

		k.flipPage = function (p)
		{
			if (p === 1) { k.powitanie = false; k.firsttime = true; };
			if (p === 2) { k.powitanie = false; k.showWishes = true; };
			if (p === 3) { k.firsttime = false; k.showControls = true;
			 setTimeout(function(){ k.pointsounds = true; Serwis.dzyn(); }, 1000); };
			if (p === 4) { k.showControls = false; k.showVarans = true;  k.pointsounds = false;
			 setTimeout(function(){ k.pointwaran = true; Serwis.dzyn(); }, 1500);
			 setTimeout(function(){ k.pointnavi = true; Serwis.dzyn(); }, 4000); }
			if (p === 5) { k.showVarans = false; k.showWishes = true; 
				k.pointwaran = false; k.pointnavi = false };
		};



    	setTimeout(function(){ k.hello = true;
    	console.log ("powitanie : ", k.powitanie);
    	console.log ("fist-time: ", k.firsttime); }, 3000);

	};




AboutCtrl.$inject = ['Serwis'];
function AboutCtrl (Serwis)
	{
		var k = this;
		k.speedButton = false;
		k.fotopad = false;
		k.mamba = false;
		k.soYoSpeak = false;
		k.writings = "";
		k.domek = false;
		k.whichLetter = 0;
		k.textToType = "Nasze codzienne życie, nawyki, a przede wszystkim przestrzeń, w której żyjemy definiuje nas bardziej niż sobie to uświadamiamy. Przebywanie w funkcjonalnie zaprojektowanej przestrzeni ułatwia wiele rzeczy, powoduje, że nie musimy marnować czasu na niepotrzebne działania i możemy skupić się na rzeczach bardziej istotnych. Jako projektant staram się tak projektować wnętrza, aby spełniały właśnie tę funkcję. Nie widzę sensu aranżacji pomieszczeń jedynie modnie, ale w oderwaniu od mieszkańców, którzy mają tam spędzać swe wolne chwile. Jesteś w tym procesie najważniejszy i Twoje potrzeby stoją na pierwszym miejscu. W oparciu o wiedzę i doświadczenie tworzę projekt, który ma wychodzić na wprost Twoim oczekiwaniom, ale jednocześnie ma stanowić niepowtarzalną jakość. ";



		function typeIt ()
		{			 

			if (k.whichLetter < k.textToType.length)
			{
			setTimeout(function()
				{
					k.writings = k.writings + k.textToType.charAt(k.whichLetter);
					k.whichLetter = k.whichLetter + 1;
					typeIt ();
				}, (Math.floor((Math.random() * 100) + 1)));
			} else
			{ 
				Serwis.typeme(false);
				k.speedButton = false;
				setTimeout(function(){ k.domek = true; }, 1000); };
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

		k.showItAll = function ()
		{
			console.log ("yey");
			k.whichLetter = k.textToType.length;
			k.writings = k.textToType;
		};


		setTimeout(function(){ k.speedButton = true; }, 11500);

    	setTimeout(function(){ k.fotopad = true; }, 2500);
    	
    	setTimeout(function(){ k.mamba = true; }, 1000);


    	setTimeout(function(){ k.soYoSpeak = true; 

    	setTimeout(function(){ 
    			Serwis.typeme (true); 
    			typeIt (); }, 1000);
    			 }, 4500);



	};




OfferCtrl.$inject = ['Serwis'];
function OfferCtrl (Serwis)
	{
		var k = this;
		var startUp = Serwis.init (2);
		k.soundIcon = startUp.music;
		k.soundShutUp = startUp.sound;
		k.particularOffer = {};
		k.oferujta = false;

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

    	setTimeout(function(){ k.oferujta = true; }, 4000);    	

	};




Serwis.$inject = ['ngAudio'];
function Serwis (ngAudio)
	{
		var s = this;
		s.soundIcon = "sources/media/icons/big-pause-button.png";
		s.soundShutUp = "sources/media/icons/big-speaker.png";
		s.bessos = ngAudio.load("sources/media/sounds/kiss.wav");
		s.typing = ngAudio.load("sources/media/sounds/typing.wav");
		s.bling = ngAudio.load("sources/media/sounds/bling.wav");
		s.muza = [];
		s.muza[0] = ngAudio.load("sources/media/sounds/home_song.mp3");
		s.muza[1] = ngAudio.load("sources/media/sounds/about_song.mp3");
		s.muza[2] = ngAudio.load("sources/media/sounds/offer_song.mp3");
		s.muza[3] = ngAudio.load("sources/media/sounds/portfolio_song.mp3");
		s.muza[4] = ngAudio.load("sources/media/sounds/contact_song.mp3");
		s.muza[5] = ngAudio.load("sources/media/sounds/poker_song.mp3");
		s.muza[6] = ngAudio.load("sources/media/sounds/poker_login.mp3");
		s.muza[0].volume = 0.2; s.muza[0].unbind();
		s.muza[1].volume = 0.2; s.muza[1].unbind();
		s.muza[2].volume = 0.4; s.muza[2].unbind();
		s.muza[3].volume = 0.2; s.muza[3].unbind();
		s.muza[4].volume = 0.15; s.muza[4].unbind();
		s.muza[5].volume = 0.2; s.muza[5].unbind();
		s.muza[6].volume = 0.55; s.muza[6].unbind();
		s.bessos.unbind();
		s.typing.unbind();
		s.bling.unbind();
		s.isFirst = true;

		s.dj = 1;

		s.offerList = [];

		s.offerList[0] = {
		title : "Cel",
		maintext : "Moja oferta skierowana jest do osób, które poszukują rozwiązań ściśle dopasowanych do swoich oczekiwań. Decyzja, jaka forma współpracy zostanie podjęta - zależy od Ciebie.Może być to jedynie porada, wsparcie koncepcyjne, aranżacja pojedynczego pomieszczenia,jak również projekt i wizualizacja wraz projektem wykonawczym całego domu łącznie z nadzorem autorskim.",
		listExistance : false,
		photo : 'sources/media/pics/szacunek_do_kotow.jpg' };

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
		"indywidualne rozwiązania i koncepcje technologiczne - sala kinowa, piwniczka na wino, sala gier, strefa SPA i relaksu, przestrzeń dla zwierząt (np. kotów), inteligentny system sterowania, solary, itp."
		],
		photo : 'sources/media/pics/planowanie.jpg' };

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
		photo : 'sources/media/pics/doctorGreenThumb.jpg'
		};		

		s.personalData = { name : "none", head : "none"};

		s.nicknames = {
			chicknames : ["królewna ", "kocica ", "rusałka ", "krzywdzicielka ", "nimfa ", "syrena ", "czarodziejka ", "butelkonosa ", "ślicznostopa ", "wiedźma ",
						"tłustawa ", "bogini seksu ", "otrupiała ", "pajęczyca ", "sroga ", "popiardująca ", "ślepawa brzydula ", "zmysłowa ", "pazerna ", "nimfomanka "],
			dicknames : ["zakapior ", "żulik ", "cwaniaczyna ", "ziomalik ", "kat uczuć ", "psychopata ", "cherlawy ", "książę ", "srający pieniędzmi ", "nieodgadniony ",
			            "brudas ", "boski żygolo ", "kominiarz ", "rycerski ", "świerzb ", "smrodostopy ", "kawał huja ", "menelik ", "wieczna sraczka ", "megaloman "]
		};


		s.passName = function (name)
		{
			console.log (s.nicknames);

			if (name === "justpass")
				{ return s.personalData }
			else
				{
					var nicknameNumber = Math.floor(Math.random() * 20);
					if ((name.charAt(name.length-1) === "a") || (name.charAt(name.length-1) === "A"))
						{
						s.personalData = {
							name : s.nicknames.chicknames[nicknameNumber] + name,
							head : 'sources/media/icons/ladyhead.png'
						};
						} else
						{
						s.personalData = {
							name : s.nicknames.dicknames[nicknameNumber] + name,
							head : 'sources/media/icons/guyhead.png'
						};
						};
				};
		};

		s.init = function (state)
		{

			s.muza[s.dj].stop();

			var musicDeterminieties = {
				music : s.soundIcon,
				sound : s.soundShutUp,
				answer : s.isFirst,
				poker : s.personalData.name
			};

			if (s.isFirst) { s.isFirst = false };

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

		s.dzyn = function ()
		{
			s.bling.play();
		};

		s.typeme = function (on)
		{
			if (on) {
			s.typing.play();
			} else { s.typing.stop() };
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
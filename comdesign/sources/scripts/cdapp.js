(function () {

	'use strict';


	angular.module('CounterpartIssues', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
	.config(RoutesConfig)
	.controller('PortfolioCtrl', PortfolioCtrl)
	.controller('ContactCtrl', ContactCtrl)
	.service('Serwis', Serwis);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) 
		{
			
			$urlRouterProvider.otherwise('/');

			$stateProvider

			.state('home', {
    		url: '/',
    		templateUrl: 'sources/chunks/home.html'
			})

			.state('about', {
			url: '/about',
			templateUrl: 'sources/chunks/about.html'
			})

			.state('offer', {
			url: '/offer',
			templateUrl: 'sources/chunks/offer.html'
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
		k.showform = true;
		k.ContactDetails = {
			FirstName : "",
			Email : "",
			PhoneNumber : "",
			Subject : "",
			Comment : ""
		};

		k.submitContactForm = function ()
		{
			console.log (k.ContactDetails);
			k.showform = false;
		};

	};

function Serwis ()
	{
		var s = this;
	};


})();
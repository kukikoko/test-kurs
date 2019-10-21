(function () {

	'use strict';


    angular.module('VaranApplication', ['ui.router', 'ngAudio'])
	.config(RoutesConfig)
	.controller('HomeController', HomeController)
    .controller('CareerController', CareerController)
    .controller('LetterController', LetterController)
    .controller('PastimeController', PastimeController)
    .controller('ContactController', ContactController)
	.service('ServiceEngine', ServiceEngine);





	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) 
		{
			
			$urlRouterProvider.otherwise('/');

			$stateProvider

			.state('home', {
    		url: '/',
    		templateUrl: 'sources/chunks/home.html',
    		controller: 'HomeController as k',
			})

			.state('career', {
			url: '/career',
			templateUrl: 'sources/chunks/career.html',
			controller: 'CareerController as k',
			})

			.state('letter', {
			url: '/letter',
			templateUrl: 'sources/chunks/letter.html',
			controller: 'LetterController as k',
			})

			.state('pastime', {
			url: '/pastime',
			templateUrl: 'sources/chunks/pastime.html',
			controller: 'PastimeController as k',
			})

			.state('contact', {
			url: '/contact',
			templateUrl: 'sources/chunks/contact.html',
			controller: 'ContactController as k',
			})

        };


HomeController.$inject = ['ServiceEngine'];
function HomeController (ServiceEngine)
        {
            var k = this;
        };

CareerController.$inject = ['ServiceEngine'];
function CareerController (ServiceEngine)
        {
            var k = this;
        };

LetterController.$inject = ['ServiceEngine'];
function LetterController (ServiceEngine)
        {
            var k = this;
        };

PastimeController.$inject = ['ServiceEngine'];
function PastimeController (ServiceEngine)
        {
            var k = this;
        };

ContactController.$inject = ['ServiceEngine'];
function ContactController (ServiceEngine)
        {
            var k = this;
        };

ServiceEngine.$inject = ['ngAudio'];
function ServiceEngine (ngAudio)
        {
            var s = this;
        };

    })();

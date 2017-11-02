(function () {

	'use strict';


    angular.module('VaranApplication', ['ui.router', 'ngAudio'])
	.config(RoutesConfig)
	.controller('HomeController', HomeController)
    .controller('AboutController', AboutController)
    .controller('StyleController', StyleController)
    .controller('GuitarController', GuitarController)
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

			.state('about', {
			url: '/about',
			templateUrl: 'sources/chunks/about.html',
			controller: 'AboutController as k',
			})

			.state('style', {
			url: '/lifestyle',
			templateUrl: 'sources/chunks/lifestyle.html',
			controller: 'StyleController as k',
			})

			.state('guitar', {
			url: '/guitar',
			templateUrl: 'sources/chunks/guitar.html',
			controller: 'GuitarController as k',
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

AboutController.$inject = ['ServiceEngine'];
function AboutController (ServiceEngine)
        {
            var k = this;
        };

StyleController.$inject = ['ServiceEngine'];
function StyleController (ServiceEngine)
        {
            var k = this;
        };

GuitarController.$inject = ['ServiceEngine'];
function GuitarController (ServiceEngine)
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

(function () {
	'use strict';

	angular.module('Apka', [])

	.controller('Kontroler', Kontroler);




	Kontroler.$inject = ['$scope'];
	function Kontroler ($scope)
	{
		$scope.MenuForToday = "";
		$scope.odpowiedz = "............";

		$scope.styl="neutral";
		
		$scope.krzyknij = function () {
			var jedzenie = $scope.MenuForToday;
			jedzenie = jedzenie.trim();
			if (jedzenie === "Pawel" || jedzenie === "Piotrek")
			{
				$scope.odpowiedz = "Witam szanownego pana";
				$scope.styl="notfat";
			}	else
				{
					$scope.odpowiedz = "won!"
					$scope.styl="toomuch";
				};
		};
	};

	
})();

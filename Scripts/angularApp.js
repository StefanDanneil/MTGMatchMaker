(function () {
	var app = angular.module("mtgLifeCounter", []);

	app.controller("PlayerController", ['$scope', '$rootScope', function ($scope, $rootScope) {
		$scope.playerLife = 20;

		$rootScope.$on('refreshEvent', function (event, args) {
			$scope.playerLife = 20;
		});

		$scope.gainLife = function () {
			$scope.playerLife++;
		};

		$scope.looseLife = function () {
			$scope.playerLife--;
		};
	}]);

	app.controller('MenuController', ['$scope', '$rootScope', function ($scope, $rootScope) {
		$scope.toggleMenu = function ($event) {
			$($event.target).closest(".dividerMenu").toggleClass("expandedDividerMenu");
		};

		$scope.diceModal = function () {
			$scope.rollDice($('.playerOneDiceHolder'));
			$scope.rollDice($('.playerTwoDiceHolder'));
			$('#diceModal').modal();
		};

		$scope.rollDice = function (placeholder) {
			var possibleDiceRolls = {
				1: "Content/images/dice1.png",
				2: "Content/images/dice2.png",
				3: "Content/images/dice3.png",
				4: "Content/images/dice4.png",
				5: "Content/images/dice5.png",
				6: "Content/images/dice6.png",
			};

			placeholder.children().each(function () {
				var result = Math.floor(Math.random() * 6) + 1;
				$(this).attr("src", possibleDiceRolls[result]);
			});
		};

		$scope.refresh = function () {
			$rootScope.$broadcast('refreshEvent', { test: 'hejhej' });
		};
	}]);

	app.directive('player', function () {
		return {
			restrict: 'E',
			templateUrl: 'AngularDirectives/player.html'
		};
	});
})();
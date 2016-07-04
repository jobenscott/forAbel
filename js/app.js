var wiseguys = angular.module('wiseguys', ['ngRoute']);


wiseguys.config(function($routeProvider) {
		$routeProvider


		// route for the index
			.when('/', {
				templateUrl : 'partials/index.html',
				controller  : 'mainController'
			})

			// route for the tab-one page
			.when('/sativas', {
				templateUrl : 'partials/sativas.html',
				controller  : 'sativaController'
			})

			// route for the tab-one page
			.when('/indicas', {
				templateUrl : 'partials/indicas.html',
				controller  : 'indicaController'
			})

			// route for the tab-one page
			.when('/hybrids', {
				templateUrl : 'partials/hybrids.html',
				controller  : 'hybridsController'
			})

			// route for the tab-one page
			.when('/edibles', {
				templateUrl : 'partials/edibles.html',
				controller  : 'ediblesController'
			})

			// route for the tab-one page
			.when('/misc', {
				templateUrl : 'partials/misc.html',
				controller  : 'miscController'
			})

			// route for the tab-one page
			.when('/specials', {
				templateUrl : 'partials/specials.html',
				controller  : 'specialsController'
			});
});



wiseguys.controller('mainController', function($scope) {
		
		$scope.header = 'Git Lit';
		$scope.sub_header = 'Testing...';

		// $scope.setHeroHeight = function () {
		// 	var BIC = $('background-img-container'),
		// 	BMC = $('background-mask-container');
		// 	$(BIC).css({
		// 		'height': '20%'
		// 	});
		// }		
	});


wiseguys.controller('sativaController', function($scope) {
		
		$scope.header = 'Sativas';

		$scope.headerOnClickOne = function() {
	        $scope.header = 'Blue Dream';
	    }
	    $scope.headerOnClickTwo = function() {
	        $scope.header = 'Rasberry Kush';
	    }
	    $scope.headerOnClickThree = function() {
	        $scope.header = 'White Widow';
	    }
	    $scope.headerOnClickFour = function() {
	        $scope.header = 'Girl Scout Cookies';
	    }
			
	});


wiseguys.controller('indicaController', function($scope) {
		
		$scope.header = 'Abels a bitch.';

	});

wiseguys.controller('hybridsController', function($scope) {
		
		$scope.header = 'Git Lit hybrids';

	});

wiseguys.controller('ediblesController', function($scope) {
		
		$scope.header = 'Git Lit Edibles';

	});

wiseguys.controller('miscController', function($scope) {
		
		$scope.header = 'Git Lit Other Items';

	});


wiseguys.controller('specialsController', function($scope) {
		
		$scope.header = 'Git Lit Specials';

	});
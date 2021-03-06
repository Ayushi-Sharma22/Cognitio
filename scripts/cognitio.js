var app = angular.module('cognitioApp',[])

app.controller('MyCtrl',function($scope){
	var search = function(course){
		
	}
});
app.controller('specializationCtrl',function($scope){
	$scope.specializations = [{
		"name":"Data Science",
		"img": "http://i.telegraph.co.uk/multimedia/archive/02297/coursefinder_large_2297964b.jpg"
	},
	{
		"name":"Functional Programming in Scala",
		"img": "http://www.nuffieldfoundation.org/sites/default/files/images/young%20woman%20in%20university%20library.jpg"
	},
	{
		"name":"Python for everybody",
		"img": "http://www.cityschooloflanguages.co.uk/uploads/media/default/0001/01/ba88c530a3f1e077b4a27d9243aecfa912858a6b.jpeg"
	},
	{
		"name":"Machine Learning",
		"img": "http://www.wordwrite.co.uk/wp-content/uploads/2015/03/bigstock-Online-Education-49808651.jpg"
	}]
	
	console.log($scope.specializations);
});

app.controller('popularCtrl',function($scope){
	$scope.specializations = [{
		"name":"Machine Learning",
		"img": "http://i.telegraph.co.uk/multimedia/archive/02297/coursefinder_large_2297964b.jpg"
	},
	{
		"name":"Programming for Everybody(Getting started with Python)",
		"img": "http://www.nuffieldfoundation.org/sites/default/files/images/young%20woman%20in%20university%20library.jpg"
	},
	{
		"name":"Learning How to Learn: Powerful mental tools to help you master tough subjects",
		"img": "http://www.cityschooloflanguages.co.uk/uploads/media/default/0001/01/ba88c530a3f1e077b4a27d9243aecfa912858a6b.jpeg"
	},
	{
		"name":"R Programming",
		"img": "http://www.wordwrite.co.uk/wp-content/uploads/2015/03/bigstock-Online-Education-49808651.jpg"
	}]
	
	console.log($scope.specializations);
});

app.controller('topRatedCtrl',function($scope){
	$scope.specializations = [{
		"name":"Строим роботов и другие устройства на Arduino. От светофора до 3D-принтера",
		"img": "http://i.telegraph.co.uk/multimedia/archive/02297/coursefinder_large_2297964b.jpg"
	},
	{
		"name":"Introduction to Classical Music",
		"img": "http://www.nuffieldfoundation.org/sites/default/files/images/young%20woman%20in%20university%20library.jpg"
	},
	{
		"name":"Machine Learning",
		"img": "http://www.cityschooloflanguages.co.uk/uploads/media/default/0001/01/ba88c530a3f1e077b4a27d9243aecfa912858a6b.jpeg"
	},
	{
		"name":"HTML, CSS, and Javascript for Web Developers",
		"img": "http://www.wordwrite.co.uk/wp-content/uploads/2015/03/bigstock-Online-Education-49808651.jpg"
	}]
	
	console.log($scope.specializations);
});

app.controller('dataScienceCtrl',function($scope){
	$scope.specializations = [{
		"name":"Machine Learning",
		"img": "http://i.telegraph.co.uk/multimedia/archive/02297/coursefinder_large_2297964b.jpg"
	},
	{
		"name":"Data Science",
		"img": "http://www.nuffieldfoundation.org/sites/default/files/images/young%20woman%20in%20university%20library.jpg"
	},
	{
		"name":"Excel to MySQL: Analytic Techniques for Business",
		"img": "http://www.cityschooloflanguages.co.uk/uploads/media/default/0001/01/ba88c530a3f1e077b4a27d9243aecfa912858a6b.jpeg"
	},
	{
		"name":"Machine Learning",
		"img": "http://www.wordwrite.co.uk/wp-content/uploads/2015/03/bigstock-Online-Education-49808651.jpg"
	}]
	
	console.log($scope.specializations);
});

app.controller('businessCtrl',function($scope){
	$scope.specializations = [{
		"name":"Successful Negotiation: Essential Strategies and Skills",
		"img": "http://i.telegraph.co.uk/multimedia/archive/02297/coursefinder_large_2297964b.jpg"
	},
	{
		"name":"Build Essential Skills for the Workplace",
		"img": "http://www.nuffieldfoundation.org/sites/default/files/images/young%20woman%20in%20university%20library.jpg"
	},
	{
		"name":"Leading Effectively",
		"img": "http://www.cityschooloflanguages.co.uk/uploads/media/default/0001/01/ba88c530a3f1e077b4a27d9243aecfa912858a6b.jpeg"
	},
	{
		"name":"Financial Markets",
		"img": "http://www.wordwrite.co.uk/wp-content/uploads/2015/03/bigstock-Online-Education-49808651.jpg"
	}]
	
	console.log($scope.specializations);
});

app.controller('CSCtrl',function($scope){
	$scope.specializations = [{
		"name":"Python for everybody",
		"img": "http://i.telegraph.co.uk/multimedia/archive/02297/coursefinder_large_2297964b.jpg"
	},
	{
		"name":"Functional Programming in Scala",
		"img": "http://www.nuffieldfoundation.org/sites/default/files/images/young%20woman%20in%20university%20library.jpg"
	},
	{
		"name":"Ruby on Rails Web Development",
		"img": "http://www.cityschooloflanguages.co.uk/uploads/media/default/0001/01/ba88c530a3f1e077b4a27d9243aecfa912858a6b.jpeg"
	},
	{
		"name":"Fundamentals of Computing",
		"img": "http://www.wordwrite.co.uk/wp-content/uploads/2015/03/bigstock-Online-Education-49808651.jpg"
	}]
	
	console.log($scope.specializations);
});

app.controller('socialScienceCtrl',function($scope){
	$scope.specializations = [{
		"name":"Les Partenariats Public-Privé (PPP): Comment offrir de meilleures infrastructures pour les services publics",
		"img": "http://i.telegraph.co.uk/multimedia/archive/02297/coursefinder_large_2297964b.jpg"
	},
	{
		"name":"Buddhism and Modern Psychology",
		"img": "http://www.nuffieldfoundation.org/sites/default/files/images/young%20woman%20in%20university%20library.jpg"
	},
	{
		"name":"A Life of Happiness and Fulfillment",
		"img": "http://www.cityschooloflanguages.co.uk/uploads/media/default/0001/01/ba88c530a3f1e077b4a27d9243aecfa912858a6b.jpeg"
	},
	{
		"name":"Primeros Auxilios Psicológicos (PAP)",
		"img": "http://www.wordwrite.co.uk/wp-content/uploads/2015/03/bigstock-Online-Education-49808651.jpg"
	}]
	
	console.log($scope.specializations);
});

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
        when('/', {
            templateUrl: 'index.html',
            controller: 'MyCtrl'
        }).
        when('/signup', {
            templateUrl: 'modal.html',
            controller: 'MyCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

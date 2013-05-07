function ParkingCtrl($scope) {
			
	$scope.pakingslist = [{isParked:true},{isParked:false},
				{isParked:true},{isParked:false},{isParked:true},
				{isParked:false},{isParked:true},{isParked:false},
				{isParked:true},{isParked:false}];
	
	$scope.allocate = function() {
		var parkings = $scope.pakingslist;
		angular.forEach(parkings, function(slot,i) {
				if (!slot.isParked) {	
					$scope.pakingslist[i].isParked=true;
					forEach.break();
				}
		});
	};
	
	$scope.deallocate = function(idx) {
		$scope.pakingslist[idx].isParked = false;				
	};
	
	$scope.freeparkingslots = function() {
		var count = 0;
		angular.forEach($scope.pakingslist, function(slot) {
			count += slot.isParked ? 0 : 1;
		});
		return count;
	};				
}
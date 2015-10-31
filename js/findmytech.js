/**
 * Created by Administrator on 10/29/2015.
 */

angular.module('Techtracker', [])
    .controller('ProblemController', ['$scope','$rootScope','$timeout', function($scope,$rootScope,$timeout) {


        $rootScope.problems = [
            {problem:"0",desc:"Please Select Your Problem", jobComp:"Fios", jobcode:"1"},
            {problem:"1",desc:"Fios:Not able to browse Fios Internet", jobComp:"Fios", jobcode:"1"},
            {problem:"2",desc:"Fios:Install Fios", jobComp:"Fios", jobcode:"4"},
            {problem:"3",desc:"Fios:Damaged ONT", jobComp:"Fios", jobcode:"4"},
            {problem:"4",desc:"Fios:Damaged Router", jobComp:"Fios", jobcode:"2"},
            {problem:"5",desc:"Dsl:Not able to browse DS Internet", jobComp:"Dsl", jobcode:"1"},
            {problem:"6",desc:"Dsl:Install DSL", jobComp:"Dsl", jobcode:"4"},
            {problem:"7",desc:"Dsl:Damaged Router", jobComp:"Dsl", jobcode:"2"},
            {problem:"8",desc:"Dsl:Unable to access Router", jobComp:"Fios", jobcode:"1"},
            {problem:"9",desc:"Dsl:Router in condition but not working", jobComp:"Fios", jobcode:"2"},
            {problem:"10",desc:"Dsl:Unable to access Router", jobComp:"Dsl", jobcode:"3"}
        ];

        $rootScope.techCompetency = [
            {techId:"1",corecomp:"Fios"},
            {techId:"2",corecomp:"Dsl"},
            {techId:"3",corecomp:"Fios"},
            {techId:"4",corecomp:"Fios"},
            {techId:"5",corecomp:"Fios"},
            {techId:"6",corecomp:"Fios"},
            {techId:"7",corecomp:"Dsl"},
            {techId:"8",corecomp:"Fios"},
            {techId:"9",corecomp:"Fios"},
            {techId:"10",corecomp:"Dsl"},
            {techId:"11",corecomp:"Fios"},
            {techId:"12",corecomp:"Dsl"}

        ];

        $rootScope.locations = [
            {name: "loc1", lat:42.22694117072801, lng:-71.17472076730337},
            {name: "loc2", lat:42.23543177164179,lng:-71.1321487405803},
            {name: "loc3", lat:42.22912748033119,lng:-71.14643096923828},
            {name: "loc4",lat:42.23893952924004, lng:-71.16071319789625},
            {name: "loc5", lat:42.237719457033805,lng:-71.12967682303861},
            {name: "loc6", lat:42.245598649037795,lng:-71.15357208356727},
            {name: "loc7",lat:42.22938170053097,lng:-71.13324737758375},
            {name: "loc8",lat:42.260896709763315,lng:-71.1494522105204},
            {name: "loc9", lat:42.2155507944444,lng:-71.14395905169658},
            {name: "loc10", lat:42.25759345267867,lng:-71.20053863473004},
            {name: "loc11",lat:42.237516113251225,lng:-71.15302277030423},
            {name: "loc12", lat:42.23588931613034,lng:-71.1038589477539}
        ];

        $rootScope.techdetails =[
            {name:"Hagrid",id:"1",mobile:"123467891",lat:$scope.locations[0].lat, lng:$scope.locations[0].lng, joblocation:{}, busy:false, jobOnTheway : false},
            {name:"Lucius",id:"2",mobile:"12346891",lat:$scope.locations[1].lat, lng:$scope.locations[1].lng, joblocation:{}, busy:false, jobOnTheway : false},
            {name:"Draco",id:"3",mobile:"12367891",lat:$scope.locations[2].lat, lng:$scope.locations[2].lng, joblocation:{}, busy:true, jobOnTheway : false},
            {name:"Ron",id:"4",mobile:"12347891",lat:$scope.locations[3].lat, lng:$scope.locations[3].lng, joblocation:{}, busy:false, jobOnTheway : false},
            {name:"Dumbledore",id:"5",mobile:"12347891",lat:$scope.locations[4].lat, lng:$scope.locations[4].lng, joblocation:{}, busy:false, jobOnTheway : false},
            {name:"Snape",id:"6",mobile:"12346891",lat:$scope.locations[5].lat, lng:$scope.locations[5].lng, joblocation:{}, busy:false, jobOnTheway : false},
            {name:"Lupin",id:"7",mobile:"12346547891",lat:$scope.locations[6].lat, lng:$scope.locations[6].lng, joblocation:{}, busy:false, jobOnTheway : false},
            {name:"Black",id:"8",mobile:"1234467891",lat:$scope.locations[7].lat, lng:$scope.locations[7].lng, joblocation:{}, busy:false, jobOnTheway : false},
            {name:"James",id:"9",mobile:"1234675891",lat:$scope.locations[8].lat, lng:$scope.locations[8].lng, joblocation:{}, busy:false, jobOnTheway : false},
            {name:"Dudley",id:"10",mobile:"1234567891",lat:$scope.locations[9].lat, lng:$scope.locations[9].lng, joblocation:{}, busy:false, jobOnTheway : false},
            {name:"Harry",id:"11",mobile:"1234657891",lat:$scope.locations[10].lat, lng:$scope.locations[10].lng, joblocation:{}, busy:false, jobOnTheway : false},
            {name:"Neville",id:"12",mobile:"1234657891",lat:$scope.locations[11].lat, lng:$scope.locations[11].lng, joblocation:{}, busy:false, jobOnTheway : false}

        ];

        $scope.showcustomer=false;
        $scope.showtechnician=false;
        $scope.showAllTechies = false;

        $scope.showTechnician = function(){
            $scope.showcustomer=false;
            $scope.showtechnician=true;
            $scope.showAllTechies = false;
            $scope.SelectedTech={};
            $scope.showTech = false;
//            $scope.getTechDetail();
        };

        $scope.showCustomer = function(){
            $scope.showcustomer=true;
            $scope.showtechnician=false;
            $scope.showAllTechies = false
        };

        $scope.showAllTechs = function(){
            $scope.showcustomer = false;
            $scope.showtechnician = false;
            $scope.showAllTechies = true;

            var allTechsCenter = new google.maps.LatLng($scope.techdetails[2].lat,$scope.techdetails[2].lng);

            var allTechsMap = new google.maps.Map(document.getElementById('allTechsMap'), {
                zoom: 13,
                center: allTechsCenter
            });

            angular.forEach($scope.techdetails,function(allTechs,key){
                var icon = "";
                if(allTechs.busy) {
                    icon = "img/Techie.png";
                }
                else
                    icon = "img/TechieOnTheGo.png";

                var marker = new google.maps.Marker({
                    map: allTechsMap,
                    title: allTechs.name,
                    position: new google.maps.LatLng(allTechs.lat, allTechs.lng),
                    icon: icon
                });
            });
            document.body.scrollTop = 250;
            google.maps.event.addListener(allTechsMap, 'click', function(event) {
                allTechsMap.setCenter(allTechsCenter);
                google.maps.event.trigger(allTechsMap, "resize");
                allTechsMap.setCenter(allTechsCenter);
                google.maps.event.trigger(allTechsMap, "resize");
            });

            google.maps.event.trigger(allTechsMap, "click");
            google.maps.event.trigger(allTechsMap, "resize");
            google.maps.event.trigger(allTechsMap, "click");
        }

       // $scope.myproblem = "Please select your problem"; // red
        $scope.homeObj = {};
        $scope.myproblem = $scope.problems[0];
        $scope.showproblems = function(){
            $scope.clicked = true;
            $scope.toshowmap = false;



            function geocodeAddress(geocoder) {
                var address = document.getElementById('address').value;


                geocoder.geocode({'address': address}, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {

                        $scope.homeObj.lat = results[0].geometry.location.lat();
                        $scope.homeObj.lng = results[0].geometry.location.lng();
                    } else {
                        alert('Geocode was not successful for the following reason: ' + status);
                    }
                });
            }
            geocodeAddress(new google.maps.Geocoder());

        };

        $scope.myNearestTech = [];

        $scope.myTechDetail = [];


        $scope.custconfirm = function(){
            $scope.SelectedTech.busy = true;
            $scope.SelectedTech.jobOnTheway = false;
            $scope.SelectedTech.joblocation = {lat: $scope.homeObj.lat, lng: $scope.homeObj.lng};
            $("#confirminfo").modal("show");
			
			//alert("Your Tech is on the way, his name:"+ $scope.SelectedTech.name+" and mobile no:"+ $scope.SelectedTech.mobile);
        };
        $scope.showmap = function() {
            $scope.toshowmap = true;

            $scope.myNearestTech = [];

            $scope.myTechDetail = [];

            window.initMap =  function(){

                var myMap = new google.maps.Map(document.getElementById('map'), {
                    zoom: 13,
                    center: {lat:  $scope.homeObj.lat, lng: $scope.homeObj.lng}
                });

               /* google.maps.event.addListener(myMap, 'click', function(event) {

                    console.log(event.latLng)
                });*/


                var marker = new google.maps.Marker({
                    map: myMap,
                    position:  new google.maps.LatLng( $scope.homeObj.lat,  $scope.homeObj.lng),
                    icon:"img/Home.png",
                    title: "Home"
                });
                angular.forEach($scope.myNearestTech,function(myNrTech,key){
                    var icon = "";
                    if(myNrTech.nearest) {
                        icon = "img/TechieOnTheGo.png";
                        $scope.SelectedTech = myNrTech;
                        $scope.SelectedTech.jobOnTheway = true;
                    }
                    else
                        icon = "img/Techie.png";
                    var marker = new google.maps.Marker({
                        map: myMap,
                        title: myNrTech.name,
                        position: new google.maps.LatLng(myNrTech.lat, myNrTech.lng),
                        icon: icon
                    });
                });
               document.body.scrollTop = 250;

            };

            angular.forEach($rootScope.techCompetency, function (tchComp, key) {
                    if (tchComp.corecomp == $scope.myproblem.jobComp) {
                        var techId = tchComp.techId;
                        angular.forEach($rootScope.techdetails, function (tchDet, key) {
                            if (tchDet.id == techId && tchDet.busy == false) {
                                $scope.myTechDetail.push(tchDet);
                            }
                        })
                    }
                }
            )


            $timeout(function () {
                function rad(x) {
                    return x * Math.PI / 180;
                }

                var lat = $scope.homeObj.lat;
                var lng = $scope.homeObj.lng;
                var R = 6371; // radius of earth in km
                var distances = [];
                var closest = -1;
                window.myTechs = $scope.myTechDetail;
                for (i = 0; i < myTechs.length; i++) {
                    var mlat = myTechs[i].lat;
                    var mlng = myTechs[i].lng;
                    var dLat = rad(mlat - lat);
                    var dLong = rad(mlng - lng);
                    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                        Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
                    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    var d = R * c;
                    distances[i] = d;
                    if (closest == -1 || d < distances[closest]) {
                        closest = i;
                    }

                    myTechs[i].d = d;

                    if (d < 1.5)
                        $scope.myNearestTech.push(myTechs[i]);
                }

                angular.forEach($scope.myNearestTech, function(myNrTech,key){
                    if(myNrTech.id == myTechs[closest].id) {
                        myNrTech.nearest = true;
                    }
                    else
                        myNrTech.nearest = false;
                });

                initMap();
            }, 1000);
        }

        $scope.techMap = {};
        $scope.ifbusy = false;
        $scope.iffree = false;
        $scope.jobontheway=false;
        $scope.showTech=false;
        $scope.techAtTheLocation = false;
        $scope.getTechDetail = function(){
            $scope.techAtTheLocation = false;
            if($scope.SelectedTech.id !== undefined && $scope.SelectedTech != "") {
                $scope.showTech = true;

                if ($scope.SelectedTech.busy) {
                    $scope.ifbusy = true;
                    $scope.iffree = false;
                    if($scope.SelectedTech.joblocation.lat == undefined) {
                        $scope.SelectedTech.joblocation.lat = $scope.SelectedTech.lat;
                        $scope.SelectedTech.joblocation.lng = $scope.SelectedTech.lng;
                    }
                    if($scope.SelectedTech.joblocation.lat == $scope.SelectedTech.lat && $scope.SelectedTech.joblocation.lng == $scope.SelectedTech.lng)
                        $scope.techAtTheLocation = true;

                    $scope.initTechMap();
                }
                else {
                    $scope.ifbusy = false;
                    $scope.iffree = true;
                }
                if($scope.SelectedTech.jobOnTheway && !$scope.SelectedTech.busy)
                {
                    $scope.jobontheway = true;
                    $scope.ifbusy = false;
                }
                else
                    $scope.jobontheway = false;
            }
        };

        $scope.getBusy = function(){
            $scope.SelectedTech.busy = true;
            $scope.ifbusy = true;
            $scope.iffree = false;
            $scope.SelectedTech.joblocation.lat = $scope.SelectedTech.lat;
            $scope.SelectedTech.joblocation.lng = $scope.SelectedTech.lng;
            $scope.techAtTheLocation = true;
            $scope.initTechMap();
            google.maps.event.trigger($scope.techMap, "resize");
        }

        $scope.getFree = function(){
            $scope.SelectedTech.busy = false;
            $scope.ifbusy = false;
            $scope.iffree = true;
            $scope.SelectedTech.joblocation = {};
        }


        $scope.initTechMap = function(){

            var myLatlng = new google.maps.LatLng($scope.SelectedTech.lat, $scope.SelectedTech.lng);


            if($scope.techMap.center == undefined) {
                $scope.techMap = new google.maps.Map(document.getElementById('techmap'), {
                    zoom: 13,
                    center: {lat: $scope.SelectedTech.lat, lng: $scope.SelectedTech.lng}
                });

                var icoMarker1;
                if($scope.techAtTheLocation)
                    icoMarker1 = "img/Busy.png";
                else
                    icoMarker1 = "img/office.png";


                var icoMarker2;
                if($scope.techAtTheLocation)
                    icoMarker2 = "img/Busy.png";
                else
                    icoMarker2 = "img/TechieOnTheGo.png";


                var marker1 = new google.maps.Marker({
                    map:  $scope.techMap,
                    position:  new google.maps.LatLng( $scope.SelectedTech.joblocation.lat,  $scope.SelectedTech.joblocation.lng),
                    icon: icoMarker1,
                    title:"jobLocation of "+"Tech:"+$scope.SelectedTech.id
                });
                $scope.techMap.marker1 = marker1;


                var marker2 = new google.maps.Marker({
                    map:  $scope.techMap,
                    position:  new google.maps.LatLng( $scope.SelectedTech.lat,  $scope.SelectedTech.lng),
                    icon: icoMarker2,
                    title: "currentLocation of "+"Tech:"+$scope.SelectedTech.id
                });
                $scope.techMap.marker2 = marker2;
            }
            else
            {
                $scope.techMap.setCenter(myLatlng);
                if($scope.techAtTheLocation)
                    $scope.techMap.marker1.setIcon("img/Busy.png");
                else
                    $scope.techMap.marker1.setIcon("img/office.png");




                if($scope.techAtTheLocation)
                    $scope.techMap.marker2.setIcon("img/Busy.png");
                else
                    $scope.techMap.marker2.setIcon("img/TechieOnTheGo.png");

                $scope.techMap.marker1.setPosition(new google.maps.LatLng( $scope.SelectedTech.joblocation.lat,  $scope.SelectedTech.joblocation.lng));
                $scope.techMap.marker2.setPosition(new google.maps.LatLng( $scope.SelectedTech.lat,  $scope.SelectedTech.lng));
                google.maps.event.trigger($scope.techMap, "click");
                google.maps.event.trigger($scope.techMap, "resize");
            }


            google.maps.event.addListener($scope.techMap, 'click', function(event) {
                $scope.techMap.setCenter(myLatlng);
                google.maps.event.trigger($scope.techMap, "resize");
                $scope.techMap.setCenter(myLatlng);
                google.maps.event.trigger($scope.techMap, "resize");
             });


           /* google.maps.event.addDomListener(window, "resize", function() {
                var center = myTechMap.getCenter();
                google.maps.event.trigger(myTechMap, "resize");
                myTechMap.setCenter(center);
            });
            */
            /* google.maps.event.addListener(myMap, 'click', function(event) {

             console.log(event.latLng)
             });


            google.maps.event.addListener(map, 'mouseOver', function() {
                techMap.setCenter(myLatlng);
                google.maps.event.trigger(map, 'resize');
            });
            marker1.addListener('click', function() {
                map.setZoom(8);
                map.setCenter(myLatlng);
            });
             */
        }


    }]);



self.addEventListener('activate', function (event) {

});

self.addEventListener('fetch', function (event) {

});

self.addEventListener('push', function (event) {

});














  console.log(333)
              //检测到已经存在的省份了，只需添加到相应的省份的对象下面就行了；
              for(var j=0;j<$scope.demand.price_routes.length;j++){

                for(var m in $scope.demand.price_routes[j]){
                  var shengItem = $scope.demand.price_routes[j][m];
                  if(m == routeItem){
                    for(var n= 0;n<shengItem.length;n++){

                      if($scope.shengItem[n].payment_style == _priceRouteNow.payment_style){
                        iAlert.alert('相同省份下已存在相同报价类型的价格');
                      }
                    }

                  }else{
                    shengItem.push(_priceRouteNow);
                  }


                }

              }

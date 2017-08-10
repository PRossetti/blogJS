angular.module('blogApp').directive('validFile', function () {
    return {
        require: 'ngModel',
        link: function (scope, el, attrs, ngModel) {
            
            ngModel.$render = function () {
                ngModel.$setViewValue(el.val());
            };

            el.bind('change', function () {
                    scope.$apply(function () {
                    ngModel.$render();
                });
            });
        }
    };
});

// otra forma que tambien parece funcioanr
// angular.module('blogApp').directive('validFile',function(){
//   return {
//     require:'ngModel',
//     link:function(scope,el,attrs,ngModel){
//       console.log("[DEBUG] Cambió la imagen.")
//       //change event is fired when file is selected
//       el.bind('change',function(){
//         console.log("[DEBUG] Cambió la imagen.");
//         scope.$apply(function(){
//             ngModel.$setViewValue(el.val());
//             ngModel.$render();
//         });
//       });
//     }
//   }
// });


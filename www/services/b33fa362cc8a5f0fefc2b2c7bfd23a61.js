angular.module("app.services.NavService",[["services/de6dc2e5c367fb0a55bbee5505331005.js"]]).factory("NavService",["$state","$stateParams","FetchVolFactory",function(e,t,o){var a={go:function(t){e.go("detail",{id:t})},goLastVol:function(){o.getLastVolId().then(a.go)},next:function(){a.go(Number(t.id)+1)},prev:function(){a.go(Number(t.id)-1)}};return a}]);
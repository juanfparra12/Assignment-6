angular.module('listings').factory('Listings', ['$http', 
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('cen3031assignment-6.herokuapp.com/api/listings');
      },

      create: function(listing) {
        return $http.post('cen3031assignment-6.herokuapp.com/api/listings', listing);
      }, 

      read: function(id) {
        return $http.get('cen3031assignment-6.herokuapp.com/api/listings' + id);
      }, 

      update: function(id, listing) {
        return $http.put('cen3031assignment-6.herokuapp.com/api/listings' + id, listing);
      }, 

      delete: function(id) {
        return $http.delete('cen3031assignment-6.herokuapp.com/api/listings + id);
      }
    };

    return methods;
  }
]);

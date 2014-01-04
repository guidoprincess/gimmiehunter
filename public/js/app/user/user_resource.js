angular.module('gimmiehunter.user.user_resource', 
  ['gimmiehunter.default.resource']
  ).factory("UserResource", 
  ["Resource",
    function(Resource){
      var endpoint = '/gimmiehunter/user',
        params = {},
        options = {};
      return new Resource(endpoint, params, options)
  
    }
  ]
);
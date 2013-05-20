if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to tap_bug.";
  };

  Template.hello.events({
    'tap .test' : function () {
      // template data, if any, is available in 'this'
      $(".click").append("<li>tap Fired</li>");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

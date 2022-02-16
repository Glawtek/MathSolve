var TempMail = require('node-temp-mail');

// Let's create an address object so it can be accessed by the module.
var address = new TempMail("ifika");

// We already have the address object, so now let's access it and get a list of the emails in a nice & neat json object.
address.fetchEmails(function(err,body){
  console.log(body);
});

// If for any reason you need to see the full temporary email address, you can use the following function.
address.getAddress()

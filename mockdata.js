import casual from "casual";

// Create an object for config file
var db = { user: [] };

for (var i = 101; i <= 115; i++) {
  var user = {};
  user.id = i;

  // Create a realistic username
  user.login = casual.username;
  
  // Create a secure-looking password
  user.password = casual.password;

  // Assign a random role
  user.roles = casual.random_element(["user", "admin", "editor"]);

  // Assign a publishing year between 1700 and 2016
  db.user.push(user);
}
console.log(JSON.stringify(db));

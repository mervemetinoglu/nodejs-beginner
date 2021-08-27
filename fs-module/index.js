const fs = require("fs");

let data = { users: [{ name: "Employee 1 Name", salary: 2000 }] };
data = JSON.stringify(data);

//create json file
fs.writeFile("employees.json", data, "utf-8", (err) => {
  if (err) console.log(err);
  console.log("The file created.");
});

/*
//read json file
fs.readFile("employees.json", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log("Data: ", data);
});

//update json file
fs.readFile("employees.json", "utf-8", (err, data) => {
  const json = JSON.parse(data);
  json.users.push({
    name: "Employee 2 Name",
    salary: 4000,
  });
  let newJSONData = JSON.stringify(json);
  fs.writeFile("employees.json", newJSONData, "utf-8", (err) => {
    if (err) console.log(err);
    console.log("The file updated.");
  });
});

//delete json file
fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
  console.log("The file deleted.");
});

*/

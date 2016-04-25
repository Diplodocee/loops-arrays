// loop
var count = 1;
var list = '';

while (count < 11) {
  list += '<li>current count is: ' + count + '</li>';
  count += 1;
}

// output results
document.write("<h1>Loops</h1>");
document.write("<ol>" + list + "</ol>");

var i = 0;
var secondlist = "<ul>";
var MyItems = [
  ["question one", "answer one"],
  ["question two", "answer two"]
  ];
  
while (i< MyItems.length){
  secondlist+="<li>"+myItems[i]+"</li>";
  i++;
};

secondlist+="</ul>";

document.write(secondlist);

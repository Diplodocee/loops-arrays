// loop
var count = 1;
var list = '';

while (count < 11) {
  list += '<li>current count is: ' + count + '</li>';
  count += 1;
  setTimeout(function() {},1250);
}

// output results
document.write("<h1>Loops</h1>");
document.write("<ol>" + list + "</ol>");

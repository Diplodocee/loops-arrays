// loop
var count = 1;
var list = '';
document.write("<h1>Loops</h1>");
while (count < 11) {
  list += '<li>current count is: ' + count + '</li>';
  document.write("<ol>" + list + "</ol>");
  count += 1;
  setTimeout(function() {},1250);
}

// output results



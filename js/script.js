// loop
var count = 1;
var list = '';

while (count < 11) {
  setTimeout(function() {list += '<li>current count is: ' + count + '</li>'},1250);
  count += 1;
}

// output results
document.write("<h1>Loops</h1>");
document.write("<ol>" + list + "</ol>");

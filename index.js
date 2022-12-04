function testFunction() {
  var el = document.getElementById("title");
  var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  el.style.fontSize = (fontSize + 1) + 'px';
  document.getElementById("demo").innerHTML = fontSize;
}
function secondtestFunction() {
  var el = document.getElementById("title");
  var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  el.style.fontSize = (fontSize - 1) + 'px';
  document.getElementById("demo").innerHTML = fontSize;
}
function colorChanger() {
  document.getElementById("colored").style.color = "green";
}

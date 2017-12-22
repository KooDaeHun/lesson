function plus(num1, num2){
	return num1 + num2;
}
function minus(a, b){
	return a - b;
}
function multi(a, b){
	return a * b;
}
function division(a, b){
	return a / b;
}
function getValueOfTag(a) {
	return a = Number(document.getElementById(a).value);
}
function simpleTarget(target){
	var target = document.getElementById("operator");
	return Number(target.options[target.selectedIndex].value);
}

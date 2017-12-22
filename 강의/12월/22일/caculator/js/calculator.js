function solve(){
		// 셀렉터 박스의 입력값을 받아옴.
		var inputOp = simpleTarget(); 
		// 입력한 숫자 두개.
		var num1 = getValueOfTag('inputNum1');
		var num2 = getValueOfTag('inputNum2');
		var result = 0;
		// 계산하는 부분.
		if(inputOp == 1){
			result = plus(num1, num2);
		} else if(inputOp == 2){
			result = minus(num1, num2);
		} else if(inputOp == 3){
			result = multi(num1, num2);
		} else if(inputOp == 4){
			result = division(num1, num2);
		}
		// 출력하는 부분.
		console.log("결과 : "+result);
		alert("calculator!");
		document.getElementById('res').innerHTML = result;
	}

	

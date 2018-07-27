export function factorial(num) {
	let fact = 1
	if (num > 0) {
		for (var i = 1; i <= num; i++) {
			fact = i * fact;
	  	}
  	} else if (num < 0) {
  		fact = "The entered number is negative"
  	} else {
  		fact = 0;
  	}
  	return fact
}


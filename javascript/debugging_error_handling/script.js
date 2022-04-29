function pulaLinha() {
	document.write("<br/>");
	document.write("<br/>");
}

function validaArray(arr, num) {
	
	try {
		
		if(!arr && !num) throw new ReferenceError("Envie os parâmetros ");

		if(typeof arr !== "object") throw new TypeError("Array precisa ser do tipo object");

		if(typeof num !== "number") throw new TypeError("Num precisa ser do tipo number");
	
		if(arr.lenght !== num) throw new RangeError("Tamanho Invalido");
		

		return arr;
		
	} catch(e) {
		
		if(e instanceof ReferenceError) {
			console.log("Este erro é um ReferenceError");
			console.log(e.message);
			document.write(e.message + "<br/>");
			document.write("Este erro é um ReferenceError");
			pulaLinha();
			
		}else if(e instanceof TypeError) {
			console.log("Este erro é um TypeError");
			console.log(e.message);
			document.write(e.message + "<br/>");
			document.write("Este erro é um TypeError");
			pulaLinha();
			
		}else if(e instanceof RangeError) {
			console.log("Este erro é um RangeError");
			console.log(e.message);
			document.write(e.message + "<br/>");
			document.write("Este erro é um RangeError");
			pulaLinha();
			
		} else {
			console.log("Tipo de erro não esperado: " + e);
		}
		
	}
}

console.log(validaArray());// ReferenceError

console.log(validaArray(5, 5));// TypeError

console.log(validaArray([], "a"));// TypeError

console.log(validaArray([], 5));// RangeError

console.log(validaArray([1,2,3,4,5], 5));// Retorna sem erro



function comparar(){
	var form1 = parseInt(document.getElementById("valor1").value);
	var form2 = parseInt(document.getElementById("valor2").value);
	var form3 = parseFloat(document.getElementById("valor3").value);
	var img = document.getElementById("img");
	
	if (form1 * form3 <= form2) {
		document.getElementById("res").value="Gasolina";
		img.src = "gas.png";
	}
	
	else if (form1 * form3 > form2) {
		document.getElementById("res").value="alcool";
		img.src = "alcool.png";
	}
	
	else{	
		document.getElementById("res").value="";
		img.src = "padrao.png";
	}
}
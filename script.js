function criptografar() {
	var texto  = document.getElementById("inputTexto").value.toLowerCase()
	var criptografia = texto.replace(/e/igm, "enter");
	var criptografia = criptografia.replace(/o/igm, "ober");
	var criptografia = criptografia.replace(/i/igm, "imes");
	var criptografia = criptografia.replace(/a/igm, "ai");
	var criptografia = criptografia.replace(/u/igm, "ufat");

	document.getElementById("logocriptografia").style.display = "none";
	document.getElementById("mensagemquedevesumir").style.display = "none";
	document.getElementById("caixatexto").innerHTML = criptografia;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit"


}

function descriptografar() {
	var texto  = document.getElementById("inputTexto").value.toLowerCase();
	var criptografia = texto.replace(/enter/igm, "e");
	var criptografia = criptografia.replace(/ober/igm, "o");
	var criptografia = criptografia.replace(/imes/igm, "i");
	var criptografia = criptografia.replace(/ai/igm, "a");
	var criptografia = criptografia.replace(/ufat/igm, "u");

	document.getElementById("logocriptografia").style.display = "none";
	document.getElementById("mensagemquedevesumir").style.display = "none";
	document.getElementById("caixatexto").innerHTML = criptografia;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit"

}

function copiar() {
	var conteudo = document.querySelector("#caixatexto");
	conteudo.select();
	document.execCommand("cut");
	alert("Texto copiado para a área de transferencia!")
	document.location.reload(true);
}

// your code here
function query() {
	alert("hello")
	const name = document.getElementById("name").value
	const year = document.getElementById("year").value
	// alert(name)
	
	if(name && year){
		document.getElementById("url").innerText="https://localhost:8080/"+"?name="+name+"&year="+year
	}
	else if(name && !year){
		document.getElementById("url").innerText="https://localhost:8080/"+"?name="+name
	}
	else if(!name && year){
		document.getElementById("url").innerText="https://localhost:8080/""?year="+year
	}
	else{
		document.getElementById("url").innerText="https://localhost:8080/"
	}
	alert(document.getElementById("url").innerText)
	
}
query()
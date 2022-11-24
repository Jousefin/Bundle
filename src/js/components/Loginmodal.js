export function login (){
	const d = document,
	open = d.getElementById("btnLogin"), 
	close = d.getElementById("closeLogin"),
	modal = d.getElementById("login")
	open.addEventListener("click", ()=>{
		modal.classList.add("active");
	})

	close.addEventListener("click", ()=>{
		modal.classList.remove("active");
	})
}


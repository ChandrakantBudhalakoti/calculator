let buttons = document.querySelectorAll("button");
function run (){
	for(item of buttons){
		item.addEventListener("click",(e)=>{
			buttonText = e.target.innerText;
			if (buttonText == 'X') {
				buttonText = "*";
				screenValue += buttonText;
				screen.value = screenValue;
			}
			else if (buttonText == 'C') {
				screenValue = "";
				screen.value = screenValue;
			}
			else if (buttonText == '=') {
				screen.value = eval(screenValue);
			}
			else{
				screenValue += buttonText;
				screen.value = screenValue;
			}
		})
	}
	}
	run();
let screen = document.querySelector("#answer");
let screenValue = "";




function abc()
{
	console.log("the button was clicked")
}
document.querySelectorAll("button").addEventListener("click",abc);


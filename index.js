
const btn = document.querySelector('.btn');
btn.addEventListener('click', generatePass);

function generatePass() {

    let characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
    let pass1 = document.querySelector("#pass1")
    let pass2 = document.querySelector("#pass2")
    let passLength = document.getElementById("pass-length") 
    let maxAlert = document.getElementById("maximum-alert")
    let copyAlert = document.getElementById("copy-alert")
    let copyInfo = document.getElementById("copy-info")

    copyAlert.textContent = ""
    
     console.log(passLength.value.length)

    if(passLength.value > 25) {
        maxAlert.textContent = "The maximum password length is 25"
    } else if(passLength.value < 6 && passLength.value.length !== 0) {
        maxAlert.textContent = "The minimum password length is 6"
    } else if(passLength.value.length === 0){
        pass1.textContent = ""
        pass2.textContent = ""
        maxAlert.textContent = ""
    for (let i=0; i< 15; i++){
        let randomNum1 = Math.floor(Math.random() * characters.length);
        let randomNum2 = Math.floor(Math.random() * characters.length);
        pass1.textContent += characters[randomNum1]
        pass2.textContent += characters[randomNum2]
        }
        copyInfo.textContent = "Click on the password to copy it to clipboard!"
    } else {
    pass1.textContent = ""
    pass2.textContent = ""
    maxAlert.textContent = ""
    console.log(passLength.value)
    for (let i=0; i< passLength.value; i++){
        let randomNum1 = Math.floor(Math.random() * characters.length);
        let randomNum2 = Math.floor(Math.random() * characters.length);
        pass1.textContent += characters[randomNum1]
        pass2.textContent += characters[randomNum2]
        }
        copyInfo.textContent = "Click on the password to copy it to clipboard!"
    }   
}

function copyPass1() {
    let copyAlert = document.getElementById("copy-alert")
    console.log(pass1.textContent)
    navigator.clipboard.writeText(pass1.textContent);
    copyAlert.textContent = "Password copied to clipboard!"
}

function copyPass2() {
    let copyAlert = document.getElementById("copy-alert")
    console.log(pass2.textContent)
    navigator.clipboard.writeText(pass2.textContent);
    copyAlert.textContent = "Password copied to clipboard!"
}

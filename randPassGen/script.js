function getPLength(){
    const length = document.getElementById("length").value;
    return Number(length);
}

function getPwdProp(){
    const ids= ["lowercase", "uppercase", "nums","special"]; 
    const prop = {};

    for (const id of ids){
        const elem = document.getElementById(id);
        prop[id] = elem.checked;
    }

    return prop;
}

function getChars(lowercase = true){
    const start = lowercase ? 97 : 65;
    let chars = [];

    for (let i = start; i< start + 26; i++){
        chars.push(String.fromCharCode(i));
    }

    return chars;
}
function getNums(){
    const nums = [];

    for(let i = 0; i < 10; i++){
        nums.push(i);
    }
    return nums;
}
    const lowercaseChars = getChars(true);
    const uppercaseChars = getChars(false);
    const nums = getNums();
    const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-"];

function genPwd(){
    const length = getPLength();
    const prop = getPwdProp();
    
    const characters = [];
    if(prop.lowercase)
        characters.push(...lowercaseChars);
    if(prop.uppercase)
        characters.push(...uppercaseChars);
    if(prop.nums)
        characters.push(...nums);
    if(prop.special)
        characters.push(...special);
    
    if(characters.length === 0){
       return alert("You must select at least one set of characters.")
    }

    let pwd = [];

    for(let i = 0; i < length; i++){
        const randIdx = Math.floor(Math.random() * characters.length);
        const char = characters[randIdx];
        pwd.push(char);
    }
    const pwdString = pwd.join("");
    document.getElementById("pwd").innerHTML = "<p>" + pwdString + "</p>";
}

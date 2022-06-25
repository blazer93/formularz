function verification(){
    var age = parseInt( document.forms['form1']['age'].value ); 
    if (isNaN(age) ){
        alert("podaj wiek" );
        return false;
    }

    if( age < 18 ){
    alert("Jestes niepelnoletni");
    return false;
    } else {
    var yourname = document.forms['form1']['yourname'].value;
    alert("YO" + yourname );
    return true
    }
}

function goin(){
    const loginform = document.forms.login
    const nickElem = loginform.elements['log'];
    const passElem = loginform.elements['pas'];
console.log(nickElem)
if(nickElem.value.length < 3 ) {
    nickElem.style.backgroundColor = "red";
    return  false;
}
if(passElem.value.length < 6 ) {
    passElem.style.backgroundColor = "red";
    return false;

    
}
}
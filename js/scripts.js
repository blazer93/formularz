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
    var nickElem = document.forms['login']['log'];
    var passElem = document.forms['login']['pas'];

if(nickElem.value.lenght < 3 ) {
    nickElem.style.backgroundColor = "red";
    return  false;
}
if(passElem.value.lenght < 6 ) {
    passElem.style.backgroundColor = "red";
    return false;

    
}
}
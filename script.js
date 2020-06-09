var character =
    document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classlist,remove("animate");
       },500);
    }
var checkDead = setInterval(function(){
    var CharacterTop=
        parseint(window.getComputedStyle(character).getpropertvalue("top"))
},10);

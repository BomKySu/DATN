var myElement = document.getElementById('myVarForAlert');
var myText = myElement.innerHTML;
if (myText.length > 0)
{
    JSAlert.alert(myText);
    console.log(myText);
}
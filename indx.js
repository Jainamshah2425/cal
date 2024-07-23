const dis = document.getElementById("dis");
                                           /* <div id="calci">
        <input id="dis" readonly>
        <div id="keys">*/
function appendtodisplay(input){
    dis.value += input;

}
function calculate()
{
    try{
dis.value = eval(dis.value);
    }
    catch(error){
        dis.value="Error";
    }
}
function cleardisplay(){
dis.value=" ";
}
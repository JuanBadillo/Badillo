var opct = elem.style.opacity;
function clicked(color){
    console.log(opct);
    //var source = event.srcElement.id;
    const elem = document.getElementById("sidebar");
    //elem.style.background = color;

    if (elem.style.opacity = "0" == "100") {
        elem.style.opacity = "0";
        console.log("C1");
    }
    if (elem.style.opacity == "0") {
        elem.style.opacity = "100";
        console.log("C2");
    }
}
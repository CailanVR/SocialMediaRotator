function create() {
    var dupe = document.createElement("DIV");
    dupe.setAttribute("id","holder")
    dupe.innerHTML = "Duped";
    document.getElementById("main").appendChild(dupe);
    console.log(Object.keys(settings)[0]);
}
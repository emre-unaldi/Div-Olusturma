var inputBtn = document.createElement("input");
document.body.appendChild(inputBtn);
inputBtn.setAttribute("type","color");
inputBtn.setAttribute("id","renkSecimi");
inputBtn.setAttribute("value","#ffffff");
inputBtn.setAttribute("style",`
    display:flex;
    justify-content:center;
    align-items:center;
    width:94px;
    height:30px;
    margin:5px auto;
`);

var renkAlBtn = document.createElement("button");
document.body.appendChild(renkAlBtn);
var renkAlBtnText = document.createTextNode("Div Oluştur");
renkAlBtn.appendChild(renkAlBtnText);
renkAlBtn.setAttribute("style",`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100px;
    height: 30px;
    margin:5px auto;
`);
renkAlBtn.setAttribute("onclick","divOlustur()");

var temizleBtn = document.createElement("button");
document.body.appendChild(temizleBtn);
var temizleBtnText = document.createTextNode("Temizle");
temizleBtn.appendChild(temizleBtnText);
temizleBtn.setAttribute("style",`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100px;
    height: 30px;
    margin:5px auto;
`);
temizleBtn.setAttribute("onclick","temizle()");

var divSayi = 1;
function divOlustur(){
    var renkAl = document.getElementById("renkSecimi").value;
    var yeniDiv = document.createElement("div");
    yeniDiv.setAttribute("id",divSayi);
    yeniDiv.setAttribute("style",`
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight:600;
        font-size:25px;
        width:13%; 
        height:100px; 
        background-color:${renkAl};
        margin:0;
        border-radius:10px;
        position:relative;
        margin:10px 20px;
    `);
    // if(!container.firstChild){
    //     divSayi = 1;
    // }else{
    //     divSayi++;
    // }
    container.appendChild(yeniDiv);

    var divSilme = document.createElement("div");
    var divSilmeText = document.createTextNode("x");
    divSilme.appendChild(divSilmeText);
    yeniDiv.appendChild(divSilme);
    divSilme.setAttribute("style",`
        width:30px;
        height:20px;
        background-color:${renkAl};
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 80%;
        left: 90%;
        padding-bottom:5px;
        border-radius:5px;
    `);
    
    divSilme.setAttribute("onclick","divSil(this.parentNode.id)");
    var divText = document.createTextNode(divSayi);
    yeniDiv.appendChild(divText);
    divSayi++;
    // localStorage.setItem(`Veri${divSayi}`,yeniDiv);
}

function divSil(idCek){
    var idAl = idCek;    
    document.getElementById(idAl).remove();
}

var container = document.createElement("div");
container.setAttribute("style",`
    flex-wrap:wrap;
    display:flex;
    justify-content:center;
    align-items:center;
    width:90%; 
    height:auto; 
    background-color:white;
    border: 5px solid rgb(98,111,111);
    margin: 30px auto;
    padding: 0;
    border-radius:20px;
    `);
    container.classList.add("container");
document.body.appendChild(container);


function temizle(){
    var cocukSayi = container.childElementCount;
    for (let index = 0; index <= cocukSayi; index++) {
        //document.querySelectorAll(".container > div")[index].remove();
        //console.log(document.querySelectorAll(".container > div")[index]);
        // console.log(container.children[index]);
        container.children[index].remove();
    }
}





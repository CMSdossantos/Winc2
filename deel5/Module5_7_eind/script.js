/* i.v.m. Time To First Byte (TTFB) zijn de request tijden ongeveer 8 seconden. */
let listArr = [];
const inp = document.getElementById("inputBar");
const adress = "https://jsonbox.io/box_b3b17a9fea32546a1056/";
let obj = { task: inp.value, done: false};


function mkLine (line, done) {
    let listItem = document.createElement("li")
    listItem.innerHTML = `<input type="checkbox" class="checkbox">` + line + `<i class="far fa-trash-alt"></i>`;
    if(done){
        listItem.classList.add("lineThrough");
        listItem.firstChild.checked = true;
    } else {
        listItem.classList.remove("lineThrough");
        listItem.firstChild.checked = false;
    }        
    uList.insertBefore(listItem, uList.firstChild);
}
/// initiële get request
fetch("https://jsonbox.io/box_b3b17a9fea32546a1056?sort=_createdOn")
.then((dt) => dt.json())
.then((dt) => {
    // listArr = dt;
    dt.map((tsk ) => {
        if(tsk.hasOwnProperty("task")) {
            listArr.unshift(tsk);
            mkLine(tsk.task, tsk.done); 
        }
    });
    return listArr;
})
.then( () => {
    addListeners()
})

function addListeners () {
    let uList = document.getElementById("uList");
    uList.addEventListener("click", (e) => { 
    
        for(let i = 0; i < uList.children.length ; i++){
            let node = uList.childNodes[i];

            if(e.target == node.firstChild ){
                node.classList.toggle("lineThrough"); 
                listArr[i].done = !listArr[i].done;
                mkRequest("put", listArr[i]._id, {task: listArr[i].task, done: listArr[i].done }) 
            }
            if(e.target == node.lastChild){ 
                mkRequest("delete", listArr[i]._id); 
                listArr.splice(i,1); 
                node.remove(); 
            }
        } 
    });
}

//add button
const add = document.getElementById("btn");
add.addEventListener("click", () => { mkRequest("post","") });

//soorten requests maken
function mkRequest(meth, box_id, object, index  ) {

    let headerObj = { headers: { "Content-Type": "application/json"} }

    switch(meth) {
        case "post":
            headerObj.method = "post";
            headerObj.body =  JSON.stringify({task: inp.value, done: false});
            mkLine(inp.value);
            inp.value = ""; del = true;
            break;
        case "put":
            headerObj.method = "put";
            headerObj.body =  JSON.stringify(object);
            break;
        case "delete":
            headerObj.method = "delete";
            headerObj.body = "";
            del = false;
            break;
        }
        
    fetch(adress + box_id, headerObj)
            .then( (res) => {
                return res.json()} )
            .then((resjsn) => {
                if(headerObj.method == "post"){
                    listArr.unshift(resjsn); 
                }
                if(headerObj.method == "put"){
                } 
    })
    .then(() => console.log("request made"))
    .catch((err) => console.log(err))            
}

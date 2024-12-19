let task=document.getElementById("task");
let resultdiv=document.getElementById("resultdiv");
let sno=0;
let present=0;
let table=document.createElement("table");
resultdiv.appendChild(table);
table.style.marginTop="10px";
table.style.width="100%";
task.addEventListener('keydown',function update(event){
    if(event.key=="Enter"&&task.value!=""){
        present++;
        table.style.border="1px solid black";
        table.style.borderCollapse="collapse";

    let tr=document.createElement("tr");
    table.appendChild(tr);
    sno++;
    tr.className="para"+sno;
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    td1.style.border = "1px solid black";
    td2.style.border = "1px solid black";
    td3.style.border = "1px solid black";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    let btn=document.createElement("button");
    let checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.className="para"+sno;
    btn.textContent="Delete";
    btn.className="para"+sno;
    let p=document.createElement("p");
    td1.appendChild(checkbox);
    p.textContent=task.value;
    td2.appendChild(p);
    p.className="para"+sno;
    console.log(p);
    td3.appendChild(btn);
    btn.addEventListener('click',(event)=>{
        if(event.target.className==tr.className){
            present--;
            if(present==0){
                table.style.border="none";
            }
            tr.remove();
        }
    })
   checkbox.addEventListener('change',()=>{
    if(checkbox.checked){
        let className=checkbox.className;
        if(className==p.className){
            p.style.textDecoration="line-through";
        }
    }
    else{
        p.style.textDecoration = "none";
    }
   })
   let edit=document.createElement("button");
   edit.textContent="Edit";
   td3.appendChild(edit);
   edit.className="para"+sno;
   edit.addEventListener('click', () => {
    let task2=document.createElement("input");
    task2.value=p.textContent;
    td2.appendChild(task2);

    task2.focus();
    p.textContent="";
    task2.addEventListener('keydown', (event2)=> {
        if (event2.key == "Enter") {
            p.textContent = task2.value;
            task2.style.display="none"; 
        }
        
    });
});
 
   task.value="";
    }
});
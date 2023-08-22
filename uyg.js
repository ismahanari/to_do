    /*var selectedRow = null;

    const input_ekle = document.querySelector("#input")
    const btn = document.querySelector("#btn")
    const liste = document.querySelector("#myTable") 
    const myList = document.querySelector("#myList")
    let array = []


    btn.onclick = function(){
        let td_eleman=document.createElement("input_ekle");
        td_eleman.textContent = input_ekle.value

       if (input_ekle.value.length > 0) {  // boş ekleme yapmaz!
        var g_button = document.createElement(`div`);
        g_button.classList.add(`g_button`); //class atadık
        g_button.setAttribute("class","g_button");
        
        g_button.innerText =`Güncelle`
        

       
        let tr=document.createElement("li");
        tr.appendChild(td_eleman);

        myList.appendChild(tr);
        tr.appendChild(g_button)
        
        

        input_ekle.value = "";
       }

       else{
        alert("lütfen birşeyler yazın !")
       }
    }

    //sondan başa doğru sildirir.
    function deleteRow(ele){
        var table = document.getElementById(`myTable`) 
        var rowcount = table.rows.length

        if (rowcount<1){
            alert("silinecek satır yok")
            return
        }
        else{
            table.deleteRow(rowcount-1)
        }
    }

    
    document.getElementById(`myTable`).addEventListener(`click`, (event) =>{
        var target = event.target;
        for (i=0;i<1000 ; i++){
            if (target.classList.contains("g_button")){
                var text = document.querySelector(`#input`).value
                //selectedRow = target.parentNode.parentNode;
                selectedRow = target.parentElement.parentElement;
                //selectedRow.deleteRow(target.event)
                //selectedRow = target.parentElement.parentElement;
                
                //document.querySelector(`#input`).value = selectedRow.children[0].textContent;
                selectedRow.children[0].textContent = text;
                document.querySelector(`#input`).value = ""
            }
        }
    })  
 */

let data = [
    {id:1 , yap: "yemek yap"},
    {id:2, yap:"uyu"}
]
console.log(data)

function All() {
    
    localStorage.setItem("object", JSON.stringify(data));
    var tabledata = document.querySelector(".data_table");
    var object = localStorage.getItem('object');
    var objectdata = JSON.parse(object);
    var elements = "";

    objectdata.map(record => (
        elements += `<tr>
        <td>${record.yap}</td>
        
        <td>
            <button class="edit"  onclick={edit(${record.id})}>Güncelle</button>
            <button class="delete" onclick={delet(${record.id})}>Sil</button>
        </td>
        </tr>`
    ) )
    tabledata.innerHTML = elements;
} 




function add(event){
    event.preventDefault()
    var dt = document.querySelector(".inp").value;
    var newobj = {id:3, yap: dt}
    data.push(newobj)
    
    document.querySelector(".inp").value = ""
    All()
}

function edit(id){
    
    var obj = data.find(rec => rec.id === id)
    document.querySelector(".uname").value = obj.yap;
    document.querySelector(".id").value = obj.id;
}

function update() {
    var id = parseInt(document.querySelector(".id").value);
    var yap = document.querySelector(".uname").value ;

    var index = data.findIndex(rec => rec.id === id);
    data[index] = {id, yap}
    document.querySelector(".uname").value = ""
    All()
}

function delet(id){
    data = data.filter(rec => rec.id !== id);
    All()   
}
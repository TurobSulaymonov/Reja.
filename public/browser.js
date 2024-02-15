 //

console.log("ishga tushdi");

function itemTemplate(item){
return ` 
<li
class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
>
<span class="item-text">${item.reja}</span>
<div>
   <button data-id="${item._id}" class="edit-me btn-secondary btn-sm mr-1">
       Ozgarrtirish
   </button>
   <button data-id="${item._id}" class="delete-me btn btn-danger mr-1">
       Ochirish
   </button>
</div>
</li>
`

}

let createField = document.getElementById("create-field");
document.getElementById("create-form")
.addEventListener("submit", function(e) {
   e.preventDefault();
   
   axios
   .post("/create-items", {reja: createField.value })

   .then((responce) => {
    document
    .getElementById("item-list")
    .insertAdjacentHTML("beforeend", itemTemplate(responce.data))
     createField.value = "";
     createField.focus();   
})
   .catch( (err) =>{
      console.log("iltimos qaytadan urinib koring");
   });
});

document.addEventListener("click", function(e) {
    //console.log(e);
    // delete oper
    if(e.target.classList.contains("delete-me")) {
        // alert("siz delete tugmasini bosdingiz");
         if(confirm("Aniq ochirmoqchimisiz")) {
           // alert("Yes deb javob berildi");
           axios.post("/delete-item", { id: e.target.getAttribute("data-id")})
           .then((respose) => {
            console.log(respose.data);
            e.target.parentElement.parentElement.remove();
           })
           .catch((err) =>{
            console.log("iltimos qaytadan urinib koring");
           })
         }
        
    }



    // edit oper
 if(e.target.classList.contains("edit-me")) {
         alert("siz edit tugmasini bosdiz");
         let userInput = prompt(
            "O'zgartirishni kiriting", 
         e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
          if(userInput) {
             console.log(userInput);
            axios.post("/edit-item", {
                id: e.target.getAttribute("data-id"),
                new_input: userInput,
            }).then(response => {
               console.log(response.data);
               e.target.parentElement.parentElement
               .querySelector(".item-text")
               .innerHTML = userInput;
              

            }).catch(err => {
              console.log("iltimos qaytadan urinib koring");
            });
        } 
}
});
 document.getElementById("clean-all").addEventListener("click", function () {
    axios.post("/delete-all", {delete_all: true}).then(respose => {
        alert(respose.data.state);
        document.location.reload();
    });

});  
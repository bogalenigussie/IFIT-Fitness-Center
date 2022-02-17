$("#add_user").submit(function(event){
    alert("Data submitted succesfully");
})
$("#update_user").submit(function(event){
   event.preventDefault();
   var unindexed_array =$(this).serializeArray();
   var data={}
   //let "n" represent all data of the unindex_array & "i" represents the indexs of the unindex_array
   $.map(unindexed_array,function(n,i){
      data[n["name"]]=n["value"]
   })
   console.log(data)
   var request ={
       "url":`http://localhost:3000/api/users/${data.id}`,
       "method":"PUT",
       "data":data
   }
   $.ajax(request).done(function(response){
      alert("Data successfully updated!");
   })
})

if(window.location.pathname == "/"){
    delete_btn =$(".table tbody td a.delete")
    
    delete_btn.click(function(){
    var id = $(this).attr("data-id")    
    var  request ={
        "url":`http://localhost:3000/api/users/${id}`,
        "method":"DELETE",
      
    }

    if (confirm("Do you really want to delete this record?")){
        $.ajax(request).done(function(response){
            alert("Data successfully updated!");
        })
        alert("The record is succesfully deleted!");
        location.reload()
     }
       
    })
}
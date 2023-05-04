const SaveForm1 = $('#frm1');
const saveButton1 = $('#saveButton');
//saveButton.click(() => 
function SaveDataSearch(bUrl,lang)
{ 

    if ($('#q').val().trim() == '') {
        al_err("Missing!", "Enter the Search Keyword1", "warning", "");
        return;
    }
   
    
    var form = $("#frm1")[0];
    var form_data = new FormData(form);

    $.ajax({
      url:
      bUrl + "/search/serchlist/"+lang ,
      dataType: "text", // what to expect back from the PHP script, if anything
      cache: false,
      contentType: false,
      processData: false,
      data: form_data,
      type: "post",
      success: function (response) {        
        console.log(response)    ;
       
       document.getElementById('divsearch').innerHTML =response;
      },
    });

}

var input = document.getElementById("q");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("saveButton").click();
  }
});
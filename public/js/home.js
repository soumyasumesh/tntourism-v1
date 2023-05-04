const SaveForm = $('#frm1');
const saveButton = $('#saveButton');
//saveButton.click(() => 
function SaveData(bUrl)
{

       if ($('#name').val().trim() == '') {
        al_err("Missing!", "Enter the name", "warning", "");
        return;
    }

    if ($('#email').val().trim() == '') 
    {            
        al_err("Missing!", "Please enter a valid email", "warning", "");
        return;        
    }
    var form = $("#frm1")[0];
    var form_data = new FormData(form);

    $.ajax({
      url:
      bUrl + "/home/subscribe" ,
      dataType: "text", // what to expect back from the PHP script, if anything
      cache: false,
      contentType: false,
      processData: false,
      data: form_data,
      type: "post",
      success: function (response) {        
       // alert(response)    ;
       
          if (response == 1) {
              
         // al_err("Success!", "Your request for the subscription of the Tamil Nadu Tourism monthly e-newsletter is successful. You will soon receive an e-mail confirming your request. Do approve your subscription request to complete the process.", "info", "");   

         al_err("Success!", "Your request for the subscription of the Tamil Nadu Tourism monthly e-newsletter is successful.", "info", "");   
          $('#name').val('');
          $('#email').val('');
          
         
        } else {
          al_err("Failed!", "Your request for the subscription of the Tamil Nadu Tourism monthly e-newsletter is failed.", "warning", "");
          
        }
      },
    });

}

function al_err(tit,txt,ico,ele)
{
	swal({
	  title: tit,
	  text: txt,
	  icon: ico,
	  dangerMode: true,
	})
	.then((willFill) => {
	  if (willFill) {
	    if (ele) document.getElementById(ele).focus();
	  }
	});
}

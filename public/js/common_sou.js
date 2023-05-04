const msgBox = (text, icon) => {
    Swal.fire({
        text: text,
        icon: icon,
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        customClass: {
            confirmButton: "btn btn-light"
        }
    });
}

function validateCertificate(txt)
{
	if( !txt.match(/\.(jpg)|(jpeg)|(JPG)|(JPEG)|(pdf)|(PDF)$/)) { return false; } else  {return true; }
}



function uploadPbImage(bUrl, fPath1, fPath2, ele, sizeInBits, type, titleData) {
  let titleField, titleLabel ;
  [titleField, titleLabel]  = titleData.split(":");

  if ($("#" + titleField).val().trim() == "") {
    msgBox("Please enter the "+titleLabel, 'warning');

    document.getElementById(ele).value = "";
    return false;
  } else {
    var name = encodeURIComponent($("#" + titleField).val().trim());
  }

  var filereturn = validateCertificate(document.getElementById(ele).value);
  if (filereturn == false) {
    msgBox("Wrong file format! Please check the supported file formats", 'warning');

    document.getElementById(ele).value = "";
    return false;
  }
  var sizeInBytes = sizeInBits * 1024;
  var fi = document.getElementById(ele);
  var fsInBytes = fi.files.item(0).size;
  var maxSize = sizeInBytes;
  if (fsInBytes > maxSize) {
    msgBox("Large size! The file size exceeds the maximum limit allowed<br>Your file is of " +showFileSize(fsInBytes) +" size.", 'warning');
    document.getElementById(ele).value = "";
    return false;
  }

  document.getElementById("overlay").style.display = "block";
  
  var form = $("#frm")[0];
  var form_data = new FormData(form);
  
  //console.log(form_data);

 /* form_data.append('ele',ele);
  form_data.append('sizeInBytes',sizeInBytes);
  form_data.append('type',type);
  form_data.append('name',name); */



  $.ajax({
    url:
    bUrl + "/ajaxcontroller/upload-file/"+
    ele +
    "/" +
    sizeInBytes +
    "/" +
    type +
    "/" +
    name ,
    dataType: "text", // what to expect back from the PHP script, if anything
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    type: "post",
    success: function (response) {
      document.getElementById("overlay").style.display = "none";
      alert(response);
     
      var myarr = response.split("~");
      var res = myarr[0];
      var msg = myarr[1];
      if (res == 1) {
       
        document.getElementById("block1-" + ele).innerHTML =
        `<div class="cover"><img class="img-height" src="` +
          fPath2 +
          msg +
          `" width="100%"> </div><button type="button"  class="btn btn-link text-danger" onclick="removeuploadPbImage('` +
          bUrl +
          `', '` +
          ele +
          `', ` +
          type +
          `, '` +
          msg +
          `')"><i class="las la-trash-alt fs-2x"></i> Delete</button>`;
        document.getElementById("block2-" + ele).style.display = "none";
        document.getElementById(ele).value = "";
        document.getElementById("hid_" + ele).value = msg;
      } else if (res == 0) {
        document.getElementById("block1-" + ele).innerHTML =
          '<div class="alert alert-danger">Failed! ' + msg + "</div>";
        document.getElementById(ele).value = "";
        document.getElementById("hid_" + ele).value = "";
      } else {
        document.getElementById("block1-" + ele).innerHTML =
          '<div class="alert alert-danger">Unexpected error occured! please try again</div>';
        document.getElementById(ele).value = "";
        document.getElementById("hid_" + ele).value = "";
      }
    },
  });
}



  function removeuploadPbImage(bUrl, ele, type, fileame) {
 
    document.getElementById("block2-" + ele).style.display = "block";
    document.getElementById("block1-" + ele).innerHTML = "";
    document.getElementById("hid_" + ele).value = "";
    document.getElementById(ele).value = "";

    
  
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        if (xmlhttp.responseText) {
          var rtext = xmlhttp.responseText;
        }
      }
    };
    
    xmlhttp.open(
      "GET",
      bUrl + "/ajaxcontroller/remove-file/" + type + "/" + fileame + "/" + getRandomString(),
      true
    );
    xmlhttp.send();
  }

  
function getRandomString()
{
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
	var s = d.getSeconds();
	return h.toString()+m.toString()+s.toString()+Math.floor(Math.random() * 100);
}



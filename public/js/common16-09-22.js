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

const goBack = path => {
  window.location.href = path;
}

function uploadPbImage(bUrl, fPath1, fPath2, ele, sizeInBits, type, titleData,title_mand='') {
  
  let titleField, titleLabel ;
  [titleField, titleLabel]  = titleData.split(":");

  if ($("#" + titleField).val().trim() == "") {
    
    if(title_mand=='')
    {
       msgBox("Please enter the "+titleLabel, 'warning');
       document.getElementById(ele).value = "";
       return false;  
    }
    else    var name = 'tamil-nadu-tourism-image';
  } 
  else 
  {
    var name = encodeURIComponent($("#" + titleField).val().trim());
  }

  

  var filereturn = validateImage(document.getElementById(ele).value);

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
  $.ajax({
    url:
    bUrl + "/ajaxcontroller/upload-file/"+
    ele +
    "/" +
    sizeInBytes +
    "/" +
    type +
    "/" +
    name  ,
    dataType: "text", // what to expect back from the PHP script, if anything
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    type: "post",
    success: function (response) {
      document.getElementById("overlay").style.display = "none";
     
     
      var myarr = response.split("~");
      var res = myarr[0];
      var msg = myarr[1];
      if (res == 1) {
       
        
      document.getElementById("block1-" + ele).innerHTML =
      `<div class="cover"><img class="img-height" src="` +
        fPath2 +
        msg +
        `" > </div><button type="button"  class="btn btn-link text-danger" onclick="removeuploadPbImage('` +
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

function uploadFile(bUrl, fPath1, fPath2, ele, sizeInBits, type, titleData,title_mand='') {
  
  let titleField, titleLabel ;
  [titleField, titleLabel]  = titleData.split(":");

  if ($("#" + titleField).val().trim() == "") {
    
    if(title_mand=='')
    {
       msgBox("Please enter the "+titleLabel, 'warning');
       document.getElementById(ele).value = "";
       return false;  
    }
    else    var name = 'tamil-nadu-tourism-image';
  } 
  else 
  {
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
  $.ajax({
    url:
    bUrl + "/ajaxcontroller/upload-document/"+
    ele +
    "/" +
    sizeInBytes +
    "/" +
    type +
    "/" +
    name  ,
    dataType: "text", // what to expect back from the PHP script, if anything
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    type: "post",
    success: function (response) {
      document.getElementById("overlay").style.display = "none";
     
     
      var myarr = response.split("~");
      var res = myarr[0];
      var msg = myarr[1];
      if (res == 1) {
       
            
     document.getElementById("block1-" + ele).innerHTML =
      `<a href="` +
        fPath2 +
        msg +
        `" target="_blank">View Document </a><button type="button"  class="btn btn-link text-danger" onclick="removeuploadPbImage('` +
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

const getRandomString = () => {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  return h.toString()+m.toString()+s.toString()+Math.floor(Math.random() * 100);
}

const uploadGeoCodedImg = (bUrl, ele, sizeInKiloByte) => {
  var filereturn = validateCertificate($("#" + ele).val());
  if (filereturn == false) {
    msgBox(
      "Wrong file format! Please check the supported file formats",
      "warning"
    );
    $("#" + ele).val("");
    return false;
  }
  var sizeInBytes = sizeInKiloByte * 1024;
  var fi = document.getElementById(ele);
  var fsInBytes = fi.files.item(0).size;
  var maxSize = sizeInBytes;

  if (fsInBytes > maxSize) {
    msgBox(
      "Large size! The file size exceeds the maximum limit allowed \n Your file is of " +
        showFileSize(fsInBytes) +
        " size.",
      "warning"
    );
    $("#" + ele).val("");
    return false;
  }

  $("#overlay").show();
  var form = $("#frm")[0];
  var form_data = new FormData(form);
  $.ajax({
    url: bUrl + "ajaxcontroller/upload-geocoded-file/" + ele, // point to server-side PHP script
    dataType: "text", // what to expect back from the PHP script, if anything
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    type: "post",
    success: function (response) {
      $("#overlay").hide();
      let stat, msg, lat, lon;
      [stat, msg, lat, lon] = response.split(":");
      if (stat == 1) {
        $("#latitude").val(lat);
        $("#longitude").val(lon);
        msgBox("Done!" + msg, "success");
      } else if (stat == 0) {
        msgBox("Failed!" + msg, "warning");
      } else {
        msgBox(
          "Failed! Unexpected error occured! please try again",
          "warning"
        );
      }

      $("#" + ele).val("");
    },
  });
}


function showFileSize(fsInBytes)
{
	var fileSize;

	if (fsInBytes < 1024) 
		fileSize = fsInBytes+' bytes';
	else if (fsInBytes >= 1024 && fsInBytes < 1048576)
	{
		fileSize = (fsInBytes/1024);
		fileSize = fileSize.toFixed(2)+' KB';
	}
	else if (fsInBytes > 1048576) 
	{
		fileSize = (fsInBytes/1048576);
		fileSize = fileSize.toFixed(2)+' MB';
	}

	return fileSize
}

const validateCertificate = txt => {
	 return (!txt.match(/\.(jpg)|(jpeg)|(.webp)|(JPG)|(JPEG)|(.WEBP)|(pdf)|(PDF)|(doc|(DOC)|(docx)|(DOCX))$/)) ? false : true;
}

const validateVideo  = txt =>
{
   return (!txt.match(/\.(mp4)|(MP4)$/)) ? false : true;
}

const validateImage  = txt =>
{
   return (!txt.match(/\.(jpg)|(jpeg)|(.webp)|(JPG)|(JPEG)|(.WEBP)$/)) ? false : true;
}

const validateURL = url =>
{
	 const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
   return pattern.test(url) ? true : false;
}

function Days_count($EndDate1,$StartDate1)
{
	var stringSplitArray = $StartDate1.split("-");
	var StartDate1 = stringSplitArray[2]+"-"+stringSplitArray[1]+"-"+stringSplitArray[0];//date formatted to "y-mm-dd"
	var stringSplitArray = $EndDate1.split("-");
	var EndDate1 = stringSplitArray[2]+"-"+stringSplitArray[1]+"-"+stringSplitArray[0];//date formatted to "y-mm-dd"
	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var secondDate  = new Date(StartDate1);
	var firstDate  = new Date(EndDate1);
	var diffDays = ((firstDate.getTime() - secondDate.getTime())/(oneDay));
	return diffDays;
}

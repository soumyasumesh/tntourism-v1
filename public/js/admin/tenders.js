const toggleMmSrc = (source) => {
    if (source == 'i') {
        document.getElementById('mm_image_container').style.display = 'block';
        document.getElementById('mm_image_addmore').style.display = 'block';
        document.getElementById('mm_video_container').style.display = 'none';
        document.getElementById('mm_video_addmore').style.display = 'none';
        //$('#video_count').val(1);
    } else if (source == 'v') {
        document.getElementById('mm_image_container').style.display = 'none';
        document.getElementById('mm_image_addmore').style.display = 'none';
        document.getElementById('mm_video_container').style.display = 'block';
        document.getElementById('mm_video_addmore').style.display = 'block';
        //$('#image_count').val(1);
    }
}

const toggleVidSrc = (num, source) => {
    if (source == 1) {
        document.getElementById('vidSrcYt' + num).style.display = 'block';
        document.getElementById('vidSrcFile' + num).style.display = 'none';
    } else if (source == 2) {
        document.getElementById('vidSrcYt' + num).style.display = 'none';
        document.getElementById('vidSrcFile' + num).style.display = 'block';
    }
}


const addMoreDocument = (
    
    bUrl,
    imgPath1,
    imgPath2,
    mob_imgPath1,
    ver_imgPath1,
    maxImgSize1,
    titleData
  
  ) => {
      let imgCnt = parseInt($("#image_count").val());
      imgCnt++;
      $("#image_count").val(imgCnt);
  
      $('#mm_img_item').append(
          `
          <div class="col-md-6">
                <div class="fv-row mb-2">
                <label class="fs-6 fw-bold form-label mt-3">
                <span>Document <span class="fw-bolder ms-2">#` + imgCnt + `</span></span>
            </label>
                <input type="text" class="form-control form-control-solid" name="caption` + imgCnt + `" id="caption` + imgCnt + `" placeholder="Caption" maxlength="200" value= "">
                </div>
            </div>

          <div class="col-md-6">
              <div class="fv-row mb-2">
                  <label class="fs-6 fw-bold form-label mt-3">
                      <span> &nbsp;</span>
                  </label>
                  <div id="block1-image` + imgCnt + `"></div>
                  <div id="block2-image` + imgCnt + `" style="display:block">
                      <input type="file" name="image` + imgCnt + `" id="image` + imgCnt + `" accept=".jpg,.pdf,.doc,.docx,.webp" onchange="uploadFile('` +
                      bUrl +
                      `', '` +
                      imgPath1 +
                      `', '` +
                      imgPath2 +
                      `', this.id, ` +
                      maxImgSize1 +
                      `, 11 , '` +
                      titleData +
                      `',1)" class="form-control form-control-solid">
                      <div class="small text-muted mt-2">Format: .jpg, .pdf, .doc, .docx, .webp | Max File Size 5MB</div>
                   
                  </div>
                  <input type="hidden" name="hid_image` + imgCnt + `" id="hid_image` + imgCnt + `">
              </div>
          </div>         
          
          `);
  }



const SaveForm = $('#frm');
const saveButton = $('#saveButton');
//saveButton.click(() => 
function SaveData(){
   
    if ($('#title').val().trim() == '') {
        msgBox('Enter the title', 'warning');
        return;
    }

    if ($('#notice_number').val().trim() == '') {
        msgBox('Enter the Notice Number', 'warning');
        return;
    }
    if ($('#last_datetime_download').val().trim() == '') {
        msgBox('Enter the last date and time to Download', 'warning');
        return;
    }
    if ($('#last_datetime_download').val().trim() != '') {
        var d = new Date();
            var a=d.getDate();
            var c=d.getFullYear();
            var f=d.getMonth()+1;
            var dt=a+"-"+f+"-"+c;
            var dtval=$('#last_datetime_download').val().substring(0,10);
           
            var   cntdt=Days_count(dt, dtval);
            cntdt=Math.round(cntdt);		
            if(cntdt>0)
            {	
                msgBox('Enter the last date of download should be a future date', 'warning');
                return;
            } 
    }

    if ($('#last_datetime_submit').val().trim() == '') {
        msgBox('Enter the last date and time to Submit', 'warning');
        return;
    }
    if ($('#last_datetime_submit').val().trim() != '') {
        var d = new Date();
            var a=d.getDate();
            var c=d.getFullYear();
            var f=d.getMonth()+1;
            var dt=a+"-"+f+"-"+c;
            var dtval=$('#last_datetime_submit').val().substring(0,10);
          
            var   cntdt=Days_count(dt, dtval);
            cntdt=Math.round(cntdt);		
            if(cntdt>0)
            {	
                msgBox('Enter the last date to submit should be a future date', 'warning');
                return;
            } 
    }

    if ($('#open_datetime').val().trim() == '') {
        msgBox('Enter the Open Date and Time', 'warning');
        return;
    }
    if ($('#open_datetime').val().trim() != '') {
        var d = new Date();
            var a=d.getDate();
            var c=d.getFullYear();
            var f=d.getMonth()+1;
            var dt=a+"-"+f+"-"+c;
            var dtval=$('#open_datetime').val().substring(0,10);
          
            var   cntdt=Days_count(dt, dtval);
            cntdt=Math.round(cntdt);		
            if(cntdt>0)
            {	
                msgBox('Enter the open date  should be a future date', 'warning');
                return;
            } 
    }
    
  
    let icount = $('#image_count').val();
    var haveImage = false; 
    
    for(var i=1;i<=icount;i++)
    {
        if ($('#hid_image'+i).val().trim() != ''  && $('#caption'+i).val().trim() != '')  
        {
            haveImage = true;
        }

    
            if ($('#hid_image'+i).val().trim() == '' && $('#caption'+i).val().trim() != '') {
                msgBox('Enter the Document #'+i, 'warning');
                return;
                }

                if ($('#hid_image'+i).val().trim() != '' && $('#caption'+i).val().trim() == '') {
                    msgBox('Enter the Caption #'+i, 'warning');
                    return;
                    }   

           
        
    }
    if(!haveImage)
    {
        msgBox('Enter atleast one Document Details', 'warning');
        return;
    }    
        
    let isChecked = $("input[name=status]").is(":checked");
    if (! isChecked ) {
      
        msgBox('Please specify the visibility status', 'warning');
        return;
    }


    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Save it!'
      }).then((result) => {
        if (result.isConfirmed) {
            saveButton.attr('data-kt-indicator', 'on');
            saveButton.prop('disabled', true);
            SaveForm.submit();
        }
        else return false;

      })
    
}

const openGallery = src => {
   
    $('#galleryModalDiv').modal('show');
    $('#galsrc').val(src);
}

function ArrangeItems(){

    let lcnt = $('#lcount').val().trim();
    for(var j=1; j<= lcnt; j++)
    {
        var ccnt = $('#ccount'+j).val().trim();
        for(var i=1; i<= ccnt; i++)
        {
            if ($('#display_order'+j+i).val().trim() == '') {
                msgBox('Enter the display order for all Tenders', 'warning');
                return;
            }
        }
    }
 

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Save it!'
      }).then((result) => {
        if (result.isConfirmed) {
            Section_saveButton.attr('data-kt-indicator', 'on');
            Section_saveButton.prop('disabled', true);
            Section_SaveForm.submit();
        }
        else return false;

      })
    
}


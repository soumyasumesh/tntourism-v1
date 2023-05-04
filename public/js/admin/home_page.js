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

const addMoreImage = (
    
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
        <div class="col-md-4">
            <div class="fv-row mb-2">
                <label class="fs-6 fw-bold form-label mt-3">
                    <span>Image <span class="fw-bolder ms-2">#` + imgCnt + `</span></span>
                </label>
                <div id="block1-image` + imgCnt + `"></div>
                <div id="block2-image` + imgCnt + `" style="display:block">
                    <input type="file" name="image` + imgCnt + `" id="image` + imgCnt + `" accept=".jpg" onchange="uploadPbImage('` +
                    bUrl +
                    `', '` +
                    imgPath1 +
                    `', '` +
                    imgPath2 +
                    `', this.id, ` +
                    maxImgSize1 +
                    `, 4 , '` +
                    titleData +
                    `',1)" class="form-control form-control-solid">
                    <div class="small text-muted mt-2">Desktop Image</div>
                </div>
                <input type="hidden" name="hid_image` + imgCnt + `" id="hid_image` + imgCnt + `">
            </div>
        </div>

        <div class="col-md-4">
            <div class="fv-row mb-2">
                <label class="fs-6 fw-bold form-label mt-3">
                    <span>&nbsp;</span>
                </label>
                <div id="block1-mobile_image` + imgCnt + `"></div>
                <div id="block2-mobile_image` + imgCnt + `" style="display:block">
                    <input type="file" name="mobile_image` + imgCnt + `" id="mobile_image` + imgCnt + `" accept=".jpg" onchange="uploadPbImage('` +
                    bUrl +
                    `', '` +
                    mob_imgPath1 +
                    `', '` +
                    mob_imgPath1 +
                    `', this.id, ` +
                    maxImgSize1 +
                    `, 5 , '` +
                    titleData +
                    `',1)" class="form-control form-control-solid">
                    <div class="small text-muted mt-2">Mobile App</div>
                </div>
                <input type="hidden" name="hid_mobile_image` + imgCnt + `" id="hid_mobile_image` + imgCnt + `">
            </div>
        </div>
        <div class="col-md-4">
            <div class="fv-row mb-2">
                <label class="fs-6 fw-bold form-label mt-3">
                    <span>&nbsp;</span>
                </label>
                <div id="block1-vertical_image` + imgCnt + `"></div>
                <div id="block2-vertical_image` + imgCnt + `" style="display:block">
                    <input type="file" name="vertical_image` + imgCnt + `" id="vertical_image` + imgCnt + `" accept=".jpg" onchange="uploadPbImage('` +
                    bUrl +
                    `', '` +
                    ver_imgPath1 +
                    `', '` +
                    ver_imgPath1 +
                    `', this.id, ` +
                    maxImgSize1 +
                    `, 1 , '` +
                    titleData +
                    `',1)" class="form-control form-control-solid">
                    <div class="small text-muted mt-2">Vertical</div>
                </div>
                <input type="hidden" name="hid_vertical_image` + imgCnt + `" id="hid_vertical_image` + imgCnt + `">
            </div>
        </div>
        `);
}


const addMoreVideo = (bUrl,
    imgPath1,
    imgPath2,
    maxImgSize1,
    maxVidSize1,
    titleData) => {
    let vidCnt = parseInt($("#video_count").val());
    vidCnt++;
    $("#video_count").val(vidCnt);
    

    $('#mm_video_container').append(
        `
        <div class="row mt-7">

            
            <div class="col-md-4">
                <div class="fv-row mb-2">
                <label class="fs-6 fw-bold form-label mt-3">
                <span>Video #` + vidCnt + `</span>
                </label>
                    <div id="vidSrcYt` + vidCnt + `">
                        <input type="text" class="form-control form-control-solid" name="video_url` + vidCnt + `" id="video_url` + vidCnt + `" maxlength="" placeholder="Enter the YouTube URL">
                    </div>
                    <div id="vidSrcFile` + vidCnt + `" style="display:none">
                        <div id="block1-videoFile` + vidCnt + `"></div>
                        <div id="block2-videoFile` + vidCnt + `" style="display:block">
                            <input type="file" name="videoFile` + vidCnt + `" id="videoFile` + vidCnt + `" accept=".mp4" class="form-control form-control-solid" onchange="uploadPbImage('` +
                            bUrl +
                            `', '` +
                            imgPath1 +
                            `', '` +
                            imgPath2 +
                            `', this.id, ` +
                            maxImgSize1 +
                            maxVidSize1 +
                            `, 9 , '` +
                            titleData +
                            `')">
                            <div class="small text-muted mt-2">.mp4</div>
                        </div>
                        <input type="hidden" name="hid_videoFile` + vidCnt + `" id="hid_videoFile` + vidCnt + `">
                    </div>
                </div>
                
                
            </div>
            <div class="col-md-4">
                <div class="fv-row mb-2">
                    <label class="fs-6 fw-bold form-label mt-3">
                        <span>Thumbnail</span>
                    </label>
                    <div id="block1-videoThumb` + vidCnt + `"></div>
                    <div id="block2-videoThumb` + vidCnt + `" style="display:block">
                        <input type="file" name="videoThumb` + vidCnt + `" id="videoThumb` + vidCnt + `" accept=".jpg" onchange="uploadPbImage('` +
                        bUrl +
                        `', '` +
                        imgPath1 +
                        `', '` +
                        imgPath2 +
                        `', this.id, ` +
                        maxImgSize1 +
                        `, 3 , '` +
                        titleData +
                        `')" class="form-control form-control-solid">
                        <div class="small text-muted mt-2">1920px W x 1080px H</div>
                    </div>
                    <input type="hidden" name="hid_videoThumb` + vidCnt + `" id="hid_videoThumb` + vidCnt + `">
                </div>
            </div>

            <div class="col-md-4">
                <div class="fv-row mb-2">
                    <label class="fs-6 fw-bold form-label mt-3">
                        <span>Vertical</span>
                    </label>
                    <div id="block1-videoVertical` + vidCnt + `"></div>
                    <div id="block2-videoVertical` + vidCnt + `" style="display:block">
                        <input type="file" name="videoVertical` + vidCnt + `" id="videoVertical` + vidCnt + `" accept=".jpg" onchange="uploadPbImage('` +
                        bUrl +
                        `', '` +
                        imgPath1 +
                        `', '` +
                        imgPath2 +
                        `', this.id, ` +
                        maxImgSize1 +
                        `, 1 , '` +
                        titleData +
                        `')" class="form-control form-control-solid">
                        <div class="small text-muted mt-2">Vertical</div>
                    </div>
                    <input type="hidden" name="hid_videoVertical` + vidCnt + `" id="hid_videoVertical` + vidCnt + `">
                </div>
            </div>
        </div>
        `
    );
}


const SaveForm = $('#frm');
const saveButton = $('#saveButton');
//saveButton.click(() => 
function SaveData(){
   
    
   /* if ($('#heading').val().trim() == '') {
        msgBox('Enter the title', 'warning');
        return;
    }

    if ($('#page_url').val().trim() != '') 
    {
        var valid_url = validateURL($('#page_url').val().trim());
        if (valid_url==false)
        {
            msgBox('Please enter a valid more button URL', 'warning');
            return;
        }
    } */

    

    let ismmtypeChecked = $("input[name=mmtype]").is(":checked");
    if (! ismmtypeChecked ) {
        msgBox('Choose the Multimedia Type', 'warning');
        return;
    }
    const mmtype = $("input:radio[name='mmtype']:checked").val();

    if(mmtype == 'i')
    {
       let icount = $('#image_count').val();
       var haveImage = false; 
       for(var i=1;i<=icount;i++)
       {
            if ($('#hid_image'+i).val().trim() != '' || $('#hid_mobile_image'+i).val().trim() != ''  ||  $('#hid_vertical_image'+i).val().trim() != '')  
            {
                haveImage = true;
            }

            if ($('#desktop_needed').val().trim() == '1') {
                if ($('#hid_image'+i).val().trim() == '') {
                    msgBox('Enter the Desktop Image #'+i, 'warning');
                    return;
                    }
            }

            if ($('#mobile_needed').val().trim() == '1') {
                if ($('#hid_mobile_image'+i).val().trim() == '') {
                    msgBox('Enter the Mobile App Image #'+i, 'warning');
                    return;
                }
            }

            if ($('#vertical_needed').val().trim() == '1') {
                if ($('#hid_vertical_image'+i).val().trim() == '') {
                    msgBox('Enter the Vertical Image #'+i, 'warning');
                    return;
                }

            }          
            
       }
       if(!haveImage)
       {
            msgBox('Enter atleast one image Details', 'warning');
            return;
       }
     
       

    }
    else if(mmtype=='v')
    {
        var vcount = $('#video_count').val();
       /* let isVsourceChecked = $("input[name=video_source1]").is(":checked");
        if (! isVsourceChecked && error == false) {
            msgBox('Please specify the Video sources #1', 'warning');
            return;
        } */
       var haveVideo = false; 
       for(let j=1;j<=vcount;j++)
       {
        if ($('#video_url'+j).val().trim() != '') haveVideo = true;
            
       }
       if(!haveVideo)
        {
        msgBox('Enter atleast one Video', 'warning');
        return;
         } 
        
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

const Section_SaveForm = $('#frm');
const Section_saveButton = $('#saveButton');

function SaveSectionData(){
    if ($('#name').val().trim() == '') {
        msgBox('Enter the section name', 'warning');
        return;
    }

    /*if ($('#page_url').val().trim() != '') 
    {
        var valid_url = validateURL($('#page_url').val().trim());
        if (valid_url==false)
        {
            msgBox('Please enter a valid more button URL', 'warning');
            return;
        }
    }*/

    let isTemplateChecked = $("input[name=front_template]").is(":checked");
    if (! isTemplateChecked ) {
        msgBox('Choose the template', 'warning');
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
            Section_saveButton.attr('data-kt-indicator', 'on');
            Section_saveButton.prop('disabled', true);
            Section_SaveForm.submit();
        }
        else return false;

      })
    
}


function ArrangeSections(){

    let cnt = $('#cnt').val().trim();
    for(var i=1; i<= cnt; i++)
    {
        if ($('#display_order'+i).val().trim() == '') {
            msgBox('Enter the display order for all sections', 'warning');
            return;
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
                msgBox('Enter the display order for all Contents', 'warning');
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


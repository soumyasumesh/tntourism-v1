var error;

const filterPageByTemplate = (bUrl, templateId) => {
    window.location.href = bUrl + 'other-pages/' + templateId;
}

const toggleMavDescrVisibility = isChkd => {
    $('#mav_descr').css('display', isChkd ? 'block' : 'none');
}

const toggleParentDestInDestType = () => {
    const destType = $("input:radio[name='dest_type']:checked").val();
   
    $("#dest_layout_1").prop("checked", true);
    $('#parent_dest_div').css('display', destType == 0 ? 'none' : 'block');
}

const openGallery = src => {
    $('#galleryModalDiv').modal('show');
    $('#galsrc').val(src);
}


const showAddPageContentForm = bUrl => {
    let isChecked = $("input[name=template_id]").is(":checked");
    if (! isChecked) {
        msgBox('Please choose a section to continue', 'warning');
        return;
    }

    const contBtn = $('#continueBtn');
    contBtn.attr('data-kt-indicator', 'on');
    contBtn.prop('disabled', true);

    const templateId = $("input:radio[name='template_id']:checked").val();
    window.location.href = bUrl + 'other-pages/add-content/' + templateId;
}

const savePageContent1 = mode => {
    $('#frm').submit();
}

const savePageContent = mode => {
    error = false;
    let msg, title, text, btnText = '';

    if ($('#main_title').val().trim() == '' && error == false) {
        msg = 'Please specify the main title';
        error = true;
    }

    const addedPlugins = $('#added_plugins').val().trim();
    const addedPluginsArr = addedPlugins.split(':');
    let p, n, m;

    for (let i = 1; i < (addedPluginsArr.length - 1); i++) {
        [p, n, m] = addedPluginsArr[i].split('-');

        if (error == false) msg = validatePlugin(p, m); else break;
    }

    let isChecked = $("input[name=status]").is(":checked");
    if (! isChecked && error == false) {
        msg = 'Please specify the visibility status';
        error = true;
    }

    if (checkNumeric($('#plugin26_cnt').val().trim()) == false && error == false) {
        msg = 'The video count variable is found to be manipulated!';
        error = true;
    }

    if (checkNumeric($('#plugin5_cnt').val().trim()) == false && error == false) {
        msg = 'The image count variable is found to be manipulated!';
        error = true;
    }

    if (checkNumeric($('#section_id').val().trim()) == false && error == false) {
        msg = 'The section id variable is found to be manipulated!';
        error = true;
    }

    if ($('#added_plugins').val().trim() == '' && error == false) {
        msg = 'The plugin variable is found to be manipulated!';
        error = true;
    }

    if (checkNumeric($('#template_id').val().trim()) == false && error == false) {
        msg = 'The template id variable is found to be manipulated!';
        error = true;
    }

    if (mode == 'edit') {
        title = 'Confirm Update';
        text = 'Have you finished changing the details?';
        btnText = 'Yes, update it!';

        if (checkNumeric($('#page_id').val().trim()) == false && error == false) {
            msg = 'The page id variable is found to be manipulated!';
            error = true;
        }
    } else if (mode == 'add') {
        title = 'Confirm Save';
        text = 'Have you finished filling up all the required details?';
        btnText = 'Yes, save it!';
    }
    
    if (error == false) {
        if (mode == 'add' || mode == 'edit') {
            Swal.fire({
                title: title,
                text: text,
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: btnText
            }).then((result) => {
                if (result.isConfirmed) {
                    const saveBtn = $('#saveBtn');
                    const backBtn = $('#backBtn');
                    saveBtn.attr('data-kt-indicator', 'on');
                    saveBtn.prop('disabled', true);
                    backBtn.prop('disabled', true);
                    $('#frm').submit();
                }
            })
        } else {
            msgBox('Something went wrong!', 'warning');
        }   
    } else {
        msgBox(msg, 'warning');
    }
}


const validatePlugin = (plgId, mandatory) => {
    if (plgId == 2 && mandatory == 1) {
        //SEO
        if ($('#file_name').val().trim() == '' && error == false) {
            error = true;
            return 'Please specify the seo filename';
        }
        if ($('#page_title').val().trim() == '' && error == false) {
            error = true;
            return 'Please specify the seo page title';
        }
        if ($('#meta_keywords').val().trim() == '' && error == false) {
            error = true;
            return 'Please specify the seo meta keywords';
            
        }
        if ($('#meta_description').val().trim() == '' && error == false) {
            error = true;
            return 'Please specify the seo meta description';
            
        }
        if ($('#redirect_url').val().trim() != '' && error == false) {
            let validUrl = validateURL($('#redirect_url').val().trim());
            if (validUrl == false) {
                error = true;
                return 'Please enter a valid redirect URL';
                
            }
        } 
        if ($('#canonical_url').val().trim() != '' && error == false) {
            let validUrl = validateURL($('#canonical_url').val().trim());
            if (validUrl == false) {
                error = true;
                return 'Please enter a valid canonical URL';
                
            }
        }  
    } else if (plgId == 5 && mandatory == 1) {
        //Image
        const imgCnt = parseInt($("#plugin5_cnt").val().trim(), 10);
        for (let i = 1; i <= imgCnt; i++) {
            if ($('#hid_bannPicDesk' + i).val().trim() == '' && error == false) {
                error = true;
                return 'Please upload a desktop version of the image';
            }
        }

    } else if (plgId == 6 && mandatory == 1) {
        //Long description
        const editorContent = tinyMCE.get('long_description1').getContent();

        if (editorContent == '' && error == false) {
            error = true;
            return 'Please specify the description (website version)';
        }

        let isMavContChecked = $("input[name=descr_mav_yes1]").is(":checked");
        if (isMavContChecked) {
            const editorContent2 = tinyMCE.get('mobile_app_descr1').getContent();
            if (editorContent2 == '' && error == false) {
                error = true;
                return 'Please specify the description (mobile app version)';
            }
        }
    } else if (plgId == 7 && mandatory == 1) {
        //Date range
        if ($('#date_range').val().trim() == '' && error == false) { 
            error = true;
            return 'Please specify the date';
        }
    } else if (plgId == 9 && mandatory == 1) {
        // Place and district
        if ($('#district_id').val() == '' && error == false)  {
            error = true;
            return 'Please choose the district';
        }
    } else if (plgId == 10 && mandatory == 1) {
        //Category and tags
        /* if ($('#category_id').val() == '' && error == false)  {
            error = true;
            return 'Please choose the category';
        } */
        if ($('#tags').val() == '' && error == false)  {
            error = true;
            return 'Please specify some tags';
        }
    } else if (plgId == 11 && mandatory == 1) {
        //Google map
        if ($('#geo_codes').val() == '' && error == false)  {
            error = true;
            return 'Please specify the latitude and longitude';
        }
    } else if (plgId == 26 && mandatory == 1) {
        //Video
        const vidCnt = parseInt($("#plugin26_cnt").val().trim(), 10);
        for (let i = 1; i <= vidCnt; i++) {
            if ($('#url' + i).val().trim() == '' && error == false) {
                let validUrl = validateURL($('#url').val().trim());
                if (validUrl == false) {
                    msg = 'Please enter a valid youtube video URL';
                    error = true;
                }
            }
        }
    } else if (plgId == 27 && mandatory == 1) {
        //Short description
        if ($('#short_descr').val() == '' && error == false)  {
            error = true;
            return 'Please specify the short description';
        }
    } else if (plgId == 37 && mandatory == 1) {
        //How to reach
        if (($('#by_road').val() == '' && $('#by_rail').val() == '' && $('#by_air').val() == '' && $('#best_time_to_visit').val() == '' && $('#additional_info').val() == '') && error == false)  {
            error = true;
            return 'Please specify something about how to reach';
        }
    } else if (plgId == 39 && mandatory == 1) {
        //Type of destination
        const destType = $("input:radio[name='dest_type']:checked").val();
        const destLayout = $("input:radio[name='dest_type']:checked").val();

        if (destType == '') {
           
                error = true;
                return 'Please Choose Topattraction Layout';
           
        }    

   
        if (destType == 1) {
            if ($('#parent_destination').val() == '' && error == false)  {
                error = true;
                return 'Please specify the parent destination';
            }
        }        
    } else if (plgId == 3 && mandatory == 1) {
        //Recipe facts
        if ($('#preparation_time').val() == '' && error == false)  {
            error = true;
            return 'Please specify the preparation time';
        }
        if ($('#cooking_time').val() == '' && error == false)  {
            error = true;
            return 'Please specify the cooking time';
        }
        let isFoodCatgChecked = $("input[name=food_category]").is(":checked");
        if (! isFoodCatgChecked && error == false) {
            error = true;
            return 'Please specify the category of food';            
        }
        if ($('#food_type').val() == '' && error == false)  {
            error = true;
            return 'Please specify the type of food';
        }
    } else if (plgId == 17 && mandatory == 1) {
        //Ingredients and method of preparation
       /*  const ingContent = tinyMCE.get('ingredients').getContent();

        if (ingContent == '' && error == false) {
            error = true;
            return 'Please specify the ingredients';
        }

        const mopContent = tinyMCE.get('preparation_method').getContent();

        if (mopContent == '' && error == false) {
            error = true;
            return 'Please specify the method of preparation';
        } */
    }
    if (plgId == 41) {
       
        const cntfle = parseInt($("#file_count").val().trim());
        for (let i = 1; i <= cntfle; i++) {
            if (($('#alt_' + i).val().trim() != '' || $('#hid_fileUp_' + i).val().trim() != '') && error == false) {
                if ($('#alt_' + i).val().trim() == '' && error == false) {
                    error = true;
                    return 'Please enter the Caption';
                }
                if ($('#hid_fileUp_' + i).val().trim() == '' && error == false) {
                    error = true;
                    return 'Please upload a file';
                }
            }
           
        }

    }
}

const checkNumeric = inputData => {
    const numbers = /^[0-9]+$/;
    return inputData.match(numbers) ? true : false;
} 

const copySEO = () => {
    error = false;
    if ($('#main_title').val().trim() == '' && error == false) {
        msg = 'Please specify the main title';
        error = true;
        msgBox(msg, 'warning');
    }
    
    var a = $('#main_title').val(); 
    var filename = a.toLowerCase().replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');


    $('#file_name').val(filename);
    $('#page_title').val($('#main_title').val() + ' | Tamil Nadu');
    $('#meta_keywords').val($('#main_title').val().toLowerCase());

    if($('#short_descr'))
    {
        $('#meta_description').val($('#short_descr').val() ? $('#short_descr').val() : $('#main_title').val());
    }
    else
    {
        $('#meta_description').val($('#main_title').val());
    }
}

const addMoreFile = (
    
    bUrl,
    imgPath1,  
    maxImgSize1,
    titleData
  
  ) => {
      let imgCnt = parseInt($("#file_count").val());
      imgCnt++;
      $("#file_count").val(imgCnt);
  
      $('#mm_file_item').append(
          `
          <div class="col-md-6">
              <div class="fv-row mb-7">                        
                  <input type="text" class="form-control form-control-solid" name="alt_` + imgCnt + `" id="alt_` + imgCnt + `" maxlength="100" autofocus required value="">                
              </div>
          </div>
          <div class="col-md-6">
            <div class="fv-row mb-7">                        
                <div id="block1-fileUp_` + imgCnt + `"></div>
                <div id="block2-fileUp_` + imgCnt + `" style="display:block">
                    <input type="file" name="fileUp_` + imgCnt + `" id="fileUp_` + imgCnt + `" accept=".pdf" onchange="uploadFile('` +
                    bUrl +
                    `', '` +
                    imgPath1 +
                    `', '` +
                    imgPath1 +
                    `', this.id, ` +
                    maxImgSize1 +
                    `, 12 , '` +
                    titleData +
                    `')" class="form-control form-control-solid">                  
                </div>
                <input type="hidden" name="hid_fileUp_` + imgCnt + `" id="hid_fileUp_` + imgCnt + `" value="">                        
            </div>          
          </div> `);
  }
const loadBlogDescrBlock = (num, bUrl, imgPath1, imgPath2, maxSize1) => {
    var blogEleCnt = $("#blog_element_cnt").val();

    var blogEleList = $("#blog_ele_list").val();
    blogEleList += num + '-' + blogEleCnt + ':';
    $("#blog_ele_list").val(blogEleList);

    if (num == 1) {
        $('#blog_descr_div').append(`
        <div class="row mb-3">
            <div class="col-md-11"><span class="h4">Description</span></div>
            <div class="col-md-1"><input type="text" name="be_display_order` + blogEleCnt + `" id="be_display_order` + blogEleCnt + `" maxlength="2" class="form-control form-control-solid fs-5 text-center border border-2 border-secondary" value="` + blogEleCnt + `"></div>
        </div>
        
        <div class="row">
            <div class="col-md-12">
                <div class="fv-row mb-7">
                    <textarea class="form-control tinymce" name="be1_descr` + blogEleCnt + `" id="be1_descr` + blogEleCnt + `"></textarea>
                </div>
            </div>
        </div>
        `);
        var options = {
            selector: ".tinymce",
            height: 250,
            menubar: false,
            toolbar: 'undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | link code | heading',
            plugins: [
                'link', 'code'
            ],
            setup: function (editor) {
                editor.ui.registry.addGroupToolbarButton('heading', {
                  text: 'Headings',
                  tooltip: 'Heading tags',
                  items: 'h3 h4 h5 h6'
                });
            },
            resize: false
        };

        tinymce.init(options);
    } else if (num == 2) {
        $('#blog_descr_div').append(`
        <div class="row mb-3">
            <div class="col-md-11"><span class="h4">Image</span></div>
            <div class="col-md-1"><input type="text" name="be_display_order` + blogEleCnt + `" id="be_display_order` + blogEleCnt + `" maxlength="2" class="form-control form-control-solid fs-5 text-center border border-2 border-secondary" value="` + blogEleCnt + `"></div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="fv-row mb-7">
                    <label class="fs-6 fw-bold form-label mt-3">
                        <span>Upload</span>
                    </label>
                    <div id="block1-be2_img` + blogEleCnt + `"></div>
                    <div id="block2-be2_img` + blogEleCnt + `">
                        <div class="input-group">
                            <input type="file" name="be2_img` + blogEleCnt + `" id="be2_img` + blogEleCnt + `" accept=".jpg,.webp" onchange="uploadPbImage('` + bUrl + `', '` + imgPath1 + `', '` + imgPath2 + `', this.id, '` + maxSize1 + `', 4, 'main_title:Primary heading')" class="form-control">

                            <label class="input-group-text bg-white">OR</label>

                            <button type="button" class="btn btn-secondary" onclick="openGallery('img')">Choose from Gallery</button>
                        </div>

                        <div class="small text-muted mt-2">100px W x 100px H</div>
                    </div>
                    <input type="text" name="hid_be2_img` + blogEleCnt + `" id="hid_be2_img` + blogEleCnt + `" value="">
                </div>
            </div>
            <div class="col-md-3">
                <div class="fv-row mb-7">
                    <label class="fs-6 fw-bold form-label mt-3">
                        <span>Caption</span>
                    </label>
                    <input type="text" name="be2_caption` + blogEleCnt + `" id="be2_caption` + blogEleCnt + `" maxlength="100" class="form-control form-control-solid">
                </div>
            </div>
            <div class="col-md-3">    
                <div class="fv-row mb-7">
                    <label class="fs-6 fw-bold form-label mt-3">
                        <span>Alt tag</span>
                    </label>
                    <input type="text" name="be2_alt_text` + blogEleCnt + `" id="be2_alt_text` + blogEleCnt + `" maxlength="100" class="form-control form-control-solid">
                </div>
            </div>
        </div>
        `);
    } else if (num == 3) {
        $('#blog_descr_div').append(`
        <div class="row mb-3">
            <div class="col-md-11"><span class="h4">Video</span></div>
            <div class="col-md-1"><input type="text" name="be_display_order` + blogEleCnt + `" id="be_display_order` + blogEleCnt + `" maxlength="2" class="form-control form-control-solid fs-5 text-center border border-2 border-secondary" value="` + blogEleCnt + `"></div>
        </div>
        <div class="row">
            <div class="col-md-8">    
                <div class="fv-row mb-7">
                    <label class="fs-6 fw-bold form-label mt-3">
                        <span>YouTube video URL</span>
                    </label>
                    <input type="text" name="be3_yturl` + blogEleCnt + `" id="be3_yturl` + blogEleCnt + `" maxlength="100" class="form-control form-control-solid">
                </div>
            </div>
            <div class="col-md-4">
                <div class="fv-row mb-7">
                    <label class="fs-6 fw-bold form-label mt-3">
                        <span>Caption</span>
                    </label>
                    <input type="text" name="be3_caption` + blogEleCnt + `" id="be3_caption` + blogEleCnt + `" maxlength="100" class="form-control form-control-solid">
                </div>
            </div>
            
        </div>
        `);
    } else if (num == 4) {
        $('#blog_descr_div').append(`
        <div class="row mb-3">
            <div class="col-md-11"><span class="h4">Highlight</span></div>
            <div class="col-md-1"><input type="text" name="be_display_order` + blogEleCnt + `" id="be_display_order` + blogEleCnt + `" maxlength="2" class="form-control form-control-solid fs-5 text-center border border-2 border-secondary" value="` + blogEleCnt + `"></div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="fv-row mb-7">
                    <textarea class="form-control form-control-solid" name="be4_descr` + blogEleCnt + `" id="be4_descr` + blogEleCnt + `"></textarea>
                </div>
            </div>
        </div>
        `);
    } else if (num == 5) {
        $('#blog_descr_div').append(`
        <div class="row mb-3">
            <div class="col-md-11"><span class="h4">Interesting fact</span></div>
            <div class="col-md-1"><input type="text" name="be_display_order` + blogEleCnt + `" id="be_display_order` + blogEleCnt + `" maxlength="2" class="form-control form-control-solid fs-5 text-center border border-2 border-secondary" value="` + blogEleCnt + `"></div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="fv-row mb-7">
                    <label class="fs-6 fw-bold form-label mt-3">
                        <span>Title</span>
                    </label>
                    <input type="text" name="be5_title` + blogEleCnt + `" id="be5_title` + blogEleCnt + `" maxlength="100" class="form-control form-control-solid">
                </div>
                <div class="fv-row mb-7">
                    <label class="fs-6 fw-bold form-label mt-3">
                        <span>Image</span>
                    </label>
                    <div id="block1-be5_img` + blogEleCnt + `"></div>
                    <div id="block2-be5_img` + blogEleCnt + `">
                        <div class="input-group">
                            <input type="file" name="be5_img` + blogEleCnt + `" id="be5_img` + blogEleCnt + `" accept=".jpg,.webp" onchange="uploadPbImage('` + bUrl + `', '` + imgPath1 + `', '` + imgPath2 + `', this.id, '` + maxSize1 + `', 4, 'main_title:Primary heading')" class="form-control">

                            <label class="input-group-text bg-white">OR</label>

                            <button type="button" class="btn btn-secondary" onclick="openGallery('img')">Choose from Gallery</button>
                        </div>

                        <div class="small text-muted mt-2">100px W x 100px H</div>
                    </div>
                    <input type="text" name="hid_be5_img` + blogEleCnt + `" id="hid_be5_img` + blogEleCnt + `" value="">
                </div>
            </div>
            <div class="col-md-6">
                <div class="fv-row mb-7">
                    <label class="fs-6 fw-bold form-label mt-3">
                        <span>Description</span>
                    </label>
                    <textarea rows="6" name="be5_descr` + blogEleCnt + `" id="be5_descr` + blogEleCnt + `" maxlength="" class="form-control form-control-solid"></textarea>
                </div>
            </div>
        </div>
        `);
    } else if (num == 6) {
        $('#blog_descr_div').append(`
        <div class="row mb-3">
            <div class="col-md-11"><span class="h4">Promotion</span></div>
            <div class="col-md-1"><input type="text" name="be_display_order` + blogEleCnt + `" id="be_display_order` + blogEleCnt + `" maxlength="2" class="form-control form-control-solid fs-5 text-center border border-2 border-secondary" value="` + blogEleCnt + `"></div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="fv-row mb-7">
                    <label class="fs-6 fw-bold form-label mt-3">
                        <span>Title</span>
                    </label>
                    <input type="text" name="be6_title` + blogEleCnt + `" id="be6_title` + blogEleCnt + `" maxlength="100" class="form-control form-control-solid">
                </div>
                <div class="fv-row mb-7">
                    <label class="fs-6 fw-bold form-label mt-3">
                        <span>Image</span>
                    </label>
                    <div id="block1-be6_img"></div>
                    <div id="block2-be6_img">
                        <div class="input-group">
                            <input type="file" name="be6_img` + blogEleCnt + `" id="be6_img` + blogEleCnt + `" accept=".jpg,.webp" onchange="uploadPbImage('` + bUrl + `', '` + imgPath1 + `', '` + imgPath2 + `', this.id, '` + maxSize1 + `', 4, 'main_title:Primary heading')" class="form-control">

                            <label class="input-group-text bg-white">OR</label>

                            <button type="button" class="btn btn-secondary" onclick="openGallery('img')">Choose from Gallery</button>
                        </div>

                        <div class="small text-muted mt-2">100px W x 100px H</div>
                    </div>
                    <input type="text" name="hid_be6_img` + blogEleCnt + `" id="hid_be6_img` + blogEleCnt + `" value="">
                </div>
            </div>
            <div class="col-md-6">
                <div class="fv-row mb-7">
                    <label class="fs-6 fw-bold form-label mt-3">
                        <span>Description</span>
                    </label>
                    <textarea name="be6_descr` + blogEleCnt + `" id="be6_descr` + blogEleCnt + `" maxlength="" class="form-control form-control-solid"></textarea>
                </div>
                <div class="fv-row mb-7">
                    <label class="fs-6 fw-bold form-label mt-3">
                        <span>Hyperlink</span>
                    </label>
                    <input type="text" name="be6_hyperlink` + blogEleCnt + `" id="be6_hyperlink` + blogEleCnt + `" maxlength="100" class="form-control form-control-solid">
                </div>
            </div>
        </div>
        `);
    }

    blogEleCnt++;
    $("#blog_element_cnt").val(blogEleCnt);
}
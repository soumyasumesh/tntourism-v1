const SaveForm = $('#frm');
const saveButton = $('#saveButton');
//saveButton.click(() => 
function SaveData(){
    if ($('#name').val().trim() == '') {
        msgBox('Enter the Accommodation Name', 'warning');
        return;
    }

    if ($('#address').val().trim() == '') {
        msgBox('Enter the address', 'warning');
        return;
    }

    if ($('#latlong').val().trim() == '') {
        msgBox('Enter the Latitude & Longitude', 'warning');
        return;
    }

    if ($('#url').val().trim() == '') {
        msgBox('Enter the URL', 'warning');
        return;
    }

    if ($('#hid_image1').val().trim() == '') 
    {
        msgBox('Upload thumb image', 'warning');
        return;
    }

    if ($('#unit_type').val().trim() == '') {
        msgBox('Choose the accommodation Type', 'warning');
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

const Section_SaveForm = $('#frm');
const Section_saveButton = $('#saveButton');


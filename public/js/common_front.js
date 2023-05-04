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

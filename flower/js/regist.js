$(function(){
    valiteInput("#phone",/^1[3578]\d{9}$/);
    valiteInput("#pwd",/^\w{6,12}$/);
    function valiteInput(id, reg) {
		$(id).blur(function() {
			var value = $(this).val();
			var $error_span = $(this).siblings(".error-msg"); 
			if(reg.test(value)) { 
				$error_span.hide();
				$(this).attr("data-validate",true);
			} else {
				$(this).attr("data-validate",false);
				$error_span.show();
			}
		});
    }
    $("#repwd").blur(function(){
        var value=$(this).val();
        var $error_span = $(this).siblings(".error-msg");
        var prevalue=$("#pwd").val();
        if(value === prevalue){
            $error_span.hide();
        }else{
            $error_span.show()
        }
    })
    var liAll=document.querySelectorAll('.login-tabs li');
    var len=liAll.length;
    var formA=document.querySelectorAll('.login-box form');
    for(let j=0;j<len;j++){
        liAll[j].onclick=function(e){
            e.preventDefault();
            this.index=j;
            for(let k=0;k<len;k++){
                liAll[k].className='';
                formA[k].style.display='none';
            }
            this.className="active";
            formA[this.index].style.display="block"
        }
    }
})
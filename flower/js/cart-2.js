var check=document.querySelectorAll('.check');
console.log(check)
var dingjia=document.querySelectorAll('.dingjia');
var shuliang=document.querySelectorAll('.shuliang');
var money=document.querySelector('.money');
allPrice();
function allPrice(){
    var Price=0;      
    if(check.checked){
        Price += parseInt(dingjia.innerHTML) * parseInt(shuliang.value);
        console.log(Price)
    }       
    money.innerHTML="￥"+Price;
}  
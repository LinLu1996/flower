var jiaru=document.querySelectorAll('.jiaru');
var cart=document.querySelector('.allCart');
var header=document.querySelector('.header');
var jixu=document.querySelector('.jixu');
let arr=[];
function createCart(){
    for(let i=0;i<jiaru.length;i++){
        let priceEle=jiaru[i].parentElement.parentElement.firstElementChild;
        let price=priceEle.innerText.slice(1);
        let diretEle=jiaru[i].parentElement.parentElement.children[1].firstElementChild.firstElementChild;
        let direct=diretEle.innerText;
        let imgE=jiaru[i].parentElement.parentElement.parentElement.firstElementChild.getElementsByTagName('img')[0];
        let img=imgE.src;
        // let img=cart_img.src;
        

        jiaru[i].onclick=function(e){
            e.preventDefault(); 
            let list1={
                "price":price,
                "direct":direct,
                "img":img,
                "val":1
            }
            list1 = JSON.stringify(list1);
            localStorage.setItem("id"+i,list1);
        }
    }
   
}
createCart();
var money=document.querySelector('.money');
var Price=0;
// bd.onclick=function(e){
//     var target=e.target;
//     if(target.className==='check'){
//         var dingjia=target.parentElement.parentElement.getElementsByClassName('dingjia')[0];
//         var shuliang=target.parentElement.parentElement.getElementsByClassName('shuliang')[0];       
//         if(target.checked){
//             Price += parseInt(dingjia.innerHTML) * parseInt(shuliang.value);
//         }else{
//             Price -= parseInt(dingjia.innerHTML) * parseInt(shuliang.value);
//         }
//         money.innerHTML="￥"+Price; 
//     }
//     if(target.className==='jia'){
//         var check_1=target.parentElement.parentElement.parentElement.getElementsByClassName('check')[0];
//         var dingjia=target.parentElement.parentElement.parentElement.getElementsByClassName('dingjia')[0]; 
//         var shuliang=target.parentElement.parentElement.getElementsByClassName('shuliang')[0];
//         var shuliang_value=shuliang.value;
//         if(check_1.checked==false && shuliang_value>=2){
//             check_1.checked==true;
//             Price += parseInt(dingjia.innerHTML) * parseInt(shuliang.value);
//         }
//         if(check_1.checked==true && shuliang_value==1){
//             Price -=parseInt(dingjia.innerHTML);
//         }
//         shuliang_value=++shuliang_value;
//         shuliang.value=shuliang_value;
//         if(shuliang_value==2){
//             Price += parseInt(dingjia.innerHTML)*2;
//         }else{
//             Price +=parseInt(dingjia.innerHTML);
//         }
//         check_1.checked=true;
//         money.innerHTML="￥"+Price; 
//     }
//     if(target.className==='jian'){
//         var check_1=target.parentElement.parentElement.parentElement.getElementsByClassName('check')[0];
//         var dingjia=target.parentElement.parentElement.parentElement.getElementsByClassName('dingjia')[0]; 
//         var shuliang=target.parentElement.parentElement.getElementsByClassName('shuliang')[0];
//         var shuliang_value=shuliang.value;
//         if(shuliang_value>=1){
//             shuliang_value=--shuliang_value;
//         }
//         // shuliang_value=--shuliang_value;
//         shuliang.value=shuliang_value;
//         if(check_1.checked==false && shuliang_value>=0){
//             Price=Price;
//         }
//         if(shuliang_value<=0 && check_1.checked==true){
//             shuliang.value=1;
//             check_1.checked=false;
//             Price -= parseInt(dingjia.innerHTML);
//             if(Price<=0){
//                 Price=0;
//             }
//         }
//         else if(check_1.checked==true && shuliang_value>0){
//             Price -=parseInt(dingjia.innerHTML);
//             // check_1.checked=true;
//         }
//         money.innerHTML="￥"+Price; 
//     }
//     if(target.className==='dele'){
//         localStorage.clear()
//         var ul=target.parentElement.parentElement;
//         var checkB=ul.getElementsByClassName('check')[0];
//         var dingjia=ul.getElementsByClassName('dingjia')[0]; 
//         var shuliang=ul.getElementsByClassName('shuliang')[0];
//         if(checkB.checked){
//             var nu=parseInt(dingjia.innerHTML) * parseInt(shuliang.value);
//             Price-=nu;
//         }else{
//             Price=Price;
//         }
//         money.innerHTML="￥"+Price; 
//         ul.style.display="none";
//     }

// }
// var cartGoumai=document.querySelector('.cart-tabs-checked');
// var cartHua=document.querySelector('.cart-tabs-hua');
// var cartContent1=document.querySelector('#grid-wraper1');
// var cartContent2=document.querySelector('#grid-wraper2');
// var a1=document.querySelector('#cart-tabs-checked');
// var a2=document.querySelector('#cart-tabs-hua');
// cartGoumai.onclick=function(e){
//     e.preventDefault();
//     cartContent1.style.display="block";
//     cartContent2.style.display="none";
//     cartGoumai.classList.add('cart-tabs-checked');
//     cartHua.classList.remove('cart-tabs-checked');
// }
// cartHua.onclick=function(e){
//     e.preventDefault();
//     cartHua.classList.add('cart-tabs-checked');
//     cartGoumai.classList.remove('cart-tabs-checked');
//     cartContent1.style.display="none";
//     cartContent2.style.display="block";
// }






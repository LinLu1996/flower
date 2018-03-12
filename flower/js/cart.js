var tianjia=document.querySelectorAll('.tianjia');
var cart=document.querySelector('.allCart');
var bd=document.querySelector(".bd");
var header=document.querySelector('.header');
var jixu=document.querySelector('.jixu');
var zon =document.getElementById("zNum");
let shu =document.querySelectorAll(".shuliang");
let sum =0;
function createCart(){
    for(let i=0;i<tianjia.length;i++){
        let priceEle=tianjia[i].parentElement.parentElement.firstElementChild;
        let price=priceEle.innerText.slice(1);
        let diretEle=tianjia[i].parentElement.parentElement.children[1].firstElementChild.firstElementChild;
        let direct=diretEle.innerText;
        let imgE=tianjia[i].parentElement.parentElement.parentElement.firstElementChild.getElementsByTagName('img')[0];
        let img=imgE.src;

        tianjia[i].onclick=function(e){
            e.preventDefault(); 
            let list1={
                "price":price,
                "direct":direct,
                "img":img,
                "val":1
            }
            list1 = JSON.stringify(list1);
            localStorage.setItem("ip"+i,list1);
        }
    }
   
}
createCart();
var money=document.querySelector('.money');
var bd=document.querySelector('.bd');
var Price=0;


var shuA =document.querySelectorAll(".shuliang");
var sum1 =0;
for(let i =0;i<shuA.length;i++){
    console.log(parseInt(shuA[i].value))
    sum1+=parseInt(shuA[i].value)
}
bd.onclick=function(e){
    var target=e.target;
    if(target.className==='check'){
        var dingjia=target.parentElement.parentElement.getElementsByClassName('dingjia')[0];
        var shuliang=target.parentElement.parentElement.getElementsByClassName('shuliang')[0];       
        if(target.checked){
            Price += parseInt(dingjia.innerHTML) * parseInt(shuliang.value);
        }else{
            Price -= parseInt(dingjia.innerHTML) * parseInt(shuliang.value);
        }
        money.innerHTML="￥"+Price; 
    }
    if(target.className==='jia'){
        var ul =target.parentElement.parentElement.parentElement;
        var check_1=target.parentElement.parentElement.parentElement.getElementsByClassName('check')[0];
        var dingjia=target.parentElement.parentElement.parentElement.getElementsByClassName('dingjia')[0]; 
        var shuliang=target.parentElement.parentElement.getElementsByClassName('shuliang')[0];
        var shuliang_value=shuliang.value;
        if(check_1.checked==false && shuliang_value>=2){
            check_1.checked==true;
            Price += parseInt(dingjia.innerHTML) * parseInt(shuliang.value);
        }
        if(check_1.checked==true && shuliang_value==1){
            Price -=parseInt(dingjia.innerHTML);
        }
        shuliang_value=++shuliang_value;
        shuliang.value=shuliang_value;
        if(shuliang_value==2){
            Price += parseInt(dingjia.innerHTML)*2;
        }else{
            Price +=parseInt(dingjia.innerHTML);
        }
        check_1.checked=true;
        money.innerHTML="￥"+Price; 
        sum1+=1;
        console.log(sum1)

        // for(let i in localStorage){
        //     var val =localStorage.getItem(i);
        //     val=JSON.parse(val);
        //     val.val =sum1;
        //     console.log(val)
        //     localStorage.setItem(i,val);
        // }
    }
    if(target.className==='jian'){
        var check_1=target.parentElement.parentElement.parentElement.getElementsByClassName('check')[0];
        var dingjia=target.parentElement.parentElement.parentElement.getElementsByClassName('dingjia')[0]; 
        var shuliang=target.parentElement.parentElement.getElementsByClassName('shuliang')[0];
        var shuliang_value=shuliang.value;
        if(shuliang_value>=1){
            shuliang_value=--shuliang_value;
        }
        // shuliang_value=--shuliang_value;
        shuliang.value=shuliang_value;
        if(check_1.checked==false && shuliang_value>=0){
            Price=Price;
        }
        if(shuliang_value<=0 && check_1.checked==true){
            shuliang.value=1;
            check_1.checked=false;
            Price -= parseInt(dingjia.innerHTML);
            if(Price<=0){
                Price=0;
            }
        }
        else if(check_1.checked==true && shuliang_value>0){
            Price -=parseInt(dingjia.innerHTML);
            // check_1.checked=true;
        }
        money.innerHTML="￥"+Price; 
        sum1-=1;
    }
    if(target.className==='dele'){
        var ul=target.parentElement.parentElement;

        var checkB=ul.getElementsByClassName('check')[0];
        var dingjia=ul.getElementsByClassName('dingjia')[0]; 
        var shuliang=ul.getElementsByClassName('shuliang')[0];
        if(checkB.checked){
            var nu=parseInt(dingjia.innerHTML) * parseInt(shuliang.value);
            Price-=nu;
        }else{
            Price=Price;
        }
        money.innerHTML="￥"+Price; 
        ul.style.display="none";
        localStorage.removeItem(ul.id)
    }

}
var cartGoumai=document.querySelector('.cart-tabs-checked');
var cartHua=document.querySelector('.cart-tabs-hua');
var cartContent1=document.querySelector('#grid-wraper1');
var cartContent2=document.querySelector('#grid-wraper2');
var a1=document.querySelector('#cart-tabs-checked');
var a2=document.querySelector('#cart-tabs-hua');
cartGoumai.onclick=function(e){
    e.preventDefault();
    cartContent1.style.display="block";
    cartContent2.style.display="none";
    cartGoumai.classList.add('cart-tabs-checked');
    cartHua.classList.remove('cart-tabs-checked');
}
cartHua.onclick=function(e){
    e.preventDefault();
    cartHua.classList.add('cart-tabs-checked');
    cartGoumai.classList.remove('cart-tabs-checked');
    cartContent1.style.display="none";
    cartContent2.style.display="block";
}





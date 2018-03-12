var shouqi=document.querySelector('.shoula');
var peisong=document.querySelector('.peisong');
var isTrue=true;
shouqi.onclick=function(){
    if(isTrue){
        peisong.className="peisong-active";
        isTrue=false;
    }else{
        isTrue=true;
        peisong.className="peisong";
    }      
}
var price1=document.querySelectorAll('.price1');
let pe=document.querySelector('.active').getElementsByClassName('sell-price')[0];
let price=pe.innerText.slice(1);
for(var i=0;i<price1.length;i++){
    price1[i].onclick=function(){
        for(var j=0;j<price1.length;j++){
            price1[j].className="price1";
        }
        this.className+=' active';
        pe=this.getElementsByClassName('sell-price')[0];
        price=pe.innerText.slice(1);
    }
}
var jiaru=document.querySelectorAll('.btn-buy');
var cart=document.querySelector('.allCart');
var bd=document.querySelector(".bd");
var header=document.querySelector('.header');
var jixu=document.querySelector('.jixu');
function createCart(){
    for(let i=0;i<jiaru.length;i++){
        // let priceEle=jiaru[i].parentElement.getElementsByClassName('active')[0].getElementsByClassName('sell-price')[0];        
        // let price=priceEle.innerText.slice(1);
        let diretEle=jiaru[i].parentElement.getElementsByClassName('product-title-dir')[0];
        let direct=diretEle.innerText;
        let imgE=jiaru[i].parentElement.getElementsByClassName('show-img')[0].firstElementChild;
        let img=imgE.src;
        jiaru[i].onclick=function(e){
            e.preventDefault(); 
            let list1={
                "price":price,
                "direct":direct,
                "img":img
            }
            list1 = JSON.stringify(list1);
            localStorage.setItem("ix"+i,list1);
        }
    }
   
}
// function createCart(){
//     for(let i=0;i<jiaru.length;i++){
//         // let priceEle=jiaru[i].parentElement.getElementsByClassName('active')[0].getElementsByClassName('sell-price')[0];

//         // let price=priceEle.innerText.slice(1);
//         let diretEle=jiaru[i].parentElement.getElementsByClassName('product-title-dir')[0];
//         let direct=diretEle.innerText;
//         let imgE=jiaru[i].parentElement.getElementsByClassName('show-img')[0].firstElementChild;
//         // console.log(imgE)
//         let img=imgE.src;
//         jiaru[i].onclick=function(e){
//             e.preventDefault(); 
//             cart.style.display="block";
//             document.documentElement.scrollTop=0;
//             header.style.display="none";
//             document.body.style.top=0;
//             var ul=document.createElement('ul');
//             var li1=document.createElement('li');    
//             li1.style="width: 48px;height: 56px;text-align: center;cursor: pointer;";      
//             var input1=document.createElement('input');
//             input1.className="check";
//             input1.type="checkbox";
//             input1.style="display: inline-block;width: 24px;height: 24px;margin-top: 16px;";       
//             li1.appendChild(input1);
//             var li2=document.createElement('li');
//             li2.style="width: 70px;";
//             var img1=document.createElement('img');
//             img1.style="width:100%;height:100%";
//             img1.src=img;
//             li2.appendChild(img1);
//             var li3=document.createElement('li');
//             li3.style="width: 300px;margin-left:10px;";
//             var li3a=document.createElement('a');
//             li3a.style="margin-top: -15px;display: inline-block;";
//             li3a.innerHTML=direct;
//             var kuaidi=document.createElement('span');
//             kuaidi.innerHTML="顺丰快递深圳发货";
//             kuaidi.style="display:block;color:#ff6a00;margin:0;padding:0;height:12px;margin-top:-15px;line-height:12px;";
//             li3a.appendChild(kuaidi);
//             li3.appendChild(li3a);
//             var li4=document.createElement('li');
//             li4.style="width: 130px;line-height: 55px;text-align:center;";
//             li4.innerHTML=parseInt(price)+200;
//             var li5=document.createElement('li');
//             li5.className="dingjia";
//             li5.style="color: #ff6a00;width: 130px;line-height: 55px;text-align:center;";
//             li5.innerHTML=price;
//             var li6=document.createElement('li');
//             li6.style="width: 130px;line-height: 55px;text-align:center;";
//             var input_num=document.createElement('div');
//             input_num.style="width: 80px;margin: 0 auto;";
//             var jian=document.createElement('a');
//             jian.className='jian';
//             jian.style="display:inline-block;width: 12px;height: 12px;margin: -2px 0 0;";
//             jian.innerHTML="-";
//             input_num.appendChild(jian);
//             var input_v=document.createElement('input');
//             input_v.className="shuliang";
//             input_v.style="display: inline-block;width: 40px;height: 24px;border:1px solid #ccc;padding: 6px;";
//             input_v.value="1";
//             input_num.appendChild(input_v);
//             var jia=document.createElement('a');
//             jia.className='jia';
//             jia.style="display:inline-block;width: 12px;height: 12px;margin: -2px 0 0;";
//             jia.innerHTML="+";
//             input_num.appendChild(jia);
//             li6.appendChild(input_num);
//             var li7=document.createElement('li');
//             li7.style="width: 130px;8px 0 8px 40px;text-align:center;";
//             var del=document.createElement('a');
//             del.className='dele';
//             del.style="color: #737373;";
//             del.innerHTML="删除";
//             li7.appendChild(del);
//             ul.appendChild(li1);
//             ul.appendChild(li2);
//             ul.appendChild(li3);
//             ul.appendChild(li4);
//             ul.appendChild(li5);
//             ul.appendChild(li6);
//             ul.appendChild(li7);
//             bd.appendChild(ul);
//         }
//     }
   
// }
createCart()
var baozhang=document.querySelector('.baozhang-indicator');
var arrA=baozhang.getElementsByTagName('a');
var content=document.getElementsByClassName('baozhang-list');
var l=arrA.length;
for(let m=0;m<l;m++){
    arrA[m].onmouseover = function(){
        this.index=m; 
        for(var i=0;i<l;i++){
            content[i].style.opacity=0;
        }   
        content[this.index].style.opacity=1;
    }
}


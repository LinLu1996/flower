var jiaru=document.querySelectorAll('.btn-buy');
function createCart(){
    for(let i=0;i<jiaru.length;i++){
        let priceEle=jiaru[i].parentElement.parentElement.firstElementChild;
        let price=priceEle.innerText.slice(1);
        let diretEle=jiaru[i].parentElement.parentElement.children[1].firstElementChild.firstElementChild;
        let direct=diretEle.innerText;
        let imgE=jiaru[i].parentElement.parentElement.parentElement.firstElementChild.getElementsByTagName('img')[0];
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
createCart()
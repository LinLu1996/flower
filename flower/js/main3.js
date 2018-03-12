require.config({
    baseUrl: 'js/lib'
});
//加载lib/obj.js完毕后，执行函数
require(['slider_opacity1'], function (Slider) {
    var imgs = [
        'img/product-lunbo1.jpg',
        'img/product-lunbo2.jpg',
        'img/product-lunbo3.jpg',
        'img/product-lunbo4.jpg'
    ];
    var miniImg = [
        'img/product-min1.jpg',
        'img/product-min2.jpg',
        'img/product-min3.jpg',
        'img/product-min4.jpg'
    ]
    let id = window.location.search.split("=")[1];
    fetch(
        `http://localhost:3000/shangping/show?id=${id}`,
        {
            method: 'get'
        })
        .then(resp => resp.json())
        .then(data => {
           imgs = data.imgs;
           dire =data.dire;
           list1 =data.list1;
           list2 =data.list2;
           list3 =data.list3;
           list4 =data.list4;
           var title =document.querySelector(".product-title-dir");
           title.innerHTML=dire;
           console.log(imgs)
           oBox = document.getElementById("product-l");
           new Slider(imgs,oBox, miniImg);
           var p1 =document.getElementById("img1");
           p1.src=list1;
           var p2=document.getElementById("img2");
           p2.src=list2;
           var p3=document.getElementById("img3");
           p3.src =list3;
           var p4 =document.getElementById("img4");
           p4.src=list4;
        })
        .catch(e => console.log(e))
});
function Aiqing(id,arr){
    this.container=id;
    this.arr=arr;
    this.len=0;
    this.init();
}
Aiqing.prototype={
    constructor:Aiqing,
    init:function(){
        var box=document.createElement('div');
        box.style="width:245px;height:642px;position:absolute;left:0;top:0;";
        var boxTop=document.createElement('img');
        boxTop.style="width:245px;height:440px;";
        boxTop.src=this.arr.zuo.img;
        var zhuanqu=document.createElement('div');
        zhuanqu.style="width:246px;height:201px;background:#fbc0ba;position:absolute;top:440px;"
        var zhuanquA=document.createElement('a');
        zhuanquA.style="display:block;width:192px;font-size:20px;height:50px;line-height:50px;margin:70px 24px;border:1px solid white;text-align:center;";
        zhuanquA.innerHTML=this.arr.zuo.dire;
        zhuanqu.appendChild(zhuanquA);
        box.appendChild(boxTop);
        box.appendChild(zhuanqu);
        var boxRight=document.createElement('div');
        boxRight.style="width:964px;height:640px;text-align:center;border-bottom:1px solid #ccc;position:absolute;top:0;left:245px;";
        for(var i in this.arr.right){
            this.len++;
        }
        for(let i=0;i<this.len;i++){
            let list=document.createElement('div');
            let id=null;
            id =i+1;
            list.id=id;
            list.style="width:220px;height:300px;padding:10px;border-top:1px solid #ccc;border-right:1px solid #ccc;float:left;";
            var img =document.createElement('img');
            img.style="width:220px;height:240px;margin-bottom:20px;";
            img.src=this.arr.right["list"+i].img;
            var direction=document.createElement('a');
            direction.style="font-size:13px;";
            direction.innerHTML=this.arr.right["list"+i].dir;
            // direction.href="xiangqing.html";
            list.appendChild(img);
            list.appendChild(direction);
            direction.onclick=function(){
                window.location.href="file:///Users/igeekhome/web/flower/xiangqing.html?id="+id
            }
            boxRight.appendChild(list);
            list.onclick=function(){
                // fetch(
                //     `http://localhost:3001/shangping/show?id=${id}`,
                //     {
                //         method:'get'
                //     })
                //     .then(resp=>resp.json())
                //     .then(data=>console.log(data))
                //     .catch(e=>console.log(e))
                    window.location.href="file:///Users/igeekhome/web/flower/xiangqing.html?id="+id
            }

        }
        this.container.appendChild(box);
        this.container.appendChild(boxRight);
    }
}
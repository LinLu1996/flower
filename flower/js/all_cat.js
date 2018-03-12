function All_cat(id,all){
	this.id=id;
	this.all=all;
	this.len = 0;
	this.liListAll =[];
	this.list0All =[];
	this.init();
	this.show();
}
All_cat.prototype={
	constructor:All_cat,
	init:function(){
		for(var prop in this.all){
			this.len++;
		}
		for(var i=0;i<this.len;i++){
			this.liList=document.createElement('div');
			this.liList.style="width:100%;height:54px; padding: 0 15px;";
			this.list=document.createElement('div');
			this.list.style="height: 30px; padding: 12px 0;position: absolute; width: 180px;border-bottom: 1px solid #fbd2d8;font-size:16px;font-weight:bold";
			this.list.innerHTML=this.all["list"+i].title;
			var span=document.createElement('span');
			span.style="width:8px;height:20px;position:absolute;right:3px;top:9px;background:url(img/xiaotubiao.png) no-repeat;background-position: -248px -7px;";	
			this.liList.appendChild(this.list);
			this.list.appendChild(span);
			this.id.appendChild(this.liList);
			this.liListAll.push(this.liList);
			this.createList(i);
		}
	},
	createList:function(i){
		this.list0=document.createElement('div');
		this.list0.style="width:590px;height:380px;display:none;border:1px solid red;position:absolute;left:173px;top:0;background-color:white;margin-left: 20px;font-size: 14px;padding-top: 20px;";
		this.list.appendChild(this.list0);
		for(var j=0;j<this.all["list"+i].list.img.length;j++){
			var hua=document.createElement('div');
			hua.style="width:140px;height:170px;float:left;text-align:center;margin-bottom:20px";
			var img=document.createElement('img');
			img.style="width:130px;height:130px;";
			img.src=this.all["list"+i].list.img[j];
			var discribe=document.createElement('p');
			var a=document.createElement('a');
			a.href='#';
			a.style="color:#555;";
			a.innerHTML=this.all["list"+i].list.discribe[j];
			discribe.appendChild(a);
			var price=document.createElement('p');
			price.style="color:red";
			price.innerHTML=this.all["list"+i].list.price[j];
			hua.appendChild(img);
			hua.appendChild(discribe);
			hua.appendChild(price);
			this.list0.appendChild(hua);
		}
		this.list0All.push(this.list0);
		
	},
	show:function(){
		for(var i=0;i<this.len;i++){
			var that=this;
			this.liListAll[i].index=i;
			this.liListAll[i].onmousemove=function(){
				that.list0All[this.index].style.display="block";
			}
			this.liListAll[i].onmouseleave=function(){
				that.list0All[this.index].style.display="none";
			}
		}
	}
}


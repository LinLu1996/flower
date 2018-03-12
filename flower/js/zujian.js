var all_cat = document.getElementById("all-cat");
var json1 = {
    "list0": {
        "title": "全部商品",
        "list": {
            "img": ['img/list1-1.jpg', 'img/list1-2.jpg', 'img/list1-3.jpg', 'img/list1-4.jpg', 'img/list1-5.jpg', 'img/list1-6.jpg', 'img/list1-7.jpg', 'img/list1-8.jpg'],
            "discribe": ['幸福-11支混色玫...', '骄阳似火-24支三...', '轻语-19支雪山玫...', '花样年华-21支...', '青青子衿-青青子衿...', '莫负好时光-16支...', '马尔代夫的假日...', '回忆-33朵白色百...'],
            "price": ['￥255.0', '￥236.0', '￥316.0', '￥339.0', '￥235.0', '￥260.0', '￥399.0', '￥399.0']
        }
    },
    "list1": {
        "title": "送恋人",
        "list": {
            "img": ['img/list1-1.jpg', 'img/list1-3.jpg', 'img/list1-4.jpg', 'img/list1-6.jpg', 'img/list1-7.jpg', 'img/list1-2.jpg', 'img/list1-5.jpg', 'img/list1-8.jpg'],
            "discribe": ['幸福-11支混色玫...', '轻语-19支雪山玫...', '花样年华-21支...', '莫负好时光-16支...', '马尔代夫的假日...', '骄阳似火-24支三...', '青青子衿-青青子衿...', '回忆-33朵白色百...'],
            "price": ['￥255.0', '￥316.0', '￥339.0', '￥260.0', '￥399.0', '￥236.0', '￥235.0', '￥399.0', ]
        }
    },
    "list2": {
        "title": "送朋友",
        "list": {
            "img": ['img/list1-8.jpg', 'img/list1-7.jpg', 'img/list1-6.jpg', 'img/list1-5.jpg', 'img/list1-4.jpg', 'img/list1-3.jpg', 'img/list1-2.jpg', 'img/list1-1.jpg'],
            "discribe": ['回忆-33朵白色百...', '马尔代夫的假日...', '莫负好时光-16支...', '青青子衿-青青子衿...', '花样年华-21支...', '轻语-19支雪山玫...', '骄阳似火-24支三...', '幸福-11支混色玫...'],
            "price": ['￥399.0', '￥399.0', '￥260.0', '￥235.0', '￥339.0', '￥316.0', '￥236.0', '￥255.0']
        }
    },
    "list3": {
        "title": "送师长",
        "list": {
            "img": ['img/list1-4.jpg', 'img/list1-3.jpg', 'img/list1-2.jpg', 'img/list1-1.jpg', 'img/list1-8.jpg', 'img/list1-7.jpg', 'img/list1-6.jpg', 'img/list1-5.jpg', ],
            "discribe": ['花样年华-21支...', '轻语-19支雪山玫...', '骄阳似火-24支三...', '幸福-11支混色玫...', '回忆-33朵白色百...', '马尔代夫的假日...', '莫负好时光-16支...', '青青子衿-青青子衿...', ],
            "price": ['￥339.0', '￥339.0', '￥316.0', '￥255.0', '￥399.0', '￥399.0', '￥236.0', '￥399.0']
        }
    },
    "list4": {
        "title": "商务用花",
        "list": {
            "img": ['img/list4-1.jpg', 'img/list4-2.jpg', 'img/list4-3.jpg', 'img/list4-4.jpg', 'img/list4-5.jpg'],
            "discribe": ['生意似春笋 财源如...', '鸿基始创 骏业日新...', '生意如同春意满财...', '吉祥开业 大富起源', '深业茂无疆业 源远...'],
            "price": ['398.0', '398.0', '598.0', '639.0', '498.0']
        }
    },
    "list5": {
        "title": "绿植盆景",
        "list": {
            "img": ['img/list5-1.jpg', 'img/list5-2.jpg', 'img/list5-3.jpg', 'img/list5-4.jpg', 'img/list5-5.jpg', 'img/list5-6.jpg', 'img/list5-7.jpg', 'img/list5-8.jpg'],
            "discribe": ['合果芋', '一帆风顺', '巴西木', '天堂鸟', '财源滚滚', '万年长青', '多才多富', '金钱树'],
            "price": ['￥168.0', '￥69.0', '￥273.0', '￥328.0', '￥372.0', '￥210.0', '￥212.0', '￥238.0']
        }
    }
}
var aa = new All_cat(all_cat, json1);
var json2={
    'zuo':{
        'img':'img/aiqing-1.jpg',
        'dire':'爱情鲜花专区>>'
    },
    'right':{
        'list0':{
            'img':'img/aiqing-2.jpg',
            'dir':'鲜花.一往情深<br>￥235'					
        },
        'list1':{
            'img':'img/aiqing-3.jpg',
            'dir':'鲜花.真爱<br>￥126'
        },
        'list2':{
            'img':'img/aiqing-5.jpg',
            'dir':'鲜花.不变的承诺<br>￥569'				
        },
        'list3':{
            'img':'img/aiqing-4.jpg',
            'dir':'鲜花.真爱如初<br>￥196'					
        },
        'list4':{
            'img':'img/aiqing-6.jpg',
            'dir':'鲜花.我只钟情你<br>￥228'					
        },
        'list5':{
            'img':'img/aiqing-7.jpg',
            'dir':'鲜花.多彩的季节<br>￥392'					
        },
        'list6':{
            'img':'img/aiqing-8.jpg',
            'dir':'鲜花.幸福的约定<br>￥339'					
        },
        'list7':{
            'img':'img/aiqing-9.jpg',
            'dir':'鲜花.邻家女孩<br>￥296'					
        }
    }
}
var aiqingContent=document.getElementById('aiqing-content');
var aiqing=new Aiqing(aiqingContent,json2);
var json3={
    'zuo':{
        'img':'img/zhangbei-1.jpg',
        'dire':'送长辈鲜花专区>>'
    },
    'right':{
        'list0':{
            'img':'img/zhangbei-2.jpg',
            'dir':'鲜花.馨情无限<br>￥236'					
        },
        'list1':{
            'img':'img/zhangbei-3.jpg',
            'dir':'鲜花.醉思念<br>￥189'
        },
        'list2':{
            'img':'img/zhangbei-4.jpg',
            'dir':'鲜花.天使之祈<br>￥195'					
        },
        'list3':{
            'img':'img/zhangbei-5.jpg',
            'dir':'鲜花.温馨思念<br>￥235'					
        },
        'list4':{
            'img':'img/zhangbei-6.jpg',
            'dir':'鲜花.幸福万年长<br>￥369'					
        },
        'list5':{
            'img':'img/zhangbei-7.jpg',
            'dir':'鲜花.母爱<br>￥158'					
        },
        'list6':{
            'img':'img/zhangbei-8.jpg',
            'dir':'鲜花.爱的思念<br>￥186'					
        },
        'list7':{
            'img':'img/zhangbei-9.jpg',
            'dir':'鲜花.嫣然<br>￥198'					
        }
    }
}
var zhangbeiContent=document.getElementById('zhangbei-content');
var zhangbei=new Aiqing(zhangbeiContent,json3);
var json4={
    'zuo':{
        'img':'img/yongsheng-1.jpg',
        'dire':'永生花专区>>'
    },
    'right':{
        'list0':{
            'img':'img/aiqing-2.jpg',
            'dir':'永生花.Be My Love<br>￥398'					
        },
        'list1':{
            'img':'img/aiqing-3.jpg',
            'dir':'永生花.恋心<br>￥288'
        },
        'list2':{
            'img':'img/zhangbei-4.jpg',
            'dir':'永生花.小仙女<br>￥195'					
        },
        'list3':{
            'img':'img/aiqing-5.jpg',
            'dir':'永生花.公主的音乐水晶球.七彩<br>￥235'					
        },
        'list4':{
            'img':'img/aiqing-6.jpg',
            'dir':'永生花.爱与祝福<br>￥198'					
        },
        'list5':{
            'img':'img/aiqing-7.jpg',
            'dir':'永生花.彩虹下的约定/花的嫁纱银项链<br>￥368'					
        },
        'list6':{
            'img':'img/aiqing-8.jpg',
            'dir':'永生花.海洋之恋<br>￥999'					
        },
        'list7':{
            'img':'img/aiqing-9.jpg',
            'dir':'永生花.To温暖你心<br>￥288'					
        }
    }
}
var yongshengContent=document.getElementById('yongsheng-content');
var yongsheng=new Aiqing(yongshengContent,json4);


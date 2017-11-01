window.onload=function (){
	// $('#myCarousel').carousel({interval:3000});
	//获取鼠标滑过或点击的标签和要切换内容的元素
	var titles=document.getElementById('notice-tit').getElementsByTagName('li');
	var divs=document.getElementById('notice-con').getElementsByTagName('section');
	if(titles.length!=divs.length){
		return;
	}
	//遍历titles下的所以li
	for (var i = 0; i < titles.length; i++) {
		titles[i].id=i;
		titles[i].onclick=function(){
			for (var j = 0; j < titles.length; j++) {
				titles[j].className='';
				divs[j].style.display='none';
			}
			this.className='select';
			divs[this.id].style.display='block';
		}
	}
}
	var top1=document.getElementById('top-top');
	var hss=document.getElementById('hss');
	var hpp=document.getElementById('hpp');
	var hss=document.getElementById('hss');
	var li2=document.getElementById('li-2');
	var li3=document.getElementById('li-3');
	var li4=document.getElementById('li-4');
	var sol1=document.getElementById('sol1');
	var sol2=document.getElementById('sol2');
	var sol3=document.getElementById('sol3');
	var sol11=document.getElementById('sol1-con');
	var sol21=document.getElementById('sol2-con');
	var sol31=document.getElementById('sol3-con');
	var navImg=document.getElementById('nav-img');
	var ul2=document.getElementById('ul2');
	var ul2Img=document.getElementById('ul2-img');
	navImg.onclick=function(){
		ul2.style.display='block';
	}
	ul2Img.onclick=function(){
		ul2.style.display='none';
		sol11.style.display='none';
		sol21.style.display='none';
		sol31.style.display='none';
	}
	var li=document.getElementById('ul1').getElementsByTagName('li');
	var li1=document.getElementById('ul2').getElementsByTagName('li');
	hss.onmouseover=function(){
		li2.style.display='block';
	}
	hpp.onmouseover=function(){
		li3.style.display='block';
	}
	haa.onmouseover=function(){
		li4.style.display='block';
	}
	top1.onmouseover=function(){
		li2.style.display='none';
		li3.style.display='none';
		li4.style.display='none';
	}
	for(var i=0;i<li.length;i++){
		li[i].onmouseover=function(){
			li2.style.display='none';
			li3.style.display='none';
			li4.style.display='none';
		}
	}
	li2.onmouseleave=function(){
		li2.style.display='none';
	}
	li3.onmouseleave=function(){
		li3.style.display='none';
	}
	li4.onmouseleave=function(){
		li4.style.display='none';
	}
	sol1.onmouseover=function(){
		sol11.style.display='block';
	}
	sol2.onmouseover=function(){
		sol21.style.display='block';
	}
	sol3.onmouseover=function(){
		sol31.style.display='block';
	}
	for(var i=0;i<li1.length;i++){
		li1[i].onmouseover=function(){
			sol11.style.display='none';
			sol21.style.display='none';
			sol31.style.display='none';
		}
	}
	sol11.onmouseleave=function(){
		sol11.style.display='none';
	}
	sol21.onmouseleave=function(){
		sol21.style.display='none';
	}
	sol31.onmouseleave=function(){
		sol31.style.display='none';
	}
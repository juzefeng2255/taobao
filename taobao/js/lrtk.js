 window.onload = function()
  {
	  var oDiv = document.getElementById('playBox');
	  var oPre = getByClass(oDiv,'pre')[0];
	  var oNext = getByClass(oDiv,'next')[0];
	  var oUlBig = getByClass(oDiv,'oUlplay')[0];
	  var aBigLi = oUlBig.getElementsByTagName('li');
	  var oDivSmall = getByClass(oDiv,'smalltitle')[0]
	  var aLiSmall = oDivSmall.getElementsByTagName('li');

	  function tab()
	  {
	     for(var i=0; i<aLiSmall.length; i++)
	     {
		    aLiSmall[i].className = '';
	     }
	     aLiSmall[now].className = 'thistitle'
	     startMove(oUlBig,'left',-(now*aBigLi[0].offsetWidth))
	  }
	  var now = 0;
	  for(var i=0; i<aLiSmall.length; i++)
	  {
		  aLiSmall[i].index = i;
		  aLiSmall[i].onclick = function()
		  {
			  now = this.index;
			  tab();
		  }
	 }
	  oPre.onclick = function()
	  {
		  now--
		  if(now ==-1)
		  {
			  now = aBigLi.length;
		  }
		   tab();
	  }
	   oNext.onclick = function()
	  {
		   now++
		  if(now ==aBigLi.length)
		  {
			  now = 0;
		  }
		  tab();
	  }
	  var timer = setInterval(oNext.onclick,3000) //¹ö¶¯¼ä¸ôÊ±¼äÉèÖÃ
	  oDiv.onmouseover = function()
	  {
		  clearInterval(timer)
	  }
	   oDiv.onmouseout = function()
	  {
		  timer = setInterval(oNext.onclick,3000) //¹ö¶¯¼ä¸ôÊ±¼äÉèÖÃ
	  }




	  var oDiv2 = document.getElementById('dd');
	  var oPre2 = getByClass(oDiv2,'ce')[0];
	  var oNext2 = getByClass(oDiv2,'gnt')[0];
	  var oUlBig2 = getByClass(oDiv2,'wlay')[0];
	  var aBigLi2 = oUlBig2.getElementsByTagName('li');
	  var oDiv2Small = getByClass(oDiv2,'wle')[0]
	  var aLiSmall2 = oDiv2Small.getElementsByTagName('li');

	  function tab2()
	  {
	     for(var i=0; i<aLiSmall2.length; i++)
	     {
		    aLiSmall2[i].className = '';
	     }
	     aLiSmall2[now].className = 'atle'
	     startMove(oUlBig2,'left',-(now*aBigLi2[0].offsetWidth))
	  }
	  var now2 = 0;
	  for(var i2=0; i2<aLiSmall2.length; i2++)
	  {
		  aLiSmall2[i2].index = i2;
		  aLiSmall2[i2].onclick = function()
		  {
			  now2 = this.index;
			  tab2();
		  }
	 }
	  oPre2.onclick = function()
	  {
		  now2--
		  if(now2 ==-1)
		  {
			  now2 = aBigLi2.length;
		  }
		   tab2();
	  }
	   oNext2.onclick = function()
	  {
		   now2++
		  if(now2 ==aBigLi2.length)
		  {
			  now2 = 0;
		  }
		  tab2();
	  }
	  var timer = setInterval(oNext2.onclick,4000) //¹ö¶¯¼ä¸ôÊ±¼äÉèÖÃ
	  oDiv2.onmouseover = function()
	  {
		  clearInterval(timer)
	  }
	   oDiv2.onmouseout = function()
	  {
		  timer = setInterval(oNext2.onclick,4000) //¹ö¶¯¼ä¸ôÊ±¼äÉèÖÃ
	  }







	  var aaaa = document.getElementById('aaaa');
		    var bbbbb = document.getElementById('login');
			  aaaa.onclick  = function () {
				bbbbb.style.display =  'none';
				this.style.display =  'none';
			}



function $(id) {
		return document.getElementById(id);
	}
	var lis=$('tabs').getElementsByTagName('li');
	var divs=$('con').getElementsByTagName('div');
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var i=0;i<lis.length;i++){
				lis[i].className='';
			}
			this.className='on';
			for(var i=0;i<divs.length;i++){
			divs[i].className='';
			}
			divs[this.index].className='show';
		}
	}

	var zis=$('cz').getElementsByTagName('li');
	var divw=$('bbb').getElementsByTagName('div');
	for(var i=0;i<zis.length;i++){
		zis[i].index=i;
		zis[i].onclick=function(){
			for(var i=0;i<zis.length;i++){
				zis[i].className='';
			}
			this.className='hf';
			for(var i=0;i<divw.length;i++){
			divw[i].className='';
			}
			divw[this.index].className='show';
		}
	}



	var test=$('test');
	var num=$('num');
	var nums=['','49.5','98-99.5','198-199','298-299.5'];
	test.onchange =function(){
		var i=test.selectedIndex;
		num.innerHTML=nums[i];
	}


			function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name]
	}
	else
	{
		return getComputedStyle(obj,false)[name]
	}
}

function getByClass(oParent,nClass)
{
	var eLe = oParent.getElementsByTagName('*');
	var aRrent  = [];
	for(var i=0; i<eLe.length; i++)
	{
		if(eLe[i].className == nClass)
		{
			aRrent.push(eLe[i]);
		}
	}
	return aRrent;
}

function startMove(obj,att,add)
{
	clearInterval(obj.timer)
	obj.timer = setInterval(function(){
	   var cutt = 0 ;
	   if(att=='opacity')
	   {
		   cutt = Math.round(parseFloat(getStyle(obj,att)));
	   }
	   else
	   {
		   cutt = Math.round(parseInt(getStyle(obj,att)));
	   }
	   var speed = (add-cutt)/4;
	   speed = speed>0?Math.ceil(speed):Math.floor(speed);
	   if(cutt==add)
	   {
		   clearInterval(obj.timer)
	   }
	   else
	   {
		   if(att=='opacity')
		   {
			   obj.style.opacity = (cutt+speed)/100;
			   obj.style.filter = 'alpha(opacity:'+(cutt+speed)+')';
		   }
		   else
		   {
			   obj.style[att] = cutt+speed+'px';
		   }
	   }

	},30)
}




 function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name]
	}
	else
	{
		return getComputedStyle(obj,false)[name]
	}
}

function getByClass(oParent,nClass)
{
	var eLe = oParent.getElementsByTagName('*');
	var aRrent  = [];
	for(var i=0; i<eLe.length; i++)
	{
		if(eLe[i].className == nClass)
		{
			aRrent.push(eLe[i]);
		}
	}
	return aRrent;
}

function startMove(obj,att,add)
{
	clearInterval(obj.timer)
	obj.timer = setInterval(function(){
	   var cutt = 0 ;
	   if(att=='opacity')
	   {
		   cutt = Math.round(parseFloat(getStyle(obj,att)));
	   }
	   else
	   {
		   cutt = Math.round(parseInt(getStyle(obj,att)));
	   }
	   var speed = (add-cutt)/4;
	   speed = speed>0?Math.ceil(speed):Math.floor(speed);
	   if(cutt==add)
	   {
		   clearInterval(obj.timer)
	   }
	   else
	   {
		   if(att=='opacity')
		   {
			   obj.style.opacity = (cutt+speed)/100;
			   obj.style.filter = 'alpha(opacity:'+(cutt+speed)+')';
		   }
		   else
		   {
			   obj.style[att] = cutt+speed+'px';
		   }
	   }

	},30)
}
  }
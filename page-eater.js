// 添加可选播放速度
function add_speed(s)
{
    speed=document.createTextNode(s);
    span=document.createElement('span');
    span.appendChild(speed);
    li=document.createElement('li');
    li.appendChild(span);
    if(Math.abs(s-1)<=0.000001)
        li.setAttribute('class', 'active');
    return li;
}
ul=document.getElementsByClassName('f-speed-list')[0];
ul.innerHTML = ""
for(i=2; i>=0.75; i-=0.0625)
    ul.append(add_speed(i));

// 使当前播放视频的链接，处在视频播放窗口右侧的“列表”栏
// 的最上端
tags_container = document.getElementsByClassName('tabs-container')[0];
for(i=1; i<=4; i++)
{
    tab = tags_container.getElementsByClassName('tab'+i)[0];
    if(i<4)
        tab.setAttribute('style', 'display: none');
    else
    {
        tab.setAttribute('style', 'display: block');
        cur = tab.getElementsByClassName('cur')[0];
        cur.scrollIntoView();
    }
}
window.scrollTo(0,0);

// 显示选中“列表”栏
at = document.getElementsByClassName('aside-tabs')[0]
lis = at.getElementsByTagName('li')
console.log(lis);
for(i=0; i<4; i++)
{
    if(i<3)
        lis[i].setAttribute('class', '');
    else
        lis[i].setAttribute('class', 'active');
}

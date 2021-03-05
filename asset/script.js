let root = document.documentElement;

let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;
let theta = Math.atan(clientHeight / clientWidth);

const deptList = [
    {
        idx: 0, 
        dept : 'tafd',
        title: '"tafd exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/tafd`
    },
    {
        idx: 1, 
        dept : 'sculpt',
        title: '"sculpt exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/sculpt`
    },
    {
        idx: 2, 
        dept : 'op',
        title: '"op exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/op`
    },
    {
        idx: 3, 
        dept : 'id',
        title: '"id exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/i`
    },
    {
        idx: 4, 
        dept : 'vcd',
        title: '"vcd exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/vcd`
    },
    {
        idx: 5, 
        dept : 'c&g',
        title: '"c&g exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/c&g`
    },
    {
        idx: 6, 
        dept : 'paint',
        title: '"paint exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/paint`
    },
    {
        idx: 7, 
        dept : 'print',
        title: '"print exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/print`
    },
    {
        idx: 8, 
        dept : 'w&f',
        title: '"w&f exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/w&f`
    },
    {
        idx: 9, 
        dept : 'mad',
        title: '"mad exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/mad`
    },
    {
        idx: 10, 
        dept : 'art',
        title: '"art exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/art`
    }
];


(function() {
    const throttle = function(type, name, obj) {
        obj = obj || window;
        let running = false;
        let func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();

// handle event


['load','optimizedResize'].forEach( evt => 
    window.addEventListener(evt, function() {
        clientWidth = document.documentElement.clientWidth;
        clientHeight = document.documentElement.clientHeight;

        leg = Math.sqrt(Math.pow(clientHeight/2,2) + Math.pow(clientWidth/2,2)); //빗변

        theta = Math.atan(clientHeight / clientWidth); //빗변 각도

        //console.log(Math.floor(theta*80)-25);//궤도 각도
        //console.log(clientHeight,clientWidth, leg, theta)//높이 너비 빗변 각도

        let i = clientWidth / 3 + 150;
        //console.log(-i);
        root.style.setProperty('--offset', -i + "px");
        root.style.setProperty('--orbit', `rotateX(-115deg) rotateY(${Math.floor(theta*80)-25}deg)`);
    
    })
);

$('button').click(function(){
    if($('.modal').css('display') === 'none'){
        $('.modal').css('display','block');
    }else{
        $('.modal').css('display','none');        
    }
    console.log(this)
    this.children[0].classList.toggle('clickedBtn')
})

function initialDelay(){
    return new Promise(res => setTimeout(res, 250));
}

const graphicDOM = Array.from($('.graphic > div'))
window.addEventListener('load', async ()=>{
    console.log(graphicDOM);
    for (const el of graphicDOM){
        const i = graphicDOM.indexOf(el)+1;
        await initialDelay();
        el.style.backgroundImage = `url(./source/tafd${i}.png)`
        console.log(i)
    }
})
console.log(graphicDOM)
const deptDOM = Array.from($('li.dept'));
console.log(deptDOM)
//dept mouse over event
$.each($('li.dept'), (j, el)=>{
    console.log(j, el)
    $(el).mouseover(async ()=>{
        //tooltip event
        const tooltip = $('.tooltip')
        tooltip.css('display', 'block')
        $('.exbInfo').html(`${deptList[j].title}<br>`)
        tooltip.css('top', deptList[j].Y);
        tooltip.css('left', deptList[j].X);

        //graphic event
        for (const el of graphicDOM){
            console.log(el)
            const i = graphicDOM.indexOf(el)+1;
            await initialDelay();
            console.log(deptList[j].url)
            el.style.backgroundImage = `${deptList[j].url}${i}.png`
            console.log(i)
        }
        
    })
})
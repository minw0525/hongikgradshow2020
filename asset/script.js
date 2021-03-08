let root = document.documentElement;

let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;
let theta = Math.atan(clientHeight / clientWidth);

const graphicDOM = Array.from($('.graphic > div'))
const deptDOM = Array.from($('li.dept'));


const deptList = [
    {
        idx: 0, 
        dept : 'tafd',
        title: '"tafd exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/tafd/textile_`,
        posT :['50%', '50%', '50%', '50%', '50%'],
        posL :['50%', '50%', '50%', '50%', '50%'],
        color: '#DACFE2'
    },
    {
        idx: 1, 
        dept : 'sculpt',
        title: '"sculpt exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/sculpt/sculpture_`,
        posT :['50%', '50%', '50%', '50%', '50%'],
        posL :['50%', '50%', '50%', '50%', '50%'],
        color: '#FFDFB9'
    },
    {
        idx: 2, 
        dept : 'op',
        title: '"op exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/op/oriental_`,
        posT :['50%', '50%', '50%', '50%', '50%'],
        posL :['50%', '50%', '50%', '50%', '50%'],
        color: '#CBEFFF'
    },
    {
        idx: 3, 
        dept : 'id',
        title: '"id exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/id/industrial_`,
        posT :['50%', '50%', '50%', '50%', '50%'],
        posL :['50%', '50%', '50%', '50%', '50%'],
        color: '#E6E6E6'
    },
    {
        idx: 4, 
        dept : 'vcd',
        title: '"vcd exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/vcd/viscom_`,
        posT :['50%', '50%', '50%', '50%', '50%'],
        posL :['50%', '50%', '50%', '50%', '50%'],
        color: '#FFFE48'
    },
    {
        idx: 5, 
        dept : 'c&g',
        title: '"c&g exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/c&g/ceramic_`,
        posT :['50%', '50%', '50%', '50%', '50%'],
        posL :['50%', '50%', '50%', '50%', '50%'],
        color: '#FFDD80'
    },
    {
        idx: 6, 
        dept : 'paint',
        title: '"paint exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/paint/painting_`,
        posT :['50%', '50%', '50%', '50%', '50%'],
        posL :['50%', '50%', '50%', '50%', '50%'],
        color: '#8EFFFF'
    },
    {
        idx: 7, 
        dept : 'print',
        title: '"print exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/print/printmaking_`,
        posT :['50%', '50%', '50%', '50%', '50%'],
        posL :['50%', '50%', '50%', '50%', '50%'],
        color: '#74FFA4'
    },
    {
        idx: 8, 
        dept : 'w&f',
        title: '"w&f exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/w&f/woodwork_`,
        posT :['50%', '50%', '50%', '50%', '50%'],
        posL :['50%', '50%', '50%', '50%', '50%'],
        color: '#D6FEA5'
    },
    {
        idx: 9, 
        dept : 'mad',
        title: '"mad exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/mad/metal_`,
        posT :['50%', '50%', '50%', '50%', '50%'],
        posL :['50%', '50%', '50%', '50%', '50%'],
        color: '#FFFAC3'
    },
    {
        idx: 10, 
        dept : 'art',
        title: '"art exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/art/artstudies_`,
        posT :['50%', '50%', '50%', '50%', '50%'],
        posL :['50%', '50%', '50%', '50%', '50%'],
        color: '#FFACFC'
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

        let i = clientWidth / 3 + 190;
        //console.log(-i);
        root.style.setProperty('--offset', -i + "px");
        root.style.setProperty('--orbit', `rotateX(-115deg) rotateY(${Math.floor(theta*85)-35}deg)`);
    
    })
);

//preload images
let images = [];
function preload(i, arr, url) {
        arr[i] = new Image();
        arr[i].src = `${url}${i}.png`;
}
for(let i = 0; i<deptList.length; i++){
    let tempArr = [];
    images.push(tempArr)
    for(let k = 0; k<5; k++){
        preload(k, tempArr, deptList[i].url)   
    }
}


//user event 

//graphic image change
window.addEventListener('load', ()=>{
    console.log(graphicDOM);
    const idx = Math.floor(Math.random()*11)
    mouseEnterChange(idx)
})
console.log(graphicDOM)


//dept mouse over event
$.each($('li.dept'), (j, el)=>{
    console.log(j, el)
    $(el).mouseover(()=>{
        mouseEnterChange(j)

        //dept highlight
        el.style.color = 'white';
        $('li.dept').not(el).css('color', 'black')

        //tooltip event
        const tooltip = $('.tooltip');
        tooltip.css('display', 'block');
        $('.exbInfo').html(`${deptList[j].title}<br>`);

    })
})

//200ms delay
function initialDelay(){
    return new Promise(res => setTimeout(res, 200));
}

async function mouseEnterChange(j){
    //j === index of dept
    root.style.setProperty('--color', deptList[j].color);

    //i === index of graphic
    for (const el of graphicDOM){
        const i = graphicDOM.indexOf(el);
        await initialDelay();
        el.style.backgroundImage = `url(${images[j][i].src})`;
        el.style.top = deptList[j].posT[i];
        el.style.left = deptList[j].posL[i];
    }
}

//about btn click
$('button').click(function(){
    if($('.modal').css('display') === 'none'){
        $('.modal').css('display','block');
    }else{
        $('.modal').css('display','none');        
    }
    this.children[0].classList.toggle('clickedBtn')
})
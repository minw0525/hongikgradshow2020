let root = document.documentElement;



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
        posT :['-25%', '0%', '4%', '10%', '-20%'],
        posL :['-15%', '-8%', '-10%', '20%', '20%'],
        color: '#DACFE2'
    },
    {
        idx: 1, 
        dept : 'sculpt',
        title: '"sculpt exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/sculpt/sculpture_`,
        posT :['-8%', '-2%', '10%', '-8%', '17%'],
        posL :['10%', '8%', '-10%', '-18%', '27%'],
        color: '#FFDFB9'
    },
    {
        idx: 2, 
        dept : 'op',
        title: '"op exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/op/oriental_`,
        posT :['16%', '-8%', '-2%', '-7%', '-16%'],
        posL :['-3%', '29%', '20%', '-21%', '-20%'],
        color: '#CBEFFF'
    },
    {
        idx: 3, 
        dept : 'id',
        title: '"id exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/id/industrial_`,
        posT :['7%', '5%', '-23%', '18%', '-18%'],
        posL :['-5%', '10%', '-3%', '18%', '-2%'],
        color: '#E6E6E6'
    },
    {
        idx: 4, 
        dept : 'vcd',
        title: '"vcd exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/vcd/viscom_`,
        posT :['-2%', '8%', '-19%', '16%', '-10%'],
        posL :['16%', '-15%', '0%', '19%', '-30%'],
        color: '#FFFE48'
    },
    {
        idx: 5, 
        dept : 'c&g',
        title: '"c&g exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/c&g/ceramic_`,
        posT :['-8%', '-28%', '10%', '15%', '7%'],
        posL :['-15%', '15%', '9%', '-14%', '29%'],
        color: '#FFDD80'
    },
    {
        idx: 6, 
        dept : 'paint',
        title: '"paint exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/paint/painting_`,
        posT :['-10%', '10%', '1%', '-28%', '11%'],
        posL :['-15%', '-17%', '20%', '25%', '7%'],
        color: '#8EFFFF'
    },
    {
        idx: 7, 
        dept : 'print',
        title: '"print exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/print/printmaking_`,
        posT :['-4%', '-6%', '2%', '22%', '0%'],
        posL :['6%', '0%', '-1%', '30%', '-18%'],
        color: '#74FFA4'
    },
    {
        idx: 8, 
        dept : 'w&f',
        title: '"w&f exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/w&f/woodwork_`,
        posT :['11%', '-3%', '8%', '-1%', '-3%'],
        posL :['26%', '-4%', '9%', '-15%', '1%'],
        color: '#D6FEA5'
    },
    {
        idx: 9, 
        dept : 'mad',
        title: '"mad exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/mad/metal_`,
        posT :['2%', '-12%', '-8%', '2%', '-4%'],
        posL :['9%', '27%', '-17%', '4%', '0%'],
        color: '#FFFAC3'
    },
    {
        idx: 10, 
        dept : 'art',
        title: '"art exhibition"',
        X : '66px',
        Y : '100px',
        url : `./source/art/artstudies_`,
        posT :['-12%', '6%', '18%', '-4%', '-2%'],
        posL :['0%', '13%', '-26%', '-28%', '28%'],
        color: '#FFACFC'
  }
];


(function() {
    const throttle = function(type, name, obj) {
        obj = obj || window;
        let running = false;
        let func = function() {
            if (running) { 
                return; 
            }
            setTimeout(() => {
                running = true;
                requestAnimationFrame(function() {
                    obj.dispatchEvent(new CustomEvent(name));
                    running = false;
            }, 44);
            /*

            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
                */
            });
        };
        obj.addEventListener(type, func);
    };
    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();


let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;
let theta = Math.atan(clientHeight / clientWidth);

// handle event
['load','optimizedResize'].forEach( evt => 
    window.addEventListener(evt, function() {
        clientWidth = document.documentElement.clientWidth;
        clientHeight = document.documentElement.clientHeight;

        //leg = Math.sqrt(Math.pow(clientHeight/2,2) + Math.pow(clientWidth/2,2)); //빗변

        function degToRad(d){
            return d * Math.PI / 180;
        }

        let theta = Math.atan(clientHeight / clientWidth); //빗변 각도
        let ellipseAngle = Math.floor(theta*85)-35;
        let ellipseAngleRad = degToRad(Math.floor(theta*85)-35);
        let ellipseRadius = (ellipseAngleRad >= theta) ?  Math.sqrt(Math.pow(clientHeight/2,2) + Math.pow(clientHeight / (2 * Math.tan(ellipseAngleRad), 2))) :  Math.sqrt(Math.pow(clientWidth/2,2) + Math.pow(clientWidth * Math.tan(ellipseAngleRad)/ 2, 2)); //빗변
        //console.log(ellipseRadius)


        //console.log(Math.floor(theta*80)-25);//궤도 각도
        //console.log(clientHeight,clientWidth, leg, theta)//높이 너비 빗변 각도

        //let i = clientWidth / 3 + 190;
        //console.log(-i);
        //root.style.setProperty('--offset', -i + "px");
        root.style.setProperty('--offset', -ellipseRadius + 100 + "px");
        //console.log(theta, theta*180/Math.PI, Math.floor(theta*85)-35)
        root.style.setProperty('--orbit', `rotateX(-115deg) rotateY(${ellipseAngle}deg)`);
    
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
    deptActive(idx)
})
console.log(graphicDOM)


//dept mouse over event
$.each($('li.dept'), (j, el)=>{
    console.log(j, el)

    /* 호버 한번만 되게 하기   if(!el.classList.contains('activeDept')){
        }*/
    $(el).mouseenter(()=>{
        if(!el.classList.contains('activeDept')){
            deptActive(j)

            //dept highlight/blur
            el.classList.add('activeDept');
            $('li.dept').not(el).removeClass('activeDept')
            
            //tooltip event
            const tooltip = $('.tooltip');
            tooltip.css('display', 'block');
            $('.exbInfo').html(`${deptList[j].title}<br>`);
    
        }
    })
})

//200ms delay
function initialDelay(){
    return new Promise(res => setTimeout(res, 200));
}

async function deptActive(j){
    //j === index of dept
    root.style.setProperty('--color', deptList[j].color);

    //i === index of graphic
    for (const el of graphicDOM){
        const i = graphicDOM.indexOf(el);
        const $el = $(el);
        $el.css({
            visibility: 'hidden',
            opacity: 0,
            top: deptList[j].posT[i],
            left: deptList[j].posL[i],
            backgroundImage: `url(${images[j][i].src})`
        })
        await initialDelay();
        $el.css({
            visibility: 'visible',
            opacity: 1
        })
        //el.style.visibility = 'visible';
        //el.style.opacity = 1;
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
let root = document.documentElement;
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


const graphicDOM = Array.from($('.graphic > img'))
const deptDOM = Array.from($('li.dept'));
const exbInfo = $('.exbInfo');
const tooltip = $('.tooltip');
const modal = $('.modal')

const deptList = [
    {
        idx: 0, 
        dept : 'tafd',
        title: '미·완 (mi·wan)',
        title2: '',
        link: 'https://hongiktafd.com/',
        X : '66px',
        Y : '100px',
        source : `./source/tafd/textile_`,
                // 21:9 ratio width=100%
        posT :['-25%', '0%', '4%', '10%', '10%'],
        posL :['35%', '42%', '40%', '60%', '50%'],
        color: '#D090FF'

        /*
        16:9 ratio width=100%
        posT :['-25%', '0%', '4%', '10%', '-20%'],
        posL :['-15%', '-8%', '-10%', '20%', '20%'],
         */
        
         /*
         
        9:21 ratio width=100%
        posT :['-35%', '-5%', '9%', 'null', '-20%'],
        posL :['35%', '59%', '60%', 'null', '70%'],
         */
    },
    {
        idx: 1, 
        dept : 'sculpt',
        title: 'Hongik University Sculpture Dept.',
        title2: '',
        link: 'https://hongiksculpture.com/',
        X : '66px',
        Y : '100px',
        source : `./source/sculpt/sculpture_`,
        posT :['-8%', '-2%', '10%', '-8%', '17%'],
        posL :['10%', '8%', '-10%', '-18%', '27%'],
        color: '#D2BEFF'
    },
    {
        idx: 2, 
        dept : 'op',
        title: '2020 홍익 동양화',
        title2: '  Oriental Painting Grad Exhibition 2020',
        link: 'https://hiop-bfa.com/',
        X : '66px',
        Y : '100px',
        source : `./source/op/oriental_`,
        posT :['16%', '-8%', '-2%', '-7%', '-16%'],
        posL :['-3%', '29%', '20%', '-21%', '-20%'],
        color: '#84B4FF'
    },
    {
        idx: 3, 
        dept : 'id',
        title: 'design without',
        title2: '',
        link: 'http://www.hongik-id-degreeshow.com/',
        X : '66px',
        Y : '100px',
        source : `./source/id/industrial_`,
        posT :['7%', '5%', '-23%', '18%', '-18%'],
        posL :['-5%', '10%', '-3%', '18%', '-2%'],
        color: '#FF7C7C'
    },
    {
        idx: 4, 
        dept : 'vcd',
        title: '.zip',
        title2: '',
        link: 'http://www.hivcdgw2020.com/',
        X : '66px',
        Y : '100px',
        source : `./source/vcd/viscom_`,
        posT :['-2%', '8%', '-19%', '16%', '-10%'],
        posL :['16%', '-15%', '0%', '19%', '-30%'],
        color: '#FFFE48'
    },
    {
        idx: 5, 
        dept : 'c&g',
        title: 'mingle–mangle',
        title2: '',
        link: 'http://www.hongikdoyugra.com/',
        X : '66px',
        Y : '100px',
        source : `./source/c&g/ceramic_`,
        posT :['-8%', '-28%', '10%', '15%', '7%'],
        posL :['-15%', '15%', '9%', '-14%', '29%'],
        color: '#FFB33B'
    },
    {
        idx: 6, 
        dept : 'paint',
        title: 'Undefined (    )님이 모두에게:',
        title2: '  from undefined(  ) to everyone:',
        link: 'http://hongikpainting.com/',
        X : '66px',
        Y : '100px',
        source : `./source/paint/painting_`,
        posT :['-10%', '10%', '1%', '-28%', '11%'],
        posL :['-15%', '-17%', '20%', '25%', '7%'],
        color: '#8EFFFF'
    },
    {
        idx: 7, 
        dept : 'print',
        title: '코끼리 프로젝트',
        title2: '  Elephant Project',
        link: 'http://www.hongikprintmaking.com/',
        X : '66px',
        Y : '100px',
        source : `./source/print/printmaking_`,
        posT :['-4%', '-6%', '2%', '22%', '0%'],
        posL :['6%', '0%', '-1%', '30%', '-18%'],
        color: '#74FFA4'
    },
    {
        idx: 8, 
        dept : 'w&f',
        title: 'abocular',
        title2: '',
        link: 'http://www.hongikwfd.com/',
        X : '66px',
        Y : '100px',
        source : `./source/w&f/woodwork_`,
        posT :['11%', '-3%', '8%', '-1%', '-3%'],
        posL :['26%', '-4%', '9%', '-15%', '1%'],
        color: '#95FE17'
    },
    {
        idx: 9, 
        dept : 'mad',
        title: '2020 홍익 금속조형',
        title2: '  HIMAD Grad Show 2020',
        link: 'https://2020himadgradshow.com',
        X : '66px',
        Y : '100px',
        source : `./source/mad/metal_`,
        posT :['2%', '-12%', '-8%', '2%', '-4%'],
        posL :['9%', '27%', '-17%', '4%', '0%'],
        color: '#DBF705'
    },
    {
        idx: 10, 
        dept : 'art',
        title: '클릭, 스크롤, 줌하라!',
        title2: '  Click, Scroll, Zoom!',
        link: 'https://clickscrollzoom.com',
        X : '66px',
        Y : '100px',
        source : `./source/art/artstudies_`,
        posT :['-12%', '6%', '18%', '-4%', '-2%'],
        posL :['0%', '13%', '-26%', '-28%', '28%'],
        color: '#FFACFC'
  }
];


/*
(function() {
    const throttle = function(type, name, obj) {
        obj = obj || window;
        let running = false;
        let func = function() {
            if (running) { 
                console.log('rAF가 여러번 발생하는것을 방지함');
                return; 
            }
            running = true;
            setTimeout(() => {
                requestAnimationFrame(function() {
                    obj.dispatchEvent(new CustomEvent(name));
                    running = false;
                });  
            }, 200);
        obj.addEventListener(type, func);
    };
    // init - you can init any event 
    throttle("resize", "optimizedResize");
})();

*/


let mainWidth, mainHeight, theta, xDeg, yDeg, ellipseAngleRad, ellipseRadius;
// handle event
//['load','optimizedResize'].forEach( evt => 

function setGeoVars(){
    vh = window.innerHeight * 0.01;
    root.style.setProperty('--vh', `${vh}px`);
    mainWidth = $('main').width();
    mainHeight = $('main').height();
    //console.log('width: '+mainWidth, 'height: '+mainHeight) 
    return new Promise(res => res(mainHeight / mainWidth));
}

async function calculate(ratio){
    //ratio = mainHeight / mainWidth;
    //console.log(ratio)
    if (ratio < 0.4) {
        xDeg = 100
        yDeg = 10;
        //console.log (1, ratio, yDeg)
    }else if(ratio >= 0.4 && ratio < 2.33){
        xDeg = -33.46*Math.pow(ratio ,2) + 100.3* ratio + 70;
        yDeg = 33.88 * ratio -4;
        //console.log (2, ratio, yDeg)
    }else{
        xDeg = 115;
        yDeg = 70
        //console.log (3, ratio)       
    }

    theta = Math.atan(mainHeight / mainWidth); //빗변 각도
    ellipseAngleRad = degToRad(yDeg);
    //console.log(ellipseAngleRad, theta)
    ellipseRadius = (ellipseAngleRad >= theta) ?  Math.sqrt(Math.pow(mainHeight/2,2) + Math.pow(mainHeight / (2 * Math.tan(ellipseAngleRad)),2)) -5*vh :  Math.sqrt(Math.pow(mainWidth/2,2) + Math.pow(mainWidth * Math.tan(ellipseAngleRad)/ 2, 2)) -5*vh; //빗변
}
async function setRootCss(){
    //console.log('set css')

    $(root).css({
        '--offset': -ellipseRadius+ "px",
        '--deptWidth': 2* ellipseRadius * Math.PI / 11 + "px",
        '--orbit': `rotateX(${-xDeg}deg) rotateY(${yDeg}deg)`,
    })
}

//debouncing 200ms;
let timeout = false; // holder for timeout id
let delay = 250; // delay after event is "complete" to run callback

['load','resize'].forEach( evt => 
    window.addEventListener(evt, function() {
        clearTimeout(timeout);
        timeout = setTimeout(async()=>{
            await setGeoVars()
            .then(calculate)
            setRootCss()
            //console.log('resizing')
        }, delay);    
    })
);

//preload images
let images = [];
function preload(i, arr, source) {
        arr[i] = new Image();
        arr[i].src = `${source}${i}.png`;
}
for(let i = 0; i<deptList.length; i++){
    let tempArr = [];
    images.push(tempArr)
    for(let k = 0; k<5; k++){
        preload(k, tempArr, deptList[i].source)   
    }
}


//user event 

//graphic image change
window.addEventListener('load', ()=>{
    const idx = Math.floor(Math.random()*11)
    deptActive(idx)
})


//dept mouse over event
$.each($('li.dept'), (j, el)=>{
    $(el).mouseenter((evt)=>{
        if(!el.classList.contains('activeDept')){

            //dept highlight/blur
            el.classList.add('activeDept');
            $('li.dept').not(el).removeClass('activeDept')
            
            //tooltip event
            tooltip.css('display', 'block');
            $('.title1').text(deptList[j].title)
            if (!deptList[j].title2) {$('.title2').css('display','none')}
            else($('.title2').text(`<br class="onmobile">${deptList[j].title2}`).css('display','inline'))
            $('.link').attr('href', deptList[j].link)
            exbInfo.multilingual(['en'])

            deptActive(j)

        }
    })
})

//200ms delay
function initialDelay(){
    return new Promise(res => setTimeout(res, 200));
}

function degToRad(d){
    return d * Math.PI / 180;
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
            //: deptList[j].posT[i],
            //left: deptList[j].posL[i],
        })
        $el.attr('src', images[j][i].src);
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
    if(modal.css('display') === 'none'){
        modal.css('display','block');
    }else{
        modal.css('display','none');        
    }
    this.children[0].classList.toggle('clickedBtn')
})
$('body').click((e)=>{
    if(e.target !== $('button')[0] && e.target !== modal[0]){
        modal.css('display', 'none')
    }        
})
$('.close').click((e)=>{
    if(modal.css('display') === 'block'){
        modal.css('display','none');
        document.getElementById('about').children[0].classList.toggle('clickedBtn')  
        console.log('toggled')            
    }
})

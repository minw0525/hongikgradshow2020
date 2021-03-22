let isMobile = window.innerWidth < 500 ? true : false //0: moble, 1= web
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
        color: '#D090FF',
        pos: [{    // 21:9 ratio width=100%...desktop
//            posT :['-5%', '20%', '24%', '30%', '30%'],
//            posL :['15%', '22%', '20%', '35%', '40%']
            posT :['calc(47*var(--vh) - 30vw)', 'calc(47*var(--vh) - 18.5vw)', 'calc(47*var(--vh) - 15.5vw)', 'calc(47*var(--vh) - 24vw)', 'calc(47*var(--vh) - 14vw)'],
            posL :['15vw', '19vw', '19vw', '35vw', '40vw']
        },{        //16:9 ratio width=100%...pad
            posT :['calc(47*var(--vh) - 45vw)', 'calc(47*var(--vh) - 25.5vw)', 'calc(47*var(--vh) - 25.5vw)', 'calc(47*var(--vh) - 37vw)', 'calc(47*var(--vh) - 17vw)'],
            posL :['2vw', '9vw', '8vw', '29vw', '31vw']
        },{        //9:21 ratio width=100%...mobile
            posT :['calc(50*var(--vh) - 90vw)', 'calc(50*var(--vh) - 50vw)', 'calc(50*var(--vh) - 32vw)', 'calc(50*var(--vh) - 97vw)', 'null'],
            posL :['-7vw;', '-1.5vw', '-4.5vw', '-20vw', 'null']
        }],
        tooltipPos: {top: 'calc(30vh - 2rem)',left: 'calc(72vw - 5rem)'}
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
        pos: [{
            posT :['calc(47*var(--vh) - 20.5vw)', 'calc(47*var(--vh) - 17.5vw)', 'calc(47*var(--vh) - 14vw)', 'calc(47*var(--vh) - 9.5vw)', 'calc(47*var(--vh) - 20.5vw)'],
            posL :['10vw', '33.5vw', '18.5vw', '46.5vw', '32.5vw']
        },{        //16:9 ratio width=100%
            posT :['calc(47*var(--vh) - 29.5vw)', 'calc(47*var(--vh) - 20.5vw)', 'calc(47*var(--vh) - 13vw)', 'calc(47*var(--vh) - 9.5vw)', 'calc(47*var(--vh) - 22.5vw)'],
            posL :['2vw', '28.5vw', '8.5vw', '38.5vw', '24.5vw']
        },{        //9:21 ratio width=100%
            posT :['calc(50*var(--vh) - 70vw)', 'calc(50*var(--vh) - 76vw)', 'calc(50*var(--vh) - 10vw)', 'calc(50*var(--vh) - 30vw)', 'null'],
            posL :['-17vw', '-2vw', '9vw', '-21vw', 'null']
        }],    
        color: '#D2BEFF',
        tooltipPos: {top: 'calc(24vh - 2rem)',left: 'calc(54vw - 5rem)'}
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
        pos: [{
            posT :['calc(47*var(--vh) - 27.5vw)', 'calc(47*var(--vh) - 24.5vw)', 'calc(47*var(--vh) - 21.5vw)', 'calc(47*var(--vh) - 18.5vw)', 'calc(47*var(--vh) - 11.5vw)'],
            posL :['13.5vw', '45.5vw', '39.5vw', '13.5vw', '24.5vw']
        },{        //16:9 ratio width=100%
            posT :['calc(47*var(--vh) - 27.5vw)', 'calc(47*var(--vh) - 24.5vw)', 'calc(47*var(--vh) - 17.5vw)', 'calc(47*var(--vh) - 18.5vw)', 'calc(47*var(--vh) - 8.5vw)'],
            posL :['0.5vw', '37.5vw', '30.5vw', '2.5vw', '17.5vw']
        },{        //9:21 ratio width=100%
            posT :['calc(50*var(--vh) - 101vw)', 'calc(50*var(--vh) - 59vw)', 'calc(50*var(--vh) - 24vw)', 'calc(50*var(--vh) - 36vw)', 'null'],
            posL :['6vw', '-1vw', '-7vw', '12vw', 'null']
        }],
        color: '#84B4FF',
        tooltipPos: {top: 'calc(25vh - 2rem)',left: 'calc(26vw - 5rem)'}
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
        pos: [{
            posT :['calc(47*var(--vh) - 29.5vw)', 'calc(47*var(--vh) - 15.5vw)', 'calc(47*var(--vh) - 30.5vw)', 'calc(47*var(--vh) - 11.5vw)', 'calc(47*var(--vh) - 17.5vw)'],
            posL :['18.5vw', '38.5vw', '27.5vw', '43.5vw', '25.5vw']
        },{        //16:9 ratio width=100%
            posT :['calc(47*var(--vh) - 33.5vw)', 'calc(47*var(--vh) - 15.5vw)', 'calc(47*var(--vh) - 37.5vw)', 'calc(47*var(--vh) - 11.5vw)', 'calc(47*var(--vh) - 17.5vw)'],
            posL :['5.5vw', '26.5vw', '14.5vw', '31.5vw', '11.5vw']
        },{        //9:21 ratio width=100%
            posT :['calc(50*var(--vh) - 75vw)', 'calc(50*var(--vh) - 49vw)', 'calc(50*var(--vh) - 78vw)', 'calc(50*var(--vh) - 10vw)', 'null'],
            posL :['-2vw', '-20vw', '6vw', '2vw', 'null']
        }],
        color: '#FF7C7C',
        tooltipPos: {top: 'calc(75vh - 2rem)',left: 'calc(34vw - 5rem)'}
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
        pos: [{
            posT :['calc(47*var(--vh) - 9.5vw)', 'calc(47*var(--vh) - 19.5vw)', 'calc(47*var(--vh) - 27.5vw)', 'calc(47*var(--vh) - 12.5vw)', 'calc(47*var(--vh) - 19.5vw)'],
            posL :['39.5vw', '8.5vw', '26.5vw', '19.5vw', '33.5vw']
        },{        //16:9 ratio width=100%
            posT :['calc(47*var(--vh) - 9.5vw)', 'calc(47*var(--vh) - 24.5vw)', 'calc(47*var(--vh) - 39.5vw)', 'calc(47*var(--vh) - 12.5vw)', 'calc(47*var(--vh) - 19.5vw)'],
            posL :['32.5vw', '-6.5vw', '12.5vw', '9.5vw', '25.5vw']
        },{        //9:21 ratio width=100%
            posT :['calc(50*var(--vh) - 27vw)', 'calc(50*var(--vh) - 83vw)', 'calc(50*var(--vh) - 13vw)', 'calc(50*var(--vh) - 49vw)', 'null'],
            posL :['-28vw', '-1vw', '-3vw', '2vw', 'null']
        }],
        color: '#FFFE48',
        tooltipPos: {top: 'calc(67vh - 2rem)',left: 'calc(26vw - 5rem)'}
    },
    {
        idx: 5, 
        dept : 'c&g',
        title: 'mingle-mangle',
        title2: '',
        link: 'http://www.hongikdoyugra.com/',
        X : '66px',
        Y : '100px',
        source : `./source/c&g/ceramic_`,
        pos: [{
            posT :['calc(47*var(--vh) - 22.5vw)', 'calc(47*var(--vh) - 29.5vw)', 'calc(47*var(--vh) - 9.5vw)', 'calc(47*var(--vh) - 15.5vw)', 'calc(47*var(--vh) - 16.5vw)'],
            posL :['14.5vw', '37.5vw', '15.5vw', '31.5vw', '47.5vw']
        },{        //16:9 ratio width=100%
            posT :['calc(47*var(--vh) - 33.5vw)', 'calc(47*var(--vh) - 39.5vw)', 'calc(47*var(--vh) - 9.5vw)', 'calc(47*var(--vh) - 20.5vw)', 'calc(47*var(--vh) - 16.5vw)'],
            posL :['0.5vw', '27.5vw', '9.5vw', '25.5vw', '42.5vw']
        },{        //9:21 ratio width=100%
            posT :['calc(50*var(--vh) - 91vw)', 'calc(50*var(--vh) - 59vw)', 'calc(50*var(--vh) - 30vw)', 'calc(50*var(--vh) - 70vw)', 'null'],
            posL :['14vw', '-17vw', '-4vw', '18vw', 'null']
        }],
        color: '#FFB33B',
        tooltipPos: {top: 'calc(30vh - 2rem)',left: 'calc(72vw - 5rem)'}
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
        pos: [{
            posT :['calc(47*var(--vh) - 23.5vw)', 'calc(47*var(--vh) - 14.5vw)', 'calc(47*var(--vh) - 30.5vw)', 'calc(47*var(--vh) - 18.5vw)', 'calc(47*var(--vh) - 14.5vw)'],
            posL :['15.5vw', '14.5vw', '42.5vw', '38.5vw', '28.5vw']
        },{        //16:9 ratio width=100%
            posT :['calc(47*var(--vh) - 33.5vw)', 'calc(47*var(--vh) - 14.5vw)', 'calc(47*var(--vh) - 38.5vw)', 'calc(47*var(--vh) - 18.5vw)', 'calc(47*var(--vh) - 10.5vw)'],
            posL :['3.5vw', '4.5vw', '35.5vw', '30.5vw', '25.5vw']
        },{        //9:21 ratio width=100%
            posT :['calc(50*var(--vh) - 8vw)', 'calc(50*var(--vh) - 30vw)', 'calc(50*var(--vh) - 88vw)', 'calc(50*var(--vh) - 65vw)', 'null'],
            posL :['16vw', '-21vw', '10vw', '-2vw', 'null']
        }],
        color: '#8EFFFF',
        tooltipPos: {top: 'calc(71vh - 2rem)',left: 'calc(17vw - 5rem)'}
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
        pos: [{
            posT :['calc(47*var(--vh) - 8.5vw)', 'calc(47*var(--vh) - 21.5vw)', 'calc(47*var(--vh) - 16.5vw)', 'calc(47*var(--vh) - 17.5vw)', 'calc(47*var(--vh) - 21.5vw)'],
            posL :['51.5vw', '30.5vw', '26.5vw', '13.5vw', '33.5vw']
        },{        //16:9 ratio width=100%
            posT :['calc(47*var(--vh) - 8.5vw)', 'calc(47*var(--vh) - 29.5vw)', 'calc(47*var(--vh) - 16.5vw)', 'calc(47*var(--vh) - 22.5vw)', 'calc(47*var(--vh) - 21.5vw)'],
            posL :['37.5vw', '20.5vw', '18.5vw', '5.5vw', '28.5vw']
        },{        //9:21 ratio width=100%
            posT :['calc(50*var(--vh) - 5vw)', 'calc(50*var(--vh) - 43vw)', 'calc(50*var(--vh) - 91vw)', 'calc(50*var(--vh) - 58vw)', 'null'],
            posL :['-6vw', '-2vw', '3vw', '6vw', 'null']
        }],
        color: '#74FFA4',
        tooltipPos: {top: 'calc(19vh - 2rem)',left: 'calc(52vw - 5rem)'}
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
        pos: [{
            posT :['calc(47*var(--vh) - 19.5vw)', 'calc(47*var(--vh) - 17.5vw)', 'calc(47*var(--vh) - 20.5vw)', 'calc(47*var(--vh) - 16.5vw)', 'calc(47*var(--vh) - 13.5vw)'],
            posL :['24.5vw', '15.5vw', '21.5vw', '34.5vw', '45.5vw']
        },{        //16:9 ratio width=100%
            posT :['calc(47*var(--vh) - 27.5vw)', 'calc(47*var(--vh) - 17.5vw)', 'calc(47*var(--vh) - 24.5vw)', 'calc(47*var(--vh) - 20.5vw)', 'calc(47*var(--vh) - 22.5vw)'],
            posL :['14.5vw', '5.5vw', '14.5vw', '29.5vw', '42.5vw']
        },{        //9:21 ratio width=100%
            posT :['calc(50*var(--vh) - 36vw)', 'calc(50*var(--vh) - 84vw)', 'calc(50*var(--vh) - 24vw)', 'calc(50*var(--vh) - 48vw)', 'null'],
            posL :['-1vw', '-4vw', '-3vw', '12vw', 'null']
        }],
        color: '#95FE17',
        tooltipPos: {top: 'calc(38vh - 2rem)',left: 'calc(82vw - 5rem)'}
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
        pos: [{
            posT :['calc(47*var(--vh) - 18.5vw)', 'calc(47*var(--vh) - 24.5vw)', 'calc(47*var(--vh) - 18.5vw)', 'calc(47*var(--vh) - 24.5vw)', 'calc(47*var(--vh) - 17.5vw)'],
            posL :['34.5vw', '29.5vw', '30.5vw', '14.5vw', '43.5vw']
        },{        //16:9 ratio width=100%
            posT :['calc(47*var(--vh) - 24.5vw)', 'calc(47*var(--vh) - 26.5vw)', 'calc(47*var(--vh) - 18.5vw)', 'calc(47*var(--vh) - 26.5vw)', 'calc(47*var(--vh) - 17.5vw)'],
            posL :['calc(36vw - 8rem -)17.5vw', '16.5vw', '22.5vw', '6.5vw', '33.5vw']
        },{        //9:21 ratio width=100%
            posT :['calc(50*var(--vh) - 91vw)', 'calc(50*var(--vh) - 72vw)', 'calc(50*var(--vh) - 19vw)', 'calc(50*var(--vh) - 46vw)', 'null'],
            posL :['-8vw', '-3vw', '5vw', '0vw', 'null']
        }],
        color: '#DBF705',
        tooltipPos: {top: 'calc(40vh - 2rem)',left: 'calc(15vw - 5rem)'}
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
        pos: [{
            posT :['calc(47*var(--vh) - 19.5vw)', 'calc(47*var(--vh) - 16.5vw)', 'calc(47*var(--vh) - 11.5vw)', 'calc(47*var(--vh) - 17.5vw)', 'calc(47*var(--vh) - 26.5vw)'],
            posL :['44.5vw', '34.5vw', '13.5vw', '7.5vw', '27.5vw']
        },{        //16:9 ratio width=100%
            posT :['calc(47*var(--vh) - 15.5vw)', 'calc(47*var(--vh) - 13.5vw)', 'calc(47*var(--vh) - 11.5vw)', 'calc(47*var(--vh) - 26.5vw)', 'calc(47*var(--vh) - 33.5vw)'],
            posL :['calc(36vw + 19.5vw - 8rem)', 'calc(36vw + 4vw - 8rem)', 'calc(36vw - 9vw - 8rem)', 'calc(36vw - 22vw - 8rem)', 'calc(36vw - 1vw - 8rem)']
        },{        //9:21 ratio width=100%
            posT :['calc(50*var(--vh) - 79vw)', 'calc(50*var(--vh) - 17vw)', 'calc(50*var(--vh) - 54vw)', 'calc(50*var(--vh) - 50vw)', 'null'],
            posL :['9vw', '-3vw', '-3vw', '-22vw', 'null']
        }],
        color: '#FFACFC',
        tooltipPos: {top: 'calc(74vh - 2rem)',left: 'calc(23vw - 5rem)'}
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


let deptIdx, mainWidth, mainHeight, theta, xDeg, yDeg, ellipseAngleRad, ellipseRadius,curPosIdx;
// handle event
//['load','optimizedResize'].forEach( evt => 
function setGeoVars(){
    //console.log('width: '+mainWidth, 'height: '+mainHeight) 
    return new Promise(res => {
        vh = window.innerHeight * 0.01;
        root.style.setProperty('--vh', `${vh}px`);
        mainWidth = $('main').width();
        mainHeight = $('main').height();
        res(mainHeight / mainWidth)
    });
}

function calculate(ratio){
    //ratio = mainHeight / mainWidth;
    //console.log(ratio)
    if (ratio < 0.4) {
        xDeg = 100
        yDeg = 10;
        //console.log (1, ratio, yDeg)
    }else if(ratio >= 0.4 && ratio < 2.3){
        xDeg = -33.46*Math.pow(ratio ,2) + 100.3* ratio + 70;
        yDeg = 33.88 * ratio -4;
        //console.log (2, ratio, yDeg)
    }else{
        xDeg = 145;
        yDeg = 70
        //console.log (3, ratio)       
    }

    theta = Math.atan(mainHeight / mainWidth); //빗변 각도
    ellipseAngleRad = degToRad(yDeg);
    //console.log(ellipseAngleRad, theta)
    ellipseRadius = (ellipseAngleRad >= theta) ?  Math.sqrt(Math.pow(mainHeight/2,2) + Math.pow(mainHeight / (2 * Math.tan(ellipseAngleRad)),2)) -8*vh :  Math.sqrt(Math.pow(mainWidth/2,2) + Math.pow(mainWidth * Math.tan(ellipseAngleRad)/ 2, 2)) -8*vh; //빗변
}
function setRootCss(){
    //console.log('set css')

    $(root).css({
        '--offset': -ellipseRadius+ "px",
        '--deptWidth': 2* ellipseRadius * Math.PI / 11 + "px",
        '--orbit': `rotateX(${-xDeg}deg) rotateY(${yDeg}deg)`,
    })
}

//debouncing 200ms;
let timeout = false; // holder for timeout id
let delay = 100; // delay after event is "complete" to run callback

['DOMContentLoaded','resize'].forEach( evt => 
    window.addEventListener(evt, function() {
        if (evt === 'DOMContentLoaded'){
            deptIdx = Math.floor(Math.random()*11)
        }
        clearTimeout(timeout);
        timeout = setTimeout(async()=>{
            await setGeoVars()
            .then(calculate)
            setRootCss()
            if (window.innerHeight / window.innerWidth < 0.98 && window.innerWidth > 768 ){
                curPosIdx = 0; 
                $('.logo').attr('src','source/hongiklogo.svg')
            }
            else  if (window.innerHeight / window.innerWidth < 1.9 && window.innerWidth > 520){
                curPosIdx = 1; 
                $('.logo').attr('src','source/hongiklogo.svg')
            }
            else{
                curPosIdx = 2; 
                $('.logo').attr('src','source/onlylogo.svg')
            }
            
            //console.log('resizing')
            //console.log(`deptIdx : ${deptIdx}, curPosIdx : ${curPosIdx}`)
            for (const el of graphicDOM){
                const i = graphicDOM.indexOf(el);
                const $el = $(el);
                setImageSrc($el, i, deptIdx, curPosIdx);
                setImagePosition($el, i, deptIdx, curPosIdx);
            }
        }, delay);    
    })
);

//preload images
let images = [];
let downloadQueue =  isMobile ? [[1, 'mobile_', 4], [0, '', 5]] : [[0,'',5],[1, 'mobile_',4]]

function preload(arr, idx,  source) {
    return new Promise((res, rej)=>{
        for(let k = 0; k<idx[2]; k++){
            arr[idx[0]][k] = new Image();
            arr[idx[0]][k].src = `${source}${k}.png`;
        }  
        res('')    
    })
}

(async ()=>{
    for(let i = 0; i<deptList.length; i++){
        let tempArr = [[],[]];
        images.push(tempArr)
        //mobile image  = tempArr[1]
        //web image  = tempArr[0]
        preload(tempArr, downloadQueue[0], deptList[i].source+downloadQueue[0][1])
        .then(()=>{
            preload(tempArr, downloadQueue[1], deptList[i].source+downloadQueue[1][1]) 
        })
    }
})()



//user event 

//graphic image change
window.addEventListener('DOMContentLoaded', async ()=>{
    await initialDelay();
    deptActive(deptIdx)
})


//dept mouse over event
$.each($('li.dept'), (j, el)=>{
    $(el).mouseenter(async (evt)=>{
        //console.log(j)
        //console.log(deptIdx)
    
        if(!el.classList.contains('activeDept') && j !== deptIdx){

            //dept highlight/blur
            el.classList.add('activeDept');
            $('li.dept').not(el).removeClass('activeDept')

            //tooltip event
            tooltip.css('display','block');
            $(root).css({
                '--exbInfoT': deptList[j].tooltipPos.top,
                '--exbInfoL': deptList[j].tooltipPos.left,
            })
            $('.title1').text(deptList[j].title)
            if (!deptList[j].title2) {$('.title2').css('display','none')}
            else($('.title2').html(`<br class="onmobile">${deptList[j].title2}`).css('display','inline'))
            $('.link').attr('href', deptList[j].link)
            exbInfo.multilingual(['num','punct','en'])
            deptIdx = j;
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
            opacity: 0
        })
        await initialDelay();
        setImageSrc($el, i, deptIdx, curPosIdx);
        setImagePosition($el, i, deptIdx, curPosIdx);
        //$el.attr('src', images[deptIdx][i].src);
        $el.css({
            visibility: 'visible',
            opacity: 1
        })
        //el.style.visibility = 'visible';
        //el.style.opacity = 1;
        //console.log('deptActived')
    }
}
function setImageSrc(el, i, deptIdx, curPosIdx){
     //console.log(`i=${i}, deptIdx=${deptIdx}, curPosIdx=${curPosIdx}`)
     //console.log(deptList[deptIdx].mobileImageNum)
    if(curPosIdx > 1){
        if (i>=4) {
            el.attr('src', 'source/placeholder.png');
            return;
        }
        el.attr('src', images[deptIdx][1][i].src);
    }else{
        //console.log(images[deptIdx])
        el.attr('src', images[deptIdx][0][i].src);
    }
    //console.log('image src')
}

function setImagePosition(el, i, deptIdx, curPosIdx){
    el.css({
        top: deptList[deptIdx].pos[curPosIdx].posT[i],
        left: deptList[deptIdx].pos[curPosIdx].posL[i],
    })
    //console.log('image positioned')
}
//about btn click
$('button').click(function(){
    if(modal.css('display') === 'none'){
        modal.css('display','block');
    }else{
        modal.css('display','none');        
    }
})
$('body').click((e)=>{
    if(e.target !== $('button')[0] && e.target !== modal[0] && e.target !== $('.modal-wrapper')[0] && e.target !== $('.close')[0]){
        modal.css('display', 'none')
    }        
})
$('.close>div').click((e)=>{
    if(modal.css('display') === 'block'){
        modal.css('display','none');
        //console.log('toggled');           
    }
})

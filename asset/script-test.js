let isMobile = window.innerWidth < 500 ? true : false //0: moble, 1= web
let root = document.documentElement;
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


const graphicDOM = Array.from($('.graphic > img'))
const deptDOM = Array.from($('li.dept'));
const exbInfo = $('.exbInfo');
const tooltip = $('.tooltip');
const modal = $('.modal')


function topleft(){
    let topArr= [];
    let leftArr = [];
    for (let i = 0; i<5; i++){
        topArr.push(`'${$('.graphic > img')[i].style.top}'`);
        leftArr.push(`'${$('.graphic > img')[i].style.left}'`);
    }
    console.log(`posT: [${topArr}],
posL: [${leftArr}]`)
}

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
            posT: ['calc(47*var(--vh) - 30vw)','calc(47*var(--vh) - 18.5vw)','calc(47*var(--vh) - 15.5vw)','calc(47*var(--vh) - 24vw)','calc(47*var(--vh) - 14vw)'],
            posL: ['16vw','15vw','20vw','38vw','41vw']
        },{        //16:9 ratio width=100%...pad
            posT: ['calc(47*var(--vh) - 50vw)','calc(47*var(--vh) - 25.5vw)','calc(47*var(--vh) - 24.5vw)','calc(47*var(--vh) - 41vw)','calc(47*var(--vh) - 17vw)'],
            posL: ['-8vw','-4vw','0vw','32vw','29vw']
        },{        //9:21 ratio width=100%...mobile
            posT :['calc(50*var(--vh) - 75vw)', 'calc(50*var(--vh) - 50vw)', 'calc(50*var(--vh) - 22vw)', 'calc(50*var(--vh) - 88vw)', 'null'],
            posL :['calc(47vw - 22.5vh)', 'calc(47vw - 22.5vh)', 'calc(47vw - 22.5vh)', 'calc(47vw - 29.5vh)', 'null']
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
            posT: ['calc(47*var(--vh) - 20.5vw)','calc(47*var(--vh) - 20.5vw)','calc(47*var(--vh) - 14vw)','calc(47*var(--vh) - 9.5vw)','calc(47*var(--vh) - 22.5vw)'],
            posL: ['7vw','34.5vw','18.5vw','48.5vw','39.5vw']
        },{        //16:9 ratio width=100%
            posT: ['calc(47*var(--vh) - 31.5vw)','calc(47*var(--vh) - 20.5vw)','calc(47*var(--vh) - 13vw)','calc(47*var(--vh) - 6.5vw)','calc(47*var(--vh) - 22.5vw)'],
            posL: ['-3vw','24.5vw','0.5vw','38.5vw','24.5vw']
        },{        //9:21 ratio width=100%
            posT: ['calc(50*var(--vh) - 49vw)','calc(50*var(--vh) - 64vw)','calc(50*var(--vh) - -4vw)','calc(50*var(--vh) - 29vw)',''],
            posL: ['calc(47vw - 12.5vh)','calc(47vw - 24.5vh)','calc(47vw - 22.5vh)','calc(47vw - 30.5vh)','']
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
            posT: ['calc(47*var(--vh) - 27.5vw)','calc(47*var(--vh) - 24.5vw)','calc(47*var(--vh) - 22.5vw)','calc(47*var(--vh) - 18.5vw)','calc(47*var(--vh) - 9.5vw)'],
            posL: ['7.5vw','47.5vw','39.5vw','8.5vw','22.5vw']
        },{        //16:9 ratio width=100%
            posT: ['calc(47*var(--vh) - 63.5vw)','calc(47*var(--vh) - 39.5vw)','calc(47*var(--vh) - 37.5vw)','calc(47*var(--vh) - 26.5vw)','calc(47*var(--vh) - 7.5vw)'],
            posL: ['-7.5vw','33.5vw','18.5vw','-12.5vw','14.5vw']
        },{        //9:21 ratio width=100%
            posT: ['calc(50*var(--vh) - 101vw)','calc(50*var(--vh) - 59vw)','calc(50*var(--vh) - 23vw)','calc(50*var(--vh) - 31vw)',''],
            posL: ['calc(47vw - 17.5vh)','calc(47vw - 24.5vh)','calc(47vw - 25.5vh)','calc(47vw - 17.5vh)','']
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
            posT: ['calc(47*var(--vh) - 29.5vw)','calc(47*var(--vh) - 17.5vw)','calc(47*var(--vh) - 30.5vw)','calc(47*var(--vh) - 10.5vw)','calc(47*var(--vh) - 17.5vw)'],
            posL: ['15.5vw','38.5vw','22.5vw','46.5vw','22.5vw']
        },{        //16:9 ratio width=100%
            posT: ['calc(47*var(--vh) - 48.5vw)','calc(47*var(--vh) - 16.5vw)','calc(47*var(--vh) - 58.5vw)','calc(47*var(--vh) - 10.5vw)','calc(47*var(--vh) - 26.5vw)'],
            posL: ['3.5vw','23.5vw','10.5vw','31.5vw','8.5vw']
        },{        //9:21 ratio width=100%
            posT: ['calc(50*var(--vh) - 70vw)','calc(50*var(--vh) - 44vw)','calc(50*var(--vh) - 72vw)','calc(50*var(--vh) - 4vw)',''],
            posL: ['calc(47vw - 22.5vh)','calc(47vw - 31.5vh)','calc(47vw - 20.5vh)','calc(47vw - 22.5vh)','']
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
            posT: ['calc(47*var(--vh) - 9.5vw)','calc(47*var(--vh) - 19.5vw)','calc(47*var(--vh) - 29.5vw)','calc(47*var(--vh) - 12.5vw)','calc(47*var(--vh) - 21.5vw)'],
            posL: ['41.5vw','5.5vw','23.5vw','18.5vw','36.5vw']
        },{        //16:9 ratio width=100%
            posT: ['calc(47*var(--vh) - 4.5vw)','calc(47*var(--vh) - 23.5vw)','calc(47*var(--vh) - 53.5vw)','calc(47*var(--vh) - 25.5vw)','calc(47*var(--vh) - 38.5vw)'],
            posL: ['20.5vw','-16.5vw','9.5vw','4.5vw','25.5vw']
        },{        //9:21 ratio width=100%
            posT :['calc(50*var(--vh) - 27vw)', 'calc(50*var(--vh) - 83vw)', 'calc(50*var(--vh) - 13vw)', 'calc(50*var(--vh) - 49vw)', 'null'],
            posL: ['calc(47vw - 35.5vh)','calc(47vw - 22.5vh)','calc(47vw - 22.5vh)','calc(47vw - 19.5vh)','']
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
            posT: ['calc(47*var(--vh) - 24.5vw)','calc(47*var(--vh) - 29.5vw)','calc(47*var(--vh) - 9.5vw)','calc(47*var(--vh) - 15.5vw)','calc(47*var(--vh) - 16.5vw)'],
            posL: ['10.5vw','40.5vw','13.5vw','31.5vw','50vw']
        },{        //16:9 ratio width=100%
            posT: ['calc(47*var(--vh) - 43.5vw)','calc(47*var(--vh) - 56.5vw)','calc(47*var(--vh) - 9.5vw)','calc(47*var(--vh) - 21.5vw)','calc(47*var(--vh) - 8.5vw)'],
            posL: ['-0.5vw','27.5vw','-6.5vw','18.5vw','36.5vw']
        },{        //9:21 ratio width=100%
            posT: ['calc(50*var(--vh) - 90vw)','calc(50*var(--vh) - 64vw)','calc(50*var(--vh) - 23vw)','calc(50*var(--vh) - 70vw)',''],
            posL: ['calc(47vw - 15.5vh)','calc(47vw - 27.5vh)','calc(47vw - 22.5vh)','calc(47vw - 11.5vh)','']
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
            posT: ['calc(47*var(--vh) - 23.5vw)','calc(47*var(--vh) - 13.5vw)','calc(47*var(--vh) - 29.5vw)','calc(47*var(--vh) - 18.5vw)','calc(47*var(--vh) - 10.5vw)'],
            posL: ['15.5vw','10.5vw','50.5vw','40.5vw','30.5vw']
        },{        //16:9 ratio width=100%
            posT: ['calc(47*var(--vh) - 50.5vw)','calc(47*var(--vh) - 14.5vw)','calc(47*var(--vh) - 46.5vw)','calc(47*var(--vh) - 29.5vw)','calc(47*var(--vh) - 5.5vw)'],
            posL: ['-6.5vw','-5.5vw','35.5vw','25.5vw','11.5vw']
        },{        //9:21 ratio width=100%
            posT: ['calc(50*var(--vh) - 1vw)','calc(50*var(--vh) - 30vw)','calc(50*var(--vh) - 86vw)','calc(50*var(--vh) - 50vw)',''],
            posL: ['calc(47vw - 10.5vh)','calc(47vw - 32.5vh)','calc(47vw - 11.5vh)','calc(47vw - 22.5vh)','']
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
            posT: ['calc(47*var(--vh) - 22.5vw)','calc(47*var(--vh) - 21.5vw)','calc(47*var(--vh) - 16.5vw)','calc(47*var(--vh) - 15.5vw)','calc(47*var(--vh) - 21.5vw)'],
            posL: ['54.5vw','30.5vw','26.5vw','11.5vw','33.5vw']
        },{        //16:9 ratio width=100%
            posT: ['calc(47*var(--vh) - 6.5vw)','calc(47*var(--vh) - 34.5vw)','calc(47*var(--vh) - 14.5vw)','calc(47*var(--vh) - 30.5vw)','calc(47*var(--vh) - 29.5vw)'],
            posL: ['30.5vw','12.5vw','-4.5vw','1.5vw','21.5vw']
        },{        //9:21 ratio width=100%
            posT: ['calc(50*var(--vh) - 2vw)','calc(50*var(--vh) - 39vw)','calc(50*var(--vh) - 81vw)','calc(50*var(--vh) - 53vw)',''],
            posL :['calc(47vw - 22.5vh)', 'calc(47vw - 22.5vh)', 'calc(47vw - 22.5vh)', 'calc(47vw - 22.5vh)', 'null']
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
            posT: ['calc(47*var(--vh) - 16.5vw)','calc(47*var(--vh) - 24.5vw)','calc(47*var(--vh) - 18.5vw)','calc(47*var(--vh) - 16.5vw)','calc(47*var(--vh) - 14.5vw)'],
            posL: ['11.5vw','36.5vw','16.5vw','39.5vw','50.5vw']
        },{        //16:9 ratio width=100%
            posT: ['calc(47*var(--vh) - 39.5vw)','calc(47*var(--vh) - 19.5vw)','calc(47*var(--vh) - 26.5vw)','calc(47*var(--vh) - 30.5vw)','calc(47*var(--vh) - 12.5vw)'],
            posL: ['4.5vw','1.5vw','-1.5vw','18.5vw','34.5vw']
        },{        //9:21 ratio width=100%
            posT: ['calc(50*var(--vh) - 36vw)','calc(50*var(--vh) - 75vw)','calc(50*var(--vh) - 22vw)','calc(50*var(--vh) - 46vw)',''],
            posL: ['calc(47vw - 22.5vh)','calc(47vw - 27.5vh)','calc(47vw - 22.5vh)','calc(47vw - 13.5vh)','']
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
            posT: ['calc(47*var(--vh) - 15.5vw)','calc(47*var(--vh) - 22.5vw)','calc(47*var(--vh) - 17.5vw)','calc(47*var(--vh) - 24.5vw)','calc(47*var(--vh) - 20.5vw)'],
            posL: ['31.5vw','28.5vw','26.5vw','7.5vw','44.5vw']
        },{        //16:9 ratio width=100%
            posT: ['calc(47*var(--vh) - 29.5vw)','calc(47*var(--vh) - 26.5vw)','calc(47*var(--vh) - 15.5vw)','calc(47*var(--vh) - 52.5vw)','calc(47*var(--vh) - 20.5vw)'],
            posL: ['-5.5vw','16.5vw','19.5vw','11.5vw','31.5vw']
        },{        //9:21 ratio width=100%
            posT: ['calc(50*var(--vh) - 87vw)','calc(50*var(--vh) - 64vw)','calc(50*var(--vh) - 9vw)','calc(50*var(--vh) - 34vw)',''],
            posL: ['calc(47vw - 29.5vh)','calc(47vw - 23.5vh)','calc(47vw - 17.5vh)','calc(47vw - 21.5vh)','']
        }],
        color: '#DBF705',
        tooltipPos: {top: 'calc(40vh - 2rem)',left: 'calc(15vw - 5rem)'}
    },
    {
        idx: 10, 
        dept : 'art',
        title: '클릭, 스크롤, 줌하라!',
        title2: '  Click, Scroll, Zoom!',
        link: 'http://clickscrollzoom.com',
        X : '66px',
        Y : '100px',
        source : `./source/art/artstudies_`,
        pos: [{
            posT: ['calc(47*var(--vh) - 19.5vw)','calc(47*var(--vh) - 17.5vw)','calc(47*var(--vh) - 10.5vw)','calc(47*var(--vh) - 17.5vw)','calc(47*var(--vh) - 27.5vw)'],
            posL: ['45.5vw','35.5vw','11.5vw','3.5vw','26.5vw']
        },{        //16:9 ratio width=100%
            posT: ['calc(47*var(--vh) - 34.5vw)','calc(47*var(--vh) - 11.5vw)','calc(47*var(--vh) - 22.5vw)','calc(47*var(--vh) - 3.5vw)','calc(47*var(--vh) - 43.5vw)'],
            posL: ['-8.5vw','10.5vw','11.5vw','-12.5vw','26.5vw']
        },{        //9:21 ratio width=100%
            posT: ['calc(50*var(--vh) - 75vw)','calc(50*var(--vh) - 3vw)','calc(50*var(--vh) - 43vw)','calc(50*var(--vh) - 50vw)',''],
            posL: ['calc(47vw - 12.5vh)','calc(47vw - 22.5vh)','calc(47vw - 24.5vh)','calc(47vw - 35.5vh)','']            
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
            }
            else  if (window.innerHeight / window.innerWidth < 1.9 && window.innerWidth > 520){
                curPosIdx = 1; 
            }
            else{
                curPosIdx = 2; 
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

let orbitHovered, tooltipHovered, tempDept;

$('.deptList').on('click mouseenter',(e=>{
    let j = $(e.target).index();
    if (e.target.tagName === 'LI' && tempDept !==e.target){
        tempDept = e.target
  
        let el = e.target
        //        evt.타겟 볼드//나머지 볼드해제         
        el.classList.add('activeDept');
        $('li.dept').not(el).removeClass('activeDept')

        //          툴팁 내용 링크 갈아끼우기               
        $('.title1').text(deptList[j].title)
        if (!deptList[j].title2) {$('.title2').css('display','none')}
        else($('.title2').html(`<br class="onmobile">${deptList[j].title2}`).css('display','inline'))
        $('.link').attr('href', deptList[j].link)
        exbInfo.multilingual(['num','punct','en'])

        //          툴팁 보이게, evt위치 따라 위치지정       
        tooltip.css('display','block');
        let tooltipW =  tooltip.outerWidth();
        let tooltipH =  tooltip.outerHeight();
        $(root).css({
            '--exbInfoL': `${e.pageX + tooltipW < window.innerWidth ? e.pageX - 5 : window.innerWidth - tooltipW - 30}px`,
            '--exbInfoT': `${e.pageY + tooltipH < window.innerHeight ? e.pageY - 5 : window.innerHeight - tooltipH - 30}px`
        })

        //        타겟 인덱스 deptIdx에 대입
    
        if(j !== deptIdx) {
            deptIdx = j;
            deptActive(j)
        }
    }
})
)

$('.orbit').hover(()=>{
    orbitHovered = true;
//    console.log(`orbit ${orbitHovered}`)
},(e)=>{
    e.stopPropagation();
    //console.log(`orbit ${orbitHovered}`)
    orbitHovered = false;
    //console.log(`orbit에서 실행됨${orbitHovered} ${tooltipHovered}`)
    setTimeout(() => {
        turnOffDeptHighlight(orbitHovered, tooltipHovered)        
    }, 16);
})

$('.tooltip').hover(()=>{
    tooltipHovered = true;
    //console.log(`tooltipHovered ${tooltipHovered}`)
},()=>{
    tooltipHovered = false;
    //console.log(`tooltipHovered ${tooltipHovered}`)
    //console.log(`tooltip에서 실행됨${orbitHovered} ${tooltipHovered}`)
    setTimeout(() => {
        turnOffDeptHighlight(orbitHovered, tooltipHovered)        
    }, 16);
})

function turnOffDeptHighlight(a, b){
    if(!a && !b){
        $('.deptList').find('li.activeDept').removeClass('activeDept')
        tooltip.css('display','none');
        //console.log('highlight off')
        tempDept = null;
    }
}

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
   $(`#about span`).toggleClass('clickedBtn')
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

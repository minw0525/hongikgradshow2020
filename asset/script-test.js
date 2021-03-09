let root = document.documentElement;



const graphicDOM = Array.from($('.graphic > div'))
const deptDOM = Array.from($('li.dept'));

const deptList = [
    {
        idx: 0, 
        dept : 'tafd',
        title: '미·완 (mi·wan)',
        link: 'https://hongiktafd.com/',
        X : '66px',
        Y : '100px',
        source : `./source/tafd/textile_`,
        posT :['-25%', '0%', '4%', '10%', '-20%'],
        posL :['-15%', '-8%', '-10%', '20%', '20%'],
        color: '#DACFE2'
    },
    {
        idx: 1, 
        dept : 'sculpt',
        title: 'Hongik University Sculpture Dept.',
        link: 'https://hongiksculpture.com/',
        X : '66px',
        Y : '100px',
        source : `./source/sculpt/sculpture_`,
        posT :['-8%', '-2%', '10%', '-8%', '17%'],
        posL :['10%', '8%', '-10%', '-18%', '27%'],
        color: '#FFDFB9'
    },
    {
        idx: 2, 
        dept : 'op',
        title: '2020 홍익 동양화',
        link: 'https://hiop-bfa.com/',
        X : '66px',
        Y : '100px',
        source : `./source/op/oriental_`,
        posT :['16%', '-8%', '-2%', '-7%', '-16%'],
        posL :['-3%', '29%', '20%', '-21%', '-20%'],
        color: '#CBEFFF'
    },
    {
        idx: 3, 
        dept : 'id',
        title: 'design without',
        link: 'http://www.hongik-id-degreeshow.com/',
        X : '66px',
        Y : '100px',
        source : `./source/id/industrial_`,
        posT :['7%', '5%', '-23%', '18%', '-18%'],
        posL :['-5%', '10%', '-3%', '18%', '-2%'],
        color: '#E6E6E6'
    },
    {
        idx: 4, 
        dept : 'vcd',
        title: '.zip',
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
        link: 'http://www.hongikdoyugra.com/',
        X : '66px',
        Y : '100px',
        source : `./source/c&g/ceramic_`,
        posT :['-8%', '-28%', '10%', '15%', '7%'],
        posL :['-15%', '15%', '9%', '-14%', '29%'],
        color: '#FFDD80'
    },
    {
        idx: 6, 
        dept : 'paint',
        title: 'Undefined (    )님이 모두에게:',
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
        link: 'http://www.hongikwfd.com/',
        X : '66px',
        Y : '100px',
        source : `./source/w&f/woodwork_`,
        posT :['11%', '-3%', '8%', '-1%', '-3%'],
        posL :['26%', '-4%', '9%', '-15%', '1%'],
        color: '#D6FEA5'
    },
    {
        idx: 9, 
        dept : 'mad',
        title: '2020 홍익 금속조형',
        link: 'https://2020himadgradshow.com',
        X : '66px',
        Y : '100px',
        source : `./source/mad/metal_`,
        posT :['2%', '-12%', '-8%', '2%', '-4%'],
        posL :['9%', '27%', '-17%', '4%', '0%'],
        color: '#FFFAC3'
    },
    {
        idx: 10, 
        dept : 'art',
        title: 'Click, Scroll, Zoom!',
        link: 'https://clickscrollzoom.com',
        X : '66px',
        Y : '100px',
        source : `./source/art/artstudies_`,
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
                console.log('rAF가 여러번 발생하는것을 방지함');
                return; 
            }
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


let mainWidth, mainHeight, theta, ratio, xDeg, yDeg, ellipseAngleRad, ellipseRadius;
// handle event
['load','optimizedResize'].forEach( evt => 
    window.addEventListener(evt, function() {
        mainWidth = $('main').width();
        mainHeight = $('main').height();;
        ratio = mainHeight / mainWidth;
        console.log(ratio)
        if (ratio < 0.4285) {
            xDeg = 100
            yDeg = 10;
            console.log (1, yDeg)
        }else if(ratio >= 0.4285 && ratio < 2.33){
            xDeg = -33.46*Math.pow(ratio ,2) + 100.3* ratio + 70;
            yDeg = 33.88 * ratio -4;
            console.log (2, yDeg)
        }else{
            xDeg = 115;
            yDeg = 70
            console.log (3, ratio)       
        }

        theta = Math.atan(mainHeight / mainWidth); //빗변 각도
        ellipseAngleRad = degToRad(yDeg);
        console.log(ellipseAngleRad, theta)
        ellipseRadius = (ellipseAngleRad >= theta) ?  Math.sqrt(Math.pow(mainHeight/2,2) + Math.pow(mainHeight / (2 * Math.tan(ellipseAngleRad)),2)) :  Math.sqrt(Math.pow(mainWidth/2,2) + Math.pow(mainWidth * Math.tan(ellipseAngleRad)/ 2, 2)); //빗변

        root.style.setProperty('--offset', -ellipseRadius+50+ "px");
        root.style.setProperty('--orbit', `rotateX(${-xDeg}deg) rotateY(${yDeg}deg)`);
    
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
    console.log(graphicDOM);
    const idx = Math.floor(Math.random()*11)
    deptActive(idx)
})
console.log(graphicDOM)


//dept mouse over event
$.each($('li.dept'), (j, el)=>{
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
            $('.link').attr('href', deptList[j].link)
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
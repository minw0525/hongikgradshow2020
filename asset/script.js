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
        url : `url(./source/tafd/textile_`,
        pos :['translate(-23%, -21%)', 'translate(-15%, 9%)', 'translate(16%, 6%);', 'translate(-19%, 8%)', 'translate(0%, 9%)']
    },
    {
        idx: 1, 
        dept : 'sculpt',
        title: '"sculpt exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/sculpt/sculpture_`,
        pos :['translate(-23%, -21%)', 'translate(-15%, 9%)', 'translate(16%, 6%);', 'translate(-19%, 8%)', 'translate(0%, 9%)']
    },
    {
        idx: 2, 
        dept : 'op',
        title: '"op exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/op/oriental_`,
        pos :['translate(-23%, -21%)', 'translate(-15%, 9%)', 'translate(16%, 6%);', 'translate(-19%, 8%)', 'translate(0%, 9%)']
    },
    {
        idx: 3, 
        dept : 'id',
        title: '"id exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/id/industrial_`,
        pos :['translate(-23%, -21%)', 'translate(-15%, 9%)', 'translate(16%, 6%);', 'translate(-19%, 8%)', 'translate(0%, 9%)']
    },
    {
        idx: 4, 
        dept : 'vcd',
        title: '"vcd exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/vcd/viscom_`,
        pos :['translate(-23%, -21%)', 'translate(-15%, 9%)', 'translate(16%, 6%);', 'translate(-19%, 8%)', 'translate(0%, 9%)']
    },
    {
        idx: 5, 
        dept : 'c&g',
        title: '"c&g exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/c&g/ceramic_`,
        pos :['translate(-23%, -21%)', 'translate(-15%, 9%)', 'translate(16%, 6%);', 'translate(-19%, 8%)', 'translate(0%, 9%)']
    },
    {
        idx: 6, 
        dept : 'paint',
        title: '"paint exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/paint/painting_`,
        pos :['translate(-23%, -21%)', 'translate(-15%, 9%)', 'translate(16%, 6%);', 'translate(-19%, 8%)', 'translate(0%, 9%)']
    },
    {
        idx: 7, 
        dept : 'print',
        title: '"print exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/print/printmaking_`,
        pos :['translate(-23%, -21%)', 'translate(-15%, 9%)', 'translate(16%, 6%);', 'translate(-19%, 8%)', 'translate(0%, 9%)']
    },
    {
        idx: 8, 
        dept : 'w&f',
        title: '"w&f exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/w&f/woodwork_`,
        pos :['translate(-23%, -21%)', 'translate(-15%, 9%)', 'translate(16%, 6%);', 'translate(-19%, 8%)', 'translate(0%, 9%)']
    },
    {
        idx: 9, 
        dept : 'mad',
        title: '"mad exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/mad/metal_`,
        pos :['translate(-23%, -21%)', 'translate(-15%, 9%)', 'translate(16%, 6%);', 'translate(-19%, 8%)', 'translate(0%, 9%)']
    },
    {
        idx: 10, 
        dept : 'art',
        title: '"art exhibition"',
        X : '66px',
        Y : '100px',
        url : `url(./source/art/artstudies_`,
        pos :['translate(-23%, -21%)', 'translate(-15%, 9%)', 'translate(16%, 6%);', 'translate(-19%, 8%)', 'translate(0%, 9%)']
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
    return new Promise(res => setTimeout(res, 200));
}

const graphicDOM = Array.from($('.graphic > div'))
window.addEventListener('load', async ()=>{
    console.log(graphicDOM);
    const idx = Math.floor(Math.random()*11)
    for (const el of graphicDOM){
        const i = graphicDOM.indexOf(el);
        await initialDelay();
        el.style.backgroundImage = `${deptList[idx].url}${i}.png)`
        console.log(deptList[idx])
        el.style.transform = deptList[idx].pos[i]
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
        const tooltip = $('.tooltip');
        tooltip.css('display', 'block');
        $('.exbInfo').html(`${deptList[j].title}<br>`);

        //dept highlight
        el.style.color = 'white';
        $('li.dept').not(el).css('color', 'black')
        //graphic event
        for (const el of graphicDOM){
            const i = graphicDOM.indexOf(el);
            await initialDelay();
            el.style.backgroundImage = `${deptList[j].url}${i}.png`
            el.style.transform = deptList[j].pos[i]
        }
        
    })
})
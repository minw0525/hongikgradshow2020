let root = document.documentElement;

let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;
let theta = Math.atan(clientHeight / clientWidth);


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

window.addEventListener('load', async ()=>{
    const list = Array.from($('.graphic > div'))
    console.log(list);
    for (const el of list){
        const i = list.indexOf(el)+1;
        await initialDelay();
        el.style.backgroundImage = `url(./source/tafd${i}.png)`
        console.log(i)
    }
})

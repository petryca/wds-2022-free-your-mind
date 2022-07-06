(() => {


    const hero = Snap('#hero');
    let i = 0;

    function drawCircle() {

        i = i + 15;

        let hue = i % 360;
        let color = Snap.hsl(hue, 100, 40);


        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const radius = Math.floor(Math.sqrt((vw ** 2) + (vh ** 2)) / 2) + 150;


        const circle = hero.circle('50%', '50%', 50);

        circle.attr({
            fill: color        
        });

        circle.animate({ r: radius }, 6000, function () {
            this.remove();
        });

    } 

    setInterval(drawCircle, 1000);



})();
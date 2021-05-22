 function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor, repeat) {
     let paths = document.querySelectorAll("path");
     let mode = repeat ? 'infinite' : 'forwards'
     for (let i = 0; i < paths.length; i++) {
         const path = paths[i];
         const length = path.getTotalLength();
         path.style["stroke-dashoffset"] = `${length}px`;
         path.style["stroke-dasharray"] = `${length}px`;
         path.style["stroke-width"] = `${strokeWidth}px`;
         path.style["stroke"] = `${strokeColor}`;
         path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
         path.style["animation-delay"] = `${i * delay}s`;
     }
 }
 setTextAnimation(0.1, 0.5, 2, 'linear', '#ffffff', false);

 $(document).ready(function () {

    new fullpage('#fullpage', {
        anchors: ['page1', 'page2', 'page3', 'page4'],
        navigationTooltips: ['fullPage', 'Open', 'Easy', 'Touch'],
        css3: true,
        scrollingSpeed: 1000,
        navigation: false,
        slidesNavigation: true,
        responsiveHeight: 330,
        dragAndMove: true,
        dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
        controlArrows: false,
        fadingEffect: true,
		fadingEffectKey: 'YWx2YXJvdHJpZ28uY29tXzAzN1ptRmthVzVuUldabVpXTjBiNXo='
    });
    

 });
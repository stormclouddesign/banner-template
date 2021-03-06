var easeIn = Power1.easeIn;
var easeOut = Power1.easeOut;
var timeline = new TimelineLite({onComplete: onComplete});
        timeline.add('frame1').add('start')
            .to('.logo', 0, {opacity:1}, 'start')
        timeline.add('frame2')
            .to('.masks .top', 1, {width:86}).add('frame2-mask')
            .to('.masks .left', 1, {width:83}, "frame2-mask-=0.1")
        timeline.add('frame3')
            .to('.copy1', 1.5, {opacity:1, ease:easeOut}, 'frame3-=0.4')
            .addDelay(3, 'frame4')
        timeline.add('frame4')
            .to('.copy1', 1, {opacity:0, ease:easeOut})
            .to('.copy2', 1, {opacity:1, ease:easeOut})
            .addDelay(1, 'frame4-cta')
            .to('.cta', 1, {opacity:1, ease:easeOut}).add('frame4-cta')
        timeline.add('frame5').add('end')
var easeIn = Power1.easeIn;
var easeOut = Power1.easeOut;
var timeline = new TimelineLite({onComplete: onComplete});
        timeline.add('frame1')
            .to('.copy1,.copy2,.copy3', 0, {opacity: 1})
            .to('.masks .m1', 0.8, {height:45})
            .to('.masks .m2', 0.8, {height:46})
            .to('.masks .m3', 0.8, {left:212})
            .to('.copy2', 0.8, {left:"+=288"})
            .addDelay(2.5, 'frame2')
        timeline.add('frame2')
            .to('.copy2', 0.8, {left:"-=288"}).add('frame2-backgrounds')
            .to('.copy3', 0.8, {left:"+=322"}, 'frame2-backgrounds')
            .to('.backgrounds', 0.65, {left:-33}, 'frame2-backgrounds')
            .addDelay(2, 'frame3')
        timeline.add('frame3')
            .to('.cta', 0.8, {opacity:1})
        timeline.add('frame4')
var easeIn = Power1.easeIn;
var easeOut = Power1.easeOut;
var timeline = new TimelineLite({onComplete: onComplete});
        timeline.add('frame1')
            .to('.masks .m1', 0.8, {width:301,left:0}, 'start')
            .to('.masks .m2', 0.8, {height:183}, 'start').add('frame1-m2')
            .to('.masks .m4', 0.8, {width:174,left:127}, 'frame1-m2').add('frame1-m4')
            .to('.masks .m3, .masks .m5', 0.85, {width:128,left:0}, 'frame1-m4')
            .to('.copy2', 0.8, {left:4})
            .addDelay(2, 'frame2')
        timeline.add('f2-transition')
            .to('.background-container', 0, {height:"-=20"})
            .to('.mask.m5', 0, {top:233})
            .to('.masks .m2', 0, {top:0, height:{height}}, 'f2-transition')
            .to('.masks .m1, .masks .m4', 1, {height:0}, 'f2-transition')
            .to('.masks .m3', 0, {width:{width}}, 'f2-transition')
            .to('.masks .m3', 1, {top:118, height: 79}, 'f2-transition')
            .to('.mask.m5', 1, {top:200}, 'f2-transition')
            .to('.copy2', 0.8, {top: -60}, 'f2-transition')
            .to('.background-container', 1, {left:0, width:275, height:128, top:-10}, 'f2-transition')
            .to('.background-container img', 1, {top:-71}, 'f2-transition')
            .to('.copy1,.mask.m5,.masks', 0, {opacity: 0})
        timeline.add('frame2')
            .to('.copy3', 0, {opacity:1})
            .to('.background-container,.logo', 0.8, {opacity:1}, 'frame2')
            .to('.background3', 0, {opacity:1})
            .to('.background3', 0.8, {top:0})
            .addDelay(0.5, 'cta')
            .to('.cta', 0.8, {opacity:1}).add('cta')
        timeline.add('frame3')
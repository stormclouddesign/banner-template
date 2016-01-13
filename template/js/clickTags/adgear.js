function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function getAdGearClickUrl(name) {
    return getParameterByName("agclick_" + name) || getParameterByName(name);
}
function clickThrough(name) {
    var click_url = clickTag;
    if (name) {
        click_url = getAdGearClickUrl(name);
    }
    if (click_url !== null) {
        window.open(click_url, "_blank");
        if (oobClickTrack !== null) {
            var img = new Image();
            img.src = oobClickTrack;
        }
    }
}
var clickTag = getAdGearClickUrl("clickTAG") || getAdGearClickUrl("clickTag") || getAdGearClickUrl("clicktag");
var oobClickTrack = getAdGearClickUrl("oobclicktrack");
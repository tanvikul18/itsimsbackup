

$(document).on("mouseover", ".qheight", function (event) {
    $(this).css({
        "font-weight": "bold"
    });
    $(this).children(".question_icon").children("span").css({
        "background-color": "#003058",
        "color": "#F9FF00"
    });

});
$(document).on("mouseout", ".qheight", function (event) {
    $(this).css({
        "font-weight": "normal"
    });
    $(this).children(".question_icon").children("span").css({
        "background-color": "#007AA2",
        "color": "#FFF"
    });
});
$(document).on("click", ".qheight", function (event) {
    $(".qheight").removeClass("optionselected");

    $(this).addClass("optionselected");

});
var hotspotclicked = false;;
var hotspot;
$(document).on("click", ".divHotSpot", function (event) {
    debugger;
    var currentPageData = _Navigator.GetCurrentPage();
    var pageData = _PData[currentPageData.pageId];

    if (pageData != undefined) {

        var hotspotdata = pageData.ImageHotSpots;
    }
    var htmlForDivHotspotImage = "";
   
    //if (pageData.ImageHotSpots != undefined) {
    //    for (var i = 0; i < hotspotdata.Hotspots.length; i++) {
    if (_PData[currentPageData.pageId].ImageHotSpots["Hotspots"][0].eventname == 'noclick')
        return;
   else if (hotspotdata.Hotspots.length > 1) {
        if (_PData[currentPageData.pageId].ImageHotSpots["Hotspots"][1].eventname != 'undefined') {
            if (_PData[currentPageData.pageId].ImageHotSpots["Hotspots"][1].eventname == 'noclick') {
                return;
            }
            else {
                event.preventDefault();
                $(this).k_disable()
                if (hotspotclicked || _Navigator.IsAnswered())
                    return;
                $(this).addClass("hotspotclicked")
                hotspot = $(this);
                setTimeout(function () {
                    hotspotclicked = false;
                    _ModuleCommon.HotspotClick(hotspot, event);

                }, 400)
            }
        }
    }
    
        else {
            event.preventDefault();
            $(this).k_disable()
            if (hotspotclicked || _Navigator.IsAnswered())
                return;
            $(this).addClass("hotspotclicked")
            hotspot = $(this);
            setTimeout(function () {
                hotspotclicked = false;
                _ModuleCommon.HotspotClick(hotspot, event);

            }, 400)
        }
         //   }
       // }
});



$(document).on("dblclick", ".divHotSpotDbl", function (event) {
    debugger;

    event.preventDefault();
    
    $(this).k_disable()
    if (hotspotclicked || _Navigator.IsAnswered())
        return;
    $(this).addClass("hotspotclicked")
    hotspot = $(this);
    setTimeout(function () {
        hotspotclicked = false;
        _ModuleCommon.HotspotClick(hotspot, event);
    }, 400);    
});



$(document).on("click", ".hintlink", function (event) {
    debugger;
    if ($(this).hasClass("expanded")) {
        $(".hintlink").removeClass("expanded")
        $(".hintlink").attr("aria-expanded", "false")
        $(".hintcontainer").slideUp(100);
    }
    else {
        $(".hintcontainer").slideDown(100, function () {
            $(".hintlink").addClass("expanded");
            $(".hintlink").attr("aria-expanded", "true");
        });
    }

});
$(document).on("click", ".closehintlink", function (event) {

    $(".hintlink").removeClass("expanded")
    $(".hintlink").attr("aria-expanded", "false")
    $(".hintcontainer").slideUp(100);


});


$(document).on("keydown", "input.EmbededElement", function (event) {
    debugger;
    if ($(this).attr("disabled") || $(this).hasClass("disabled")) {
        event.preventDefault();
        return;
    }
    if (window.event) {
        key = window.event.keyCode;
    } else if (event) {
        key = event.keyCode;
    }
    if (key == 13) {
        _ModuleCommon.InputEnter($(this));
    }
});

$(document).on("keypress", "#cropSliderContainer .cropSliderValue", function (event) {
    debugger;
    if ($(this).attr("disabled") || $(this).hasClass("disabled")) {
        event.preventDefault();
        return;
    }
    if (window.event) {
        key = window.event.keyCode;
    } else if (event) {
        key = event.keyCode;
    }
    if (key == 13) {
        _ModuleCommon.CropEnter();
    }
});


$(document).on("keyup",'#cropSliderContainer .cropSliderValue', function () {
    cropSlideValue = Number($(this).val());
    $("#cropSliderContainerResize").css("width", cropSlideValue + "px");
    console.log("in crop keyup : " + cropSlideValue);
    $('.cropSliderValue').removeAttr("value");    
    $('.cropSliderValue').attr("value", cropSlideValue);
    cust_ShowCropSliderValue(cropSlideValue);
});

$(document).on("change", '#cropSliderContainer .cropSliderValue', function () {
    debugger;
    cropSlideValue = Number($(this).val());
    $("#cropSliderContainerResize").css("width", cropSlideValue + "px");
    console.log("in video event : " + cropSlideValue);
    var ariaL = Math.round((cropSlideValue / 354) * 100);
    $('.cropSliderValue').attr({
        "aria-label": ariaL + "%"
    });
    $('.cropSliderValue').attr("value", cropSlideValue);
    cust_ShowCropSliderValue(cropSlideValue);
});
function cust_ShowCropSliderValue(_videoSlideValue) {
    $("#cropSliderContainerResize").css("width", _videoSlideValue + "px");
}


$(document).on('keyup','#videoSliderContainer .videoSliderValue', function () {
    videoSlideValue = Number($(this).val());
   
    var hours = Math.floor(videoSlideValue / 60);
    var minutes = videoSlideValue - (hours * 60);
    $('.videoSliderValue').removeAttr("value");
    if ((hours + "").length == 1) hours = '0' + hours;
    if ((minutes + "").length == 1) minutes = '0' + minutes;

    $("#updateTimer").find("p").html("00:" + hours + "." + minutes);
   
    $('.videoSliderValue').attr("value", videoSlideValue);
    cust_ShowVideoSliderValue(videoSlideValue);
});

$(document).on('change', '#videoSliderContainer .videoSliderValue', function () {
    $("#divHotspots0_1").show();
    $("#divHotspots0_1").removeClass("hotspotclicked disabled")
    videoSlideValue = Number($(this).val());
   
    var hours = Math.floor(videoSlideValue / 60);
    var minutes = videoSlideValue - (hours * 60);
    $('.videoSliderValue').removeAttr("value");
    if ((hours + "").length == 1) hours = '0' + hours;
    if ((minutes + "").length == 1) minutes = '0' + minutes;

    $("#updateTimer").find("p").html("00:" + hours + "." + minutes);
    
    $('.videoSliderValue').attr("value", videoSlideValue);
    cust_ShowVideoSliderValue(videoSlideValue);
});

function cust_ShowVideoSliderValue(_videoSlideValue) {
    var hours = Math.floor(_videoSlideValue / 60);
    var minutes = _videoSlideValue - (hours * 60);
    $('.videoSliderValue').removeAttr("value");
    if ((hours + "").length == 1) hours = '0' + hours;
    if ((minutes + "").length == 1) minutes = '0' + minutes;

    $("#updateTimer").find("p").html("00:" + hours + "." + minutes);
    $('.videoSliderValue').attr("value", _videoSlideValue);
}
function myFunction() {
    _ModuleCommon.HotspotClick(hotspot, event);
}
$(window).resize(function () {
    _ModuleCommon.OrientationChange();
});

$(window).resize(function () {


});

$(document).on('click', ".activityimg", function (event) {
    debugger;
    if ($(".divHotSpot").hasClass("disabled"))
        return;
    _ModuleCommon.AddEditPropertiesClick(event);
});



$(document).on('click', ".start-btn", function (event) {
    _Navigator.Next();
});
$(document).on('click', ".reviewsubmit", function (event) {
    _Navigator.Next();
});
$(document).on('mouseover', ".hintlink", function (event) {
    $(".hintlink .hintlinkspan").css({"color":"#b22222","border-bottom":"1px solid #b22222"})
    $(this).find("path").css({"fill":"#b22222"})
});

$(document).on('mouseout', ".hintlink", function (event) {
 $(".hintlink .hintlinkspan").css({"color":"#047a9c","border-bottom":"1px solid #047a9c"})
 $(this).find("path").css({"fill":"#047a9c"}) 
});

$(document).on("change", ".assessmentradio", function (event) {
    $(".assessmentSubmit").k_enable();  
  
});
$(document).on("click", ".assessmentSubmit", function (event) {
    gRecordData.Questions[currentQuestionIndex].UserSelectedOptionId = $("input[type='radio']:checked").attr("id") ;
    gRecordData.Questions[currentQuestionIndex].IsAnswered = true;
    _Navigator.Next();
});
$(document).on("click", "#linkprevious", function (event) {
    if ($(this).k_IsDisabled()) return;
    _Navigator.Prev();
});
$(document).on("click", "#linknext", function (event) {
    if ($(this).k_IsDisabled()) return;    
    _Navigator.Next();
});
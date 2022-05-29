(()=>{function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.template=$("#product_attribute_template").html(),this.totalItem=0,this.deletedItems=[],this.handleChooseImage(),this.handleForm(),this.initSpectrum()}var r,a;return r=t,(a=[{key:"handleChooseImage",value:function(){new RvMediaStandAlone(".image-box .btn-images",{filter:"image",view_in:"all_media",onSelectFiles:function(e,t){var r=_.first(e);r&&(t.closest(".image-box").find(".image-data").val(r.url),t.closest(".image-box").find(".preview_image").attr("src",r.thumb).show())}})}},{key:"initSpectrum",value:function(){$(".input-color-picker").each((function(e,t){var r=$(t);r.spectrum({allowEmpty:!0,color:r.val()||"rgb(51, 51, 51)",showInput:!0,containerClassName:"full-spectrum",showInitial:!0,showSelectionPalette:!1,showPalette:!0,showAlpha:!0,preferredFormat:"hex",showButtons:!1,palette:[["rgb(0, 0, 0)","rgb(102, 102, 102)","rgb(183, 183, 183)","rgb(217, 217, 217)","rgb(239, 239, 239)","rgb(243, 243, 243)","rgb(255, 255, 255)","rgb(230, 184, 175)","rgb(244, 204, 204)","rgb(252, 229, 205)","rgb(255, 242, 204)","rgb(217, 234, 211)","rgb(208, 224, 227)","rgb(201, 218, 248)","rgb(207, 226, 243)","rgb(217, 210, 233)","rgb(234, 209, 220)","rgb(221, 126, 107)","rgb(234, 153, 153)","rgb(249, 203, 156)","rgb(255, 229, 153)","rgb(182, 215, 168)","rgb(162, 196, 201)","rgb(164, 194, 244)","rgb(159, 197, 232)","rgb(180, 167, 214)","rgb(213, 166, 189)","rgb(204, 65, 37)","rgb(224, 102, 102)","rgb(246, 178, 107)","rgb(255, 217, 102)","rgb(147, 196, 125)","rgb(118, 165, 175)","rgb(109, 158, 235)","rgb(111, 168, 220)","rgb(142, 124, 195)","rgb(194, 123, 160)","rgb(166, 28, 0)","rgb(204, 0, 0)","rgb(230, 145, 56)","rgb(241, 194, 50)","rgb(106, 168, 79)","rgb(69, 129, 142)","rgb(60, 120, 216)","rgb(61, 133, 198)","rgb(103, 78, 167)","rgb(166, 77, 121)","rgb(133, 32, 12)","rgb(153, 0, 0)","rgb(180, 95, 6)","rgb(191, 144, 0)","rgb(56, 118, 29)","rgb(19, 79, 92)","rgb(17, 85, 204)","rgb(11, 83, 148)","rgb(53, 28, 117)","rgb(116, 27, 71)","rgb(91, 15, 0)","rgb(102, 0, 0)","rgb(120, 63, 4)","rgb(127, 96, 0)","rgb(39, 78, 19)","rgb(12, 52, 61)","rgb(28, 69, 135)","rgb(7, 55, 99)","rgb(32, 18, 77)","rgb(76, 17, 48)","rgb(152, 0, 0)","rgb(255, 0, 0)","rgb(255, 153, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(74, 134, 232)","rgb(0, 0, 255)","rgb(153, 0, 255)","rgb(255, 0, 255)"]],change:function(e){r.val(e.toRgbString())}})}))}},{key:"addNewAttribute",value:function(){var e=this,t=e.template.replace(/__id__/gi,0).replace(/__position__/gi,0).replace(/__checked__/gi,0==e.totalItem?"checked":"").replace(/__title__/gi,"").replace(/__slug__/gi,"").replace(/__color__/gi,"").replace(/__image__/gi,"");$(".swatches-container .swatches-list").append(t),e.totalItem++}},{key:"exportData",value:function(){var e=[];return $(".swatches-container .swatches-list li").each((function(t,r){var a=$(r);e.push({id:a.data("id"),is_default:a.find("input[type=radio]").is(":checked")?1:0,order:a.index(),title:a.find(".swatch-title input").val(),slug:a.find(".swatch-slug input").val(),color:a.find(".swatch-value input").val(),image:a.find(".swatch-image input").val()})})),e}},{key:"handleForm",value:function(){var e=this;$(".swatches-container .swatches-list").sortable(),$("body").on("submit",".update-attribute-set-form",(function(){var t=e.exportData();$("#attributes").val(JSON.stringify(t)),$("#deleted_attributes").val(JSON.stringify(e.deletedItems))})).on("click",".js-add-new-attribute",(function(t){t.preventDefault(),e.addNewAttribute(),e.initSpectrum()})).on("click",".swatches-container .swatches-list li .remove-item a",(function(t){t.preventDefault();var r=$(t.currentTarget).closest("li");e.deletedItems.push(r.data("id")),r.remove()}))}}])&&e(r.prototype,a),t}();$(window).on("load",(function(){new t}))})();
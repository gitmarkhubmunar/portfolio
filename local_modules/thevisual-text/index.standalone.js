(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HaikuComponent_TheVisual_Text = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require('./interpreter.js');
},{"./interpreter.js":3}],2:[function(require,module,exports){
module.exports = {
  metadata: {
    relpath: "bytecode.js",
    type: "haiku",
    name: "Text",
    uuid: "ee318dba-0dc9-4600-a826-4317901590e8",
    version: "0.0.1",
    organization: "TheVisual",
    project: "Text",
    branch: "master" },

  options: {},
  properties: [],
  eventHandlers: [],
  timelines: {
    Default: {
      "haiku:590b92f3b428": {
        "style.WebkitTapHighlightColor": { "0": { value: "rgba(0,0,0,0)" } },
        "style.margin": { "0": { value: "0 auto" } },
        "style.position": { "0": { value: "relative" } },
        "style.overflowX": { "0": { value: "hidden" } },
        "style.overflowY": { "0": { value: "hidden" } },
        "sizeAbsolute.x": { "0": { value: 600, edited: true } },
        "sizeAbsolute.y": { "0": { value: 130, edited: true } },
        "sizeMode.x": { "0": { value: 1 } },
        "sizeMode.y": { "0": { value: 1 } },
        "sizeMode.z": { "0": { value: 1 } },
        opacity: { "0": { value: 1, edited: true } } },

      "haiku:46e3809a9315": {
        "sizeAbsolute.x": { "0": { value: 38 } },
        "sizeAbsolute.y": { "0": { value: 46 } },
        "sizeMode.x": { "0": { value: 1 } },
        "sizeMode.y": { "0": { value: 1 } },
        "sizeMode.z": { "0": { value: 1 } },
        viewBox: { "0": { value: "0 0 38 46" } },
        "style.position": { "0": { value: "absolute" } },
        "style.margin": { "0": { value: "0" } },
        "style.padding": { "0": { value: "0" } },
        "style.border": { "0": { value: "0" } },
        "translation.x": { "0": { value: 38.5, edited: true } },
        "translation.y": { "0": { value: 41, edited: true } },
        "style.zIndex": { "0": { value: 1 } },
        opacity: {
          "0": { value: 0, edited: true },
          "300": { value: 0, edited: true, curve: "linear" },
          "383": { value: 1, edited: true, curve: "easeInBounce" },
          "483": { value: 1, edited: true } } },


      "haiku:eeb44d11ce65": {
        stroke: { "0": { value: "none" } },
        "stroke-width": { "0": { value: "1" } },
        fill: { "0": { value: "none" } },
        "fill-rule": { "0": { value: "evenodd" } } },

      "haiku:16b6d32a66b0": {
        fill: { "0": { value: "#000000" } },
        points: {
          "0": {
            value: "31.136 19.056 7.136 19.056 7.136 0.048 0.928 0.048 0.928 46 7.136 46 7.136 24.56 31.136 24.56 31.136 46 37.344 46 37.344 0.048 31.136 0.048" } } },



      "haiku:c4932b9273e6": {
        "sizeAbsolute.x": { "0": { value: 32 } },
        "sizeAbsolute.y": { "0": { value: 36 } },
        "sizeMode.x": { "0": { value: 1 } },
        "sizeMode.y": { "0": { value: 1 } },
        "sizeMode.z": { "0": { value: 1 } },
        viewBox: { "0": { value: "0 0 32 36" } },
        "style.position": { "0": { value: "absolute" } },
        "style.margin": { "0": { value: "0" } },
        "style.padding": { "0": { value: "0" } },
        "style.border": { "0": { value: "0" } },
        "translation.x": { "0": { value: 90.5, edited: true } },
        "translation.y": { "0": { value: 50, edited: true } },
        "style.zIndex": { "0": { value: 2 } },
        opacity: {
          "0": { value: 0, edited: true, curve: "linear" },
          "100": { value: 0, edited: true },
          "500": { value: 0, edited: true, curve: "easeOutQuad" },
          "617": { value: 1, edited: true },
          "667": { value: 1, edited: true } },

        "scale.y": {
          "0": { value: 1 },
          "717": { value: 1, edited: true, curve: "easeInOutQuint" },
          "750": { value: 0.15235077281251974, edited: true } } },


      "haiku:8d9d2b345523": {
        stroke: { "0": { value: "none" } },
        "stroke-width": { "0": { value: "1" } },
        fill: { "0": { value: "none" } },
        "fill-rule": { "0": { value: "evenodd" } } },

      "haiku:9289fd17689a": {
        d: {
          "0": {
            value: "M25.152,24.504 L30.784,24.504 C30.592,26.104 29.056,30.84 24.832,33.656 C23.296,34.68 21.12,35.96 15.744,35.96 C6.336,35.96 0.768,28.856 0.768,19.192 C0.768,8.824 5.76,0.568 16.832,0.568 C26.496,0.568 31.232,8.248 31.232,20.088 L6.784,20.088 C6.784,27.064 10.048,31.096 16.512,31.096 C21.824,31.096 24.96,27 25.152,24.504 Z M6.784,15.608 L25.408,15.608 C25.088,10.424 22.912,5.624 16.064,5.624 C10.88,5.624 6.784,10.424 6.784,15.608 Z" } },


        fill: { "0": { value: "#000000" } } },

      "haiku:592e36943511": {
        "sizeAbsolute.x": { "0": { value: 18 } },
        "sizeAbsolute.y": { "0": { value: 35 } },
        "sizeMode.x": { "0": { value: 1 } },
        "sizeMode.y": { "0": { value: 1 } },
        "sizeMode.z": { "0": { value: 1 } },
        viewBox: { "0": { value: "0 0 18 35" } },
        "style.position": { "0": { value: "absolute" } },
        "style.margin": { "0": { value: "0" } },
        "style.padding": { "0": { value: "0" } },
        "style.border": { "0": { value: "0" } },
        "translation.x": { "0": { value: 129.5, edited: true } },
        "translation.y": { "0": { value: 50.5, edited: true } },
        "style.zIndex": { "0": { value: 3 } },
        opacity: {
          "0": { value: 0, edited: true, curve: "linear" },
          "167": { value: 1, edited: true } } },


      "haiku:19fa02020b98": {
        stroke: { "0": { value: "none" } },
        "stroke-width": { "0": { value: "1" } },
        fill: { "0": { value: "none" } },
        "fill-rule": { "0": { value: "evenodd" } } },

      "haiku:4044e2b00239": {
        d: {
          "0": {
            value: "M6.352,15.544 C6.352,10.68 9.68,6.584 14.928,6.584 L17.04,6.584 L17.04,0.76 C16.592,0.632 16.272,0.568 15.568,0.568 C11.344,0.568 8.4,3.192 6.16,7.096 L6.032,7.096 L6.032,1.528 L0.72,1.528 L0.72,35 L6.352,35 L6.352,15.544 Z" } },


        fill: { "0": { value: "#000000" } } },

      "haiku:400b8d538fe1": {
        "sizeAbsolute.x": { "0": { value: 32 } },
        "sizeAbsolute.y": { "0": { value: 36 } },
        "sizeMode.x": { "0": { value: 1 } },
        "sizeMode.y": { "0": { value: 1 } },
        "sizeMode.z": { "0": { value: 1 } },
        viewBox: { "0": { value: "0 0 32 36" } },
        "style.position": { "0": { value: "absolute" } },
        "style.margin": { "0": { value: "0" } },
        "style.padding": { "0": { value: "0" } },
        "style.border": { "0": { value: "0" } },
        "translation.x": { "0": { value: 188.5, edited: true } },
        "translation.y": { "0": { value: 51, edited: true } },
        "style.zIndex": { "0": { value: 5 } },
        opacity: {
          "0": { value: 0, edited: true, curve: "linear" },
          "250": { value: 1, edited: true } } },


      "haiku:6602566f586b": {
        stroke: { "0": { value: "none" } },
        "stroke-width": { "0": { value: "1" } },
        fill: { "0": { value: "none" } },
        "fill-rule": { "0": { value: "evenodd" } } },

      "haiku:ef5b922bbad5": {
        d: {
          "0": {
            value: "M0.656,18.232 C0.656,9.592 5.52,0.568 16.208,0.568 C26.896,0.568 31.76,9.592 31.76,18.232 C31.76,26.872 26.896,35.896 16.208,35.896 C5.52,35.896 0.656,26.872 0.656,18.232 Z M6.48,18.232 C6.48,22.712 8.144,31.032 16.208,31.032 C24.272,31.032 25.936,22.712 25.936,18.232 C25.936,13.752 24.272,5.432 16.208,5.432 C8.144,5.432 6.48,13.752 6.48,18.232 Z" } },


        fill: { "0": { value: "#000000" } } },

      "haiku:4c3ece4d2beb": {
        "sizeAbsolute.x": { "0": { value: 18 } },
        "sizeAbsolute.y": { "0": { value: 35 } },
        "sizeMode.x": { "0": { value: 1 } },
        "sizeMode.y": { "0": { value: 1 } },
        "sizeMode.z": { "0": { value: 1 } },
        viewBox: { "0": { value: "0 0 18 35" } },
        "style.position": { "0": { value: "absolute" } },
        "style.margin": { "0": { value: "0" } },
        "style.padding": { "0": { value: "0" } },
        "style.border": { "0": { value: "0" } },
        "translation.x": { "0": { value: 156.5, edited: true } },
        "translation.y": { "0": { value: 50.75, edited: true } },
        "style.zIndex": { "0": { value: 6 } },
        opacity: {
          "0": { value: 0, edited: true, curve: "linear" },
          "217": { value: 1, edited: true } } },


      "haiku:f532342267d9": {
        stroke: { "0": { value: "none" } },
        "stroke-width": { "0": { value: "1" } },
        fill: { "0": { value: "none" } },
        "fill-rule": { "0": { value: "evenodd" } } },

      "haiku:b8edbfd84014": {
        d: {
          "0": {
            value: "M6.352,15.544 C6.352,10.68 9.68,6.584 14.928,6.584 L17.04,6.584 L17.04,0.76 C16.592,0.632 16.272,0.568 15.568,0.568 C11.344,0.568 8.4,3.192 6.16,7.096 L6.032,7.096 L6.032,1.528 L0.72,1.528 L0.72,35 L6.352,35 L6.352,15.544 Z" } },


        fill: { "0": { value: "#000000" } } } } },




  template: {
    elementName: "div",
    attributes: { "haiku-title": "bytecode", "haiku-id": "590b92f3b428" },
    children: [
    {
      elementName: "svg",
      attributes: {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        source: "designs/herro..sketch.contents/slices/H.svg",
        "haiku-title": "H",
        "haiku-id": "46e3809a9315" },

      children: [
      {
        elementName: "title",
        attributes: { "haiku-id": "69ed1d222ada" },
        children: ["H"] },

      {
        elementName: "desc",
        attributes: { "haiku-id": "86783281f2ac" },
        children: ["Created with sketchtool."] },

      {
        elementName: "defs",
        attributes: { "haiku-id": "6d1400c0dfcd" },
        children: [] },

      {
        elementName: "g",
        attributes: { id: "Page-1", "haiku-id": "eeb44d11ce65" },
        children: [
        {
          elementName: "polygon",
          attributes: { id: "Path", "haiku-id": "16b6d32a66b0" },
          children: [] }] }] },





    {
      elementName: "svg",
      attributes: {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        source: "designs/herro..sketch.contents/slices/e.svg",
        "haiku-title": "e",
        "haiku-id": "c4932b9273e6" },

      children: [
      {
        elementName: "title",
        attributes: { "haiku-id": "ef7de17509cf" },
        children: ["e"] },

      {
        elementName: "desc",
        attributes: { "haiku-id": "66687e9a4a66" },
        children: ["Created with sketchtool."] },

      {
        elementName: "defs",
        attributes: { "haiku-id": "ae79dbbdb4d3" },
        children: [] },

      {
        elementName: "g",
        attributes: { id: "Page-1", "haiku-id": "8d9d2b345523" },
        children: [
        {
          elementName: "path",
          attributes: {
            id: "Combined-Shape",
            "haiku-id": "9289fd17689a" },

          children: [] }] }] },





    {
      elementName: "svg",
      attributes: {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        source: "designs/herro..sketch.contents/slices/r.svg",
        "haiku-title": "r",
        "haiku-id": "592e36943511" },

      children: [
      {
        elementName: "title",
        attributes: { "haiku-id": "03806d622246" },
        children: ["r"] },

      {
        elementName: "desc",
        attributes: { "haiku-id": "ddfa152b2c8e" },
        children: ["Created with sketchtool."] },

      {
        elementName: "defs",
        attributes: { "haiku-id": "f9db7c289802" },
        children: [] },

      {
        elementName: "g",
        attributes: { id: "Page-1", "haiku-id": "19fa02020b98" },
        children: [
        {
          elementName: "path",
          attributes: { id: "Path", "haiku-id": "4044e2b00239" },
          children: [] }] }] },





    {
      elementName: "svg",
      attributes: {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        source: "designs/herro..sketch.contents/slices/o.svg",
        "haiku-title": "o",
        "haiku-id": "400b8d538fe1" },

      children: [
      {
        elementName: "title",
        attributes: { "haiku-id": "b73ca07f6323" },
        children: ["o"] },

      {
        elementName: "desc",
        attributes: { "haiku-id": "70b5b846142a" },
        children: ["Created with sketchtool."] },

      {
        elementName: "defs",
        attributes: { "haiku-id": "07d76cf64080" },
        children: [] },

      {
        elementName: "g",
        attributes: { id: "Page-1", "haiku-id": "6602566f586b" },
        children: [
        {
          elementName: "path",
          attributes: {
            id: "Combined-Shape",
            "haiku-id": "ef5b922bbad5" },

          children: [] }] }] },





    {
      elementName: "svg",
      attributes: {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        source: "designs/herro..sketch.contents/slices/r.svg",
        "haiku-title": "r",
        "haiku-id": "4c3ece4d2beb" },

      children: [
      {
        elementName: "title",
        attributes: { "haiku-id": "13d6fa66b8ea" },
        children: ["r"] },

      {
        elementName: "desc",
        attributes: { "haiku-id": "bb5c5d73dac3" },
        children: ["Created with sketchtool."] },

      {
        elementName: "defs",
        attributes: { "haiku-id": "f49d72bc1359" },
        children: [] },

      {
        elementName: "g",
        attributes: { id: "Page-1", "haiku-id": "f532342267d9" },
        children: [
        {
          elementName: "path",
          attributes: { id: "Path", "haiku-id": "b8edbfd84014" },
          children: [] }] }] }] } };
},{}],3:[function(require,module,exports){
var HaikuCreation = require("/Users/JeffMunar/Downloads/Haiku.app/Contents/Resources/app.asar/libs/plumbing/node_modules/haiku-interpreter/src/creation/dom");
module.exports = HaikuCreation(require('./bytecode.js'));
},{"./bytecode.js":2,"/Users/JeffMunar/Downloads/Haiku.app/Contents/Resources/app.asar/libs/plumbing/node_modules/haiku-interpreter/src/creation/dom":47}],4:[function(require,module,exports){
module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};
},{}],5:[function(require,module,exports){
/* MIT license */
var colorNames = require('color-name');
var swizzle = require('simple-swizzle');

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}

},{"color-name":4,"simple-swizzle":143}],6:[function(require,module,exports){
(function (process){
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

}).call(this,require('_process'))
},{"./debug":7,"_process":140}],7:[function(require,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":139}],8:[function(require,module,exports){
var cs = require('color-string')

var STRING = 'string'
var OBJECT = 'object'

function parseString (str) {
  if (!str) return null
  if (typeof str === OBJECT) return str
  if (str.trim().slice(0, 3) === 'url') return str
  var desc = cs.get(str)
  return desc
}

function generateString (desc) {
  if (typeof desc === STRING) return desc
  if (!desc) return 'none'
  var str = cs.to[desc.model](desc.value)
  return str
}

module.exports = {
  parseString: parseString,
  generateString: generateString
}

},{"color-string":5}],9:[function(require,module,exports){
// Coordinate (0, 0, 0) is the top left of the screen

var SIZE_PROPORTIONAL = 0 // A percentage of the parent
var SIZE_ABSOLUTE = 1 // A fixed size in screen pixels
var DEFAULT_DEPTH = 0
var IDENTITY = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1
]

// Used for rendering downstream
var FORMATS = {
  THREE: 3,
  TWO: 2
}

function createLayoutSpec (ax, ay, az) {
  return {
    shown: true,
    opacity: 1.0,
    mount: { x: ax || 0, y: ay || 0, z: az || 0 }, // anchor in self
    align: { x: ax || 0, y: ay || 0, z: az || 0 }, // anchor in context
    origin: { x: ax || 0, y: ay || 0, z: az || 0 }, // transform origin
    translation: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0, w: 0 },
    scale: { x: 1, y: 1, z: 1 },
    sizeMode: { x: SIZE_PROPORTIONAL, y: SIZE_PROPORTIONAL, z: SIZE_PROPORTIONAL },
    sizeProportional: { x: 1, y: 1, z: 1 },
    sizeDifferential: { x: 0, y: 0, z: 0 },
    sizeAbsolute: { x: 0, y: 0, z: 0 }
  }
}

function createMatrix () {
  return copyMatrix([], IDENTITY)
}

function copyMatrix (out, m) {
  out[0] = m[0]
  out[1] = m[1]
  out[2] = m[2]
  out[3] = m[3]
  out[4] = m[4]
  out[5] = m[5]
  out[6] = m[6]
  out[7] = m[7]
  out[8] = m[8]
  out[9] = m[9]
  out[10] = m[10]
  out[11] = m[11]
  out[12] = m[12]
  out[13] = m[13]
  out[14] = m[14]
  out[15] = m[15]
  return out
}

function multiplyMatrices (out, a, b) {
  out[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12]
  out[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13]
  out[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14]
  out[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15]
  out[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12]
  out[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13]
  out[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14]
  out[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15]
  out[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12]
  out[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13]
  out[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14]
  out[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15]
  out[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12]
  out[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13]
  out[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14]
  out[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15]
  return out
}

function transposeMatrix (out, a) {
  out[0] = a[0]
  out[1] = a[4]
  out[2] = a[8]
  out[3] = a[12]
  out[4] = a[1]
  out[5] = a[5]
  out[6] = a[9]
  out[7] = a[13]
  out[8] = a[2]
  out[9] = a[6]
  out[10] = a[10]
  out[11] = a[14]
  out[12] = a[3]
  out[13] = a[7]
  out[14] = a[11]
  out[15] = a[15]
  return out
}

// function isZero (num) {
//   return num > -0.000001 && num < 0.000001
// }

function createBaseComputedLayout (x, y, z) {
  if (!x) x = 0
  if (!y) y = 0
  if (!z) z = 0
  return {
    size: { x: x, y: y, z: z },
    matrix: createMatrix(),
    shown: true,
    opacity: 1.0
  }
}

// function doesLayoutSpecIndicateInvisible (layoutSpec) {
//   if (layoutSpec.shown === false) return true
//   if (isZero(layoutSpec.opacity)) return true
//   return false
// }

function computeLayout (out, layoutSpec, currentMatrix, parentMatrix, parentsizeAbsolute) {
  if (!parentsizeAbsolute) parentsizeAbsolute = { x: 0, y: 0, z: 0 }

  if (parentsizeAbsolute.z === undefined || parentsizeAbsolute.z === null) {
    parentsizeAbsolute.z = DEFAULT_DEPTH
  }

  var size = computeSize({}, layoutSpec, layoutSpec.sizeMode, parentsizeAbsolute)

  var matrix = computeMatrix([], out, layoutSpec, currentMatrix, size, parentMatrix, parentsizeAbsolute)

  out.size = size
  out.matrix = matrix
  out.shown = layoutSpec.shown
  out.opacity = layoutSpec.opacity

  return out
}

function computeMatrix (outputMatrix, outputNodepad, layoutSpec, currentMatrix, currentsizeAbsolute, parentMatrix, parentsizeAbsolute) {
  var translationX = layoutSpec.translation.x
  var translationY = layoutSpec.translation.y
  var translationZ = layoutSpec.translation.z
  var rotationX = layoutSpec.rotation.x
  var rotationY = layoutSpec.rotation.y
  var rotationZ = layoutSpec.rotation.z
  var rotationW = layoutSpec.rotation.w
  var scaleX = layoutSpec.scale.x
  var scaleY = layoutSpec.scale.y
  var scaleZ = layoutSpec.scale.z
  var alignX = layoutSpec.align.x * parentsizeAbsolute.x
  var alignY = layoutSpec.align.y * parentsizeAbsolute.y
  var alignZ = layoutSpec.align.z * parentsizeAbsolute.z
  var mountPointX = layoutSpec.mount.x * currentsizeAbsolute.x
  var mountPointY = layoutSpec.mount.y * currentsizeAbsolute.y
  var mountPointZ = layoutSpec.mount.z * currentsizeAbsolute.z
  var originX = layoutSpec.origin.x * currentsizeAbsolute.x
  var originY = layoutSpec.origin.y * currentsizeAbsolute.y
  var originZ = layoutSpec.origin.z * currentsizeAbsolute.z

  var wx = rotationW * rotationX
  var wy = rotationW * rotationY
  var wz = rotationW * rotationZ
  var xx = rotationX * rotationX
  var yy = rotationY * rotationY
  var zz = rotationZ * rotationZ
  var xy = rotationX * rotationY
  var xz = rotationX * rotationZ
  var yz = rotationY * rotationZ

  var rs0 = (1 - 2 * (yy + zz)) * scaleX
  var rs1 = (2 * (xy + wz)) * scaleX
  var rs2 = (2 * (xz - wy)) * scaleX
  var rs3 = (2 * (xy - wz)) * scaleY
  var rs4 = (1 - 2 * (xx + zz)) * scaleY
  var rs5 = (2 * (yz + wx)) * scaleY
  var rs6 = (2 * (xz + wy)) * scaleZ
  var rs7 = (2 * (yz - wx)) * scaleZ
  var rs8 = (1 - 2 * (xx + yy)) * scaleZ

  var tx = (alignX + translationX - mountPointX + originX) - (rs0 * originX + rs3 * originY + rs6 * originZ)
  var ty = (alignY + translationY - mountPointY + originY) - (rs1 * originX + rs4 * originY + rs7 * originZ)
  var tz = (alignZ + translationZ - mountPointZ + originZ) - (rs2 * originX + rs5 * originY + rs8 * originZ)

  outputNodepad.align = { x: alignX, y: alignY, z: alignZ }
  outputNodepad.mount = { x: mountPointX, y: mountPointY, z: mountPointZ }
  outputNodepad.origin = { x: originX, y: originY, z: originZ }
  outputNodepad.offset = { x: tx, y: ty, z: tz }

  outputMatrix[0] = parentMatrix[0] * rs0 + parentMatrix[4] * rs1 + parentMatrix[8] * rs2
  outputMatrix[1] = parentMatrix[1] * rs0 + parentMatrix[5] * rs1 + parentMatrix[9] * rs2
  outputMatrix[2] = parentMatrix[2] * rs0 + parentMatrix[6] * rs1 + parentMatrix[10] * rs2
  outputMatrix[3] = 0
  outputMatrix[4] = parentMatrix[0] * rs3 + parentMatrix[4] * rs4 + parentMatrix[8] * rs5
  outputMatrix[5] = parentMatrix[1] * rs3 + parentMatrix[5] * rs4 + parentMatrix[9] * rs5
  outputMatrix[6] = parentMatrix[2] * rs3 + parentMatrix[6] * rs4 + parentMatrix[10] * rs5
  outputMatrix[7] = 0
  outputMatrix[8] = parentMatrix[0] * rs6 + parentMatrix[4] * rs7 + parentMatrix[8] * rs8
  outputMatrix[9] = parentMatrix[1] * rs6 + parentMatrix[5] * rs7 + parentMatrix[9] * rs8
  outputMatrix[10] = parentMatrix[2] * rs6 + parentMatrix[6] * rs7 + parentMatrix[10] * rs8
  outputMatrix[11] = 0
  outputMatrix[12] = parentMatrix[0] * tx + parentMatrix[4] * ty + parentMatrix[8] * tz
  outputMatrix[13] = parentMatrix[1] * tx + parentMatrix[5] * ty + parentMatrix[9] * tz
  outputMatrix[14] = parentMatrix[2] * tx + parentMatrix[6] * ty + parentMatrix[10] * tz
  outputMatrix[15] = 1

  return outputMatrix
}

var COMPONENTS = ['x', 'y', 'z']

function computeSize (outputSize, layoutSpec, sizeModeArray, parentsizeAbsolute) {
  for (var i = 0; i < COMPONENTS.length; i++) {
    var component = COMPONENTS[i]
    switch (sizeModeArray[component]) {
      case SIZE_PROPORTIONAL:
        var sizeProportional = layoutSpec.sizeProportional[component]
        var sizeDifferential = layoutSpec.sizeDifferential[component]
        outputSize[component] = parentsizeAbsolute[component] * sizeProportional + sizeDifferential
        break
      case SIZE_ABSOLUTE:
        outputSize[component] = layoutSpec.sizeAbsolute[component]
        break
    }
  }
  return outputSize
}

function computeRotationFlexibly (x, y, z, w, quat) {
  // If w-component was given, we are dealing with someone who is quaternion-savvy,
  // and who we assume wants to compute a rotation exactly, so we'll just return the vector
  // if (w != null) {
  //   return { x: x, y: y, z: z, w: w }
  // }

  // Otherwise, the expectation is that somebody is going to pass the previous
  // quaternion so we can adjust it relative to where it had been before,
  // that is, by passing in Euler angles. Therefore, if the given quaternion
  // isn't an array, we can't continue.
  if (!quat || (quat.x == null || quat.y == null || quat.z == null || quat.w == null)) {
    throw new Error('No w-component nor quaternion provided!')
  }

  // If we got here, we are going to return a new quaternion to describe the
  // rotation as an adjustment based around the values passed in.
  // Before we move on to the actual calculations, we're going to handle the
  // case that any of the other values was omitted, which we will interpret
  // to mean we want to use the value given by the passed quaternion
  if (x == null || y == null || z == null) {
    var sp = -2 * (quat.y * quat.z - quat.w * quat.x)

    if (Math.abs(sp) > 0.99999) {
      y = y == null ? Math.PI * 0.5 * sp : y
      x = x == null ? Math.atan2(-quat.x * quat.z + quat.w * quat.y, 0.5 - quat.y * quat.y - quat.z * quat.z) : x
      z = z == null ? 0 : z
    } else {
      y = y == null ? Math.asin(sp) : y
      x = x == null ? Math.atan2(quat.x * quat.z + quat.w * quat.y, 0.5 - quat.x * quat.x - quat.y * quat.y) : x
      z = z == null ? Math.atan2(quat.x * quat.y + quat.w * quat.z, 0.5 - quat.x * quat.x - quat.z * quat.z) : z
    }
  }

  var hx = x * 0.5
  var hy = y * 0.5
  var hz = z * 0.5

  var sx = Math.sin(hx)
  var sy = Math.sin(hy)
  var sz = Math.sin(hz)
  var cx = Math.cos(hx)
  var cy = Math.cos(hy)
  var cz = Math.cos(hz)

  var sysz = sy * sz
  var cysz = cy * sz
  var sycz = sy * cz
  var cycz = cy * cz

  var qx = sx * cycz + cx * sysz
  var qy = cx * sycz - sx * cysz
  var qz = cx * cysz + sx * sycz
  var qw = cx * cycz - sx * sysz

  return { x: qx, y: qy, z: qz, w: qw }
}

module.exports = {
  computeMatrix: computeMatrix,
  computeLayout: computeLayout,
  createLayoutSpec: createLayoutSpec,
  createBaseComputedLayout: createBaseComputedLayout,
  computeRotationFlexibly: computeRotationFlexibly,
  createMatrix: createMatrix,
  FORMATS: FORMATS,
  SIZE_ABSOLUTE: SIZE_ABSOLUTE,
  SIZE_PROPORTIONAL: SIZE_PROPORTIONAL,
  ATTRIBUTES: createLayoutSpec(),
  multiplyMatrices: multiplyMatrices,
  transposeMatrix: transposeMatrix,
  copyMatrix: copyMatrix
}

},{}],10:[function(require,module,exports){
var svgPoints = require('svg-points')
var parseCssValueString = require('./parseCssValueString')

var SVG_TYPES = {
  g: true,
  rect: true,
  polyline: true,
  polygon: true,
  path: true,
  line: true,
  ellipse: true,
  circle: true
}

var SVG_POINT_NUMERIC_FIELDS = {
  cx: true,
  cy: true,
  r: true,
  rx: true,
  ry: true,
  x1: true,
  x2: true,
  x: true,
  y: true
}

var SVG_POINT_COMMAND_FIELDS = {
  d: true,
  points: true
}

var SVG_COMMAND_TYPES = {
  path: true,
  polyline: true,
  polygon: true
}

function polyPointsStringToPoints (pointsString) {
  if (!pointsString) return []
  if (Array.isArray(pointsString)) return pointsString
  var points = []
  var couples = pointsString.split(/\s+/)
  for (var i = 0; i < couples.length; i++) {
    var pair = couples[i]
    var segs = pair.split(/,\s*/)
    var coord = []
    if (segs[0]) coord[0] = Number(segs[0])
    if (segs[1]) coord[1] = Number(segs[1])
    points.push(coord)
  }
  return points
}

function pointsToPolyString (points) {
  if (!points) return ''
  if (typeof points === 'string') return points
  var arr = []
  for (var i = 0; i < points.length; i++) {
    var point = points[i]
    var seg = point.join(',')
    arr.push(seg)
  }
  return arr.join(' ')
}

function pathToPoints (pathString) {
  var shape = { type: 'path', d: pathString }
  return svgPoints.toPoints(shape)
}

function pointsToPath (pointsArray) {
  return svgPoints.toPath(pointsArray)
}

function manaToPoints (mana) {
  if (SVG_TYPES[mana.elementName] && mana.elementName !== 'rect' && mana.elementName !== 'g') {
    var shape = { type: mana.elementName }
    if (SVG_COMMAND_TYPES[shape.type]) {
      for (var f2 in SVG_POINT_COMMAND_FIELDS) {
        if (mana.attributes[f2]) {
          shape[f2] = mana.attributes[f2]
        }
      }
    } else {
      for (var f1 in SVG_POINT_NUMERIC_FIELDS) {
        if (mana.attributes[f1]) {
          shape[f1] = Number(mana.attributes[f1])
        }
      }
    }
    return svgPoints.toPoints(shape)
  } else {
    // div, rect, svg ...
    var width = parseCssValueString(mana.layout && mana.layout.computed && mana.layout.computed.size && mana.layout.computed.size.x || mana.rect && mana.rect.width || mana.attributes && mana.attributes.style && mana.attributes.style.width || mana.attributes && mana.attributes.width || mana.attributes && mana.attributes.x || 0).value
    var height = parseCssValueString(mana.layout && mana.layout.computed && mana.layout.computed.size && mana.layout.computed.size.y || mana.rect && mana.rect.height || mana.attributes && mana.attributes.style && mana.attributes.style.height || mana.attributes && mana.attributes.height || mana.attributes && mana.attributes.y || 0).value
    var left = parseCssValueString(mana.rect && mana.rect.left || mana.attributes.style && mana.attributes.style.left || mana.attributes.x || 0).value
    var top = parseCssValueString(mana.rect && mana.rect.top || mana.attributes.style && mana.attributes.style.top || mana.attributes.y || 0).value
    return svgPoints.toPoints({
      type: 'rect',
      width: width,
      height: height,
      x: left,
      y: top
    })
  }
}

module.exports = {
  pathToPoints: pathToPoints,
  pointsToPath: pointsToPath,
  polyPointsStringToPoints: polyPointsStringToPoints,
  pointsToPolyString: pointsToPolyString,
  manaToPoints: manaToPoints
}

},{"./parseCssValueString":33,"svg-points":145}],11:[function(require,module,exports){
var Curves = require('just-curves')

var CENT = 1.0
var OBJECT = 'object'
var NUMBER = 'number'
var KEYFRAME_ZERO = 0
var KEYFRAME_MARGIN = 16.666
var FUNCTION = 'function'
var STRING = 'string'

function percentOfTime (t0, t1, tnow) {
  var span = t1 - t0
  if (span === 0) return CENT // No divide-by-zero
  var remaining = t1 - tnow
  var percent = CENT - remaining / span
  return percent
}

function valueAtPercent (v0, v1, pc) {
  var span = v1 - v0
  var gain = span * pc
  var value = v0 + gain
  return value
}

function valueAtTime (v0, v1, t0, t1, tnow) {
  var pc = percentOfTime(t0, t1, tnow)
  var value = valueAtPercent(v0, v1, pc)
  return value
}

function interpolateValue (v0, v1, t0, t1, tnow, curve) {
  var pc = percentOfTime(t0, t1, tnow)
  if (pc > CENT) pc = CENT
  if (curve) pc = curve(pc)
  var value = valueAtPercent(v0, v1, pc)
  return value
}

function interpolate (now, curve, started, ends, origin, destination) {
  if (Array.isArray(origin)) {
    var arrayOutput = []
    for (var i = 0; i < origin.length; i++) {
      arrayOutput[i] = interpolate(now, curve, started, ends, origin[i], destination[i])
    }
    return arrayOutput
  } else if (typeof origin === OBJECT) {
    var objectOutput = {}
    for (var key in origin) {
      objectOutput[key] = interpolate(now, curve, started, ends, origin[key], destination[key])
    }
    return objectOutput
  } else if (typeof origin === NUMBER) {
    return interpolateValue(origin, destination, started, ends, now, curve)
  } else {
    return origin
  }
}

function ascendingSort (a, b) {
  return a - b
}

function numberize (n) {
  return parseInt(n, 10)
}

function sortedKeyframes (keyframeGroup) {
  var keys = Object.keys(keyframeGroup)
  var sorted = keys.sort(ascendingSort).map(numberize)
  return sorted
}

// 0:    { value: { ... } }
// 2500: { value: { ... } }
// 5000: { value: { ... } }
function getKeyframesList (keyframeGroup, nowValue) {
  var sorted = sortedKeyframes(keyframeGroup)
  for (var i = 0; i < sorted.length; i++) {
    var j = i + 1
    var current = sorted[i]
    var next = sorted[j]
    if (current <= nowValue) {
      if (next > nowValue) return [current, next]
      if (j >= sorted.length) return [current]
    }
  }
}

function isFunction (value) {
  return typeof value === FUNCTION
}

function calculateValue (keyframeGroup, nowValue, hostInstance, inputValues) {
  // HACK: Add a 0th keyframe automatically and set its value to the next one.
  // This is a convenience so the data model/UI doesn't have to remember to set this.
  // But this is probably going to bite somebody later. :/
  // See the 'getKeyframesList' function for an additional part of this hack.
  if (!keyframeGroup[KEYFRAME_ZERO]) {
    keyframeGroup[KEYFRAME_ZERO] = {}
  }
  var keyframesList = getKeyframesList(keyframeGroup, nowValue)
  if (!keyframesList || keyframesList.length < 1) return
  var currentKeyframe = keyframesList[0]
  var currentTransition = keyframeGroup[currentKeyframe]
  var nextKeyframe = keyframesList[1]
  var nextTransition = keyframeGroup[nextKeyframe]
  var finalValue = getTransitionValue(currentKeyframe, currentTransition, nextKeyframe, nextTransition, nowValue, hostInstance, inputValues)
  return finalValue
}

function calculateValueAndReturnUndefinedIfNotWorthwhile (keyframeGroup, nowValue, hostInstance, inputValues, eventsFired, inputsChanged) {
  if (!keyframeGroup[KEYFRAME_ZERO]) keyframeGroup[KEYFRAME_ZERO] = {} // HACK: See above
  var keyframesList = getKeyframesList(keyframeGroup, nowValue)
  if (!keyframesList || keyframesList.length < 1) return void (0)
  var currentKeyframe = keyframesList[0]
  var nextKeyframe = keyframesList[1]
  var currentTransition = keyframeGroup[currentKeyframe]
  var nextTransition = keyframeGroup[nextKeyframe]
  // For functions, only run if we have changes that need recalc - NOTE: Assumes functions are pure!
  if (isFunction(currentTransition.value)) {
    // TODO: Only run this function on certain eventsFired or inputsChanged
    return getTransitionValue(currentKeyframe, currentTransition, nextKeyframe, nextTransition, nowValue, hostInstance, inputValues)
  }
  // If no preceding keyframe, check if we need to calculate any values past the initial one
  if (nextKeyframe === undefined) {
    if (nowValue <= (currentKeyframe + KEYFRAME_MARGIN)) return getTransitionValue(currentKeyframe, currentTransition, nextKeyframe, nextTransition, nowValue, hostInstance, inputValues)
    return void (0)
  }
  // If there is a next one, check to see if our current time has already exceeded it, and skip if so
  if (nowValue <= nextKeyframe + KEYFRAME_MARGIN) return getTransitionValue(currentKeyframe, currentTransition, nextKeyframe, nextTransition, nowValue, hostInstance, inputValues)
  return void (0)
}

function getTransitionValue (currentKeyframe, currentTransition, nextKeyframe, nextTransition, nowValue, hostInstance, inputValues) {
  var currentValue = currentTransition.value
  if (isFunction(currentValue)) currentValue = currentValue.call(hostInstance, inputValues)
  if (!currentTransition.curve) return currentValue // No curve indicates immediate transition
  if (!nextTransition) return currentValue // We have gone past the final transition
  var currentCurve = currentTransition.curve
  if (typeof currentCurve === STRING) currentCurve = Curves[currentCurve]
  var nextValue = nextTransition.value
  if (isFunction(nextValue)) nextValue = nextValue.call(hostInstance, inputValues)
  var finalValue = interpolate(nowValue, currentCurve, currentKeyframe, nextKeyframe, currentValue, nextValue)
  return finalValue
}

module.exports = {
  percentOfTime: percentOfTime,
  valueAtPercent: valueAtPercent,
  valueAtTime: valueAtTime,
  interpolateValue: interpolateValue,
  interpolate: interpolate,
  calculateValue: calculateValue,
  sortedKeyframes: sortedKeyframes,
  calculateValueAndReturnUndefinedIfNotWorthwhile: calculateValueAndReturnUndefinedIfNotWorthwhile
}

},{"just-curves":135}],12:[function(require,module,exports){
'use strict'

var OBJECT = 'object'
var FUNCTION = 'function'

function isObject (value) {
  return value !== null && typeof value === OBJECT && !Array.isArray(value)
}

function isFunction (value) {
  return typeof value === FUNCTION
}

function isEmpty (value) {
  return value === undefined
}

function mergeIncoming (previous, incoming) {
  for (var key in incoming) {
    // Skip if there's no incoming property
    if (isEmpty(incoming[key])) continue
    // Deep merge if we have two objects
    if (isObject(previous[key]) && isObject(incoming[key])) {
      previous[key] = mergeIncoming(previous[key], incoming[key])
      continue
    }
    // In the default case, we just overwrite
    previous[key] = incoming[key]
  }
  return previous
}

function mergeValue (previous, incoming) {
  if (isFunction(previous) || isFunction(incoming)) {
    return incoming
  }
  if (isObject(previous) && isObject(incoming)) {
    return mergeIncoming(previous, incoming)
  }
  return incoming
}

module.exports = {
  isObject: isObject,
  isFunction: isFunction,
  isEmpty: isEmpty,
  mergeIncoming: mergeIncoming,
  mergeValue: mergeValue
}

},{}],13:[function(require,module,exports){
var Transitions = require('./Transitions')
var Utils = require('./Utils')
var ColorUtils = require('./ColorUtils')
var SVGPoints = require('./SVGPoints')

var PARSERS = {}
PARSERS['d'] = function _parseD (value) {
  return SVGPoints.pathToPoints(value)
}
PARSERS['color'] = function _parseColor (value) {
  return ColorUtils.parseString(value)
}
PARSERS['stroke'] = PARSERS['color']
PARSERS['fill'] = PARSERS['color']
PARSERS['floodColor'] = PARSERS['color']
PARSERS['lightingColor'] = PARSERS['color']
PARSERS['stopColor'] = PARSERS['color']
PARSERS['backgroundColor'] = PARSERS['color']
PARSERS['animateColor'] = PARSERS['color']
PARSERS['feColor'] = PARSERS['color']
PARSERS['flood-color'] = PARSERS['color']
PARSERS['lighting-color'] = PARSERS['color']
PARSERS['stop-color'] = PARSERS['color']
PARSERS['background-color'] = PARSERS['color']
PARSERS['animate-color'] = PARSERS['color']
PARSERS['fe-color'] = PARSERS['color']
PARSERS['style.stroke'] = PARSERS['color']
PARSERS['style.fill'] = PARSERS['color']
PARSERS['style.backgroundColor'] = PARSERS['color']
PARSERS['style.borderBottomColor'] = PARSERS['color']
PARSERS['style.borderColor'] = PARSERS['color']
PARSERS['style.borderLeftColor'] = PARSERS['color']
PARSERS['style.borderRightColor'] = PARSERS['color']
PARSERS['style.borderTopColor'] = PARSERS['color']
PARSERS['style.floodColor'] = PARSERS['color']
PARSERS['style.lightingColor'] = PARSERS['color']
PARSERS['style.stopColor'] = PARSERS['color']
PARSERS['points'] = function _parsePoints (value) {
  return SVGPoints.polyPointsStringToPoints(value)
}

var GENERATORS = {}
GENERATORS['d'] = function _genD (value) {
  return SVGPoints.pointsToPath(value)
}
GENERATORS['color'] = function _genColor (value) {
  return ColorUtils.generateString(value)
}
GENERATORS['stroke'] = GENERATORS['color']
GENERATORS['fill'] = GENERATORS['color']
GENERATORS['floodColor'] = GENERATORS['color']
GENERATORS['lightingColor'] = GENERATORS['color']
GENERATORS['stopColor'] = GENERATORS['color']
GENERATORS['backgroundColor'] = GENERATORS['color']
GENERATORS['animateColor'] = GENERATORS['color']
GENERATORS['feColor'] = GENERATORS['color']
GENERATORS['flood-color'] = GENERATORS['color']
GENERATORS['lighting-color'] = GENERATORS['color']
GENERATORS['stop-color'] = GENERATORS['color']
GENERATORS['background-color'] = GENERATORS['color']
GENERATORS['animate-color'] = GENERATORS['color']
GENERATORS['fe-color'] = GENERATORS['color']
GENERATORS['style.stroke'] = GENERATORS['color']
GENERATORS['style.fill'] = GENERATORS['color']
GENERATORS['style.backgroundColor'] = GENERATORS['color']
GENERATORS['style.borderBottomColor'] = GENERATORS['color']
GENERATORS['style.borderColor'] = GENERATORS['color']
GENERATORS['style.borderLeftColor'] = GENERATORS['color']
GENERATORS['style.borderRightColor'] = GENERATORS['color']
GENERATORS['style.borderTopColor'] = GENERATORS['color']
GENERATORS['style.floodColor'] = GENERATORS['color']
GENERATORS['style.lightingColor'] = GENERATORS['color']
GENERATORS['style.stopColor'] = GENERATORS['color']
GENERATORS['points'] = function _genPoints (value) {
  return SVGPoints.pointsToPolyString(value)
}

function ValueBuilder (component, template) {
  this.component = component
  this.template = template
  this._parsees = {}
  this._changes = {}
}

ValueBuilder.prototype.fetch = function _fetch (timelineName, selector, outputName, cluster) {
  if (this._parsees[timelineName] && this._parsees[timelineName][selector] && this._parsees[timelineName][selector][outputName]) {
    return this._parsees[timelineName][selector][outputName]
  }
  if (!this._parsees[timelineName]) this._parsees[timelineName] = {}
  if (!this._parsees[timelineName][selector]) this._parsees[timelineName][selector] = {}
  if (PARSERS[outputName]) {
    var clone = {}
    for (var ms in cluster) {
      var descriptor = cluster[ms]
      var parsed = PARSERS[outputName](descriptor.value)
      clone[ms] = {
        value: parsed,
        curve: descriptor.curve
      }
    }
    this._parsees[timelineName][selector][outputName] = clone
  } else {
    this._parsees[timelineName][selector][outputName] = cluster
  }
  return this._parsees[timelineName][selector][outputName]
}

ValueBuilder.prototype.finalize = function _finalize (timelineName, selector, outputName, computedValue) {
  if (GENERATORS[outputName]) {
    return GENERATORS[outputName](computedValue)
  } else {
    return computedValue
  }
}

ValueBuilder.prototype.didChangeValue = function _didChangeValue (timelineName, selector, outputName, outputValue) {
  var answer = false
  if (!this._changes[timelineName]) {
    this._changes[timelineName] = {}
    answer = true
  }
  if (!this._changes[timelineName][selector]) {
    this._changes[timelineName][selector] = {}
    answer = true
  }
  if (this._changes[timelineName][selector][outputName] === undefined || this._changes[timelineName][selector][outputName] !== outputValue) {
    this._changes[timelineName][selector][outputName] = outputValue
    answer = true
  }
  return answer
}

ValueBuilder.prototype.build = function _build (out, timelineName, timelineTime, timelinesObject, isPatchOperation, inputs, eventsFired, inputsChanged) {
  var overrides = timelinesObject[timelineName]
  for (var selector in overrides) {
    var group = overrides[selector]
    for (var name in group) {
      var cluster = this.fetch(timelineName, selector, name, group[name])

      var computed
      if (isPatchOperation) {
        computed = Transitions.calculateValueAndReturnUndefinedIfNotWorthwhile(cluster, timelineTime, this.component, inputs, eventsFired, inputsChanged)
      } else {
        computed = Transitions.calculateValue(cluster, timelineTime, this.component, inputs)
      }

      if (computed === undefined) continue

      var final = this.finalize(timelineName, selector, name, computed)

      // If this is _not_ a patch operation, we have to set the value because downstream, the player will strip
      // off old attributes present on the dom nodes.
      if (!isPatchOperation || this.didChangeValue(timelineName, selector, name, final)) {
        if (!out[selector]) out[selector] = {}
        if (out[selector][name] === undefined) out[selector][name] = final
        else out[selector][name] = Utils.mergeValue(out[selector][name], final)
      }
    }
  }
  return out
}

module.exports = ValueBuilder

},{"./ColorUtils":8,"./SVGPoints":10,"./Transitions":11,"./Utils":12}],14:[function(require,module,exports){
var allSvgElementNames = [
  'a',
  'altGlyph',
  'altGlyphDef',
  'altGlyphItem',
  'animate',
  'animateColor',
  'animateMotion',
  'animateTransform',
  'circle',
  'clipPath',
  'color-profile',
  'cursor',
  'defs',
  'desc',
  'discard',
  'ellipse',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDistantLight',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussianBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'filter',
  'font',
  'font-face',
  'font-face-format',
  'font-face-name',
  'font-face-src',
  'font-face-uri',
  'foreignObject',
  'g',
  'glyph',
  'glyphRef',
  'hkern',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'metadata',
  'missing-glyph',
  'mpath',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'script',
  'set',
  'stop',
  'style',
  'svg',
  'switch',
  'symbol',
  'text',
  'textPath',
  'title',
  'tref',
  'tspan',
  'use',
  'view',
  'vkern'
]

module.exports = allSvgElementNames

},{}],15:[function(require,module,exports){
var setStyleMatrix = require('./setStyleMatrix')
var roundToPrecision = require('./roundToPrecision')
var formatTransform = require('./formatTransform')
var isEqualTransformString = require('./isEqualTransformString')
var scopeOfElement = require('./scopeOfElement')

var SVG = 'svg'

function hasExplicitStyle (domElement, key) {
  if (!domElement.__haikuExplicitStyles) return false
  return !!domElement.__haikuExplicitStyles[key]
}

function applyCssLayout (domElement, virtualElement, nodeLayout, computedLayout, pixelRatio, rendererOptions, rendererScopes) {
  // No point continuing if there's no computedLayout contents
  if (!computedLayout.opacity && !computedLayout.size && !computedLayout.matrix) return

  var elementScope = scopeOfElement(virtualElement)

  if (!hasExplicitStyle(domElement, 'opacity')) {
    if (computedLayout.opacity) {
      // A lack of an opacity setting means 100% opacity, so unset any existing
      // value if we happen to get an opacity approaching 1.
      if (computedLayout.opacity > 0.999) {
        if (domElement.style.opacity) domElement.style.opacity = void (0)
      } else {
        var opacityString = ('' + computedLayout.opacity)
        if (domElement.style.opacity !== opacityString) domElement.style.opacity = opacityString
      }
    }
  }

  if (!hasExplicitStyle(domElement, 'width')) {
    if (computedLayout.size.x !== undefined) {
      var sizeXString = roundToPrecision(computedLayout.size.x) + 'px'
      if (domElement.style.width !== sizeXString) domElement.style.width = sizeXString
      // If we're inside an SVG, we also have to assign the width/height attributes or Firefox will complain
      if (elementScope === SVG) {
        if (domElement.getAttribute('width') !== sizeXString) domElement.setAttribute('width', sizeXString)
      }
    }
  }

  if (!hasExplicitStyle(domElement, 'height')) {
    if (computedLayout.size.y !== undefined) {
      var sizeYString = roundToPrecision(computedLayout.size.y) + 'px'
      if (domElement.style.height !== sizeYString) domElement.style.height = sizeYString
      // If we're inside an SVG, we also have to assign the width/height attributes or Firefox will complain
      if (elementScope === SVG) {
        if (domElement.getAttribute('height') !== sizeYString) domElement.setAttribute('height', sizeYString)
      }
    }
  }

  if (computedLayout.matrix) {
    var attributeTransform = domElement.getAttribute('transform')
    // IE doesn't support using transform on the CSS style in SVG elements, so if we are in SVG,
    // and if we are inside an IE context, use the transform attribute itself
    if (rendererOptions.platform.isIE) {
      if (elementScope === SVG) {
        var matrixString = formatTransform(computedLayout.matrix, nodeLayout.format, pixelRatio)
        if (!isEqualTransformString(attributeTransform, matrixString)) {
          domElement.setAttribute('transform', matrixString)
        }
      } else {
        setStyleMatrix(domElement.style, nodeLayout.format, computedLayout.matrix, rendererOptions && rendererOptions.useWebkitPrefix, pixelRatio, rendererOptions, rendererScopes)
      }
    } else {
      // An domElement might have an explicit transform override set, in which case, don't
      // attach the style transform to this node, because we will likely clobber what they've set
      if (!hasExplicitStyle(domElement, 'transform')) {
        if (!attributeTransform || attributeTransform === '' || virtualElement.__transformed) {
          setStyleMatrix(domElement.style, nodeLayout.format, computedLayout.matrix, rendererOptions && rendererOptions.useWebkitPrefix, pixelRatio, rendererOptions, rendererScopes)
        }
      }
    }
  }

  return domElement.style
}

module.exports = applyCssLayout

},{"./formatTransform":27,"./isEqualTransformString":30,"./roundToPrecision":35,"./scopeOfElement":36,"./setStyleMatrix":38}],16:[function(require,module,exports){
var ATTR_EXEC_RE = /\[([a-zA-Z0-9]+)([$|^~])?(=)?"?(.+?)?"?( i)?]/

function attrSelectorParser (selector) {
  var matches = ATTR_EXEC_RE.exec(selector)
  if (!matches) return null
  return {
    key: matches[1],
    operator: matches[3] && (matches[2] || '') + matches[3],
    value: matches[4],
    insensitive: !!matches[5]
  }
}

module.exports = attrSelectorParser

},{}],17:[function(require,module,exports){
var C1 = ', '
var C2 = ','

function compactTransform (t1) {
  return t1.split(C1).join(C2)
}

module.exports = compactTransform

},{}],18:[function(require,module,exports){
var objectPath = require('./objectPath')

function matchByAttribute (node, attrKeyToMatch, attrOperator, attrValueToMatch, options) {
  var attributes = objectPath(node, options.attributes)
  if (attributes) {
    var attrValue = attributes[attrKeyToMatch]
    // If no operator, do a simple presence check ([foo])
    if (!attrOperator) return !!attrValue
    switch (attrOperator) {
      case '=':
        return attrValueToMatch === attrValue
      // case '~=':
      // case '|=':
      // case '^=':
      // case '$=':
      // case '*=':
      default:
        console.warn('Operator `' + attrOperator + '` not supported yet')
        return false
    }
  }
}

module.exports = matchByAttribute

},{"./objectPath":32}],19:[function(require,module,exports){
var objectPath = require('./objectPath')

var CLASS_NAME_ATTR = 'class'
var ALT_CLASS_NAME_ATTR = 'className' // Ease of React integration
var SPACE = ' '

function matchByClass (node, className, options) {
  var attributes = objectPath(node, options.attributes)
  if (attributes) {
    var foundClassName = attributes[CLASS_NAME_ATTR]
    if (!foundClassName) foundClassName = attributes[ALT_CLASS_NAME_ATTR]
    if (foundClassName) {
      var classPieces = foundClassName.split(SPACE)
      if (classPieces.indexOf(className) !== -1) {
        return true
      }
    }
  }
}

module.exports = matchByClass

},{"./objectPath":32}],20:[function(require,module,exports){
var objectPath = require('./objectPath')

var HAIKU_ID_ATTRIBUTE = 'haiku-id'

function matchByHaiku (node, haikuString, options) {
  var attributes = objectPath(node, options.attributes)
  if (!attributes) return false
  if (!attributes[HAIKU_ID_ATTRIBUTE]) return false
  return attributes[HAIKU_ID_ATTRIBUTE] === haikuString
}

module.exports = matchByHaiku

},{"./objectPath":32}],21:[function(require,module,exports){
var objectPath = require('./objectPath')

function matchById (node, id, options) {
  var attributes = objectPath(node, options.attributes)
  if (attributes) {
    if (attributes.id === id) {
      return true
    }
  }
}

module.exports = matchById

},{"./objectPath":32}],22:[function(require,module,exports){
var objectPath = require('./objectPath')
var getFunctionName = require('./getFunctionName')

var STRING = 'string'
var OBJECT = 'object'
var FUNCTION = 'function'

function matchByTagName (node, tagName, options) {
  var val = objectPath(node, options.name)
  if (val) {
    if (typeof val === STRING && val === tagName) {
      return true
    } else if (typeof val === FUNCTION) {
      // Allow function constructors to act as the tag name
      if (getFunctionName(val) === tagName) {
        return true
      }
    } else if (typeof val === OBJECT) {
      // Allow for things like instances to act as the tag name
      if (val.name === tagName || val.tagName === tagName) {
        return true
      }
    }
  }
}

module.exports = matchByTagName

},{"./getFunctionName":28,"./objectPath":32}],23:[function(require,module,exports){
var matchById = require('./cssMatchById')
var matchByClass = require('./cssMatchByClass')
var matchByTagName = require('./cssMatchByTagName')
var matchByAttribute = require('./cssMatchByAttribute')
var matchByHaiku = require('./cssMatchByHaiku')
var attrSelectorParser = require('./attrSelectorParser')

var ID_PREFIX = '#'
var CLASS_PREFIX = '.'
var ATTR_PREFIX = '['
var HAIKU_PREFIX = 'haiku:'

function matchOne (node, piece, options) {
  if (piece.slice(0, 6) === HAIKU_PREFIX) {
    return matchByHaiku(node, piece.slice(6), options)
  }

  if (piece[0] === ID_PREFIX) {
    return matchById(node, piece.slice(1, piece.length), options)
  }

  if (piece[0] === CLASS_PREFIX) {
    return matchByClass(node, piece.slice(1, piece.length), options)
  }

  if (piece[0] === ATTR_PREFIX) {
    var parsedAttr = attrSelectorParser(piece)
    if (!parsedAttr) return false
    return matchByAttribute(node, parsedAttr.key, parsedAttr.operator, parsedAttr.value, options)
  }

  return matchByTagName(node, piece, options)
}

module.exports = matchOne

},{"./attrSelectorParser":16,"./cssMatchByAttribute":18,"./cssMatchByClass":19,"./cssMatchByHaiku":20,"./cssMatchById":21,"./cssMatchByTagName":22}],24:[function(require,module,exports){
var matchOne = require('./cssMatchOne')

var PIECE_SEPARATOR = ','

function queryList (matches, list, query, options) {
  var maxdepth = (options.maxdepth !== undefined) ? parseInt(options.maxdepth, 10) : Infinity
  var pieces = query.split(PIECE_SEPARATOR)
  for (var i = 0; i < pieces.length; i++) {
    var piece = pieces[i].trim()
    for (var j = 0; j < list.length; j++) {
      var node = list[j]
      if (node.__depth <= maxdepth) {
        if (matchOne(node, piece, options)) {
          matches.push(node)
        }
      }
    }
  }
}

module.exports = queryList

},{"./cssMatchOne":23}],25:[function(require,module,exports){
var uniq = require('./uniq')
var flattenTree = require('./manaFlattenTree')
var queryList = require('./cssQueryList')

var OBJECT = 'object'

function queryTree (matches, node, query, options) {
  if (!node || typeof node !== OBJECT) return matches
  var list = uniq(flattenTree([], node, options, 0, 0))
  queryList(matches, list, query, options)
  return matches
}

module.exports = queryTree

},{"./cssQueryList":24,"./manaFlattenTree":31,"./uniq":39}],26:[function(require,module,exports){
// properties: [
//   type: 'number',
//   private: true,
//   value: 0,
//   setter: function(clicks) {
//     this.timeline('rotate!')
//     return clicks
//   }
// ]
function eachProperty (bytecode, iteratee, binding) {
  if (!bytecode.properties) return null
  for (var i = 0; i < bytecode.properties.length; i++) {
    var property = bytecode.properties[i]
    iteratee.call(binding, property.type, property.name, property.value, property.private, property.setter, i)
  }
}

module.exports = eachProperty

},{}],27:[function(require,module,exports){
var TRANSFORM_SUFFIX = ')'
var TRANSFORM_ZERO = '0'
var TRANSFORM_COMMA = ','
var TRANSFORM_ZILCH = TRANSFORM_ZERO + TRANSFORM_COMMA
var TWO = 2
var THREE = 3

function formatTransform (transform, format, devicePixelRatio) {
  transform[12] = Math.round(transform[12] * devicePixelRatio) / devicePixelRatio
  transform[13] = Math.round(transform[13] * devicePixelRatio) / devicePixelRatio
  var prefix
  var last
  if (format === TWO) {
    // Example: matrix(1,0,0,0,0,1)
    // Modify via: matrix(a,b,c,d,tx,ty) <= matrix3d(a,b,0,0,c,d,0,0,0,0,1,0,tx,ty,0,1)
    var two = [transform[0], transform[1], transform[4], transform[5], transform[12], transform[13]]
    transform = two
    prefix = 'matrix('
    last = 5
  } else if (format === THREE) {
    // Example: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,716,243,0,1)
    prefix = 'matrix3d('
    last = 15
  }
  for (var i = 0; i < last; i++) {
    prefix += (transform[i] < 0.000001 && transform[i] > -0.000001) ? TRANSFORM_ZILCH : transform[i] + TRANSFORM_COMMA
  }
  prefix += transform[last] + TRANSFORM_SUFFIX
  return prefix
}

module.exports = formatTransform

},{}],28:[function(require,module,exports){
function getFunctionName (fn) {
  if (fn.name) return fn.name
  var str = fn.toString()
  var reg = /function ([^(]*)/
  return reg.exec(str)[1]
}

module.exports = getFunctionName

},{}],29:[function(require,module,exports){
function getTimelineMaxTime (descriptor) {
  var max = 0
  for (var selector in descriptor) {
    var group = descriptor[selector]
    for (var output in group) {
      var keyframes = group[output]
      var keys = Object.keys(keyframes)
      for (var i = 0; i < keys.length; i++) {
        var key = parseInt(keys[i], 10)
        if (key > max) max = key
      }
    }
  }
  return max
}

module.exports = getTimelineMaxTime

},{}],30:[function(require,module,exports){
var compactTransform = require('./compactTransform')

// var CIDENT = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)'

function isEqualTransformString (t1, t2) {
  if (t1 === t2) return true
  if (!t1) return false
  var c1 = compactTransform(t1)
  var c2 = compactTransform(t2)
  if (c1 === c2) return true
  // if (t2 === CIDENT) return true // Historic hack that causes module replacement update issues as of Dec 7 2016
  return false
}

module.exports = isEqualTransformString

},{"./compactTransform":17}],31:[function(require,module,exports){
var objectPath = require('./objectPath')

function flattenTree (list, node, options, depth, index) {
  if (!depth) depth = 0
  if (!index) index = 0

  list.push(node)

  if (typeof node !== 'string') {
    node.__depth = depth
    node.__index = index
  }

  var children = objectPath(node, options.children)
  if (!children || children.length < 1) return list
  if (typeof children === 'string') return list
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      flattenTree(list, children[i], options, depth + 1, i)
    }
  } else if (typeof children === 'object') {
    children.__depth = depth + 1
    children.__index = 0

    list.push(children)
    return list
  }
  return list
}

module.exports = flattenTree

},{"./objectPath":32}],32:[function(require,module,exports){
var STRING = 'string'

function objectPath (obj, key) {
  if (typeof key === STRING) return obj[key]
  var base = obj
  for (var i = 0; i < key.length; i++) {
    var name = key[i]
    base = base[name]
  }
  return base
}

module.exports = objectPath

},{}],33:[function(require,module,exports){
function parseCssValueString (str, optionalPropertyHint) {
  if (typeof str === 'number') {
    return {
      value: str,
      unit: null
    }
  }

  if (str === null || str === undefined) {
    return {
      value: null,
      unit: null
    }
  }

  var num
  var nmatch = str.match(/([+-]?[\d|.]+)/)

  if (nmatch) num = Number(nmatch[0])
  else num = 0

  var unit
  var smatch = str.match(/(em|px|%|turn|deg|in)/)
  if (smatch) {
    unit = smatch[0]
  } else {
    if (optionalPropertyHint && optionalPropertyHint.match(/rotate/)) {
      unit = 'deg'
    } else {
      unit = null
    }
  }
  return {
    value: num,
    unit: unit
  }
}

module.exports = parseCssValueString

},{}],34:[function(require,module,exports){
/**
 * 'Vanities' are functions that provide special handling for applied properties.
 * So for example, if a component wants to apply 'foo.bar'=3 to a <div> in its template,
 * the player/interpreter will look in the vanities dictionary to see if there is a
 * vanity under vanities['div']['foo.bar'], and if so, pass the value 3 into that function.
 * The function, in turn, knows how to apply that value to the virtual element passed into
 * it. In the future these will be defined by components themselves as inputs; for now,
 * we are keeping a whitelist of possible vanity handlers which the renderer directly
 * loads and calls.
 * {
 *   div: {
 *     'foo.bar': function()...
 *   }
 * }
 */

// Just a utility function for populating these objects
function has () {
  var obj = {}
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i]
    for (var name in arg) {
      var fn = arg[name]
      obj[name] = fn
    }
  }
  return obj
}

var clone = require('lodash.clone')
var Layout3D = require('./../../Layout3D')

var LAYOUT_3D_VANITIES = {
  // Layout has a couple of special values that relate to display
  // but not to position:

  'shown': function (name, element, value) {
    element.layout.shown = value
  },
  'opacity': function (name, element, value) {
    element.layout.opacity = value
  },

  // Rotation is a special snowflake since it needs to account for
  // the w-component of the quaternion and carry it

  'rotation.x': function (name, element, value) {
    var rotation = element.layout.rotation
    var x = value
    var y = rotation.y
    var z = rotation.z
    var w = rotation.w
    element.layout.rotation = Layout3D.computeRotationFlexibly(x, y, z, w, rotation)
  },
  'rotation.y': function (name, element, value) {
    var rotation = element.layout.rotation
    var x = rotation.x
    var y = value
    var z = rotation.z
    var w = rotation.w
    element.layout.rotation = Layout3D.computeRotationFlexibly(x, y, z, w, rotation)
  },
  'rotation.z': function (name, element, value) {
    var rotation = element.layout.rotation
    var x = rotation.x
    var y = rotation.y
    var z = value
    var w = rotation.w
    element.layout.rotation = Layout3D.computeRotationFlexibly(x, y, z, w, rotation)
  },
  'rotation.w': function (name, element, value) {
    var rotation = element.layout.rotation
    var x = rotation.x
    var y = rotation.y
    var z = rotation.z
    var w = value
    element.layout.rotation = Layout3D.computeRotationFlexibly(x, y, z, w, rotation)
  },

  // If you really want to set what we call 'position' then
  // we do so on the element's attributes; this is mainly to
  // enable the x/y positioning system for SVG elements

  'position.x': function (name, element, value) {
    element.attributes.x = value
  },
  'position.y': function (name, element, value) {
    element.attributes.y = value
  },

  // Everything that follows is a standard 3-coord component
  // relating to the element's position in space

  'align.x': function (name, element, value) {
    element.layout.align.x = value
  },
  'align.y': function (name, element, value) {
    element.layout.align.y = value
  },
  'align.z': function (name, element, value) {
    element.layout.align.z = value
  },
  'mount.x': function (name, element, value) {
    element.layout.mount.x = value
  },
  'mount.y': function (name, element, value) {
    element.layout.mount.y = value
  },
  'mount.z': function (name, element, value) {
    element.layout.mount.z = value
  },
  'origin.x': function (name, element, value) {
    element.layout.origin.x = value
  },
  'origin.y': function (name, element, value) {
    element.layout.origin.y = value
  },
  'origin.z': function (name, element, value) {
    element.layout.origin.z = value
  },
  'scale.x': function (name, element, value) {
    element.layout.scale.x = value
  },
  'scale.y': function (name, element, value) {
    element.layout.scale.y = value
  },
  'scale.z': function (name, element, value) {
    element.layout.scale.z = value
  },
  'sizeAbsolute.x': function (name, element, value) {
    element.layout.sizeAbsolute.x = value
  },
  'sizeAbsolute.y': function (name, element, value) {
    element.layout.sizeAbsolute.y = value
  },
  'sizeAbsolute.z': function (name, element, value) {
    element.layout.sizeAbsolute.z = value
  },
  'sizeDifferential.x': function (name, element, value) {
    element.layout.sizeDifferential.x = value
  },
  'sizeDifferential.y': function (name, element, value) {
    element.layout.sizeDifferential.y = value
  },
  'sizeDifferential.z': function (name, element, value) {
    element.layout.sizeDifferential.z = value
  },
  'sizeMode.x': function (name, element, value) {
    element.layout.sizeMode.x = value
  },
  'sizeMode.y': function (name, element, value) {
    element.layout.sizeMode.y = value
  },
  'sizeMode.z': function (name, element, value) {
    element.layout.sizeMode.z = value
  },
  'sizeProportional.x': function (name, element, value) {
    element.layout.sizeProportional.x = value
  },
  'sizeProportional.y': function (name, element, value) {
    element.layout.sizeProportional.y = value
  },
  'sizeProportional.z': function (name, element, value) {
    element.layout.sizeProportional.z = value
  },
  'translation.x': function (name, element, value) {
    element.layout.translation.x = value
  },
  'translation.y': function (name, element, value) {
    element.layout.translation.y = value
  },
  'translation.z': function (name, element, value) {
    element.layout.translation.z = value
  }
}

var LAYOUT_2D_VANITIES = clone(LAYOUT_3D_VANITIES)

var STYLE_VANITIES = {
  'style.alignContent': function (name, element, value) { element.attributes.style.alignContent = value },
  'style.alignItems': function (name, element, value) { element.attributes.style.alignItems = value },
  'style.alignmentBaseline': function (name, element, value) { element.attributes.style.alignmentBaseline = value },
  'style.alignSelf': function (name, element, value) { element.attributes.style.alignSelf = value },
  'style.all': function (name, element, value) { element.attributes.style.all = value },
  'style.animation': function (name, element, value) { element.attributes.style.animation = value },
  'style.animationDelay': function (name, element, value) { element.attributes.style.animationDelay = value },
  'style.animationDirection': function (name, element, value) { element.attributes.style.animationDirection = value },
  'style.animationDuration': function (name, element, value) { element.attributes.style.animationDuration = value },
  'style.animationFillMode': function (name, element, value) { element.attributes.style.animationFillMode = value },
  'style.animationIterationCount': function (name, element, value) { element.attributes.style.animationIterationCount = value },
  'style.animationName': function (name, element, value) { element.attributes.style.animationName = value },
  'style.animationPlayState': function (name, element, value) { element.attributes.style.animationPlayState = value },
  'style.animationTimingFunction': function (name, element, value) { element.attributes.style.animationTimingFunction = value },
  'style.appearance': function (name, element, value) { element.attributes.style.appearance = value },
  'style.azimuth': function (name, element, value) { element.attributes.style.azimuth = value },
  'style.backfaceVisibility': function (name, element, value) { element.attributes.style.backfaceVisibility = value },
  'style.background': function (name, element, value) { element.attributes.style.background = value },
  'style.backgroundAttachment': function (name, element, value) { element.attributes.style.backgroundAttachment = value },
  'style.backgroundBlendMode': function (name, element, value) { element.attributes.style.backgroundBlendMode = value },
  'style.backgroundClip': function (name, element, value) { element.attributes.style.backgroundClip = value },
  'style.backgroundColor': function (name, element, value) { element.attributes.style.backgroundColor = value },
  'style.backgroundimage': function (name, element, value) { element.attributes.style.backgroundimage = value },
  'style.backgroundorigin': function (name, element, value) { element.attributes.style.backgroundorigin = value },
  'style.backgroundposition': function (name, element, value) { element.attributes.style.backgroundposition = value },
  'style.backgroundRepeat': function (name, element, value) { element.attributes.style.backgroundRepeat = value },
  'style.backgroundSize': function (name, element, value) { element.attributes.style.backgroundSize = value },
  'style.baselineShift': function (name, element, value) { element.attributes.style.baselineShift = value },
  'style.bookmarkLabel': function (name, element, value) { element.attributes.style.bookmarkLabel = value },
  'style.bookmarkLevel': function (name, element, value) { element.attributes.style.bookmarkLevel = value },
  'style.bookmarkState': function (name, element, value) { element.attributes.style.bookmarkState = value },
  'style.border': function (name, element, value) { element.attributes.style.border = value },
  'style.borderBottom': function (name, element, value) { element.attributes.style.borderBottom = value },
  'style.borderBottomColor': function (name, element, value) { element.attributes.style.borderBottomColor = value },
  'style.borderBottomLeftRadius': function (name, element, value) { element.attributes.style.borderBottomLeftRadius = value },
  'style.borderBottomRightRadius': function (name, element, value) { element.attributes.style.borderBottomRightRadius = value },
  'style.borderBottomStyle': function (name, element, value) { element.attributes.style.borderBottomStyle = value },
  'style.borderBottomWidth': function (name, element, value) { element.attributes.style.borderBottomWidth = value },
  'style.borderBoundary': function (name, element, value) { element.attributes.style.borderBoundary = value },
  'style.borderCollapse': function (name, element, value) { element.attributes.style.borderCollapse = value },
  'style.borderColor': function (name, element, value) { element.attributes.style.borderColor = value },
  'style.borderImage': function (name, element, value) { element.attributes.style.borderImage = value },
  'style.borderImageOutset': function (name, element, value) { element.attributes.style.borderImageOutset = value },
  'style.borderImageRepeat': function (name, element, value) { element.attributes.style.borderImageRepeat = value },
  'style.borderImageSlice': function (name, element, value) { element.attributes.style.borderImageSlice = value },
  'style.borderImageSource': function (name, element, value) { element.attributes.style.borderImageSource = value },
  'style.borderImageWidth': function (name, element, value) { element.attributes.style.borderImageWidth = value },
  'style.borderLeft': function (name, element, value) { element.attributes.style.borderLeft = value },
  'style.borderLeftColor': function (name, element, value) { element.attributes.style.borderLeftColor = value },
  'style.borderLeftStyle': function (name, element, value) { element.attributes.style.borderLeftStyle = value },
  'style.borderLeftWidth': function (name, element, value) { element.attributes.style.borderLeftWidth = value },
  'style.borderRadius': function (name, element, value) { element.attributes.style.borderRadius = value },
  'style.borderRight': function (name, element, value) { element.attributes.style.borderRight = value },
  'style.borderRightColor': function (name, element, value) { element.attributes.style.borderRightColor = value },
  'style.borderRightStyle': function (name, element, value) { element.attributes.style.borderRightStyle = value },
  'style.borderRightWidth': function (name, element, value) { element.attributes.style.borderRightWidth = value },
  'style.borderSpacing': function (name, element, value) { element.attributes.style.borderSpacing = value },
  'style.borderStyle': function (name, element, value) { element.attributes.style.borderStyle = value },
  'style.borderTop': function (name, element, value) { element.attributes.style.borderTop = value },
  'style.borderTopColor': function (name, element, value) { element.attributes.style.borderTopColor = value },
  'style.borderTopLeftRadius': function (name, element, value) { element.attributes.style.borderTopLeftRadius = value },
  'style.borderTopRightRadius': function (name, element, value) { element.attributes.style.borderTopRightRadius = value },
  'style.borderTopStyle': function (name, element, value) { element.attributes.style.borderTopStyle = value },
  'style.borderTopWidth': function (name, element, value) { element.attributes.style.borderTopWidth = value },
  'style.borderWidth': function (name, element, value) { element.attributes.style.borderWidth = value },
  'style.bottom': function (name, element, value) { element.attributes.style.bottom = value },
  'style.boxDecorationBreak': function (name, element, value) { element.attributes.style.boxDecorationBreak = value },
  'style.boxShadow': function (name, element, value) { element.attributes.style.boxShadow = value },
  'style.boxSizing': function (name, element, value) { element.attributes.style.boxSizing = value },
  'style.boxSnap': function (name, element, value) { element.attributes.style.boxSnap = value },
  'style.boxSuppress': function (name, element, value) { element.attributes.style.boxSuppress = value },
  'style.breakAfter': function (name, element, value) { element.attributes.style.breakAfter = value },
  'style.breakBefore': function (name, element, value) { element.attributes.style.breakBefore = value },
  'style.breakInside': function (name, element, value) { element.attributes.style.breakInside = value },
  'style.captionSide': function (name, element, value) { element.attributes.style.captionSide = value },
  'style.caret': function (name, element, value) { element.attributes.style.caret = value },
  'style.caretAnimation': function (name, element, value) { element.attributes.style.caretAnimation = value },
  'style.caretColor': function (name, element, value) { element.attributes.style.caretColor = value },
  'style.caretShape': function (name, element, value) { element.attributes.style.caretShape = value },
  'style.chains': function (name, element, value) { element.attributes.style.chains = value },
  'style.clear': function (name, element, value) { element.attributes.style.clear = value },
  'style.clip': function (name, element, value) { element.attributes.style.clip = value },
  'style.clipPath': function (name, element, value) { element.attributes.style.clipPath = value },
  'style.clipRule': function (name, element, value) { element.attributes.style.clipRule = value },
  'style.color': function (name, element, value) { element.attributes.style.color = value },
  'style.colorAdjust': function (name, element, value) { element.attributes.style.colorAdjust = value },
  'style.colorInterpolation': function (name, element, value) { element.attributes.style.colorInterpolation = value },
  'style.colorInterpolationFilters': function (name, element, value) { element.attributes.style.colorInterpolationFilters = value },
  'style.colorProfile': function (name, element, value) { element.attributes.style.colorProfile = value },
  'style.colorRendering': function (name, element, value) { element.attributes.style.colorRendering = value },
  'style.columnCount': function (name, element, value) { element.attributes.style.columnCount = value },
  'style.columnFill': function (name, element, value) { element.attributes.style.columnFill = value },
  'style.columnGap': function (name, element, value) { element.attributes.style.columnGap = value },
  'style.columnRule': function (name, element, value) { element.attributes.style.columnRule = value },
  'style.columnRuleColor': function (name, element, value) { element.attributes.style.columnRuleColor = value },
  'style.columnRuleStyle': function (name, element, value) { element.attributes.style.columnRuleStyle = value },
  'style.columnRuleWidth': function (name, element, value) { element.attributes.style.columnRuleWidth = value },
  'style.columns': function (name, element, value) { element.attributes.style.columns = value },
  'style.columnSpan': function (name, element, value) { element.attributes.style.columnSpan = value },
  'style.columnWidth': function (name, element, value) { element.attributes.style.columnWidth = value },
  'style.content': function (name, element, value) { element.attributes.style.content = value },
  'style.continue': function (name, element, value) { element.attributes.style.continue = value },
  'style.counterIncrement': function (name, element, value) { element.attributes.style.counterIncrement = value },
  'style.counterReset': function (name, element, value) { element.attributes.style.counterReset = value },
  'style.counterSet': function (name, element, value) { element.attributes.style.counterSet = value },
  'style.cue': function (name, element, value) { element.attributes.style.cue = value },
  'style.cueAfter': function (name, element, value) { element.attributes.style.cueAfter = value },
  'style.cueBefore': function (name, element, value) { element.attributes.style.cueBefore = value },
  'style.cursor': function (name, element, value) { element.attributes.style.cursor = value },
  'style.direction': function (name, element, value) { element.attributes.style.direction = value },
  'style.display': function (name, element, value) { element.attributes.style.display = value },
  'style.dominantBaseline': function (name, element, value) { element.attributes.style.dominantBaseline = value },
  'style.elevation': function (name, element, value) { element.attributes.style.elevation = value },
  'style.emptyCells': function (name, element, value) { element.attributes.style.emptyCells = value },
  'style.enableBackground': function (name, element, value) { element.attributes.style.enableBackground = value },
  'style.fill': function (name, element, value) { element.attributes.style.fill = value },
  'style.fillOpacity': function (name, element, value) { element.attributes.style.fillOpacity = value },
  'style.fillRule': function (name, element, value) { element.attributes.style.fillRule = value },
  'style.filter': function (name, element, value) { element.attributes.style.filter = value },
  'style.flex': function (name, element, value) { element.attributes.style.flex = value },
  'style.flexBasis': function (name, element, value) { element.attributes.style.flexBasis = value },
  'style.flexDirection': function (name, element, value) { element.attributes.style.flexDirection = value },
  'style.flexFlow': function (name, element, value) { element.attributes.style.flexFlow = value },
  'style.flexGrow': function (name, element, value) { element.attributes.style.flexGrow = value },
  'style.flexShrink': function (name, element, value) { element.attributes.style.flexShrink = value },
  'style.flexWrap': function (name, element, value) { element.attributes.style.flexWrap = value },
  'style.float': function (name, element, value) { element.attributes.style.float = value },
  'style.floatDefer': function (name, element, value) { element.attributes.style.floatDefer = value },
  'style.floatOffset': function (name, element, value) { element.attributes.style.floatOffset = value },
  'style.floatReference': function (name, element, value) { element.attributes.style.floatReference = value },
  'style.floodColor': function (name, element, value) { element.attributes.style.floodColor = value },
  'style.floodOpacity': function (name, element, value) { element.attributes.style.floodOpacity = value },
  'style.flow': function (name, element, value) { element.attributes.style.flow = value },
  'style.flowFrom': function (name, element, value) { element.attributes.style.flowFrom = value },
  'style.flowInto': function (name, element, value) { element.attributes.style.flowInto = value },
  'style.font': function (name, element, value) { element.attributes.style.font = value },
  'style.fontFamily': function (name, element, value) { element.attributes.style.fontFamily = value },
  'style.fontFeatureSettings': function (name, element, value) { element.attributes.style.fontFeatureSettings = value },
  'style.fontKerning': function (name, element, value) { element.attributes.style.fontKerning = value },
  'style.fontLanguageOverride': function (name, element, value) { element.attributes.style.fontLanguageOverride = value },
  'style.fontSize': function (name, element, value) { element.attributes.style.fontSize = value },
  'style.fontSizeAdjust': function (name, element, value) { element.attributes.style.fontSizeAdjust = value },
  'style.fontStretch': function (name, element, value) { element.attributes.style.fontStretch = value },
  'style.fontStyle': function (name, element, value) { element.attributes.style.fontStyle = value },
  'style.fontSynthesis': function (name, element, value) { element.attributes.style.fontSynthesis = value },
  'style.fontVariant': function (name, element, value) { element.attributes.style.fontVariant = value },
  'style.fontVariantAlternates': function (name, element, value) { element.attributes.style.fontVariantAlternates = value },
  'style.fontVariantCaps': function (name, element, value) { element.attributes.style.fontVariantCaps = value },
  'style.fontVariantEastAsian': function (name, element, value) { element.attributes.style.fontVariantEastAsian = value },
  'style.fontVariantLigatures': function (name, element, value) { element.attributes.style.fontVariantLigatures = value },
  'style.fontVariantNumeric': function (name, element, value) { element.attributes.style.fontVariantNumeric = value },
  'style.fontVariantPosition': function (name, element, value) { element.attributes.style.fontVariantPosition = value },
  'style.fontWeight': function (name, element, value) { element.attributes.style.fontWeight = value },
  'style.footnoteDisplay': function (name, element, value) { element.attributes.style.footnoteDisplay = value },
  'style.footnotePolicy': function (name, element, value) { element.attributes.style.footnotePolicy = value },
  'style.glyphOrientationHorizontal': function (name, element, value) { element.attributes.style.glyphOrientationHorizontal = value },
  'style.glyphOrientationVertical': function (name, element, value) { element.attributes.style.glyphOrientationVertical = value },
  'style.grid': function (name, element, value) { element.attributes.style.grid = value },
  'style.gridArea': function (name, element, value) { element.attributes.style.gridArea = value },
  'style.gridAutoColumns': function (name, element, value) { element.attributes.style.gridAutoColumns = value },
  'style.gridAutoFlow': function (name, element, value) { element.attributes.style.gridAutoFlow = value },
  'style.gridAutoRows': function (name, element, value) { element.attributes.style.gridAutoRows = value },
  'style.gridColumn': function (name, element, value) { element.attributes.style.gridColumn = value },
  'style.gridColumnEnd': function (name, element, value) { element.attributes.style.gridColumnEnd = value },
  'style.gridColumnGap': function (name, element, value) { element.attributes.style.gridColumnGap = value },
  'style.gridColumnStart': function (name, element, value) { element.attributes.style.gridColumnStart = value },
  'style.gridGap': function (name, element, value) { element.attributes.style.gridGap = value },
  'style.gridRow': function (name, element, value) { element.attributes.style.gridRow = value },
  'style.gridRowEnd': function (name, element, value) { element.attributes.style.gridRowEnd = value },
  'style.gridRowGap': function (name, element, value) { element.attributes.style.gridRowGap = value },
  'style.gridRowStart': function (name, element, value) { element.attributes.style.gridRowStart = value },
  'style.gridTemplate': function (name, element, value) { element.attributes.style.gridTemplate = value },
  'style.gridTemplateAreas': function (name, element, value) { element.attributes.style.gridTemplateAreas = value },
  'style.gridTemplateColumns': function (name, element, value) { element.attributes.style.gridTemplateColumns = value },
  'style.gridTemplateRows': function (name, element, value) { element.attributes.style.gridTemplateRows = value },
  'style.hangingPunctuation': function (name, element, value) { element.attributes.style.hangingPunctuation = value },
  'style.height': function (name, element, value) { element.attributes.style.height = value },
  'style.hyphenateCharacter': function (name, element, value) { element.attributes.style.hyphenateCharacter = value },
  'style.hyphenateLimitChars': function (name, element, value) { element.attributes.style.hyphenateLimitChars = value },
  'style.hyphenateLimitLast': function (name, element, value) { element.attributes.style.hyphenateLimitLast = value },
  'style.hyphenateLimitLines': function (name, element, value) { element.attributes.style.hyphenateLimitLines = value },
  'style.hyphenateLimitZone': function (name, element, value) { element.attributes.style.hyphenateLimitZone = value },
  'style.hyphens': function (name, element, value) { element.attributes.style.hyphens = value },
  'style.imageOrientation': function (name, element, value) { element.attributes.style.imageOrientation = value },
  'style.imageRendering': function (name, element, value) { element.attributes.style.imageRendering = value },
  'style.imageResolution': function (name, element, value) { element.attributes.style.imageResolution = value },
  'style.initialLetter': function (name, element, value) { element.attributes.style.initialLetter = value },
  'style.initialLetterAlign': function (name, element, value) { element.attributes.style.initialLetterAlign = value },
  'style.initialLetterWrap': function (name, element, value) { element.attributes.style.initialLetterWrap = value },
  'style.isolation': function (name, element, value) { element.attributes.style.isolation = value },
  'style.justifyContent': function (name, element, value) { element.attributes.style.justifyContent = value },
  'style.justifyItems': function (name, element, value) { element.attributes.style.justifyItems = value },
  'style.justifySelf': function (name, element, value) { element.attributes.style.justifySelf = value },
  'style.kerning': function (name, element, value) { element.attributes.style.kerning = value },
  'style.left': function (name, element, value) { element.attributes.style.left = value },
  'style.letterSpacing': function (name, element, value) { element.attributes.style.letterSpacing = value },
  'style.lightingColor': function (name, element, value) { element.attributes.style.lightingColor = value },
  'style.lineBreak': function (name, element, value) { element.attributes.style.lineBreak = value },
  'style.lineGrid': function (name, element, value) { element.attributes.style.lineGrid = value },
  'style.lineHeight': function (name, element, value) { element.attributes.style.lineHeight = value },
  'style.lineSnap': function (name, element, value) { element.attributes.style.lineSnap = value },
  'style.listStyle': function (name, element, value) { element.attributes.style.listStyle = value },
  'style.listStyleImage': function (name, element, value) { element.attributes.style.listStyleImage = value },
  'style.listStylePosition': function (name, element, value) { element.attributes.style.listStylePosition = value },
  'style.listStyleType': function (name, element, value) { element.attributes.style.listStyleType = value },
  'style.margin': function (name, element, value) { element.attributes.style.margin = value },
  'style.marginBottom': function (name, element, value) { element.attributes.style.marginBottom = value },
  'style.marginLeft': function (name, element, value) { element.attributes.style.marginLeft = value },
  'style.marginRight': function (name, element, value) { element.attributes.style.marginRight = value },
  'style.marginTop': function (name, element, value) { element.attributes.style.marginTop = value },
  'style.marker': function (name, element, value) { element.attributes.style.marker = value },
  'style.markerEnd': function (name, element, value) { element.attributes.style.markerEnd = value },
  'style.markerKnockoutLeft': function (name, element, value) { element.attributes.style.markerKnockoutLeft = value },
  'style.markerKnockoutRight': function (name, element, value) { element.attributes.style.markerKnockoutRight = value },
  'style.markerMid': function (name, element, value) { element.attributes.style.markerMid = value },
  'style.markerPattern': function (name, element, value) { element.attributes.style.markerPattern = value },
  'style.markerSegment': function (name, element, value) { element.attributes.style.markerSegment = value },
  'style.markerSide': function (name, element, value) { element.attributes.style.markerSide = value },
  'style.markerStart': function (name, element, value) { element.attributes.style.markerStart = value },
  'style.marqueeDirection': function (name, element, value) { element.attributes.style.marqueeDirection = value },
  'style.marqueeLoop': function (name, element, value) { element.attributes.style.marqueeLoop = value },
  'style.marqueeSpeed': function (name, element, value) { element.attributes.style.marqueeSpeed = value },
  'style.marqueeStyle': function (name, element, value) { element.attributes.style.marqueeStyle = value },
  'style.mask': function (name, element, value) { element.attributes.style.mask = value },
  'style.maskBorder': function (name, element, value) { element.attributes.style.maskBorder = value },
  'style.maskBorderMode': function (name, element, value) { element.attributes.style.maskBorderMode = value },
  'style.maskBorderOutset': function (name, element, value) { element.attributes.style.maskBorderOutset = value },
  'style.maskBorderRepeat': function (name, element, value) { element.attributes.style.maskBorderRepeat = value },
  'style.maskBorderSlice': function (name, element, value) { element.attributes.style.maskBorderSlice = value },
  'style.maskBorderSource': function (name, element, value) { element.attributes.style.maskBorderSource = value },
  'style.maskBorderWidth': function (name, element, value) { element.attributes.style.maskBorderWidth = value },
  'style.maskClip': function (name, element, value) { element.attributes.style.maskClip = value },
  'style.maskComposite': function (name, element, value) { element.attributes.style.maskComposite = value },
  'style.maskImage': function (name, element, value) { element.attributes.style.maskImage = value },
  'style.maskMode': function (name, element, value) { element.attributes.style.maskMode = value },
  'style.maskOrigin': function (name, element, value) { element.attributes.style.maskOrigin = value },
  'style.maskPosition': function (name, element, value) { element.attributes.style.maskPosition = value },
  'style.maskRepeat': function (name, element, value) { element.attributes.style.maskRepeat = value },
  'style.maskSize': function (name, element, value) { element.attributes.style.maskSize = value },
  'style.maskType': function (name, element, value) { element.attributes.style.maskType = value },
  'style.maxHeight': function (name, element, value) { element.attributes.style.maxHeight = value },
  'style.maxLines': function (name, element, value) { element.attributes.style.maxLines = value },
  'style.maxWidth': function (name, element, value) { element.attributes.style.maxWidth = value },
  'style.minHeight': function (name, element, value) { element.attributes.style.minHeight = value },
  'style.minWidth': function (name, element, value) { element.attributes.style.minWidth = value },
  'style.mixBlendMode': function (name, element, value) { element.attributes.style.mixBlendMode = value },
  'style.motion': function (name, element, value) { element.attributes.style.motion = value },
  'style.motionOffset': function (name, element, value) { element.attributes.style.motionOffset = value },
  'style.motionPath': function (name, element, value) { element.attributes.style.motionPath = value },
  'style.motionRotation': function (name, element, value) { element.attributes.style.motionRotation = value },
  'style.navDown': function (name, element, value) { element.attributes.style.navDown = value },
  'style.navLeft': function (name, element, value) { element.attributes.style.navLeft = value },
  'style.navRight': function (name, element, value) { element.attributes.style.navRight = value },
  'style.navUp': function (name, element, value) { element.attributes.style.navUp = value },
  'style.objectFit': function (name, element, value) { element.attributes.style.objectFit = value },
  'style.objectPosition': function (name, element, value) { element.attributes.style.objectPosition = value },
  'style.offset': function (name, element, value) { element.attributes.style.offset = value },
  'style.offsetAfter': function (name, element, value) { element.attributes.style.offsetAfter = value },
  'style.offsetAnchor': function (name, element, value) { element.attributes.style.offsetAnchor = value },
  'style.offsetBefore': function (name, element, value) { element.attributes.style.offsetBefore = value },
  'style.offsetDistance': function (name, element, value) { element.attributes.style.offsetDistance = value },
  'style.offsetEnd': function (name, element, value) { element.attributes.style.offsetEnd = value },
  'style.offsetPath': function (name, element, value) { element.attributes.style.offsetPath = value },
  'style.offsetPosition': function (name, element, value) { element.attributes.style.offsetPosition = value },
  'style.offsetRotate': function (name, element, value) { element.attributes.style.offsetRotate = value },
  'style.offsetStart': function (name, element, value) { element.attributes.style.offsetStart = value },
  'style.opacity': function (name, element, value) { element.attributes.style.opacity = value },
  'style.order': function (name, element, value) { element.attributes.style.order = value },
  'style.orphans': function (name, element, value) { element.attributes.style.orphans = value },
  'style.outline': function (name, element, value) { element.attributes.style.outline = value },
  'style.outlineColor': function (name, element, value) { element.attributes.style.outlineColor = value },
  'style.outlineOffset': function (name, element, value) { element.attributes.style.outlineOffset = value },
  'style.outlineStyle': function (name, element, value) { element.attributes.style.outlineStyle = value },
  'style.outlineWidth': function (name, element, value) { element.attributes.style.outlineWidth = value },
  'style.overflow': function (name, element, value) { element.attributes.style.overflow = value },
  'style.overflowStyle': function (name, element, value) { element.attributes.style.overflowStyle = value },
  'style.overflowWrap': function (name, element, value) { element.attributes.style.overflowWrap = value },
  'style.overflowX': function (name, element, value) { element.attributes.style.overflowX = value },
  'style.overflowY': function (name, element, value) { element.attributes.style.overflowY = value },
  'style.padding': function (name, element, value) { element.attributes.style.padding = value },
  'style.paddingBottom': function (name, element, value) { element.attributes.style.paddingBottom = value },
  'style.paddingLeft': function (name, element, value) { element.attributes.style.paddingLeft = value },
  'style.paddingRight': function (name, element, value) { element.attributes.style.paddingRight = value },
  'style.paddingTop': function (name, element, value) { element.attributes.style.paddingTop = value },
  'style.page': function (name, element, value) { element.attributes.style.page = value },
  'style.pageBreakAfter': function (name, element, value) { element.attributes.style.pageBreakAfter = value },
  'style.pageBreakBefore': function (name, element, value) { element.attributes.style.pageBreakBefore = value },
  'style.pageBreakInside': function (name, element, value) { element.attributes.style.pageBreakInside = value },
  'style.pause': function (name, element, value) { element.attributes.style.pause = value },
  'style.pauseAfter': function (name, element, value) { element.attributes.style.pauseAfter = value },
  'style.pauseBefore': function (name, element, value) { element.attributes.style.pauseBefore = value },
  'style.perspective': function (name, element, value) { element.attributes.style.perspective = value },
  'style.perspectiveOrigin': function (name, element, value) { element.attributes.style.perspectiveOrigin = value },
  'style.pitch': function (name, element, value) { element.attributes.style.pitch = value },
  'style.pitchRange': function (name, element, value) { element.attributes.style.pitchRange = value },
  'style.placeContent': function (name, element, value) { element.attributes.style.placeContent = value },
  'style.placeItems': function (name, element, value) { element.attributes.style.placeItems = value },
  'style.placeSelf': function (name, element, value) { element.attributes.style.placeSelf = value },
  'style.playDuring': function (name, element, value) { element.attributes.style.playDuring = value },
  'style.pointerEvents': function (name, element, value) { element.attributes.style.pointerEvents = value },
  'style.polarAnchor': function (name, element, value) { element.attributes.style.polarAnchor = value },
  'style.polarAngle': function (name, element, value) { element.attributes.style.polarAngle = value },
  'style.polarDistance': function (name, element, value) { element.attributes.style.polarDistance = value },
  'style.polarOrigin': function (name, element, value) { element.attributes.style.polarOrigin = value },
  'style.position': function (name, element, value) { element.attributes.style.position = value },
  'style.presentationLevel': function (name, element, value) { element.attributes.style.presentationLevel = value },
  'style.quotes': function (name, element, value) { element.attributes.style.quotes = value },
  'style.regionFragment': function (name, element, value) { element.attributes.style.regionFragment = value },
  'style.resize': function (name, element, value) { element.attributes.style.resize = value },
  'style.rest': function (name, element, value) { element.attributes.style.rest = value },
  'style.restAfter': function (name, element, value) { element.attributes.style.restAfter = value },
  'style.restBefore': function (name, element, value) { element.attributes.style.restBefore = value },
  'style.richness': function (name, element, value) { element.attributes.style.richness = value },
  'style.right': function (name, element, value) { element.attributes.style.right = value },
  'style.rotation': function (name, element, value) { element.attributes.style.rotation = value },
  'style.rotationPoint': function (name, element, value) { element.attributes.style.rotationPoint = value },
  'style.rubyAlign': function (name, element, value) { element.attributes.style.rubyAlign = value },
  'style.rubyMerge': function (name, element, value) { element.attributes.style.rubyMerge = value },
  'style.rubyPosition': function (name, element, value) { element.attributes.style.rubyPosition = value },
  'style.running': function (name, element, value) { element.attributes.style.running = value },
  'style.scrollBehavior': function (name, element, value) { element.attributes.style.scrollBehavior = value },
  'style.scrollPadding': function (name, element, value) { element.attributes.style.scrollPadding = value },
  'style.scrollPaddingBlock': function (name, element, value) { element.attributes.style.scrollPaddingBlock = value },
  'style.scrollPaddingBlockEnd': function (name, element, value) { element.attributes.style.scrollPaddingBlockEnd = value },
  'style.scrollPaddingBlockStart': function (name, element, value) { element.attributes.style.scrollPaddingBlockStart = value },
  'style.scrollPaddingBottom': function (name, element, value) { element.attributes.style.scrollPaddingBottom = value },
  'style.scrollPaddingInline': function (name, element, value) { element.attributes.style.scrollPaddingInline = value },
  'style.scrollPaddingInlineEnd': function (name, element, value) { element.attributes.style.scrollPaddingInlineEnd = value },
  'style.scrollPaddingInlineStart': function (name, element, value) { element.attributes.style.scrollPaddingInlineStart = value },
  'style.scrollPaddingLeft': function (name, element, value) { element.attributes.style.scrollPaddingLeft = value },
  'style.scrollPaddingRight': function (name, element, value) { element.attributes.style.scrollPaddingRight = value },
  'style.scrollPaddingTop': function (name, element, value) { element.attributes.style.scrollPaddingTop = value },
  'style.scrollSnapAlign': function (name, element, value) { element.attributes.style.scrollSnapAlign = value },
  'style.scrollSnapMargin': function (name, element, value) { element.attributes.style.scrollSnapMargin = value },
  'style.scrollSnapMarginBlock': function (name, element, value) { element.attributes.style.scrollSnapMarginBlock = value },
  'style.scrollSnapMarginBlockEnd': function (name, element, value) { element.attributes.style.scrollSnapMarginBlockEnd = value },
  'style.scrollSnapMarginBlockStart': function (name, element, value) { element.attributes.style.scrollSnapMarginBlockStart = value },
  'style.scrollSnapMarginBottom': function (name, element, value) { element.attributes.style.scrollSnapMarginBottom = value },
  'style.scrollSnapMarginInline': function (name, element, value) { element.attributes.style.scrollSnapMarginInline = value },
  'style.scrollSnapMarginInlineEnd': function (name, element, value) { element.attributes.style.scrollSnapMarginInlineEnd = value },
  'style.scrollSnapMarginInlineStart': function (name, element, value) { element.attributes.style.scrollSnapMarginInlineStart = value },
  'style.scrollSnapMarginLeft': function (name, element, value) { element.attributes.style.scrollSnapMarginLeft = value },
  'style.scrollSnapMarginRight': function (name, element, value) { element.attributes.style.scrollSnapMarginRight = value },
  'style.scrollSnapMarginTop': function (name, element, value) { element.attributes.style.scrollSnapMarginTop = value },
  'style.scrollSnapStop': function (name, element, value) { element.attributes.style.scrollSnapStop = value },
  'style.scrollSnapType': function (name, element, value) { element.attributes.style.scrollSnapType = value },
  'style.shapeImageThreshold': function (name, element, value) { element.attributes.style.shapeImageThreshold = value },
  'style.shapeInside': function (name, element, value) { element.attributes.style.shapeInside = value },
  'style.shapeMargin': function (name, element, value) { element.attributes.style.shapeMargin = value },
  'style.shapeOutside': function (name, element, value) { element.attributes.style.shapeOutside = value },
  'style.shapeRendering': function (name, element, value) { element.attributes.style.shapeRendering = value },
  'style.size': function (name, element, value) { element.attributes.style.size = value },
  'style.speak': function (name, element, value) { element.attributes.style.speak = value },
  'style.speakAs': function (name, element, value) { element.attributes.style.speakAs = value },
  'style.speakHeader': function (name, element, value) { element.attributes.style.speakHeader = value },
  'style.speakNumeral': function (name, element, value) { element.attributes.style.speakNumeral = value },
  'style.speakPunctuation': function (name, element, value) { element.attributes.style.speakPunctuation = value },
  'style.speechRate': function (name, element, value) { element.attributes.style.speechRate = value },
  'style.stopColor': function (name, element, value) { element.attributes.style.stopColor = value },
  'style.stopOpacity': function (name, element, value) { element.attributes.style.stopOpacity = value },
  'style.stress': function (name, element, value) { element.attributes.style.stress = value },
  'style.stringSet': function (name, element, value) { element.attributes.style.stringSet = value },
  'style.stroke': function (name, element, value) { element.attributes.style.stroke = value },
  'style.strokeAlignment': function (name, element, value) { element.attributes.style.strokeAlignment = value },
  'style.strokeDashadjust': function (name, element, value) { element.attributes.style.strokeDashadjust = value },
  'style.strokeDasharray': function (name, element, value) { element.attributes.style.strokeDasharray = value },
  'style.strokeDashcorner': function (name, element, value) { element.attributes.style.strokeDashcorner = value },
  'style.strokeDashoffset': function (name, element, value) { element.attributes.style.strokeDashoffset = value },
  'style.strokeLinecap': function (name, element, value) { element.attributes.style.strokeLinecap = value },
  'style.strokeLinejoin': function (name, element, value) { element.attributes.style.strokeLinejoin = value },
  'style.strokeMiterlimit': function (name, element, value) { element.attributes.style.strokeMiterlimit = value },
  'style.strokeOpacity': function (name, element, value) { element.attributes.style.strokeOpacity = value },
  'style.strokeWidth': function (name, element, value) { element.attributes.style.strokeWidth = value },
  'style.tableLayout': function (name, element, value) { element.attributes.style.tableLayout = value },
  'style.tabSize': function (name, element, value) { element.attributes.style.tabSize = value },
  'style.textAlign': function (name, element, value) { element.attributes.style.textAlign = value },
  'style.textAlignAll': function (name, element, value) { element.attributes.style.textAlignAll = value },
  'style.textAlignLast': function (name, element, value) { element.attributes.style.textAlignLast = value },
  'style.textAnchor': function (name, element, value) { element.attributes.style.textAnchor = value },
  'style.textCombineUpright': function (name, element, value) { element.attributes.style.textCombineUpright = value },
  'style.textDecoration': function (name, element, value) { element.attributes.style.textDecoration = value },
  'style.textDecorationColor': function (name, element, value) { element.attributes.style.textDecorationColor = value },
  'style.textDecorationLine': function (name, element, value) { element.attributes.style.textDecorationLine = value },
  'style.textDecorationSkip': function (name, element, value) { element.attributes.style.textDecorationSkip = value },
  'style.textDecorationStyle': function (name, element, value) { element.attributes.style.textDecorationStyle = value },
  'style.textEmphasis': function (name, element, value) { element.attributes.style.textEmphasis = value },
  'style.textEmphasisColor': function (name, element, value) { element.attributes.style.textEmphasisColor = value },
  'style.textEmphasisPosition': function (name, element, value) { element.attributes.style.textEmphasisPosition = value },
  'style.textEmphasisStyle': function (name, element, value) { element.attributes.style.textEmphasisStyle = value },
  'style.textIndent': function (name, element, value) { element.attributes.style.textIndent = value },
  'style.textJustify': function (name, element, value) { element.attributes.style.textJustify = value },
  'style.textOrientation': function (name, element, value) { element.attributes.style.textOrientation = value },
  'style.textOverflow': function (name, element, value) { element.attributes.style.textOverflow = value },
  'style.textRendering': function (name, element, value) { element.attributes.style.textRendering = value },
  'style.textShadow': function (name, element, value) { element.attributes.style.textShadow = value },
  'style.textSpaceCollapse': function (name, element, value) { element.attributes.style.textSpaceCollapse = value },
  'style.textSpaceTrim': function (name, element, value) { element.attributes.style.textSpaceTrim = value },
  'style.textSpacing': function (name, element, value) { element.attributes.style.textSpacing = value },
  'style.textTransform': function (name, element, value) { element.attributes.style.textTransform = value },
  'style.textUnderlinePosition': function (name, element, value) { element.attributes.style.textUnderlinePosition = value },
  'style.textWrap': function (name, element, value) { element.attributes.style.textWrap = value },
  'style.top': function (name, element, value) { element.attributes.style.top = value },
  'style.transform': function (name, element, value) { element.attributes.style.transform = value },
  'style.transformBox': function (name, element, value) { element.attributes.style.transformBox = value },
  'style.transformOrigin': function (name, element, value) { element.attributes.style.transformOrigin = value },
  'style.transformStyle': function (name, element, value) { element.attributes.style.transformStyle = value },
  'style.transition': function (name, element, value) { element.attributes.style.transition = value },
  'style.transitionDelay': function (name, element, value) { element.attributes.style.transitionDelay = value },
  'style.transitionDuration': function (name, element, value) { element.attributes.style.transitionDuration = value },
  'style.transitionProperty': function (name, element, value) { element.attributes.style.transitionProperty = value },
  'style.transitionTimingFunction': function (name, element, value) { element.attributes.style.transitionTimingFunction = value },
  'style.unicodeBidi': function (name, element, value) { element.attributes.style.unicodeBidi = value },
  'style.userSelect': function (name, element, value) { element.attributes.style.userSelect = value },
  'style.verticalAlign': function (name, element, value) { element.attributes.style.verticalAlign = value },
  'style.visibility': function (name, element, value) { element.attributes.style.visibility = value },
  'style.voiceBalance': function (name, element, value) { element.attributes.style.voiceBalance = value },
  'style.voiceDuration': function (name, element, value) { element.attributes.style.voiceDuration = value },
  'style.voiceFamily': function (name, element, value) { element.attributes.style.voiceFamily = value },
  'style.voicePitch': function (name, element, value) { element.attributes.style.voicePitch = value },
  'style.voiceRange': function (name, element, value) { element.attributes.style.voiceRange = value },
  'style.voiceRate': function (name, element, value) { element.attributes.style.voiceRate = value },
  'style.voiceStress': function (name, element, value) { element.attributes.style.voiceStress = value },
  'style.voiceVolume': function (name, element, value) { element.attributes.style.voiceVolume = value },
  'style.volume': function (name, element, value) { element.attributes.style.volume = value },
  'style.whiteSpace': function (name, element, value) { element.attributes.style.whiteSpace = value },
  'style.widows': function (name, element, value) { element.attributes.style.widows = value },
  'style.width': function (name, element, value) { element.attributes.style.width = value },
  'style.willChange': function (name, element, value) { element.attributes.style.willChange = value },
  'style.wordBreak': function (name, element, value) { element.attributes.style.wordBreak = value },
  'style.wordSpacing': function (name, element, value) { element.attributes.style.wordSpacing = value },
  'style.wordWrap': function (name, element, value) { element.attributes.style.wordWrap = value },
  'style.wrapAfter': function (name, element, value) { element.attributes.style.wrapAfter = value },
  'style.wrapBefore': function (name, element, value) { element.attributes.style.wrapBefore = value },
  'style.wrapFlow': function (name, element, value) { element.attributes.style.wrapFlow = value },
  'style.wrapInside': function (name, element, value) { element.attributes.style.wrapInside = value },
  'style.wrapThrough': function (name, element, value) { element.attributes.style.wrapThrough = value },
  'style.writingMode': function (name, element, value) { element.attributes.style.writingMode = value },
  'style.zIndex': function (name, element, value) { element.attributes.style.zIndex = value },
  'style.WebkitTapHighlightColor': function (name, element, value) { element.attributes.style.webkitTapHighlightColor = value }
}

var TEXT_CONTENT_VANITIES = {
  content: function (name, element, value) {
    element.children = [value + '']
  }
}

var PRESENTATION_VANITIES = {
  alignmentBaseline: function (name, element, value) { element.attributes['alignmentBaseline'] = value },
  baselineShift: function (name, element, value) { element.attributes['baselineShift'] = value },
  clipPath: function (name, element, value) { element.attributes['clipPath'] = value },
  clipRule: function (name, element, value) { element.attributes['clipRule'] = value },
  clip: function (name, element, value) { element.attributes['clip'] = value },
  colorInterpolationFilters: function (name, element, value) { element.attributes['colorInterpolationFilters'] = value },
  colorInterpolation: function (name, element, value) { element.attributes['colorInterpolation'] = value },
  colorProfile: function (name, element, value) { element.attributes['colorProfile'] = value },
  colorRendering: function (name, element, value) { element.attributes['colorRendering'] = value },
  color: function (name, element, value) { element.attributes['color'] = value },
  cursor: function (name, element, value) { element.attributes['cursor'] = value },
  direction: function (name, element, value) { element.attributes['direction'] = value },
  display: function (name, element, value) { element.attributes['display'] = value },
  dominantBaseline: function (name, element, value) { element.attributes['dominantBaseline'] = value },
  enableBackground: function (name, element, value) { element.attributes['enableBackground'] = value },
  fillOpacity: function (name, element, value) { element.attributes['fillOpacity'] = value },
  fillRule: function (name, element, value) { element.attributes['fillRule'] = value },
  fill: function (name, element, value) { element.attributes['fill'] = value },
  filter: function (name, element, value) { element.attributes['filter'] = value },
  floodColor: function (name, element, value) { element.attributes['floodColor'] = value },
  floodOpacity: function (name, element, value) { element.attributes['floodOpacity'] = value },
  fontFamily: function (name, element, value) { element.attributes['fontFamily'] = value },
  fontSizeAdjust: function (name, element, value) { element.attributes['fontSizeAdjust'] = value },
  fontSize: function (name, element, value) { element.attributes['fontSize'] = value },
  fontStretch: function (name, element, value) { element.attributes['fontStretch'] = value },
  fontStyle: function (name, element, value) { element.attributes['fontStyle'] = value },
  fontVariant: function (name, element, value) { element.attributes['fontVariant'] = value },
  fontWeight: function (name, element, value) { element.attributes['fontWeight'] = value },
  glyphOrientationHorizontal: function (name, element, value) { element.attributes['glyphOrientationHorizontal'] = value },
  glyphOrientationVertical: function (name, element, value) { element.attributes['glyphOrientationVertical'] = value },
  imageRendering: function (name, element, value) { element.attributes['imageRendering'] = value },
  kerning: function (name, element, value) { element.attributes['kerning'] = value },
  letterSpacing: function (name, element, value) { element.attributes['letterSpacing'] = value },
  lightingColor: function (name, element, value) { element.attributes['lightingColor'] = value },
  markerEnd: function (name, element, value) { element.attributes['markerEnd'] = value },
  markerMid: function (name, element, value) { element.attributes['markerMid'] = value },
  markerStart: function (name, element, value) { element.attributes['markerStart'] = value },
  mask: function (name, element, value) { element.attributes['mask'] = value },
  opacity: function (name, element, value) { element.attributes['opacity'] = value },
  overflow: function (name, element, value) { element.attributes['overflow'] = value },
  pointerEvents: function (name, element, value) { element.attributes['pointerEvents'] = value },
  shapeRendering: function (name, element, value) { element.attributes['shapeRendering'] = value },
  stopColor: function (name, element, value) { element.attributes['stopColor'] = value },
  stopOpacity: function (name, element, value) { element.attributes['stopOpacity'] = value },
  strokeDasharray: function (name, element, value) { element.attributes['strokeDasharray'] = value },
  strokeDashoffset: function (name, element, value) { element.attributes['strokeDashoffset'] = value },
  strokeLinecap: function (name, element, value) { element.attributes['strokeLinecap'] = value },
  strokeLinejoin: function (name, element, value) { element.attributes['strokeLinejoin'] = value },
  strokeMiterlimit: function (name, element, value) { element.attributes['strokeMiterlimit'] = value },
  strokeOpacity: function (name, element, value) { element.attributes['strokeOpacity'] = value },
  strokeWidth: function (name, element, value) { element.attributes['strokeWidth'] = value },
  stroke: function (name, element, value) { element.attributes['stroke'] = value },
  textAnchor: function (name, element, value) { element.attributes['textAnchor'] = value },
  textDecoration: function (name, element, value) { element.attributes['textDecoration'] = value },
  textRendering: function (name, element, value) { element.attributes['textRendering'] = value },
  unicodeBidi: function (name, element, value) { element.attributes['unicodeBidi'] = value },
  visibility: function (name, element, value) { element.attributes['visibility'] = value },
  wordSpacing: function (name, element, value) { element.attributes['wordSpacing'] = value },
  writingMode: function (name, element, value) { element.attributes['writingMode'] = value }
}

var HTML_STYLE_SHORTHAND_VANITIES = {
  backgroundColor: function (name, element, value) {
    element.attributes.style.backgroundColor = value
  },
  zIndex: function (name, element, value) {
    element.attributes.style.zIndex = value
  }
}

var CONTROL_FLOW_VANITIES = {
  // 'controlFlow.if': function (name, element, value) {
  //   // TODO
  // },
  // 'controlFlow.repeat': function (name, element, value) {
  //   // TODO
  // },
  // 'controlFlow.yield': function (name, element, value) {
  //   // TODO
  // },
  'controlFlow.insert': function (name, element, value, context, component) {
    if (value === null || value === undefined) return void (0)
    if (typeof value !== 'number') throw new Error('controlFlow.insert expects null or number')
    if (!context.options.children) return void (0)
    var children = (Array.isArray(context.options.children)) ? context.options.children : [context.options.children]
    var surrogate = children[value]
    if (surrogate === null || surrogate === undefined) return void (0)
    // If we are running via a framework adapter, allow that framework to provide its own insert mechanism.
    // This is necessary e.g. in React where their element format needs to be converted into our 'mana' format
    if (context.options.vanities['controlFlow.insert']) {
      context.options.vanities['controlFlow.insert'](element, surrogate, context, component, controlFlowInsertImpl)
    } else {
      controlFlowInsertImpl(element, surrogate, context, component)
    }
  },
  'controlFlow.placeholder': function (name, element, value, context, component) {
    if (value === null || value === undefined) return void (0)
    if (typeof value !== 'number') throw new Error('controlFlow.placeholder expects null or number')
    if (!context.options.children) return void (0)
    var children = (Array.isArray(context.options.children)) ? context.options.children : [context.options.children]
    var surrogate = children[value]
    if (surrogate === null || surrogate === undefined) return void (0)
    // If we are running via a framework adapter, allow that framework to provide its own placeholder mechanism.
    // This is necessary e.g. in React where their element format needs to be converted into our 'mana' format
    if (context.options.vanities['controlFlow.placeholder']) {
      context.options.vanities['controlFlow.placeholder'](element, surrogate, context, component, controlFlowPlaceholderImpl)
    } else {
      controlFlowPlaceholderImpl(element, surrogate, context, component)
    }
  }
}

function controlFlowPlaceholderImpl (element, surrogate, context, component) {
  element.elementName = surrogate.elementName
  element.children = surrogate.children || []
  if (surrogate.attributes) {
    if (!element.attributes) element.attributes = {}
    for (var key in surrogate.attributes) {
      if (key === 'haiku-id') continue
      element.attributes[key] = surrogate.attributes[key]
    }
  }
}

function controlFlowInsertImpl (element, surrogate, context, component) {
  element.children = [surrogate]
}

module.exports = {
  'missing-glyph': has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  a: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES, STYLE_VANITIES),
  abbr: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  acronym: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  address: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  altGlyph: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  altGlyphDef: has(),
  altGlyphItem: has(),
  animate: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  animateColor: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  animateMotion: has(),
  animateTransform: has(),
  applet: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  area: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  article: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  aside: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  audio: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  b: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  base: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  basefont: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  bdi: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  bdo: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  big: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  blockquote: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  body: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  br: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  button: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  canvas: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  caption: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  center: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  circle: has(CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES, PRESENTATION_VANITIES),
  cite: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  clipPath: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  code: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  col: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  colgroup: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  'color-profile': has(),
  command: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  cursor: has(),
  datalist: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  dd: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  defs: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  del: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  desc: has(),
  details: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  dfn: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  dir: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  discard: has(),
  div: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  dl: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  dt: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  ellipse: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  em: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  embed: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  feBlend: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  feColorMatrix: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  feComponentTransfer: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  feComposite: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  feConvolveMatrix: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  feDiffuseLighting: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  feDisplacementMap: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  feDistantLight: has(),
  feDropShadow: has(),
  feFlood: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  feFuncA: has(),
  feFuncB: has(),
  feFuncG: has(),
  feFuncR: has(),
  feGaussianBlur: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  feImage: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  feMerge: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  feMergeNode: has(),
  feMorphology: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  feOffset: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  fePointLight: has(),
  feSpecularLighting: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  feTile: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  feTurbulence: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  fieldset: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  figcaption: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  figure: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  filter: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  'font-face': has(),
  'font-face-format': has(),
  'font-face-name': has(),
  'font-face-src': has(),
  'font-face-uri': has(),
  font: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES, STYLE_VANITIES),
  footer: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  foreignObject: has(CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES, PRESENTATION_VANITIES),
  form: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  frame: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  frameset: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  g: has(CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES, PRESENTATION_VANITIES),
  glyph: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  glyphRef: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  h1: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  h2: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  h3: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  h4: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  h5: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  h6: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  hatch: has(),
  hatchpath: has(),
  head: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  header: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  hgroup: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  hkern: has(),
  hr: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  html: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  i: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  iframe: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  image: has(CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES, PRESENTATION_VANITIES),
  img: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  input: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  ins: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  kbd: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  keygen: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  label: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  legend: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  li: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  line: has(CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES, PRESENTATION_VANITIES),
  linearGradient: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  link: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  map: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  mark: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  marker: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  mask: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  menu: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  mesh: has(CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES),
  meshgradient: has(),
  meshpatch: has(),
  meshrow: has(),
  meta: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  metadata: has(),
  meter: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  mpath: has(),
  nav: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  noframes: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  noscript: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  object: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  ol: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  optgroup: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  option: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  output: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  p: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  param: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  path: has(CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES, PRESENTATION_VANITIES),
  pattern: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  polygon: has(CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES, PRESENTATION_VANITIES),
  polyline: has(CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES, PRESENTATION_VANITIES),
  pre: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  progress: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  q: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  radialGradient: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  rect: has(CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES, PRESENTATION_VANITIES),
  rp: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  rt: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  ruby: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  s: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  samp: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  script: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  section: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  select: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  set: has(),
  small: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  solidcolor: has(),
  source: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  span: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  stop: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  strike: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  strong: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  style: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  sub: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  summary: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  sup: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  svg: has(CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES, PRESENTATION_VANITIES, STYLE_VANITIES, HTML_STYLE_SHORTHAND_VANITIES),
  switch: has(CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES, PRESENTATION_VANITIES),
  symbol: has(CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES, PRESENTATION_VANITIES),
  table: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  tbody: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  td: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  text: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES, PRESENTATION_VANITIES),
  textarea: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  textPath: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES, PRESENTATION_VANITIES),
  tfoot: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  th: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  thead: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  time: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  title: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  tr: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  track: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  tref: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  tspan: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES, PRESENTATION_VANITIES),
  tt: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  u: has(HTML_STYLE_SHORTHAND_VANITIES, TEXT_CONTENT_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  ul: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  unknown: has(CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES),
  us: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, PRESENTATION_VANITIES),
  use: has(CONTROL_FLOW_VANITIES, LAYOUT_2D_VANITIES),
  var: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  video: has(HTML_STYLE_SHORTHAND_VANITIES, CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES),
  view: has(),
  vker: has(),
  wb: has(CONTROL_FLOW_VANITIES, LAYOUT_3D_VANITIES, STYLE_VANITIES)
}

},{"./../../Layout3D":9,"lodash.clone":137}],35:[function(require,module,exports){
var NUMERIC_PRECISION = 2

function roundToPrecision (num) {
  return parseFloat(num.toFixed(NUMERIC_PRECISION))
}

module.exports = roundToPrecision

},{}],36:[function(require,module,exports){
module.exports = function scopeOfElement (mana) {
  if (mana.__scope) return mana.__scope

  if (mana.__parent) {
    return scopeOfElement(mana.__parent)
  }

  return null
}

},{}],37:[function(require,module,exports){
var DEFAULT_SCOPE = 'div'

var SCOPE_STRATA = {
  div: 'div',
  svg: 'svg'
  // canvas: 'canvas'
}

var STRING = 'string'

function scopifyElements (mana, parent, scope) {
  if (!mana) return mana
  if (typeof mana === STRING) return mana

  // We'll need the ancestry present if we need to trace back up to the scope
  if (parent && !mana.__parent) {
    mana.__parent = parent
  }

  mana.__scope = scope || DEFAULT_SCOPE

  // If the current element defines a new strata, make that a new scope
  // and pass it down to the children
  if (SCOPE_STRATA[mana.elementName]) {
    scope = SCOPE_STRATA[mana.elementName]
  }

  if (mana.children) {
    for (var i = 0; i < mana.children.length; i++) {
      var child = mana.children[i]
      scopifyElements(child, mana, scope)
    }
  }
}

module.exports = scopifyElements

},{}],38:[function(require,module,exports){
var formatTransform = require('./formatTransform')
var isEqualTransformString = require('./isEqualTransformString')

function setStyleMatrix (styleObject, format, matrix, usePrefix, devicePixelRatio, rendererScopes) {
  var matrixString = formatTransform(matrix, format, devicePixelRatio)
  if (usePrefix) {
    if (!isEqualTransformString(styleObject.webkitTransform, matrixString)) {
      styleObject.webkitTransform = matrixString
    }
  } else {
    if (!isEqualTransformString(styleObject.transform, matrixString)) {
      styleObject.transform = matrixString
    }
  }
  return styleObject
}

module.exports = setStyleMatrix

},{"./formatTransform":27,"./isEqualTransformString":30}],39:[function(require,module,exports){
module.exports = require('lodash.uniq')

},{"lodash.uniq":138}],40:[function(require,module,exports){
var parse = require('xml-parser')
var styleStringToObject = require('to-style').object

function fixChildren (kids) {
  if (Array.isArray(kids)) return kids.map(fixNode)
  return fixNode(kids)
}

function fixAttributes (attributes) {
  if (attributes.style) {
    if (typeof attributes.style === 'string') {
      attributes.style = styleStringToObject(attributes.style)
    }
  }
  return attributes
}

function fixNode (obj) {
  if (!obj) return obj
  if (typeof obj === 'string') return obj
  var children = obj.children
  if (obj.content) children = [obj.content]
  return {
    elementName: obj.name,
    attributes: fixAttributes(obj.attributes || {}),
    children: fixChildren(children)
  }
}

function xmlToMana (xml) {
  var obj = parse(xml).root
  return fixNode(obj)
}

module.exports = xmlToMana

},{"to-style":149,"xml-parser":166}],41:[function(require,module,exports){
module.exports={
  "author": {
    "name": "Matthew Trost",
    "email": "matthew@haiku.ai"
  },
  "dependencies": {
    "haiku-bytecode": "git+ssh://git@github.com/HaikuTeam/bytecode.git#5789dabeb6e7889a6ccbc3d5a6b713bd79f491ad",
    "lodash.assign": "4.2.0",
    "lodash.merge": "4.6.0",
    "raf": "^3.3.0",
    "react": "15.4.2",
    "react-dom": "15.4.2",
    "react-test-renderer": "15.4.2"
  },
  "description": "Haiku bytecode interpreter (a.k.a. the player)",
  "devDependencies": {
    "async": "^2.3.0",
    "browserify": "14.1.0",
    "derequire": "2.0.6",
    "express": "4.14.1",
    "fs-extra": "2.0.0",
    "handlebars": "4.0.6",
    "jsdom": "9.11.0",
    "prettier": "0.22.0",
    "react-dom": "15.4.2",
    "snazzy": "6.0.0",
    "standard": "8.6.0",
    "tap-spec": "4.1.1",
    "tape": "4.6.3",
    "uglify-js": "2.7.5"
  },
  "license": "UNLICENSED",
  "main": "index.js",
  "name": "haiku-interpreter",
  "optionalDependencies": {},
  "readme": "# interpreter\n\nHaiku bytecode interpreter (a.k.a. the player), plus adapters and integrations.\n",
  "readmeFilename": "README.md",
  "version": "2.0.82"
}
},{}],42:[function(require,module,exports){
var xmlToMana = require('haiku-bytecode/src/xmlToMana')
var eachProperty = require('haiku-bytecode/src/eachProperty')

var STRING_TYPE = 'string'
var OBJECT_TYPE = 'object'

function Bytecode (bytecode) {
  if (!bytecode) throw new Error('Empty bytecode not allowed')
  this.bytecode = bytecode
  this._anyEventChange = false
  this._eventsFired = {}
  this._anyInputChange = false
  this._inputChanges = {}
}

Bytecode.prototype.getObject = function getObject () {
  return this.bytecode
}

Bytecode.prototype.getTemplate = function getTemplate () {
  if (!this.bytecode.template) throw new Error('Empty bytecode template not allowed')
  if (typeof this.bytecode.template === OBJECT_TYPE) {
    if (!this.bytecode.template.elementName) {
      console.warn('Warning: Saw unexpected bytecode template format')
      console.log('Template:', this.bytecode.template)
    }
    return this.bytecode.template
  }
  if (typeof this.bytecode.template === STRING_TYPE) {
    return xmlToMana(this.bytecode.template)
  }
  throw new Error('Unknown bytecode template format')
}

Bytecode.prototype.bindEventHandlers = function _bindEventHandlers (instance) {
  if (!this.bytecode.eventHandlers) return void (0)
  var self = this
  for (var i = 0; i < this.bytecode.eventHandlers.length; i++) {
    var descriptor = this.bytecode.eventHandlers[i]
    var handler = descriptor.handler
    descriptor.handler = function (event, a, b, c, d, e, f, g, h, i, j, k) {
      self._anyEventChange = true
      if (!self._eventsFired[descriptor.selector]) self._eventsFired[descriptor.selector] = {}
      self._eventsFired[descriptor.selector][descriptor.name] = event || true
      handler.call(instance, event, a, b, c, d, e, f, g, h, i, j, k)
    }
  }
}

function typecheckInput (type, name, value) {
  if (type === 'any' || type === '*') {
    return void (0)
  }
  if (type === 'event' || type === 'listener') {
    if (typeof value !== 'function' && value !== null && value !== undefined) {
      throw new Error('Property value `' + name + '` must be an event listener function')
    }
    return void (0)
  }
  if (typeof value !== type) {
    throw new Error('Property value `' + name + '` must be a `' + type + '`')
  }
}

Bytecode.prototype.getEventsFired = function getEventsFired () {
  return this._anyEventChange && this._eventsFired
}

Bytecode.prototype.getInputsChanged = function getInputsChanged () {
  return this._anyInputChange && this._inputChanges
}

Bytecode.prototype.clearDetectedEventsFired = function clearDetectedEventsFired () {
  this._anyEventChange = false
  this._eventsFired = {}
}

Bytecode.prototype.clearDetectedInputChanges = function clearDetectedInputChanges () {
  this._anyInputChange = false
  this._inputChanges = {}
}

Bytecode.prototype.defineInputs = function defineInputs (storage, instance) {
  var self = this
  eachProperty(this.bytecode, function _eachProperty (type, name, defval, privacy, setter) {
    if (defval === undefined) throw new Error('Property `' + name + '` cannot be undefined; use null for empty properties')
    if (instance[name] !== undefined) throw new Error('Property `' + name + '` is a reserved keyword')
    if (storage[name] !== undefined) throw new Error('Property `' + name + '` was already declared')

    typecheckInput(type, name, defval)
    storage[name] = defval

    Object.defineProperty(instance, name, {
      get: function get () {
        return storage[name]
      },

      set: function set (input) {
        typecheckInput(type, name, input)

        self._inputChanges[name] = input
        self._anyInputChange = true
        if (setter) {
          storage[name] = setter.call(instance, input)
        } else {
          storage[name] = input
        }

        return storage[name]
      }
    })
  })
}

module.exports = Bytecode

},{"haiku-bytecode/src/eachProperty":26,"haiku-bytecode/src/xmlToMana":40}],43:[function(require,module,exports){
var raf = require('raf')
var assign = require('lodash.assign')

var NUMBER = 'number'
var DEFAULTS = {
  cycle: 16.666,
  speed: 16.666,
  margin: 1.0
}

function Clock (tickables, options) {
  this.options = assign({}, DEFAULTS, options)

  this.running = false
  this.control = null

  // These values change over time:
  this.loops = 0 // Number of loops (int)
  this.frame = 0 // Frame number (int)
  this.time = 0 // Calculated time value (ms)
  this.delta = 0 // Time elapsed since last step (ms)

  // These values configure the clock behavior:
  this.cycle = this.options.cycle // Time to elapse per frame (ms)
  this.speed = this.options.speed // How fast to step (ms)
  this.margin = this.options.margin // Margin of error

  // Avoid detachment when called by raf
  this.loop = this.loop.bind(this)
  this.tickables = tickables || []
  this.raf = null
}

Clock.prototype.isTimeControlled = function isTimeControlled () {
  return typeof this.control === NUMBER
}

Clock.prototype.tick = function tick (tickables) {
  for (var i = 0; i < tickables.length; i++) {
    var tickable = tickables[i]
    tickable.performTick()
  }
}

Clock.prototype.loop = function _loop () {
  if (this.running) {
    if (this.isTimeControlled()) {
      this.tick(this.tickables)
    } else {
      this.loops++
      var prevTime = this.time
      var timeStep = this.cycle
      var nextTime = prevTime + timeStep
      var deltaSinceLastStep = (nextTime - prevTime) + this.delta
      if (deltaSinceLastStep >= this.speed - this.margin) {
        this.tick(this.tickables)
        this.frame++
        this.time = nextTime
        this.delta = 0 // Must reset delta when frame completed
      } else {
        // This loop is faster than the desired speed. Wait till next one
        this.delta = deltaSinceLastStep
      }
    }
  }
  this.raf = raf(this.loop)
}

Clock.prototype.cancelRaf = function cancelRaf () {
  if (this.raf) raf.cancel(this.raf)
  return this
}

Clock.prototype.getTime = function getTime () {
  if (this.isTimeControlled()) return this.control
  return this.time
}

Clock.prototype.start = function start () {
  this.running = true
  return this
}

Clock.prototype.stop = function stop () {
  this.running = false
  return this
}

Clock.prototype.controlTime = function controlTime (time) {
  this.control = parseInt(time || 0, 10)
  return this
}

module.exports = Clock

},{"lodash.assign":136,"raf":141}],44:[function(require,module,exports){
var Bytecode = require('./bytecode')
var Store = require('./store')
var Instance = require('./instance')
var assign = require('lodash.assign')

var OBJECT_TYPE = 'object'
var FUNCTION_TYPE = 'function'
var DEFAULTS = {}
var METAS = {}

function Component (bytecode, options, metas) {
  this.options = assign({}, DEFAULTS, options)
  this.metas = assign({}, METAS, metas)
  this.store = new Store().allocate(Math.random() + '')
  this.bytecode = new Bytecode(bytecode)
  this.template = new Template(this.bytecode.getTemplate(), this)
  this.instance = new Instance(this)
  this.inputs = this.store.set('inputs', {})
  this.bytecode.defineInputs(this.inputs, this.instance)
  this.bytecode.bindEventHandlers(this.instance)
  this.context = void (0) // <~ Hack: This must get assigned by someone
  this._scopes = {}
  this._needsFullFlush = false
  this._lastTemplateExpansion = null
  this._lastDeltaPatches = null
  this._lastEventListenerPatches = null
}

Component.isBytecode = function isBytecode (something) {
  return something && typeof something === OBJECT_TYPE && something.template
}

Component.isComponent = function isComponent (something) {
  return something && typeof something.render === FUNCTION_TYPE
}

Component.prototype.shouldPerformFullFlush = function shouldPerformFullFlush () {
  return this._needsFullFlush
}

Component.prototype.patchEventListeners = function patchEventListeners (container) {
  this._lastEventListenerPatches = this.template.eventListenerDeltas(this.context, this, container, this.inputs, [], null, null)
  return this._lastEventListenerPatches
}

Component.prototype.patch = function patch (container, options) {
  var time = this.context.clock.getTime()
  var timelinesRunning = []
  var timelineInstances = this.store.get('timelines')
  for (var timelineName in timelineInstances) {
    var timeline = timelineInstances[timelineName]
    if (timeline.isActive()) {
      timeline.performUpdate(time)
      if (timelineName === 'Default' || !timeline.isFinished()) {
        timelinesRunning.push(timeline)
      }
    }
  }
  var eventsFired = this.bytecode.getEventsFired()
  var inputsChanged = this.bytecode.getInputsChanged()
  this._lastDeltaPatches = this.template.deltas(this.context, this, container, this.inputs, timelinesRunning, eventsFired, inputsChanged, options)
  this.bytecode.clearDetectedEventsFired()
  this.bytecode.clearDetectedInputChanges()
  return this._lastDeltaPatches
}

Component.prototype.render = function render (container, options) {
  var time = this.context.clock.getTime()
  var timelines = this.store.get('timelines')
  for (var timelineName in timelines) {
    var timeline = timelines[timelineName]
    if (timeline.isActive()) {
      timeline.performUpdate(time)
    }
  }
  this._lastTemplateExpansion = this.template.expand(this.context, this, container, this.inputs, options)
  this._needsFullFlush = false
  return this._lastTemplateExpansion
}

Component.prototype.stopAllTimelines = function stopAllTimelines () {
  var timelines = this.store.get('timelines')
  for (var timelineName in timelines) {
    var timeline = timelines[timelineName]
    timeline.stop()
  }
}

Component.prototype.startAllTimelines = function startAllTimelines () {
  var timelines = this.store.get('timelines') || {}
  for (var timelineName in timelines) this.startTimeline(timelineName)
}

Component.prototype.fetchAllTimelineStores = function fetchAllTimelineStores () {
  var time = this.context.clock.getTime()
  var names = Object.keys(this.bytecode.bytecode.timelines)
  for (var i = 0; i < names.length; i++) {
    var name = names[i]
    if (name) {
      var descriptor = this.bytecode.bytecode.timelines[name]
      var existing = this.store.get('timelines')[name]
      if (!existing) {
        this.store.get('timelines')[name] = new Timeline(time, descriptor, name, this.options)
      }
    }
  }
  return this.store.get('timelines')
}

Component.prototype.startTimeline = function startTimeline (timelineName) {
  var time = this.context.clock.getTime()
  var descriptor = this.bytecode.bytecode.timelines[timelineName]
  var existing = this.store.get('timelines')[timelineName]
  if (existing) existing.start(time, descriptor)
  else this.store.get('timelines')[timelineName] = new Timeline(time, descriptor, timelineName, this.options)
}

Component.prototype.stopTimeline = function startTimeline (timelineName) {
  var time = this.context.clock.getTime()
  var descriptor = this.bytecode.bytecode.timelines[timelineName]
  var existing = this.store.get('timelines')[timelineName]
  if (existing) existing.stop(time, descriptor)
}

module.exports = Component

var Template = require('./template')
var Timeline = require('./timeline')

},{"./bytecode":42,"./instance":50,"./store":85,"./template":86,"./timeline":87,"lodash.assign":136}],45:[function(require,module,exports){
module.exports = {
  DEFAULT_TIMELINE_NAME: 'Default',
  DEFAULT_TIMELINE_TIME: 0
}

},{}],46:[function(require,module,exports){
var Clock = require('./clock')
var Timeline = require('./timeline')
var assign = require('lodash.assign')

function Context (component, options) {
  var tickables = []

  this.options = assign({}, options)

  if (this.options.frame) {
    tickables.push({ performTick: this.options.frame })
  }

  this.clock = new Clock(tickables, this.options.clock)
  // Start the raf loop in the clock - need to do this even if we aren't autoplaying
  this.clock.loop()

  this.component = component
  this.component.context = this
  this.component.startTimeline(Timeline.DEFAULT_NAME)
}

Context.prototype.getChildren

module.exports = Context

},{"./clock":43,"./timeline":87,"lodash.assign":136}],47:[function(require,module,exports){
var wrapper = require('./../../wrapper')
var renderer = require('./../../renderers/dom')

function creation (bytecode, options, _window) {
  if (!options) options = {}
  var platform = _window || window

  if (options.useWebkitPrefix === undefined) {
    var isWebKit = 'WebkitAppearance' in platform.document.documentElement.style
    options.useWebkitPrefix = !!isWebKit
  }

  return wrapper(renderer, bytecode, options, platform)
}

module.exports = creation

},{"./../../renderers/dom":69,"./../../wrapper":88}],48:[function(require,module,exports){
function create (instance) {
  var registry = {}
  var eavesdroppers = []

  instance.on = function on (key, fn) {
    if (!registry[key]) registry[key] = []
    // Check for dupes and ignore if this is one
    for (var i = 0; i < registry[key].length; i++) {
      if (registry[key][i] === fn) return this
    }
    registry[key].push(fn)
    return this
  }

  instance.off = function off (key, fn) {
    var listeners = registry[key]
    if (!listeners || listeners.length < 1) return this
    for (var i = 0; i < listeners.length; i++) {
      if (fn && listeners[i] === fn) listeners.splice(i, 1)
      else listeners.splice(i, 1)
    }
    return this
  }

  instance.emit = function emit (key, msg, a, b, c, d, e, f, g, h, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
    var listeners = registry[key]
    if (listeners && listeners.length > 0) {
      for (var i = 0; i < listeners.length; i++) listeners[i](msg, a, b, c, d, e, f, g, h, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z)
    }
    if (eavesdroppers.length > 0) {
      for (var j = 0; j < eavesdroppers.length; j++) eavesdroppers[j](key, msg, a, b, c, d, e, f, g, h, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z)
    }
    return this
  }

  instance.hear = function hear (fn) {
    eavesdroppers.push(fn)
  }

  instance._registry = registry
  instance._eavesdroppers = eavesdroppers

  return instance
}

module.exports = {
  create: create
}

},{}],49:[function(require,module,exports){
var Layout3D = require('haiku-bytecode/src/Layout3D')

var ELEMENTS_2D = {
  circle: true,
  ellipse: true,
  foreignObject: true,
  g: true,
  image: true,
  line: true,
  mesh: true,
  path: true,
  polygon: true,
  polyline: true,
  rect: true,
  svg: true,
  switch: true,
  symbol: true,
  text: true,
  textPath: true,
  tspan: true,
  unknown: true,
  use: true
}

function initializeNodeAttributes (element, parent) {
  if (!element.attributes) element.attributes = {}
  if (!element.attributes.style) element.attributes.style = {}
  if (!element.layout) {
    element.layout = Layout3D.createLayoutSpec()
    element.layout.matrix = Layout3D.createMatrix()
    element.layout.format = (ELEMENTS_2D[element.elementName]) ? Layout3D.FORMATS.TWO : Layout3D.FORMATS.THREE
  }
  return element
}

module.exports = function initializeTreeAttributes (tree, container) {
  if (!tree || typeof tree === 'string') return
  initializeNodeAttributes(tree, container)
  tree.__parent = container
  if (!tree.children) return
  if (tree.children.length < 1) return
  for (var i = 0; i < tree.children.length; i++) initializeTreeAttributes(tree.children[i], tree)
}

},{"haiku-bytecode/src/Layout3D":9}],50:[function(require,module,exports){
module.exports = require('./pub-api/HaikuPlayer')

},{"./pub-api/HaikuPlayer":53}],51:[function(require,module,exports){
var Emitter = require('./../emitter')

function HaikuBytecode (_player) {
  if (!(this instanceof HaikuBytecode)) return new HaikuBytecode(_player)
  Emitter.create(this)
  this._player = _player
}

module.exports = HaikuBytecode

},{"./../emitter":48}],52:[function(require,module,exports){
var Emitter = require('./../emitter')

function HaikuClock (_player) {
  if (!(this instanceof HaikuClock)) return new HaikuClock(_player)
  Emitter.create(this)
  this._player = _player
}

HaikuClock.prototype.getTime = function getTime () {
  return this._player._component.context.clock.getTime()
}

HaikuClock.prototype.setTime = function setTime (t) {
  this._player._component.context.clock.controlTime(t)
  return this
}

HaikuClock.prototype.isRunning = function isRunning () {
  return this._player._component.context.clock.running
}

HaikuClock.prototype.start = function start () {
  this._player._component.context.clock.start()
  return this
}

// HaikuClock.prototype.getFps = function getFps () {
// }

// HaikuClock.prototype.setFps = function setFps () {
// }

module.exports = HaikuClock

},{"./../emitter":48}],53:[function(require,module,exports){
var Emitter = require('./../emitter')
var Constants = require('./../constants')
var HaikuTimeline = require('./HaikuTimeline')
var HaikuClock = require('./HaikuClock')
var HaikuBytecode = require('./HaikuBytecode')

function HaikuPlayer (_component) {
  if (!(this instanceof HaikuPlayer)) return new HaikuPlayer(_component)
  Emitter.create(this)
  this._component = _component
  this._bytecode = _component.bytecode.bytecode
  this.VERSION = require('./../../package.json').version
}

HaikuPlayer.prototype.setOption = function setOption (key, value) {
  this.getOptions()[key] = value
  return this
}

HaikuPlayer.prototype.getOption = function getOption (key) {
  return this.getOptions()[key]
}

HaikuPlayer.prototype.getOptions = function getOptions () {
  return this._component.options
}

HaikuPlayer.prototype.setOptions = function setOptions (incoming) {
  var options = this.getOptions()
  for (var key in incoming) options[key] = incoming[key]
  return this
}

HaikuPlayer.prototype.getClock = function getClock () {
  return new HaikuClock(this)
}

HaikuPlayer.prototype.getBytecode = function getBytecode () {
  return new HaikuBytecode(this)
}

HaikuPlayer.prototype.getTimelines = function getTimelines () {
  var timelines = {}
  var timelineStores = this._component.fetchAllTimelineStores()
  for (var timelineName in timelineStores) {
    var timelineStore = timelineStores[timelineName]
    timelines[timelineName] = new HaikuTimeline(timelineName, this, timelineStore)
  }
  return timelines
}

HaikuPlayer.prototype.getDefaultTimeline = function getDefaultTimeline () {
  var timelines = this.getTimelines()
  return timelines[Constants.DEFAULT_TIMELINE_NAME]
}

HaikuPlayer.prototype.getActiveTimelines = function getActiveTimelines () {
  var activeTimelines = {}
  var timelines = this.getTimelines()
  for (var timelineName in timelines) {
    var timelineInstance = timelines[timelineName]
    if (timelineInstance.isActive()) {
      activeTimelines[timelineName] = timelineInstance
    }
  }
  return activeTimelines
}

// HaikuPlayer.prototype.getFps = function getFps () {
//   var clock = this.getClock()
//   return clock.getFps()
// }

// HaikuPlayer.prototype.setFps = function setFps (fps) {
//   var clock = this.getClock()
//   clock.setFps(fps)
//   return this
// }

// HaikuPlayer.prototype.getTimeUnits = function getTimeUnits () {
// }

// HaikuPlayer.prototype.setTimeUnits = function setTimeUnits () {
// }

module.exports = HaikuPlayer

},{"./../../package.json":41,"./../constants":45,"./../emitter":48,"./HaikuBytecode":51,"./HaikuClock":52,"./HaikuTimeline":54}],54:[function(require,module,exports){
var Emitter = require('./../emitter')

function HaikuTimeline (_name, _player, _store) {
  if (!(this instanceof HaikuTimeline)) return new HaikuTimeline(_name, _player, _store)
  Emitter.create(this)
  this._name = _name
  this._player = _player
  this._store = _store

  this._store.on('update', function _update () {
    var frame = this.getFrame()
    var time = Math.round(this.getTime())
    if (this.isActive() && this.isPlaying()) this.emit('tick', frame, time)
    this.emit('update', frame, time)
  }.bind(this))
}

HaikuTimeline.prototype._ensureClockIsRunning = function _ensureClockIsRunning () {
  var clock = this._player.getClock()
  if (!clock.isRunning()) clock.start()
  return this
}

HaikuTimeline.prototype.getTime = function getTime () {
  return this._store.getDomainTime()
}

HaikuTimeline.prototype.getFrame = function getFrame () {
  var time = this.getTime()
  var clock = this._player.getClock()
  var timeStep = clock.cycle || 16.666 // weird name, sorry
  return Math.round(time / timeStep)
}

HaikuTimeline.prototype.duration = function duration () {
  return this._store.max || 0
}

HaikuTimeline.prototype.isActive = function isActive () {
  return !!this._store.active
}

HaikuTimeline.prototype.isPlaying = function isPlaying () {
  return !!this._store.isPlaying
}

HaikuTimeline.prototype.setRepeat = function setRepeat (bool) {
  this._store.loop = bool
  return this
}

HaikuTimeline.prototype.getRepeat = function getRepeat () {
  return !!this._store.loop
}

HaikuTimeline.prototype.pause = function pause () {
  var time = this._player.getClock().getTime()
  var descriptor = this._player._component.bytecode.bytecode.timelines[this._name]
  this._store.stop(time, descriptor)
  return this
}

HaikuTimeline.prototype.play = function play () {
  this._ensureClockIsRunning()
  var time = this._player.getClock().getTime()
  var descriptor = this._player._component.bytecode.bytecode.timelines[this._name]
  var local = this._store.local
  this._store.start(time, descriptor)
  if (this._store.control !== null) {
    this._store.local = this._store.control
    this._store.control = null
  } else {
    this._store.local = local
  }
  this._player._component._needsFullFlush = true
  return this
}

HaikuTimeline.prototype.seek = function seek (ms) {
  this._ensureClockIsRunning()
  this._store.controlTime(ms)
  var time = this._player.getClock().getTime()
  var descriptor = this._player._component.bytecode.bytecode.timelines[this._name]
  this._store.start(time, descriptor)
  this._player._component._needsFullFlush = true
  return this
}

HaikuTimeline.prototype.gotoAndPlay = function gotoAndPlay (ms) {
  this._ensureClockIsRunning()
  this.seek(ms)
  this.play()
  return this
}

HaikuTimeline.prototype.gotoAndStop = function gotoAndStop (ms) {
  this._ensureClockIsRunning()
  this.seek(ms)
  return this
}

// HaikuTimeline.prototype.seekMs = function seekMs () {
//   this._ensureClockIsRunning()
//   return this
// }

// HaikuTimeline.prototype.seekFrame = function seekFrame () {
//   this._ensureClockIsRunning()
//   return this
// }

// HaikuTimeline.prototype.seekPercent = function seekPercent () {
//   this._ensureClockIsRunning()
//   return this
// }

// HaikuTimeline.prototype.reverse = function reverse () {
//   this._ensureClockIsRunning()
//   return this
// }

// HaikuTimeline.prototype.gotoAndReverse = function gotoAndReverse () {
//   this._ensureClockIsRunning()
//   return this
// }

// HaikuTimeline.prototype.playUntil = function playUntil () {
//   this._ensureClockIsRunning()
//   return this
// }

// HaikuTimeline.prototype.reverseUntil = function reverseUntil () {
//   this._ensureClockIsRunning()
//   return this
// }

// HaikuTimeline.prototype.setPosts = function setPosts () {
// }

// HaikuTimeline.prototype.clearPosts = function clearPosts () {
// }

// HaikuTimeline.prototype.getPosts = function getPosts () {
// }

module.exports = HaikuTimeline

},{"./../emitter":48}],55:[function(require,module,exports){
var createTextNode = require('./createTextNode')
var createTagNode = require('./createTagNode')
var applyLayout = require('./applyLayout')
var isTextNode = require('./isTextNode')

function appendChild (alreadyChildElement, virtualElement, parentDomElement, parentVirtualElement, locator, hash, options, scopes) {
  var domElementToInsert
  if (isTextNode(virtualElement, scopes)) domElementToInsert = createTextNode(parentDomElement, virtualElement, options, scopes)
  else domElementToInsert = createTagNode(parentDomElement, virtualElement, parentVirtualElement, locator, hash, options, scopes)

  applyLayout(domElementToInsert, virtualElement, parentDomElement, parentVirtualElement, options, scopes)

  parentDomElement.appendChild(domElementToInsert)
  return domElementToInsert
}

module.exports = appendChild

},{"./applyLayout":56,"./createTagNode":64,"./createTextNode":65,"./isTextNode":74}],56:[function(require,module,exports){
var applyCssLayout = require('haiku-bytecode/src/applyCssLayout')
var scopeOfElement = require('haiku-bytecode/src/scopeOfElement')
var isTextNode = require('./isTextNode')
var isIE = require('./isIE')
var isMobile = require('./isMobile')
var hasPreserve3d = require('./hasPreserve3d')

var _window = typeof window !== 'undefined' && window
var PLATFORM_INFO = {
  hasWindow: !!_window,
  isMobile: isMobile(_window), // Dumb navigator check
  isIE: isIE(_window), // Dumb navigator check - use feature detection instead?
  hasPreserve3d: hasPreserve3d(_window) // I dunno if we actually need this
}

console.info('[haiku]:', JSON.stringify(PLATFORM_INFO))

var DEFAULT_PIXEL_RATIO = 1.0
var SVG = 'svg'
var SVG_RENDERABLES = {
  a: true,
  audio: true,
  canvas: true,
  circle: true,
  ellipse: true,
  foreignObject: true,
  g: true,
  iframe: true,
  image: true,
  line: true,
  mesh: true,
  path: true,
  polygon: true,
  polyline: true,
  rect: true,
  svg: true,
  switch: true,
  symbol: true,
  text: true,
  textPath: true,
  tspan: true,
  unknown: true,
  use: true,
  video: true
}

function applyLayout (domElement, virtualElement, parentDomNode, parentVirtualElement, options, scopes, isPatchOperation, isKeyDifferent) {
  if (isTextNode(virtualElement)) return domElement

  if (virtualElement.layout) {
    // Don't assign layout to things that never need it like <desc>, <title>, etc.
    // Check if we're inside an <svg> context *and* one of the actually renderable svg-type els
    if (scopeOfElement(virtualElement) === SVG && !SVG_RENDERABLES[virtualElement.elementName]) {
      return domElement
    }

    if (!parentVirtualElement.layout || !parentVirtualElement.layout.computed) {
      _warnOnce('Cannot compute layout without parent computed size (child: <' + virtualElement.elementName + '>; parent: <' + parentVirtualElement.elementName + '>)')
      return domElement
    }

    var devicePixelRatio = options && options.devicePixelRatio || DEFAULT_PIXEL_RATIO
    var computedLayout = virtualElement.layout.computed

    // No computed layout means the el is not shown
    if (!computedLayout || computedLayout.invisible) {
      if (domElement.style.display !== 'none') domElement.style.display = 'none'
    } else {
      if (domElement.style.display !== 'block') domElement.style.display = 'block'
      options.platform = PLATFORM_INFO
      applyCssLayout(domElement, virtualElement, virtualElement.layout, computedLayout, devicePixelRatio, options, scopes)
    }
  }

  return domElement
}

var warnings = {}

function _warnOnce (warning) {
  if (warnings[warning]) return void (0)
  warnings[warning] = true
  console.warn(warning)
}

module.exports = applyLayout

},{"./hasPreserve3d":68,"./isIE":71,"./isMobile":72,"./isTextNode":74,"haiku-bytecode/src/applyCssLayout":15,"haiku-bytecode/src/scopeOfElement":36}],57:[function(require,module,exports){
var assignStyle = require('./assignStyle')
var assignClass = require('./assignClass')
var assignEvent = require('./assignEvent')

var STYLE = 'style'
var OBJECT = 'object'
var FUNCTION = 'function'
var CLASS = 'class'
var CLASS_NAME = 'className'

var XLINK_XMLNS = 'http://www.w3.org/1999/xlink'

function setAttribute (el, key, val, options, scopes) {
  if ((key.slice(0, 5) === 'xlink')) {
    var ns = XLINK_XMLNS
    var p0 = el.getAttributeNS(ns, key)
    if (p0 !== val) el.setAttributeNS(ns, key, val)
  } else {
    var p1 = el.getAttribute(key)
    if (p1 !== val) el.setAttribute(key, val)
  }
}

function assignAttributes (domElement, attributes, options, scopes, isPatchOperation, isKeyDifferent) {
  if (!isPatchOperation) {
    // Remove any attributes from the previous run that aren't present this time around
    if (domElement.haiku && domElement.haiku.element) {
      for (var oldKey in domElement.haiku.element.attributes) {
        var oldValue = domElement.haiku.element.attributes[oldKey]
        var newValue = attributes[oldKey]
        if (oldKey !== STYLE) { // Removal of old styles is handled downstream; see assignStyle()
          if (newValue === null || newValue === undefined || oldValue !== newValue) {
            domElement.removeAttribute(oldKey)
          }
        }
      }
    }
  }

  for (var key in attributes) {
    var anotherNewValue = attributes[key]

    if (key === STYLE && anotherNewValue && typeof anotherNewValue === OBJECT) {
      assignStyle(domElement, anotherNewValue, options, scopes, isPatchOperation)
      continue
    }

    if ((key === CLASS || key === CLASS_NAME) && anotherNewValue) {
      assignClass(domElement, anotherNewValue, options, scopes)
      continue
    }

    var lower = key.toLowerCase()
    // 'onclick', etc
    if (lower[0] === 'o' && lower[1] === 'n' && typeof anotherNewValue === FUNCTION) {
      assignEvent(domElement, lower, anotherNewValue, options, scopes)
      continue
    }

    setAttribute(domElement, key, anotherNewValue, options, scopes)
  }
  return domElement
}

module.exports = assignAttributes

},{"./assignClass":58,"./assignEvent":59,"./assignStyle":60}],58:[function(require,module,exports){
function assignClass (domElement, className, options, scopes) {
  if (domElement.className !== className) {
    domElement.className = className
  }
  return domElement
}

module.exports = assignClass

},{}],59:[function(require,module,exports){
var attachEventListener = require('./attachEventListener')

function assignEvent (domElement, lowerCaseName, listenerFunction, options, scopes) {
  if (!domElement.haiku) {
    domElement.haiku = {}
  }
  if (!domElement.haiku.listeners) {
    domElement.haiku.listeners = {}
  }
  if (!domElement.haiku.listeners[lowerCaseName]) {
    domElement.haiku.listeners[lowerCaseName] = []
  }

  var already = false
  for (var i = 0; i < domElement.haiku.listeners[lowerCaseName].length; i++) {
    var existing = domElement.haiku.listeners[lowerCaseName][i]
    if (existing._haikuListenerId === listenerFunction._haikuListenerId) {
      already = true
      break
    }
  }

  if (!already) {
    listenerFunction._haikuListenerId = Math.random() + ''
    domElement.haiku.listeners[lowerCaseName].push(listenerFunction)
    attachEventListener(domElement, lowerCaseName, listenerFunction, options, scopes)
  }
}

module.exports = assignEvent

},{"./attachEventListener":61}],60:[function(require,module,exports){
function assignStyle (domElement, style, options, scopes, isPatchOperation) {
  if (!domElement.__haikuExplicitStyles) domElement.__haikuExplicitStyles = {}

  if (!isPatchOperation) {
    // If we have an element from a previous run, remove any old styles that aren't part of the new one
    if (domElement.haiku && domElement.haiku.element && domElement.haiku.element.attributes && domElement.haiku.element.attributes.style) {
      for (var oldStyleKey in domElement.haiku.element.attributes.style) {
        var newStyleValue = style[oldStyleKey]
        if (newStyleValue === null || newStyleValue === undefined) {
          domElement.style[oldStyleKey] = null
        }
      }
    }
  }

  for (var key in style) {
    var newProp = style[key]
    var previousProp = domElement.style[key]
    if (previousProp !== newProp) {
      domElement.__haikuExplicitStyles[key] = true
      domElement.style[key] = style[key]
    }
  }
  return domElement
}

module.exports = assignStyle

},{}],61:[function(require,module,exports){
module.exports = function attachEventListener (domElement, lowercaseName, listener, options, scopes) {
  var eventName = lowercaseName.slice(2) // Assumes 'on*' prefix

  // FF doesn't like it if this isn't a function... this can happen if bad props are passed upstream
  if (typeof listener === 'function') {
    domElement.addEventListener(eventName, listener)
  }
}

},{}],62:[function(require,module,exports){
var MENU_GLOBAL_ID = 'haiku-right-click-menu'
var WIDTH = 240
var HEIGHT = 12
var GRAD_START = '#ffffff'
var GRAD_END = '#fff0f6'

// Haiku servers will substitute the _actual_ full string in any js file,
// so it's split into pieces here to avoid that build step
var SUBSTITUTION_STRING = 'HAIKU' + '_' + 'SHARE' + '_' + 'UUID'

function setGradient (el, fr, to) {
  el.style.background = fr // Old browsers
  el.style.background = '-webkit-linear-gradient(top,' + fr + ',' + to + ')'
  el.style.background = '-o-linear-gradient(top,' + fr + ',' + to + ')'
  el.style.background = '-moz-linear-gradient(top,' + fr + ',' + to + ')'
  el.style.background = 'linear-gradient(to bottom, ' + fr + ', ' + to + ')'
}

function setBoxShadow (el, color) {
  el.style['-webkit-box-shadow'] = '0px 0px 4px 0px ' + color
  el.style['-moz-box-shadow'] = '0px 0px 4px 0px ' + color
  el.style['box-shadow'] = '0px 0px 4px 0px ' + color
}

function px (num) {
  return num + 'px'
}

function findOrCreateMenuElement (doc) {
  var menu = doc.getElementById(MENU_GLOBAL_ID)
  if (menu) return menu
  menu = doc.createElement('div')
  menu.setAttribute('id', MENU_GLOBAL_ID)
  menu.style.position = 'absolute'
  menu.style.zIndex = 2147483647
  setGradient(menu, GRAD_START, GRAD_END)
  setBoxShadow(menu, 'rgba(200,200,200,1)')
  menu.style.borderRadius = px(2)
  menu.style.display = 'none'
  menu.style.opacity = 0.9
  menu.style.overflow = 'hidden'
  menu.style.cursor = 'default'
  menu.style.fontFamily = 'Helvetica, Arial, sans-serif'
  menu.style.fontWeight = 'lighter'
  menu.style.fontSize = px(12)
  menu.style.color = 'black'
  menu.style.padding = '12px 12px 0'
  menu.style.margin = '0'
  menu.style.boxSizing = 'content-box'
  menu.style.textDecoration = 'none'
  menu.style.fontStyle = 'none'
  doc.body.appendChild(menu)
  return menu
}

function truncate (str, len) {
  if (str.length > len) {
    return str.slice(0, len - 3) + '...'
  }
  return str
}

module.exports = function createRightClickMenu (domElement, playerInstance) {
  var doc = domElement.ownerDocument
  var menu = findOrCreateMenuElement(doc)

  var escaper = doc.createElement('textarea')
  function escapeHTML (html) {
    escaper.textContent = html
    return escaper.innerHTML.replace(/[><,{}[\]"']/gi, '')
  }

  // revealMenu(100,100) // Uncomment me to render the menu while testing

  function revealMenu (mx, my) {
    var lines = []
    var metadata = playerInstance._bytecode && playerInstance._bytecode.metadata
    if (metadata && metadata.project) {
      var who = escapeHTML(metadata.project)
      if (metadata.organization) {
        who = '"' + who + '" by ' + escapeHTML(metadata.organization)
      }
      var byline = truncate(who, 35)
      lines.push('<p style="margin:0;margin-bottom:10px;padding:0;line-height:12px;color:#b9a">' + byline + '</p>')
    }
    if (metadata && metadata.uuid && metadata.uuid !== SUBSTITUTION_STRING) {
      lines.push('<p style="margin:0;margin-bottom:10px;padding:0;line-height:12px"><a style="color:black;text-decoration:none;" href="https://share.haiku.ai/' + escapeHTML(metadata.uuid) + '" target="_blank">View Component</a></p>')
    }
    lines.push('<p style="margin:0;padding:0;line-height:12px"><a style="color:black;text-decoration:none;" href="https://www.haiku.ai" target="_blank">Crafted in Haiku</a></p>')
    if (lines.length < 1) return void ('')

    menu.style.width = px(WIDTH)
    menu.style.height = px(HEIGHT * lines.length + (12 * lines.length - 1))
    menu.style.top = px(my)
    menu.style.left = px(mx)
    menu.style.pointerEvents = 'auto'
    menu.style.display = 'block'
    menu.innerHTML = lines.join('\n')
  }

  function hideMenu () {
    menu.style.width = px(0)
    menu.style.height = px(0)
    menu.style.top = px(0)
    menu.style.left = px(0)
    menu.style.pointerEvents = 'none'
    menu.style.display = 'none'
  }

  domElement.addEventListener('contextmenu', function (contextmenuEvent) {
    contextmenuEvent.preventDefault()
    
    var mx = contextmenuEvent.pageX
    var my = contextmenuEvent.pageY
    revealMenu(mx, my)
  })

  doc.addEventListener('click', hideMenu)
}

},{}],63:[function(require,module,exports){
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg'

function createSvgElement (domElement, tagName, options, scopes) {
  return domElement.ownerDocument.createElementNS(SVG_NAMESPACE, tagName)
}

module.exports = createSvgElement

},{}],64:[function(require,module,exports){
var normalizeName = require('./normalizeName')
var isSvgElementName = require('./isSvgElementName')
var getTypeAsString = require('./getTypeAsString')

function createTagNode (domElement, virtualElement, parentVirtualElement, locator, hash, options, scopes) {
  var tagName = normalizeName(getTypeAsString(virtualElement))
  var newDomElement
  if (isSvgElementName(tagName, scopes)) {
    // SVG
    newDomElement = createSvgElement(domElement, tagName, options, scopes)
  } else {
    // Normal DOM
    newDomElement = domElement.ownerDocument.createElement(tagName)
  }

  newDomElement.haiku = {}

  var incomingKey = virtualElement.key || virtualElement.attributes && virtualElement.attributes.key
  if (incomingKey !== undefined && incomingKey !== null) newDomElement.haiku.key = incomingKey

  updateElement(newDomElement, virtualElement, domElement, parentVirtualElement, locator, hash, options, scopes)
  return newDomElement
}

module.exports = createTagNode

var createSvgElement = require('./createSvgElement')
var updateElement = require('./updateElement')

},{"./createSvgElement":63,"./getTypeAsString":67,"./isSvgElementName":73,"./normalizeName":76,"./updateElement":83}],65:[function(require,module,exports){
function createTextNode (domElement, textContent, options, scopes) {
  return domElement.ownerDocument.createTextNode(textContent)
}

module.exports = createTextNode

},{}],66:[function(require,module,exports){
function getElementSize (domElement) {
  var x
  var y
  if (domElement.offsetWidth === undefined) {
    var rect = domElement.getBoundingClientRect()
    x = rect.width
    y = rect.height
  } else {
    x = domElement.offsetWidth
    y = domElement.offsetHeight
  }
  return {
    x: x,
    y: y
  }
}

module.exports = getElementSize

},{}],67:[function(require,module,exports){
var STRING = 'string'
var FUNCTION = 'function'

function getType (virtualElement) {
  var typeValue = virtualElement.elementName
  if (typeValue && typeValue.default) return typeValue.default
  return typeValue
}

function thingToTagName (thing) {
  if (typeof thing === STRING && thing.length > 0) return thing
  if (typeof thing === FUNCTION) return fnToTagName(thing)
  _warnOnce('Got blank/malformed virtual element object; falling back to <div>')
  return 'div'
}

function fnToTagName (fn) {
  if (fn.name) return fn.name
  if (fn.displayName) return fn.displayName
  if (fn.constructor) {
    if (fn.constructor.name !== 'Function') {
      return fn.constructor.name
    }
  }
}

function getTypeAsString (virtualElement) {
  var typeValue = getType(virtualElement)
  typeValue = thingToTagName(typeValue)
  if (!typeValue) throw new Error('Node has no discernable name')
  return typeValue
}

var warnings = {}
function _warnOnce (warning) {
  if (warnings[warning]) return void (0)
  warnings[warning] = true
  console.warn(warning)
}

module.exports = getTypeAsString

},{}],68:[function(require,module,exports){
module.exports = function hasPreserve3d (window) {
  if (!window) return false
  if (!window.document) return false
  var outerAnchor
  var innerAnchor
  var CSS = window.CSS
  var result = false
  if (CSS && CSS.supports && CSS.supports('(transform-style: preserve-3d)')) {
    return true
  }
  outerAnchor = window.document.createElement('a')
  innerAnchor = window.document.createElement('a')
  outerAnchor.style.cssText = 'display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);'
  innerAnchor.style.cssText = 'display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);'
  outerAnchor.appendChild(innerAnchor)
  window.document.documentElement.appendChild(outerAnchor)
  result = innerAnchor.getBoundingClientRect()
  window.document.documentElement.removeChild(outerAnchor)
  result = result.width && result.width < 4
  return result
}

},{}],69:[function(require,module,exports){
var getElementSize = require('./getElementSize')
var createRightClickMenu = require('./createRightClickMenu')
var _render = require('./render')
var _patch = require('./patch')

function render (domElement, virtualContainer, virtualTree, locator, hash, options, scopes) {
  return _render(domElement, virtualContainer, virtualTree, locator, hash, options, scopes)
}

function patch (domElement, virtualContainer, patchesDict, locator, hash, options, scopes) {
  return _patch(domElement, virtualContainer, patchesDict, locator, hash, options, scopes)
}

function menuize (domElement, playerInstance) {
  createRightClickMenu(domElement, playerInstance)
}

function createContainer (domElement) {
  return {
    isContainer: true,
    layout: {
      computed: {
        size: getElementSize(domElement)
      }
    }
  }
}

module.exports = {
  render: render,
  patch: patch,
  menuize: menuize,
  createContainer: createContainer
}

},{"./createRightClickMenu":62,"./getElementSize":66,"./patch":77,"./render":79}],70:[function(require,module,exports){
function isBlankString (thing) {
  return thing === ''
}

module.exports = isBlankString

},{}],71:[function(require,module,exports){
module.exports = function isIE (window) {
  if (!window) return false
  if (!window.navigator) return false
  if (!window.navigator.userAgent) return false
  return window.navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident') > 0
}

},{}],72:[function(require,module,exports){
module.exports = function isMobile (window) {
  if (!window) return false
  if (!window.navigator) return false
  if (!window.navigator.userAgent) return false
  return /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent)
}

},{}],73:[function(require,module,exports){
var svgElementNames = require('haiku-bytecode/src/allSvgElementNames')

function isSvgElementName (tagName, scopes) {
  return svgElementNames.indexOf(tagName) !== -1
}

module.exports = isSvgElementName

},{"haiku-bytecode/src/allSvgElementNames":14}],74:[function(require,module,exports){
function isTextNode (virtualElement, scopes) {
  return typeof virtualElement === 'string'
}

module.exports = isTextNode

},{}],75:[function(require,module,exports){
function locatorBump (locator, index) {
  return locator + '.' + index
}

module.exports = locatorBump

},{}],76:[function(require,module,exports){
function normalizeName (tagName) {
  if (tagName[0] === tagName[0].toUpperCase()) tagName = tagName + '-component'
  return tagName
}

module.exports = normalizeName

},{}],77:[function(require,module,exports){
var updateElement = require('./updateElement')

function getElementByFlexId (topLevelDomElement, flexId, scopes) {
  if (!scopes.elementCache) scopes.elementCache = {}
  if (scopes.elementCache[flexId]) return scopes.elementCache[flexId]
  var attrSelector = '[haiku-id="' + flexId + '"]'
  var elByHaikuId = topLevelDomElement.ownerDocument.querySelector(attrSelector)
  if (elByHaikuId) {
    scopes.elementCache[flexId] = elByHaikuId
    return scopes.elementCache[flexId]
  }
  var elById = topLevelDomElement.ownerDocument.getElementById(flexId)
  if (elById) {
    scopes.elementCache[flexId] = elById
    return scopes.elementCache[flexId]
  }
}

function patch (topLevelDomElement, virtualContainer, patchesDict, locator, hash, options, scopes) {
  if (Object.keys(patchesDict) < 1) return topLevelDomElement
  for (var flexId in patchesDict) {
    var virtualElement = patchesDict[flexId]

    if (virtualElement && options.modifier) {
      var virtualReplacement = options.modifier(virtualElement)
      if (virtualReplacement !== undefined) {
        virtualElement = virtualReplacement
      }
    }

    var domElement = getElementByFlexId(topLevelDomElement, flexId, scopes)
    if (domElement) {
      updateElement(domElement, virtualElement, domElement.parentNode, virtualElement.__parent, domElement.haiku.locator, hash, options, scopes, true)
    }
  }
}

module.exports = patch

},{"./updateElement":83}],78:[function(require,module,exports){
function removeElement (domElement, hash, options, scopes) {
  domElement.parentNode.removeChild(domElement)
  return domElement
}

module.exports = removeElement

},{}],79:[function(require,module,exports){
var renderTree = require('./renderTree')

function render (domElement, virtualContainer, virtualTree, locator, hash, options, scopes) {
  return renderTree(domElement, virtualContainer, [virtualTree], locator, hash, options, scopes)
}

module.exports = render

},{"./renderTree":80}],80:[function(require,module,exports){
var isBlankString = require('./isBlankString')
var removeElement = require('./removeElement')
var locatorBump = require('./locatorBump')

function renderTree (domElement, virtualElement, virtualChildren, locator, hash, options, scopes, isPatchOperation) {
  hash[locator] = domElement

  if (!domElement.haiku) domElement.haiku = {}
  domElement.haiku.locator = locator
  domElement.haiku.element = virtualElement

  if (!Array.isArray(virtualChildren)) {
    return domElement
  }

  while (virtualChildren.length > 0 && isBlankString(virtualChildren[0])) {
    virtualChildren.shift()
  }

  var max = virtualChildren.length
  if (max < domElement.childNodes.length) max = domElement.childNodes.length

  for (var i = 0; i < max; i++) {
    var virtualChild = virtualChildren[i]
    var domChild = domElement.childNodes[i]
    var sublocator = locatorBump(locator, i)

    if (virtualChild && options.modifier) {
      var virtualReplacement = options.modifier(virtualChild)
      if (virtualReplacement !== undefined) {
        virtualChild = virtualReplacement
      }
    }

    if (!virtualChild && !domChild) {
      continue
    } else if (!virtualChild && domChild) {
      removeElement(domChild, hash, options, scopes)
      delete hash[sublocator]
    } else if (virtualChild && !domChild) {
      var insertedElement = appendChild(null, virtualChild, domElement, virtualElement, sublocator, hash, options, scopes)
      hash[sublocator] = insertedElement
    } else {
      if (!domChild.haiku) domChild.haiku = {}
      domChild.haiku.locator = sublocator
      if (!domChild.haiku.element) domChild.haiku.element = virtualChild
      updateElement(domChild, virtualChild, domElement, virtualElement, sublocator, hash, options, scopes, isPatchOperation)
    }
  }

  return domElement
}

module.exports = renderTree

var appendChild = require('./appendChild')
var updateElement = require('./updateElement')

},{"./appendChild":55,"./isBlankString":70,"./locatorBump":75,"./removeElement":78,"./updateElement":83}],81:[function(require,module,exports){
var applyLayout = require('./applyLayout')
var isTextNode = require('./isTextNode')

function replaceElement (domElement, virtualElement, parentDomNode, parentVirtualElement, locator, hash, options, scopes) {
  var newElement
  if (isTextNode(virtualElement)) newElement = createTextNode(domElement, virtualElement, options, scopes)
  else newElement = createTagNode(domElement, virtualElement, parentVirtualElement, locator, hash, options, scopes)

  applyLayout(newElement, virtualElement, parentDomNode, parentVirtualElement, options, scopes)

  parentDomNode.replaceChild(newElement, domElement)
  return newElement
}

module.exports = replaceElement

var createTextNode = require('./createTextNode')
var createTagNode = require('./createTagNode')

},{"./applyLayout":56,"./createTagNode":64,"./createTextNode":65,"./isTextNode":74}],82:[function(require,module,exports){
var createTextNode = require('./createTextNode')

function replaceElementWithText (domElement, textContent, options, scopes) {
  if (domElement) {
    if (domElement.textContent !== textContent) {
      var parentNode = domElement.parentNode
      var textNode = createTextNode(domElement, textContent, options, scopes)
      parentNode.replaceChild(textNode, domElement)
    }
  }
  return domElement
}

module.exports = replaceElementWithText

},{"./createTextNode":65}],83:[function(require,module,exports){
var applyLayout = require('./applyLayout')
var assignAttributes = require('./assignAttributes')
var isSvgElementName = require('./isSvgElementName')
var getTypeAsString = require('./getTypeAsString')

var OBJECT = 'object'

function updateElement (domElement, virtualElement, parentNode, parentVirtualElement, locator, hash, options, scopes, isPatchOperation) {
  // If a text node, go straight to 'replace' since we don't know the tag name
  if (isTextNode(virtualElement, scopes)) {
    replaceElementWithText(domElement, virtualElement, options, scopes)
    return virtualElement
  }

  if (!domElement.haiku) domElement.haiku = {}

  var domTagName = domElement.tagName.toLowerCase().trim()
  var elName = normalizeName(getTypeAsString(virtualElement))
  var virtualElementTagName = elName.toLowerCase().trim()
  var incomingKey = virtualElement.key || virtualElement.attributes && virtualElement.attributes.key
  var existingKey = domElement.haiku && domElement.haiku.key
  var isKeyDifferent = incomingKey !== null && incomingKey !== undefined && incomingKey !== existingKey

  if (domTagName !== virtualElementTagName) {
    return replaceElement(domElement, virtualElement, parentNode, parentVirtualElement, locator, hash, options, scopes)
  }

  if (isKeyDifferent) {
    return replaceElement(domElement, virtualElement, parentNode, parentVirtualElement, locator, hash, options, scopes)
  }

  if (isSvgElementName(elName, scopes)) {
    updateSvgElement(domElement, elName, virtualElement.attributes, virtualElement.children, virtualElement, parentNode, parentVirtualElement, locator, hash, options, scopes, isPatchOperation, isKeyDifferent)
    if (incomingKey !== undefined && incomingKey !== null) domElement.haiku.key = incomingKey
    return domElement
  }

  if (virtualElement.attributes && typeof virtualElement.attributes === OBJECT) assignAttributes(domElement, virtualElement.attributes, options, scopes, isPatchOperation, isKeyDifferent)
  applyLayout(domElement, virtualElement, parentNode, parentVirtualElement, options, scopes, isPatchOperation, isKeyDifferent)
  if (incomingKey !== undefined && incomingKey !== null) domElement.haiku.key = incomingKey

  if (Array.isArray(virtualElement.children)) {
    renderTree(domElement, virtualElement, virtualElement.children, locator, hash, options, scopes, isPatchOperation)
  } else if (!virtualElement.children) {
    // In case of falsy virtual children, we still need to remove elements that were already there
    renderTree(domElement, virtualElement, [], locator, hash, options, scopes, isPatchOperation)
  }

  return domElement
}

module.exports = updateElement

var renderTree = require('./renderTree')
var updateSvgElement = require('./updateSvgElement')
var replaceElementWithText = require('./replaceElementWithText')
var replaceElement = require('./replaceElement')
var normalizeName = require('./normalizeName')
var isTextNode = require('./isTextNode')

},{"./applyLayout":56,"./assignAttributes":57,"./getTypeAsString":67,"./isSvgElementName":73,"./isTextNode":74,"./normalizeName":76,"./renderTree":80,"./replaceElement":81,"./replaceElementWithText":82,"./updateSvgElement":84}],84:[function(require,module,exports){
var applyLayout = require('./applyLayout')
var assignAttributes = require('./assignAttributes')

var OBJECT = 'object'

function updateSvgElement (svgDomElement, elementName, attributes, virtualChildren, virtualElement, parentDomNode, parentVirtualElement, locator, hash, options, scopes, isPatchOperation, isKeyDifferent) {
  if (attributes && typeof attributes === OBJECT) assignAttributes(svgDomElement, attributes, options, scopes, isPatchOperation, isKeyDifferent)
  applyLayout(svgDomElement, virtualElement, parentDomNode, parentVirtualElement, options, scopes, isPatchOperation, isKeyDifferent)
  if (Array.isArray(virtualChildren)) renderTree(svgDomElement, virtualElement, virtualChildren, locator, hash, options, scopes, isPatchOperation)
}

module.exports = updateSvgElement

var renderTree = require('./renderTree')

},{"./applyLayout":56,"./assignAttributes":57,"./renderTree":80}],85:[function(require,module,exports){
function isUndef (thing) {
  return thing === undefined
}

function chooseOne (thing, alt) {
  if (isUndef(thing)) return alt
  return thing
}

function Store () {
  this.data = {}
}

Store.prototype.partition = function partition (address) {
  if (!this.data[address]) this.data[address] = {}
  return address
}

Store.prototype.init = function init (address, key, type) {
  this.partition(address)
  if (isUndef(this.data[address][key])) this.data[address][key] = chooseOne(type, {})
  return type
}

Store.prototype.get = function get (address, key) {
  this.init(address, key)
  return this.data[address][key]
}

Store.prototype.set = function set (address, key, payload) {
  this.init(address, key)
  this.data[address][key] = payload
  return payload
}

Store.prototype.push = function push (address, key, payload) {
  this.init(address, key, [])
  return this.data[address][key].push(payload)
}

Store.prototype.pull = function pull (address, key) {
  this.init(address, key, [])
  return this.data[address][key].splice(0)
}

Store.prototype.deallocate = function deallocate (address) {
  for (var key in this.data[address]) delete this.data[address][key]
  this.data[address] = null
  return null
}

Store.prototype.allocate = function allocate (address) {
  var api = {}
  this.partition(address)
  api._data = this.data[address]
  api.get = this.get.bind(this, address)
  api.set = this.set.bind(this, address)
  api.push = this.push.bind(this, address)
  api.pull = this.pull.bind(this, address)
  api.deallocate = this.deallocate.bind(this, address)
  return api
}

module.exports = Store

},{}],86:[function(require,module,exports){
var vanityHandlers = require('haiku-bytecode/src/properties/dom/vanities')
var queryTree = require('haiku-bytecode/src/cssQueryTree')
var Layout3D = require('haiku-bytecode/src/Layout3D')
var ValueBuilder = require('haiku-bytecode/src/ValueBuilder')
var scopifyElements = require('haiku-bytecode/src/scopifyElements')
var initializeTreeAttributes = require('./helpers/initializeTreeAttributes')

var Component = require('./component')
var Timeline = require('./timeline')

var IDENTITY_MATRIX = Layout3D.createMatrix()
var HAIKU_ID_ATTRIBUTE = 'haiku-id'
var CSS_QUERY_MAPPING = {
  name: 'elementName',
  attributes: 'attributes',
  children: 'children'
}
var FUNCTION_TYPE = 'function'
var STRING_TYPE = 'string'

function Template (template, component) {
  this.template = template
  this.component = component
  this.builder = new ValueBuilder(component, template)
  this._matches = {}
  this._controllerEventHandlers = []
}

Template.prototype.getTree = function getTree () {
  return this.template
}

Template.prototype.expand = function _expand (context, component, container, inputs, options) {
  applyContextChanges(component, inputs, this.template, container, this, context, options || {})
  var tree = expandElement(this.template, context)
  return tree
}

Template.prototype.eventListenerDeltas = function _eventListenerDeltas (context, component, container, inputs, timelinesRunning, eventsFired, inputsChanged) {
  var deltas = gatherEventListenerDeltas(this, this.template, container, context, component, inputs, timelinesRunning, eventsFired, inputsChanged)
  return deltas
}

Template.prototype.deltas = function _deltas (context, component, container, inputs, timelinesRunning, eventsFired, inputsChanged, options) {
  var deltas = gatherDeltas(this, this.template, container, context, component, inputs, timelinesRunning, eventsFired, inputsChanged, options || {})
  return deltas
}

function accumulateEventHandlers (out, component) {
  var bytecode = component.bytecode.bytecode
  if (bytecode.eventHandlers) {
    for (var j = 0; j < bytecode.eventHandlers.length; j++) {
      var eventHandler = bytecode.eventHandlers[j]
      var eventSelector = eventHandler.selector
      var eventName = eventHandler.name
      var handler = eventHandler.handler
      if (!out[eventSelector]) out[eventSelector] = {}
      handler.__handler = true
      out[eventSelector][eventName] = handler
    }
  }
}

function accumulateControllerEventListeners (out, me) {
  if (me._controllerEventHandlers && me._controllerEventHandlers.length > 0) {
    for (var l = 0; l < me._controllerEventHandlers.length; l++) {
      var customHandler = me._controllerEventHandlers[l]
      if (!out[customHandler.selector]) out[customHandler.selector] = {}
      out[customHandler.selector][customHandler.event] = customHandler.handler
    }
  }
}

function applyAccumulatedResults (results, deltas, me, template, context, component) {
  for (var selector in results) {
    var matches = findMatchingElements(selector, template, me._matches)
    if (!matches || matches.length < 1) continue
    var group = results[selector]
    for (var j = 0; j < matches.length; j++) {
      var match = matches[j]
      var domId = match && match.attributes && match.attributes.id
      var haikuId = match && match.attributes && match.attributes[HAIKU_ID_ATTRIBUTE]
      var flexibleId = haikuId || domId
      if (deltas && flexibleId) deltas[flexibleId] = match
      if (group.transform) match.__transformed = true
      for (var key in group) {
        var value = group[key]
        if (value && value.__handler) applyHandlerToElement(match, key, value, context, component)
        else applyPropertyToElement(match, key, value, context, component)
      }
    }
  }
}

function gatherEventListenerDeltas (me, template, container, context, component, inputs, timelinesRunning, eventsFired, inputsChanged) {
  var deltas = {}
  var results = {}
  accumulateEventHandlers(results, component)
  accumulateControllerEventListeners(results, me)
  applyAccumulatedResults(results, deltas, me, template, context, component)
  return deltas
}

function gatherDeltas (me, template, container, context, component, inputs, timelinesRunning, eventsFired, inputsChanged, options) {
  var deltas = {}
  var results = {}
  var bytecode = component.bytecode.bytecode
  for (var i = 0; i < timelinesRunning.length; i++) {
    var timeline = timelinesRunning[i]
    var time = timeline.getDomainTime()
    me.builder.build(results, timeline.name, time, bytecode.timelines, true, inputs, eventsFired, inputsChanged)
  }
  initializeTreeAttributes(template, container) // handlers/vanities depend on attributes objects existing
  applyAccumulatedResults(results, deltas, me, template, context, component)
  if (options.sizing) _doSizing(template, container, options.sizing, deltas)
  // TODO: Calculating the tree layout should be skipped for already visited node
  // that we have already calculated among the descendants of the changed one
  for (var flexId in deltas) {
    var changedNode = deltas[flexId]
    calculateTreeLayouts(changedNode, changedNode.__parent, options)
  }
  return deltas
}

function applyContextChanges (component, inputs, template, container, me, context, options) {
  var results = {}
  accumulateEventHandlers(results, component)
  accumulateControllerEventListeners(results, me)
  var bytecode = component.bytecode.bytecode
  if (bytecode.timelines) {
    for (var timelineName in bytecode.timelines) {
      var timeline = component.store.get('timelines')[timelineName]
      if (!timeline) continue
      // No need to run properties on timelines that aren't active
      if (!timeline.isActive()) continue
      if (timeline.isFinished()) {
        // For any timeline other than the default, shut it down if it has gone past
        // its final keyframe. The default timeline is a special case which provides
        // fallbacks/behavior that is essentially true throughout the lifespan of the component
        if (timelineName !== Timeline.DEFAULT_NAME) {
          continue
        }
      }
      var time = timeline.getDomainTime()
      me.builder.build(results, timelineName, time, bytecode.timelines, false, inputs)
    }
  }
  initializeTreeAttributes(template, container) // handlers/vanities depend on attributes objects existing
  scopifyElements(template) // I think this only needs to happen once when we build the full tree
  applyAccumulatedResults(results, null, me, template, context, component)
  if (options.sizing) _doSizing(template, container, options.sizing)
  calculateTreeLayouts(template, container, options)
  return template
}

function _doSizing (element, container, mode, deltas) {
  if (mode === true) mode = 'cover'
  var lx = element.layout.sizeAbsolute.x
  var ly = element.layout.sizeAbsolute.y
  var cx = container.layout.computed.size.x
  var cy = container.layout.computed.size.y
  if (!element.attributes.style['transform-origin']) element.attributes.style['transform-origin'] = 'top left'
  var changed = false
  switch (mode) {
    case 'normal':
      if (element.layout.scale.x !== 1.0) { changed = true; element.layout.scale.x = 1.0 }
      if (element.layout.scale.y !== 1.0) { changed = true; element.layout.scale.y = 1.0 }
      break
    case 'stretch':
      var sx1 = cx / lx
      var sy1 = cy / ly
      if (sx1 !== element.layout.scale.x) { changed = true; element.layout.scale.x = sx1 }
      if (sy1 !== element.layout.scale.y) { changed = true; element.layout.scale.y = sy1 }
      break
    case 'cover':
      var sx2 = cx / lx
      var sy2 = cy / ly
      var sf = (sx2 > sy2) ? sy2 : sx2
      if (sf !== element.layout.scale.x) { changed = true; element.layout.scale.x = sf }
      if (sf !== element.layout.scale.y) { changed = true; element.layout.scale.y = sf }
  }
  if (changed && deltas) {
    deltas[element.attributes[HAIKU_ID_ATTRIBUTE]] = element
  }
}

function expandElement (element, context) {
  if (typeof element.elementName === FUNCTION_TYPE) {
    if (!element.__instance) element.__instance = instantiateElement(element, context)
    // Handlers attach first since they may want to respond to an immediate property setter
    if (element.__handlers) {
      for (var key in element.__handlers) {
        var handler = element.__handlers[key]
        if (!handler.__subscribed) {
          // We might have a component from a system that doesn't adhere to our own internal API
          if (element.__instance.instance) {
            element.__instance.instance.on(key, handler)
          }
          handler.__subscribed = true
        }
      }
    }
    // Cache previous messages and don't repeat any that have the same value as last time
    if (!element.previous) element.previous = {}
    for (var name in element.attributes) {
      if (element.previous[name] === element.attributes[name]) continue
      element.previous[name] = element.attributes[name]
      // We might have a component from a system that doesn't adhere to our own internal API
      if (element.__instance.instance) {
        element.__instance.instance[name] = element.attributes[name] // Apply top-down behavior
      }
    }
    var interior = element.__instance.render()
    return expandElement(interior, context)
  } else if (typeof element.elementName === STRING_TYPE) {
    // Handlers attach first since they may want to respond to an immediate property setter
    if (element.__handlers) {
      for (var nativekey in element.__handlers) {
        var nativehandler = element.__handlers[nativekey]
        if (!nativehandler.__subscribed) {
          element.attributes[nativekey] = nativehandler
          nativehandler.__subscribed = true
        }
      }
    }
    var copy = shallowClone(element)
    if (element.children && element.children.length > 0) {
      for (var i = 0; i < element.children.length; i++) {
        var child = element.children[i]
        copy.children[i] = expandElement(child, context)
      }
    }
    return copy
  }
  return element
}

function shallowClone (element) {
  var clone = {}
  clone.__instance = element.__instance // Hack: Important to cache instance
  clone.__handlers = element.__handlers // Hack: Important to transfer event handlers
  clone.__transformed = element.__transformed // ditto
  clone.__parent = element.__parent
  clone.__scope = element.__scope
  clone.layout = element.layout
  clone.elementName = element.elementName
  clone.attributes = {}
  for (var key in element.attributes) clone.attributes[key] = element.attributes[key]
  clone.children = [] // Assigned downstream
  return clone
}

function instantiateElement (element, context) {
  var something = element.elementName(element.attributes, element.children, context)
  var instance
  if (Component.isBytecode(something)) instance = new Component(something, context.component.options, { internal: true })
  if (Component.isComponent(something)) instance = something
  instance.attributes = instance.props = element.attributes
  instance.children = instance.surrogates = element.children
  instance.context = context // Hack: Important
  instance.startTimeline(Timeline.DEFAULT_NAME) // Ensure we cue up timelines
  return instance
}

function findMatchingElements (selector, template, cache) {
  if (cache[selector]) return cache[selector]
  var matches = queryTree([], template, selector, CSS_QUERY_MAPPING)
  cache[selector] = matches
  return matches
}

function calculateTreeLayouts (tree, container, options) {
  if (!tree || typeof tree === 'string') return
  calculateNodeLayout(tree, container, options)
  if (!tree.children) return
  if (tree.children.length < 1) return
  for (var i = 0; i < tree.children.length; i++) calculateTreeLayouts(tree.children[i], tree, options)
}

function calculateNodeLayout (element, parent, options) {
  if (parent) {
    var parentSize = parent.layout.computed.size
    var computedLayout = Layout3D.computeLayout({}, element.layout, element.layout.matrix, IDENTITY_MATRIX, parentSize)
    if (computedLayout === false) { // False indicates 'don't show
      element.layout.computed = { invisible: true, size: parentSize || { x: 0, y: 0, z: 0 } }
    } else {
      element.layout.computed = computedLayout || { size: parentSize } // Need to pass some size to children, so if this element doesn't have one, use the parent's
    }
  }
}

function applyPropertyToElement (element, name, value, context, component) {
  if (vanityHandlers[element.elementName] && vanityHandlers[element.elementName][name]) {
    vanityHandlers[element.elementName][name](name, element, value, context, component)
  } else {
    element.attributes[name] = value
  }
}

function applyHandlerToElement (match, name, fn, context, component) {
  if (!match.__handlers) match.__handlers = {}
  match.__handlers[name] = fn
  return match
}

module.exports = Template

},{"./component":44,"./helpers/initializeTreeAttributes":49,"./timeline":87,"haiku-bytecode/src/Layout3D":9,"haiku-bytecode/src/ValueBuilder":13,"haiku-bytecode/src/cssQueryTree":25,"haiku-bytecode/src/properties/dom/vanities":34,"haiku-bytecode/src/scopifyElements":37}],87:[function(require,module,exports){
var Constants = require('./constants')
var _getMaxTimeFromDescriptor = require('haiku-bytecode/src/getTimelineMaxTime')
var Emitter = require('./emitter')

var NUMBER = 'number'

function Timeline (time, descriptor, name, options) {
  Emitter.create(this)
  this.name = name
  this.control = null
  this.global = time || 0
  this.local = 0
  this.active = true
  this.isPlaying = true
  this.max = _getMaxTimeFromDescriptor(descriptor)
  this.loop = !!(options && options.loop)
}

Timeline.DEFAULT_NAME = Constants.DEFAULT_TIMELINE_NAME

Timeline.prototype.performUpdate = function performUpdate (time) {
  var previous = this.global
  var delta = time - previous
  this.global = time

  if (this.isTimeControlled()) {
    this.local = this.control
  } else {
    // If we are a looping timeline, reset to zero once we've gone past our max
    if (this.loop && this.local > this.max) {
      this.local = 0 + this.max - this.local
    }
    this.local += delta
  }

  if (this.isFinished()) {
    this.isPlaying = false
  }

  this.emit('update')

  return this
}

Timeline.prototype.resetMax = function resetMax (descriptor) {
  this.max = _getMaxTimeFromDescriptor(descriptor)
  return this
}

Timeline.prototype.getDomainTime = function getDomainTime () {
  var dt
  if (this.local > this.max) {
    dt = this.max
  } else {
    dt = this.local
  }
  return dt
}

Timeline.prototype.isTimeControlled = function isTimeControlled () {
  return typeof this.control === NUMBER
}

Timeline.prototype.isFinished = function () {
  if (this.loop) return false
  return ~~this.local > this.max
}

Timeline.prototype.controlTime = function (time) {
  this.control = parseInt(time || 0, 10)
  return this
}

Timeline.prototype.start = function start (time, descriptor) {
  this.local = 0
  this.active = true
  this.isPlaying = true
  this.global = time || 0
  this.max = _getMaxTimeFromDescriptor(descriptor)
  return this
}

Timeline.prototype.stop = function stop (time, descriptor) {
  this.active = false
  this.isPlaying = false
  this.max = _getMaxTimeFromDescriptor(descriptor)
  return this
}

Timeline.prototype.isActive = function isActive () {
  return !!this.active
}

module.exports = Timeline

},{"./constants":45,"./emitter":48,"haiku-bytecode/src/getTimelineMaxTime":29}],88:[function(require,module,exports){
var assign = require('lodash.assign')
var Context = require('./context')
var Component = require('./component')
var Emitter = require('./emitter')

var ADDRESS_PREFIX = ''
var __contexts__ = []

var DEFAULTS = {
  automount: true,
  autoplay: true,
  loop: false,
  frame: null, // Function to run on every frame
  clock: {}, // See clock.js for options
  sizing: null, // Sizing mode (string: normal|stretch|cover)
  preserve3d: 'auto',
  contextMenu: 'enabled',
  position: 'relative',
  overflowX: null,
  overflowY: null
}

function wrapper (renderer, bytecode, wrapperOptions, platform) {
  if (!platform) {
    throw new Error('A runtime `platform` is required')
  }

  // Hot editing hook
  if (!platform.haiku) platform.haiku = {}

  if (!bytecode.template) {
    throw new Error('Bytecode `template` is required')
  }

  // Options can be passed at the wrapper level
  var options = assign({}, DEFAULTS, wrapperOptions)

  var component = new Component(bytecode, options)
  var context = new Context(component, options)
  var index = __contexts__.push(context) - 1
  var address = ADDRESS_PREFIX + index

  function runner (mount, runnerOptions) {
    // Hot editing hook
    if (!mount.haiku) mount.haiku = {}
    mount.haiku.context = context
    mount.haiku.player = component.instance // For debugging convenience and/or public usage

    // Options can also be passed at the execution level
    options = assign(options, runnerOptions) // Already merged with DEFAULTS
    assign(context.options, options) // Make sure new props are available on the context
    assign(component.options, options) // Make sure new props are available on the component

    if (renderer.menuize && options.contextMenu !== 'disabled') {
      renderer.menuize(mount, component.instance)
    }

    var controller
    if (options && options.controller) {
      controller = options.controller
    } else {
      controller = Emitter.create({})
    }

    controller.emit('haikuComponentWillInitialize', component.instance)
    component.instance.emit('haikuComponentWillInitialize', component.instance)
    if (options.onHaikuComponentWillInitialize) options.onHaikuComponentWillInitialize(component.instance)

    runner.controller = controller

    var ticks = 0
    var hash = {} // Dictionary of ids-to-elements, for quick lookups

    function performFullFlush () {
      var container = renderer.createContainer(mount)
      var tree = context.component.render(container, options)
      renderer.render(mount, container, tree, address, hash, options, component._scopes)
    }

    function performPatch () {
      var container = renderer.createContainer(mount)
      var patches = context.component.patch(container, options)
      renderer.patch(mount, container, patches, address, hash, options, component._scopes)
    }

    function updateRootStyles () {
      var _root = mount && mount.children[0]
      if (_root) {
        if (options.position) {
          if (_root.style.position !== options.position) {
            _root.style.position = options.position
          }
        }

        if (options.overflowX) {
          if (_root.style.overflowX !== options.overflowX) {
            _root.style.overflowX = options.overflowX
          }
        }

        if (options.overflowY) {
          if (_root.style.overflowY !== options.overflowY) {
            _root.style.overflowY = options.overflowY
          }
        }
      }
    }

    // function performEventsOnlyFlush () {
    //   var container = renderer.createContainer(mount)
    //   var eventListenerPatches = context.component.patchEventListeners(container)
    //   renderer.patch(mount, container, eventListenerPatches, address, hash, options, component._scopes)
    // }

    function tick () {
      updateRootStyles()

      // After we've hydrated the tree the first time, we can proceed with patches,
      // unless the component needs to perform a full flush for some reason
      if (context.component.shouldPerformFullFlush() || ticks < 1) {
        performFullFlush()
      } else {
        performPatch()
      }
      if (ticks < 1) {
        // Handle component mount
        if (!options.autoplay) {
          // If no autoplay, stop the clock immediately after we've mounted
          var timelineInstances = component.instance.getTimelines()
          for (var timelineName in timelineInstances) {
            var timelineInstance = timelineInstances[timelineName]
            timelineInstance.pause()
          }
        }
        controller.emit('haikuComponentDidMount', component.instance)
        component.instance.emit('haikuComponentDidMount', component.instance)
        if (options.onHaikuComponentDidMount) options.onHaikuComponentDidMount(component.instance)
      }
      ticks++
    }

    context.clock.tickables.push({
      performTick: tick
    })

    // Handle component initialization
    if (options.automount) {
      // Starting the clock has the effect of doing a render at time 0, a.k.a. mount
      component.instance.getClock().start()
    }

    // Hot editing hook
    runner.tick = tick

    controller.emit('haikuComponentDidInitialize', component.instance)
    component.instance.emit('haikuComponentDidInitialize', component.instance)
    if (options.onHaikuComponentDidInitialize) options.onHaikuComponentDidInitialize(component.instance)

    // Expose public API to end user for programmatic control
    return component.instance
  }

  // Hot editing hooks
  runner.context = context
  runner.component = component
  runner.bytecode = bytecode
  runner.renderer = renderer

  return runner
}

module.exports = wrapper

},{"./component":44,"./context":46,"./emitter":48,"lodash.assign":136}],89:[function(require,module,exports){
var internal_1 = require("../internal");
exports.ease = internal_1.cubicBezier(.25, .1, .25, .1);

},{"../internal":132}],90:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeIn = internal_1.cubicBezier(.42, 0, 1, 1);

},{"../internal":132}],91:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeInBack = function (x) { return internal_1.c3 * x * x * x - internal_1.c1 * x * x; };

},{"../internal":132}],92:[function(require,module,exports){
var index_1 = require("./index");
exports.easeInBounce = function (x) { return 1 - index_1.easeOutBounce(1 - x); };

},{"./index":123}],93:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeInCirc = function (x) { return 1 - internal_1.sqrt(1 - (x * x)); };

},{"../internal":132}],94:[function(require,module,exports){
exports.easeInCubic = function (x) { return x * x * x; };

},{}],95:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeInElastic = function (n) {
    return !n || n === 1 ? n : -1 * internal_1.sin((n - 1.1) * internal_1.tau * 2.5) * internal_1.pow(2, 10 * (n - 1));
};

},{"../internal":132}],96:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeInExpo = function (x) { return x === 0 ? 0 : internal_1.pow(2, 10 * x - 10); };

},{"../internal":132}],97:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeInOut = internal_1.cubicBezier(.42, 0, .58, 1);

},{"../internal":132}],98:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeInOutBack = function (x) { return x < 0.5
    ? (internal_1.pow(2 * x, 2) * ((internal_1.c2 + 1) * 2 * x - internal_1.c2)) / 2
    : (internal_1.pow(2 * x - 2, 2) * ((internal_1.c2 + 1) * (x * 2 - 2) + internal_1.c2) + 2) / 2; };

},{"../internal":132}],99:[function(require,module,exports){
var index_1 = require("./index");
exports.easeInOutBounce = function (x) { return x < 0.5
    ? (1 - index_1.easeOutBounce(1 - 2 * x)) / 2
    : (1 + index_1.easeOutBounce(2 * x - 1)) / 2; };

},{"./index":123}],100:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeInOutCirc = function (x) { return x < 0.5
    ? (1 - internal_1.sqrt(1 - internal_1.pow(2 * x, 2))) / 2
    : (internal_1.sqrt(1 - internal_1.pow(-2 * x + 2, 2)) + 1) / 2; };

},{"../internal":132}],101:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeInOutCubic = function (x) { return x < 0.5
    ? 4 * x * x * x
    : 1 - internal_1.pow(-2 * x + 2, 3) / 2; };

},{"../internal":132}],102:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeInOutElastic = function (n) {
    if (!n || n === 1)
        return n;
    n *= 2;
    if (n < 1) {
        return -0.5 * (internal_1.pow(2, 10 * (n - 1)) * internal_1.sin((n - 1.1) * internal_1.tau / .4));
    }
    return internal_1.pow(2, -10 * (n - 1)) * internal_1.sin((n - 1.1) * internal_1.tau / .4) * .5 + 1;
};

},{"../internal":132}],103:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeInOutExpo = function (x) { return x === 0
    ? 0 : x === 1
    ? 1 : x < 0.5
    ? internal_1.pow(2, 20 * x - 10) / 2
    : (2 - internal_1.pow(2, -20 * x + 10)) / 2; };

},{"../internal":132}],104:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeInOutQuad = function (x) { return x < 0.5 ?
    2 * x * x :
    1 - internal_1.pow(-2 * x + 2, 2) / 2; };

},{"../internal":132}],105:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeInOutQuart = function (x) { return x < 0.5
    ? 8 * x * x * x * x
    : 1 - internal_1.pow(-2 * x + 2, 4) / 2; };

},{"../internal":132}],106:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeInOutQuint = function (x) { return x < 0.5
    ? 16 * x * x * x * x * x
    : 1 - internal_1.pow(-2 * x + 2, 5) / 2; };

},{"../internal":132}],107:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeInOutSine = function (x) { return -(internal_1.cos(internal_1.pi * x) - 1) / 2; };

},{"../internal":132}],108:[function(require,module,exports){
exports.easeInQuad = function (x) { return x * x; };

},{}],109:[function(require,module,exports){
exports.easeInQuart = function (x) { return x * x * x * x; };

},{}],110:[function(require,module,exports){
exports.easeInQuint = function (x) { return x * x * x * x * x; };

},{}],111:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeInSine = function (x) { return 1 - internal_1.cos(x * internal_1.pi / 2); };

},{"../internal":132}],112:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeOut = internal_1.cubicBezier(0, 0, .58, 1);

},{"../internal":132}],113:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeOutBack = function (x) { return 1 + internal_1.c3 * internal_1.pow(x - 1, 3) + internal_1.c1 * internal_1.pow(x - 1, 2); };

},{"../internal":132}],114:[function(require,module,exports){
exports.easeOutBounce = function (x) {
    var n1 = 7.5625;
    var d1 = 2.75;
    return x < 1 / d1
        ? n1 * x * x
        : x < 2 / d1
            ? n1 * (x -= (1.5 / d1)) * x + .75
            : x < 2.5 / d1
                ? n1 * (x -= (2.25 / d1)) * x + .9375
                : n1 * (x -= (2.625 / d1)) * x + .984375;
};

},{}],115:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeOutCirc = function (x) { return internal_1.sqrt(1 - ((x - 1) * (x - 1))); };

},{"../internal":132}],116:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeOutCubic = function (x) { return 1 - internal_1.pow(1 - x, 3); };

},{"../internal":132}],117:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeOutElastic = function (n) {
    if (!n || n === 1)
        return n;
    var s, a = 0.1, p = 0.4;
    if (!a || a < 1) {
        a = 1;
        s = p / 4;
    }
    else
        s = p * Math.asin(1 / a) / internal_1.tau;
    return (a * internal_1.pow(2, -10 * n) * internal_1.sin((n - s) * (internal_1.tau) / p) + 1);
};

},{"../internal":132}],118:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeOutExpo = function (x) { return x === 1 ? 1 : 1 - internal_1.pow(2, -10 * x); };

},{"../internal":132}],119:[function(require,module,exports){
exports.easeOutQuad = function (x) { return 1 - (1 - x) * (1 - x); };

},{}],120:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeOutQuart = function (x) { return 1 - internal_1.pow(1 - x, 4); };

},{"../internal":132}],121:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeOutQuint = function (x) { return 1 - internal_1.pow(1 - x, 5); };

},{"../internal":132}],122:[function(require,module,exports){
var internal_1 = require("../internal");
exports.easeOutSine = function (x) { return internal_1.sin(x * internal_1.pi / 2); };

},{"../internal":132}],123:[function(require,module,exports){
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./ease"));
__export(require("./easeIn"));
__export(require("./easeInBack"));
__export(require("./easeInBounce"));
__export(require("./easeInCirc"));
__export(require("./easeInCubic"));
__export(require("./easeInElastic"));
__export(require("./easeInExpo"));
__export(require("./easeInOut"));
__export(require("./easeInOutBack"));
__export(require("./easeInOutBounce"));
__export(require("./easeInOutCirc"));
__export(require("./easeInOutCubic"));
__export(require("./easeInOutElastic"));
__export(require("./easeInOutExpo"));
__export(require("./easeInOutQuad"));
__export(require("./easeInOutQuart"));
__export(require("./easeInOutQuint"));
__export(require("./easeInOutSine"));
__export(require("./easeInQuad"));
__export(require("./easeInQuart"));
__export(require("./easeInQuint"));
__export(require("./easeInSine"));
__export(require("./easeOut"));
__export(require("./easeOutBack"));
__export(require("./easeOutBounce"));
__export(require("./easeOutCirc"));
__export(require("./easeOutCubic"));
__export(require("./easeOutElastic"));
__export(require("./easeOutExpo"));
__export(require("./easeOutQuad"));
__export(require("./easeOutQuart"));
__export(require("./easeOutQuint"));
__export(require("./easeOutSine"));
__export(require("./linear"));
__export(require("./stepEnd"));
__export(require("./stepStart"));

},{"./ease":89,"./easeIn":90,"./easeInBack":91,"./easeInBounce":92,"./easeInCirc":93,"./easeInCubic":94,"./easeInElastic":95,"./easeInExpo":96,"./easeInOut":97,"./easeInOutBack":98,"./easeInOutBounce":99,"./easeInOutCirc":100,"./easeInOutCubic":101,"./easeInOutElastic":102,"./easeInOutExpo":103,"./easeInOutQuad":104,"./easeInOutQuart":105,"./easeInOutQuint":106,"./easeInOutSine":107,"./easeInQuad":108,"./easeInQuart":109,"./easeInQuint":110,"./easeInSine":111,"./easeOut":112,"./easeOutBack":113,"./easeOutBounce":114,"./easeOutCirc":115,"./easeOutCubic":116,"./easeOutElastic":117,"./easeOutExpo":118,"./easeOutQuad":119,"./easeOutQuart":120,"./easeOutQuint":121,"./easeOutSine":122,"./linear":124,"./stepEnd":125,"./stepStart":126}],124:[function(require,module,exports){
/**
 * Animations change at a constant speed
 */
exports.linear = function (x) { return x; };

},{}],125:[function(require,module,exports){
var internal_1 = require("../internal");
exports.stepEnd = internal_1.steps(1, 0);

},{"../internal":132}],126:[function(require,module,exports){
var internal_1 = require("../internal");
exports.stepStart = internal_1.steps(1, 1);

},{"../internal":132}],127:[function(require,module,exports){
exports.pi = Math.PI;
exports.tau = 2 * exports.pi;
exports.epsilon = 0.0001;
exports.c1 = 1.70158;
exports.c2 = exports.c1 * 1.525;
exports.c3 = exports.c1 + 1;
exports.c4 = exports.tau / 3;
exports.c5 = exports.tau / 4.5;

},{}],128:[function(require,module,exports){
var c = "cubic-bezier";
var s = "steps";
exports.ease = c + "(.25,.1,.25,1)";
exports.easeIn = c + "(.42,0,1,1)";
exports.easeInBack = c + "(.6,-.28,.735,.045)";
exports.easeInCirc = c + "(.6,.04,.98,.335)";
exports.easeInCubic = c + "(.55,.055,.675,.19)";
exports.easeInExpo = c + "(.95,.05,.795,.035)";
exports.easeInOut = c + "(.42,0,.58,1)";
exports.easeInOutBack = c + "(.68,-.55,.265,1.55)";
exports.easeInOutCirc = c + "(.785,.135,.15,.86)";
exports.easeInOutCubic = c + "(.645,.045,.355,1)";
exports.easeInOutExpo = c + "(1,0,0,1)";
exports.easeInOutQuad = c + "(.455,.03,.515,.955)";
exports.easeInOutQuart = c + "(.77,0,.175,1)";
exports.easeInOutQuint = c + "(.86,0,.07,1)";
exports.easeInOutSine = c + "(.445,.05,.55,.95)";
exports.easeInQuad = c + "(.55,.085,.68,.53)";
exports.easeInQuart = c + "(.895,.03,.685,.22)";
exports.easeInQuint = c + "(.755,.05,.855,.06)";
exports.easeInSine = c + "(.47,0,.745,.715)";
exports.easeOut = c + "(0,0,.58,1)";
exports.easeOutBack = c + "(.175,.885,.32,1.275)";
exports.easeOutCirc = c + "(.075,.82,.165,1)";
exports.easeOutCubic = c + "(.215,.61,.355,1)";
exports.easeOutExpo = c + "(.19,1,.22,1)";
exports.easeOutQuad = c + "(.25,.46,.45,.94)";
exports.easeOutQuart = c + "(.165,.84,.44,1)";
exports.easeOutQuint = c + "(.23,1,.32,1)";
exports.easeOutSine = c + "(.39,.575,.565,1)";
exports.elegantSlowStartEnd = c + "(.175,.885,.32,1.275)";
exports.linear = c + "(0,0,1,1)";
exports.stepEnd = s + "(1,0)";
exports.stepStart = s + "(1,1)";

},{}],129:[function(require,module,exports){
var index_1 = require("./index");
var camelCaseRegex = /([a-z])[- ]([a-z])/ig;
var cssFunctionRegex = /^([a-z-]+)\(([^\)]+)\)$/i;
var cssEasings = { ease: index_1.ease, easeIn: index_1.easeIn, easeOut: index_1.easeOut, easeInOut: index_1.easeInOut, stepStart: index_1.stepStart, stepEnd: index_1.stepEnd, linear: index_1.linear };
var camelCaseMatcher = function (match, p1, p2) { return p1 + p2.toUpperCase(); };
var toCamelCase = function (value) { return typeof value === 'string'
    ? value.replace(camelCaseRegex, camelCaseMatcher) : ''; };
var find = function (nameOrCssFunction) {
    // search for a compatible known easing
    var easingName = toCamelCase(nameOrCssFunction);
    var easing = cssEasings[easingName] || nameOrCssFunction;
    var matches = cssFunctionRegex.exec(easing);
    if (!matches) {
        throw new Error('could not parse css function');
    }
    return [matches[1]].concat(matches[2].split(','));
};
exports.cssFunction = function (easingString) {
    var p = find(easingString);
    var fnName = p[0];
    if (fnName === 'steps') {
        return index_1.steps(+p[1], p[2]);
    }
    if (fnName === 'cubic-bezier') {
        return index_1.cubicBezier(+p[1], +p[2], +p[3], +p[4]);
    }
    if (fnName === 'frames') {
        return index_1.frames(+p[1]);
    }
    throw new Error('unknown css function');
};

},{"./index":132}],130:[function(require,module,exports){
var index_1 = require("./index");
var bezier = function (n1, n2, t) {
    return 3 * n1 * (1 - t) * (1 - t) * t + 3 * n2 * (1 - t) * t * t + t * t * t;
};
exports.cubicBezier = function (p0, p1, p2, p3) {
    if (p0 < 0 || p0 > 1 || p2 < 0 || p2 > 1) {
        return function (x) { return x; };
    }
    return function (x) {
        if (x === 0 || x === 1) {
            return x;
        }
        var start = 0;
        var end = 1;
        var limit = 19;
        do {
            var mid = (start + end) * .5;
            var xEst = bezier(p0, p2, mid);
            if (index_1.abs(x - xEst) < index_1.epsilon) {
                return bezier(p1, p3, mid);
            }
            if (xEst < x) {
                start = mid;
            }
            else {
                end = mid;
            }
        } while (--limit);
        // limit is reached
        return x;
    };
};

},{"./index":132}],131:[function(require,module,exports){
var internal_1 = require("../internal");
exports.frames = function (n) {
    var q = 1 / (n - 1);
    return function (x) {
        var o = internal_1.floor(x * n) * q;
        return x >= 0 && o < 0 ? 0 : x <= 1 && o > 1 ? 1 : o;
    };
};

},{"../internal":132}],132:[function(require,module,exports){
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./constants"));
__export(require("./cssEasings"));
__export(require("./cssFunction"));
__export(require("./cubicBezier"));
__export(require("./frames"));
__export(require("./math"));
__export(require("./steps"));

},{"./constants":127,"./cssEasings":128,"./cssFunction":129,"./cubicBezier":130,"./frames":131,"./math":133,"./steps":134}],133:[function(require,module,exports){
exports.abs = Math.abs;
exports.asin = Math.asin;
exports.floor = Math.floor;
exports.cos = Math.cos;
exports.pow = Math.pow;
exports.sin = Math.sin;
exports.sqrt = Math.sqrt;

},{}],134:[function(require,module,exports){
exports.steps = function (count, pos) {
    var q = count / 1;
    var p = pos === 'end'
        ? 0 : pos === 'start'
        ? 1 : pos || 0;
    return function (x) { return x >= 1 ? 1 : (p * q + x) - (p * q + x) % q; };
};

},{}],135:[function(require,module,exports){
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var internal_1 = require("./internal");
exports.cssFunction = internal_1.cssFunction;
exports.cubicBezier = internal_1.cubicBezier;
exports.frames = internal_1.frames;
exports.steps = internal_1.steps;
__export(require("./curves"));
var css = require("./internal/cssEasings");
exports.css = css;

},{"./curves":123,"./internal":132,"./internal/cssEasings":128}],136:[function(require,module,exports){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = assign;

},{}],137:[function(require,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, false, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = clone;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],138:[function(require,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    Set = getNative(root, 'Set'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each
 * element is kept.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length)
    ? baseUniq(array)
    : [];
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = uniq;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],139:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],140:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],141:[function(require,module,exports){
(function (global){
var now = require('performance-now')
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"performance-now":142}],142:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);



}).call(this,require('_process'))
},{"_process":140}],143:[function(require,module,exports){
'use strict';

var isArrayish = require('is-arrayish');

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};

},{"is-arrayish":144}],144:[function(require,module,exports){
'use strict';

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

},{}],145:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.valid = exports.toPoints = exports.toPath = undefined;

var _toPath = require('./toPath');

var _toPath2 = _interopRequireDefault(_toPath);

var _toPoints = require('./toPoints');

var _toPoints2 = _interopRequireDefault(_toPoints);

var _valid = require('./valid');

var _valid2 = _interopRequireDefault(_valid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.toPath = _toPath2.default;
exports.toPoints = _toPoints2.default;
exports.valid = _valid2.default;
},{"./toPath":146,"./toPoints":147,"./valid":148}],146:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _toPoints = require('./toPoints');

var _toPoints2 = _interopRequireDefault(_toPoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pointsToD = function (p) {
  var d = '';
  var i = 0;
  var firstPoint = void 0;

  for (var _iterator = p, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var point = _ref;
    var _point$curve = point.curve,
        curve = _point$curve === undefined ? false : _point$curve,
        moveTo = point.moveTo,
        x = point.x,
        y = point.y;

    var isFirstPoint = i === 0 || moveTo;
    var isLastPoint = i === p.length - 1 || p[i + 1].moveTo;
    var prevPoint = i === 0 ? null : p[i - 1];

    if (isFirstPoint) {
      firstPoint = point;

      if (!isLastPoint) {
        d += 'M' + x + ',' + y;
      }
    } else if (curve) {
      switch (curve.type) {
        case 'arc':
          var _point$curve2 = point.curve,
              _point$curve2$largeAr = _point$curve2.largeArcFlag,
              largeArcFlag = _point$curve2$largeAr === undefined ? 0 : _point$curve2$largeAr,
              rx = _point$curve2.rx,
              ry = _point$curve2.ry,
              _point$curve2$sweepFl = _point$curve2.sweepFlag,
              sweepFlag = _point$curve2$sweepFl === undefined ? 0 : _point$curve2$sweepFl,
              _point$curve2$xAxisRo = _point$curve2.xAxisRotation,
              xAxisRotation = _point$curve2$xAxisRo === undefined ? 0 : _point$curve2$xAxisRo;

          d += 'A' + rx + ',' + ry + ',' + xAxisRotation + ',' + largeArcFlag + ',' + sweepFlag + ',' + x + ',' + y;
          break;
        case 'cubic':
          var _point$curve3 = point.curve,
              cx1 = _point$curve3.x1,
              cy1 = _point$curve3.y1,
              cx2 = _point$curve3.x2,
              cy2 = _point$curve3.y2;

          d += 'C' + cx1 + ',' + cy1 + ',' + cx2 + ',' + cy2 + ',' + x + ',' + y;
          break;
        case 'quadratic':
          var _point$curve4 = point.curve,
              qx1 = _point$curve4.x1,
              qy1 = _point$curve4.y1;

          d += 'Q' + qx1 + ',' + qy1 + ',' + x + ',' + y;
          break;
      }

      if (isLastPoint && x === firstPoint.x && y === firstPoint.y) {
        d += 'Z';
      }
    } else if (isLastPoint && x === firstPoint.x && y === firstPoint.y) {
      d += 'Z';
    } else if (x !== prevPoint.x && y !== prevPoint.y) {
      d += 'L' + x + ',' + y;
    } else if (x !== prevPoint.x) {
      d += 'H' + x;
    } else if (y !== prevPoint.y) {
      d += 'V' + y;
    }

    i++;
  }

  return d;
};

var toPath = function (s) {
  var isPoints = Array.isArray(s);
  var isGroup = isPoints ? Array.isArray(s[0]) : s.type === 'g';
  var points = isPoints ? s : isGroup ? s.shapes.map(function (shp) {
    return (0, _toPoints2.default)(shp);
  }) : (0, _toPoints2.default)(s);

  if (isGroup) {
    return points.map(function (p) {
      return pointsToD(p);
    });
  }

  return pointsToD(points);
};

exports.default = toPath;
},{"./toPoints":147}],147:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var toPoints = function (_ref) {
  var type = _ref.type,
      props = _objectWithoutProperties(_ref, ['type']);

  switch (type) {
    case 'circle':
      return getPointsFromCircle(props);
    case 'ellipse':
      return getPointsFromEllipse(props);
    case 'line':
      return getPointsFromLine(props);
    case 'path':
      return getPointsFromPath(props);
    case 'polygon':
      return getPointsFromPolygon(props);
    case 'polyline':
      return getPointsFromPolyline(props);
    case 'rect':
      return getPointsFromRect(props);
    case 'g':
      return getPointsFromG(props);
    default:
      throw new Error('Not a valid shape type');
  }
};

var getPointsFromCircle = function (_ref2) {
  var cx = _ref2.cx,
      cy = _ref2.cy,
      r = _ref2.r;

  return [{ x: cx, y: cy - r, moveTo: true }, { x: cx, y: cy + r, curve: { type: 'arc', rx: r, ry: r, sweepFlag: 1 } }, { x: cx, y: cy - r, curve: { type: 'arc', rx: r, ry: r, sweepFlag: 1 } }];
};

var getPointsFromEllipse = function (_ref3) {
  var cx = _ref3.cx,
      cy = _ref3.cy,
      rx = _ref3.rx,
      ry = _ref3.ry;

  return [{ x: cx, y: cy - ry, moveTo: true }, { x: cx, y: cy + ry, curve: { type: 'arc', rx: rx, ry: ry, sweepFlag: 1 } }, { x: cx, y: cy - ry, curve: { type: 'arc', rx: rx, ry: ry, sweepFlag: 1 } }];
};

var getPointsFromLine = function (_ref4) {
  var x1 = _ref4.x1,
      x2 = _ref4.x2,
      y1 = _ref4.y1,
      y2 = _ref4.y2;

  return [{ x: x1, y: y1, moveTo: true }, { x: x2, y: y2 }];
};

var validCommands = /[MmLlHhVvCcSsQqTtAaZz]/g;

var commandLengths = {
  A: 7,
  C: 6,
  H: 1,
  L: 2,
  M: 2,
  Q: 4,
  S: 4,
  T: 2,
  V: 1,
  Z: 0
};

var relativeCommands = ['a', 'c', 'h', 'l', 'm', 'q', 's', 't', 'v'];

var isRelative = function (command) {
  return relativeCommands.indexOf(command) !== -1;
};

var optionalArcKeys = ['xAxisRotation', 'largeArcFlag', 'sweepFlag'];

var getCommands = function (d) {
  return d.match(validCommands);
};

var getParams = function (d) {
  return d.split(validCommands).map(function (v) {
    return v.replace(/[0-9]+-/g, function (m) {
      return m.slice(0, -1) + ' -';
    });
  }).map(function (v) {
    return v.replace(/\.[0-9]+/g, function (m) {
      return m + ' ';
    });
  }).map(function (v) {
    return v.trim();
  }).filter(function (v) {
    return v.length > 0;
  }).map(function (v) {
    return v.split(/[ ,]+/).map(parseFloat).filter(function (n) {
      return !isNaN(n);
    });
  });
};

var getPointsFromPath = function (_ref5) {
  var d = _ref5.d;

  var commands = getCommands(d);
  var params = getParams(d);

  var points = [];

  var moveTo = void 0;

  for (var i = 0, l = commands.length; i < l; i++) {
    var command = commands[i];
    var upperCaseCommand = command.toUpperCase();
    var commandLength = commandLengths[upperCaseCommand];
    var relative = isRelative(command);

    if (commandLength > 0) {
      var commandParams = params.shift();
      var iterations = commandParams.length / commandLength;

      for (var j = 0; j < iterations; j++) {
        var prevPoint = i === 0 ? null : points[points.length - 1];

        switch (upperCaseCommand) {
          case 'M':
            var x = (relative && prevPoint ? prevPoint.x : 0) + commandParams.shift();
            var y = (relative && prevPoint ? prevPoint.y : 0) + commandParams.shift();

            moveTo = { x: x, y: y };

            points.push({ x: x, y: y, moveTo: true });

            break;

          case 'L':
            points.push({
              x: (relative ? prevPoint.x : 0) + commandParams.shift(),
              y: (relative ? prevPoint.y : 0) + commandParams.shift()
            });

            break;

          case 'H':
            points.push({
              x: (relative ? prevPoint.x : 0) + commandParams.shift(),
              y: prevPoint.y
            });

            break;

          case 'V':
            points.push({
              x: prevPoint.x,
              y: (relative ? prevPoint.y : 0) + commandParams.shift()
            });

            break;

          case 'A':
            points.push({
              curve: {
                type: 'arc',
                rx: commandParams.shift(),
                ry: commandParams.shift(),
                xAxisRotation: commandParams.shift(),
                largeArcFlag: commandParams.shift(),
                sweepFlag: commandParams.shift()
              },
              x: (relative ? prevPoint.x : 0) + commandParams.shift(),
              y: (relative ? prevPoint.y : 0) + commandParams.shift()
            });

            for (var _iterator = optionalArcKeys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
              var _ref6;

              if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref6 = _iterator[_i++];
              } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref6 = _i.value;
              }

              var k = _ref6;

              if (points[points.length - 1]['curve'][k] === 0) {
                delete points[points.length - 1]['curve'][k];
              }
            }

            break;

          case 'C':
            points.push({
              curve: {
                type: 'cubic',
                x1: (relative ? prevPoint.x : 0) + commandParams.shift(),
                y1: (relative ? prevPoint.y : 0) + commandParams.shift(),
                x2: (relative ? prevPoint.x : 0) + commandParams.shift(),
                y2: (relative ? prevPoint.y : 0) + commandParams.shift()
              },
              x: (relative ? prevPoint.x : 0) + commandParams.shift(),
              y: (relative ? prevPoint.y : 0) + commandParams.shift()
            });

            break;

          case 'S':
            var sx2 = (relative ? prevPoint.x : 0) + commandParams.shift();
            var sy2 = (relative ? prevPoint.y : 0) + commandParams.shift();
            var sx = (relative ? prevPoint.x : 0) + commandParams.shift();
            var sy = (relative ? prevPoint.y : 0) + commandParams.shift();

            var diff = {};

            var sx1 = void 0;
            var sy1 = void 0;

            if (prevPoint.curve && prevPoint.curve.type === 'cubic') {
              diff.x = Math.abs(prevPoint.x - prevPoint.curve.x2);
              diff.y = Math.abs(prevPoint.y - prevPoint.curve.y2);
              sx1 = prevPoint.x < prevPoint.curve.x2 ? prevPoint.x - diff.x : prevPoint.x + diff.x;
              sy1 = prevPoint.y < prevPoint.curve.y2 ? prevPoint.y - diff.y : prevPoint.y + diff.y;
            } else {
              diff.x = Math.abs(sx - sx2);
              diff.y = Math.abs(sy - sy2);
              sx1 = prevPoint.x;
              sy1 = prevPoint.y;
            }

            points.push({ curve: { type: 'cubic', x1: sx1, y1: sy1, x2: sx2, y2: sy2 }, x: sx, y: sy });

            break;

          case 'Q':
            points.push({
              curve: {
                type: 'quadratic',
                x1: (relative ? prevPoint.x : 0) + commandParams.shift(),
                y1: (relative ? prevPoint.y : 0) + commandParams.shift()
              },
              x: (relative ? prevPoint.x : 0) + commandParams.shift(),
              y: (relative ? prevPoint.y : 0) + commandParams.shift()
            });

            break;

          case 'T':
            var tx = (relative ? prevPoint.x : 0) + commandParams.shift();
            var ty = (relative ? prevPoint.y : 0) + commandParams.shift();

            var tx1 = void 0;
            var ty1 = void 0;

            if (prevPoint.curve && prevPoint.curve.type === 'quadratic') {
              var _diff = {
                x: Math.abs(prevPoint.x - prevPoint.curve.x1),
                y: Math.abs(prevPoint.y - prevPoint.curve.y1)
              };

              tx1 = prevPoint.x < prevPoint.curve.x1 ? prevPoint.x - _diff.x : prevPoint.x + _diff.x;
              ty1 = prevPoint.y < prevPoint.curve.y1 ? prevPoint.y - _diff.y : prevPoint.y + _diff.y;
            } else {
              tx1 = prevPoint.x;
              ty1 = prevPoint.y;
            }

            points.push({ curve: { type: 'quadratic', x1: tx1, y1: ty1 }, x: tx, y: ty });

            break;
        }
      }
    } else {
      points.push({ x: moveTo.x, y: moveTo.y });
    }
  }

  return points;
};

var getPointsFromPolygon = function (_ref7) {
  var points = _ref7.points;

  return getPointsFromPoints({ closed: true, points: points });
};

var getPointsFromPolyline = function (_ref8) {
  var points = _ref8.points;

  return getPointsFromPoints({ closed: false, points: points });
};

var getPointsFromPoints = function (_ref9) {
  var closed = _ref9.closed,
      points = _ref9.points;

  var numbers = points.split(/[\s,]+/).map(function (n) {
    return parseFloat(n);
  });

  var p = numbers.reduce(function (arr, point, i) {
    if (i % 2 === 0) {
      arr.push({ x: point });
    } else {
      arr[(i - 1) / 2].y = point;
    }

    return arr;
  }, []);

  if (closed) {
    p.push(_extends({}, p[0]));
  }

  p[0].moveTo = true;

  return p;
};

var getPointsFromRect = function (_ref10) {
  var height = _ref10.height,
      rx = _ref10.rx,
      ry = _ref10.ry,
      width = _ref10.width,
      x = _ref10.x,
      y = _ref10.y;

  if (rx || ry) {
    return getPointsFromRectWithCornerRadius({
      height: height,
      rx: rx || ry,
      ry: ry || rx,
      width: width,
      x: x,
      y: y
    });
  }

  return getPointsFromBasicRect({ height: height, width: width, x: x, y: y });
};

var getPointsFromBasicRect = function (_ref11) {
  var height = _ref11.height,
      width = _ref11.width,
      x = _ref11.x,
      y = _ref11.y;

  return [{ x: x, y: y, moveTo: true }, { x: x + width, y: y }, { x: x + width, y: y + height }, { x: x, y: y + height }, { x: x, y: y }];
};

var getPointsFromRectWithCornerRadius = function (_ref12) {
  var height = _ref12.height,
      rx = _ref12.rx,
      ry = _ref12.ry,
      width = _ref12.width,
      x = _ref12.x,
      y = _ref12.y;

  var curve = { type: 'arc', rx: rx, ry: ry, sweepFlag: 1 };

  return [{ x: x + rx, y: y, moveTo: true }, { x: x + width - rx, y: y }, { x: x + width, y: y + ry, curve: curve }, { x: x + width, y: y + height - ry }, { x: x + width - rx, y: y + height, curve: curve }, { x: x + rx, y: y + height }, { x: x, y: y + height - ry, curve: curve }, { x: x, y: y + ry }, { x: x + rx, y: y, curve: curve }];
};

var getPointsFromG = function (_ref13) {
  var shapes = _ref13.shapes;
  return shapes.map(function (s) {
    return toPoints(s);
  });
};

exports.default = toPoints;
},{}],148:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var getErrors = function (shape) {
  var rules = getRules(shape);
  var errors = [];

  rules.map(function (_ref) {
    var match = _ref.match,
        prop = _ref.prop,
        required = _ref.required,
        type = _ref.type;

    if (typeof shape[prop] === 'undefined') {
      if (required) {
        errors.push(prop + ' prop is required' + (prop === 'type' ? '' : ' on a ' + shape.type));
      }
    } else {
      if (typeof type !== 'undefined') {
        if (type === 'array') {
          if (!Array.isArray(shape[prop])) {
            errors.push(prop + ' prop must be of type array');
          }
        } else if (typeof shape[prop] !== type) {
          errors.push(prop + ' prop must be of type ' + type);
        }
      }

      if (Array.isArray(match)) {
        if (match.indexOf(shape[prop]) === -1) {
          errors.push(prop + ' prop must be one of ' + match.join(', '));
        }
      }
    }
  });

  if (shape.type === 'g' && Array.isArray(shape.shapes)) {
    var childErrors = shape.shapes.map(function (s) {
      return getErrors(s);
    });
    return [].concat.apply(errors, childErrors);
  }

  return errors;
};

var getRules = function (shape) {
  var rules = [{
    match: ['circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect', 'g'],
    prop: 'type',
    required: true,
    type: 'string'
  }];

  switch (shape.type) {
    case 'circle':
      rules.push({ prop: 'cx', required: true, type: 'number' });
      rules.push({ prop: 'cy', required: true, type: 'number' });
      rules.push({ prop: 'r', required: true, type: 'number' });
      break;

    case 'ellipse':
      rules.push({ prop: 'cx', required: true, type: 'number' });
      rules.push({ prop: 'cy', required: true, type: 'number' });
      rules.push({ prop: 'rx', required: true, type: 'number' });
      rules.push({ prop: 'ry', required: true, type: 'number' });
      break;

    case 'line':
      rules.push({ prop: 'x1', required: true, type: 'number' });
      rules.push({ prop: 'x2', required: true, type: 'number' });
      rules.push({ prop: 'y1', required: true, type: 'number' });
      rules.push({ prop: 'y2', required: true, type: 'number' });
      break;

    case 'path':
      rules.push({ prop: 'd', required: true, type: 'string' });
      break;

    case 'polygon':
    case 'polyline':
      rules.push({ prop: 'points', required: true, type: 'string' });
      break;

    case 'rect':
      rules.push({ prop: 'height', required: true, type: 'number' });
      rules.push({ prop: 'rx', type: 'number' });
      rules.push({ prop: 'ry', type: 'number' });
      rules.push({ prop: 'width', required: true, type: 'number' });
      rules.push({ prop: 'x', required: true, type: 'number' });
      rules.push({ prop: 'y', required: true, type: 'number' });
      break;

    case 'g':
      rules.push({ prop: 'shapes', required: true, type: 'array' });
      break;
  }

  return rules;
};

var valid = function (shape) {
  var errors = getErrors(shape);

  return {
    errors: errors,
    valid: errors.length === 0
  };
};

exports.default = valid;
},{}],149:[function(require,module,exports){
'use strict'

module.exports = {
   prefixProperties: require('./src/prefixProperties') ,
   cssUnitless: require('./src/cssUnitless') ,
   object: require('./src/toStyleObject'),
   string: require('./src/toStyleString')
}
},{"./src/cssUnitless":151,"./src/prefixProperties":156,"./src/toStyleObject":164,"./src/toStyleString":165}],150:[function(require,module,exports){
module.exports = require('./prefixer')()
},{"./prefixer":157}],151:[function(require,module,exports){
'use exports'

//make sure properties are in hyphenated form

module.exports = {
    'animation'    : 1,
    'column-count' : 1,
    'columns'      : 1,
    'font-weight'  : 1,
    'opacity'      : 1,
    'order  '      : 1,
    'z-index'      : 1,
    'zoom'         : 1,
    'flex'         : 1,
    'box-flex'     : 1,
    'transform'    : 1,
    'perspective'  : 1,
    'box-pack'     : 1,
    'box-align'    : 1,
    'colspan'      : 1,
    'rowspan'      : 1
}
},{}],152:[function(require,module,exports){
'use strict'

var objectHasOwn = Object.prototype.hasOwnProperty

module.exports = function(object, propertyName){
    return objectHasOwn.call(object, propertyName)
}
},{}],153:[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(v) {
    return objectToString.apply(v) === '[object Function]'
}

},{}],154:[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(v){
    return !!v && objectToString.call(v) === '[object Object]'
}


},{}],155:[function(require,module,exports){
'use strict';

var toUpperFirst = require('./stringUtils/toUpperFirst')

var re         = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/

var docStyle   = typeof document == 'undefined'?
                    {}:
                    document.documentElement.style

var prefixInfo = (function(){

    var prefix = (function(){

            for (var prop in docStyle) {
                if( re.test(prop) ) {
                    // test is faster than match, so it's better to perform
                    // that on the lot and match only when necessary
                    return  prop.match(re)[0]
                }
            }

            // Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
            // However (prop in style) returns the correct value, so we'll have to test for
            // the precence of a specific property
            if ('WebkitOpacity' in docStyle){
                return 'Webkit'
            }

            if ('KhtmlOpacity' in docStyle) {
                return 'Khtml'
            }

            return ''
        })(),

    lower = prefix.toLowerCase()

    return {
        style       : prefix,
        css       : '-' + lower + '-',
        dom       : ({
            Webkit: 'WebKit',
            ms    : 'MS',
            o     : 'WebKit'
        })[prefix] || toUpperFirst(prefix)
    }

})()

module.exports = prefixInfo
},{"./stringUtils/toUpperFirst":163}],156:[function(require,module,exports){
module.exports = {
    'border-radius'              : 1,
    'border-top-left-radius'     : 1,
    'border-top-right-radius'    : 1,
    'border-bottom-left-radius'  : 1,
    'border-bottom-right-radius' : 1,
    'box-shadow'                 : 1,
    'order'                      : 1,
    'flex'                       : function(name, prefix){
        return [prefix + 'box-flex']
    },
    'box-flex'                   : 1,
    'box-align'                  : 1,
    'animation'                  : 1,
    'animation-duration'         : 1,
    'animation-name'             : 1,
    'transition'                 : 1,
    'transition-duration'        : 1,
    'transform'                  : 1,
    'transform-style'            : 1,
    'transform-origin'           : 1,
    'backface-visibility'        : 1,
    'perspective'                : 1,
    'box-pack'                   : 1
}
},{}],157:[function(require,module,exports){
'use strict'

var camelize     = require('./stringUtils/camelize')
var hyphenate    = require('./stringUtils/hyphenate')
var toLowerFirst = require('./stringUtils/toLowerFirst')
var toUpperFirst = require('./stringUtils/toUpperFirst')

var prefixInfo = require('./prefixInfo')
var prefixProperties = require('./prefixProperties')

var docStyle = typeof document == 'undefined'?
                {}:
                document.documentElement.style

module.exports = function(asStylePrefix){

    return function(name, config){
        config = config || {}

        var styleName = toLowerFirst(camelize(name)),
            cssName   = hyphenate(name),

            theName   = asStylePrefix?
                            styleName:
                            cssName,

            thePrefix = prefixInfo.style?
                            asStylePrefix?
                                prefixInfo.style:
                                prefixInfo.css
                            :
                            ''

        if ( styleName in docStyle ) {
            return config.asString?
                              theName :
                            [ theName ]
        }

        //not a valid style name, so we'll return the value with a prefix

        var upperCased     = theName,
            prefixProperty = prefixProperties[cssName],
            result         = []

        if (asStylePrefix){
            upperCased = toUpperFirst(theName)
        }

        if (typeof prefixProperty == 'function'){
            var prefixedCss = prefixProperty(theName, thePrefix) || []
            if (prefixedCss && !Array.isArray(prefixedCss)){
                prefixedCss = [prefixedCss]
            }

            if (prefixedCss.length){
                prefixedCss = prefixedCss.map(function(property){
                    return asStylePrefix?
                                toLowerFirst(camelize(property)):
                                hyphenate(property)

                })
            }

            result = result.concat(prefixedCss)
        }

        if (thePrefix){
            result.push(thePrefix + upperCased)
        }

        result.push(theName)

        if (config.asString || result.length == 1){
            return result[0]
        }

        return result
    }
}
},{"./prefixInfo":155,"./prefixProperties":156,"./stringUtils/camelize":158,"./stringUtils/hyphenate":160,"./stringUtils/toLowerFirst":162,"./stringUtils/toUpperFirst":163}],158:[function(require,module,exports){
'use strict'

var toCamelFn = function(str, letter){
       return letter ? letter.toUpperCase(): ''
   }

var hyphenRe = require('./hyphenRe')

module.exports = function(str){
   return str?
          str.replace(hyphenRe, toCamelFn):
          ''
}
},{"./hyphenRe":159}],159:[function(require,module,exports){
module.exports = /[-\s]+(.)?/g
},{}],160:[function(require,module,exports){
'use strict'

var separate = require('./separate')

module.exports = function(name){
   return separate(name).toLowerCase()
}
},{"./separate":161}],161:[function(require,module,exports){
'use strict'

var doubleColonRe      = /::/g
var upperToLowerRe     = /([A-Z]+)([A-Z][a-z])/g
var lowerToUpperRe     = /([a-z\d])([A-Z])/g
var underscoreToDashRe = /_/g

module.exports = function(name, separator){

   return name?
           name.replace(doubleColonRe, '/')
                .replace(upperToLowerRe, '$1_$2')
                .replace(lowerToUpperRe, '$1_$2')
                .replace(underscoreToDashRe, separator || '-')
            :
            ''
}
},{}],162:[function(require,module,exports){
'use strict'

module.exports = function(value){
    return value.length?
                value.charAt(0).toLowerCase() + value.substring(1):
                value
}
},{}],163:[function(require,module,exports){
'use strict'

module.exports = function(value){
    return value.length?
                value.charAt(0).toUpperCase() + value.substring(1):
                value
}
},{}],164:[function(require,module,exports){
'use strict'

var prefixInfo  = require('./prefixInfo')
var cssPrefixFn = require('./cssPrefix')

var HYPHENATE   = require('./stringUtils/hyphenate')
var CAMELIZE   = require('./stringUtils/camelize')
var HAS_OWN     = require('./hasOwn')
var IS_OBJECT   = require('./isObject')
var IS_FUNCTION = require('./isFunction')

var applyPrefix = function(target, property, value, normalizeFn){
    cssPrefixFn(property).forEach(function(p){
        target[normalizeFn? normalizeFn(p): p] = value
    })
}

var toObject = function(str){
    str = (str || '').split(';')

    var result = {}

    str.forEach(function(item){
        var split = item.split(':')

        if (split.length == 2){
            result[split[0].trim()] = split[1].trim()
        }
    })

    return result
}

var CONFIG = {
    cssUnitless: require('./cssUnitless')
}

/**
 * @ignore
 * @method toStyleObject
 *
 * @param  {Object} styles The object to convert to a style object.
 * @param  {Object} [config]
 * @param  {Boolean} [config.addUnits=true] True if you want to add units when numerical values are encountered.
 * @param  {Object}  config.cssUnitless An object whose keys represent css numerical property names that will not be appended with units.
 * @param  {Object}  config.prefixProperties An object whose keys represent css property names that should be prefixed
 * @param  {String}  config.cssUnit='px' The css unit to append to numerical values. Defaults to 'px'
 * @param  {String}  config.normalizeName A function that normalizes a name to a valid css property name
 * @param  {String}  config.scope
 *
 * @return {Object} The object, normalized with css style names
 */
var TO_STYLE_OBJECT = function(styles, config, prepend, result){

    if (typeof styles == 'string'){
        styles = toObject(styles)
    }

    config = config || CONFIG

    config.cssUnitless = config.cssUnitless || CONFIG.cssUnitless

    result = result || {}

    var scope    = config.scope || {},

        //configs
        addUnits = config.addUnits != null?
                            config.addUnits:
                            scope && scope.addUnits != null?
                                scope.addUnits:
                                true,

        cssUnitless      = (config.cssUnitless != null?
                                config.cssUnitless:
                                scope?
                                    scope.cssUnitless:
                                    null) || {},
        cssUnit          = (config.cssUnit || scope? scope.cssUnit: null) || 'px',
        prefixProperties = (config.prefixProperties || (scope? scope.prefixProperties: null)) || {},

        camelize    = config.camelize,
        normalizeFn = camelize? CAMELIZE: HYPHENATE

    // Object.keys(cssUnitless).forEach(function(key){
    //     cssUnitless[normalizeFn(key)] = 1
    // })

    var processed,
        styleName,

        propName,
        propValue,
        propCssUnit,
        propType,
        propIsNumber,

        fnPropValue,
        prefix

    for (propName in styles) if (HAS_OWN(styles, propName)) {

        propValue = styles[ propName ]

        //the hyphenated style name (css property name)
        styleName = HYPHENATE(prepend? prepend + propName: propName)

        processed = false
        prefix    = false

        if (IS_FUNCTION(propValue)) {

            //a function can either return a css value
            //or an object with { value, prefix, name }
            fnPropValue = propValue.call(scope || styles, propValue, propName, styleName, styles)

            if (IS_OBJECT(fnPropValue) && fnPropValue.value != null){

                propValue = fnPropValue.value
                prefix    = fnPropValue.prefix
                styleName = fnPropValue.name?
                                HYPHENATE(fnPropValue.name):
                                styleName

            } else {
                propValue = fnPropValue
            }
        }

        propType     = typeof propValue
        propIsNumber = propType == 'number' || (propType == 'string' && propValue != '' && propValue * 1 == propValue)

        if (propValue == null || styleName == null || styleName === ''){
            continue
        }

        if (propIsNumber || propType == 'string'){
           processed = true
        }

        if (!processed && propValue.value != null && propValue.prefix){
           processed = true
           prefix    = propValue.prefix
           propValue = propValue.value
        }

        // hyphenStyleName = camelize? HYPHENATE(styleName): styleName

        if (processed){

            prefix = prefix || !!prefixProperties[styleName]

            if (propIsNumber){
                propValue = addUnits && !(styleName in cssUnitless) ?
                                propValue + cssUnit:
                                propValue + ''//change it to a string, so that jquery does not append px or other units
            }

            //special border treatment
            if (
                    (
                     styleName == 'border' ||
                    (!styleName.indexOf('border')
                        &&
                        !~styleName.indexOf('radius')
                        &&
                        !~styleName.indexOf('width'))
                    ) &&
                    propIsNumber
                ){

                styleName = styleName + '-width'
            }

            //special border radius treatment
            if (!styleName.indexOf('border-radius-')){
                styleName.replace(/border(-radius)(-(.*))/, function(str, radius, theRest){
                    var positions = {
                        '-top'    : ['-top-left',      '-top-right' ],
                        '-left'   : ['-top-left',    '-bottom-left' ],
                        '-right'  : ['-top-right',   '-bottom-right'],
                        '-bottom' : ['-bottom-left', '-bottom-right']
                    }

                    if (theRest in positions){
                        styleName = []

                        positions[theRest].forEach(function(pos){
                            styleName.push('border' + pos + radius)
                        })
                    } else {
                        styleName = 'border'+ theRest + radius
                    }

                })

                if (Array.isArray(styleName)){
                    styleName.forEach(function(styleName){
                        if (prefix){
                            applyPrefix(result, styleName, propValue, normalizeFn)
                        } else {
                            result[normalizeFn(styleName)] = propValue
                        }
                    })

                    continue
                }
            }

            if (prefix){
                applyPrefix(result, styleName, propValue, normalizeFn)
            } else {
                result[normalizeFn(styleName)] = propValue
            }

        } else {
            //the propValue must be an object, so go down the hierarchy
            TO_STYLE_OBJECT(propValue, config, styleName + '-', result)
        }
    }

    return result
}

module.exports = TO_STYLE_OBJECT
},{"./cssPrefix":150,"./cssUnitless":151,"./hasOwn":152,"./isFunction":153,"./isObject":154,"./prefixInfo":155,"./stringUtils/camelize":158,"./stringUtils/hyphenate":160}],165:[function(require,module,exports){
'use strict'

var toStyleObject = require('./toStyleObject')
var hasOwn        = require('./hasOwn')

/**
 * @ignore
 * @method toStyleString
 *
 * @param  {Object} styles The object to convert to a style string.
 * @param  {Object} config
 * @param  {Boolean} config.addUnits=true True if you want to add units when numerical values are encountered. Defaults to true
 * @param  {Object}  config.cssUnitless An object whose keys represent css numerical property names that will not be appended with units.
 * @param  {Object}  config.prefixProperties An object whose keys represent css property names that should be prefixed
 * @param  {String}  config.cssUnit='px' The css unit to append to numerical values. Defaults to 'px'
 * @param  {String}  config.scope
 *
 * @return {Object} The object, normalized with css style names
 */
module.exports = function(styles, config){
    styles = toStyleObject(styles, config)

    var result = []
    var prop

    for(prop in styles) if (hasOwn(styles, prop)){
        result.push(prop + ': ' + styles[prop])
    }

    return result.join('; ')
}
},{"./hasOwn":152,"./toStyleObject":164}],166:[function(require,module,exports){

/**
 * Module dependencies.
 */

var debug = require('debug')('xml-parser');

/**
 * Expose `parse`.
 */

module.exports = parse;

/**
 * Parse the given string of `xml`.
 *
 * @param {String} xml
 * @return {Object}
 * @api public
 */

function parse(xml) {
  xml = xml.trim();

  // strip comments
  xml = xml.replace(/<!--[\s\S]*?-->/g, '');

  return document();

  /**
   * XML document.
   */

  function document() {
    return {
      declaration: declaration(),
      root: tag()
    }
  }

  /**
   * Declaration.
   */

  function declaration() {
    var m = match(/^<\?xml\s*/);
    if (!m) return;

    // tag
    var node = {
      attributes: {}
    };

    // attributes
    while (!(eos() || is('?>'))) {
      var attr = attribute();
      if (!attr) return node;
      node.attributes[attr.name] = attr.value;
    }

    match(/\?>\s*/);

    return node;
  }

  /**
   * Tag.
   */

  function tag() {
    debug('tag %j', xml);
    var m = match(/^<([\w-:.]+)\s*/);
    if (!m) return;

    // name
    var node = {
      name: m[1],
      attributes: {},
      children: []
    };

    // attributes
    while (!(eos() || is('>') || is('?>') || is('/>'))) {
      var attr = attribute();
      if (!attr) return node;
      node.attributes[attr.name] = attr.value;
    }

    // self closing tag
    if (match(/^\s*\/>\s*/)) {
      return node;
    }

    match(/\??>\s*/);

    // content
    node.content = content();

    // children
    var child;
    while (child = tag()) {
      node.children.push(child);
    }

    // closing
    match(/^<\/[\w-:.]+>\s*/);

    return node;
  }

  /**
   * Text content.
   */

  function content() {
    debug('content %j', xml);
    var m = match(/^([^<]*)/);
    if (m) return m[1];
    return '';
  }

  /**
   * Attribute.
   */

  function attribute() {
    debug('attribute %j', xml);
    var m = match(/([\w:-]+)\s*=\s*("[^"]*"|'[^']*'|\w+)\s*/);
    if (!m) return;
    return { name: m[1], value: strip(m[2]) }
  }

  /**
   * Strip quotes from `val`.
   */

  function strip(val) {
    return val.replace(/^['"]|['"]$/g, '');
  }

  /**
   * Match `re` and advance the string.
   */

  function match(re) {
    var m = xml.match(re);
    if (!m) return;
    xml = xml.slice(m[0].length);
    return m;
  }

  /**
   * End-of-source.
   */

  function eos() {
    return 0 == xml.length;
  }

  /**
   * Check for `prefix`.
   */

  function is(prefix) {
    return 0 == xml.indexOf(prefix);
  }
}

},{"debug":6}]},{},[1])(1)
});
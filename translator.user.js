// ==UserScript==
// @name         PSO2 Combo Simulator Translator
// @version      1.0.3
// @description  Translates the new damage sim
// @author       SynthSy
// @match        https://pso2c.kyata.work/*
// @grant        none
// @run-at       document-start
// @namespace    https://arks-layer.com/
// @updateURL    https://github.com/SynthSy/pso2-combo/raw/master/translator.user.js
// @downloadURL  https://github.com/SynthSy/pso2-combo/raw/master/translator.user.js
// ==/UserScript==

var newJSFile = "https://cdn.rawgit.com/SynthSy/pso2-combo/2a950fed80891bf5e76fcbe4ca819fcdf84dd65b/files/main.min.js";

var oldJSFile = "main.1b300ee2ee9a66311564.bundle.js";

var pattern = new RegExp(oldJSFile, "i");

function injectScript(originalPage) {
    console.log('Replacing original cached file with mod: ', oldJSFile, 'with', newJSFile);
    var moddedPage = originalPage.replace(pattern, newJSFile);
    document.open();
    console.log('Mod installed.');
    document.write(moddedPage);
    document.close();
}

setTimeout(function() {
    console.log('Finding Japanese Sim files...');
    injectScript(document.documentElement.outerHTML);
}, 1111);

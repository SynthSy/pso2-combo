// ==UserScript==
// @name         PSO2 Combo Simulator Translator
// @version      1.0
// @description  Translates the new damage sim
// @author       SynthSy
// @match        https://pso2c.kyata.work/*
// @grant        none
// @run-at       document-start
// @namespace    https://arks-layer.com/
// @updateURL    https://github.com/SynthSy/pso2-combo/raw/master/translator.user.js
// @downloadURL  https://github.com/SynthSy/pso2-combo/raw/master/translator.user.js
// ==/UserScript==

var newJSFile = "https://cdn.rawgit.com/SynthSy/pso2-combo/bbefecf00d697c22b216dc9c7fd39be5be7c506a/files/main.bundle.js";

var oldJSFile = "main.914577bef226e3b0e84f.bundle.js";

var pattern = new RegExp(oldJSFile, "i");

function injectScript(originalPage) {
    console.log('Replace stage 2: Replace text matching', oldJSFile, 'with', newJSFile);
    var moddedPage = originalPage.replace(pattern, newJSFile);
    document.open();
    console.log('Replace stage 3: Write new HTML to page...');
    document.write(moddedPage);
    document.close();
}

setTimeout(function() {
    console.log('Replace stage 1: target HTML');
    injectScript(document.documentElement.outerHTML);
}, 1111);

// ==UserScript==
// @name         PSO2 Combo Simulator Translator
// @version      0.4
// @description  Translates the new damage sim
// @author       SynthSy
// @match        https://pso2c.kyata.work/*
// @grant        none
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/SynthSy/pso2-combo/master/files/translator.js
// @downloadURL  https://raw.githubusercontent.com/SynthSy/pso2-combo/master/files/translator.js
// @connect      https://arks-layer.com/
// ==/UserScript==

var newJSFile = "https://synthsy.github.io/pso2-combo/files/main.bundle.js";

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

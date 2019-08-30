// ==UserScript==
// @name         Illinois Save
// @namespace    https://courseware.illinois.edu
// @version      1.0
// @description  Enable save shortcut on NetMath
// @author       Nisala Kalupahana
// @match        https://courseware.illinois.edu
// ==/UserScript==

(function() {
    'use strict';

    document.onkeydown = function (e) {
        if ((e.metaKey || e.ctrlKey) && e.keyCode == 83) {
            unsafeWindow.frames["uxiframe-1082-frame"].document.getElementById("ext-gen30").click();
            e.preventDefault();
            return false;
        }
    };
})();

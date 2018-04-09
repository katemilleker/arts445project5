// ** CHANGE @NAME, @NAMESPACE, and @DESCRIPTION
//
// ** If using for Tampermonkey, you can just paste this into
// ** the Tampermonkey editor
//
// ** If using for Chrome, CHANGE FIRST PART OF FILENAME
// ** (before the .user.js) and edit in a code editor like Atom
//
// ** EVERYTHING BETWEEN ==UserScript== lines is read by the browser
//    as configuration information for the userscript
//
// **
// ** USERSCRIPT CODE IS IGNORED BY CHROME, ESP. @REQUIRE
// ** BUT KEEP FOR BACKWARDS COMPATIBILITY!
// **
//
// ==UserScript==
// @name Hypertext Magnifies Language
// @version 1.0
// @namespace hypertext-magnifies-language
// @description converts each word on a webpage into a hypertext link
// @require http://arts445.courses.bengrosser.com/files/ready-vanilla.js
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @run-at document-start
//
// **WRITE MATCH STATEMENTS TO MATCH WEBSITE URLS (FOLLOW MY EXAMPLE)
//
// @match *://*/*
// @include *://*/*
//
// ==/UserScript==// -----------------------------------------
//
//
//
//
// Hypertext Magnifies Language
//
// This code changes all the language on a webpage by replacing 
// and highlighting all the H, T, M, and Ls to pay
// homeage to the HTML code behind the webpage.
//
// written by Kate Milleker for ARTS 445: Net Art, sp '18

//https://www.google.com/search?q=<word>


(function () {

    var j;

    function main() {

        j = jQuery.noConflict();

        j('p, h1, h2, h3, h4, h5, h6, ul, li, table').each(function () { addHTMLColors(this); });
        ready('p, h1, h2, h3, h4, h5, h6, ul, li, table', function (e) { addHTMLColors(e); });

        function addHTMLColors(e) {
            j(e).html(j(e).html().replace(/(?<!-)(h)(?!([^<]+)?>)(?!-)/gi,'<span class="arts-extension">H</span>'));
            j(e).html(j(e).html().replace(/(?<!-)(t)(?!([^<]+)?>)(?!-)/gi,'<span class="arts-extension">T</span>'));
            j(e).html(j(e).html().replace(/(?<!-)(m)(?!([^<]+)?>)(?!-)/gi,'<span class="arts-extension">M</span>'));
            j(e).html(j(e).html().replace(/(?<!-)(l)(?!([^<]+)?>)(?!-)/gi,'<span class="arts-extension">L</span>'));
        }

        /*function addHyperlink(e) {
            var textString = j(e).text();
            var wordString = "";
            var wordArray = [];
            var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            // parse text content into words
            for (var i = 0; i < textString.length; i++) {
                var currChar = textString.charAt(i);
                if (alphabet.indexOf(currChar) == -1) {
                    if (wordString.length > 0)
                        wordArray.push(wordString);
                    wordString = "";
                } else {
                    wordString += currChar;
                    if (i == textString.length-1)
                        wordArray.push(wordString);
                }
            }
            // add a tag wrappers to words, change html
            j(wordArray).each(function() {
                if (this != 'a') {
                    var pattern = new RegExp("\\b("+this+")\\b", ["gi"]);
                    var newTag = "<a href='https://www.google.com/search?q="+this+"' target='_blank'><span>"+this+"</span></a>";
                    j(e).html(j(e).html().replace(pattern, newTag));
                }
            });
        }*/
    }

    main();

    // cleaner syntax than match()
    String.prototype.contains = function (it) { return this.indexOf(it) != -1; };

})();


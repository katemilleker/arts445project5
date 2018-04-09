// ==UserScript==
// @name Citation Eraser
// @version 1.0
// @namespace citation-eraser
// @description Alters the NYT by removing all authors, credits, reference links, footnotes
// @require http://arts445.courses.bengrosser.com/files/ready-vanilla.js
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @run-at document-start
//
// @match *://*.nytimes.com/*
// @include *://*.nytimes.com/*
// @exclude *://*.nytimes.com/ai.php*
// @exclude *://*.nytimes.com/ajax/*
// @exclude *://*.nytimes.com/dialog/*
// @exclude *://*.nytimes.com/connect/*
// ==/UserScript==// -----------------------------------------
//
//
// Citation Eraser
//
// This code removes multiple elements from an article posted on the New York times )the article’s author and publishing date, 
// images within the article as well as their credits and captions, a story’s footer, and hyperlinks within the article 
// to other articles or references) to explore how we interpret the validity of information when it arrives without 
// an author or other methods of engagement even though the article appears to be from a trustworthy source. 
//
// written by Kate Milleker for ARTS 445: Net Art, sp '18

(function() {
 
var j;
 
function main() {
 
    j = jQuery.noConflict();
 
    j('.credit, .byline, .story-footer, .caption-text').each(function() { hideElement(this); });
    j('.story-body img, .story-interrupter img').each(function() { hideElement(this); });
    j('.story-body a').each(function() { hideElement(this); });
    j('time').each(function() { hideElement(this); });
 
    ready('.credit, .byline, .story-footer, .caption-text', function(e) { hideElement(e); });
    ready('.story-body img, .story-interrupter img', function(e) { hideElement(e); });
    ready('.story-body a', function(e) { hideElement(e); });
    ready('time', function(e) { hideElement(e); });
 
    function hideElement(e) { j(e).hide(); }
}
 
main();
 
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };
 
})();

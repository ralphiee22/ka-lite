(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$.extend(KhanUtil,{trigFunc:{csc:{name:"csc",print:function(t){return KhanUtil.trigFunc.sec.print(90-t)},convertsTo:["sin"],convertTo:function(t,n){if("sin"===t.name){var c=KhanUtil.trigFunc.csc.print(n),s=KhanUtil.trigFunc.sin.print(n),e=[];return e.push("\\csc x = \\frac{1}{\\sin x}"),e.push("\\csc x = "+c),e.push("\\frac{1}{\\sin x} = "+c),e.push("\\sin x = "+s),e}}},sec:{name:"sec",print:function(t){return 0===t?1:30===t?"\\frac{2 \\sqrt 3}{3}":45===t?"\\sqrt 2":60===t?"2":90===t?"undefined":"undef"},convertsTo:["cos","tan"],convertTo:function(t,n){if("cos"===t.name){var c=KhanUtil.trigFunc.cos.print(n),s=KhanUtil.trigFunc.sec.print(n),e=[];return e.push("\\sec x = \\frac{1}{\\cos x}"),e.push("\\sec x = "+s),e.push("\\frac{1}{\\cos x} = "+s),e.push("\\cos x = "+c),e}if("tan"===t.name){var a=KhanUtil.trigFunc.tan.print(n),s=KhanUtil.trigFunc.sec.print(n),e=[];return e.push("\\sin^2 x + \\cos^2 x = 1"),e.push("\\frac{\\sin^2 x}{\\cos^2 x} + \\frac{\\cos^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x}"),e.push("\\tan^2 x + 1 = \\sec^2 x"),e.push("\\tan^2 x + 1 = ("+s+")^2"),e.push("\\tan^2 x = ("+s+")^2 - 1"),e.push("\\tan x = \\sqrt { "+s+"  ^2 - 1 }"),e.push("\\tan x = "+a),e}}},tan:{name:"tan",print:function(t){return 0===t?0:30===t?"\\frac{\\sqrt 3}{3}":45===t?"1":60===t?"\\sqrt 3":90===t?"undefined":"undef"},convertsTo:["sec"],convertTo:function(t,n){if("sec"===t.name){var c=KhanUtil.trigFunc.tan.print(n),s=KhanUtil.trigFunc.sec.print(n),e=[];return e.push("\\sin^2 x + \\cos^2 x = 1"),e.push("\\frac{\\sin^2 x}{\\cos^2 x} + \\frac{\\cos^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x}"),e.push("\\tan^2 x + 1 = \\sec^2 x"),e.push("("+c+")^2 + 1 = \\sec^2 x"),e.push("\\sqrt{("+c+")^2 + 1} = \\sec x"),e.push(s+" = \\sec x"),e}}},cos:{name:"cos",print:function(t){return KhanUtil.trigFunc.sin.print(90-t)},convertsTo:["sin","sec"],convertTo:function(t,n){var c,s,e,a=[];return"sin"===t.name?(c=KhanUtil.trigFunc.cos.print(n),s=KhanUtil.trigFunc.sin.print(n),a.push("\\sin^2 x + \\cos^2 x = 1"),a.push("\\sin^2 x + ("+c+")^2 = 1"),a.push("("+c+")^2 = 1 - \\sin^2 x"),a.push("("+c+")^2 - 1 = - \\sin^2 x"),a.push("-("+c+")^2 + 1 = \\sin^2 x"),a.push(s+" = \\sin x"),a):"sec"===t.name?(c=KhanUtil.trigFunc.cos.print(n),e=KhanUtil.trigFunc.sec.print(n),a.push(c+" = \\cos x"),a.push(e+" = \\frac{1}{\\cos x}"),a.push(e+" = \\sec x"),a):void 0}},sin:{name:"sin",print:function(t){return 0===t?0:30===t?"\\frac{1}{2}":45===t?"\\frac{\\sqrt 2}{2}":60===t?"\\frac{\\sqrt 3}{2}":90===t?"1":"undefined"},convertsTo:["cos","csc"],convertTo:function(t,n){if("cos"===t.name){var c=KhanUtil.trigFunc.sin.print(n),s=KhanUtil.trigFunc.cos.print(n),e=[];return e.push("\\sin^2 x + \\cos^2 x = 1"),e.push("("+c+")^2 + \\cos^2 x = 1"),e.push("("+c+")^2 = 1- \\cos^2 x "),e.push("("+c+")^2 - 1 = - \\cos^2 x "),e.push("-("+c+")^2 + 1 = \\cos^2 x "),e.push(s+" =  \\cos x"),e}if("csc"===t.name){var c=KhanUtil.trigFunc.sin.print(n),a=KhanUtil.trigFunc.csc.print(n),e=[];return e.push(c+" = \\sin x"),e.push(a+" = \\frac{1}{\\sin x}"),e.push(a+" = \\csc x"),e}}}}}),$.extend(KhanUtil,{trigTypes:[KhanUtil.trigFunc.sin,KhanUtil.trigFunc.cos,KhanUtil.trigFunc.tan,KhanUtil.trigFunc.csc,KhanUtil.trigFunc.sec],findSteps:function(t,n,c){for(var s={},e=[],a=t;a.name!==n.name;)a.convertsTo&&$.each(a.convertsTo,function(t,n){if(!(n in s)){var c=KhanUtil.trigFunc[n];c.parent=a,e.push(c)}s[n]=!0}),a=e.shift();for(var h=a,i=[];h.name!==t.name;)i.unshift(h.name),h=h.parent;i.unshift(h.name);for(var r=[],o=0;o<i.length-1;o++){var u=KhanUtil.trigFunc[i[o]].convertTo(KhanUtil.trigFunc[i[o+1]],c);delete u.parent,r.push(u)}for(o=0;o<KhanUtil.trigTypes.length-1;o++)delete KhanUtil.trigTypes[o].parent;return r}}),$.extend(KhanUtil,{trig:{getOptionsResult:function(t,n){var c,s;"\\cos^2\\theta"===t?c=["1","\\cot^2\\theta","\\cos^2\\theta \\cdot \\sin^2\\theta"]:"\\sin^2\\theta"===t?c=["1","\\tan^2\\theta","\\cos^2\\theta \\cdot \\sin^2\\theta"]:"\\tan^2\\theta"===t?c=["1","\\sin^2\\theta","\\sec^2\\theta"]:"\\sec^2\\theta"===t?c=["1","\\tan^2\\theta","\\csc^2\\theta"]:"\\cot^2\\theta"===t?c=["1","\\cos^2\\theta","\\csc^2\\theta"]:"\\csc^2\\theta"===t&&(c=["1","\\cot^2\\theta","\\sec^2\\theta"]);var e=KhanUtil.randFromArray(c);return"*"===n?"1"===e?"\\cos^2\\theta"===t?s="\\sec^2\\theta":"\\sin^2\\theta"===t?s="\\csc^2\\theta":"\\tan^2\\theta"===t?s="\\cot^2\\theta":"\\sec^2\\theta"===t?s="\\cos^2\\theta":"\\cot^2\\theta"===t?s="\\tan^2\\theta":"\\csc^2\\theta"===t&&(s="\\sin^2\\theta"):"\\tan^2\\theta"===e?"\\sin^2\\theta"===t?s="\\sec^2\\theta":"\\sec^2\\theta"===t&&(s="\\sin^2\\theta"):"\\cot^2\\theta"===e?"\\cos^2\\theta"===t?s="\\csc^2\\theta":"\\csc^2\\theta"===t&&(s="\\cos^2\\theta"):"\\cos^2\\theta \\cdot \\sin^2\\theta"===e?"\\cos^2\\theta"===t?s="\\sin^2\\theta":"\\sin^2\\theta"===t&&(s="\\cos^2\\theta"):"\\sin^2\\theta"===e?"\\tan^2\\theta"===t&&(s="\\cos^2\\theta"):"\\cos^2\\theta"===e?"\\cot^2\\theta"===t&&(s="\\sin^2\\theta"):"\\sec^2\\theta"===e?"\\tan^2\\theta"===t?s="\\csc^2\\theta":"\\csc^2\\theta"===t&&(s="\\tan^2\\theta"):"\\csc^2\\theta"===e&&("\\sec^2\\theta"===t?s="\\cot^2\\theta":"\\cot^2\\theta"===t&&(s="\\sec^2\\theta")):"/"===n&&("1"===e?s=t:"\\tan^2\\theta"===e?"\\sin^2\\theta"===t?s="\\cos^2\\theta":"\\sec^2\\theta"===t&&(s="\\csc^2\\theta"):"\\cot^2\\theta"===e?"\\cos^2\\theta"===t?s="\\sin^2\\theta":"\\csc^2\\theta"===t&&(s="\\sec^2\\theta"):"\\cos^2\\theta \\cdot \\sin^2\\theta"===e?"\\cos^2\\theta"===t?s="\\csc^2\\theta":"\\sin^2\\theta"===t&&(s="\\sec^2\\theta"):"\\sin^2\\theta"===e?"\\tan^2\\theta"===t&&(s="\\sec^2\\theta"):"\\cos^2\\theta"===e?"\\cot^2\\theta"===t&&(s="\\csc^2\\theta"):"\\sec^2\\theta"===e?"\\tan^2\\theta"===t?s="\\sin^2\\theta":"\\csc^2\\theta"===t&&(s="\\cot^2\\theta"):"\\csc^2\\theta"===e&&("\\sec^2\\theta"===t?s="\\tan^2\\theta":"\\cot^2\\theta"===t&&(s="\\cos^2\\theta"))),[c,s,e]},showSimplified:function(t,n){var c=n?"\\frac":"\\dfrac";switch(t){case"\\sin^2\\theta":return t;case"\\cos^2\\theta":return t;case"\\csc^2\\theta":return c+"{1}{\\sin^2\\theta}";case"\\sec^2\\theta":return c+"{1}{\\cos^2\\theta}";case"\\tan^2\\theta":return c+"{\\sin^2\\theta}{\\cos^2\\theta}";case"\\cot^2\\theta":return c+"{\\cos^2\\theta}{\\sin^2\\theta}"}}}});
},{}]},{},[1]);

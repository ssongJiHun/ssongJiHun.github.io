"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[153],{9802:function(n,o,t){t.r(o),t.d(o,{default:function(){return a}});t(9953);var e=t(1120);var a=()=>(0,e.tZ)("div",{dangerouslySetInnerHTML:{__html:'<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>송지훈 | 개발자</title><style>\n/* cspell:disable-file */\n/* webkit printing magic: print all background colors */\nhtml {\n\t-webkit-print-color-adjust: exact;\n}\n* {\n\tbox-sizing: border-box;\n\t-webkit-print-color-adjust: exact;\n}\n\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n@media only screen {\n\tbody {\n\t\tmargin: 2em auto;\n\t\tmax-width: 900px;\n\t\tcolor: rgb(55, 53, 47);\n\t}\n}\n\nbody {\n\tline-height: 1.5;\n\twhite-space: pre-wrap;\n}\n\na,\na.visited {\n\tcolor: inherit;\n\ttext-decoration: underline;\n}\n\n.pdf-relative-link-path {\n\tfont-size: 80%;\n\tcolor: #444;\n}\n\nh1,\nh2,\nh3 {\n\tletter-spacing: -0.01em;\n\tline-height: 1.2;\n\tfont-weight: 600;\n\tmargin-bottom: 0;\n}\n\n.page-title {\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tmargin-top: 0;\n\tmargin-bottom: 0.75em;\n}\n\nh1 {\n\tfont-size: 1.875rem;\n\tmargin-top: 1.875rem;\n}\n\nh2 {\n\tfont-size: 1.5rem;\n\tmargin-top: 1.5rem;\n}\n\nh3 {\n\tfont-size: 1.25rem;\n\tmargin-top: 1.25rem;\n}\n\n.source {\n\tborder: 1px solid #ddd;\n\tborder-radius: 3px;\n\tpadding: 1.5em;\n\tword-break: break-all;\n}\n\n.callout {\n\tborder-radius: 3px;\n\tpadding: 1rem;\n}\n\nfigure {\n\tmargin: 1.25em 0;\n\tpage-break-inside: avoid;\n}\n\nfigcaption {\n\topacity: 0.5;\n\tfont-size: 85%;\n\tmargin-top: 0.5em;\n}\n\nmark {\n\tbackground-color: transparent;\n}\n\n.indented {\n\tpadding-left: 1.5em;\n}\n\nhr {\n\tbackground: transparent;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 1px;\n\tvisibility: visible;\n\tborder: none;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.09);\n}\n\nimg {\n\tmax-width: 100%;\n}\n\n@media only print {\n\timg {\n\t\tmax-height: 100vh;\n\t\tobject-fit: contain;\n\t}\n}\n\n@page {\n\tmargin: 1in;\n}\n\n.collection-content {\n\tfont-size: 0.875rem;\n}\n\n.column-list {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.column {\n\tpadding: 0 1em;\n}\n\n.column:first-child {\n\tpadding-left: 0;\n}\n\n.column:last-child {\n\tpadding-right: 0;\n}\n\n.table_of_contents-item {\n\tdisplay: block;\n\tfont-size: 0.875rem;\n\tline-height: 1.3;\n\tpadding: 0.125rem;\n}\n\n.table_of_contents-indent-1 {\n\tmargin-left: 1.5rem;\n}\n\n.table_of_contents-indent-2 {\n\tmargin-left: 3rem;\n}\n\n.table_of_contents-indent-3 {\n\tmargin-left: 4.5rem;\n}\n\n.table_of_contents-link {\n\ttext-decoration: none;\n\topacity: 0.7;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.18);\n}\n\ntable,\nth,\ntd {\n\tborder: 1px solid rgba(55, 53, 47, 0.09);\n\tborder-collapse: collapse;\n}\n\ntable {\n\tborder-left: none;\n\tborder-right: none;\n}\n\nth,\ntd {\n\tfont-weight: normal;\n\tpadding: 0.25em 0.5em;\n\tline-height: 1.5;\n\tmin-height: 1.5em;\n\ttext-align: left;\n}\n\nth {\n\tcolor: rgba(55, 53, 47, 0.6);\n}\n\nol,\nul {\n\tmargin: 0;\n\tmargin-block-start: 0.6em;\n\tmargin-block-end: 0.6em;\n}\n\nli > ol:first-child,\nli > ul:first-child {\n\tmargin-block-start: 0.6em;\n}\n\nul > li {\n\tlist-style: disc;\n}\n\nul.to-do-list {\n\tpadding-inline-start: 0;\n}\n\nul.to-do-list > li {\n\tlist-style: none;\n}\n\n.to-do-children-checked {\n\ttext-decoration: line-through;\n\topacity: 0.375;\n}\n\nul.toggle > li {\n\tlist-style: none;\n}\n\nul {\n\tpadding-inline-start: 1.7em;\n}\n\nul > li {\n\tpadding-left: 0.1em;\n}\n\nol {\n\tpadding-inline-start: 1.6em;\n}\n\nol > li {\n\tpadding-left: 0.2em;\n}\n\n.mono ol {\n\tpadding-inline-start: 2em;\n}\n\n.mono ol > li {\n\ttext-indent: -0.4em;\n}\n\n.toggle {\n\tpadding-inline-start: 0em;\n\tlist-style-type: none;\n}\n\n/* Indent toggle children */\n.toggle > li > details {\n\tpadding-left: 1.7em;\n}\n\n.toggle > li > details > summary {\n\tmargin-left: -1.1em;\n}\n\n.selected-value {\n\tdisplay: inline-block;\n\tpadding: 0 0.5em;\n\tbackground: rgba(206, 205, 202, 0.5);\n\tborder-radius: 3px;\n\tmargin-right: 0.5em;\n\tmargin-top: 0.3em;\n\tmargin-bottom: 0.3em;\n\twhite-space: nowrap;\n}\n\n.collection-title {\n\tdisplay: inline-block;\n\tmargin-right: 1em;\n}\n\n.page-description {\n    margin-bottom: 2em;\n}\n\n.simple-table {\n\tmargin-top: 1em;\n\tfont-size: 0.875rem;\n\tempty-cells: show;\n}\n.simple-table td {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table th {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table-header-color {\n\tbackground: rgb(247, 246, 243);\n\tcolor: black;\n}\n.simple-table-header {\n\tfont-weight: 500;\n}\n\ntime {\n\topacity: 0.5;\n}\n\n.icon {\n\tdisplay: inline-block;\n\tmax-width: 1.2em;\n\tmax-height: 1.2em;\n\ttext-decoration: none;\n\tvertical-align: text-bottom;\n\tmargin-right: 0.5em;\n}\n\nimg.icon {\n\tborder-radius: 3px;\n}\n\n.user-icon {\n\twidth: 1.5em;\n\theight: 1.5em;\n\tborder-radius: 100%;\n\tmargin-right: 0.5rem;\n}\n\n.user-icon-inner {\n\tfont-size: 0.8em;\n}\n\n.text-icon {\n\tborder: 1px solid #000;\n\ttext-align: center;\n}\n\n.page-cover-image {\n\tdisplay: block;\n\tobject-fit: cover;\n\twidth: 100%;\n\tmax-height: 30vh;\n}\n\n.page-header-icon {\n\tfont-size: 3rem;\n\tmargin-bottom: 1rem;\n}\n\n.page-header-icon-with-cover {\n\tmargin-top: -0.72em;\n\tmargin-left: 0.07em;\n}\n\n.page-header-icon img {\n\tborder-radius: 3px;\n}\n\n.link-to-page {\n\tmargin: 1em 0;\n\tpadding: 0;\n\tborder: none;\n\tfont-weight: 500;\n}\n\np > .user {\n\topacity: 0.5;\n}\n\ntd > .user,\ntd > time {\n\twhite-space: nowrap;\n}\n\ninput[type="checkbox"] {\n\ttransform: scale(1.5);\n\tmargin-right: 0.6em;\n\tvertical-align: middle;\n}\n\np {\n\tmargin-top: 0.5em;\n\tmargin-bottom: 0.5em;\n}\n\n.image {\n\tborder: none;\n\tmargin: 1.5em 0;\n\tpadding: 0;\n\tborder-radius: 0;\n\ttext-align: center;\n}\n\n.code,\ncode {\n\tbackground: rgba(135, 131, 120, 0.15);\n\tborder-radius: 3px;\n\tpadding: 0.2em 0.4em;\n\tborder-radius: 3px;\n\tfont-size: 85%;\n\ttab-size: 2;\n}\n\ncode {\n\tcolor: #eb5757;\n}\n\n.code {\n\tpadding: 1.5em 1em;\n}\n\n.code-wrap {\n\twhite-space: pre-wrap;\n\tword-break: break-all;\n}\n\n.code > code {\n\tbackground: none;\n\tpadding: 0;\n\tfont-size: 100%;\n\tcolor: inherit;\n}\n\nblockquote {\n\tfont-size: 1.25em;\n\tmargin: 1em 0;\n\tpadding-left: 1em;\n\tborder-left: 3px solid rgb(55, 53, 47);\n}\n\n.bookmark {\n\ttext-decoration: none;\n\tmax-height: 8em;\n\tpadding: 0;\n\tdisplay: flex;\n\twidth: 100%;\n\talign-items: stretch;\n}\n\n.bookmark-title {\n\tfont-size: 0.85em;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\theight: 1.75em;\n\twhite-space: nowrap;\n}\n\n.bookmark-text {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.bookmark-info {\n\tflex: 4 1 180px;\n\tpadding: 12px 14px 14px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.bookmark-image {\n\twidth: 33%;\n\tflex: 1 1 180px;\n\tdisplay: block;\n\tposition: relative;\n\tobject-fit: cover;\n\tborder-radius: 1px;\n}\n\n.bookmark-description {\n\tcolor: rgba(55, 53, 47, 0.6);\n\tfont-size: 0.75em;\n\toverflow: hidden;\n\tmax-height: 4.5em;\n\tword-break: break-word;\n}\n\n.bookmark-href {\n\tfont-size: 0.75em;\n\tmargin-top: 0.25em;\n}\n\n.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }\n.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }\n.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }\n.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }\n.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans CJK JP\'; }\n.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans CJK SC\'; }\n.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans CJK TC\'; }\n.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans CJK KR\'; }\n.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK JP\'; }\n.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK SC\'; }\n.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK TC\'; }\n.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK KR\'; }\n.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, \'Twemoji\', \'Noto Color Emoji\', \'Noto Serif CJK JP\'; }\n.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, \'Twemoji\', \'Noto Color Emoji\', \'Noto Serif CJK SC\'; }\n.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, \'Twemoji\', \'Noto Color Emoji\', \'Noto Serif CJK TC\'; }\n.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, \'Twemoji\', \'Noto Color Emoji\', \'Noto Serif CJK KR\'; }\n.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK JP\'; }\n.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK SC\'; }\n.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK TC\'; }\n.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK KR\'; }\n.highlight-default {\n\tcolor: rgba(55, 53, 47, 1);\n}\n.highlight-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.highlight-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.highlight-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.highlight-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.highlight-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.highlight-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.highlight-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.highlight-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.highlight-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.highlight-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.highlight-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.highlight-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.highlight-yellow_background {\n\tbackground: rgba(251, 243, 219, 1);\n}\n.highlight-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.highlight-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.highlight-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.highlight-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.highlight-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.block-color-default {\n\tcolor: inherit;\n\tfill: inherit;\n}\n.block-color-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.block-color-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.block-color-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.block-color-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.block-color-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.block-color-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.block-color-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.block-color-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.block-color-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.block-color-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.block-color-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.block-color-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.block-color-yellow_background {\n\tbackground: rgba(251, 243, 219, 1);\n}\n.block-color-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.block-color-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.block-color-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.block-color-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.block-color-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.select-value-color-interactiveBlue { background-color: rgba(35, 131, 226, .07); }\n.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }\n.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }\n.select-value-color-green { background-color: rgba(219, 237, 219, 1); }\n.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }\n.select-value-color-translucentGray { background-color: rgba(255, 255, 255, 0.0375); }\n.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }\n.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }\n.select-value-color-red { background-color: rgba(255, 226, 221, 1); }\n.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }\n.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }\n.select-value-color-pageGlass { background-color: undefined; }\n.select-value-color-washGlass { background-color: undefined; }\n\n.checkbox {\n\tdisplay: inline-flex;\n\tvertical-align: text-bottom;\n\twidth: 16;\n\theight: 16;\n\tbackground-size: 16px;\n\tmargin-left: 2px;\n\tmargin-right: 5px;\n}\n\n.checkbox-on {\n\tbackground-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");\n}\n\n.checkbox-off {\n\tbackground-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");\n}\n\t\n</style></head><body><article id="4580791f-aadc-4b2f-814a-8d89d2736aa5" class="page sans"><header><div class="page-header-icon undefined"><span class="icon">👔</span></div><h1 class="page-title">송지훈 | 개발자</h1><p class="page-description"></p></header><div class="page-body"><p id="bc1e6fe3-ff17-46a0-b44e-dd4428fa2538" class="">2년차 개발자 송지훈입니다. 항상 왜(Why)라는 마인드를 가지고 코드를 접근합니다. 클린코드를 지향하며, 스스로 문제점을 찾기 위해서 노력하고, 지속적인 리펙토링을 통해 고도화 작업 즐겨합니다.</p><p id="19c42070-5db4-4f4a-a076-d1d8062a2fdc" class="">또한 편리하고 속도가 빠른 개발을 위해 테스트 주도 개발(TDD)를 지향하며, 개인적인 성장과 회사 문화를 위해서 코드리뷰를 선호합니다. 생산성ㄴ</p><p id="c58cd85a-f8a5-406a-8822-823e97d37212" class="">사용자가 편리하게 사용할 수 있고, 거부감이 없는 프론트엔드 개발자로 성장하기 위해 노력하고 있습니다. </p><p id="04ca9c00-b177-426b-8c41-645c13e445d7" class="">\n</p><hr id="56185ea6-6c80-49a5-ab6d-afc1451608a9"/><h2 id="37e8cacc-7e81-4159-bb10-b3a5387ed81a" class=""><strong><mark class="highlight-brown">Contact.</mark></strong></h2><p id="167974a1-2b4b-45c2-b2e7-fc63439d1946" class="">Email : dev.wlgns.song@gmail.com</p><p id="5edc5a6a-19e3-41c0-83da-523d1ed33e57" class="">Phone : 010-9130-0723</p><p id="d5fba942-5959-40cb-8c12-c427bc672712" class="">Blog : <a href="https://velog.io/@jihoon_song">https://ssongjihun.github.io</a></p><p id="f1b28ba2-4157-4c8b-bad9-1313ff5eb03e" class="">GitHub : <a href="https://github.com/ssongJiHun">https://github.com/ssongJiHun</a></p><p id="16d9395a-57a3-4c25-adda-54fb433b2147" class="">\n</p><hr id="c4f2fc10-9981-4d93-a0b5-f5cea219219f"/><h2 id="a6b0f437-ef2f-4a46-8510-1ed78c86357f" class=""><mark class="highlight-brown"><strong>W</strong></mark><mark class="highlight-brown">ork Experience.</mark></h2><h2 id="3b470b2e-addd-44ad-bc88-cb07d9c34822" class=""><strong><mark class="highlight-gray"><span style="border-bottom:0.05em solid">천재교과서</span></mark></strong></h2><p id="aadaa4f3-d01e-49f4-b5cf-4c4dff2a4acb" class=""><a href="https://chunjaetext.co.kr/">https://chunjaetext.co.kr/</a></p><div id="6322fe79-088b-4f31-b0ff-5f04d57ce61b" class="column-list"><div id="fe8594f6-830c-46ca-971e-677d61817a7d" style="width:31.25%" class="column"><p id="0c9670a3-df48-46a7-ada6-3bd42c68fa68" class="">웹 개발자 </p><p id="c0e511bb-3269-4c2a-8df4-fc37113a271d" class="">2023.01 ~ 현재</p><p id="1a06a9ae-e4fa-4c9d-9724-5e78330400fb" class="">중고학습개발1팀 밀크T 중학</p><p id="993c2768-122f-43d7-ba4e-821dd7105616" class="">ASP.NET, VUE(SPA), MSSQL, Tortoise(svn)</p><p id="df5e67e1-9ae1-4d4d-994d-5e54049678c2" class="">\n</p></div><div id="ca1980b8-3360-49ad-aa7a-f4aece74f9dd" style="width:68.75%" class="column"><ul id="256ca6fc-0fdc-463e-ae53-ac174d9be158" class="bulleted-list"><li style="list-style-type:disc">밀크T 중등 웹/탭 부분 <a href="https://www.notion.so/4580791faadc4b2f814a8d89d2736aa5?pvs=21">VUE(SPA) Framwrok 마이그레이션 및 고도화,</a></li></ul><ul id="8c80993f-b6b5-4100-9919-68a152467049" class="bulleted-list"><li style="list-style-type:disc">IE지원을 위해 <a href="https://www.notion.so/4580791faadc4b2f814a8d89d2736aa5?pvs=21">라이브리리 CDN 캐쉬작업 및 트랜스 파일러</a></li></ul><ul id="6f606bab-7201-46b8-a003-ad8d9e1e783d" class="bulleted-list"><li style="list-style-type:disc"><a href="https://www.notion.so/4580791faadc4b2f814a8d89d2736aa5?pvs=21">웹팩 및 트리쉐이킹 최적화 / 초기 빌드 속도 단점을 개선</a></li></ul><ul id="51330821-e1b8-4023-bc13-ef968379f8c2" class="bulleted-list"><li style="list-style-type:disc">누적 10만건의 단원평가 시험서비스 개발 및 오픈,  기존의 <a href="https://www.notion.so/4580791faadc4b2f814a8d89d2736aa5?pvs=21">.NET ASP 서버사이드스크립트를 프론트와 백엔드 분리하여 </a>생산성 및 추후 유연한 구조변경 가능성 증가 , REST API 도입</li></ul><ul id="0114ccaa-7657-416a-8f74-78b0feed257f" class="bulleted-list"><li style="list-style-type:disc">기존 ASP의 동기식 렌더링 단점 보안을 위해 <a href="https://www.notion.so/4580791faadc4b2f814a8d89d2736aa5?pvs=21">비동기 렌더링 방식 채택</a>, UX 편의성 및 속도 개선 ( PostBack 감소 ) </li></ul><ul id="ec196b2e-47ed-4b3b-beea-53f1a908efa7" class="bulleted-list"><li style="list-style-type:disc">어드민페이지 쪽지 발송 시스템  HTML 파싱방식 변경 및 DB구조 변경으로인한 재생산성 증가 및 리소스 낭비 감소</li></ul><p id="f1beb645-825c-412c-b1c3-d630c7b9dd27" class="">\n</p></div></div><h2 id="a7bf4253-0040-4f77-ba13-8dd7d7f428e0" class=""><mark class="highlight-gray"><span style="border-bottom:0.05em solid"><strong>소더코드</strong></span></mark></h2><p id="25bd8979-c401-4bf4-a169-1f15f1fbb163" class=""><a href="https://www.sothecode.com/">https://www.sothecode.com/</a></p><div id="77f84047-1abc-4083-8cac-394234159e84" class="column-list"><div id="3be49b54-47d7-4d46-acf7-366acc1031d3" style="width:31.25%" class="column"><p id="adb9d08e-dbd6-4b59-a6f0-86d97f2b0071" class="">웹 개발자</p><p id="c50c3641-1312-472c-85d2-d96ba29eed95" class="">2022.07 ~ 2023.01</p><p id="aa1299da-4e19-435f-b72e-b095b1a3c557" class="">REACT(SPA), Node(Express), Git(svn), Android(webView)</p><p id="d95da6bd-af1c-4e3c-a713-580660e4d97f" class="">\n</p></div><div id="17cd1488-b04a-480e-8cd2-78431c75cbd5" style="width:68.75%" class="column"><ul id="259ac693-7042-4523-b16d-3b312fad33d6" class="bulleted-list"><li style="list-style-type:disc">React Framwork기반의 ERP 시스템 설계 및 개발(Full statck)</li></ul><ul id="91e72abc-b00c-47ba-8cf3-1f3163e7f733" class="bulleted-list"><li style="list-style-type:disc"><a href="https://www.notion.so/4580791faadc4b2f814a8d89d2736aa5?pvs=21">React-Query 도입</a>, 서버 데이터와 클라이언트 데이터 상태 구별 생산성 증가</li></ul><ul id="003b3854-63b5-439f-a477-b58e590abef3" class="bulleted-list"><li style="list-style-type:disc">로그인 유지 기능 강화 및 보안 이슈 개선을 위해 <a href="https://www.notion.so/4580791faadc4b2f814a8d89d2736aa5?pvs=21">JWT사용, AccessToken과 RefreshToken</a> 구성, 수질관리 시스템 및 신규 ERP시스템 도입 및 개선</li></ul><ul id="0b912058-fe66-4b48-8b32-305839474bc6" class="bulleted-list"><li style="list-style-type:disc">기존 수질관리측정기로부터 Pub/Sub 방식 사용하여 클라이언트의 SMS 및 카카오톡을 통해 실시간 수질 관련 정보 전달 시스템 개선</li></ul><ul id="ed40e4e4-f141-4e88-8663-ed51b8382c70" class="bulleted-list"><li style="list-style-type:disc">여행정보사이트 “투비롱”  빠른 렌더링과 높은 생산성을 위해서 바닐라자바스크립트→ React 프레임워크 마이그레이션</li></ul></div></div><p id="71ef773b-b941-41d6-8db9-010c89ea12c3" class="">\n</p><hr id="9475484f-f338-4c06-966f-771b63f01e8d"/><h2 id="c10d8ac8-c477-4107-bc8f-24c38c169929" class=""><mark class="highlight-brown">Private </mark><strong><mark class="highlight-brown">Experience.</mark></strong></h2><p id="10c00edf-cf89-467e-b55d-f9aa8c3261bd" class="">Gatsby 블로그 마이그레이션</p><p id="2e396915-c611-4952-bd52-cadb543443b3" class="">타입 스크립트를 사용한 마이그레이션</p><p id="d439f83e-91cf-460c-ba35-7b04fc0ce975" class="">기본 로그인 기능 (세션 및 쿠기) </p><p id="723e96eb-00d1-4415-b5d1-f43b3e0f9977" class="">\n</p><p id="7af83ef8-4f30-47a1-9c69-ad65de880a3c" class="">\n</p><hr id="d28bdf23-934f-4ddc-8028-bf79d44db363"/><h2 id="d592d77f-6379-4942-a203-a646627c9d07" class=""><strong><mark class="highlight-brown">Other Experience.</mark></strong></h2><p id="19f9c332-a512-4598-ab5d-70e1624173d3" class="">게임개발</p><p id="e0b0a312-0d98-4d09-8e36-116e4076c5cf" class="">\n</p><p id="ab5ae895-fe5b-4291-af27-e298bf0b1143" class="">\n</p><p id="53b8a175-58d9-4236-84a5-bc845505caf6" class="">\n</p><hr id="856dfe1d-5e5f-48e1-9ed2-4620ff7d753a"/><h2 id="f7f69987-b140-4920-b359-98d72ea2f530" class=""><mark class="highlight-brown"><strong>Eudcation.</strong></mark></h2><p id="593bd709-dc78-4a7a-8da1-83c8aefc508c" class=""><strong>호서대학교</strong> 컴퓨터소프트웨어학과      | 2016.03 ~ 2023.08</p><p id="6f03d238-f828-4a5e-9288-a2f39f92ca4a" class=""><strong>한국게임과학고등학교</strong> 프로그래밍 전공 | 2014.03  ~ 2016.02</p><p id="4bee550b-ed8e-4d49-bbc1-2c9c63b66773" class="">\n</p></div></article></body></html>'}})}}]);
//# sourceMappingURL=component---src-pages-about-index-jsx-4f4a54e81753290f173a.js.map
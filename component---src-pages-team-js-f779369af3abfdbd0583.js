(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{197:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(203),c=t(204),i=t(230),s=t.n(i);a.default=function(e){return l.a.createElement(r.a,null,l.a.createElement(c.a,{title:"Team"}),l.a.createElement("section",{id:"banner",className:"style2"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h1",null,"Team")))),l.a.createElement("div",{id:"main",className:"alt"},l.a.createElement("section",{id:"one"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Organizers")),l.a.createElement("hr",{className:"major"}),l.a.createElement("div",{className:"grid-wrapper"},l.a.createElement("div",{className:"col-4"},l.a.createElement("ul",{className:"alt"},l.a.createElement("li",null,"Chief Organizer: ogom"," ",l.a.createElement("a",{href:"https://twitter.com/ogomr",className:"icon fa-twitter",target:"_blank"},l.a.createElement("span",{className:"label"},"Twitter")),l.a.createElement("a",{href:"https://github.com/ogom",className:"icon fa-github",target:"_blank"},l.a.createElement("span",{className:"label"},"Github"))),l.a.createElement("li",null,"Organizer: honeniq"),l.a.createElement("li",null,"Organizer: islands5"),l.a.createElement("li",null,"Organizer: khori"),l.a.createElement("li",null,"Designer: ayatanet"))),l.a.createElement("div",{className:"col-4"},l.a.createElement("span",{className:"image fit "},l.a.createElement("img",{src:s.a,alt:""}))))))))}},200:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(66),c=t.n(r);t.d(a,"a",function(){return c.a});t(201),t(9).default.enqueue,l.a.createContext({})},201:function(e,a,t){var n;e.exports=(n=t(202))&&n.default||n},202:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),l=t.n(n),r=t(91);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},203:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(205),t(200)),c=function(e){return l.a.createElement("header",{id:"header",className:"alt"},l.a.createElement("nav",null,l.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))},i=function(e){return l.a.createElement("nav",{id:"menu"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/schedule"},"Schedule")),l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/speakers"},"Speakers")),l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/sponsors"},"Sponsors")),l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/team"},"Team")))),l.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))},s=function(e){return l.a.createElement("footer",{id:"footer"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/rubykansai","aria-label":"Twitter",className:"icon alt fa-twitter",target:"_blank"},l.a.createElement("span",{className:"label"},"Twitter"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/RubyKansai/","aria-label":"Facebook",className:"icon alt fa-facebook",target:"_blank"},l.a.createElement("span",{className:"label"},"Facebook"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/rubykansai","aria-label":"GitHub",className:"icon alt fa-github",target:"_blank"},l.a.createElement("span",{className:"label"},"GitHub"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://rubykansai.doorkeeper.jp/contact/new","aria-label":"Envelope",className:"icon alt fa-envelope",target:"_blank"},l.a.createElement("span",{className:"label"},"Envelope")))),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"Osaka RubyKaigi 02 © 2019"),l.a.createElement("li",null,"Design: ",l.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))))};var o=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=n.prototype;return r.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},r.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},r.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},r.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},l.a.createElement("div",{id:"wrapper"},l.a.createElement(c,{onToggleMenu:this.handleToggleMenu}),e,l.a.createElement(s,null)),l.a.createElement(i,{onToggleMenu:this.handleToggleMenu}))},n}(l.a.Component);a.a=o},204:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(206),c=t.n(r);a.a=function(e){return l.a.createElement(c.a,{title:e.title+" - Osaka RubyKaigi 02",meta:[{name:"description",content:"Regional RubyKaigi at Osaka 02"},{name:"keywords",content:"Regional RubyKaigi Osaka RubyKansai Ruby"},{property:"og:image",content:"https://raw.githubusercontent.com/rubykansai/osaka02/master/src/assets/images/og.png"}]})}},230:function(e,a,t){e.exports=t.p+"static/symbol-dc157ca6198775736adf8640a56cf5fc.svg"}}]);
//# sourceMappingURL=component---src-pages-team-js-f779369af3abfdbd0583.js.map
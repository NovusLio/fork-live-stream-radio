(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/stream/gettingstarted.mdx":function(e,a,t){"use strict";t.r(a);var n=t("./node_modules/react/index.js"),o=t.n(n),m=t("./node_modules/@mdx-js/tag/dist/index.js");function r(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}a.default=function(e){var a=e.components;r(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:a},o.a.createElement(m.MDXTag,{name:"h1",components:a,props:{id:"getting-started"}},"Getting Started"),o.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"installation"}},"Installation"),o.a.createElement(m.MDXTag,{name:"h3",components:a,props:{id:"nvm"}},"nvm"),o.a.createElement(m.MDXTag,{name:"p",components:a},"First, you have to install the latest LTS version of ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://nodejs.org/"}},"Node.js")," (this also includes ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"npm"),", the package manager of Node.js). We recommend you to do this by using ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"nvm"),", the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"node version manager"),"."),o.a.createElement(m.MDXTag,{name:"p",components:a},"Simply download nvm from ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/creationix/nvm"}},"this (Mac/Linux)")," or ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/coreybutler/nvm-windows"}},"this (Windows)")," website and install it. After that you'll be able to install the latest LTS version by running the following command in a terminal or console."),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"nvm install --lts")),o.a.createElement(m.MDXTag,{name:"h3",components:a,props:{id:"ffmpeg"}},"FFmpeg"),o.a.createElement(m.MDXTag,{name:"p",components:a},"Next, you have to download or compile the latest version of ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://ffmpeg.org/"}},"FFmpeg"),". It specifically needs to be compiled with ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://ffmpeg.org/ffmpeg-filters.html#drawtext"}},"libfreetype")," so we can draw text within the stream image. You can either add the folder of your ffmpeg binaries to your system's PATH or directly put the path to them in the config file. ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Note: this project requires FFmpeg version 4.2.0 or greater in order to ensure the best performance. ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://github.com/torch2424/live-stream-radio/issues/78"}},"Please see this issue for explanation"))," "),o.a.createElement(m.MDXTag,{name:"h4",components:a,props:{id:"downloading-ffmpeg"}},"Downloading FFmpeg"),o.a.createElement(m.MDXTag,{name:"p",components:a},"We have a mock release page, where we can share Pre-compiled FFmpeg builds that we confirm work well with ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"live-stream-radio"),". Check out the ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/torch2424/live-stream-radio/releases/tag/ffmpeg-builds"}},"FFmpeg pre-compiled builds here"),"."),o.a.createElement(m.MDXTag,{name:"h4",components:a,props:{id:"compiling-ffmpeg"}},"Compiling FFmpeg"),o.a.createElement(m.MDXTag,{name:"p",components:a},"Please check out the ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://trac.ffmpeg.org/wiki/CompilationGuide"}},"FFmpeg Compilation Guide")," for a more detailled guide. Again, please check that you build FFmpeg with the libfreetype module. If you using macOS, building ffmpeg may be as easy as running ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"brew install ffmpeg --with-freetype")," on your terminal."),o.a.createElement(m.MDXTag,{name:"h3",components:a,props:{id:"live-stream-radio"}},"live-stream-radio"),o.a.createElement(m.MDXTag,{name:"p",components:a},"We're getting somewhere! Next, you will finally install live-stream-radio. We recommend you to install it globally to use the command from everywhere! Installing is as easy as running the following command in a terminal/console."),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"npm install -g live-stream-radio")),o.a.createElement(m.MDXTag,{name:"p",components:a},"After that, you can check if you installed it correctly by running ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"live-stream-radio --help"),"!"),o.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"generating-a-stream-project"}},"Generating a stream project"),o.a.createElement(m.MDXTag,{name:"p",components:a},"Let's get to the good stuff! Now you have to generate your first stream project. Go ahead, fire up a terminal/console and run this command:"),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"live-stream-radio --generate myStream")),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"myStream")," can be any name for your stream. Keep in mind that this will also be the folder name, so don't get too crazy!"),o.a.createElement(m.MDXTag,{name:"p",components:a},"Looking good! Now for some customization!"),o.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"configuration"}},"Configuration"),o.a.createElement(m.MDXTag,{name:"p",components:a},"check out the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"config.json")," file in your streams project folder. Put in your ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"stream_url")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"stream_key")," and also check out the other settings. If you want to stream on YouTube, we even already setup the stream url for you (you might noticed the $stream_key in the url, this is a variable and will be replaced with the stream key!). Now might also be a good time to put your music and videos in their dedicated folders."),o.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"starting-the-stream"}},"Starting the stream"),o.a.createElement(m.MDXTag,{name:"p",components:a},"Starting your newly created stream is as simple as running ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"live-stream-radio --start myStream"),"."),o.a.createElement(m.MDXTag,{name:"p",components:a},"Now you can get some popcorn and enjoy your live-stream-radio! Or, you might want to check out the ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/api/endpoints"}},"configuration")," or ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/projectmanagement/config"}},"api"),"!"))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/generate/config.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js");function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}n.default=function(e){var n=e.components;i(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"config"}},"Config"),a.a.createElement(r.MDXTag,{name:"p",components:n},"This documents the fields of a project ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"config.json"),". This will use an invalid comments in json in order to show what each field means. Please see the ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/torch2424/live-stream-radio/blob/master/src/generate/template/config.json"}},"default project generator config.json")," if you ever need to reset your config to the default settings."),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"general-config-settings"}},"General Config Settings"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},'{   \n\n    // URL where the stream will be output to. \n    // The `$stream_key` in the `stream_url` field is replaced by the following `stream_key` field.\n    // Note: The `stream_url` and the `stream_key` field can be overwritten by the `--ouput` CLI flag\n    "stream_url": "rtmp://a.rtmp.youtube.com/live2/$stream_key",\n\n    // The key provided by your stream platform to be placed into the URL. \n    // The `$stream_key` in the `stream_url` field is replaced by the following `stream_key` field.\n    // Note: The `stream_url` and the `stream_key` field can be overwritten by the `--ouput` CLI flag\n    "stream_key": "",\n\n    // The path to the ffmpeg binary you would like to use.\n    // This field is optional, and if left blank, \n    // will use the default system wide ffmpeg binary.\n    "ffmpeg_path": "",\n\n    // Audio bit rate of the stream output.\n    "audio_bit_rate": "128k",\n\n    // Audio sample rate of the stream output.\n    "audio_sample_rate": "44100",\n\n    // Height/Width of the video output.\n    // Common values are as follows:\n    // 240P - 240x426\n    // 360P - 360x640\n    // 480P - 480x854\n    // 720P - 720x1280\n    // 1080P - 1080x1920\n    "video_height": "480",\n    "video_width": "854",\n\n    // Video bit rate of the stream output\n    "video_bit_rate": "500k",\n\n    // Frames per second of the video output\n    "video_fps": "24",\n\n    // The maximum width or height of a gif when optimizing a gif file for streaming.\n    // This only applies if you have gif files as video output.\n    "max_gif_size": "720",\n\n    // Settings relating to the stream API\n    "api": {\n\n      // Host of the API is served on.\n      "host": "localhost",\n\n      // Port that the API is served on.\n      "port": "8000",\n\n      // API Key used with all API requests\n      // When building/using a frontend, this API Key will be required to use\n      // This key should be something long, and kept secret.\n      "key": "super-secret-api-key",\n\n      // Number of items to story in stream history, for history endpoints.\n      "number_of_history_items": 100\n    },\n\n    // Settings relating to the general radio of the project\n    "radio": {\n\n      // Directory where all audio files live, and should be recursively found and used.\n      // Please see the FAQ for supported file types.\n      "audio_directory": "./audio",\n\n      // Directory where all video files live, and should be recursively found and used.\n      // Please see the FAQ for supported file types.\n      "video_directory": "./video",\n\n      // Settings relating to the radio overlay that is shown\n      "overlay": {\n\n        // Should the overlay be enabled\n        "enabled": true,\n\n        // Font to be used when showing text on the overlay .\n        // Please see the FAQ for supported file types.\n        "font_path": "./fonts/Lato-Regular.ttf",\n\n        // Name / Title of the stream\n        "title": {\n          \n          // See Common Text Object Settings\n          \n          // Title Unique Settingss\n\n          // Should the title scroll across the screen.\n          "enable_scroll": true,\n\n          // Speed at which the title scrolls\n          "font_scroll_speed": "20",\n        },\n\n        // Artist of the Current Playing Song, from the file metadata\n        "artist": {\n          \n          // See Common Text Object Settings\n\n        },\n\n        // Album of the Current Playing Song, from the file metadata\n        "album": {\n\n          // See Common Text Object Settings\n\n        },\n\n        // Title of the Current Playing Song, from the file metadata\n        "song": {\n\n          // See Common Text Object Settings\n\n        },\n\n        // Image overlay shown on top of the text and the video\n        "image": {\n\n          // See Common Image Object Settings\n\n        }\n      }\n    },\n\n    // Settings reffering to interludes that are occasionally played along with radio songs\n    "interlude": {\n\n      // Should interludes be played\n      "enabled": "true",\n\n      // How often should interludes by played. This is a non-negative float representing a percentage.\n      // Valid values are from 0.0 (never) - 1.0 (100% of the time)\n      "frequency": "0.2",\n\n      // Directory where Interlude audio is stored.\n      // Can be the same as the radio directories.\n      "audio_directory": "./interludes/audio",\n\n      // Directory where Interlude video is stored. \n      // Can be the same as the radio directories.\n      "video_directory": "./interludes/video",\n\n      // Overlay that is shown above interlude streams\n      "overlay": {\n\n        // Should the overlay be shown\n        "enabled": true,\n\n\n        // Please see the FAQ for supported file types.\n        "font_path": "./fonts/Lato-Regular.ttf",\n\n        // See Common Text Object Settings\n\n        "title": {\n\n           // See Common Text Object Settings\n\n        },\n        "image": {\n\n          // See Common Image Object Settings\n\n        }\n      }\n    }\n}\n')),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"common-text-object-settings"}},"Common Text Object Settings"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Common keys that all text objects support and are required to display the text"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},'...\n\n"some-text-object": {\n\n  // Whethere this text object should be visible or not\n  "enabled": true\n\n  // Test string to display\n  "text": "Live Stream Radio, 24/7 Open Source Radio",\n\n  // Color of the font, in hex\n  "font_color": "#FFFFFF",\n\n  // Color of the text border, in hex\n  "font_border": "#000000",\n\n  // Size of the font\n  "font_size": "10",\n\n  // X position of the font. This is a percentage, similar to CSS percents. Do NOT include the `%`.\n  "position_x": "0",\n\n  // Y porition of the font. This is a percentage, similar to CSS percents. Do NOT include the `%`.\n  "position_y": "5"\n}\n\n...\n')),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"common-image-object-settings"}},"Common Image Object Settings"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Common keys that all image objects support and are required to display the text"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},'...\n\n"image": {\n\n  // Whether the image should be shown or not\n  "enabled": true,\n\n  // Path to the image to be displayed. Must be a PNG. See FAQ for information about images.\n  "image_path": "./live-stream-radio-overlay-image.png",\n\n  // X position in pixels. 0 refers to the most left, increasing places the image more to the right.\n  "position_x": 0,\n\n  // Y position in pixels. 0 refers to the most top, increasing places the image more to the bottom.\n  "position_y": 0\n}\n\n...\n')))}}}]);
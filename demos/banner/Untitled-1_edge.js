/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['pt-sans-narrow, sans-serif']='<script src=\"http://use.edgefonts.net/pt-sans-narrow:n4,n7:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Untitled-14',
                type: 'image',
                rect: ['-3276px', '-405px','7280px','900px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-14.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['-558px', '0px','597px','233px','auto', 'auto'],
                text: "Форум Ямальского района",
                font: ['pt-sans-narrow, sans-serif', 60, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['-185px', '0px','185px','90px','auto', 'auto'],
                text: "Яр-Сале",
                align: "left",
                font: ['pt-sans-narrow, sans-serif', 60, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['-206px', '0px','206px','90px','auto', 'auto'],
                text: "Панаевск",
                align: "left",
                font: ['pt-sans-narrow, sans-serif', 60, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['-185px', '0px','185px','90px','auto', 'auto'],
                text: "Салемал",
                align: "left",
                font: ['pt-sans-narrow, sans-serif', 60, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['-266px', '0px','266px','90px','auto', 'auto'],
                text: "Новый Порт",
                align: "left",
                font: ['pt-sans-narrow, sans-serif', 60, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text11',
                type: 'text',
                rect: ['-339px', '0px','339px','90px','auto', 'auto'],
                text: "Сеяха",
                align: "left",
                font: ['pt-sans-narrow, sans-serif', 60, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text16',
                type: 'text',
                rect: ['-326px', '0px','326px','90px','auto', 'auto'],
                text: "Мыс Каменный",
                align: "left",
                font: ['pt-sans-narrow, sans-serif', 60, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text21',
                type: 'text',
                rect: ['148px', '-90px','456px','90px','auto', 'auto'],
                text: "Общаемся вместе",
                align: "left",
                font: ['pt-sans-narrow, sans-serif', 60, "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Untitled-15',
                type: 'image',
                rect: ['-821px', '-387px','2370px','870px','auto', 'auto'],
                borderRadius: ["36px 36px", "36px 36px", "36px 36px", "36px 36px"],
                fill: ["rgba(0,0,0,0)",im+"Untitled-15.svg",'0px','0px'],
                transform: [[],[],[],['0.10042','0.04597']]
            },
            {
                id: 'Text22',
                type: 'text',
                rect: ['290px', '31px','206px','90px','auto', 'auto'],
                text: "Присоединиться",
                align: "left",
                font: ['pt-sans-narrow, sans-serif', 26, "rgba(241,241,241,1.00)", "200", "none", "normal"]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['148px', '-90px','226px','28px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["8.5px 8.5px", "8.5px 8.5px", "8.5px 8.5px", "8.5px 8.5px"],
                fill: ["rgba(255,184,0,1.00)"],
                stroke: [6,"rgba(239,190,63,1.00)","solid"]
            },
            {
                id: '_3725117-gray-blank-square-glossy-web-button',
                type: 'image',
                rect: ['-64px', '-284px','100px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3725117-gray-blank-square-glossy-web-button.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text21}": [
                ["style", "top", '-90px'],
                ["style", "height", '90px'],
                ["style", "font-weight", '700'],
                ["style", "left", '148px'],
                ["style", "width", '456px']
            ],
            "${_Untitled-12}": [
                ["style", "left", '-3101px'],
                ["style", "top", '-345px']
            ],
            "${_Untitled-14}": [
                ["style", "left", '-3276px'],
                ["style", "top", '-405px']
            ],
            "${_Text11}": [
                ["style", "left", '-339px'],
                ["style", "width", '339px']
            ],
            "${_Text9}": [
                ["style", "top", '0px'],
                ["style", "left", '-185px'],
                ["style", "width", '185px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,184,0,1.00)'],
                ["style", "border-top-left-radius", [8.5,8.5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8.5,8.5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '226px'],
                ["style", "top", '-90px'],
                ["style", "border-bottom-left-radius", [8.5,8.5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '28px'],
                ["color", "border-color", 'rgba(239,190,63,1.00)'],
                ["style", "left", '148px'],
                ["style", "border-top-right-radius", [8.5,8.5], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Text16}": [
                ["style", "left", '-326px'],
                ["style", "width", '326px']
            ],
            "${_Untitled-15}": [
                ["style", "border-top-left-radius", [106,106], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [106,106], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.10042'],
                ["style", "opacity", '0'],
                ["style", "left", '-821px'],
                ["style", "top", '-387px'],
                ["style", "border-bottom-left-radius", [106,106], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.04597'],
                ["style", "border-top-right-radius", [106,106], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Text22}": [
                ["color", "color", 'rgba(241,241,241,1.00)'],
                ["style", "font-weight", '200'],
                ["style", "left", '290px'],
                ["style", "font-size", '26px'],
                ["style", "top", '31px'],
                ["style", "height", '90px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'auto'],
                ["style", "width", '206px']
            ],
            "${_Text5}": [
                ["style", "left", '-185px'],
                ["style", "width", '185px']
            ],
            "${_Text}": [
                ["style", "top", '0px'],
                ["style", "width", '597px'],
                ["style", "height", '233px'],
                ["style", "font-family", 'pt-sans-narrow, sans-serif'],
                ["style", "left", '-558px'],
                ["style", "font-size", '60px']
            ],
            "${_Text13}": [
                ["style", "width", '227px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '728px'],
                ["style", "height", '90px'],
                ["style", "overflow", 'hidden']
            ],
            "${__3725117-gray-blank-square-glossy-web-button}": [
                ["style", "left", '-64px'],
                ["style", "top", '-284px']
            ],
            "${_Text10}": [
                ["style", "top", '0px'],
                ["style", "height", '90px'],
                ["style", "left", '-266px'],
                ["style", "width", '266px']
            ],
            "${_Text8}": [
                ["style", "left", '-206px'],
                ["style", "width", '206px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 36000,
            autoPlay: true,
            labels: {
                "start": 0
            },
            timeline: [
                { id: "eid41", tween: [ "style", "${_Text11}", "left", '298px', { fromValue: '-339px'}], position: 21250, duration: 2000, easing: "easeInOutBack" },
                { id: "eid43", tween: [ "style", "${_Text11}", "left", '727px', { fromValue: '298px'}], position: 23750, duration: 1750, easing: "easeInOutBack" },
                { id: "eid17", tween: [ "style", "${_Text5}", "left", '271px', { fromValue: '-185px'}], position: 3500, duration: 2000, easing: "easeInOutBack" },
                { id: "eid20", tween: [ "style", "${_Text5}", "left", '728px', { fromValue: '271px'}], position: 6500, duration: 2122, easing: "easeInOutBack" },
                { id: "eid27", tween: [ "style", "${_Text9}", "left", '271px', { fromValue: '-185px'}], position: 10750, duration: 2000, easing: "easeInOutBack" },
                { id: "eid30", tween: [ "style", "${_Text9}", "left", '728px', { fromValue: '271px'}], position: 13750, duration: 2000, easing: "easeInOutBack" },
                { id: "eid42", tween: [ "style", "${_Text11}", "width", '131px', { fromValue: '339px'}], position: 21250, duration: 2000, easing: "easeInOutBack" },
                { id: "eid60", tween: [ "style", "${_Rectangle}", "left", '243px', { fromValue: '148px'}], position: 29000, duration: 1000 },
                { id: "eid76", tween: [ "style", "${_Untitled-15}", "border-bottom-right-radius", [106,106], { valueTemplate: '@@0@@px @@1@@px', fromValue: [106,106]}], position: 32500, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text16}", "left", '201px', { fromValue: '-326px'}], position: 18250, duration: 1750, easing: "easeInOutBack" },
                { id: "eid40", tween: [ "style", "${_Text16}", "left", '728px', { fromValue: '201px'}], position: 20750, duration: 1500, easing: "easeInOutBack" },
                { id: "eid77", tween: [ "style", "${_Untitled-15}", "border-bottom-left-radius", [106,106], { valueTemplate: '@@0@@px @@1@@px', fromValue: [106,106]}], position: 32500, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Rectangle}", "top", '28px', { fromValue: '-90px'}], position: 29000, duration: 1000 },
                { id: "eid22", tween: [ "style", "${_Text8}", "left", '261px', { fromValue: '-206px'}], position: 7000, duration: 2000, easing: "easeInOutBack" },
                { id: "eid23", tween: [ "style", "${_Text8}", "left", '728px', { fromValue: '261px'}], position: 10250, duration: 2000, easing: "easeInOutBack" },
                { id: "eid75", tween: [ "style", "${_Untitled-15}", "border-top-right-radius", [106,106], { valueTemplate: '@@0@@px @@1@@px', fromValue: [106,106]}], position: 32500, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Text21}", "top", '0px', { fromValue: '-90px'}], position: 24500, duration: 1750, easing: "easeInOutBack" },
                { id: "eid49", tween: [ "style", "${_Text21}", "top", '90px', { fromValue: '0px'}], position: 28250, duration: 1750, easing: "easeInOutBack" },
                { id: "eid31", tween: [ "style", "${_Text10}", "left", '231px', { fromValue: '-266px'}], position: 14500, duration: 1750, easing: "easeInOutBack" },
                { id: "eid32", tween: [ "style", "${_Text10}", "left", '728px', { fromValue: '231px'}], position: 17000, duration: 2000, easing: "easeInOutBack" },
                { id: "eid74", tween: [ "style", "${_Untitled-15}", "border-top-left-radius", [106,106], { valueTemplate: '@@0@@px @@1@@px', fromValue: [106,106]}], position: 32500, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text21}", "left", '145px', { fromValue: '148px'}], position: 24500, duration: 1750, easing: "easeInOutBack" },
                { id: "eid48", tween: [ "style", "${_Text21}", "left", '148px', { fromValue: '145px'}], position: 28250, duration: 1750, easing: "easeInOutBack" },
                { id: "eid9", tween: [ "style", "${_Text}", "left", '65px', { fromValue: '-558px'}], position: 0, duration: 2000, easing: "easeInOutBack" },
                { id: "eid12", tween: [ "style", "${_Text}", "left", '728px', { fromValue: '65px'}], position: 3000, duration: 2000, easing: "easeInOutBack" },
                { id: "eid57", tween: [ "style", "${_Text22}", "opacity", '1', { fromValue: '0'}], position: 30000, duration: 2500 },
                { id: "eid73", tween: [ "style", "${_Untitled-15}", "opacity", '1', { fromValue: '0'}], position: 30000, duration: 2500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-96441706");

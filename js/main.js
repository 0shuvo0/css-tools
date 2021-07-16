var STYLE_ON_TAB_SELECT = true

var BoxShadowGenerator = Vue.component("boxshadow-generator", {
    data(){
        return {
            shadowModel: [
                {
                    shadowX: 20,
                    shadowY: 20,
                    spread: 0,
                    blur: 0,
                    shadowInset: false,
                    shadowColor: "#000000"
                }
            ]
        }
    },
    methods: {
        addLayer: function(){
    		this.shadowModel.push({
     	 	    shadowX: 20,
     		    shadowY: 20,
     		    spread: 0,
       		    blur: 0,
      		    shadowInset: false,
      	 	    shadowColor: "#000000"
			})
    	},
        removeLayer: function(i){
    		if(this.shadowModel.length < 2) return;
    		this.shadowModel.splice(i, 1)
    	},
        emitCodes(){
            var shadow = this.shadows
            this.$emit("codesChange", [
                {
                    property: "box-shadow",
                    value: shadow
                }
            ])
        }
    },
    computed: {
    	shadows: function(){
            var s = "";
            for(var i = 0; i < this.shadowModel.length; i++){
                s += this.shadowModel[i].shadowInset ? ", inset " : ", "
                s += this.shadowModel[i].shadowX + "px " + this.shadowModel[i].shadowY + "px " + this.shadowModel[i].blur + "px " + this.shadowModel[i].spread + "px " + this.shadowModel[i].shadowColor
            }
            var res = s.substring(2)
            return res
        }
   	},
    watch: {
        shadows(){
            this.emitCodes()
        }
    },
    mounted(){
        STYLE_ON_TAB_SELECT && this.emitCodes()
    },
    template: `
        <div>
            <div class="layer-ctrl"  v-for="(layer, index) in shadowModel">
                <p class="layer-close"><i v-on:click="removeLayer(index)" v-if="shadowModel.length > 1">&times;</i></p>
                <div class="input-group">
                    <label>X Axis: {{shadowModel[index].shadowX}}px</label>
                    <input type="range" min="-50" max="50" value="0" v-model="shadowModel[index].shadowX">
                </div>
                <div class="input-group">
                    <label>Y Axis: {{shadowModel[index].shadowY}}px</label>
                    <input type="range" min="-50" max="50" value="0" v-model="shadowModel[index].shadowY">
                </div>
                <div class="input-group">
                    <label>Blur: {{shadowModel[index].blur}}px</label>
                    <input type="range" min="0" max="50" value="0" v-model="shadowModel[index].blur">
                </div>
                <div class="input-group">
                    <label>Spread: {{shadowModel[index].spread}}px</label>
                    <input type="range" min="0" max="50" value="0" v-model="shadowModel[index].spread">
                </div>
                <div class="input-group">
                    <label>Inset: {{shadowModel[index].shadowInset}}</label>
                    <input type="checkbox" v-model="shadowModel[index].shadowInset">
                </div>
                <div class="input-group">
                    <label>Shadow color: {{shadowModel[index].shadowColor}}</label>
                    <input type="color" v-model="shadowModel[index].shadowColor">
                </div>
            </div>
            <div class="text-right">
                <button class="btn" v-on:click="addLayer()">add layer</button>
            </div>
        </div>
    `
})


var BorderRadiusGenerator = Vue.component("borderradius-generator", {
    data(){
        return {
            borderRadiusModel: {
                topLeftX: 5,
                topRightX: 5,
                bottomLeftX: 5,
                bottomRightX: 5,
                topLeftY: 5,
                topRightY: 5,
                bottomLeftY: 5,
                bottomRightY: 5
            }
        }
    },
    methods: {
        emitCodes(){
            var borderRadius = this.borderRadius
            this.$emit("codesChange", [
                {
                    property: "border-radius",
                    value: borderRadius
                }
            ])
        }
    },
    computed: {
    	borderRadius: function(){
            let t = this.borderRadiusModel
            var res = `${ t.topLeftX }% ${ t.topRightX }% ${ t.bottomRightX }% ${ t.bottomLeftX }% / ${ t.topLeftY }% ${ t.topRightY }% ${ t.bottomRightY }% ${ t.bottomLeftY }%`
            return res
        }
   	},
    watch: {
        borderRadius(){
            this.emitCodes()
        }
    },
    mounted(){
        STYLE_ON_TAB_SELECT && this.emitCodes()
    },
    template: `
        <div>
            <div class="layer-ctrl">
                <div class="input-group">
                    <label>Top Left X: {{ borderRadiusModel.topLeftX }}%</label>
                    <input type="range" min="0" max="100" value="0" v-model="borderRadiusModel.topLeftX">
                </div>
                <div class="input-group">
                    <label>Top Left Y: {{ borderRadiusModel.topLeftY }}%</label>
                    <input type="range" min="0" max="100" value="0" v-model="borderRadiusModel.topLeftY">
                </div>
                <br>

                <div class="input-group">
                    <label>Top Right X: {{ borderRadiusModel.topRightX }}%</label>
                    <input type="range" min="0" max="100" value="0" v-model="borderRadiusModel.topRightX">
                </div>
                <div class="input-group">
                    <label>Top Right Y: {{ borderRadiusModel.topRightY }}%</label>
                    <input type="range" min="0" max="100" value="0" v-model="borderRadiusModel.topRightY">
                </div>
                <br>

                <div class="input-group">
                    <label>Bottom Left X: {{ borderRadiusModel.bottomLeftX }}%</label>
                    <input type="range" min="0" max="100" value="0" v-model="borderRadiusModel.bottomLeftX">
                </div>
                <div class="input-group">
                    <label>Bottom Left Y: {{ borderRadiusModel.bottomLeftY }}%</label>
                    <input type="range" min="0" max="100" value="0" v-model="borderRadiusModel.bottomLeftY">
                </div>
                <br>

                <div class="input-group">
                    <label>Bottom Right X: {{ borderRadiusModel.bottomRightX }}%</label>
                    <input type="range" min="0" max="100" value="0" v-model="borderRadiusModel.bottomRightX">
                </div>
                <div class="input-group">
                    <label>Bottom Right Y: {{ borderRadiusModel.bottomRightY }}%</label>
                    <input type="range" min="0" max="100" value="0" v-model="borderRadiusModel.bottomRightY">
                </div>
                
            </div>
        <div>
    `
})


var TransformGenerator = Vue.component("gradient-generator", {
    data(){
        return {
            transformModel: {
                translateX: 0,
                translateY: 0,
                translateZ: 0,
                skewX: 0,
                skewY: 0,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
                originX: "center",
                originY: "center",
                perspective: 0,
                transformStyle: "initial"
            }
        }
    },
    methods: {
        emitCodes(){
            var transforms = this.transforms
            this.$emit("codesChange", [
                {
                    property: "transform-style",
                    value: transforms[0]
                },
                {
                    property: "transform-origin",
                    value: transforms[1]
                },
                {
                    property: "transform",
                    value: transforms[2]
                },
                
                
            ])
        }
    },
    computed: {
    	transforms: function(){
            let t = this.transformModel
            var res = [
                t.transformStyle,
                `${t.originX} ${t.originY}`,
                `perspective(${t.perspective}px) `
                + `translateX(${t.translateX}%) translateY(${t.translateY}%) translateZ(${t.translateZ}px) `
                + `skewX(${t.skewX}deg) skewY(${t.skewY}deg) `
                + `rotateX(${t.rotateX}deg) rotateY(${t.rotateY}deg) rotateZ(${t.rotateZ}deg) `
                + `scaleX(${t.scaleX}) scaleY(${t.scaleY}) scaleZ(${t.scaleZ})`
            ]
            return res
        }
   	},
    watch: {
        transforms(){
            this.emitCodes()
        }
    },
    mounted(){
        STYLE_ON_TAB_SELECT && this.emitCodes()
    },
    template: `
        <div>
            <div class="layer-ctrl">
                <div class="input-group">
                    <label>Transform Origin X: {{ transformModel.originX }}</label>
                    <select v-model="transformModel.originX">
                        <option value="center">center</option>
                        <option value="top">top</option>
                        <option value="bottom">bottom</option>
                        <option value="left">left</option>
                        <option value="right">right</option>
                        
                    </select>
                </div>
                <div class="input-group">
                    <label>Transform Origin Y: {{ transformModel.originY }}</label>
                    <select v-model="transformModel.originY">
                        <option value="center">center</option>
                        <option value="top">top</option>
                        <option value="bottom">bottom</option>
                        <option value="left">left</option>
                        <option value="right">right</option>
                        
                    </select>
                </div>
                <br>

                <div class="input-group">
                    <label>Prespective: {{ transformModel.perspective }}</label>
                    <input type="range" min="0" max="3000" value="0" v-model="transformModel.perspective">
                </div>
                <div class="input-group">
                    <label>Transform Style: {{ transformModel.transformStyle }}</label>
                    <select v-model="transformModel.transformStyle">
                        <option value="initial">initial</option>
                        <option value="inherit">inherit</option>
                        <option value="flat">flat</option>
                        <option value="preserve-3d">preserve-3d</option>
                        
                    </select>
                </div>
                <br>

                <div class="input-group">
                    <label>Translate X: {{ transformModel.translateX }}%</label>
                    <input type="range" min="-100" max="100" value="0" v-model="transformModel.translateX">
                </div>
                <div class="input-group">
                    <label>Translate Y: {{ transformModel.translateY }}%</label>
                    <input type="range" min="-100" max="100" value="0" v-model="transformModel.translateY">
                </div>
                <div class="input-group">
                    <label>Translate Z: {{ transformModel.translateZ }}px</label>
                    <input type="range" min="-1000" max="1000" value="0" v-model="transformModel.translateZ">
                </div>
                <br>

                <div class="input-group">
                    <label>Skew X: {{ transformModel.skewX }}deg</label>
                    <input type="range" min="-180" max="180" value="0" v-model="transformModel.skewX">
                </div>
                <div class="input-group">
                    <label>Skew Y: {{ transformModel.skewY }}deg</label>
                    <input type="range" min="-180" max="180" value="0" v-model="transformModel.skewY">
                </div>
                <br>
                
                <div class="input-group">
                    <label>Rotate X: {{ transformModel.rotateX }}deg</label>
                    <input type="range" min="-180" max="180" value="0" v-model="transformModel.rotateX">
                </div>
                <div class="input-group">
                    <label>Rotate Y: {{ transformModel.rotateY }}deg</label>
                    <input type="range" min="-180" max="180" value="0" v-model="transformModel.rotateY">
                </div>
                <div class="input-group">
                    <label>Rotate Z: {{ transformModel.rotateZ }}deg</label>
                    <input type="range" min="-180" max="180" value="0" v-model="transformModel.rotateZ">
                </div>
                <br>

                <div class="input-group">
                    <label>Scale X: {{ transformModel.scaleX }}deg</label>
                    <input type="range" min="0" max="10" step="0.1" value="0" v-model="transformModel.scaleX">
                </div>
                <div class="input-group">
                    <label>Scale Y: {{ transformModel.scaleY }}deg</label>
                    <input type="range" min="0" max="10" step="0.1" value="0" v-model="transformModel.scaleY">
                </div>
                <div class="input-group">
                    <label>Scale Z: {{ transformModel.scaleZ }}deg</label>
                    <input type="range" min="0" max="10" step="0.1" value="0" v-model="transformModel.scaleZ">
                </div>
                <br>
                

            </div>
        <div>
    `
})


var DOMManipulator = Vue.component("dom-manipulator", {
    props: ["styles"],
    data(){
        return {
            selector: null
        }
    },
    watch: {
        styles(){
            /* Do Something */
        }
    },
    mounted(){
        if(!chrome) return
        console.log("We're in chrome");
    },
    template: `
        <div class="input-section">
            <input type="text" placeholder="Click on any element or enter selector manually" v-model="selector">
            <span><span>-</span> selected element</span>
        </div>
    `
})



var HomePage = Vue.component("home-page", {
    data(){
        return {
            tabs: [
                {
                    name: "box shadow",
                    component: BoxShadowGenerator
                },
                {
                    name: "border radius",
                    component: BorderRadiusGenerator
                },
                {
                    name: "transform",
                    component: TransformGenerator
                }
            ],
            currentTab: 0,
            styles: [],
            showModal: false,
            mode: "webpage"
        }
    },
    methods: {
        handleCodesChange(codes){
            this.styles = codes
            var $this = this
            codes.map(function(style){
                $this.$refs.previewBox.style[style.property] = style.value
            })
        }
    },
    template: `
        <div>
            <div class="navbar">
                <a href="#">CSS Tools</a>
                <span class="info" @click="showModal = true">?</span>
            </div>

            <dom-manipulator :styles="styles" v-if="mode == 'extension'"></dom-manipulator>

            <div class="tabs">
                <a href="#" class="tab" v-for="(tab, index) in tabs" :key="index" :class="{active: index == currentTab}" @click="currentTab = index">{{ tab.name }}</a>
            </div>

            <div class="main">
                <div class="preview">
                    <div class="box" ref="previewBox"></div>
                </div>
                <div class="component">
                    <keep-alive>
                        <component :is="tabs[currentTab].component" @codesChange="handleCodesChange"></component>
                    </keep-alive>
                </div>
            </div>

            <div class="codes">
                <p>Generated codes:</p>
                <div class="codes-box">
                    <p v-for="(style, index) in styles" :key="index"><span class="code-prop">{{ style.property }}</span>: <span class="code-val">{{ style.value }}</span>;</p>
                </div>
            </div>

            <div class="navbar footer" v-if="mode == 'webpage'">
                <span>&copy; {{ new Date().getFullYear() }}</span>
                <a href="https://github.com/0shuvo0/css-to">view on github</a>
            </div>

            <div class="modal" v-if="showModal">
                <div class="content">
                    <span class="close" @click="showModal = false">&times;</span>
                    <p><b>CSS Tools</b> contains useful tools that will ease your development. Choose any tool and create an effect you like. Then simply copy pase the generated css codes into your project.</p>
                </div>
            </div>
        </div>
    `
})

var app = new Vue({
    el: "#app"
})
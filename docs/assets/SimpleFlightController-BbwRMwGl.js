import{g as Tn,j as F,A as yr,r as jt}from"./index-CwswvObn.js";function wr(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const xr=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,kr=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Sr={};function Ht(e,t){return(Sr.jsx?kr:xr).test(e)}const Cr=/[ \t\n\f\r]/g;function Ir(e){return typeof e=="object"?e.type==="text"?Vt(e.value):!1:Vt(e)}function Vt(e){return e.replace(Cr,"")===""}class je{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}je.prototype.normal={};je.prototype.property={};je.prototype.space=void 0;function En(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new je(n,r,t)}function pt(e){return e.toLowerCase()}class Z{constructor(t,n){this.attribute=n,this.property=t}}Z.prototype.attribute="";Z.prototype.booleanish=!1;Z.prototype.boolean=!1;Z.prototype.commaOrSpaceSeparated=!1;Z.prototype.commaSeparated=!1;Z.prototype.defined=!1;Z.prototype.mustUseProperty=!1;Z.prototype.number=!1;Z.prototype.overloadedBoolean=!1;Z.prototype.property="";Z.prototype.spaceSeparated=!1;Z.prototype.space=void 0;let _r=0;const D=xe(),K=xe(),mt=xe(),w=xe(),G=xe(),ve=xe(),te=xe();function xe(){return 2**++_r}const dt=Object.freeze(Object.defineProperty({__proto__:null,boolean:D,booleanish:K,commaOrSpaceSeparated:te,commaSeparated:ve,number:w,overloadedBoolean:mt,spaceSeparated:G},Symbol.toStringTag,{value:"Module"})),Ze=Object.keys(dt);class St extends Z{constructor(t,n,r,i){let o=-1;if(super(t,n),qt(this,"space",i),typeof r=="number")for(;++o<Ze.length;){const a=Ze[o];qt(this,Ze[o],(r&dt[a])===dt[a])}}}St.prototype.defined=!0;function qt(e,t,n){n&&(e[t]=n)}function Ee(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new St(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[pt(r)]=r,n[pt(o.attribute)]=r}return new je(t,n,e.space)}const Pn=Ee({properties:{ariaActiveDescendant:null,ariaAtomic:K,ariaAutoComplete:null,ariaBusy:K,ariaChecked:K,ariaColCount:w,ariaColIndex:w,ariaColSpan:w,ariaControls:G,ariaCurrent:null,ariaDescribedBy:G,ariaDetails:null,ariaDisabled:K,ariaDropEffect:G,ariaErrorMessage:null,ariaExpanded:K,ariaFlowTo:G,ariaGrabbed:K,ariaHasPopup:null,ariaHidden:K,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:G,ariaLevel:w,ariaLive:null,ariaModal:K,ariaMultiLine:K,ariaMultiSelectable:K,ariaOrientation:null,ariaOwns:G,ariaPlaceholder:null,ariaPosInSet:w,ariaPressed:K,ariaReadOnly:K,ariaRelevant:null,ariaRequired:K,ariaRoleDescription:G,ariaRowCount:w,ariaRowIndex:w,ariaRowSpan:w,ariaSelected:K,ariaSetSize:w,ariaSort:null,ariaValueMax:w,ariaValueMin:w,ariaValueNow:w,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Mn(e,t){return t in e?e[t]:t}function An(e,t){return Mn(e,t.toLowerCase())}const vr=Ee({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ve,acceptCharset:G,accessKey:G,action:null,allow:null,allowFullScreen:D,allowPaymentRequest:D,allowUserMedia:D,alt:null,as:null,async:D,autoCapitalize:null,autoComplete:G,autoFocus:D,autoPlay:D,blocking:G,capture:null,charSet:null,checked:D,cite:null,className:G,cols:w,colSpan:null,content:null,contentEditable:K,controls:D,controlsList:G,coords:w|ve,crossOrigin:null,data:null,dateTime:null,decoding:null,default:D,defer:D,dir:null,dirName:null,disabled:D,download:mt,draggable:K,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:D,formTarget:null,headers:G,height:w,hidden:mt,high:w,href:null,hrefLang:null,htmlFor:G,httpEquiv:G,id:null,imageSizes:null,imageSrcSet:null,inert:D,inputMode:null,integrity:null,is:null,isMap:D,itemId:null,itemProp:G,itemRef:G,itemScope:D,itemType:G,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:D,low:w,manifest:null,max:null,maxLength:w,media:null,method:null,min:null,minLength:w,multiple:D,muted:D,name:null,nonce:null,noModule:D,noValidate:D,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:D,optimum:w,pattern:null,ping:G,placeholder:null,playsInline:D,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:D,referrerPolicy:null,rel:G,required:D,reversed:D,rows:w,rowSpan:w,sandbox:G,scope:null,scoped:D,seamless:D,selected:D,shadowRootClonable:D,shadowRootDelegatesFocus:D,shadowRootMode:null,shape:null,size:w,sizes:null,slot:null,span:w,spellCheck:K,src:null,srcDoc:null,srcLang:null,srcSet:null,start:w,step:null,style:null,tabIndex:w,target:null,title:null,translate:null,type:null,typeMustMatch:D,useMap:null,value:K,width:w,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:G,axis:null,background:null,bgColor:null,border:w,borderColor:null,bottomMargin:w,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:D,declare:D,event:null,face:null,frame:null,frameBorder:null,hSpace:w,leftMargin:w,link:null,longDesc:null,lowSrc:null,marginHeight:w,marginWidth:w,noResize:D,noHref:D,noShade:D,noWrap:D,object:null,profile:null,prompt:null,rev:null,rightMargin:w,rules:null,scheme:null,scrolling:K,standby:null,summary:null,text:null,topMargin:w,valueType:null,version:null,vAlign:null,vLink:null,vSpace:w,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:D,disableRemotePlayback:D,prefix:null,property:null,results:w,security:null,unselectable:null},space:"html",transform:An}),Tr=Ee({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:te,accentHeight:w,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:w,amplitude:w,arabicForm:null,ascent:w,attributeName:null,attributeType:null,azimuth:w,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:w,by:null,calcMode:null,capHeight:w,className:G,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:w,diffuseConstant:w,direction:null,display:null,dur:null,divisor:w,dominantBaseline:null,download:D,dx:null,dy:null,edgeMode:null,editable:null,elevation:w,enableBackground:null,end:null,event:null,exponent:w,externalResourcesRequired:null,fill:null,fillOpacity:w,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ve,g2:ve,glyphName:ve,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:w,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:w,horizOriginX:w,horizOriginY:w,id:null,ideographic:w,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:w,k:w,k1:w,k2:w,k3:w,k4:w,kernelMatrix:te,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:w,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:w,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:w,overlineThickness:w,paintOrder:null,panose1:null,path:null,pathLength:w,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:G,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:w,pointsAtY:w,pointsAtZ:w,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:te,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:te,rev:te,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:te,requiredFeatures:te,requiredFonts:te,requiredFormats:te,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:w,specularExponent:w,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:w,strikethroughThickness:w,string:null,stroke:null,strokeDashArray:te,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:w,strokeOpacity:w,strokeWidth:null,style:null,surfaceScale:w,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:te,tabIndex:w,tableValues:null,target:null,targetX:w,targetY:w,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:te,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:w,underlineThickness:w,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:w,values:null,vAlphabetic:w,vMathematical:w,vectorEffect:null,vHanging:w,vIdeographic:w,version:null,vertAdvY:w,vertOriginX:w,vertOriginY:w,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:w,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Mn}),Dn=Ee({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Nn=Ee({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:An}),Ln=Ee({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Er={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Pr=/[A-Z]/g,Gt=/-[a-z]/g,Mr=/^data[-\w.:]+$/i;function Ar(e,t){const n=pt(t);let r=t,i=Z;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Mr.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Gt,Nr);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Gt.test(o)){let a=o.replace(Pr,Dr);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=St}return new i(r,t)}function Dr(e){return"-"+e.toLowerCase()}function Nr(e){return e.charAt(1).toUpperCase()}const Lr=En([Pn,vr,Dn,Nn,Ln],"html"),Ct=En([Pn,Tr,Dn,Nn,Ln],"svg");function Or(e){return e.join(" ").trim()}var Ie={},et,Wt;function Br(){if(Wt)return et;Wt=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,n=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,o=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,a=/^[;\s]*/,s=/^\s+|\s+$/g,c=`
`,l="/",u="*",p="",f="comment",h="declaration";function k(_,y){if(typeof _!="string")throw new TypeError("First argument must be a string");if(!_)return[];y=y||{};var M=1,I=1;function U(E){var S=E.match(t);S&&(M+=S.length);var z=E.lastIndexOf(c);I=~z?E.length-z:I+E.length}function H(){var E={line:M,column:I};return function(S){return S.position=new b(E),B(),S}}function b(E){this.start=E,this.end={line:M,column:I},this.source=y.source}b.prototype.content=_;function L(E){var S=new Error(y.source+":"+M+":"+I+": "+E);if(S.reason=E,S.filename=y.source,S.line=M,S.column=I,S.source=_,!y.silent)throw S}function V(E){var S=E.exec(_);if(S){var z=S[0];return U(z),_=_.slice(z.length),S}}function B(){V(n)}function R(E){var S;for(E=E||[];S=T();)S!==!1&&E.push(S);return E}function T(){var E=H();if(!(l!=_.charAt(0)||u!=_.charAt(1))){for(var S=2;p!=_.charAt(S)&&(u!=_.charAt(S)||l!=_.charAt(S+1));)++S;if(S+=2,p===_.charAt(S-1))return L("End of comment missing");var z=_.slice(2,S-2);return I+=2,U(z),_=_.slice(S),I+=2,E({type:f,comment:z})}}function v(){var E=H(),S=V(r);if(S){if(T(),!V(i))return L("property missing ':'");var z=V(o),Y=E({type:h,property:C(S[0].replace(e,p)),value:z?C(z[0].replace(e,p)):p});return V(a),Y}}function q(){var E=[];R(E);for(var S;S=v();)S!==!1&&(E.push(S),R(E));return E}return B(),q()}function C(_){return _?_.replace(s,p):p}return et=k,et}var Kt;function Fr(){if(Kt)return Ie;Kt=1;var e=Ie&&Ie.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Ie,"__esModule",{value:!0}),Ie.default=n;const t=e(Br());function n(r,i){let o=null;if(!r||typeof r!="string")return o;const a=(0,t.default)(r),s=typeof i=="function";return a.forEach(c=>{if(c.type!=="declaration")return;const{property:l,value:u}=c;s?i(l,u,c):u&&(o=o||{},o[l]=u)}),o}return Ie}var Ne={},Yt;function Rr(){if(Yt)return Ne;Yt=1,Object.defineProperty(Ne,"__esModule",{value:!0}),Ne.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,t=/-([a-z])/g,n=/^[^-]+$/,r=/^-(webkit|moz|ms|o|khtml)-/,i=/^-(ms)-/,o=function(l){return!l||n.test(l)||e.test(l)},a=function(l,u){return u.toUpperCase()},s=function(l,u){return"".concat(u,"-")},c=function(l,u){return u===void 0&&(u={}),o(l)?l:(l=l.toLowerCase(),u.reactCompat?l=l.replace(i,s):l=l.replace(r,s),l.replace(t,a))};return Ne.camelCase=c,Ne}var Le,Xt;function zr(){if(Xt)return Le;Xt=1;var e=Le&&Le.__importDefault||function(i){return i&&i.__esModule?i:{default:i}},t=e(Fr()),n=Rr();function r(i,o){var a={};return!i||typeof i!="string"||(0,t.default)(i,function(s,c){s&&c&&(a[(0,n.camelCase)(s,o)]=c)}),a}return r.default=r,Le=r,Le}var Ur=zr();const jr=Tn(Ur),On=Bn("end"),It=Bn("start");function Bn(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Hr(e){const t=It(e),n=On(e);if(t&&n)return{start:t,end:n}}function Fe(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?$t(e.position):"start"in e||"end"in e?$t(e):"line"in e||"column"in e?ft(e):""}function ft(e){return Qt(e&&e.line)+":"+Qt(e&&e.column)}function $t(e){return ft(e&&e.start)+"-"+ft(e&&e.end)}function Qt(e){return e&&typeof e=="number"?e:1}class $ extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const s=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=s?s.line:void 0,this.name=Fe(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}$.prototype.file="";$.prototype.name="";$.prototype.reason="";$.prototype.message="";$.prototype.stack="";$.prototype.column=void 0;$.prototype.line=void 0;$.prototype.ancestors=void 0;$.prototype.cause=void 0;$.prototype.fatal=void 0;$.prototype.place=void 0;$.prototype.ruleId=void 0;$.prototype.source=void 0;const _t={}.hasOwnProperty,Vr=new Map,qr=/[A-Z]/g,Gr=new Set(["table","tbody","thead","tfoot","tr"]),Wr=new Set(["td","th"]),Fn="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Kr(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=ti(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=ei(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Ct:Lr,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Rn(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Rn(e,t,n){if(t.type==="element")return Yr(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Xr(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Qr(e,t,n);if(t.type==="mdxjsEsm")return $r(e,t);if(t.type==="root")return Jr(e,t,n);if(t.type==="text")return Zr(e,t)}function Yr(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Ct,e.schema=i),e.ancestors.push(t);const o=Un(e,t.tagName,!1),a=ni(e,t);let s=Tt(e,t);return Gr.has(t.tagName)&&(s=s.filter(function(c){return typeof c=="string"?!Ir(c):!0})),zn(e,a,o,t),vt(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Xr(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Ue(e,t.position)}function $r(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ue(e,t.position)}function Qr(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Ct,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:Un(e,t.name,!0),a=ri(e,t),s=Tt(e,t);return zn(e,a,o,t),vt(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Jr(e,t,n){const r={};return vt(r,Tt(e,t)),e.create(t,e.Fragment,r,n)}function Zr(e,t){return t.value}function zn(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function vt(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function ei(e,t,n){return r;function r(i,o,a,s){const l=Array.isArray(a.children)?n:t;return s?l(o,a,s):l(o,a)}}function ti(e,t){return n;function n(r,i,o,a){const s=Array.isArray(o.children),c=It(r);return t(i,o,a,s,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function ni(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&_t.call(t.properties,i)){const o=ii(e,i,t.properties[i]);if(o){const[a,s]=o;e.tableCellAlignToStyle&&a==="align"&&typeof s=="string"&&Wr.has(t.tagName)?r=s:n[a]=s}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function ri(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const s=a.properties[0];s.type,Object.assign(n,e.evaluater.evaluateExpression(s.argument))}else Ue(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,o=e.evaluater.evaluateExpression(s.expression)}else Ue(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function Tt(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:Vr;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const l=i.get(c)||0;a=c+"-"+l,i.set(c,l+1)}}const s=Rn(e,o,a);s!==void 0&&n.push(s)}return n}function ii(e,t,n){const r=Ar(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?wr(n):Or(n)),r.property==="style"){let i=typeof n=="object"?n:oi(e,String(n));return e.stylePropertyNameCase==="css"&&(i=ai(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Er[r.property]||r.property:r.attribute,n]}}function oi(e,t){try{return jr(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new $("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Fn+"#cannot-parse-style-attribute",i}}function Un(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,a;for(;++o<i.length;){const s=Ht(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:s,computed:!!(o&&s.type==="Literal"),optional:!1}:s}r=a}else r=Ht(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return _t.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ue(e)}function Ue(e,t){const n=new $("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Fn+"#cannot-handle-mdx-estrees-without-createevaluater",n}function ai(e){const t={};let n;for(n in e)_t.call(e,n)&&(t[si(n)]=e[n]);return t}function si(e){let t=e.replace(qr,li);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function li(e){return"-"+e.toLowerCase()}const tt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},ui={};function ci(e,t){const n=ui,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return jn(e,r,i)}function jn(e,t,n){if(hi(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Jt(e.children,t,n)}return Array.isArray(e)?Jt(e,t,n):""}function Jt(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=jn(e[i],t,n);return r.join("")}function hi(e){return!!(e&&typeof e=="object")}const Zt=document.createElement("i");function Et(e){const t="&"+e+";";Zt.innerHTML=t;const n=Zt.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function ce(e,t,n,r){const i=e.length;let o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function re(e,t){return e.length>0?(ce(e,e.length,0,t),e):t}const en={}.hasOwnProperty;function pi(e){const t={};let n=-1;for(;++n<e.length;)mi(t,e[n]);return t}function mi(e,t){let n;for(n in t){const i=(en.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){en.call(i,a)||(i[a]=[]);const s=o[a];di(i[a],Array.isArray(s)?s:s?[s]:[])}}}function di(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);ce(e,0,0,r)}function Hn(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Te(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ue=be(/[A-Za-z]/),ne=be(/[\dA-Za-z]/),fi=be(/[#-'*+\--9=?A-Z^-~]/);function gt(e){return e!==null&&(e<32||e===127)}const bt=be(/\d/),gi=be(/[\dA-Fa-f]/),bi=be(/[!-/:-@[-`{-~]/);function P(e){return e!==null&&e<-2}function J(e){return e!==null&&(e<0||e===32)}function O(e){return e===-2||e===-1||e===32}const yi=be(new RegExp("\\p{P}|\\p{S}","u")),wi=be(/\s/);function be(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Pe(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&ne(e.charCodeAt(n+1))&&ne(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const s=e.charCodeAt(n+1);o<56320&&s>56319&&s<57344?(a=String.fromCharCode(o,s),i=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function W(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(c){return O(c)?(e.enter(n),s(c)):t(c)}function s(c){return O(c)&&o++<i?(e.consume(c),s):(e.exit(n),t(c))}}const xi={tokenize:ki};function ki(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),W(e,t,"linePrefix")}function i(s){return e.enter("paragraph"),o(s)}function o(s){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(s)}function a(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return P(s)?(e.consume(s),e.exit("chunkText"),o):(e.consume(s),a)}}const Si={tokenize:Ci},tn={tokenize:Ii};function Ci(e){const t=this,n=[];let r=0,i,o,a;return s;function s(I){if(r<n.length){const U=n[r];return t.containerState=U[1],e.attempt(U[0].continuation,c,l)(I)}return l(I)}function c(I){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&M();const U=t.events.length;let H=U,b;for(;H--;)if(t.events[H][0]==="exit"&&t.events[H][1].type==="chunkFlow"){b=t.events[H][1].end;break}y(r);let L=U;for(;L<t.events.length;)t.events[L][1].end={...b},L++;return ce(t.events,H+1,0,t.events.slice(U)),t.events.length=L,l(I)}return s(I)}function l(I){if(r===n.length){if(!i)return f(I);if(i.currentConstruct&&i.currentConstruct.concrete)return k(I);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(tn,u,p)(I)}function u(I){return i&&M(),y(r),f(I)}function p(I){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,k(I)}function f(I){return t.containerState={},e.attempt(tn,h,k)(I)}function h(I){return r++,n.push([t.currentConstruct,t.containerState]),f(I)}function k(I){if(I===null){i&&M(),y(0),e.consume(I);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),C(I)}function C(I){if(I===null){_(e.exit("chunkFlow"),!0),y(0),e.consume(I);return}return P(I)?(e.consume(I),_(e.exit("chunkFlow")),r=0,t.interrupt=void 0,s):(e.consume(I),C)}function _(I,U){const H=t.sliceStream(I);if(U&&H.push(null),I.previous=o,o&&(o.next=I),o=I,i.defineSkip(I.start),i.write(H),t.parser.lazy[I.start.line]){let b=i.events.length;for(;b--;)if(i.events[b][1].start.offset<a&&(!i.events[b][1].end||i.events[b][1].end.offset>a))return;const L=t.events.length;let V=L,B,R;for(;V--;)if(t.events[V][0]==="exit"&&t.events[V][1].type==="chunkFlow"){if(B){R=t.events[V][1].end;break}B=!0}for(y(r),b=L;b<t.events.length;)t.events[b][1].end={...R},b++;ce(t.events,V+1,0,t.events.slice(L)),t.events.length=b}}function y(I){let U=n.length;for(;U-- >I;){const H=n[U];t.containerState=H[1],H[0].exit.call(t,e)}n.length=I}function M(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Ii(e,t,n){return W(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function nn(e){if(e===null||J(e)||wi(e))return 1;if(yi(e))return 2}function Pt(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const yt={name:"attention",resolveAll:_i,tokenize:vi};function _i(e,t){let n=-1,r,i,o,a,s,c,l,u;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};rn(p,-c),rn(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},s={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...s.end}},e[r][1].end={...a.start},e[n][1].start={...s.end},l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=re(l,[["enter",e[r][1],t],["exit",e[r][1],t]])),l=re(l,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),l=re(l,Pt(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=re(l,[["exit",o,t],["enter",s,t],["exit",s,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=re(l,[["enter",e[n][1],t],["exit",e[n][1],t]])):u=0,ce(e,r-1,n-r+3,l),n=r+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function vi(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=nn(r);let o;return a;function a(c){return o=c,e.enter("attentionSequence"),s(c)}function s(c){if(c===o)return e.consume(c),s;const l=e.exit("attentionSequence"),u=nn(c),p=!u||u===2&&i||n.includes(c),f=!i||i===2&&u||n.includes(r);return l._open=!!(o===42?p:p&&(i||!f)),l._close=!!(o===42?f:f&&(u||!p)),t(c)}}function rn(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Ti={name:"autolink",tokenize:Ei};function Ei(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(h){return ue(h)?(e.consume(h),a):h===64?n(h):l(h)}function a(h){return h===43||h===45||h===46||ne(h)?(r=1,s(h)):l(h)}function s(h){return h===58?(e.consume(h),r=0,c):(h===43||h===45||h===46||ne(h))&&r++<32?(e.consume(h),s):(r=0,l(h))}function c(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||gt(h)?n(h):(e.consume(h),c)}function l(h){return h===64?(e.consume(h),u):fi(h)?(e.consume(h),l):n(h)}function u(h){return ne(h)?p(h):n(h)}function p(h){return h===46?(e.consume(h),r=0,u):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||ne(h))&&r++<63){const k=h===45?f:p;return e.consume(h),k}return n(h)}}const $e={partial:!0,tokenize:Pi};function Pi(e,t,n){return r;function r(o){return O(o)?W(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||P(o)?t(o):n(o)}}const Vn={continuation:{tokenize:Ai},exit:Di,name:"blockQuote",tokenize:Mi};function Mi(e,t,n){const r=this;return i;function i(a){if(a===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return O(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function Ai(e,t,n){const r=this;return i;function i(a){return O(a)?W(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(Vn,t,n)(a)}}function Di(e){e.exit("blockQuote")}const qn={name:"characterEscape",tokenize:Ni};function Ni(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return bi(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Gn={name:"characterReference",tokenize:Li};function Li(e,t,n){const r=this;let i=0,o,a;return s;function s(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),l):(e.enter("characterReferenceValue"),o=31,a=ne,u(p))}function l(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=gi,u):(e.enter("characterReferenceValue"),o=7,a=bt,u(p))}function u(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===ne&&!Et(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<o?(e.consume(p),u):n(p)}}const on={partial:!0,tokenize:Bi},an={concrete:!0,name:"codeFenced",tokenize:Oi};function Oi(e,t,n){const r=this,i={partial:!0,tokenize:H};let o=0,a=0,s;return c;function c(b){return l(b)}function l(b){const L=r.events[r.events.length-1];return o=L&&L[1].type==="linePrefix"?L[2].sliceSerialize(L[1],!0).length:0,s=b,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),u(b)}function u(b){return b===s?(a++,e.consume(b),u):a<3?n(b):(e.exit("codeFencedFenceSequence"),O(b)?W(e,p,"whitespace")(b):p(b))}function p(b){return b===null||P(b)?(e.exit("codeFencedFence"),r.interrupt?t(b):e.check(on,C,U)(b)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(b))}function f(b){return b===null||P(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(b)):O(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),W(e,h,"whitespace")(b)):b===96&&b===s?n(b):(e.consume(b),f)}function h(b){return b===null||P(b)?p(b):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),k(b))}function k(b){return b===null||P(b)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(b)):b===96&&b===s?n(b):(e.consume(b),k)}function C(b){return e.attempt(i,U,_)(b)}function _(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),y}function y(b){return o>0&&O(b)?W(e,M,"linePrefix",o+1)(b):M(b)}function M(b){return b===null||P(b)?e.check(on,C,U)(b):(e.enter("codeFlowValue"),I(b))}function I(b){return b===null||P(b)?(e.exit("codeFlowValue"),M(b)):(e.consume(b),I)}function U(b){return e.exit("codeFenced"),t(b)}function H(b,L,V){let B=0;return R;function R(S){return b.enter("lineEnding"),b.consume(S),b.exit("lineEnding"),T}function T(S){return b.enter("codeFencedFence"),O(S)?W(b,v,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):v(S)}function v(S){return S===s?(b.enter("codeFencedFenceSequence"),q(S)):V(S)}function q(S){return S===s?(B++,b.consume(S),q):B>=a?(b.exit("codeFencedFenceSequence"),O(S)?W(b,E,"whitespace")(S):E(S)):V(S)}function E(S){return S===null||P(S)?(b.exit("codeFencedFence"),L(S)):V(S)}}}function Bi(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const nt={name:"codeIndented",tokenize:Ri},Fi={partial:!0,tokenize:zi};function Ri(e,t,n){const r=this;return i;function i(l){return e.enter("codeIndented"),W(e,o,"linePrefix",5)(l)}function o(l){const u=r.events[r.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?a(l):n(l)}function a(l){return l===null?c(l):P(l)?e.attempt(Fi,a,c)(l):(e.enter("codeFlowValue"),s(l))}function s(l){return l===null||P(l)?(e.exit("codeFlowValue"),a(l)):(e.consume(l),s)}function c(l){return e.exit("codeIndented"),t(l)}}function zi(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):P(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):W(e,o,"linePrefix",5)(a)}function o(a){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):P(a)?i(a):n(a)}}const Ui={name:"codeText",previous:Hi,resolve:ji,tokenize:Vi};function ji(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Hi(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Vi(e,t,n){let r=0,i,o;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),s(p)}function s(p){return p===96?(e.consume(p),r++,s):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(o=e.enter("codeTextSequence"),i=0,u(p)):P(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),l(p))}function l(p){return p===null||p===32||p===96||P(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),l)}function u(p){return p===96?(e.consume(p),i++,u):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",l(p))}}class qi{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Oe(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Oe(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Oe(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Oe(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Oe(this.left,n.reverse())}}}function Oe(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Wn(e){const t={};let n=-1,r,i,o,a,s,c,l;const u=new qi(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type==="chunkFlow"&&u.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Gi(u,n)),n=t[n],l=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=u.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(u.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return ce(e,0,Number.POSITIVE_INFINITY,u.slice(0)),!l}function Gi(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const s=a.events,c=[],l={};let u,p,f=-1,h=n,k=0,C=0;const _=[C];for(;h;){for(;e.get(++i)[1]!==h;);o.push(i),h._tokenizer||(u=r.sliceStream(h),h.next||u.push(null),p&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(u),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=h,h=h.next}for(h=n;++f<s.length;)s[f][0]==="exit"&&s[f-1][0]==="enter"&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(C=f+1,_.push(C),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):_.pop(),f=_.length;f--;){const y=s.slice(_[f],_[f+1]),M=o.pop();c.push([M,M+y.length-1]),e.splice(M,2,y)}for(c.reverse(),f=-1;++f<c.length;)l[k+c[f][0]]=k+c[f][1],k+=c[f][1]-c[f][0]-1;return l}const Wi={resolve:Yi,tokenize:Xi},Ki={partial:!0,tokenize:$i};function Yi(e){return Wn(e),e}function Xi(e,t){let n;return r;function r(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(s)}function i(s){return s===null?o(s):P(s)?e.check(Ki,a,o)(s):(e.consume(s),i)}function o(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function a(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function $i(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),W(e,o,"linePrefix")}function o(a){if(a===null||P(a))return n(a);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Kn(e,t,n,r,i,o,a,s,c){const l=c||Number.POSITIVE_INFINITY;let u=0;return p;function p(y){return y===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(y),e.exit(o),f):y===null||y===32||y===41||gt(y)?n(y):(e.enter(r),e.enter(a),e.enter(s),e.enter("chunkString",{contentType:"string"}),C(y))}function f(y){return y===62?(e.enter(o),e.consume(y),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),h(y))}function h(y){return y===62?(e.exit("chunkString"),e.exit(s),f(y)):y===null||y===60||P(y)?n(y):(e.consume(y),y===92?k:h)}function k(y){return y===60||y===62||y===92?(e.consume(y),h):h(y)}function C(y){return!u&&(y===null||y===41||J(y))?(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(r),t(y)):u<l&&y===40?(e.consume(y),u++,C):y===41?(e.consume(y),u--,C):y===null||y===32||y===40||gt(y)?n(y):(e.consume(y),y===92?_:C)}function _(y){return y===40||y===41||y===92?(e.consume(y),C):C(y)}}function Yn(e,t,n,r,i,o){const a=this;let s=0,c;return l;function l(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(o),u}function u(h){return s>999||h===null||h===91||h===93&&!c||h===94&&!s&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):h===93?(e.exit(o),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):P(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),u):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===null||h===91||h===93||P(h)||s++>999?(e.exit("chunkString"),u(h)):(e.consume(h),c||(c=!O(h)),h===92?f:p)}function f(h){return h===91||h===92||h===93?(e.consume(h),s++,p):p(h)}}function Xn(e,t,n,r,i,o){let a;return s;function s(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),l(f))}function l(f){return f===a?(e.exit(o),c(a)):f===null?n(f):P(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),W(e,l,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),u(f))}function u(f){return f===a||f===null||P(f)?(e.exit("chunkString"),l(f)):(e.consume(f),f===92?p:u)}function p(f){return f===a||f===92?(e.consume(f),u):u(f)}}function Re(e,t){let n;return r;function r(i){return P(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):O(i)?W(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Qi={name:"definition",tokenize:Zi},Ji={partial:!0,tokenize:eo};function Zi(e,t,n){const r=this;let i;return o;function o(h){return e.enter("definition"),a(h)}function a(h){return Yn.call(r,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function s(h){return i=Te(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),c):n(h)}function c(h){return J(h)?Re(e,l)(h):l(h)}function l(h){return Kn(e,u,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function u(h){return e.attempt(Ji,p,p)(h)}function p(h){return O(h)?W(e,f,"whitespace")(h):f(h)}function f(h){return h===null||P(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function eo(e,t,n){return r;function r(s){return J(s)?Re(e,i)(s):n(s)}function i(s){return Xn(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function o(s){return O(s)?W(e,a,"whitespace")(s):a(s)}function a(s){return s===null||P(s)?t(s):n(s)}}const to={name:"hardBreakEscape",tokenize:no};function no(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return P(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const ro={name:"headingAtx",resolve:io,tokenize:oo};function io(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},ce(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function oo(e,t,n){let r=0;return i;function i(u){return e.enter("atxHeading"),o(u)}function o(u){return e.enter("atxHeadingSequence"),a(u)}function a(u){return u===35&&r++<6?(e.consume(u),a):u===null||J(u)?(e.exit("atxHeadingSequence"),s(u)):n(u)}function s(u){return u===35?(e.enter("atxHeadingSequence"),c(u)):u===null||P(u)?(e.exit("atxHeading"),t(u)):O(u)?W(e,s,"whitespace")(u):(e.enter("atxHeadingText"),l(u))}function c(u){return u===35?(e.consume(u),c):(e.exit("atxHeadingSequence"),s(u))}function l(u){return u===null||u===35||J(u)?(e.exit("atxHeadingText"),s(u)):(e.consume(u),l)}}const ao=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],sn=["pre","script","style","textarea"],so={concrete:!0,name:"htmlFlow",resolveTo:co,tokenize:ho},lo={partial:!0,tokenize:mo},uo={partial:!0,tokenize:po};function co(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function ho(e,t,n){const r=this;let i,o,a,s,c;return l;function l(d){return u(d)}function u(d){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(d),p}function p(d){return d===33?(e.consume(d),f):d===47?(e.consume(d),o=!0,C):d===63?(e.consume(d),i=3,r.interrupt?t:m):ue(d)?(e.consume(d),a=String.fromCharCode(d),_):n(d)}function f(d){return d===45?(e.consume(d),i=2,h):d===91?(e.consume(d),i=5,s=0,k):ue(d)?(e.consume(d),i=4,r.interrupt?t:m):n(d)}function h(d){return d===45?(e.consume(d),r.interrupt?t:m):n(d)}function k(d){const ae="CDATA[";return d===ae.charCodeAt(s++)?(e.consume(d),s===ae.length?r.interrupt?t:v:k):n(d)}function C(d){return ue(d)?(e.consume(d),a=String.fromCharCode(d),_):n(d)}function _(d){if(d===null||d===47||d===62||J(d)){const ae=d===47,ye=a.toLowerCase();return!ae&&!o&&sn.includes(ye)?(i=1,r.interrupt?t(d):v(d)):ao.includes(a.toLowerCase())?(i=6,ae?(e.consume(d),y):r.interrupt?t(d):v(d)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(d):o?M(d):I(d))}return d===45||ne(d)?(e.consume(d),a+=String.fromCharCode(d),_):n(d)}function y(d){return d===62?(e.consume(d),r.interrupt?t:v):n(d)}function M(d){return O(d)?(e.consume(d),M):R(d)}function I(d){return d===47?(e.consume(d),R):d===58||d===95||ue(d)?(e.consume(d),U):O(d)?(e.consume(d),I):R(d)}function U(d){return d===45||d===46||d===58||d===95||ne(d)?(e.consume(d),U):H(d)}function H(d){return d===61?(e.consume(d),b):O(d)?(e.consume(d),H):I(d)}function b(d){return d===null||d===60||d===61||d===62||d===96?n(d):d===34||d===39?(e.consume(d),c=d,L):O(d)?(e.consume(d),b):V(d)}function L(d){return d===c?(e.consume(d),c=null,B):d===null||P(d)?n(d):(e.consume(d),L)}function V(d){return d===null||d===34||d===39||d===47||d===60||d===61||d===62||d===96||J(d)?H(d):(e.consume(d),V)}function B(d){return d===47||d===62||O(d)?I(d):n(d)}function R(d){return d===62?(e.consume(d),T):n(d)}function T(d){return d===null||P(d)?v(d):O(d)?(e.consume(d),T):n(d)}function v(d){return d===45&&i===2?(e.consume(d),z):d===60&&i===1?(e.consume(d),Y):d===62&&i===4?(e.consume(d),oe):d===63&&i===3?(e.consume(d),m):d===93&&i===5?(e.consume(d),he):P(d)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(lo,pe,q)(d)):d===null||P(d)?(e.exit("htmlFlowData"),q(d)):(e.consume(d),v)}function q(d){return e.check(uo,E,pe)(d)}function E(d){return e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),S}function S(d){return d===null||P(d)?q(d):(e.enter("htmlFlowData"),v(d))}function z(d){return d===45?(e.consume(d),m):v(d)}function Y(d){return d===47?(e.consume(d),a="",ie):v(d)}function ie(d){if(d===62){const ae=a.toLowerCase();return sn.includes(ae)?(e.consume(d),oe):v(d)}return ue(d)&&a.length<8?(e.consume(d),a+=String.fromCharCode(d),ie):v(d)}function he(d){return d===93?(e.consume(d),m):v(d)}function m(d){return d===62?(e.consume(d),oe):d===45&&i===2?(e.consume(d),m):v(d)}function oe(d){return d===null||P(d)?(e.exit("htmlFlowData"),pe(d)):(e.consume(d),oe)}function pe(d){return e.exit("htmlFlow"),t(d)}}function po(e,t,n){const r=this;return i;function i(a){return P(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function mo(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt($e,t,n)}}const fo={name:"htmlText",tokenize:go};function go(e,t,n){const r=this;let i,o,a;return s;function s(m){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(m),c}function c(m){return m===33?(e.consume(m),l):m===47?(e.consume(m),H):m===63?(e.consume(m),I):ue(m)?(e.consume(m),V):n(m)}function l(m){return m===45?(e.consume(m),u):m===91?(e.consume(m),o=0,k):ue(m)?(e.consume(m),M):n(m)}function u(m){return m===45?(e.consume(m),h):n(m)}function p(m){return m===null?n(m):m===45?(e.consume(m),f):P(m)?(a=p,Y(m)):(e.consume(m),p)}function f(m){return m===45?(e.consume(m),h):p(m)}function h(m){return m===62?z(m):m===45?f(m):p(m)}function k(m){const oe="CDATA[";return m===oe.charCodeAt(o++)?(e.consume(m),o===oe.length?C:k):n(m)}function C(m){return m===null?n(m):m===93?(e.consume(m),_):P(m)?(a=C,Y(m)):(e.consume(m),C)}function _(m){return m===93?(e.consume(m),y):C(m)}function y(m){return m===62?z(m):m===93?(e.consume(m),y):C(m)}function M(m){return m===null||m===62?z(m):P(m)?(a=M,Y(m)):(e.consume(m),M)}function I(m){return m===null?n(m):m===63?(e.consume(m),U):P(m)?(a=I,Y(m)):(e.consume(m),I)}function U(m){return m===62?z(m):I(m)}function H(m){return ue(m)?(e.consume(m),b):n(m)}function b(m){return m===45||ne(m)?(e.consume(m),b):L(m)}function L(m){return P(m)?(a=L,Y(m)):O(m)?(e.consume(m),L):z(m)}function V(m){return m===45||ne(m)?(e.consume(m),V):m===47||m===62||J(m)?B(m):n(m)}function B(m){return m===47?(e.consume(m),z):m===58||m===95||ue(m)?(e.consume(m),R):P(m)?(a=B,Y(m)):O(m)?(e.consume(m),B):z(m)}function R(m){return m===45||m===46||m===58||m===95||ne(m)?(e.consume(m),R):T(m)}function T(m){return m===61?(e.consume(m),v):P(m)?(a=T,Y(m)):O(m)?(e.consume(m),T):B(m)}function v(m){return m===null||m===60||m===61||m===62||m===96?n(m):m===34||m===39?(e.consume(m),i=m,q):P(m)?(a=v,Y(m)):O(m)?(e.consume(m),v):(e.consume(m),E)}function q(m){return m===i?(e.consume(m),i=void 0,S):m===null?n(m):P(m)?(a=q,Y(m)):(e.consume(m),q)}function E(m){return m===null||m===34||m===39||m===60||m===61||m===96?n(m):m===47||m===62||J(m)?B(m):(e.consume(m),E)}function S(m){return m===47||m===62||J(m)?B(m):n(m)}function z(m){return m===62?(e.consume(m),e.exit("htmlTextData"),e.exit("htmlText"),t):n(m)}function Y(m){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),ie}function ie(m){return O(m)?W(e,he,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m):he(m)}function he(m){return e.enter("htmlTextData"),a(m)}}const Mt={name:"labelEnd",resolveAll:xo,resolveTo:ko,tokenize:So},bo={tokenize:Co},yo={tokenize:Io},wo={tokenize:_o};function xo(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&ce(e,0,e.length,n),e}function ko(e,t){let n=e.length,r=0,i,o,a,s;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},l={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},u={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return s=[["enter",c,t],["enter",l,t]],s=re(s,e.slice(o+1,o+r+3)),s=re(s,[["enter",u,t]]),s=re(s,Pt(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),s=re(s,[["exit",u,t],e[a-2],e[a-1],["exit",l,t]]),s=re(s,e.slice(a+1)),s=re(s,[["exit",c,t]]),ce(e,o,e.length,s),e}function So(e,t,n){const r=this;let i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return s;function s(f){return o?o._inactive?p(f):(a=r.parser.defined.includes(Te(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(bo,u,a?u:p)(f):f===91?e.attempt(yo,u,a?l:p)(f):a?u(f):p(f)}function l(f){return e.attempt(wo,u,p)(f)}function u(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function Co(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return J(p)?Re(e,o)(p):o(p)}function o(p){return p===41?u(p):Kn(e,a,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return J(p)?Re(e,c)(p):u(p)}function s(p){return n(p)}function c(p){return p===34||p===39||p===40?Xn(e,l,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):u(p)}function l(p){return J(p)?Re(e,u)(p):u(p)}function u(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function Io(e,t,n){const r=this;return i;function i(s){return Yn.call(r,e,o,a,"reference","referenceMarker","referenceString")(s)}function o(s){return r.parser.defined.includes(Te(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function a(s){return n(s)}}function _o(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const vo={name:"labelStartImage",resolveAll:Mt.resolveAll,tokenize:To};function To(e,t,n){const r=this;return i;function i(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),o}function o(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),a):n(s)}function a(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const Eo={name:"labelStartLink",resolveAll:Mt.resolveAll,tokenize:Po};function Po(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const rt={name:"lineEnding",tokenize:Mo};function Mo(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),W(e,t,"linePrefix")}}const Ke={name:"thematicBreak",tokenize:Ao};function Ao(e,t,n){let r=0,i;return o;function o(l){return e.enter("thematicBreak"),a(l)}function a(l){return i=l,s(l)}function s(l){return l===i?(e.enter("thematicBreakSequence"),c(l)):r>=3&&(l===null||P(l))?(e.exit("thematicBreak"),t(l)):n(l)}function c(l){return l===i?(e.consume(l),r++,c):(e.exit("thematicBreakSequence"),O(l)?W(e,s,"whitespace")(l):s(l))}}const Q={continuation:{tokenize:Oo},exit:Fo,name:"list",tokenize:Lo},Do={partial:!0,tokenize:Ro},No={partial:!0,tokenize:Bo};function Lo(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return s;function s(h){const k=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(k==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:bt(h)){if(r.containerState.type||(r.containerState.type=k,e.enter(k,{_container:!0})),k==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Ke,n,l)(h):l(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(h)}return n(h)}function c(h){return bt(h)&&++a<10?(e.consume(h),c):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),l(h)):n(h)}function l(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check($e,r.interrupt?n:u,e.attempt(Do,f,p))}function u(h){return r.containerState.initialBlankLine=!0,o++,f(h)}function p(h){return O(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function Oo(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check($e,i,o);function i(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,W(e,t,"listItemIndent",r.containerState.size+1)(s)}function o(s){return r.containerState.furtherBlankLines||!O(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(No,t,a)(s))}function a(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,W(e,e.attempt(Q,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function Bo(e,t,n){const r=this;return W(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function Fo(e){e.exit(this.containerState.type)}function Ro(e,t,n){const r=this;return W(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!O(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const ln={name:"setextUnderline",resolveTo:zo,tokenize:Uo};function zo(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function Uo(e,t,n){const r=this;let i;return o;function o(l){let u=r.events.length,p;for(;u--;)if(r.events[u][1].type!=="lineEnding"&&r.events[u][1].type!=="linePrefix"&&r.events[u][1].type!=="content"){p=r.events[u][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=l,a(l)):n(l)}function a(l){return e.enter("setextHeadingLineSequence"),s(l)}function s(l){return l===i?(e.consume(l),s):(e.exit("setextHeadingLineSequence"),O(l)?W(e,c,"lineSuffix")(l):c(l))}function c(l){return l===null||P(l)?(e.exit("setextHeadingLine"),t(l)):n(l)}}const jo={tokenize:Ho};function Ho(e){const t=this,n=e.attempt($e,r,e.attempt(this.parser.constructs.flowInitial,i,W(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Wi,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Vo={resolveAll:Qn()},qo=$n("string"),Go=$n("text");function $n(e){return{resolveAll:Qn(e==="text"?Wo:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,a,s);return a;function a(u){return l(u)?o(u):s(u)}function s(u){if(u===null){n.consume(u);return}return n.enter("data"),n.consume(u),c}function c(u){return l(u)?(n.exit("data"),o(u)):(n.consume(u),c)}function l(u){if(u===null)return!0;const p=i[u];let f=-1;if(p)for(;++f<p.length;){const h=p[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Qn(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function Wo(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,a=-1,s=0,c;for(;o--;){const l=i[o];if(typeof l=="string"){for(a=l.length;l.charCodeAt(a-1)===32;)s++,a--;if(a)break;a=-1}else if(l===-2)c=!0,s++;else if(l!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){const l={type:n===e.length||c||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...l.start},r.start.offset===r.end.offset?Object.assign(r,l):(e.splice(n,0,["enter",l,t],["exit",l,t]),n+=2)}n++}return e}const Ko={42:Q,43:Q,45:Q,48:Q,49:Q,50:Q,51:Q,52:Q,53:Q,54:Q,55:Q,56:Q,57:Q,62:Vn},Yo={91:Qi},Xo={[-2]:nt,[-1]:nt,32:nt},$o={35:ro,42:Ke,45:[ln,Ke],60:so,61:ln,95:Ke,96:an,126:an},Qo={38:Gn,92:qn},Jo={[-5]:rt,[-4]:rt,[-3]:rt,33:vo,38:Gn,42:yt,60:[Ti,fo],91:Eo,92:[to,qn],93:Mt,95:yt,96:Ui},Zo={null:[yt,Vo]},ea={null:[42,95]},ta={null:[]},na=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:ea,contentInitial:Yo,disable:ta,document:Ko,flow:$o,flowInitial:Xo,insideSpan:Zo,string:Qo,text:Jo},Symbol.toStringTag,{value:"Module"}));function ra(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let a=[],s=[];const c={attempt:L(H),check:L(b),consume:M,enter:I,exit:U,interrupt:L(b,{interrupt:!0})},l={code:null,containerState:{},defineSkip:C,events:[],now:k,parser:e,previous:null,sliceSerialize:f,sliceStream:h,write:p};let u=t.tokenize.call(l,c);return t.resolveAll&&o.push(t),l;function p(T){return a=re(a,T),_(),a[a.length-1]!==null?[]:(V(t,0),l.events=Pt(o,l.events,l),l.events)}function f(T,v){return oa(h(T),v)}function h(T){return ia(a,T)}function k(){const{_bufferIndex:T,_index:v,line:q,column:E,offset:S}=r;return{_bufferIndex:T,_index:v,line:q,column:E,offset:S}}function C(T){i[T.line]=T.column,R()}function _(){let T;for(;r._index<a.length;){const v=a[r._index];if(typeof v=="string")for(T=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===T&&r._bufferIndex<v.length;)y(v.charCodeAt(r._bufferIndex));else y(v)}}function y(T){u=u(T)}function M(T){P(T)?(r.line++,r.column=1,r.offset+=T===-3?2:1,R()):T!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=T}function I(T,v){const q=v||{};return q.type=T,q.start=k(),l.events.push(["enter",q,l]),s.push(q),q}function U(T){const v=s.pop();return v.end=k(),l.events.push(["exit",v,l]),v}function H(T,v){V(T,v.from)}function b(T,v){v.restore()}function L(T,v){return q;function q(E,S,z){let Y,ie,he,m;return Array.isArray(E)?pe(E):"tokenize"in E?pe([E]):oe(E);function oe(X){return Me;function Me(fe){const ke=fe!==null&&X[fe],Se=fe!==null&&X.null,Ve=[...Array.isArray(ke)?ke:ke?[ke]:[],...Array.isArray(Se)?Se:Se?[Se]:[]];return pe(Ve)(fe)}}function pe(X){return Y=X,ie=0,X.length===0?z:d(X[ie])}function d(X){return Me;function Me(fe){return m=B(),he=X,X.partial||(l.currentConstruct=X),X.name&&l.parser.constructs.disable.null.includes(X.name)?ye():X.tokenize.call(v?Object.assign(Object.create(l),v):l,c,ae,ye)(fe)}}function ae(X){return T(he,m),S}function ye(X){return m.restore(),++ie<Y.length?d(Y[ie]):z}}}function V(T,v){T.resolveAll&&!o.includes(T)&&o.push(T),T.resolve&&ce(l.events,v,l.events.length-v,T.resolve(l.events.slice(v),l)),T.resolveTo&&(l.events=T.resolveTo(l.events,l))}function B(){const T=k(),v=l.previous,q=l.currentConstruct,E=l.events.length,S=Array.from(s);return{from:E,restore:z};function z(){r=T,l.previous=v,l.currentConstruct=q,l.events.length=E,s=S,R()}}function R(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function ia(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const s=a[0];typeof s=="string"?a[0]=s.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function oa(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function aa(e){const r={constructs:pi([na,...(e||{}).extensions||[]]),content:i(xi),defined:[],document:i(Si),flow:i(jo),lazy:{},string:i(qo),text:i(Go)};return r;function i(o){return a;function a(s){return ra(r,o,s)}}}function sa(e){for(;!Wn(e););return e}const un=/[\0\t\n\r]/g;function la(){let e=1,t="",n=!0,r;return i;function i(o,a,s){const c=[];let l,u,p,f,h;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(un.lastIndex=p,l=un.exec(o),f=l&&l.index!==void 0?l.index:o.length,h=o.charCodeAt(f),!l){t=o.slice(p);break}if(h===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(o.slice(p,f)),e+=f-p),h){case 0:{c.push(65533),e++;break}case 9:{for(u=Math.ceil(e/4)*4,c.push(-2);e++<u;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return s&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const ua=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ca(e){return e.replace(ua,ha)}function ha(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Hn(n.slice(o?2:1),o?16:10)}return Et(n)||e}const Jn={}.hasOwnProperty;function pa(e,t,n){return typeof t!="string"&&(n=t,t=void 0),ma(n)(sa(aa(n).document().write(la()(e,t,!0))))}function ma(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(zt),autolinkProtocol:B,autolinkEmail:B,atxHeading:o(Bt),blockQuote:o(Se),characterEscape:B,characterReference:B,codeFenced:o(Ve),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(Ve,a),codeText:o(ur,a),codeTextData:B,data:B,codeFlowValue:B,definition:o(cr),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(hr),hardBreakEscape:o(Ft),hardBreakTrailing:o(Ft),htmlFlow:o(Rt,a),htmlFlowData:B,htmlText:o(Rt,a),htmlTextData:B,image:o(pr),label:a,link:o(zt),listItem:o(mr),listItemValue:f,listOrdered:o(Ut,p),listUnordered:o(Ut),paragraph:o(dr),reference:d,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(Bt),strong:o(fr),thematicBreak:o(br)},exit:{atxHeading:c(),atxHeadingSequence:H,autolink:c(),autolinkEmail:ke,autolinkProtocol:fe,blockQuote:c(),characterEscapeValue:R,characterReferenceMarkerHexadecimal:ye,characterReferenceMarkerNumeric:ye,characterReferenceValue:X,characterReference:Me,codeFenced:c(_),codeFencedFence:C,codeFencedFenceInfo:h,codeFencedFenceMeta:k,codeFlowValue:R,codeIndented:c(y),codeText:c(S),codeTextData:R,data:R,definition:c(),definitionDestinationString:U,definitionLabelString:M,definitionTitleString:I,emphasis:c(),hardBreakEscape:c(v),hardBreakTrailing:c(v),htmlFlow:c(q),htmlFlowData:R,htmlText:c(E),htmlTextData:R,image:c(Y),label:he,labelText:ie,lineEnding:T,link:c(z),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ae,resourceDestinationString:m,resourceTitleString:oe,resource:pe,setextHeading:c(V),setextHeadingLineSequence:L,setextHeadingText:b,strong:c(),thematicBreak:c()}};Zn(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(g){let x={type:"root",children:[]};const A={stack:[x],tokenStack:[],config:t,enter:s,exit:l,buffer:a,resume:u,data:n},N=[];let j=-1;for(;++j<g.length;)if(g[j][1].type==="listOrdered"||g[j][1].type==="listUnordered")if(g[j][0]==="enter")N.push(j);else{const se=N.pop();j=i(g,se,j)}for(j=-1;++j<g.length;){const se=t[g[j][0]];Jn.call(se,g[j][1].type)&&se[g[j][1].type].call(Object.assign({sliceSerialize:g[j][2].sliceSerialize},A),g[j][1])}if(A.tokenStack.length>0){const se=A.tokenStack[A.tokenStack.length-1];(se[1]||cn).call(A,void 0,se[0])}for(x.position={start:ge(g.length>0?g[0][1].start:{line:1,column:1,offset:0}),end:ge(g.length>0?g[g.length-2][1].end:{line:1,column:1,offset:0})},j=-1;++j<t.transforms.length;)x=t.transforms[j](x)||x;return x}function i(g,x,A){let N=x-1,j=-1,se=!1,we,me,Ae,De;for(;++N<=A;){const ee=g[N];switch(ee[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ee[0]==="enter"?j++:j--,De=void 0;break}case"lineEndingBlank":{ee[0]==="enter"&&(we&&!De&&!j&&!Ae&&(Ae=N),De=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:De=void 0}if(!j&&ee[0]==="enter"&&ee[1].type==="listItemPrefix"||j===-1&&ee[0]==="exit"&&(ee[1].type==="listUnordered"||ee[1].type==="listOrdered")){if(we){let Ce=N;for(me=void 0;Ce--;){const de=g[Ce];if(de[1].type==="lineEnding"||de[1].type==="lineEndingBlank"){if(de[0]==="exit")continue;me&&(g[me][1].type="lineEndingBlank",se=!0),de[1].type="lineEnding",me=Ce}else if(!(de[1].type==="linePrefix"||de[1].type==="blockQuotePrefix"||de[1].type==="blockQuotePrefixWhitespace"||de[1].type==="blockQuoteMarker"||de[1].type==="listItemIndent"))break}Ae&&(!me||Ae<me)&&(we._spread=!0),we.end=Object.assign({},me?g[me][1].start:ee[1].end),g.splice(me||N,0,["exit",we,ee[2]]),N++,A++}if(ee[1].type==="listItemPrefix"){const Ce={type:"listItem",_spread:!1,start:Object.assign({},ee[1].start),end:void 0};we=Ce,g.splice(N,0,["enter",Ce,ee[2]]),N++,A++,Ae=void 0,De=!0}}}return g[x][1]._spread=se,A}function o(g,x){return A;function A(N){s.call(this,g(N),N),x&&x.call(this,N)}}function a(){this.stack.push({type:"fragment",children:[]})}function s(g,x,A){this.stack[this.stack.length-1].children.push(g),this.stack.push(g),this.tokenStack.push([x,A||void 0]),g.position={start:ge(x.start),end:void 0}}function c(g){return x;function x(A){g&&g.call(this,A),l.call(this,A)}}function l(g,x){const A=this.stack.pop(),N=this.tokenStack.pop();if(N)N[0].type!==g.type&&(x?x.call(this,g,N[0]):(N[1]||cn).call(this,g,N[0]));else throw new Error("Cannot close `"+g.type+"` ("+Fe({start:g.start,end:g.end})+"): it’s not open");A.position.end=ge(g.end)}function u(){return ci(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(g){if(this.data.expectingFirstListItemValue){const x=this.stack[this.stack.length-2];x.start=Number.parseInt(this.sliceSerialize(g),10),this.data.expectingFirstListItemValue=void 0}}function h(){const g=this.resume(),x=this.stack[this.stack.length-1];x.lang=g}function k(){const g=this.resume(),x=this.stack[this.stack.length-1];x.meta=g}function C(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function _(){const g=this.resume(),x=this.stack[this.stack.length-1];x.value=g.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const g=this.resume(),x=this.stack[this.stack.length-1];x.value=g.replace(/(\r?\n|\r)$/g,"")}function M(g){const x=this.resume(),A=this.stack[this.stack.length-1];A.label=x,A.identifier=Te(this.sliceSerialize(g)).toLowerCase()}function I(){const g=this.resume(),x=this.stack[this.stack.length-1];x.title=g}function U(){const g=this.resume(),x=this.stack[this.stack.length-1];x.url=g}function H(g){const x=this.stack[this.stack.length-1];if(!x.depth){const A=this.sliceSerialize(g).length;x.depth=A}}function b(){this.data.setextHeadingSlurpLineEnding=!0}function L(g){const x=this.stack[this.stack.length-1];x.depth=this.sliceSerialize(g).codePointAt(0)===61?1:2}function V(){this.data.setextHeadingSlurpLineEnding=void 0}function B(g){const A=this.stack[this.stack.length-1].children;let N=A[A.length-1];(!N||N.type!=="text")&&(N=gr(),N.position={start:ge(g.start),end:void 0},A.push(N)),this.stack.push(N)}function R(g){const x=this.stack.pop();x.value+=this.sliceSerialize(g),x.position.end=ge(g.end)}function T(g){const x=this.stack[this.stack.length-1];if(this.data.atHardBreak){const A=x.children[x.children.length-1];A.position.end=ge(g.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(x.type)&&(B.call(this,g),R.call(this,g))}function v(){this.data.atHardBreak=!0}function q(){const g=this.resume(),x=this.stack[this.stack.length-1];x.value=g}function E(){const g=this.resume(),x=this.stack[this.stack.length-1];x.value=g}function S(){const g=this.resume(),x=this.stack[this.stack.length-1];x.value=g}function z(){const g=this.stack[this.stack.length-1];if(this.data.inReference){const x=this.data.referenceType||"shortcut";g.type+="Reference",g.referenceType=x,delete g.url,delete g.title}else delete g.identifier,delete g.label;this.data.referenceType=void 0}function Y(){const g=this.stack[this.stack.length-1];if(this.data.inReference){const x=this.data.referenceType||"shortcut";g.type+="Reference",g.referenceType=x,delete g.url,delete g.title}else delete g.identifier,delete g.label;this.data.referenceType=void 0}function ie(g){const x=this.sliceSerialize(g),A=this.stack[this.stack.length-2];A.label=ca(x),A.identifier=Te(x).toLowerCase()}function he(){const g=this.stack[this.stack.length-1],x=this.resume(),A=this.stack[this.stack.length-1];if(this.data.inReference=!0,A.type==="link"){const N=g.children;A.children=N}else A.alt=x}function m(){const g=this.resume(),x=this.stack[this.stack.length-1];x.url=g}function oe(){const g=this.resume(),x=this.stack[this.stack.length-1];x.title=g}function pe(){this.data.inReference=void 0}function d(){this.data.referenceType="collapsed"}function ae(g){const x=this.resume(),A=this.stack[this.stack.length-1];A.label=x,A.identifier=Te(this.sliceSerialize(g)).toLowerCase(),this.data.referenceType="full"}function ye(g){this.data.characterReferenceType=g.type}function X(g){const x=this.sliceSerialize(g),A=this.data.characterReferenceType;let N;A?(N=Hn(x,A==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):N=Et(x);const j=this.stack[this.stack.length-1];j.value+=N}function Me(g){const x=this.stack.pop();x.position.end=ge(g.end)}function fe(g){R.call(this,g);const x=this.stack[this.stack.length-1];x.url=this.sliceSerialize(g)}function ke(g){R.call(this,g);const x=this.stack[this.stack.length-1];x.url="mailto:"+this.sliceSerialize(g)}function Se(){return{type:"blockquote",children:[]}}function Ve(){return{type:"code",lang:null,meta:null,value:""}}function ur(){return{type:"inlineCode",value:""}}function cr(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function hr(){return{type:"emphasis",children:[]}}function Bt(){return{type:"heading",depth:0,children:[]}}function Ft(){return{type:"break"}}function Rt(){return{type:"html",value:""}}function pr(){return{type:"image",title:null,url:"",alt:null}}function zt(){return{type:"link",title:null,url:"",children:[]}}function Ut(g){return{type:"list",ordered:g.type==="listOrdered",start:null,spread:g._spread,children:[]}}function mr(g){return{type:"listItem",spread:g._spread,checked:null,children:[]}}function dr(){return{type:"paragraph",children:[]}}function fr(){return{type:"strong",children:[]}}function gr(){return{type:"text",value:""}}function br(){return{type:"thematicBreak"}}}function ge(e){return{line:e.line,column:e.column,offset:e.offset}}function Zn(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Zn(e,r):da(e,r)}}function da(e,t){let n;for(n in t)if(Jn.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function cn(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Fe({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Fe({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Fe({start:t.start,end:t.end})+") is still open")}function fa(e){const t=this;t.parser=n;function n(r){return pa(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function ga(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function ba(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function ya(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function wa(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function xa(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ka(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Pe(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,s+=1,e.footnoteCounts.set(r,s);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const l={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function Sa(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ca(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function er(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function Ia(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return er(e,t);const i={src:Pe(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function _a(e,t){const n={src:Pe(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function va(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Ta(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return er(e,t);const i={href:Pe(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Ea(e,t){const n={href:Pe(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Pa(e,t,n){const r=e.all(t),i=n?Ma(n):tr(t),o={},a=[];if(typeof t.checked=="boolean"){const u=r[0];let p;u&&u.type==="element"&&u.tagName==="p"?p=u:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const u=r[s];(i||s!==0||u.type!=="element"||u.tagName!=="p")&&a.push({type:"text",value:`
`}),u.type==="element"&&u.tagName==="p"&&!i?a.push(...u.children):a.push(u)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const l={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,l),e.applyData(t,l)}function Ma(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=tr(n[r])}return t}function tr(e){const t=e.spread;return t??e.children.length>1}function Aa(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function Da(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Na(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function La(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Oa(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=It(t.children[1]),c=On(t.children[t.children.length-1]);s&&c&&(a.position={start:s,end:c}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function Ba(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,s=a?a.length:t.children.length;let c=-1;const l=[];for(;++c<s;){const p=t.children[c],f={},h=a?a[c]:void 0;h&&(f.align=h);let k={type:"element",tagName:o,properties:f,children:[]};p&&(k.children=e.all(p),e.patch(p,k),k=e.applyData(p,k)),l.push(k)}const u={type:"element",tagName:"tr",properties:{},children:e.wrap(l,!0)};return e.patch(t,u),e.applyData(t,u)}function Fa(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const hn=9,pn=32;function Ra(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(mn(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(mn(t.slice(i),i>0,!1)),o.join("")}function mn(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===hn||o===pn;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===hn||o===pn;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function za(e,t){const n={type:"text",value:Ra(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Ua(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const ja={blockquote:ga,break:ba,code:ya,delete:wa,emphasis:xa,footnoteReference:ka,heading:Sa,html:Ca,imageReference:Ia,image:_a,inlineCode:va,linkReference:Ta,link:Ea,listItem:Pa,list:Aa,paragraph:Da,root:Na,strong:La,table:Oa,tableCell:Fa,tableRow:Ba,text:za,thematicBreak:Ua,toml:qe,yaml:qe,definition:qe,footnoteDefinition:qe};function qe(){}const nr=-1,Qe=0,ze=1,Ye=2,At=3,Dt=4,Nt=5,Lt=6,rr=7,ir=8,dn=typeof self=="object"?self:globalThis,Ha=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case Qe:case nr:return n(a,i);case ze:{const s=n([],i);for(const c of a)s.push(r(c));return s}case Ye:{const s=n({},i);for(const[c,l]of a)s[r(c)]=r(l);return s}case At:return n(new Date(a),i);case Dt:{const{source:s,flags:c}=a;return n(new RegExp(s,c),i)}case Nt:{const s=n(new Map,i);for(const[c,l]of a)s.set(r(c),r(l));return s}case Lt:{const s=n(new Set,i);for(const c of a)s.add(r(c));return s}case rr:{const{name:s,message:c}=a;return n(new dn[s](c),i)}case ir:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:s}=new Uint8Array(a);return n(new DataView(s),a)}}return n(new dn[o](a),i)};return r},fn=e=>Ha(new Map,e)(0),_e="",{toString:Va}={},{keys:qa}=Object,Be=e=>{const t=typeof e;if(t!=="object"||!e)return[Qe,t];const n=Va.call(e).slice(8,-1);switch(n){case"Array":return[ze,_e];case"Object":return[Ye,_e];case"Date":return[At,_e];case"RegExp":return[Dt,_e];case"Map":return[Nt,_e];case"Set":return[Lt,_e];case"DataView":return[ze,n]}return n.includes("Array")?[ze,n]:n.includes("Error")?[rr,n]:[Ye,n]},Ge=([e,t])=>e===Qe&&(t==="function"||t==="symbol"),Ga=(e,t,n,r)=>{const i=(a,s)=>{const c=r.push(a)-1;return n.set(s,c),c},o=a=>{if(n.has(a))return n.get(a);let[s,c]=Be(a);switch(s){case Qe:{let u=a;switch(c){case"bigint":s=ir,u=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);u=null;break;case"undefined":return i([nr],a)}return i([s,u],a)}case ze:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const u=[],p=i([s,u],a);for(const f of a)u.push(o(f));return p}case Ye:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const u=[],p=i([s,u],a);for(const f of qa(a))(e||!Ge(Be(a[f])))&&u.push([o(f),o(a[f])]);return p}case At:return i([s,a.toISOString()],a);case Dt:{const{source:u,flags:p}=a;return i([s,{source:u,flags:p}],a)}case Nt:{const u=[],p=i([s,u],a);for(const[f,h]of a)(e||!(Ge(Be(f))||Ge(Be(h))))&&u.push([o(f),o(h)]);return p}case Lt:{const u=[],p=i([s,u],a);for(const f of a)(e||!Ge(Be(f)))&&u.push(o(f));return p}}const{message:l}=a;return i([s,{name:c,message:l}],a)};return o},gn=(e,{json:t,lossy:n}={})=>{const r=[];return Ga(!(t||n),!!t,new Map,r)(e),r},Xe=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?fn(gn(e,t)):structuredClone(e):(e,t)=>fn(gn(e,t));function Wa(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Ka(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function Ya(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Wa,r=e.options.footnoteBackLabel||Ka,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let c=-1;for(;++c<e.footnoteOrder.length;){const l=e.footnoteById.get(e.footnoteOrder[c]);if(!l)continue;const u=e.all(l),p=String(l.identifier).toUpperCase(),f=Pe(p.toLowerCase());let h=0;const k=[],C=e.footnoteCounts.get(p);for(;C!==void 0&&++h<=C;){k.length>0&&k.push({type:"text",value:" "});let M=typeof n=="string"?n:n(c,h);typeof M=="string"&&(M={type:"text",value:M}),k.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,h),className:["data-footnote-backref"]},children:Array.isArray(M)?M:[M]})}const _=u[u.length-1];if(_&&_.type==="element"&&_.tagName==="p"){const M=_.children[_.children.length-1];M&&M.type==="text"?M.value+=" ":_.children.push({type:"text",value:" "}),_.children.push(...k)}else u.push(...k);const y={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(u,!0)};e.patch(l,y),s.push(y)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Xe(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const or=(function(e){if(e==null)return Ja;if(typeof e=="function")return Je(e);if(typeof e=="object")return Array.isArray(e)?Xa(e):$a(e);if(typeof e=="string")return Qa(e);throw new Error("Expected function, string, or object as test")});function Xa(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=or(e[n]);return Je(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function $a(e){const t=e;return Je(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function Qa(e){return Je(t);function t(n){return n&&n.type===e}}function Je(e){return t;function t(n,r,i){return!!(Za(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function Ja(){return!0}function Za(e){return e!==null&&typeof e=="object"&&"type"in e}const ar=[],es=!0,bn=!1,ts="skip";function ns(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=or(i),a=r?-1:1;s(e,void 0,[])();function s(c,l,u){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const h=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=ar,k,C,_;if((!t||o(c,l,u[u.length-1]||void 0))&&(h=rs(n(c,u)),h[0]===bn))return h;if("children"in c&&c.children){const y=c;if(y.children&&h[0]!==ts)for(C=(r?y.children.length:-1)+a,_=u.concat(y);C>-1&&C<y.children.length;){const M=y.children[C];if(k=s(M,C,_)(),k[0]===bn)return k;C=typeof k[1]=="number"?k[1]:C+a}}return h}}}function rs(e){return Array.isArray(e)?e:typeof e=="number"?[es,e]:e==null?ar:[e]}function sr(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),ns(e,o,s,i);function s(c,l){const u=l[l.length-1],p=u?u.children.indexOf(c):void 0;return a(c,p,u)}}const wt={}.hasOwnProperty,is={};function os(e,t){const n=t||is,r=new Map,i=new Map,o=new Map,a={...ja,...n.handlers},s={all:l,applyData:ss,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:c,options:n,patch:as,wrap:us};return sr(e,function(u){if(u.type==="definition"||u.type==="footnoteDefinition"){const p=u.type==="definition"?r:i,f=String(u.identifier).toUpperCase();p.has(f)||p.set(f,u)}}),s;function c(u,p){const f=u.type,h=s.handlers[f];if(wt.call(s.handlers,f)&&h)return h(s,u,p);if(s.options.passThrough&&s.options.passThrough.includes(f)){if("children"in u){const{children:C,..._}=u,y=Xe(_);return y.children=s.all(u),y}return Xe(u)}return(s.options.unknownHandler||ls)(s,u,p)}function l(u){const p=[];if("children"in u){const f=u.children;let h=-1;for(;++h<f.length;){const k=s.one(f[h],u);if(k){if(h&&f[h-1].type==="break"&&(!Array.isArray(k)&&k.type==="text"&&(k.value=yn(k.value)),!Array.isArray(k)&&k.type==="element")){const C=k.children[0];C&&C.type==="text"&&(C.value=yn(C.value))}Array.isArray(k)?p.push(...k):p.push(k)}}}return p}}function as(e,t){e.position&&(t.position=Hr(e))}function ss(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,Xe(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function ls(e,t){const n=t.data||{},r="value"in t&&!(wt.call(n,"hProperties")||wt.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function us(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function yn(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function wn(e,t){const n=os(e,t),r=n.one(e,void 0),i=Ya(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function cs(e,t){return e&&"run"in e?async function(n,r){const i=wn(n,{file:r,...t});await e.run(i,r)}:function(n,r){return wn(n,{file:r,...e||t})}}function xn(e){if(e)throw e}var it,kn;function hs(){if(kn)return it;kn=1;var e=Object.prototype.hasOwnProperty,t=Object.prototype.toString,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=function(l){return typeof Array.isArray=="function"?Array.isArray(l):t.call(l)==="[object Array]"},o=function(l){if(!l||t.call(l)!=="[object Object]")return!1;var u=e.call(l,"constructor"),p=l.constructor&&l.constructor.prototype&&e.call(l.constructor.prototype,"isPrototypeOf");if(l.constructor&&!u&&!p)return!1;var f;for(f in l);return typeof f>"u"||e.call(l,f)},a=function(l,u){n&&u.name==="__proto__"?n(l,u.name,{enumerable:!0,configurable:!0,value:u.newValue,writable:!0}):l[u.name]=u.newValue},s=function(l,u){if(u==="__proto__")if(e.call(l,u)){if(r)return r(l,u).value}else return;return l[u]};return it=function c(){var l,u,p,f,h,k,C=arguments[0],_=1,y=arguments.length,M=!1;for(typeof C=="boolean"&&(M=C,C=arguments[1]||{},_=2),(C==null||typeof C!="object"&&typeof C!="function")&&(C={});_<y;++_)if(l=arguments[_],l!=null)for(u in l)p=s(C,u),f=s(l,u),C!==f&&(M&&f&&(o(f)||(h=i(f)))?(h?(h=!1,k=p&&i(p)?p:[]):k=p&&o(p)?p:{},a(C,{name:u,newValue:c(M,k,f)})):typeof f<"u"&&a(C,{name:u,newValue:f}));return C},it}var ps=hs();const ot=Tn(ps);function xt(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ms(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);s(null,...i);function s(c,...l){const u=e[++o];let p=-1;if(c){a(c);return}for(;++p<i.length;)(l[p]===null||l[p]===void 0)&&(l[p]=i[p]);i=l,u?ds(u,s)(...l):a(null,...l)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function ds(e,t){let n;return r;function r(...a){const s=e.length>a.length;let c;s&&a.push(i);try{c=e.apply(this,a)}catch(l){const u=l;if(s&&n)throw u;return i(u)}s||(c&&c.then&&typeof c.then=="function"?c.then(o,i):c instanceof Error?i(c):o(c))}function i(a,...s){n||(n=!0,t(a,...s))}function o(a){i(null,a)}}const le={basename:fs,dirname:gs,extname:bs,join:ys,sep:"/"};function fs(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');He(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=!0,a=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function gs(e){if(He(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function bs(e){He(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){const s=e.codePointAt(t);if(s===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),s===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function ys(...e){let t=-1,n;for(;++t<e.length;)He(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":ws(n)}function ws(e){He(e);const t=e.codePointAt(0)===47;let n=xs(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function xs(e,t){let n="",r=0,i=-1,o=0,a=-1,s,c;for(;++a<=e.length;){if(a<e.length)s=e.codePointAt(a);else{if(s===47)break;s=47}if(s===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0}else s===46&&o>-1?o++:o=-1}return n}function He(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const ks={cwd:Ss};function Ss(){return"/"}function kt(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Cs(e){if(typeof e=="string")e=new URL(e);else if(!kt(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Is(e)}function Is(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const at=["history","path","basename","stem","extname","dirname"];class lr{constructor(t){let n;t?kt(t)?n={path:t}:typeof t=="string"||_s(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":ks.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<at.length;){const o=at[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)at.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?le.basename(this.path):void 0}set basename(t){lt(t,"basename"),st(t,"basename"),this.path=le.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?le.dirname(this.path):void 0}set dirname(t){Sn(this.basename,"dirname"),this.path=le.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?le.extname(this.path):void 0}set extname(t){if(st(t,"extname"),Sn(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=le.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){kt(t)&&(t=Cs(t)),lt(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?le.basename(this.path,this.extname):void 0}set stem(t){lt(t,"stem"),st(t,"stem"),this.path=le.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new $(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function st(e,t){if(e&&e.includes(le.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+le.sep+"`")}function lt(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Sn(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function _s(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const vs=(function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o}),Ts={}.hasOwnProperty;class Ot extends vs{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ms()}copy(){const t=new Ot;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(ot(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(ht("data",this.frozen),this.namespace[t]=n,this):Ts.call(this.namespace,t)&&this.namespace[t]||void 0:t?(ht("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=We(t),r=this.parser||this.Parser;return ut("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),ut("process",this.parser||this.Parser),ct("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){const s=We(t),c=r.parse(s);r.run(c,s,function(u,p,f){if(u||!p||!f)return l(u);const h=p,k=r.stringify(h,f);Ms(k)?f.value=k:f.result=k,l(u,f)});function l(u,p){u||!p?a(u):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),ut("processSync",this.parser||this.Parser),ct("processSync",this.compiler||this.Compiler),this.process(t,i),In("processSync","process",n),r;function i(o,a){n=!0,xn(o),r=a}}run(t,n,r){Cn(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,s){const c=We(n);i.run(t,c,l);function l(u,p,f){const h=p||t;u?s(u):a?a(h):r(void 0,h,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),In("runSync","run",r),i;function o(a,s){xn(a),i=s,r=!0}}stringify(t,n){this.freeze();const r=We(n),i=this.compiler||this.Compiler;return ct("stringify",i),Cn(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(ht("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(l){if(typeof l=="function")c(l,[]);else if(typeof l=="object")if(Array.isArray(l)){const[u,...p]=l;c(u,p)}else a(l);else throw new TypeError("Expected usable value, not `"+l+"`")}function a(l){if(!("plugins"in l)&&!("settings"in l))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(l.plugins),l.settings&&(i.settings=ot(!0,i.settings,l.settings))}function s(l){let u=-1;if(l!=null)if(Array.isArray(l))for(;++u<l.length;){const p=l[u];o(p)}else throw new TypeError("Expected a list of plugins, not `"+l+"`")}function c(l,u){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===l){f=p;break}if(f===-1)r.push([l,...u]);else if(u.length>0){let[h,...k]=u;const C=r[f][1];xt(C)&&xt(h)&&(h=ot(!0,C,h)),r[f]=[l,h,...k]}}}}const Es=new Ot().freeze();function ut(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function ct(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function ht(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Cn(e){if(!xt(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function In(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function We(e){return Ps(e)?e:new lr(e)}function Ps(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Ms(e){return typeof e=="string"||As(e)}function As(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Ds="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",_n=[],vn={allowDangerousHtml:!0},Ns=/^(https?|ircs?|mailto|xmpp)$/i,Ls=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Os(e){const t=Bs(e),n=Fs(e);return Rs(t.runSync(t.parse(n),n),e)}function Bs(e){const t=e.rehypePlugins||_n,n=e.remarkPlugins||_n,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...vn}:vn;return Es().use(fa).use(n).use(cs,r).use(t)}function Fs(e){const t=e.children||"",n=new lr;return typeof t=="string"&&(n.value=t),n}function Rs(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||zs;for(const u of Ls)Object.hasOwn(t,u.from)&&(""+u.from+(u.to?"use `"+u.to+"` instead":"remove it")+Ds+u.id,void 0);return sr(e,l),Kr(e,{Fragment:F.Fragment,components:i,ignoreInvalidStyle:!0,jsx:F.jsx,jsxs:F.jsxs,passKeys:!0,passNode:!0});function l(u,p,f){if(u.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:u.value},p;if(u.type==="element"){let h;for(h in tt)if(Object.hasOwn(tt,h)&&Object.hasOwn(u.properties,h)){const k=u.properties[h],C=tt[h];(C===null||C.includes(u.tagName))&&(u.properties[h]=c(String(k||""),h,u))}}if(u.type==="element"){let h=n?!n.includes(u.tagName):o?o.includes(u.tagName):!1;if(!h&&r&&typeof p=="number"&&(h=!r(u,p,f)),h&&f&&typeof p=="number")return s&&u.children?f.children.splice(p,1,...u.children):f.children.splice(p,1),p}}}function zs(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Ns.test(e.slice(0,t))?e:""}const Us=`![Flight Controller Render](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/blender/render_cropped.webp)

# How to make a flight controller (from scratch)

Made by @NotARoomba

This is an advanced project. I recommend learning the basics of KiCad by making a small dev board or breadboard first. That said, anyone can follow along, as I'll go **_in-depth_** on how to build a flight controller.

I'm [@NotARoomba](https://github.com/notaroomba) and I have a (sort of) obsession with making flight controllers so heres a guide so that you too have the knowledge of making something [cool](https://github.com/notaroomba/athena). The files for this guide can be found [here](https://github.com/notaroomba/simpleflightcontroller)

First, define what type of flight controller you want: for a rocket or a drone? Keep that in mind when starting your own design. In this guide, we'll build a flight controller specifically for rockets.

To start, create a new repository on GitHub and add two folders: \`hardware\` and \`software\`. These folders will hold most of the project files. Then, create a new KiCad project inside the \`hardware\` folder.

![Folder Structure](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/folder-structure.png)
(Folder structure)

![KiCad Project Files](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad-project-files.png)
(KiCad project files)

## Feature Definition

Before starting any engineering project, define the problem you're solving and the constraints you have. Imagine you want to build a rocket. All flight controllers include a \`microcontroller\`, which is a small computer that can be programmed to do various tasks. To control the rocket's flight, you'll use servos to move fins or a TVC system (\`Thrust Vector Control\`- tilting the engine nozzle to steer the rocket).

If you only build a board to drive servos, the rocket won't know which way it's pointing or how to correct its trajectory. You also need position and motion data (rotation and acceleration), plus altitude data. Finally, you'll want to store data persistently (even when powered off) for debugging and post-flight analysis.

Now that we have the rocket's functionality defined, we also need a way to power it. We can use a battery that can power both the rocket's computer and its servos.

Putting this together, we want these features in our rocket's flight controller:

- Can control servos for fins or TVC
- Can obtain position and altitude data
- Can store data even when powered off
- Can be powered by a battery

## Next steps

Now that we have our requirements, let's see how to meet them. Some requirements depend on others. For example, we want battery power - but how large should the battery be? That depends on the voltages and current the servos and microcontroller need, so let's define those first.

Depending on the size of your rocket, current needs will vary because larger servos draw more current. Most hobby servos run on 5–6V and draw ~1A. A 2-cell LiPo (Lithium Polymer) battery (7.4V nominal) is common in RC applications (each cell is ~3.7V) and can be regulated down to 5V for servos.

Most microcontrollers and sensors run on 3.3V, so with a 2-cell (7.4V) LiPo we have more than enough input voltage—as long as we regulate it down to a clean 3.3V line.

Now, after checking off one of the features, we need to tackle the three others.

- Can control servos for fins or TVC
- Can obtain position/altitude data
- Can store data even when powered off
- ~~Can be powered by a battery~~

After choosing servos, we need to know how to control them. Most hobby servos use \`PWM (Pulse Width Modulation)\`—a method of control where the microcontroller sends rapid on/off pulses, and the pulse width (duration) determines the servo's position.

![Servo PWM Signal](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/servo-pwm-50hz.png)

The \`duty cycle\` is the percentage of the period that the signal is high (on).

![PWM Duty Cycle](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pwm-duty-cycle.png)

## What about the sensors and microcontroller?

- ~~Needs to be able to control servos for fins or TVC~~
- Needs a way to get position/altitude data
- Needs to store data even when the rocket is off
- ~~Needs to be able to be powered by a battery~~

For position and motion data, we use an \`IMU\`—an Inertial Measurement Unit. The IMU measures acceleration and rotation (and some devices also estimate altitude). We'll use the \`ICM-45686\`. While there are many IMUs with different features, this one is robust and well-supported.

For altitude, we'll use a dedicated sensor called a barometer. It measures air pressure and uses that to estimate altitude. We'll use the \`BMP580\`—a versatile and common choice for flight controllers.

Finally, to store data, we'll use a microSD card. While you can use onboard flash, microSD is more versatile when you want to access flight logs directly from a computer.

Now that we've defined the sensors and peripherals, we need to select a microcontroller. In this tutorial, we'll use an STM32, but you can adapt it to another MCU like the ESP32 if you want Bluetooth/Wi-Fi support. I prefer STM32 because it's relatively easy to program and widely used in flight controllers. After reviewing STM32 options, we'll use the STM32F722RET6 for its high clock speed and lots of peripherals. Feel free to choose another package or part for larger designs.

- ~~Needs to be able to control servos for fins or TVC~~
- ~~Needs a way to get position/altitude data~~
- ~~Needs to store data even when the rocket is off~~
- ~~Needs to be able to be powered by a battery~~

## Power Management

We have two power sources: USB-C from your computer (5V) and a battery (about 7–8.4V for a 2-cell LiPo). You cannot just wire them together. They need circuitry to choose which one feeds the board and to set the right voltages. The microcontroller typically runs at 3.3V, so we must lower the voltage (from the battery or USB-C) before it reaches the MCU.

To change the voltages, we need to use a regulator. There are two common kinds of regulators you'll hear about:

- \`LDO\`—Low Dropout regulator. It only turns higher voltage into a slightly lower one. Easy and quiet, but it wastes the excess as heat.
- \`Switching regulator\`—A more efficient regulator. It can:
  - \`buck\` (turn higher voltage down),
  - \`boost\` (push lower voltage up), or
  - \`buck-boost\` (keep the output steady even if the input goes above or below it).

What we'll do on this board:

- Make a 3.3V line (for the MCU and sensors) using a buck regulator.
- Make a 5V line (for servos or accessories) using a buck-boost regulator so it stays at 5V even as the battery voltage fluctuates.
- Get a battery charging IC (Integrated Circuit—a chip) that can charge a 2-cell battery from 5V.

Now that we've specified what functionality we need, we need to select the chips that provide it. I personally love to use ICs from Texas Instruments as they have good documentation and a huge selection of power management chips for everything related to USB.

Go to their website (https://www.ti.com/), select "Products", then "Battery Management ICs", and finally "Battery Charging ICs". Here you can find all sorts of battery charging chips to fit your requirements for future projects.

![TI Battery Charger Page](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/ti-battery-charger-page.png)

After looking around a bit, I found the \`BQ25883\`. It's a 2-cell Li-Ion/LiPo charger (which meets our requirement). You could add a more complicated battery charger if you want more cells/power, but they take up more space and are more complex to route.

For the regulators, go back to the TI main page, then navigate to "Power Management," then "DC/DC Power Modules." Here you can find all the regulators you would ever need, complete with excellent datasheets.

![TI DC/DC Power Modules](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/ti-dcdc-power-modules.png)

Here is where we can choose the right regulators for our needs. For this tutorial, we are going to use the \`TPS63070\`, which supports 2–16V input and can output a steady 5V with high current for the servos.

Now all that's missing is to find another regulator for 3.3V. For this, we are going to use the \`LMR51430\` as it supplies a lot of amperage for the various sensors that we will be using.

Now that we have the chips that we are going to use, we also need to verify that they are available on some platform like [LCSC](https://lcsc.com) or wherever else you are going to manufacture your PCB. We also might have to import certain components from LCSC into KiCad.

## Final component list

- USB-C
- MicroSD
- TPS63070
- LMR51430
- BQ25883
- STM32F722RETx
- ICM-45686
- BMP580
- Optional LED

# Starting the Schematic

Now that we have the components that we are going to use, let's start importing them into our project.

Although KiCad has a large selection of components, it is still a bit outdated and there are tons of chips that we would have to import in order to use them. Thankfully, there is a library called [\`easyeda2kicad.py\`](https://github.com/uPesy/easyeda2kicad.py) that can import these components from LCSC for us.

I have made a simple helper script to import all of the LCSC IDs from a text file, so all you have to do is append the part numbers and run the script again.

## Adding Custom Parts

Start by creating a folder called \`lib\` in the \`/hardware\` directory.

Then in the \`/hardware\` directory, create a new file called \`lcsc.txt\` and leave it empty for now.

Then create a file called \`lcsc.py\` (or whatever name you want) and paste this code in there:

\`\`\`import argparse
import os
import shutil
import subprocess
import sys

def run_easyeda2kicad_from_file(input_file, output_dir="./lib/lcsc", python_exec="python"):
    input_file = os.path.expanduser(input_file)
    output_dir = os.path.expanduser(output_dir)
    python_exec = python_exec or "python"

    if not os.path.isfile(input_file):
        print(f"Error: File not found: {input_file}")
        return 2

    # If a simple name was provided, check PATH; if an absolute path, check that file exists.
    found = shutil.which(python_exec) if os.path.basename(python_exec) == python_exec else os.path.exists(python_exec)
    if not found:
        print(f"Warning: Python executable '{python_exec}' not found in PATH or as given path. Trying anyway.")

    os.makedirs(output_dir, exist_ok=True)

    with open(input_file, "r", encoding="utf-8") as f:
        # ignore blank lines and comments
        lines = [line.strip() for line in f if line.strip() and not line.lstrip().startswith("#")]

    if not lines:
        print("No LCSC IDs found in input file.")
        return 0

    for idx, lcsc_id in enumerate(lines, start=1):
        cmd = [
            python_exec,
            "-m", "easyeda2kicad",
            "--full",
            f"--lcsc_id={lcsc_id}",
            f"--output={output_dir}",
        ]
        print(f"[{idx}/{len(lines)}] Running: {' '.join(cmd)}")
        try:
            subprocess.run(cmd, check=True)
        except subprocess.CalledProcessError as e:
            print(f"❌ Error processing {lcsc_id}: {e}")
        except FileNotFoundError as e:
            print(f"❌ Executable not found: {e}")
            return 3

    print("✅ All commands completed.")
    return 0

def main(argv=None):
    parser = argparse.ArgumentParser(description="Run easyeda2kicad for a list of LCSC IDs.")
    parser.add_argument("input_file", nargs="?", default="./hardware/lcsc.txt", help="Path to file with one LCSC ID per line")
    parser.add_argument("output_dir", nargs="?", default="./lib/lcsc", help="Output directory")
    parser.add_argument("--python", dest="python_exec", default="python",
                        help="Python executable to use (default: 'python')")
    args = parser.parse_args(argv)

    return_code = run_easyeda2kicad_from_file(args.input_file, args.output_dir, args.python_exec)
    sys.exit(return_code if isinstance(return_code, int) else 0)

if __name__ == "__main__":
    main()
\`\`\`

---

This code basically calls the \`easyeda2kicad.py\` library for every line that is present in \`lcsc.txt\` and adds it to a KiCad library in \`/hardware/lib/lcsc\`. (Make sure to install it first using \`pip install easyeda2kicad.py\`)

Now after creating both of those files, in your favorite IDE, edit \`lcsc.txt\` with the part numbers of the chips that you are going to use.

For example, let's say I want to add a USB-C port from LCSC. Go to [\`www.lcsc.com\`](www.lcsc.com) and search for USB-C.

![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/lcsc.png)

After searching, I found a good part with large stock (important!), so I then copy the part number (always starts with C followed by numbers, and it's under the name) into \`lcsc.txt\`.

![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/lcsc_usbc.png)

It should look like this:

![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/lcsc_txt.png)

Then run the Python script to convert that part number into a KiCad library. **IMPORTANT: YOU NEED TO RUN THE SCRIPT EVERY TIME YOU UPDATE \`lcsc.txt\`.** If you get an error that you can't find \`lcsc.txt\`, make sure to run the file from the root of your project or add arguments to specify the path of the library/lcsc txt file.

If you have done everything correctly, you should have something that looks like this:

![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/lcsc_script.png)

If in the future you get an error that the script couldn't find/parse a 3D model, those errors are safe to ignore as you can add the 3D model later. However, if the script can't find/parse a footprint for a specific part, then you should probably find another one on LCSC.

After running the script for the first time, add the library to your KiCad project and also the footprint library (the folder that ends with .pretty). It should look like this when you are done.

![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad_symbol.png)
![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad_footprint.png)

Then after that's done, go into your schematic and search for "lcsc". You should find the library with the USB-C connector (or whatever other part you imported).

![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad_usbc.png)

Keep in mind that there are some parts that KiCad already has, such as \`STM32F722RETx\`, but there are others like the IMU that you will have to import.

![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad_pre.png)

After finding the components on LCSC, my \`lcsc.txt\` looks like this:

![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/lcsc_done.png)

Now run the script again. Once it's done, go back to KiCad and add in all of the components (you may have to reopen the choose parts screen for the LCSC library to update).

![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad_start.png)

## USB-C and Power

Now let's start wiring up the power components and USB-C. It's always good practice to start wiring the components that would be used first. In this case, it would be USB-C as it is going to receive voltage, then the battery connector as that voltage from USB-C is going to directly charge the battery. If there is no USB-C, then the battery will provide voltage, followed by the 2 regulators. Again, you can wire each component up in whatever order. I just do it like this to be a bit more organized.

![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/usbc.png)

This is the USB-C connector. As you can see, it has a lot of pins, but don't worry if you don't know what all of those mean. Here's a quick explanation:

- **Shell**: This is the outer case of the USB-C port. It's usually connected to ground.
- **GND**: Ground.
- **VBUS**: This is the pin that supplies voltage from the device that connects to it. Usually it provides 5V at 3A, depending on the cable.
- **SBU1/2**: These are low-speed lines that can be used as alternate pins for different accessories, such as AUX+ and AUX- when connected to a DisplayPort. We don't need to use them.
- **CC1/2**: These are Configuration Channel pins. Basically, they detect if the connector is flipped and can also be used to negotiate more power out of VBUS (USB-PD). We are going to connect them to 5.1K resistors to ground as this tells the other device that we want 5V.
- **DN/DP**: These are the USB lines that we will be connecting to the STM32. They are used to transfer data between devices.

Now with that information in mind, when you finish wiring up the USB-C connector, it should look like this:

![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/usbc_done.png)

I used net labels to organize it better so that we don't have spaghetti cables all over the schematic.

### Battery Charger (BQ25883)

Now let's wire up the battery charger. This is the next step in our power route. There are many chips in the world, and knowing the pins on each of them is virtually impossible. So, each manufacturer provides what's called a \`datasheet\` for each component. It's basically a document that details everything about that chip—its pinout and how to implement it.

To access the datasheet for any component in KiCad, simply click on the component and press D. If there isn't one, just search on Google "\`[part] datasheet\`" and it's usually a PDF.

Opening the datasheet for the battery charger, we are greeted with this:

![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/datasheet_bat.png)

This may look intimidating as there are 86 pages of letters, numbers, formulas, and graphs. However, there is one section that is valuable to us called \`Application and Implementation\`. This section basically gives us a reference schematic on how to use said chip. We can use the sidebar or table of contents to locate that section. You should see this:

![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/datasheet_sch.png)

This is the schematic for a specific implementation, and we can see below that there is a table that describes it:

![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/datasheet_table.png)

Here we can see the different parameters that influence the design of the schematic above. It is important to understand what each of these values means to determine if the schematic works for your specific needs.

### Design Parameters Explained:

- **VBUS voltage**: How much voltage the chip needs to charge the battery. Our 5V from the USB-C fits within the range, so we're good.
- **Input current limit**: Determines how much of the available 3A current will be consumed.
- **Fast charge current limit**: Sets how much current will be used to charge the battery.
- **Minimum system voltage**: If the battery falls below this voltage, the internal regulator activates to maintain this voltage until the battery completely dies.
- **Battery regulation voltage**: The maximum voltage the chip will charge the batteries to. In this case: 4.2V per Li-ion cell × 2 cells = 8.4V maximum.

These parameters determine the specific resistor and capacitor values needed in the schematic. If we scroll down further in the datasheet, we can see the calculations needed to determine the inductor and capacitor values:

![LCSC Search](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/datasheet_calc.png)

If you need a chip that has a reference schematic that doesn't fit your needs, then you need to do some calculations in order to get the right component values. However, usually you don't have to do that.

### Extra Info

If you haven't noticed already, the chip can be connected to a host through some pins called SDA, SCL, INT, CE, and PG. If you don't know what they do or want to know what they mean, there's a section in the datasheet called \`Pin Configuration and Functions\` that goes into detail about what each pin does.

![Datasheet Pin Configuration](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/datasheet_pin_config.png)

Here we can see that for those pins there are descriptions like \`active low\`, \`open drain\`, and \`I2C\`. Let's break down what these terms mean:

#### Active Low

**Active low** means the pin is "active" (doing its job) when the voltage is LOW (0V or close to ground), not when it's HIGH (3.3V or 5V). Think of it like a backwards switch—when you pull the pin to ground, that's when it triggers the function. Many reset pins work this way: pull the reset pin low to reset the chip, and let it go high to run normally.

#### Open Drain

**Open drain** is a type of output that can only pull a pin down to 0V (LOW), but cannot push it up to 3.3V (HIGH). Think of it like a one-way switch—it can only connect the wire to ground, not to power. When the switch is "off", the wire is left floating with no connection. This is why open drain pins need a "pull-up resistor"—a resistor that connects the wire to 3.3V and keeps it HIGH when nothing is pulling it down. Multiple chips can share the same wire this way without interfering with each other.

### Communication Protocols

Now let's talk about the different ways chips can talk to each other. There are several common protocols you'll encounter:

#### I2C/I3C (Inter-Integrated Circuit)

I2C uses only **2 wires**: SDA (data) and SCL (clock). Multiple devices can share the same two wires, and each device has a unique address. Think of it like a conference call where everyone shares the same phone line, but each person has a unique ID. Both wires need one pull-up resistor each (in total) in order to function correctly.

**Pros:**

- Only needs 2 wires regardless of how many devices you connect.
- Built-in addressing system allows multiple devices on same bus.
- Relatively simple to implement.
- Good for sensors and simple peripherals.

**Cons:**

- Slower than SPI (typically 100 kHz to 3.4 MHz).
- Limited distance—long wires can cause signal problems.
- Can get complex with timing issues and error handling.
- Address conflicts if two devices have the same address.

#### SPI (Serial Peripheral Interface)

SPI uses **at least 3 wires** plus one additional wire for each device: MISO (Master In, Slave Out), MOSI (Master Out, Slave In), SCK (clock), and CS (Chip Select) for each device. It's like having separate phone lines for each conversation.

**Pros:**

- Much faster than I2C (can go 10 MHz+ easily).
- Full duplex (can send and receive simultaneously).
- Simpler protocol.
- More reliable over longer distances.

**Cons:**

- Needs more wires (especially with multiple devices).
- No built-in error checking.
- Only one master device allowed.
- Can use up many pins quickly with multiple devices.

#### UART (Universal Asynchronous Receiver-Transmitter)

UART uses **2 wires**: TX (transmit) and RX (receive). It's a point-to-point connection between two devices, like a private phone call.

**Pros:**

- Very simple—just 2 wires.
- No clock signal needed (asynchronous).
- Long distance capable with proper drivers.
- Universal—almost every microcontroller has it.
- Good for debugging and console output.

**Cons:**

- Only connects two devices directly.
- Both devices must agree on baud rate (how fast the data goes) beforehand.
- No built-in error correction.
- Can lose sync if timing is off.

#### USB (Universal Serial Bus)

USB uses **2 data wires** (D+ and D-) plus power and ground. It's like a smart postal system that can handle packages of different sizes and priorities.

**Pros:**

- Standardized connector and protocol.
- Provides power to devices.
- Hot-pluggable (can connect/disconnect while powered).
- High speed (up to 10 Gbps on USB 3.1).
- Built-in error correction and flow control.
- Can connect many devices through hubs.

**Cons:**

- Complex protocol requiring dedicated hardware/software.
- More expensive to implement.
- Requires specific connectors and cables.
- Power management can be tricky.
- Not suitable for real-time applications due to variable latency.

---

We will not be connecting the USB to the battery charging chip as we need to connect the STM32 to USB-C to be able to program it. Looking through the datasheet, it says that those pins are used to determine how much current can be used. However, they can also be set through the \`I2C\` interface that the IC has, so we can change that later with the STM32.

Now that we know that the schematic suits our needs, we can start copying it in KiCad. When copying a schematic from a datasheet, any pins that can be connected externally should use \`Net Labels\` like so (obviously with the pull-up resistors added later):

![Net Labels Example](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/net_labels_example.png)

Also, because we are dealing with power, we have to use \`separate grounds\` such as \`power ground\` and \`digital ground\`. Usually, for most chips, we will use the digital ground. However, sometimes we have to work with power components and need to have a cleaner ground reference. In the datasheet, you can see that there are different symbols for ground.

**Digital ground** is used for all the digital components like microcontrollers, sensors, and logic chips. Digital circuits switch on and off rapidly, creating noise on the ground plane. This is fine for digital circuits since they only care about HIGH (1) or LOW (0), not the exact voltage.

![Digital Ground Symbol](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/digital_ground_symbol.png)

**Power ground** is used for high-current circuits like motor drivers, charging circuits, and voltage regulators. These circuits can draw lots of current, creating voltage drops and noise in the ground connections. Keeping them separate prevents this noise from affecting sensitive circuits.

![Power Ground Symbol](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/power_ground_symbol.png)

#### Why Separate Them?

The noise from digital switching or high-current power circuits can interfere with sensitive analog measurements from the sensors.

The trick is to keep these grounds separate on the PCB traces but connect them together at a single point. The datasheet says to connect them below the \`thermal pad\` (a conductive area under ICs to dissipate heat/reduce noise) of the chip. This gives each type of circuit its own clean ground reference while still maintaining a common ground for the entire board.

Now wire up the rest of the schematic, and you should end up with something similar to this:

![Battery Charger Schematic Complete](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/battery_charger_complete.png)

Note the mess, but I have different ground names for PGND and GND, although I used the same symbol. I added a battery screw terminal and also connected the battery ground to PGND, and I also shorted PGND and GND. I plan on connecting PGND and GND on the bottom of the thermal pad (this is actually the EP/Pin 25, but in the end I removed PGND and used only GND for simplicity).

### Regulators

Now after finishing the battery charger, I am going to start wiring up the regulators, starting with the \`TPS63070\`.

Apply the same methodology as wiring up the battery charger: look up the datasheet, go to the \`Application and Implementation\` section, and look at the schematic. In this case, there are 2 schematics:

![TPS63070 Adjustable Application](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/tps63070_adjustable.png)
A typical application that can be adjusted depending on your needs.

And if you scroll down a bit more:
![TPS63070 Fixed Voltage Application](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/tps63070_fixed.png)

Another typical application, but this time it outputs a fixed voltage.

Really, the only difference is that for the adjustable version, there's a \`voltage divider\`—a pair of resistors that can be used to create a voltage less than or equal to the input voltage:

![Voltage Divider Circuit](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/voltage_divider_circuit.png)

In the fixed version, we don't use a voltage divider so it stays at 5V (it's predetermined in the chip).

In our case, we are going to use the fixed version as it uses fewer components and also gives us the 5V that we need.

## TIP

When wiring things based on schematics, make sure to use the recommended size capacitor/inductor values (if mentioned) and set it in KiCad like so when you are going to place the part:
![KiCad Component Value Setting](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad_component_value.png)

---

Using the fixed schematic (and taking into account the correct footprint sizes), wire it up in KiCad. You should get something like this:

![TPS63070 Schematic Complete](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/tps63070_schematic_complete.png)

With VIN connecting to VSYS (battery or USB voltage) and VOUT connecting to +5V. Separate grounds are not needed here, so they are GND.

If you don't know what footprint size to add to the other components (resistors, inductors, etc.), don't worry. We will revise this later.

Now moving on to the final power part, the \`LMR51430\`.

Repeat the same as the other 2 parts: open the datasheet and look for the \`Application and Implementation\` section. Switching regulators (like the name implies) switch MOSFETs (tiny gates) open and close very fast in order to regulate voltage. This can be measured by the \`switching frequency\` of the chip. In this case, we have 2 tables under the schematic.

![LMR51430 Switching Frequency Tables](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/lmr51430_switching_tables.png)

One for a switching frequency of 500 kHz and another one for 1.1 MHz (1100 kHz). With a higher switching frequency, it is less efficient and also can produce more heat. However, overall, the space it takes up is less than with the lower frequency. On the other hand, a lower switching frequency is more stable/efficient and doesn't heat up as fast. It also produces a lot less noise (which is what we need). So in this case, we will go with the lower switching frequency at 3.3V. If you want to wire it up based on the higher frequency, then feel free to do so. Just take into account the pros and cons of each one. (All of this information is from the datasheet, by the way.)

![LMR51430 Adjustable vs Fixed Schematic](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/lmr51430_adjustable_vs_fixed.png)

After routing it, you should get something like this (for a 500 kHz switching frequency at 3.3V):

![LMR51430 Schematic Complete](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/lmr51430_schematic.png)

Like the 5V regulator, VIN = VSYS, but VOUT = +3.3V as this chip is giving us 3.3V output.

Double-check the values on the resistor divider as that is what determines the output voltage. Also, in the reference schematic, it shows one capacitor of 44 µF, but in the table, it's 2 capacitors of 22 µF, so I used those.

## Sensors and Peripherals

Now that we've got power out of the way, it's time to route the sensors and the microSD.

### BMP580

Starting with the BMP580, when I try to open the datasheet, it says that no datasheet is defined. So you have to look it up on Google and found [this](https://cdn-shop.adafruit.com/product-files/6411/BMP580.pdf).

Looking around the table of contents, there is no \`Application and Implementation\` section, but there is a \`Pinout and Connection Diagrams\` which is close enough:

![BMP580 Pinout Diagram](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/bmp580_pinout.png)

Taking a look at the different schematics, there are different ways of connecting the chip through \`SPI\`, \`I2C\`, and \`I3C\`. Above in the **Communication Protocols** section, I explained what each of these mean. For this chip, I plan on using \`I2C\` as it's the default mode of communication for this chip. (This is personal preference; feel free to use whichever mode of communication you wish.)

When implementing \`I2C\`, you need to have pull-up resistors on each line. However, if you recall, the battery charging circuit uses I2C as well, and we already put pull-up resistors there, so it isn't necessary to add them here.

![BMP580 I2C Schematic](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/bmp580_i2c_schematic.png)

Following this schematic, after wiring it up in KiCad, you should get this:

![BMP580 KiCad Wired](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/bmp580_kicad_wired.png)

I wired both VDD and VDDIO to 3.3V as that is the voltage that all of the other chips are running at (microcontroller and sensors).

### ICM-45686

Looking at the \`ICM-45686\` [datasheet](https://invensense.tdk.com/wp-content/uploads/documentation/DS-000577_ICM-45686.pdf), it has different modes of operation like the BMP580. However, the one that interests us is this one:

![ICM-45686 SPI Schematic](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/icm45686_spi_schematic.png)

Changing things up a bit, we are going to connect the sensors to the microcontroller through SPI. This gives us the advantage of faster data and also allows us to learn how to implement it later on in code.

Also, in the schematic, looking at pin 14, it serves the dual purpose of being a SDIO or SDI. However, in our case, we want to use it as SDI to use the full capacity of SPI.

You should end up with something like this after:

![ICM-45686 KiCad Wired](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/icm45686_kicad_wired.png)

### MicroSD Card

MicroSD works on the same principle as SPI but can have more channels for faster data throughput. This form of communication is called SDIO (Secure Digital Input Output) and can work in 1-bit or 4-bit data modes (4-bit has more channels and faster data transfers).

Here is an example schematic of how the SD card should be wired, but we are going to modify it a bit to fit our needs. There are 8 pins on the microSD, and here's a table showing their meaning:

![MicroSD Pinout Table](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/microsd_pinout.png)

In SDIO (SDMMC) mode, DAT0-3 are used for data transfer, CLK for clock, and CMD for sending/receiving commands between the microcontroller and microSD card. DAT3 can also be considered a CD (Card Detect) pin, but usually, there is a 9th pin on most symbols that uses the case directly to detect if there is an SD card or not.

Another thing to keep in mind when wiring up the microSD card: **10K PULL-UPS ARE REQUIRED FOR EVERY PIN ON THE MICROSD CARD** (excluding the 9th pin/GND/VCC).

![MicroSD Pullup Requirements](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/microsd_pullup_requirements.png)

After wiring it up, you should get something like this:

![MicroSD KiCad Wired](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/microsd_kicad_wired.png)

Now all that's left is to connect everything to the microcontroller!

# Microcontroller Break

Since we are using an STM32, there is a really cool piece of software called STM32CubeMX. It basically allows you to select the functions and types of communication that you need, and it automatically selects the pins so that we don't have to read the datasheet and get stuff wrong.

To start, [download it here](https://www.st.com/en/development-tools/stm32cubemx.html) and wait for it to install.

After installing it and opening it, you should be presented with this screen:

![STM32CubeMX Startup Screen](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_startup.png)

Click on \`ACCESS TO MCU SELECTOR\` as we are going to create a new project based on the MCU that we are using: in this case, \`STM32F722RET\`.

After searching for the MCU, you should see this screen:

![STM32CubeMX MCU Selector](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_mcu_selector.png)

Here, it shows different variations of that version for the STM32, but we are going to select the \`STM32F722RET6\` version as it is the one that has the most in stock on LCSC.

![STM32F722RET6 Selected](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_mcu_selected.png)

After that, hit "Start Project" at the top. If any windows pop up, say yes.

After loading/downloading the firmware, you should be greeted with this window:

![STM32CubeMX Pinout Configuration](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_pinout_config.png)

This is where you will be configuring the pinout for the STM32. On the left, you can see the different sections that are able to be configured. However, the only ones that concern us for now are the \`System Core\`, \`Timers\`, and \`Connectivity\` sections.

## Connectivity

Here, we can see the different ways that we can connect the STM32 to different peripherals through \`I2C\`, \`SPI\`, \`UART\`, \`SDMMC\`, \`USB_OTG_FS\`, and more. For now, enable the first I2C channel. This will be for the battery charger and pressure sensor. It should look like this:

![STM32CubeMX I2C Enabled](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_i2c_enabled.png)

Also, be sure to select pins on either side for the battery charger interrupt and chip enable pins. The BQ_INT pin should be set as a GPIO_EXTIx (x is any number) pin as this lets the STM32 know that this pin is going to be an interrupt pin.

![STM32CubeMX BQ_INT GPIO Configuration](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_bq_int_gpio.png)

For BQ_CE, make sure that there's a pin set to GPIO_Output. According to the datasheet, when the pin is low, charging is on, and when it's high, the battery doesn't charge. We can change this later in the code for further customization in case you don't want the battery charge controller running during flight.

![STM32CubeMX BQ_CE GPIO Configuration](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_bq_ce_gpio.png)

**MAKE SURE TO ADD THE INTERRUPT PIN FOR THE BMP580.**

When selecting an interrupt, if it deletes another interrupt, choose another pin as some interrupts use multiple pins.

![STM32CubeMX BMP580 Interrupt Configuration](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_bmp_interrupt.png)

Then enable an SPI channel for the IMU. You are free to use whichever channel you wish, but I am going to select the first one. Select \`Full Duplex Master\` as the STM32 will be the master and the IMU the slave, and full duplex because we are using both MOSI and MISO and not just one channel for input/output (half duplex/SDIO). There is also an option under the selection to activate a \`Hardware NSS Signal\`. This is used if we have just one device under the SPI bus and makes it so that the STM32 manages the \`Chip Select\` pin instead of us having to select a GPIO for it. I enabled it as \`Hardware NSS Signal Output\` as the IMU will be the input. After selecting SPI, it should look like this (it can be different if you want to use a different pin for the Chip Select):

![STM32CubeMX SPI Configured](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_spi_configured.png)

Also, don't forget to add the 2 interrupt pins on the IMU as GPIO_EXTIx (x is any number):

![STM32CubeMX IMU Interrupts](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_imu_interrupts.png)

After you've done that, it's time to select \`USB_OTG_FS\`. This means USB On-The-Go Full Speed, and it differs from \`USB_OTG_HS\` (USB On-The-Go High Speed) as it is slower and doesn't need any extra pins to configure. It's sufficient for our needs of flashing and sending serial data. Set it to host or device (you'll be changing this later depending on your needs). For now, I will leave it as host, and it shows where the USB pins are on the chip.

![STM32CubeMX USB OTG Configuration](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_usb_otg.png)

Now enable \`SDMMC\` as this is the communication protocol that we will be using to write/read to our microSD. This should be enabled and set to a 4-bit bus.

![STM32CubeMX SDMMC Enabled](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_sdmmc_enabled.png)

Also, remember to add an extra pin next to it for the card detect pin and make it a GPIO_Input:

![STM32CubeMX SDMMC Card Detect](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_sdmmc_card_detect.png)

Now that we are done with our peripherals/sensors, we are going to configure some other stuff that would be important in starting the STM32 and configuring the servos.

Go to the \`System Core\` tab, then click on \`RCC\`, and set both the high-speed clock and low-speed clock as a crystal/ceramic resonator. By doing this, we are telling the STM32 that we will have some external clocks that it can use to achieve faster/stable clock timing throughout the entire chip. We will edit this in KiCad later along with the pins.

![STM32CubeMX RCC Configuration](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_rcc_config.png)

Now go to the \`Timers\` section. Here is where we can edit the PWM pins for the servos. Select any timer that has channels that support PWM and select 2 \`PWM Generation CH\` channels. We will be able to edit the **duty cycle** later in the firmware. Also edit the \`Clock Source\` and set it to the internal clock. This is needed for the PWM generation as it needs a clock to time the signals correctly.

![STM32CubeMX PWM Configuration](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_pwm_config.png)

**MAKE SURE TO SAVE USING CTRL+S AND CREATE A NEW FOLDER IN THE ROOT OF YOUR GITHUB REPOSITORY CALLED \`software\` OR \`firmware\`.**

![STM32CubeMX Save Location](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_save_location.png)

This is how my STM32 looks after selecting all of the pins:

![STM32CubeMX Final Pinout 1](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_final_pinout1.png)
![STM32CubeMX Final Pinout 2](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_final_pinout2.png)
![STM32CubeMX Final Pinout 3](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_final_pinout3.png)

Keep this open while we configure the rest of the microcontroller in KiCad.

# Back to KiCad

Now after adding all of the pins and peripherals and knowing which pins you are going to use, we are going to finish wiring up the STM32 with what's called a \`reference schematic\`. If you want to learn more about this specific type of chip or any STM32 MCU in general, there is a documentation tab ([example](https://www.st.com/en/microcontrollers-microprocessors/stm32f722re.html#documentation)) that shows you all the implementations/peripherals that you can have with the STM32. After scrolling around, I found a [reference design](https://www.st.com/resource/en/application_note/an4661-getting-started-with-stm32f7-series-mcu-hardware-development-stmicroelectronics.pdf) to use with our STM32.

Going to the section named \`Reference Design\`, we are greeted with this:

![STM32 Reference Schematic](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32_reference_schematic.png)

## Wiring up Power

Starting with the \`decoupling capacitors\` (capacitors that are placed near ICs to stabilize voltage on power supply lines—they are in parallel with voltage and connect to ground), it is generally good practice to place one **100 nF** per VDD pin and then use a bigger **1 µF** capacitor per section (e.g., VDD/VDDA/VBAT). Finally, finish off with a big **4.7 µF** or **10 µF** capacitor on the main voltage line before the STM32 to handle larger voltage spikes. If you have analog voltage (VDDA), it's also good practice to put a \`ferrite bead\` (like a capacitor, but it suppresses high-frequency noise currents) before connecting it to VCC to prevent noise from digital switching from interfering with sensitive analog functions.

It is also needed to place a 2.2 µF capacitor in series with VCAP and GND.

**VERY IMPORTANT: PUT A 2.2 µF DECOUPLING CAPACITOR ON EACH VCAP PIN OF THE STM32 OR IT WON'T BOOT UP.** (From experience)

Based on this information (and the schematic), try to wire up your STM32's VDD/VSS pins (VSS is GND, by the way). You should get something like this:

![STM32 VDD/VSS Wiring](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32_vdd_vss_wiring.png)

I placed the capacitors off to the side to make it look cleaner, but it's the same as if you were to connect them directly. Just make sure that when you are placing/routing them on the PCB, they are **AS CLOSE AS POSSIBLE TO THE PIN THAT THEY ARE DECOUPLING OR IT DEFEATS THE PURPOSE.**

## Clocks

Looking at the reference design above, it shows that we need some buttons for the reset and boot pins. These buttons allow us to restart the MCU and allow it to boot into its bootloader to allow for programming through USB.

We also have to add the 32.768 kHz and 25 MHz clocks mentioned in the datasheet. These clocks are important for PWM and other functionality that requires timing that you may want to add.

I am going to import all of these parts from LCSC using the script that we used before (including the ferrite bead). Here are the updated part numbers:

- C720477 (Button)
- C9006 (25 MHz Crystal)
- C32346 (32.768 kHz Crystal)
- C141723 (Ferrite Bead)

After running the script, import all of the parts in. I replaced the ferrite bead with the part from LCSC:

![KiCad Crystal Imports](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad_crystal_imports.png)

Now it's time to place the crystals. These crystal oscillators use a \`piezoelectric\` (ability of certain materials to generate an electric charge when subjected to mechanical stress, and conversely, to deform when an electric field is applied to them) \`crystal\` to generate a stable and accurate frequency reference signal. When using these crystals, you need to place \`load capacitors\`:

![Crystal Load Capacitors Concept](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/crystal_load_capacitors_concept.png)

Think of the crystal like a kid on a swing. It is going back and forth at a certain oscillation. The \`load capacitors\` would be weights that you add onto the swing to speed it up or slow it down to get the exact frequency. The same applies to the crystal oscillators. The capacitors are used to fine-tune the oscillations (clock speed) of the crystal.

Each crystal has a datasheet that specifies the load capacitance that it needs, and I have already looked them up for the crystals mentioned above. **REMEMBER THAT EACH CRYSTAL IS DIFFERENT EVEN IF THEY MIGHT HAVE THE SAME FREQUENCY.**

The capacitors for the 25 MHz crystal should be 20 pF and for the 32 kHz should be 6.8 pF. After you're done adding them, it should look like this:
![KiCad Crystals Wired](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad_crystals_wired.png)

## Buttons

Now for the reset and boot buttons. These are super important for flashing or working with your STM32 in general. Taking a look at the reference design above, we need to connect the reset pin to a button parallel with a capacitor to ground. For the boot pin, we need to create a button that will set the boot pin to 3.3V when we press it. (Look at the datasheet to learn more.) This allows us to change the boot configuration depending on whether the boot pin is a 1 or a 0. In the end, it should look something like this:

![KiCad Reset and Boot Buttons](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad_reset_boot_buttons.png)

## Servo Headers

Almost done, just need to add in some 3-pin headers to control the servos. They typically have a pinout of 5V - PWM - GND so it's good to keep the pinout in that same order. Mine looks like this in the end:

![KiCad Servo Headers](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad_servo_headers.png)

# Finish Schematic

Now all that's left to do is to finish the schematic by adding net labels on all of the pins that we have used in STM32CubeMX. Your layout might look different from my layout if you're using a different chip or sensors, but here's how my STM32 looks after adding all of the net labels:

![KiCad Net Labels Schematic](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad_net_labels_schematic.png)

For the USB lines, DM = DN, and DP = DP.

For the ICM SPI lines, SDI = MOSI. (For the ICM, it's an input, so it would be MOSI (Master Out Slave In) for the STM32.) By that logic, SDO = MISO.

Note that for the I2C lines, I changed the names to be able to connect to each of the devices like so:

![KiCad I2C Connections 1](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad_i2c_connections.png)
![KiCad I2C Connections 2](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad_i2c_connections2.png)

You may have a different pinout than me, but as long as you know which pins you are using and for what, then you'll be fine.

**DOUBLE TRIPLE CHECK THAT YOUR PINS MATCH THE ONES IN STM32CUBEMX.**

Now that you're done with your schematic, organize everything so that it looks nice. You might have to change the page settings via \`File > Page Settings\` in order to change the size of it:

![KiCad Page Settings](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad_page_settings.png)

Now after organizing it a bit, your schematic should look like this:

![KiCad Final Schematic](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/kicad_final_schematic.png)

I placed text to name each block and added a title at the bottom right.

**Finally, we're done with the schematic!**

# Footprint Assignment

Before continuing on to the PCB, we have to \`Assign Footprints\` which basically tells KiCad how big each component is physically and how the connections look in real life to be able to solder it.

Click on this button to open the footprint selection screen:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/footprint_assignment_button.png)

The lines in yellow are components whose footprints we have to assign:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/footprint_assignment_list.png)

But since it's mainly resistors and capacitors, that makes it a lot easier.
Since we're designing a flight controller, this has to be as small as possible, so I am going to be choosing the smallest footprints I can (while staying within good practices). The smaller the footprint, the more it can heat up and the less it can tolerate (for resistors and capacitors). A rule of thumb that I go by is any resistors under 80K I assign a 0201 footprint, over that and it's 0402. For capacitors, any \`bulk capacitors\` (capacitors that have high values like 4.7 µF or 10 µF) I usually assign 0402. Any bigger than 10 µF and I assign 0805, but it depends on the datasheet of the component. Under the application and implementation section there is usually a table that specifies which footprints/components to use.

Now all that's left is to finish adding the footprints for these symbols:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/footprint_remaining_symbols.png)

For the LED, I am going to have it in a 0402 package. And for the headers, I am going to use these footprints (basically the standard headers for jumper cables):

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/header_footprints.png)

The inductors are a bit trickier. For this, you're gonna have to go into the datasheet and see where it says the size:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/inductor_datasheet_size.png)

For that \`5.6uH\` inductor, I am going to be using \`C18236327\` (LCSC Part Number).

For the 5V buck-boost, I am going to be using \`C3033018\`. I also noticed that I had the inductor value wrong from the datasheet. **THIS IS WHY DOUBLE CHECKING IS IMPORTANT:**

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/inductor_value_correction.png)

For the final inductor in the battery charging IC, I am going to use \`C435392\`.

Press \`Apply, Save Schematic & Continue\` to save the footprints you have already placed and then import the new inductors that you have selected.

# PCB Layout

Now go to the PCB section in KiCad. There's a button at the top of the schematic page that says \`Switch to PCB Editor\` to go there.

Then to import all of our components from the schematic, we hit this button:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_import_button.png)

A screen should pop up:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_update_from_schematic.png)

There should be no errors or warnings. Then press Update PCB to import everything from the schematic.

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_components_imported.png)

Now comes the fun part, part placement!

## But wait, what's a PCB?

A \`PCB\` (Printed Circuit Board) is a board used to mechanically support and electrically connect electronic components. It is composed of layers of copper and a \`dielectric material\` (a material that acts as an "insulator" and isn't conductive). PCBs can have from 2-32 layers, although for this board, we will be working with 2 (maybe 4 if we need to).

In KiCad, if you look to the right, it shows the different layers:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_layers_panel.png)

\`F.Cu\` and \`B.Cu\` (Front Copper and Back Copper) are our copper layers (denoted by the \`.Cu\`). The only other layers that are important to us are \`F/B.Silkscreen\` and \`Edge.Cuts\`. The silkscreen layers allow us to put text/images and is usually that white text that you find on any PCB. \`Edge.Cuts\` is the layer for the edges of the board (e.g., where JLCPCB will cut to make the outline). For now we will focus on the copper layers and routing. We can add more copper layers later in the board settings.

Now we have to connect each of the components and \`route\` them (create copper lines between each of them).

## Layout

I personally have always relied on this one trick to route my PCBs and it has always helped me without fail. First, separate the components into their respective groups (e.g., all of the components for the battery charger, 5V regulator, 3.3V regulator, STM, etc.), then lay them out and route them in those groups, finally put the groups together on the PCB and route the connections between them.

Starting with USB-C, go to the schematic and select the USB-C section:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/schematic_usbc_selection.png)

Then going back to the PCB editor, you should see that the connector and its parts are selected. Then drag them off to one side.

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_usbc_components_placed.png)

Do the same for each of the sections and after you've done that you should get something like this:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_all_groups_separated.png)

Now go section by section and place the components close to where they're supposed to be connected. Make sure to place decoupling capacitors close to the pins that they need to decouple or they won't work.

Example of the USB-C connector:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_usbc_layout_example.png)

I placed the resistors close to the pins that they need to decouple and in a good orientation so that I can connect that ground pin easily.

For the 3.3V Buck converter I routed it like this:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_3v3_buck_initial.png)

But now I'm realizing that the components I chose are too small so I am going to make the capacitors and resistors a bit bigger:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_3v3_buck_adjusted.png)

Ignore the silkscreen for now (the yellow) we are going to come back to that later.

Continue on for each of the chips. For example, here is how I placed the 5V buck-boost converter:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_5v_buck_boost_layout.png)

As you can see, the capacitors are close to the pin and to each other, and all of the components I have placed in a way where I can create easy connections like so:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_5v_buck_boost_routed.png)

Moving on to the battery charger:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_battery_charger_layout.png)

Crystals:
![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_crystals_layout.png)

microSD Card:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_microsd_layout.png)

For the STM32/microcontroller, it's a personal preference of mine to rotate it 45 degrees so that it's "easier" (subjectively) to route later. You can change this by editing the \`orientation\` property:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_stm32_orientation.png)

Also for these decoupling caps:
![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_bulk_decoupling_caps.png)

I changed the sizes to be 0402 as they are bulk decoupling capacitors and should always be a bit bigger than the normal ones.

After laying out the decoupling capacitors for the STM32, it looks like this:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_stm32_decoupling_layout.png)

That one capacitor that is by itself on the right is the big 10 µF capacitor that I plan on laying out later depending on where the 3.3V is coming from.

### Final Layout

After you're done laying out all of the \`passive components\` (resistors, inductors, capacitors, etc.) and their respective ICs, it's time to layout each of those groups on the board.

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_initial_board_layout.png)

Here's what my "board" layout is and I'm going to play around with the placement of each of the groups before routing to make it more compact.

**TIP**
![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_group_components_tip.png)
It may be helpful to literally group them in KiCad to move them around easier.

After a bit of laying out and thinking I came up with this:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_final_layout_organized.png)

The battery charger is close to VBUS and then VSYS has an easy path through to the 3.3V buck converter and 5V buck-boost. The battery connector is also on that side. On the top is the microSD card with a connection to the STM32 directly under it. On the top left are the buttons for boot and reset and also the 2 clocks. On the bottom left is the IMU that is kept separated from the rest to reduce noise (happened by accident lol) and the STM32 in the middle whose USB DP and DN pins are inline with the USB-C port.

You don't have to use this exact layout but try to have one that's "organized".

Now after defining the layout, go to the \`Edge.Cuts\` layer and create a rectangle with the tool on the side:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_edge_cuts_tool.png)

This will be the PCB outline.

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_board_outline_drawn.png)

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_board_dimensions.png)
When I originally created the board size to cover all of the parts, it had a size of 42.7mm x 47.8 mm so I decided to round it to 40mm x 46mm (optional). After creating the board outline, you may need to shuffle some stuff around for it to fit. It's good practice to put the USB-C connector hanging out a bit so that you have space to plug in the cable like so:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_usbc_overhang.png)

After organizing it, look at the board in the 3D viewer to get a good feel for how the components are going to look. Don't worry if the silkscreen/3D models look terrible for now, we will fix that at the end.

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_3d_view_top.png)

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_3d_view_side.png)

## Routing

Before we start routing, let's configure the \`Design Rules\`. These are rules that KiCad has to impose certain restrictions like spacing between components and track width and via size, among other things. It is also where we can add default sizes for \`vias\` (holes that connect tracks between layers) and \`tracks\` (copper lines that connect components).

Go to the \`Pre-defined Sizes\` section:
![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_predefined_sizes.png)

I am going to add \`0.6mm\`, \`0.4mm\` and \`0.2mm\` track widths. For vias, I usually go with vias that have \`0.6mm Diameter / 0.3mm Hole\` and \`0.4 Diameter / 0.2mm Hole\`.

Now after that we have to edit the \`constraints\` of the board so that KiCad doesn't throw an error when we try to place them. Go to the \`Board Setup\` and then \`Constraints\`.

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_board_setup_constraints.png)

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_constraints_settings.png)

Here we are going to change a couple of settings due to the size of our board. We need to be able to place smaller vias and traces, so change the \`Minimum via diameter\` to \`0.4mm\` and the \`Minimum through hole\` to \`0.2mm\`. After that's done, click OK and you can start routing!

### How to Route

Basically connect each of the pads to their connections and try to use as few vias as possible. I usually try to route the signal stuff (USB, sensors, microSD, crystals, etc.) first and then the power.

(Press x to start routing or use the buttons on the side).

Starting with the USB-C data lines, these are what's known as a \`differential pair\`, so they have to be the same length as they carry a signal that needs to be in sync with the other and the only way for that to happen is if they're the same length. Start connecting them like so:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_usb_differential_start.png)

Then go to \`Route > Route Differential Pair\`
![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_route_differential_pair_menu.png)
and then click on the USB_DP to the far right:
![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_usb_differential_routing.png)
Then route it to the STM32. That's basically the only component that needs differential routing.

Moving on, just some general tips. I personally like to use \`0.6mm\` or \`0.4mm\` width for power stuff, mainly anything that runs either 5V (0.6mm) or 3.3V (0.4mm), and you can change the track width or via size from these drop downs at the top.

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_track_width_dropdown.png)

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_via_size_dropdown.png)

I also like to do the same as in the layout where I route all of the passive components to their respective ICs before then routing those groups together. For example, routing the decoupling capacitors to the IMU before connecting it to the STM32:

![IMU Decoupling Capacitors Routed](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_imu_decoupling_routed.png)

You might have to rotate components as well to get a good placement. For vias, I aim to use a maximum of 2 per line like so:

![Via Placement Example](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_via_placement_example.png)

Don't worry about connecting the GNDs for now, as we are going to use what's called a \`ground plane\` (a copper area of GND that can connect to pins/pads).

Sometimes for VBUS on USB-C or any other component, you might have vias that can't pass through, so I added a \`0.3mm\` track width in the board settings and it works:

![VBUS Routing Issue](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_vbus_routing_issue.png)

![VBUS Routing Fixed](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_vbus_routing_fixed.png)

If KiCad doesn't let you place a via on a pad for whatever reason, you can edit the clearance in \`Board Setup > Net Classes\`. I set it to 0.15, but try not to set it any lower as the minimum for JLCPCB is \`0.1mm\`:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_net_classes_clearance.png)

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_via_on_pad_placed.png)

This is how I routed the Battery charger:
![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_battery_charger_routed.png)

See how I used wider traces for power lines and thinner traces for the other pins. I plan on wiring the I2C lines and INT pins connecting to the BMP580 like so:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_bmp580_i2c_routing.png)

I connected them to the STM32 through the underside to save space (very useful sometimes). Also, I hid the silkscreen layer so that I can route easier.

Then routed the microSD card:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_microsd_routed.png)

Then finally I routed the 3.3V line, using 0.6mm tracks and then branching off into smaller 0.3mm tracks to connect to the different ICs.

**REMEMBER THAT THE 3.3V MUST GO THROUGH THE DECOUPLING CAPACITORS FIRST BEFORE REACHING THE PIN LIKE SO:**
![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_3v3_through_decoupling_caps.png)

After routing your board should look something like this:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_all_routed_complete.png)

Now we are going to add the ground pours. This is so that we don't have to manually connect all of the ground pads and it also helps with interference and noise across the board.

Go to the right and click on \`Draw filled zones\` and click on one corner and a window should pop up:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_ground_pour_settings.png)

Here you need to select both layers of copper and select the GND net. Then you need to change the clearance and minimum width to both 0.2mm and also change the \`Pad connection\` to \`Solid\` or \`Thermal reliefs\`. Solid allows the ground plane to connect to the pads better but Thermal reliefs is good if you need to solder/fix the board as the solid ground plane makes it difficult to heat up specific components. For this tutorial I am going to use \`Solid\` but feel free to use \`Thermal reliefs\` if you want to be able to solder it later. Press OK and start creating the zone like so:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_ground_pour_outline.png)

You want it to look something like this:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_ground_pour_outline.png)

Then press \`b\` on your keyboard and it should fill the zone automatically (\`Ctrl-b\` to clear them).

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_ground_pour_complete.png)

Now you should check if you have any \`ratlines\` (blue lines that signal unconnected pins) and fix them. In my case, I forgot to connect the servos so I will do that now.

Now you need to check if there are any holes that don't have any ground plane and add a \`stitching via\` (via that connects ground/power planes to cover everything) like so:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_stitching_via_location.png)

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_stitching_via_placed.png)

You also might see a ratline connecting a piece of the ground plane. This usually means that you need a stitching via in that area.

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_ground_plane_disconnected.png)

As you can see, the ground plane connecting to Pin 18 isn't connected to the rest of the ground plane, so we need to add a stitching via there like so:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_ground_plane_connected.png)

**SUPER IMPORTANT: FOR ANY COMPONENTS THAT HAVE A THERMAL PAD, CONNECT IT TO GND WITH A STITCHING VIA (depends on the chip but check the datasheet to be sure):**

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_thermal_pad_via.png)
(You can edit the properties by right clicking the pad and editing the \`Net name\`.)

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_thermal_pad_net_edit.png)

Also Notice how I didn't connect the grounds together and connected both PGND and GND, that was made automatically by KiCad when I connected the EP Pin of the battery charger:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_pgnd_gnd_connection.png)

After connecting everything we are going to run \`Check DRC\` which basically checks the design rules and makes sure our board is ready for production.

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_drc_check_button.png)

Then click on \`Run DRC\`:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_drc_run_button.png)

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_drc_results.png)

Unselect the warnings and look at the errors. If there are any errors about unconnected pads then you should probably go back and make sure that everything is connected. There are some errors but those are from the parts that we imported like the USB-C and microSD card that KiCad is complaining about the holes:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_drc_errors_from_imports.png)

Those errors are safe to ignore but any others you should probably fix.

And with that out of the way, congrats! You've finished the PCB!

Now all that's left is to add silkscreen and make it look pretty and then get the files ready so you can order it on JLCPCB (or any other board manufacturer).

# Finishing Touches

Now I'm going to fix the silkscreen component names so that they look better (and a bit smaller). Go to \`Edit > Text & Graphics Properties\`

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_text_graphics_menu.png)

This window should show up:
![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_reference_designators_window.png)

Here you're going to select \`Reference designators\` as this will select all of the designators (R1, C1, etc...) on the board so we can edit their properties. Then in the action I am going to change the font and the size:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_silkscreen_font_settings.png)

You can set these values to whatever you want but I am going to go with this. Then click \`Apply\` to test it out and \`Apply and Close\` when you are done.

Now all I'm going to do is organize the references like this:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_silkscreen_before.png)
(before)
![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_silkscreen_after.png)
(after)

This is completely optional but look at how neat it looks now with all the designators/references properly sized and placed:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_silkscreen_organized.png)

I even added text to the battery connector to show which side is + and -.

If you want to add the 3D models to render, then just go to properties and find a 3D model that works for you:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_3d_model_properties.png)

(You may have to click on the folder icon next to the path/show button to change the 3D model from a \`.wrl\` to the \`.step\` in the same folder for imported LCSC parts for it to show. Just changing the name will not update it.)

![3D Model Before](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_3d_model_before.png)
(Before)

![3D Model After](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_3d_model_after.png)
(After)

And you're done!

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/pcb_final_complete.png)

# Exporting Production Files

To get your project ready for submission, we need to export the production files (gerbers, etc.). These files tell JLCPCB or whatever board manufacturer how to make the board and which components to place.

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/jlcpcb_plugin_icon.png)

Thankfully, there's a plugin that KiCad has to make this export easy. Go to the \`Plugin and Content Manager\` in KiCad and search for \`jlc\`.

You should see this plugin show up:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/jlcpcb_plugin_install.png)

Press the install button and then \`Apply Pending Changes\` to install it. Finally, go back to your PCB screen and you should see this icon:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/jlcpcb_fabrication_icon.png)

A window should open and click \`Generate\`:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/jlcpcb_generate_window.png)

It should create this directory in the \`hardware\` folder:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/jlcpcb_production_folder.png)

But I'm going to copy it out of that folder and move it to the root so that reviewing is much easier.

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/production_folder_moved.png)

Now open [JLCPCB](https://jlcpcb.com/) and upload the gerbers (ZIP file that has the name of the KiCad project) in the \`production\` folder to see how much it costs.

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/jlcpcb_upload_gerbers.png)

Select \`PCBA\` and make sure that it is only one side and that you order 2 and not 5 boards assembled to minimize cost:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/jlcpcb_pcba_settings.png)

Continue and upload the \`BOM and CPL\` (BOM = bom.csv, basically the components and their ID; CPL = positions.csv, where exactly the components are placed):

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/jlcpcb_bom_cpl_upload.png)

Depending on the sensors you use, you may have to use standard PCBA:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/jlcpcb_standard_pcba.png)

If there are any components that have shortfall, then you need to order them separately and add them to your library before ordering:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/jlcpcb_component_shortfall.png)

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/jlcpcb_parts_list.png)

Continue without placing the parts for now to get the general cost of the board:

![alt text](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/jlcpcb_final_cost.png)

**CONGRATS! YOU'VE MADE YOUR FIRST FLIGHT CONTROLLER!**

Feel free to modify this board to include more sensors, servos, peripherals, microSD cards (lmao), literally anything you can put your mind to.

# Firmware

Now you can either write your firmware through STM32CubeMX/VSCode or use [STM32duino](https://github.com/stm32duino/Arduino_Core_STM32).

## STM32CubeMX

After you have received your board, you need to write the firmware to communicate with the STM32. From STM32CubeMX, go to the \`Project Manager\` section, then click on \`Toolchain / IDE\` and select \`Makefile\`. This allows you to use \`VSCode\` or any other code editor to edit the files much more easily without having to use ST's software.

![STM32CubeMX Toolchain Makefile](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/stm32cubemx_toolchain_makefile.png)

Now click the \`Generate Code\` button at the top and download/install any packages that are required.

After that's done, open \`VSCode\` and open the \`software\` directory. You're also going to want to install this extension to make building the software much easier:

![VSCode STM32 Extension](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/vscode_stm32_extension.png)

Then you should see this button on the side:
![VSCode STM32 Sidebar Button](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/vscode_stm32_sidebar_button.png)

This will allow you to build and flash your flight controller all from VSCode!

![VSCode STM32 Build and Flash](https://raw.githubusercontent.com/notaroomba/simpleflightcontroller/main/assets/vscode_stm32_build_flash.png)

If you need to edit the pinout or functions of any pin, remember to generate the code again from STM32CubeMX.

Edit \`main.c\` and remember to keep your code inside the commented sections that say \`USER CODE BEGIN\` and \`USER CODE END\` to prevent it from being overwritten when you generate the code again. There are many tutorials online/on YouTube on how to program with STM32, so I'd recommend looking there. You will also need files called \`drivers\` to control each of the chips/sensors that you use, but those can be found on the internet/GitHub and can be imported into your project easily. ([example](https://youtu.be/dnfuNT1dPiM?t=1343))

## STM32duino

Follow the instructions in the [GitHub](https://github.com/stm32duino/Arduino_Core_STM32#getting-started)

---

If you have any questions feel free to DM me on Slack (@NotARoomba) and if you want to check out my other projects, here's my [GitHub](https://github.com/notaroomba) / [Website](https://notaroomba.dev).
`;function Vs(){return F.jsxs("div",{className:"min-h-screen bg-black text-white overflow-x-hidden relative",children:[F.jsxs("a",{href:"/",className:"fixed left-4 top-4 md:left-8 md:top-8 text-xl md:text-2xl font-semibold group cursor-pointer z-50 duration-300 transition-all text-white/70 hover:text-white flex items-center gap-2",children:[F.jsx(yr,{size:20,className:"md:w-6 md:h-6"}),"home",F.jsx("span",{className:"block transition-all duration-500 h-1 bg-argentinian_blue max-w-0 group-hover:max-w-full"})]}),F.jsx("div",{className:"max-w-4xl mx-auto px-8 py-16 font-[Inter]",children:F.jsx(Os,{components:{h1:({children:e})=>F.jsxs("h1",{className:"text-4xl md:text-5xl font-bold mb-6 mt-12 text-white pb-2",children:[e,F.jsx("span",{className:"block h-1 bg-argentinian_blue w-full mt-2"})]}),h2:({children:e})=>F.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4 mt-10 text-white pb-2",children:[e,F.jsx("span",{className:"block h-1 bg-argentinian_blue w-full mt-2"})]}),h3:({children:e})=>F.jsxs("h3",{className:"text-2xl md:text-3xl font-semibold mb-3 mt-8 text-white pb-1",children:[e,F.jsx("span",{className:"block h-1 bg-argentinian_blue w-full mt-1"})]}),p:({children:e})=>F.jsx("p",{className:"text-base md:text-lg mb-4 leading-relaxed text-white",children:e}),code:({children:e})=>F.jsx("code",{className:"bg-argentinian_blue/20 text-argentinian_blue px-2 py-1 rounded font-mono text-sm",children:e}),ul:({children:e})=>F.jsx("ul",{className:"list-disc list-inside mb-4 space-y-2 text-white",children:e}),li:({children:e})=>F.jsx("li",{className:"text-base md:text-lg leading-relaxed",children:e}),a:({href:e,children:t})=>F.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"text-argentinian_blue hover:text-argentinian_blue/80 underline transition-colors",children:t}),img:({src:e,alt:t})=>F.jsx(js,{src:e||"",alt:t||""}),strong:({children:e})=>F.jsx("strong",{className:"font-bold text-white",children:e}),em:({children:e})=>F.jsx("em",{className:"italic text-white",children:e}),hr:()=>F.jsx("hr",{className:"my-12 border-0 h-1 bg-argentinian_blue"})},children:Us})}),F.jsxs("footer",{className:"text-center w-full text-neutral-500 text-sm p-4 absolute bottom-0 left-1/2 -translate-x-1/2",children:["© ",new Date().getFullYear()," Nathan Alspaugh"]})]})}function js({src:e,alt:t}){const[n,r]=jt.useState(!0),[i,o]=jt.useState(!1);return F.jsxs("div",{className:"relative w-full max-w-2xl mx-auto my-6",children:[n&&F.jsx("div",{className:"absolute inset-0 bg-gray-800/50 rounded-lg animate-pulse"}),i&&F.jsx("div",{className:"w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center",children:F.jsx("p",{className:"text-gray-400",children:"Failed to load image"})}),!i&&F.jsx("img",{src:e,alt:t,loading:"lazy",decoding:"async",onLoad:()=>r(!1),onError:()=>{r(!1),o(!0)},className:`w-full rounded-lg shadow-lg transition-opacity duration-300 ${n?"opacity-0":"opacity-100"}`})]})}export{Vs as default};

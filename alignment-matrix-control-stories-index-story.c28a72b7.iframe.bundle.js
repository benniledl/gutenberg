"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[4317],{"./node_modules/@ariakit/react-core/esm/__chunks/BNUFNEVY.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>CompositeRow});var _IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/IB7YUKH5.js"),_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js"),_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useCompositeRow=(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__.Bi)((_a=>{var _b=_a,{store,"aria-setsize":ariaSetSize,"aria-posinset":ariaPosInSet}=_b,props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.S0)(_b,["store","aria-setsize","aria-posinset"]);const context=(0,_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_4__.$)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__.kG)(store,!1);const id=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__.Me)(props.id),baseElement=store.useState((state=>state.baseElement||void 0)),providerValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({id,baseElement,ariaSetSize,ariaPosInSet})),[id,baseElement,ariaSetSize,ariaPosInSet]);return props=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_4__.Ft.Provider,{value:providerValue,children:element})),[providerValue]),props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({id},props)})),CompositeRow=(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__.LM)((props=>{const htmlProps=useCompositeRow(props);return(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__.az)("div",htmlProps)}))},"./packages/components/src/h-stack/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/context/context-connect.ts"),_view__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/view/component.tsx"),_hook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/h-stack/hook.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedHStack(props,forwardedRef){const hStackProps=(0,_hook__WEBPACK_IMPORTED_MODULE_2__.R)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_view__WEBPACK_IMPORTED_MODULE_3__.Z,{...hStackProps,ref:forwardedRef})}UnconnectedHStack.displayName="UnconnectedHStack";const HStack=(0,_context__WEBPACK_IMPORTED_MODULE_4__.Iq)(UnconnectedHStack,"HStack"),__WEBPACK_DEFAULT_EXPORT__=HStack;try{HStack.displayName="HStack",HStack.__docgenInfo={description:"`HStack` (Horizontal Stack) arranges child elements in a horizontal line.\n\n`HStack` can render anything inside.\n\n```jsx\nimport {\n\t__experimentalHStack as HStack,\n\t__experimentalText as Text,\n} from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<HStack>\n\t\t\t<Text>Code</Text>\n\t\t\t<Text>is</Text>\n\t\t\t<Text>Poetry</Text>\n\t\t</HStack>\n\t);\n}\n```",displayName:"HStack",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},direction:{defaultValue:{value:"'row'"},description:"The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",name:"direction",required:!1,type:{name:"FlexDirection"}},wrap:{defaultValue:{value:"false"},description:"Determines if children should wrap.",name:"wrap",required:!1,type:{name:"boolean"}},isReversed:{defaultValue:null,description:"@deprecated",name:"isReversed",required:!1,type:{name:"boolean"}},justify:{defaultValue:{value:"'space-between'"},description:"Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",name:"justify",required:!1,type:{name:"JustifyContent"}},expanded:{defaultValue:{value:"true"},description:"Expands to the maximum available width (if horizontal) or height (if\nvertical).",name:"expanded",required:!1,type:{name:"boolean"}},alignment:{defaultValue:{value:"'edge'"},description:"Determines how the child elements are aligned.\n\n* `top`: Aligns content to the top.\n* `topLeft`: Aligns content to the top/left.\n* `topRight`: Aligns content to the top/right.\n* `left`: Aligns content to the left.\n* `center`: Aligns content to the center.\n* `right`: Aligns content to the right.\n* `bottom`: Aligns content to the bottom.\n* `bottomLeft`: Aligns content to the bottom/left.\n* `bottomRight`: Aligns content to the bottom/right.\n* `edge`: Justifies content to be evenly spread out up to the main axis edges of the container.\n* `stretch`: Stretches content to the cross axis edges of the container.",name:"alignment",required:!1,type:{name:'"end" | "start" | (string & {}) | "baseline" | "inherit" | "initial" | "left" | "center" | "right" | "-moz-initial" | "revert" | "revert-layer" | "unset" | "stretch" | "flex-end" | ... 10 more ... | "self-start"'}},spacing:{defaultValue:{value:"2"},description:"The amount of space between each child element. Spacing in between each child can be adjusted by using `spacing`.\nThe value of `spacing` works as a multiplier to the library's grid system (base of `4px`).",name:"spacing",required:!1,type:{name:"Width<string | number>"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/h-stack/component.tsx#HStack"]={docgenInfo:HStack.__docgenInfo,name:"HStack",path:"packages/components/src/h-stack/component.tsx#HStack"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/h-stack/hook.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useHStack});__webpack_require__("./node_modules/react/index.js");var use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/flex/flex-item/component.tsx"),hook=__webpack_require__("./packages/components/src/flex/flex/hook.ts"),values=__webpack_require__("./packages/components/src/utils/values.js");const H_ALIGNMENTS={bottom:{align:"flex-end",justify:"center"},bottomLeft:{align:"flex-end",justify:"flex-start"},bottomRight:{align:"flex-end",justify:"flex-end"},center:{align:"center",justify:"center"},edge:{align:"center",justify:"space-between"},left:{align:"center",justify:"flex-start"},right:{align:"center",justify:"flex-end"},stretch:{align:"stretch"},top:{align:"flex-start",justify:"center"},topLeft:{align:"flex-start",justify:"flex-start"},topRight:{align:"flex-start",justify:"flex-end"}},V_ALIGNMENTS={bottom:{justify:"flex-end",align:"center"},bottomLeft:{justify:"flex-end",align:"flex-start"},bottomRight:{justify:"flex-end",align:"flex-end"},center:{justify:"center",align:"center"},edge:{justify:"space-between",align:"center"},left:{justify:"center",align:"flex-start"},right:{justify:"center",align:"flex-end"},stretch:{align:"stretch"},top:{justify:"flex-start",align:"center"},topLeft:{justify:"flex-start",align:"flex-start"},topRight:{justify:"flex-start",align:"flex-end"}};var get_valid_children=__webpack_require__("./packages/components/src/utils/get-valid-children.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function useHStack(props){const{alignment="edge",children,direction,spacing=2,...otherProps}=(0,use_context_system.y)(props,"HStack"),align=function getAlignmentProps(alignment,direction="row"){if(!(0,values.Jf)(alignment))return{};const props="column"===direction?V_ALIGNMENTS:H_ALIGNMENTS;return alignment in props?props[alignment]:{align:alignment}}(alignment,direction),propsForFlex={children:(0,get_valid_children.W)(children).map(((child,index)=>{if((0,context_connect.H)(child,["Spacer"])){const childElement=child,_key=childElement.key||`hstack-${index}`;return(0,jsx_runtime.jsx)(component.Z,{isBlock:!0,...childElement.props},_key)}return child})),direction,justify:"center",...align,...otherProps,gap:spacing};return(0,hook.k)(propsForFlex)}try{useHStack.displayName="useHStack",useHStack.__docgenInfo={description:"",displayName:"useHStack",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},direction:{defaultValue:{value:"'row'"},description:"The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",name:"direction",required:!1,type:{name:"FlexDirection"}},wrap:{defaultValue:{value:"false"},description:"Determines if children should wrap.",name:"wrap",required:!1,type:{name:"boolean"}},isReversed:{defaultValue:null,description:"@deprecated",name:"isReversed",required:!1,type:{name:"boolean"}},justify:{defaultValue:{value:"'space-between'"},description:"Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",name:"justify",required:!1,type:{name:"JustifyContent"}},expanded:{defaultValue:{value:"true"},description:"Expands to the maximum available width (if horizontal) or height (if\nvertical).",name:"expanded",required:!1,type:{name:"boolean"}},alignment:{defaultValue:{value:"'edge'"},description:"Determines how the child elements are aligned.\n\n* `top`: Aligns content to the top.\n* `topLeft`: Aligns content to the top/left.\n* `topRight`: Aligns content to the top/right.\n* `left`: Aligns content to the left.\n* `center`: Aligns content to the center.\n* `right`: Aligns content to the right.\n* `bottom`: Aligns content to the bottom.\n* `bottomLeft`: Aligns content to the bottom/left.\n* `bottomRight`: Aligns content to the bottom/right.\n* `edge`: Justifies content to be evenly spread out up to the main axis edges of the container.\n* `stretch`: Stretches content to the cross axis edges of the container.",name:"alignment",required:!1,type:{name:'"end" | "start" | (string & {}) | "baseline" | "inherit" | "initial" | "left" | "center" | "right" | "-moz-initial" | "revert" | "revert-layer" | "unset" | "stretch" | "flex-end" | ... 10 more ... | "self-start"'}},spacing:{defaultValue:{value:"2"},description:"The amount of space between each child element. Spacing in between each child can be adjusted by using `spacing`.\nThe value of `spacing` works as a multiplier to the library's grid system (base of `4px`).",name:"spacing",required:!1,type:{name:"Width<string | number>"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/h-stack/hook.tsx#useHStack"]={docgenInfo:useHStack.__docgenInfo,name:"useHStack",path:"packages/components/src/h-stack/hook.tsx#useHStack"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/utils/get-valid-children.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function getValidChildren(children){return"string"==typeof children?[children]:_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./packages/components/src/utils/reduce-motion.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function reduceMotion(prop="transition"){let style;switch(prop){case"transition":style="transition-duration: 0ms;";break;case"animation":style="animation-duration: 1ms;";break;default:style="\n\t\t\t\tanimation-duration: 1ms;\n\t\t\t\ttransition-duration: 0ms;\n\t\t\t"}return`\n\t\t@media ( prefers-reduced-motion: reduce ) {\n\t\t\t${style};\n\t\t}\n\t`}__webpack_require__.d(__webpack_exports__,{r:()=>reduceMotion})},"./packages/components/src/utils/values.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isValueDefined(value){return null!=value}function isValueEmpty(value){const isEmptyString=""===value;return!isValueDefined(value)||isEmptyString}function getDefinedValue(values=[],fallbackValue){var _values$find;return null!==(_values$find=values.find(isValueDefined))&&void 0!==_values$find?_values$find:fallbackValue}__webpack_require__.d(__webpack_exports__,{Jf:()=>isValueDefined,Me:()=>getDefinedValue,Wx:()=>isValueEmpty,q9:()=>ensureNumber});const ensureNumber=value=>"string"==typeof value?(value=>parseFloat(value))(value):value},"./packages/icons/build-module/icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function Icon({icon,size=24,...props},ref){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon,{width:size,height:size,...props,ref})}))},"./packages/components/src/alignment-matrix-control/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,IconSubcomponent:()=>IconSubcomponent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),icon=__webpack_require__("./packages/icons/build-module/icon/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),QZLXIDNP=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/QZLXIDNP.js"),tooltip=__webpack_require__("./packages/components/src/tooltip/index.tsx"),component=__webpack_require__("./packages/components/src/visually-hidden/component.tsx");const GRID=[["top left","top center","top right"],["center left","center center","center right"],["bottom left","bottom center","bottom right"]],ALIGNMENT_LABEL={"top left":(0,build_module.__)("Top Left"),"top center":(0,build_module.__)("Top Center"),"top right":(0,build_module.__)("Top Right"),"center left":(0,build_module.__)("Center Left"),"center center":(0,build_module.__)("Center"),center:(0,build_module.__)("Center"),"center right":(0,build_module.__)("Center Right"),"bottom left":(0,build_module.__)("Bottom Left"),"bottom center":(0,build_module.__)("Bottom Center"),"bottom right":(0,build_module.__)("Bottom Right")},ALIGNMENTS=GRID.flat();function normalize(value){const normalized="center"===value?"center center":value,transformed=normalized?.replace("-"," ");return ALIGNMENTS.includes(transformed)?transformed:void 0}function getItemId(prefixId,value){const normalized=normalize(value);if(!normalized)return;return`${prefixId}-${normalized.replace(" ","-")}`}function getItemValue(prefixId,id){const value=id?.replace(prefixId+"-","");return normalize(value)}function getAlignmentIndex(alignment="center"){const normalized=normalize(alignment);if(!normalized)return;const index=ALIGNMENTS.indexOf(normalized);return index>-1?index:void 0}try{getItemId.displayName="getItemId",getItemId.__docgenInfo={description:"Creates an item ID based on a prefix ID and an alignment value.",displayName:"getItemId",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/alignment-matrix-control/utils.tsx#getItemId"]={docgenInfo:getItemId.__docgenInfo,name:"getItemId",path:"packages/components/src/alignment-matrix-control/utils.tsx#getItemId"})}catch(__react_docgen_typescript_loader_error){}try{getItemValue.displayName="getItemValue",getItemValue.__docgenInfo={description:"Extracts an item value from its ID",displayName:"getItemValue",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/alignment-matrix-control/utils.tsx#getItemValue"]={docgenInfo:getItemValue.__docgenInfo,name:"getItemValue",path:"packages/components/src/alignment-matrix-control/utils.tsx#getItemValue"})}catch(__react_docgen_typescript_loader_error){}try{getAlignmentIndex.displayName="getAlignmentIndex",getAlignmentIndex.__docgenInfo={description:"Retrieves the alignment index from a value.",displayName:"getAlignmentIndex",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/alignment-matrix-control/utils.tsx#getAlignmentIndex"]={docgenInfo:getAlignmentIndex.__docgenInfo,name:"getAlignmentIndex",path:"packages/components/src/alignment-matrix-control/utils.tsx#getAlignmentIndex"})}catch(__react_docgen_typescript_loader_error){}var emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),reduce_motion=__webpack_require__("./packages/components/src/utils/reduce-motion.js");var _ref={name:"93uojk",styles:"border-radius:2px;box-sizing:border-box;direction:ltr;display:grid;grid-template-columns:repeat( 3, 1fr );outline:none"};const rootBase=()=>_ref,Root=(0,emotion_styled_base_browser_esm.Z)("div",{target:"ecapk1j3"})(rootBase,";border:1px solid transparent;cursor:pointer;grid-template-columns:auto;",(({size=92})=>(0,emotion_react_browser_esm.iv)("grid-template-rows:repeat( 3, calc( ",size,"px / 3 ) );width:",size,"px;","")),";"),Row=(0,emotion_styled_base_browser_esm.Z)("div",{target:"ecapk1j2"})({name:"1x5gbbj",styles:"box-sizing:border-box;display:grid;grid-template-columns:repeat( 3, 1fr )"}),pointBase=props=>(0,emotion_react_browser_esm.iv)("background:currentColor;box-sizing:border-box;display:grid;margin:auto;transition:all 120ms linear;",(0,reduce_motion.r)("transition")," ",(({isActive})=>{const boxShadow=isActive?`0 0 0 2px ${colors_values.D.gray[900]}`:null,pointColor=isActive?colors_values.D.gray[900]:colors_values.D.gray[400],pointColorHover=isActive?colors_values.D.gray[900]:colors_values.D.theme.accent;return(0,emotion_react_browser_esm.iv)("box-shadow:",boxShadow,";color:",pointColor,";*:hover>&{color:",pointColorHover,";}","")})(props),";",""),Point=(0,emotion_styled_base_browser_esm.Z)("span",{target:"ecapk1j1"})("height:6px;width:6px;",pointBase,";"),Cell=(0,emotion_styled_base_browser_esm.Z)("span",{target:"ecapk1j0"})({name:"rjf3ub",styles:"appearance:none;border:none;box-sizing:border-box;margin:0;display:flex;position:relative;outline:none;align-items:center;justify-content:center;padding:0"});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cell_Cell({id,isActive=!1,value,...props}){const tooltipText=ALIGNMENT_LABEL[value];return(0,jsx_runtime.jsx)(tooltip.ZP,{text:tooltipText,children:(0,jsx_runtime.jsxs)(QZLXIDNP.A,{id,render:(0,jsx_runtime.jsx)(Cell,{...props,role:"gridcell"}),children:[(0,jsx_runtime.jsx)(component.Z,{children:value}),(0,jsx_runtime.jsx)(Point,{isActive,role:"presentation"})]})})}cell_Cell.displayName="Cell";try{cell.displayName="cell",cell.__docgenInfo={description:"",displayName:"cell",props:{isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"enum",value:[{value:'"center"'},{value:'"bottom left"'},{value:'"bottom center"'},{value:'"bottom right"'},{value:'"top left"'},{value:'"top center"'},{value:'"top right"'},{value:'"center left"'},{value:'"center center"'},{value:'"center right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/alignment-matrix-control/cell.tsx#cell"]={docgenInfo:cell.__docgenInfo,name:"cell",path:"packages/components/src/alignment-matrix-control/cell.tsx#cell"})}catch(__react_docgen_typescript_loader_error){}var _7GBW5FLS=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/7GBW5FLS.js"),_7QTPYGNZ=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/7QTPYGNZ.js"),BNUFNEVY=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/BNUFNEVY.js");(0,emotion_styled_base_browser_esm.Z)("div",{target:"erowt52"})({name:"ogl07i",styles:"box-sizing:border-box;padding:2px"});const alignment_matrix_control_icon_styles_Root=(0,emotion_styled_base_browser_esm.Z)("div",{target:"erowt51"})("transform-origin:top left;height:100%;width:100%;",rootBase,";",(()=>(0,emotion_react_browser_esm.iv)({gridTemplateRows:"repeat( 3, calc( 21px / 3))",padding:1.5,maxHeight:24,maxWidth:24},"","")),";",(({disablePointerEvents})=>(0,emotion_react_browser_esm.iv)({pointerEvents:disablePointerEvents?"none":void 0},"","")),";"),alignment_matrix_control_icon_styles_Point=(0,emotion_styled_base_browser_esm.Z)("span",{target:"erowt50"})("height:2px;width:2px;",pointBase,";",(({isActive})=>{const boxShadow=isActive?"0 0 0 1px currentColor":null;return(0,emotion_react_browser_esm.iv)("box-shadow:",boxShadow,";color:currentColor;*:hover>&{color:currentColor;}","")}),";"),alignment_matrix_control_icon_styles_Cell=Cell;function AlignmentMatrixControlIcon({className,disablePointerEvents=!0,size=24,style={},value="center",...props}){const alignIndex=getAlignmentIndex(value),scale=(size/24).toFixed(2),classes=classnames_default()("component-alignment-matrix-control-icon",className),styles={...style,transform:`scale(${scale})`};return(0,jsx_runtime.jsx)(alignment_matrix_control_icon_styles_Root,{...props,className:classes,disablePointerEvents,role:"presentation",style:styles,children:ALIGNMENTS.map(((align,index)=>{const isActive=alignIndex===index;return(0,jsx_runtime.jsx)(alignment_matrix_control_icon_styles_Cell,{children:(0,jsx_runtime.jsx)(alignment_matrix_control_icon_styles_Point,{isActive})},align)}))})}AlignmentMatrixControlIcon.displayName="AlignmentMatrixControlIcon";const alignment_matrix_control_icon=AlignmentMatrixControlIcon;try{AlignmentMatrixControlIcon.displayName="AlignmentMatrixControlIcon",AlignmentMatrixControlIcon.__docgenInfo={description:"",displayName:"AlignmentMatrixControlIcon",props:{value:{defaultValue:{value:"center"},description:"The current alignment value.",name:"value",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"bottom left"'},{value:'"bottom center"'},{value:'"bottom right"'},{value:'"top left"'},{value:'"top center"'},{value:'"top right"'},{value:'"center left"'},{value:'"center center"'},{value:'"center right"'}]}},disablePointerEvents:{defaultValue:{value:"true"},description:"",name:"disablePointerEvents",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/alignment-matrix-control/icon.tsx#AlignmentMatrixControlIcon"]={docgenInfo:AlignmentMatrixControlIcon.__docgenInfo,name:"AlignmentMatrixControlIcon",path:"packages/components/src/alignment-matrix-control/icon.tsx#AlignmentMatrixControlIcon"})}catch(__react_docgen_typescript_loader_error){}function AlignmentMatrixControl({className,id,label=(0,build_module.__)("Alignment Matrix Control"),defaultValue="center center",value,onChange,width=92,...props}){const baseId=(0,use_instance_id.Z)(AlignmentMatrixControl,"alignment-matrix-control",id),compositeStore=(0,_7GBW5FLS.l)({defaultActiveId:getItemId(baseId,defaultValue),activeId:getItemId(baseId,value),setActiveId:nextActiveId=>{const nextValue=getItemValue(baseId,nextActiveId);nextValue&&onChange?.(nextValue)},rtl:(0,build_module.dZ)()}),activeId=compositeStore.useState("activeId"),classes=classnames_default()("component-alignment-matrix-control",className);return(0,jsx_runtime.jsx)(_7QTPYGNZ.b,{store:compositeStore,render:(0,jsx_runtime.jsx)(Root,{...props,"aria-label":label,className:classes,id:baseId,role:"grid",size:width}),children:GRID.map(((cells,index)=>(0,jsx_runtime.jsx)(BNUFNEVY.G,{render:(0,jsx_runtime.jsx)(Row,{role:"row"}),children:cells.map((cell=>{const cellId=getItemId(baseId,cell),isActive=cellId===activeId;return(0,jsx_runtime.jsx)(cell_Cell,{id:cellId,isActive,value:cell},cell)}))},index)))})}AlignmentMatrixControl.displayName="AlignmentMatrixControl",AlignmentMatrixControl.Icon=alignment_matrix_control_icon;const alignment_matrix_control=AlignmentMatrixControl;try{AlignmentMatrixControl.displayName="AlignmentMatrixControl",AlignmentMatrixControl.__docgenInfo={description:"\nAlignmentMatrixControl components enable adjustments to horizontal and vertical alignments for UI.\n\n```jsx\nimport { __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst Example = () => {\n\tconst [ alignment, setAlignment ] = useState( 'center center' );\n\n\treturn (\n\t\t<AlignmentMatrixControl\n\t\t\tvalue={ alignment }\n\t\t\tonChange={ setAlignment }\n\t\t/>\n\t);\n};\n```",displayName:"AlignmentMatrixControl",props:{label:{defaultValue:{value:"__( 'Alignment Matrix Control' )"},description:"Accessible label. If provided, sets the `aria-label` attribute of the\nunderlying `grid` widget.",name:"label",required:!1,type:{name:"string"}},defaultValue:{defaultValue:{value:"center center"},description:"If provided, sets the default alignment value.",name:"defaultValue",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"bottom left"'},{value:'"bottom center"'},{value:'"bottom right"'},{value:'"top left"'},{value:'"top center"'},{value:'"top right"'},{value:'"center left"'},{value:'"center center"'},{value:'"center right"'}]}},value:{defaultValue:null,description:"The current alignment value.",name:"value",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"bottom left"'},{value:'"bottom center"'},{value:'"bottom right"'},{value:'"top left"'},{value:'"top center"'},{value:'"top right"'},{value:'"center left"'},{value:'"center center"'},{value:'"center right"'}]}},onChange:{defaultValue:null,description:"A function that receives the updated alignment value.",name:"onChange",required:!1,type:{name:"(newValue: AlignmentMatrixControlValue) => void"}},width:{defaultValue:{value:"92"},description:"If provided, sets the width of the control.",name:"width",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/alignment-matrix-control/index.tsx#AlignmentMatrixControl"]={docgenInfo:AlignmentMatrixControl.__docgenInfo,name:"AlignmentMatrixControl",path:"packages/components/src/alignment-matrix-control/index.tsx#AlignmentMatrixControl"})}catch(__react_docgen_typescript_loader_error){}try{Icon.displayName="AlignmentMatrixControl.Icon",Icon.__docgenInfo={description:"",displayName:"AlignmentMatrixControl.Icon",props:{value:{defaultValue:{value:"center"},description:"The current alignment value.",name:"value",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"bottom left"'},{value:'"bottom center"'},{value:'"bottom right"'},{value:'"top left"'},{value:'"top center"'},{value:'"top right"'},{value:'"center left"'},{value:'"center center"'},{value:'"center right"'}]}},disablePointerEvents:{defaultValue:{value:"true"},description:"",name:"disablePointerEvents",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/alignment-matrix-control/index.tsx#AlignmentMatrixControl.Icon"]={docgenInfo:AlignmentMatrixControl.Icon.__docgenInfo,name:"AlignmentMatrixControl.Icon",path:"packages/components/src/alignment-matrix-control/index.tsx#AlignmentMatrixControl.Icon"})}catch(__react_docgen_typescript_loader_error){}var h_stack_component=__webpack_require__("./packages/components/src/h-stack/component.tsx");const index_story={title:"Components (Experimental)/AlignmentMatrixControl",component:alignment_matrix_control,subcomponents:{"AlignmentMatrixControl.Icon":alignment_matrix_control.Icon},argTypes:{onChange:{control:{type:null}},value:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/alignment-matrix-control",actions:{argTypesRegex:"^on.*"},controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Template=({defaultValue,onChange,...props})=>{const[value,setValue]=(0,react.useState)();return(0,jsx_runtime.jsx)(alignment_matrix_control,{...props,onChange:(...changeArgs)=>{setValue(...changeArgs),onChange?.(...changeArgs)},value})};Template.displayName="Template";const Default=Template.bind({}),IconSubcomponent=()=>(0,jsx_runtime.jsxs)(h_stack_component.Z,{justify:"flex-start",children:[(0,jsx_runtime.jsx)(icon.Z,{icon:(0,jsx_runtime.jsx)(alignment_matrix_control.Icon,{size:24,value:"top left"})}),(0,jsx_runtime.jsx)(icon.Z,{icon:(0,jsx_runtime.jsx)(alignment_matrix_control.Icon,{size:24,value:"center center"})})]});IconSubcomponent.displayName="IconSubcomponent",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  defaultValue,\n  onChange,\n  ...props\n}) => {\n  const [value, setValue] = useState<AlignmentMatrixControlProps['value']>();\n  return <AlignmentMatrixControl {...props} onChange={(...changeArgs) => {\n    setValue(...changeArgs);\n    onChange?.(...changeArgs);\n  }} value={value} />;\n}",...Default.parameters?.docs?.source}}},IconSubcomponent.parameters={...IconSubcomponent.parameters,docs:{...IconSubcomponent.parameters?.docs,source:{originalSource:'() => {\n  return <HStack justify="flex-start">\n            <Icon icon={<AlignmentMatrixControl.Icon size={24} value="top left" />} />\n            <Icon icon={<AlignmentMatrixControl.Icon size={24} value="center center" />} />\n        </HStack>;\n}',...IconSubcomponent.parameters?.docs?.source}}};const __namedExportsOrder=["Default","IconSubcomponent"]}}]);
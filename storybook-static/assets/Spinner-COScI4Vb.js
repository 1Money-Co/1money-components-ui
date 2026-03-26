import{j as k,c as h}from"./classnames-DVmDMOck.js";import{r as e}from"./index-LFmgH05F.js";import{d as v,P as x,C as P,f as S,j as N}from"./componentbase.esm-B4Oni7AW.js";var E={root:"p-progress-spinner",spinner:"p-progress-spinner-svg",circle:"p-progress-spinner-circle"},b=`
@layer primereact {
    .p-progress-spinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }
    
    .p-progress-spinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }
    
    .p-progress-spinner-svg {
        animation: p-progress-spinner-rotate 2s linear infinite;
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    
    .p-progress-spinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: #d62d20;
        animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }
}

@keyframes p-progress-spinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes p-progress-spinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}

@keyframes p-progress-spinner-color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #008744;
    }
    80%,
    90% {
        stroke: #ffa700;
    }
}
`,C={spinner:function(r){var s=r.props;return{animationDuration:s.animationDuration}}},a=P.extend({defaultProps:{__TYPE:"ProgressSpinner",id:null,style:null,className:null,strokeWidth:"2",fill:"none",animationDuration:"2s",children:void 0},css:{classes:E,styles:b,inlineStyles:C}}),m=e.memo(e.forwardRef(function(t,r){var s=v(),i=e.useContext(x),n=a.getProps(t,i),c=e.useRef(null),o=a.setMetaData({props:n}),p=o.ptm,l=o.cx,d=o.sx,f=o.isUnstyled;S(a.css.styles,f,{name:"progressspinner"}),e.useImperativeHandle(r,function(){return{props:n,getElement:function(){return c.current}}});var g=s({id:n.id,ref:c,style:n.style,className:N(n.className,l("root")),role:"progressbar","aria-busy":!0},a.getOtherProps(n),p("root")),u=s({className:l("spinner"),viewBox:"25 25 50 50",style:d("spinner")},p("spinner")),y=s({className:l("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,strokeWidth:n.strokeWidth,strokeMiterlimit:"10"},p("circle"));return e.createElement("div",g,e.createElement("svg",u,e.createElement("circle",y)))}));m.displayName="ProgressSpinner";const R=t=>{const{className:r,prefixCls:s="spinner",...i}=t,n=h(s);return k.jsx(m,{...i,className:n(void 0,r)})},M=e.memo(R);export{M as S,R as a};

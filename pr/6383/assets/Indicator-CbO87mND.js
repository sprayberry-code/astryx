import{i as e}from"./preload-helper-CT_b8DTk.js";import{F as t,I as n,O as r,a as i,p as a}from"./ime-B2gVvZm0.js";import{B as o,O as s,i as c,n as l,t as u}from"./utils-SyZNzL9F.js";import{t as d}from"./jsx-runtime-DqZldVDK.js";import{a as f,m as p,n as m,p as h}from"./useTheme-DSFSoLLi.js";import{n as g,t as _}from"./Icon-LMTcUKwK.js";function v({state:e,size:t=`md`,isDisabled:i=!1,children:a,ref:c,className:l,style:u,xstyle:d,...f}){let p=e===`checked`,m=e===`indeterminate`,h=p||m;return(0,y.jsx)(`span`,{...f,ref:c,"aria-hidden":`true`,...o(r(`checkbox-indicator`,{size:t,checked:p?`checked`:m?`indeterminate`:null,disabled:i?`disabled`:null},{legacyNames:[`checkbox`]}),n(x.box,S[t],h?x.checked:x.unchecked,i&&x.disabled,i&&!h&&x.disabledUnchecked,d),l,u),children:s(a)?a:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`svg`,{viewBox:`0 0 10 10`,...o(r(`checkbox-indicator-check`,{size:t}),n(x.checkmark,C[t],p&&x.checkmarkVisible)),children:(0,y.jsx)(`path`,{d:`M8.5 2.5L4 7.5L1.5 5`,stroke:`currentColor`,strokeWidth:`1.5`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,y.jsx)(`span`,{...o(r(`checkbox-indicator-dash`,{size:t}),n(x.indeterminateMark,w[t],m&&x.indeterminateMarkVisible))})]})})}var y,b,x,S,C,w,T=e((()=>{t(),a(),u(),l(),y=d(),`${i[`--color-overlay-pressed`]}${i[`--color-overlay-pressed`]}`,b=`color-mix(in srgb, ${i[`--color-overlay-pressed`]} calc(${c[`--astryx-press-alpha`]} * 100%), transparent)`,`${b}${b}`,x={box:{kB7OPa:`astryx9f619`,k1xSpc:`astryx78zum5`,kGNEyG:`astryx6s0dn4`,kjj79g:`astryxl56j7k`,kmuXW:`astryx2lah0s`,kMzoRj:`astryx1litavf`,ksu8eU:`astryx1y0btm7`,kaIpWk:`astryxx3sua9`,k1ekBW:`astryxts7igz`,kIyJzY:`astryxuedmi6 astryx12w9bfk`,kAMwcw:`astryxlr8y92`,kKwaWg:`astryx1f54xw4 astryxnriw37 astryxztr0xp astryxhc2aa9`,$$css:!0},unchecked:{kMwMTN:`astryxqwr325`,kVAM5u:`astryxvy26l8 astryxvr0s6v`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kWkggS:`astryx10xzikg astryx1orexks`,$$css:!0},checked:{kMwMTN:`astryx17wrial`,kVAM5u:`astryxad5do astryx1nccqs`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kWkggS:`astryx1ewilqj astryxe50u90`,$$css:!0},disabled:{kSiTet:`astryxbyyjgo`,kVAM5u:`astryx14i3s5s astryxzl8x75`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0},disabledUnchecked:{kWkggS:`astryxwmxj5m astryxejnnay`,$$css:!0},checkmark:{k1xSpc:`astryx1s85apg`,kMwMTN:`astryx17wrial astryxs5hli`,$$css:!0},checkmarkVisible:{k1xSpc:`astryx1lliihq`,$$css:!0},indeterminateMark:{k1xSpc:`astryx1s85apg`,kWkggS:`astryx1azo05 astryxwvh9j7`,kaIpWk:`astryxjspbzw`,$$css:!0},indeterminateMarkVisible:{k1xSpc:`astryx1lliihq`,$$css:!0}},S={sm:{kzqmXN:`astryxw4jnvo`,kZKoxP:`astryx1qx5ct2`,$$css:!0},md:{kzqmXN:`astryxvy4d1p`,kZKoxP:`astryxxk0z11`,$$css:!0}},C={sm:{kzqmXN:`astryxsmyaan`,kZKoxP:`astryx1kpxq89`,$$css:!0},md:{kzqmXN:`astryx6jxa94`,kZKoxP:`astryx1v9usgg`,$$css:!0}},w={sm:{kzqmXN:`astryx1fsd2vl`,kZKoxP:`astryx36qwtl`,$$css:!0},md:{kzqmXN:`astryxsmyaan`,kZKoxP:`astryx36qwtl`,$$css:!0}},v.displayName=`CheckboxIndicator`,v.__docgenInfo={description:`The default checkbox visual: a square box with a checkmark or an
indeterminate bar.

Decorative and non-interactive — it renders \`aria-hidden\` and owns no input,
role, or focus behavior. The focus ring lives on the owner's control wrapper
(see CheckboxInput), so a theme that replaces this component keeps a visible
focus indicator for free. Themes replace it wholesale through
\`defineTheme({indicators: {checkbox: MyCheckbox}})\`, or restyle it through
the \`checkbox\` theme target like any other component.

@example
\`\`\`
<CheckboxIndicator state="indeterminate" size="sm" />
\`\`\``,methods:[],displayName:`CheckboxIndicator`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:`Ref forwarded to the indicator's root element.`},state:{required:!0,tsType:{name:`IndicatorFamilyMap[F]`,raw:`IndicatorFamilyMap[F]`},description:`Which state to draw. The state space is fixed by the family.`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:`Control size.
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the owning control is disabled. Purely visual — the owner still
owns the actual disabled semantics.
@default false`,defaultValue:{value:`false`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Content rendered inside the indicator chrome *instead of* the state mark.
CheckboxInput uses this to show a loading Spinner inside the box while a
change action is pending.`}},composes:[`Omit`]}}));function E({state:e,size:t=`md`,isDisabled:r=!1,children:i,ref:a,className:c,style:l,xstyle:u,...d}){let f=e===`checked`;return s(i)?(0,D.jsx)(`span`,{...d,ref:a,"aria-hidden":`true`,...o(n(k.slot,r?k.disabled:k.enabled,u),c,l),children:i}):f?(0,D.jsx)(_,{...d,"aria-hidden":`true`,icon:`check`,size:O[t],color:r?`disabled`:`accent`,xstyle:u,className:c,style:l}):null}var D,O,k,A=e((()=>{t(),g(),u(),D=d(),O={sm:`sm`,md:`sm`},k={slot:{k1xSpc:`astryx3nfvp2`,kGNEyG:`astryx6s0dn4`,kjj79g:`astryxl56j7k`,kmuXW:`astryx2lah0s`,kzqmXN:`astryxcdlrvm`,kZKoxP:`astryx1l36t39`,$$css:!0},enabled:{kMwMTN:`astryxqwr325`,$$css:!0},disabled:{kMwMTN:`astryxqa6c3m`,$$css:!0}},E.displayName=`CheckIndicator`,E.__docgenInfo={description:`The default single-selection mark: a checkmark when chosen, nothing when not.

Decorative and non-interactive — it renders \`aria-hidden\` and owns no role,
state, or focus behavior; the option or row that hosts it keeps all of that.

@example
\`\`\`
<CheckIndicator state={isSelected ? 'checked' : 'unchecked'} size="sm" />
\`\`\`

Swap every single-selection mark for a radio:

@example
\`\`\`
import {RadioIndicator} from '@astryxdesign/core/Indicator';
defineTheme({name: 'brand', indicators: {check: RadioIndicator}});
\`\`\``,methods:[],displayName:`CheckIndicator`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:`Ref forwarded to the indicator's root element.`},state:{required:!0,tsType:{name:`IndicatorFamilyMap[F]`,raw:`IndicatorFamilyMap[F]`},description:`Which state to draw. The state space is fixed by the family.`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:`Control size.
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the owning control is disabled. Purely visual — the owner still
owns the actual disabled semantics.
@default false`,defaultValue:{value:`false`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Content rendered inside the indicator chrome *instead of* the state mark.
CheckboxInput uses this to show a loading Spinner inside the box while a
change action is pending.`}},composes:[`Omit`]}}));function j({state:e,size:t=`md`,isDisabled:i=!1,children:a,ref:c,className:l,style:u,xstyle:d,...f}){let p=e!==`unchecked`;return(0,M.jsx)(`span`,{...f,ref:c,"aria-hidden":`true`,...o(r(`radio-indicator`,{size:t,checked:p?`checked`:null,disabled:i?`disabled`:null},{legacyNames:[`radio`]}),n(P.circle,F[t],p?P.checked:P.unchecked,i&&P.disabled,i&&!p&&P.disabledUnchecked,d),l,u),children:s(a)?a:p&&(0,M.jsx)(`span`,{...o(r(`radio-indicator-dot`,{size:t},{legacyNames:[`radio-dot`]}),n(P.dot,I[t]))})})}var M,N,P,F,I,L=e((()=>{t(),a(),u(),l(),M=d(),`${i[`--color-overlay-pressed`]}${i[`--color-overlay-pressed`]}`,N=`color-mix(in srgb, ${i[`--color-overlay-pressed`]} calc(${c[`--astryx-press-alpha`]} * 100%), transparent)`,`${N}${N}`,P={circle:{kB7OPa:`astryx9f619`,k1xSpc:`astryx78zum5`,kGNEyG:`astryx6s0dn4`,kjj79g:`astryxl56j7k`,kmuXW:`astryx2lah0s`,kMzoRj:`astryx1litavf`,ksu8eU:`astryx1y0btm7`,kaIpWk:`astryxjspbzw`,k1ekBW:`astryxts7igz`,kIyJzY:`astryxuedmi6 astryx12w9bfk`,kAMwcw:`astryxlr8y92`,kKwaWg:`astryx1f54xw4 astryxnriw37 astryxztr0xp astryxhc2aa9`,$$css:!0},unchecked:{kVAM5u:`astryxvy26l8 astryxvr0s6v`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kWkggS:`astryx10xzikg astryx1orexks`,$$css:!0},checked:{kVAM5u:`astryxad5do astryx1nccqs`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kWkggS:`astryx1ewilqj astryxe50u90`,$$css:!0},disabled:{kSiTet:`astryxbyyjgo`,kVAM5u:`astryx14i3s5s astryxzl8x75`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0},disabledUnchecked:{kWkggS:`astryxwmxj5m astryxejnnay`,$$css:!0},dot:{kaIpWk:`astryxjspbzw`,kWkggS:`astryx1azo05 astryxwvh9j7`,$$css:!0}},F={sm:{kzqmXN:`astryxw4jnvo`,kZKoxP:`astryx1qx5ct2`,$$css:!0},md:{kzqmXN:`astryxvy4d1p`,kZKoxP:`astryxxk0z11`,$$css:!0}},I={sm:{kzqmXN:`astryx1xc55vz`,kZKoxP:`astryxdk7pt`,$$css:!0},md:{kzqmXN:`astryx1fsd2vl`,kZKoxP:`astryx170jfvy`,$$css:!0}},j.displayName=`RadioIndicator`,j.__docgenInfo={description:`The default radio visual: a circle with a filled inner dot when selected.

Decorative and non-interactive — it renders \`aria-hidden\` and owns no input,
role, or focus behavior. Themes replace it wholesale through
\`defineTheme({indicators: {radio: MyRadio}})\`, or restyle it through the
\`radio\` / \`radio-dot\` theme targets like any other component.

Unlike an icon, a radio draws in *both* states — an empty circle when
unchecked. That is what makes it usable as a selection indicator in
components whose default is "a checkmark when selected, nothing otherwise".

@example
\`\`\`
<RadioIndicator state="checked" size="md" />
\`\`\``,methods:[],displayName:`RadioIndicator`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:`Ref forwarded to the indicator's root element.`},state:{required:!0,tsType:{name:`IndicatorFamilyMap[F]`,raw:`IndicatorFamilyMap[F]`},description:`Which state to draw. The state space is fixed by the family.`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:`Control size.
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the owning control is disabled. Purely visual — the owner still
owns the actual disabled semantics.
@default false`,defaultValue:{value:`false`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Content rendered inside the indicator chrome *instead of* the state mark.
CheckboxInput uses this to show a loading Spinner inside the box while a
change action is pending.`}},composes:[`Omit`]}}));function R(e){return e==null?null:typeof e==`string`?h(e):e}function z(e){return R(e)?.indicators??null}function B(e,t){return z(t)?.[e]??V[e]}var V,H=e((()=>{p(),T(),A(),L(),V={check:E,checkbox:v,radio:j}}));function U(e){return B(e,f())}var W=e((()=>{m(),H()})),G,K=e((()=>{G={astryx1odsvnm:`astryx1odsvnm`,$$css:!0}})),q=e((()=>{T(),A(),L(),H(),W(),K()}));export{U as a,E as c,T as d,W as i,A as l,G as n,j as o,K as r,L as s,q as t,v as u};
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import TwoWayBindingComponent from './components/TwoWayBindingComponent.js';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './App.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'logo'?: boolean; } &
{ 'logo'?: boolean; } &
{ 'wrapper'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'HelloWorld', typeof __VLS_localComponents, "HelloWorld", "HelloWorld", "HelloWorld"> &
__VLS_WithComponent<'TwoWayBindingComponent', typeof __VLS_localComponents, "TwoWayBindingComponent", "twoWayBindingComponent", "two-way-binding-component"> &
__VLS_WithComponent<'TheWelcome', typeof __VLS_localComponents, "TheWelcome", "TheWelcome", "TheWelcome">;
__VLS_intrinsicElements.header; __VLS_intrinsicElements.header;
__VLS_intrinsicElements.img;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.HelloWorld;
// @ts-ignore
[HelloWorld,];
__VLS_components.TwoWayBindingComponent; __VLS_components.TwoWayBindingComponent; __VLS_components.twoWayBindingComponent; __VLS_components.twoWayBindingComponent; __VLS_components["two-way-binding-component"]; __VLS_components["two-way-binding-component"];
// @ts-ignore
[TwoWayBindingComponent, TwoWayBindingComponent,];
__VLS_intrinsicElements.main; __VLS_intrinsicElements.main;
__VLS_components.TheWelcome;
// @ts-ignore
[TheWelcome,];
{
const __VLS_0 = __VLS_intrinsicElements["header"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["img"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, alt: ("Vue logo"), class: ("logo"), src: ("./assets/logo.svg"), width: ("125"), height: ("125"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, alt: ("Vue logo"), class: ("logo"), src: ("./assets/logo.svg"), width: ("125"), height: ("125"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("wrapper"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("wrapper"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as 'HelloWorld' extends keyof typeof __VLS_ctx ? { 'HelloWorld': typeof __VLS_ctx.HelloWorld; } : typeof __VLS_resolvedLocalAndGlobalComponents).HelloWorld;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, msg: ("You did it!"), }));
({} as { HelloWorld: typeof __VLS_15; }).HelloWorld;
const __VLS_17 = __VLS_16({ ...{}, msg: ("You did it!"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, msg: ("You did it!"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
(__VLS_13.slots!).default;
}
{
const __VLS_20 = __VLS_intrinsicElements["div"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, id: ("app"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, id: ("app"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = ({} as 'TwoWayBindingComponent' extends keyof typeof __VLS_ctx ? { 'TwoWayBindingComponent': typeof __VLS_ctx.TwoWayBindingComponent; } : 'twoWayBindingComponent' extends keyof typeof __VLS_ctx ? { 'TwoWayBindingComponent': typeof __VLS_ctx.twoWayBindingComponent; } : 'two-way-binding-component' extends keyof typeof __VLS_ctx ? { 'TwoWayBindingComponent': (typeof __VLS_ctx)["two-way-binding-component"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).TwoWayBindingComponent;
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, }));
({} as { TwoWayBindingComponent: typeof __VLS_25; }).TwoWayBindingComponent;
({} as { TwoWayBindingComponent: typeof __VLS_25; }).TwoWayBindingComponent;
const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
}
(__VLS_23.slots!).default;
}
(__VLS_3.slots!).default;
}
{
const __VLS_30 = __VLS_intrinsicElements["main"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
const __VLS_35 = ({} as 'TheWelcome' extends keyof typeof __VLS_ctx ? { 'TheWelcome': typeof __VLS_ctx.TheWelcome; } : typeof __VLS_resolvedLocalAndGlobalComponents).TheWelcome;
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, }));
({} as { TheWelcome: typeof __VLS_35; }).TheWelcome;
const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
}
(__VLS_33.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["logo"];
__VLS_styleScopedClasses["wrapper"];
}
var __VLS_slots!: {};
return __VLS_slots;
}

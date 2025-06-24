import { createApp } from 'vue/dist/vue.esm-browser.js'
// import DButton from "./button/Button";
// import SFCButton from "./SFCButton.vue";
// import JSXButton from "./JSXButton";
import DeadmanUI from './entry'
createApp({
	template: `
    <div style="margin-bottom:20px;">
     	<DButton color="blue">蓝色按钮</DButton>
		<DButton color="green">绿色按钮</DButton>
		<DButton color="gray">灰色按钮</DButton>
		<DButton color="yellow">黄色按钮</DButton>
		<DButton color="red">红色按钮</DButton>
	</div>
	<div style="margin-bottom:20px;"
   >
       <DButton color="blue" plain>朴素按钮</DButton>
       <DButton color="green" plain>绿色按钮</DButton>
       <DButton color="gray" plain>灰色按钮</DButton>
       <DButton color="yellow" plain>黄色按钮</DButton>
       <DButton color="red" plain>红色按钮</DButton>
   </div>
   <div style="margin-bottom:20px;"
   >
       <DButton plain color="blue" size="small">小按钮</DButton>
       <DButton plain color="green">中按钮</DButton>
       <DButton plain color="gray" size="large">大按钮</DButton>
   </div>
    <div style="margin-bottom:20px;"
   >
       <DButton round color="blue" plain>朴素按钮</DButton>
       <DButton round color="green" plain>绿色按钮</DButton>
       <DButton round color="gray" plain>灰色按钮</DButton>
       <DButton round color="yellow" plain>黄色按钮</DButton>
       <DButton round color="red" plain>红色按钮</DButton>
   </div>
   <div style="margin-bottom:20px;"
   >
       <DButton round color="blue" plain icon="add">朴素按钮</DButton>
       <DButton round color="green" plain icon="check">绿色按钮</DButton>
       <DButton round color="gray" plain icon="message">灰色按钮</DButton>
       <DButton round color="yellow" plain icon="edit">黄色按钮</DButton>
       <DButton round color="red" plain icon="delete"></DButton>
   </div>
	`
})
	.use(DeadmanUI)
	.mount('#app')

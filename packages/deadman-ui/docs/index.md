# DeadmanUI

![https://github.com/ultraman-agul/DeadmanUI/actions/workflows/main.yml](https://github.com/ultraman-agul/DeadmanUI/actions/workflows/main.yml/badge.svg?branch=main)

## Button 按钮

常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

```vue
<template>
	<div style="margin-bottom:20px;">
		<DButton color="blue">主要按钮</DButton>
		<DButton color="green">绿色按钮</DButton>
		<DButton color="gray">灰色按钮</DButton>
		<DButton color="yellow">黄色按钮</DButton>
		<DButton color="red">红色按钮</DButton>
	</div>
	<div style="margin-bottom:20px;">
		<DButton color="blue" plain>朴素按钮</DButton>
		<DButton color="green" plain>绿色按钮</DButton>
		<DButton color="gray" plain>灰色按钮</DButton>
		<DButton color="yellow" plain>黄色按钮</DButton>
		<DButton color="red" plain>红色按钮</DButton>
	</div>
	<div style="margin-bottom:20px;">
		<DButton size="small" plain>小按钮</DButton>
		<DButton size="medium" plain>中按钮</DButton>
		<DButton size="large" plain>大按钮</DButton>
	</div>
	<div style="margin-bottom:20px;">
		<DButton color="blue" round plain icon="search">搜索按钮</DButton>
		<DButton color="green" round plain icon="edit">编辑按钮</DButton>
		<DButton color="gray" round plain icon="check">成功按钮</DButton>
		<DButton color="yellow" round plain icon="message">提示按钮</DButton>
		<DButton color="red" round plain icon="delete">删除按钮</DButton>
	</div>
	<div style="margin-bottom:20px;">
		<DButton color="blue" round plain icon="search"></DButton>
		<DButton color="green" round plain icon="edit"></DButton>
		<DButton color="gray" round plain icon="check"></DButton>
		<DButton color="yellow" round plain icon="message"></DButton>
		<DButton color="red" round plain icon="delete"></DButton>
	</div>
</template>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

```vue
<template>
	<div class="flex flex-row">
		<DButton icon="edit" plain></DButton>
		<DButton icon="delete" plain></DButton>
		<DButton icon="share" plain></DButton>
		<DButton round plain icon="search">搜索</DButton>
	</div>
</template>
```

:::

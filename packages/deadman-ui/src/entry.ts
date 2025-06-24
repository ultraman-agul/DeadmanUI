import { App } from 'vue'
import DButton from './button/Button'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton'

// 导出单独组件
export { DButton, SFCButton, JSXButton }

// 编写一个插件，实现一个install方法
export default {
	install(app: App): void {
		app.component(DButton.name, DButton)
		app.component(SFCButton.name, SFCButton)
		app.component(JSXButton.name, JSXButton)
	}
}

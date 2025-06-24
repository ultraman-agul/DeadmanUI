import { defineComponent, PropType } from 'vue'
import 'uno.css'

export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
export type ISize = 'small' | 'default' | 'large'
export type IIcon = 'add' | 'delete' | 'edit' | 'search' | 'check' | 'message' | 'star-off' | 'share'
export const props = {
	color: {
		type: String as PropType<IColor>,
		default: 'blue' // 设定默认颜色
	},
	plain: {
		type: Boolean,
		default: false
	},
	size: {
		type: String as PropType<ISize>,
		default: 'medium' // 设定默认大小
	},
	round: {
		type: Boolean,
		default: false
	},
	icon: {
		type: String as PropType<IIcon>,
		default: ''
	}
}
export default defineComponent({
	name: 'DButton',
	props,
	setup(props, { slots }) {
		const size = {
			small: {
				x: '2',
				y: '1',
				text: 'sm'
			},
			medium: {
				x: '3',
				y: '1.5',
				text: 'base'
			},
			large: {
				x: '4',
				y: '2',
				text: 'lg'
			}
		}
		return () => (
			<button
				class={`
		 py-${size[props.size].y} 
		 px-${size[props.size].x} 
		 text-${size[props.size].text}
		 rounded-${props.round ? 'full' : 'lg'}
		 mx-2
		 font-400
		 cursor-pointer
		 border-solid
		 border-1
		 shadow-md
		 bg-${props.color}-${props.plain ? '100' : '500'} 
		 hover:bg-${props.color}-${props.plain ? '300' : '600'} 
		 border-${props.color}-500
		 text-${props.plain ? props.color + '-500' : 'white'}
		 hover:text-white
		 `}
			>
				{props.icon && <i class={`i-ic-baseline-${props.icon} p2`}></i>}
				{slots.default ? slots.default() : ''}
			</button>
		)
	}
})

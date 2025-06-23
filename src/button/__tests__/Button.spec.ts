import Button from '../Button'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('Button', () => {
	test('mount @vue/test-utils', () => {
		const wrapper = shallowMount(Button, {
			props: { color: 'blue' },
			slots: { default: 'Button' }
		})

		expect(wrapper.text()).toBe('Button')
	})
})

describe('color', () => {
	test('red', () => {
		const wrapper = shallowMount(Button, { props: { color: 'red' } })

		expect(wrapper.classes()).toContain('bg-red-500')
	})

	test('gray', () => {
		const wrapper = shallowMount(Button, { props: { color: 'gray' } })

		expect(wrapper.classes()).toContain('bg-gray-500')
	})
})

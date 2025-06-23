// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import { defineConfig } from 'eslint/config' // 注意这里的变化
import eslintConfigPrettier from 'eslint-config-prettier/flat'
export default defineConfig([
	js.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
		languageOptions: {
			globals: globals.browser
		},
		rules: {
			'prettier/prettier': 'error'
		}
	},
	tseslint.configs.recommended,
	pluginVue.configs['flat/essential'],
	{
		files: ['**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser
			}
		}
	},
	{
		ignores: ['*.sh', 'node_modules', 'lib', 'coverage', '*.md', '*.scss', '*.woff', '*.ttf', 'src/index.ts', 'dist']
	},
	{
		plugins: {
			prettier
		}
		// extends: ['plugin:prettier/recommended'],
	},
	eslintConfigPrettier
])

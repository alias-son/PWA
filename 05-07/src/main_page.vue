<template lang="html">
	<div>
		<h2>Main Page!</h2>
		<button @click="fnSubPage">move to Sub Page(라우터 함수 사용)</button>
	</div>
</template>
<script>
export default {
	methods: {
		fnSubPage() {
			this.$router.push('/sub')
		}
	}
} </script>
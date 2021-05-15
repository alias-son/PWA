<template lang="html">
	<div>
		<h2>Sub Page!</h2>
		<button @click="fnMainPage">move to Main Page(라우터 함수 사용)</button>
	</div>
</template>
<script>
export default {
	methods: {
		fnMainPage() {
			this.$router.push('/main')
		}
	}
} </script>
<template>
	<div>
		<router-link to="/user/profile">profile</router-link>
		|
		<router-link to="/user/post">post</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
    export default {
        name: "NestRoutes"
    }
</script>

<style scoped>

</style>
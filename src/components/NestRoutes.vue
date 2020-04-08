<template>
	<div>
		<router-link to="/user/profile">profile</router-link>
		|
		<router-link to="/user/post">post</router-link>
		|
		<button @click="moveTo" style="width:90px;height: 40px;">Navigation</button>
		<router-view></router-view>
	</div>
</template>

<script>
    export default {
        name: "NestRoutes",
		data() {
            return {

			}
		},
		methods: {
            moveTo : function () {
                return this.$router.push('register')
            }
		}
    }
</script>

<style scoped>

</style>
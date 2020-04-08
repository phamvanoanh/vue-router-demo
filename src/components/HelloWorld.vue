<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<p>path {{this.$route.path}}</p>
		<!--use this.$route at the any component because don't not import router to all of component-->
	</div>
</template>

<script>
    export default {
        name: "HelloWorld",
        props: {
            msg: String
        },
		// watch: {
        //     // $route(to, from) {
		// 	// 	// to react to route changes, this is a the first method.
		// 	// }
		// },
		// beforeRouteUpdate(to, from , next) {
        //     // react to route changes... this is a the second method.
        //     // next()
		// }
		// // router is earlier defined, the higher priority

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>

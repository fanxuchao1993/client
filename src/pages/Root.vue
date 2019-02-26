<!--根视图-->
<template>
	<div>
		<Header/>
		<router-view/>
		<Footer/>
	</div>
</template>

<script>
	import Header from "@/components/header"
	import Footer from "@/components/footer"
	export default{
		name: 'Root',
		components: {
			Header,
			Footer
		},
	  	data () {
	    	return {
	    	}
	  	}
	}
</script>
<style>
</style>
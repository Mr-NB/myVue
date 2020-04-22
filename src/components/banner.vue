<template>
	<div class="banner">
		<img alt="Vue logo" v-for="(image,i) in bannerImageList" :key="i" :src="image" v-show="n==i" width="500" height="400"/>
		<div class="banner-circle">
			<ul>
				<li v-for="(dot,i) in bannerImageList" :key="i" :class="n==i?'selected':''"></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Banner',

	data() {
		return {
			timer: null,
			n: 0
		}
	},
	// props: ['bannerImageList'],
	props: {
		bannerImageList: {},
		obj: { id: Number, name: String }
	},

	methods: {
		play() {
			this.timer = setInterval(this.autoplay, 2000)
		},
		autoplay() {
			this.n++
			if (this.n == this.bannerImageList.length) {
				this.n = 0
			}
		}

		// deftory: function() {
		// 	clearInterval(this.timer)
		// }
	},
	mounted: function() {
		this.play()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.banner{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}

</style>

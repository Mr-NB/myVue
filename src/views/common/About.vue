<template>
	<div id="aboutPage">
		<el-row justify="center" type="flex" style="top:20px">
			<el-col :span="22">
				<img :src="baseUrl+i.filePath" v-for="(i, index) in quotes" :key="index" style="width:100%" />
			</el-col>
		</el-row>

		<el-row justify="center" type="flex" :gutter="50" style="top:40px">
			<el-col :span="5" v-for="(i, index) in imageList" :key="index">
				<el-card :body-style="{ padding: '0px' }">
					<a :href="i.toLink" v-if="i.toLink" target="_blank">
						<img :src="baseUrl+i.filePath" class="image" style="width:280px;height:280px" />
					</a>
					<img :src="baseUrl+i.filePath" class="image" v-else style="width:280px;height:280px" />
					<div style="padding: 14px;text-align:center">
						<span style="white-space:nowrap">
							<i class="iconfont icon-zan"></i>
							{{i.spec}}
							<i class="iconfont icon-zan"></i>
						</span>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>


<script>
export default {
	name: "About",
	data() {
		return {
			baseUrl: process.env.VUE_APP_STATIC_URL,
			currentDate: new Date(),
			imageList: [],
			quotes: []
		};
	},
	methods: {
		getImageList() {
			this.$http({
				url: "/about/get",
				method:"post",
				showMessage: false
			}).then(data => {
				this.imageList = data;
			});
		},

		getQuotes() {
			this.$http({
				url: "/common/get",
				method:"post",
				showMessage: false
			}).then(data => {
				this.quotes = data;
			});
		}
	},
	mounted() {
		this.getQuotes();
		this.getImageList();
	}
};
</script>

<style  scoped>
#aboutPage {
	height: 100%;
	width: 100%;
	/* align-items: center; */
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	/* 
	background-image: url("http://192.168.1.5:8083/static/images/About/quotes.png");
	background-repeat: no-repeat;
	background-size: cover; */
}

.time {
	font-size: 13px;
	color: #999;
}

.bottom {
	margin-top: 13px;
	line-height: 12px;
}

.button {
	padding: 0;
	float: right;
}

.image {
	width: 100%;
	display: block;
}

.clearfix:before,
.clearfix:after {
	display: table;
	content: "";
}

.clearfix:after {
	clear: both;
}
</style>
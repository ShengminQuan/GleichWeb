<style src="./HeroSlider.scss" module lang="scss"></style>
<script src="./HeroSlider.js"></script>

<template>
	<div>
		<!-- swiper -->
		<swiper :options="swiperOption" :class="$style.slider">
			<swiper-slide class="flex-center" :class="$style.slider1">
				<div :class="$style.sliderContent">
					<h2 class="heading-01">诚信为本<i class="icon-diamond"></i>专业服务</h2>
					<hr class="heading-01--underline"/>
					<p>得益于团队对澳洲金融行业的深刻理解，Gleich以顺应市场的理念和专业的服务态度，专注于澳洲的信贷市场，提供风险可控、回报可期的金融产品，为中国投资者的海外资产配置创造价值。
						通过公司平台，希望在可预见的未来，我们的员工、投资者、股东之间能够互相信任，平等合作，实现多方共赢、一同发展。
					</p>
				</div>
			</swiper-slide>
			<swiper-slide class="flex-center" :class="$style.slider2">
				<div :class="$style.sliderContent">
					<h2 class="heading-01">诚信为本<i class="icon-diamond"></i>专业服务</h2>
					<hr class="heading-01--underline"/>
					<p>得益于团队对澳洲金融行业的深刻理解，Gleich以顺应市场的理念和专业的服务态度，专注于澳洲的信贷市场，提供风险可控、回报可期的金融产品，为中国投资者的海外资产配置创造价值。
						通过公司平台，希望在可预见的未来，我们的员工、投资者、股东之间能够互相信任，平等合作，实现多方共赢、一同发展。
					</p>
				</div>
			</swiper-slide>
			<swiper-slide class="flex-center" :class="$style.slider3">
				<div :class="$style.sliderContent">
					<h2 class="heading-01">诚信为本<i class="icon-diamond"></i>专业服务</h2>
					<hr class="heading-01--underline"/>
					<p>得益于团队对澳洲金融行业的深刻理解，Gleich以顺应市场的理念和专业的服务态度，专注于澳洲的信贷市场，提供风险可控、回报可期的金融产品，为中国投资者的海外资产配置创造价值。
						通过公司平台，希望在可预见的未来，我们的员工、投资者、股东之间能够互相信任，平等合作，实现多方共赢、一同发展。
					</p>
				</div>
			</swiper-slide>
			<div :class="$style.pagination" class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>


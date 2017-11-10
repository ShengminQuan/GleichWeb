<style src="./BusinessSlider.scss" module lang="scss"></style>
<script src="./BusinessSlider.js"></script>

<template>
	<div>
		<div :class="$style.sliderWrap" class="main-container">
			<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="businessSwiper">
				<swiper-slide>
					<div :class="$style.content">
						<h2>商业抵押贷款</h2>
						<img src="~asset/image/business-1.jpg">
						<div :class="$style.description">
							<p>如果客户的商业公司需要购买资产或者现金流或者其他的商业投资，我们均可通过商业抵押贷款向客户提供资金。根据资产评估的价值，我们可提供不超过70%的资产价值的贷款，并注册为抵押资产的第一债权人。在获得公允评估价值后通常5-7个工作日可提供资金。</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div :class="$style.content">
						<h2>商业抵押贷款</h2>
						<img src="~asset/image/business-1.jpg">
						<div :class="$style.description">
							<p>如果客户的商业公司需要购买资产或者现金流或者其他的商业投资，我们均可通过商业抵押贷款向客户提供资金。根据资产评估的价值，我们可提供不超过70%的资产价值的贷款，并注册为抵押资产的第一债权人。在获得公允评估价值后通常5-7个工作日可提供资金。</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div :class="$style.content">
						<h2>商业抵押贷款</h2>
						<img src="~asset/image/business-1.jpg">
						<div :class="$style.description">
							<p>如果客户的商业公司需要购买资产或者现金流或者其他的商业投资，我们均可通过商业抵押贷款向客户提供资金。根据资产评估的价值，我们可提供不超过70%的资产价值的贷款，并注册为抵押资产的第一债权人。在获得公允评估价值后通常5-7个工作日可提供资金。</p>
						</div>
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>


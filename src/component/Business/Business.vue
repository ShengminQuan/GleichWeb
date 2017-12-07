<style src="./Business.scss" module lang="scss"></style>
<script src="./Business.js"></script>

<template>
	<div>
		<div :class="$style.wrap">
			<div class="container text-center summary-wrap" id="foundation">
				<h2 class="heading-01">{{ $t('business.title_1') }}</h2>
				<hr class="heading-01--underline"/>
				<p>{{ $t('business.desc_1') }}</p>
			</div>
			<Foundation />
			<div class="container text-center summary-wrap" id="business">
				<h2 class="heading-01">{{ $t('business.title_2') }}</h2>
				<hr class="heading-01--underline"/>
				<p>{{ $t('business.desc_2') }}</p>
			</div>
			<BusinessSlider />
		</div>
	</div>
</template>


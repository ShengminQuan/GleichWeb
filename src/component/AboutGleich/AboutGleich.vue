<style src="./AboutGleich.scss" module lang="scss"></style>
<script src="./AboutGleich.js"></script>

<template>
	<div id="about-us">
		<div class="container text-center summary-wrap">
			<h2 class="heading-01">{{ $t('about_us.title') }}</h2>
			<hr class="heading-01--underline"/>
			<p v-html="$t('about_us.desc')"></p>
		</div>
	</div>
</template>


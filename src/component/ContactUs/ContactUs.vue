<style src="./ContactUs.scss" module lang="scss"></style>
<script src="./ContactUs.js"></script>

<template>
	<div id="contact-us" >
		<div class="flex-center" :class="$style.contactUs">
			<div class="container">
				<h2 class="heading-01">{{ $t('contact_us.title') }}</h2>
				<hr class="heading-01--underline"/>
				<p>
					<b>{{ $t('contact_us.company') }}</b>
					{{ $t('contact_us.address') }}
				</p>
				<a href="mailto:info@gleich.com.au">info@gleich.com.au</a>
			</div>
		</div>
		<ContactMap />
	</div>
</template>


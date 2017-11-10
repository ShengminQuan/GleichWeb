<style src="./ContactUs.scss" module lang="scss"></style>
<script src="./ContactUs.js"></script>

<template>
	<div id="contact-us" >
		<div class="flex-center" :class="$style.contactUs">
			<div class="container">
				<h2 class="heading-01">联系我们</h2>
				<hr class="heading-01--underline"/>
				<p>
					<b>Gleich Pty Ltd</b>
					Suite 1322 Citigroup, 2 Park Street, Sydney NSW 2000, Australia
				</p>
				<a href="mailto:info@gleich.com.au">info@gleich.com.au</a>
			</div>
		</div>
		<ContactMap />
	</div>
</template>


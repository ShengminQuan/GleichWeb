<style src="./Business.scss" module lang="scss"></style>
<script src="./Business.js"></script>

<template>
	<div>
		<div class="container text-center summary-wrap">
			<p>作为新成立的公司，Gleich的核心团队由金融行业的精英组成，合计超过80年的行业经验，深刻理解澳洲金融，尤其是信贷市场的运作与规律，以及中国投资者的海外资产配置的诉求。</p>
		</div>
		<div :class="$style.wrap">
			<div class="container text-center summary-wrap">
				<h2 class="heading-01">Gleich 信贷基金</h2>
				<hr class="heading-01--underline"/>
				<p>Gleich 信贷基金旨在向投资者提供进入澳大利亚信贷市场的机会。基金专注于中/低风险的投资机会
					(通过商业地产抵押贷款), 注重于投资者的资本保值以及合理的固定收益。</p>
			</div>
			<Foundation />
			<div class="container text-center summary-wrap">
				<h2 class="heading-01">Gleich信贷业务</h2>
				<hr class="heading-01--underline"/>
				<p>Gleich信贷业务专注于商业抵押贷款，为客户的资金需求提供快速有效的融资解决方案。</p>
			</div>
			<BusinessSlider />
		</div>
	</div>
</template>


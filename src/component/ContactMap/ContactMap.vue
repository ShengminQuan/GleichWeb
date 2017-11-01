<style src="./ContactMap.scss" module lang="scss"></style>
<script src="./ContactMap.js"></script>

<template>
	<div>
		<baidu-map :class="$style.map" :center="{lng: 151.25829, lat: -33.889387}" :zoom="15">
			<bm-marker :position="{lng: 151.25829, lat: -33.889387}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
			</bm-marker>
		</baidu-map>
	</div>
</template>


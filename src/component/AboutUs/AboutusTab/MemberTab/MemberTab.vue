<style src="./MemberTab.scss" module lang="scss"></style>
<script src="./MemberTab.js"></script>

<template>
	<div :class="$style.sliderWrap" >
		<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="memberSwiper">
			<swiper-slide :class="$style.member">
				<div :class="$style.memberPic">
					<img src="~asset/image/member-01.jpg">
					<div :class="$style.memberInfo">
						<span :class="$style.memberName">Warren Muller</span>
						<span :class="$style.memberTitle">基金经理</span>
					</div>
				</div>
				<div :class="$style.memberDesc">
					<p>Warren Muller拥有开普敦大学的商学与会计学位，同时也是南非的注册会计师。作为公司的基金经理，拥有超过25年金融机构CFO
						的经验。他尤其擅长并购重组、资产管理等领域。加入Gleich之前，Warren是澳洲金融公司Mariner Financial的高管，负责管理超过12亿澳元的资产。他经常负责项目的审计团队及金融技术团队，对ASIC与ASX的监管等要求有丰富的知识与经验。
					</p>
				</div>
			</swiper-slide>

			<swiper-slide :class="$style.member">
				<div :class="$style.memberPic">
					<img src="~asset/image/member-02.jpg">
					<div :class="$style.memberInfo">
						<span :class="$style.memberName">Bright Zhou 周少明</span>
						<span :class="$style.memberTitle">运营负责人</span>
					</div>
				</div>
				<div :class="$style.memberDesc">
					<p>
						公司目前的运营负责人。Bright上世纪九十年代即在多个外企及世界500强担任高管，例如思科（Cisco 华南区销售总监)和微软（Microsoft大中华区员工内训总监、合作伙伴总监和战略投资者团队总监等）。他拥有杰出的大局观以及精细化的管理能力，确保公司的稳健运行。移民澳洲后，Bright曾担任澳洲的知名咨询公司ASK Solution的高级顾问。
					</p>
				</div>
			</swiper-slide>

			<swiper-slide :class="$style.member">
				<div :class="$style.memberPic">
					<img src="~asset/image/member-03.jpg">
					<div :class="$style.memberInfo">
						<span :class="$style.memberName">Michael Ivkovi</span>
						<span :class="$style.memberTitle">基金经理</span>
					</div>
				</div>
				<div :class="$style.memberDesc">
					<p>
						作为老牌的澳洲银行家，Michael Ivkovic在结构金融，基金管理和投资银行业务都拥有充分的经验与人脉。他曾担任Brick资产的董事长与NZI资产的执行董事长。1988年他创立了Australian Private Capital Advisory Services Group，在1998年通过管理层收购退出。他还是Paramount资产的董事，以及数家澳洲上市公司Harrington Limited, AFT Limited, Meridien Resources Limited, Meridien Capital Limited and Capital Mining Limited的董事。
					</p>
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>


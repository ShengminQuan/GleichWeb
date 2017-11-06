<style src="./AboutusTab.scss" module lang="scss"></style>
<script src="./AboutusTab.js"></script>

<template>
	<div :class="$style.wrap">
		<div class="main-container">
			<div :class="$style.tabNav">
				<div :class="$style.navActiveBackground" :style="{left: activeItem*152 + 'px'}"></div>
				<div :class="[$style.navItem, activeItem == 0 ? $style.navItemActive : '']" @click="switchTab(0)">
					<span>关于 Gleich</span>
				</div>
				<div :class="[$style.navItem, activeItem == 1 ? $style.navItemActive : '']" @click="switchTab(1)">
					<span>团队</span>
				</div>
				<div :class="[$style.navItem, activeItem == 2 ? $style.navItemActive : '']" @click="switchTab(2)">
					<span>业务准则</span>
				</div>
			</div>
			<div :class="$style.tabContent" class="flex-center">
				<div v-if="activeItem == 0" :class="[$style.tabItem, $style.about]">
					<div :class="$style.aboutNav" class="clearfix">
						<div :class="[$style.aboutNavItem, currentAboutItem == 0 ? $style.active : '' ]"
						     @click="switchAboutTab(0)">
							<img src="~asset/image/icon-professional.png">
							专业
						</div>
						<div :class="[$style.aboutNavItem, currentAboutItem == 1 ? $style.active  : '' ]"
						     @click="switchAboutTab(1)">
							<img src="~asset/image/icon-integrity.png">
							诚信
						</div>
						<div :class="[$style.aboutNavItem, currentAboutItem == 2 ? $style.active  : '' ]"
						     @click="switchAboutTab(2)">
							<img src="~asset/image/icon-relationship.png">
							关系
						</div>
						<div :class="$style.aboutNavBar">
							<i :class="currentAboutItem == 0 ? $style.active  : ''"
							   @click="switchAboutTab(0)"></i>
							<i :class="currentAboutItem == 1? $style.active  : ''"
							   @click="switchAboutTab(1)"></i>
							<i :class="currentAboutItem == 2 ? $style.active  : ''"
							   @click="switchAboutTab(2)"></i>
						</div>
					</div>
					<div :class="$style.aboutContent">
						<p v-if="currentAboutItem == 0" :class="$style.aboutContentText">Gleich
							配备各类金融专业人才，专注于每一个项目的获取与风险评估。公司与数家澳洲的小型精品金融机构建立了良好的联系，确保了项目的高品质与稀缺性。公司指定了专业的基金律师与审计行，确保项目的操作流程、法律风险以及对投资者信息的公开透明。</p>
						<p v-if="currentAboutItem == 1" :class="$style.aboutContentText">诚信为本，是Gleich
							团队的首要共识及处世准则。在金融市场的漫长历史中，诚信风险是导致各类重大危机的根源所在。我们坚信公司与投资者之间，以及团队内部都应做到以诚相待，只做正确的事情，才能确保公司有长期的发展。</p>
						<p v-if="currentAboutItem == 2" :class="$style.aboutContentText">Gleich
							坚信投资者与公司团队的各种紧密的信任关系是长期发展的基石。公司对产品的跟投体系将确保投资者的利益的风险与公司团队高度捆绑，共同进退。公司还可为投资者提供澳洲的投资、置业顾问服务，确保投资者的安居乐业。</p>
					</div>
				</div>

				<div v-if="activeItem == 1" :class="[$style.tabItem, $style.team]">
					<div :class="$style.member">
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
					</div>
					<div :class="$style.member">
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
					</div>
					<div :class="$style.member">
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
					</div>
				</div>

				<div v-if="activeItem == 2"  :class="[$style.tabItem, $style.rule]">
					1. 真诚、平等对待每一位投资者，用心提供服务<br>
					2. 向投资者清楚解释产品的特点与潜在风险，明确所有的费用标准，披露所有潜在的利益冲突<br>
					3. 严守投资者的隐私信息<br>
					4. 所有的文件由专业律师完成，符合澳洲本地法律<br>
					5. 公司团队积极参与跟投项目，与投资者共担风险
				</div>
			</div>
		</div>
	</div>
</template>


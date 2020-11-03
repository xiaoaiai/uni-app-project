<template>
	<view class="container">
		<view class="common-title">{{$t('switch')}}</view>
		<view>
			<text>{{$t('switchLanguage')}}：</text>
			<switch checked @change="toggleLang" />
		</view>
		<view class="common-title">{{$t('picker')}}</view>
		<view class="uni-list">
		    <view class="uni-list-cell">
		        <view class="uni-list-cell-left">
		            {{$t('currentSelect')}}
		        </view>
		        <view class="uni-list-cell-db">
		            <picker @change="bindPickerChange" range-key="name" :value="index" :range="array">
		                <view class="uni-input">{{array[index].name}}</view>
		            </picker>
		        </view>
		    </view>
		</view>
		<view class="common-title">{{$t('text')}}</view>
		<editor id="editor" class="ql-container" :placeholder="placeholder" @ready="onEditorReady"></editor>
		<view class="common-title">{{$t('map')}}</view>
		<map style="width: 100%; height: 200px;" :latitude="latitude" :longitude="longitude" :markers="covers">
		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				array: [{
					value: 'zhCN',
					name: '中文'
				},
				 {
					 value: 'enUS',
					 name: 'English'
				 }],
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				id:0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}]
			}
		},
		computed: {
			placeholder() {
				return this.$t('pleaseEnter')
			}
		},
		methods: {
			onEditorReady() {
                uni.createSelectorQuery().select('#editor').context((res) => {
                    this.editorCtx = res.context
                }).exec()
            },
			bindPickerChange(detail) {
				console.log('detail', detail)
				i18n.locale=this.array[detail.value].value
				toggleLang()
			},
			toggleLang() {
				if (this.$i18n.locale == 'enUS') {
					this.$i18n.locale = 'zhCN'
				} else {
					this.$i18n.locale = 'enUS'
				}
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
	#editor {
        width: 100%;
        height: 50px;
        background-color: #CCCCCC;
    }
	.common-title{
		color:#007AFF;
		font-size: 18px;
		font-weight: bold;
	}
</style>

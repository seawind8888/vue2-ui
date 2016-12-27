<template>
<div>
  <group title="栗子">
    <router-link to="/components/_tpl">
      <group-item
        title="Template"
        right-desc="这是个例子"></group-item>
    </router-link>
  </group>
  <group title="基础样式">
    <router-link to="/components/m-header">
      <group-item
        title="MHeader"
        right-desc="头部样式"></group-item>
    </router-link>
    <router-link to="/components/m-button">
      <group-item
        title="MButton"
        right-desc="按钮样式"></group-item>
    </router-link>
    <router-link to="/components/tag">
      <group-item
        title="Tag"
        right-desc="活动标签样式"></group-item>
    </router-link>
    <router-link to="/components/flexbox">
      <group-item
        title="Flexbox"
        right-desc=""></group-item>
    </router-link>
    <router-link to="/components/tab">
      <group-item
        title="Tab"
        right-desc="tab选择栏"></group-item>
    </router-link>
    <router-link to="/components/layout">
      <group-item
        title="Layout"
        right-desc="参见布局展示"></group-item>
    </router-link>
  </group>
  <group title="Form类">
    <router-link to="/components/m-input">
      <group-item
        title="MInput"
        right-desc="Input样式"></group-item>
    </router-link>
    <router-link to="/components/m-textarea">
      <group-item
        title="MTextarea"
        right-desc="Textarea样式"></group-item>
    </router-link>
    <router-link to="/components/radio">
      <group-item
        title="Radio"
        right-desc="Radio样式"></group-item>
    </router-link>
    <router-link to="/components/radio-circle">
      <group-item
        title="RadioCircle"
        right-desc="另一种Radio样式"></group-item>
    </router-link>
    <router-link to="/components/selector">
      <group-item
        title="Selector"
        right-desc="Select样式"></group-item>
    </router-link>
    <router-link to="/components/switch">
      <group-item
        title="Switch"
        right-desc="Switch样式"></group-item>
    </router-link>
    <router-link to="/components/m-number">
      <group-item
        title="MNumber"
        right-desc="数量输入框"></group-item>
    </router-link>
  </group>
  <group title="弹窗类">
    <router-link to="/components/toast">
      <group-item
        title="Toast"
        right-desc="loading弹窗"></group-item>
    </router-link>
    <router-link to="/components/action-sheet">
      <group-item
        title="ActionSheet"
        right-desc="底部浮出按钮"></group-item>
    </router-link>
    <router-link to="/components/datetime">
      <group-item
        title="Datetime"
        right-desc="时间选择"></group-item>
    </router-link>
    <router-link to="/components/dialog">
      <group-item
        title="Dialog"
        right-desc="对话框"></group-item>
    </router-link>
    <router-link to="/components/picker">
      <group-item
        title="Picker"
        right-desc="底部选择滚轮"></group-item>
    </router-link>
    <router-link to="/components/popside">
      <group-item
        title="Popside"
        right-desc="侧边窗"></group-item>
    </router-link>
    <router-link to="/components/popup">
      <group-item
        title="Popup"
        right-desc="底部浮窗"></group-item>
    </router-link>
  </group>
</div>
</template>

<script>
import { Group, GroupItem } from '../components/'

export default {
  components: {
    Group,
    GroupItem
  },
  data () {
    return {
    }
  }
}
</script>

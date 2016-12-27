<template>
<div>
  <group title="Default"></group>
  <switcher :value.sync="switcher.checked"></switcher>

  <group title="Disalbed"></group>
  <switcher :value.sync="switcher.checked" :disabled="true"></switcher>

  <group title="GroupItem">
    <switcher
    :value.sync="switcher2.checked"
    :is-group-item="switcher2.isGroupItem"
    :title="switcher2.title"></switcher>
  </group>
</div>
</template>

<script>
import { Switcher, Group } from '../components/'

export default {
  ready () {
  },
  components: {
    Switcher,
    Group
  },
  data () {
    return {
      switcher: {
        checked: true
      },
      switcher2: {
        checked: true,
        isGroupItem: true,
        title: '开光'
      }
    }
  }
}
</script>

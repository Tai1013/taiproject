<template lang="pug">
font-awesome-icon(v-bind="$attrs" :icon="['fab', icon]")
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
  icon: {
    type: String as PropType<GlobalApp.FabIcons>,
    required: true
  }
})
</script>

<template>
  <svg src="https://iconape.com/wp-content/files/px/5303/png/ic_thumbs_up_down_48px.png"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title
      :id="iconName"
      lang="en"
    >{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>
<script>
/* import { defineComponent } from '@vue/composition-api' */

/* export default defineComponent({
    setup() {
        
    },
}) */
export default {
  props: {
    iconName: {
      type: String,
      default: 'GoodBadIcon'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

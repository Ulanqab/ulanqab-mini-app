<template>
  <span class="c-cellphone">tel: {{ phone }}</span>
</template>

<script>

  export default {
    props: {
      cellphone: {
        type: String,
        required: true,
      },
      show: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    computed: {
      phone() {
        if (!this.show) {
          return this.cellphone.slice(-4).padStart(this.cellphone.length, '*');
        }
        return this.cellphone;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .c-cellphone {
    font-size: $fs-26;
    color: $text-color-gray;
    text-align: left;
    margin-right: .16rem;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    &:last-child {
      margin-right: 0;
    }
  }
</style>

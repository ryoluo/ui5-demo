<template>
  <main>
    <div class="inputs">
      <ui5-multi-input show-value-help-icon :value="inputValue" @input="inputValue = $event.target.value"
        @value-help-trigger="showDialog"></ui5-multi-input>
      <ui5-dialog ref="dialog" id="fiori-footer-dialog" header-text="検索ヘルプ">
        <p>OKを押すと、インプットに"ABCD"が入力されます。</p>
        <div slot="footer"
          style="display: flex; align-items: center; justify-content: end; width: 100%; box-sizing: border-box;">
          <ui5-button design="Emphasized" style="min-width: 4rem;" @click="pressOK">OK</ui5-button>
          <ui5-button style="margin: 0 0 0 0.5rem; min-width: 4rem;" @click="pressClose">Close</ui5-button>
        </div>
      </ui5-dialog>
    </div>
  </main>
</template>

<script>

export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    showDialog() {
      this.$refs.dialog.show()
    },
    closeDialog() {
      this.$refs.dialog.close()
    },
    pressOK() {
      this.inputValue = "ABCD"
      this.closeDialog()
    },
    pressClose() {
      this.closeDialog()
    }
  }
}
</script>

<style lang="scss" scoped>
.inputs {
  padding: 16px;
}
</style>

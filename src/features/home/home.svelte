<script lang="ts">
  import FirstScreen from './components/first-screen/first-screen.svelte'
  import SecondScreen from './components/second-screen/second-screen.svelte'
  import ThirdScreen from './components/third-screen/third-screen.svelte'
  import ContactForm from './components/contact-form/contact-form.svelte'
</script>

<div class="parent">
  <FirstScreen />
  <div class="screenBorder" />
  <SecondScreen />
  <ThirdScreen />
  <div class="screenBorder"></div>
  <ContactForm />
</div>

<style lang="scss">
  @import "src/common/style/responsive";

  .parent {
    background-color: var(--color-background) ;
  }

  .screenBorder {
    height: 265px;
    background: linear-gradient(90deg, #0ACFFE 0%, #495AFF 100%);
  }
</style>

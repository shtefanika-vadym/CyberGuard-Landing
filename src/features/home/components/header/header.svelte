<script>
  import logo from '../../assets/logo.png'
</script>

<header class="header">
  <img class="logo" src={logo} alt="">
</header>

<style lang="scss">
  @import "src/common/style/responsive";

  .header {
    position: absolute;
    @include adaptive-value('top', 40, 10, 0);
  }

  .logo {
    @include adaptive-value('width', 144, 70, 0);
  }
</style>

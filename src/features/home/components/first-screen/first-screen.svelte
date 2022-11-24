<script>
  import Header from '../header/header.svelte'
  import screenImg from '../../assets/first-bg.png'
  import {
    FIRST_SCREEN_LABELS
  } from '../../constants/constants';
  import { ALT_IMG } from '../../../../common/constants/constants';

</script>

<div class="screen">
  <div class="content">
    <Header />
    <div class="contentInfo">
      <h2 class="screenTitle">
        {FIRST_SCREEN_LABELS.EXTRA_LAYER}
        <br />
        <span class="textGradient">{FIRST_SCREEN_LABELS.SECURITY}</span>
        {FIRST_SCREEN_LABELS.YOUR_LIFE}
      </h2>
      <p class="description screenDescription">{FIRST_SCREEN_LABELS.USE_TO_HELP}</p>
      <button class="button description">{FIRST_SCREEN_LABELS.GET_CYBERGUARD}</button>
    </div>
    <img class="screenImage" src={screenImg} alt={ALT_IMG.SCREEN_IMG}>
  </div>
</div>

<style lang="scss">
  @import "src/common/style/responsive";

  .screenDescription {
    @include adaptive-value('padding-top', 30, 10, 0);
    @include adaptive-value('padding-bottom', 48, 18, 0);
  }

  .contentInfo {
    @include device(extraSmall) {
      text-align: center;
    }
  }

  .button {
    cursor: pointer;
    font-weight: 700;
    border-radius: 8px;
    border: none;
    @include adaptive-value('padding', 24, 5, 0);
    @include adaptive-value('border-radius', 8, 3, 0);
    background: linear-gradient(90deg, #0ACFFE 0%, #495AFF 100%);
  }

  .screenImage {
    @include adaptive-value('width', 900, 200, 0);
    position: absolute;
    right: 0;
    @include device(smallOnly) {
      display: none;
    }
  }
</style>

<script>
  import screenImg from '../../assets/decond-bg.png'
  import { SECOND_SCREEN_LABELS } from '../../constants/constants'
  import { ALT_IMG } from '../../../../common/constants/constants'
</script>

<div class="screen">
  <div class="content">
    <img class="screenImage" src={screenImg} alt={ALT_IMG.SCREEN_IMG}>
    <div class="secondAdditionalBlock">
      <h2 class="screenTitle">
        {SECOND_SCREEN_LABELS.WHY}
        <span class="textGradient">{SECOND_SCREEN_LABELS.CYBERGUARD}</span>
      </h2>
      <p class="description">
        {SECOND_SCREEN_LABELS.DESCRIPTION}
      </p>
    </div>
  </div>
</div>

<style lang='scss'>
  @import "src/common/style/responsive";

  .screen {
    height: min-content;
    @include adaptive-value('padding-top', 350, 100, 0);
    @include adaptive-value('padding-bottom', 350, 100, 0);
  }

  .screenImage {
    position: absolute;
    @include adaptive-value('width', 1400, 200, 0);
    @include adaptive-value('top', -250, 80, 0);
    @include adaptive-value('left', -250, -10, 0);
    @include device(smallOnly) {
      display: none;
    }
  }
</style>

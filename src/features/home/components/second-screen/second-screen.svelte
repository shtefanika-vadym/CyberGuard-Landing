<script>
  import screenImg from '../../assets/decond-bg.png'
  import { SECOND_SCREEN_LABELS } from '../../constants/constants'
  import { ALT_IMG } from '../../../../common/constants/constants'
</script>

<div class='screen'>
  <div class='content'>
    <img alt={ALT_IMG.SCREEN_IMG} class='screenImage' src={screenImg}>
    <div class='secondAdditionalBlock'>
      <h2 class='screenTitle'>
        {SECOND_SCREEN_LABELS.WHY}
        <span class='textGradient'>{SECOND_SCREEN_LABELS.CYBERGUARD}</span>
      </h2>
      <div>
        <p class='description'>
          You're a busy person. You don't have time to sift through the endless amounts of misinformation and fake news
          that's out there—and you definitely don't have time to deal with phishing sites.
        </p><br>
        <p class='description'>
          CyberGuard can help. It uses artificial intelligence (A.I.) to protect you from all of this, so you can focus
          on what matters: your work, your family, and the things that make life worth living.
        </p><br>
        <p class='description'>
          And let's not forget about Jade, our artificial intelligence chatbot assistant that sits on your social media
          feed and helps you quickly decipher if a popular news story is fake or not.
        </p>
      </div>

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

<script>
  import phishingIcon from '../../assets/phishing.svg'
  import fakeNewsIcon from '../../assets/fake.svg'
  import { THIRD_SCREEN_LABELS } from '../../constants/constants'
  import { ALT_IMG } from '../../../../common/constants/constants'
</script>

<div class='screen'>
  <div class='content'>
    <h2 class='screenTitle'>
      {THIRD_SCREEN_LABELS.BEST_TOOL}
      <span class='textGradient'>{THIRD_SCREEN_LABELS.PROTECTED}</span>
      <br />
      {THIRD_SCREEN_LABELS.INFORMED}
    </h2>
    <div class='details'>
      <div class='card'>
        <img alt={ALT_IMG.PROTECTION_ICON} class='cardIcon' src={fakeNewsIcon}>
        <h3 class='cardTitle'>{THIRD_SCREEN_LABELS.NEWS_PROTECT}</h3>
        <p class='cardDescription'>Our browser extension makes use of the latest A.I. advancements in natural language
          processing and is able to quickly assess whether a news article is genuine or not.</p>
      </div>
      <div class='card'>
        <img alt={ALT_IMG.PROTECTION_ICON} class='cardIcon' src={phishingIcon}>
        <h3 class='cardTitle'>{THIRD_SCREEN_LABELS.PHISHING_PROTECT}</h3>
        <p class='cardDescription'>Our phishing detection A.I. will scan websites as you go through them and notify you
          if it believes you are about to engage with a malicious site that is trying to steal your information.</p>
      </div>
    </div>
  </div>
</div>

<style lang='scss'>
  @import "src/common/style/responsive";

  .screen {
    position: unset;
    height: min-content;
    padding-top: 0;
    @include adaptive-value('padding-bottom', 350, 100, 0);
  }

  .content {
    display: flex;
    @include adaptive-value('row-gap', 115, 20, 0);
    flex-direction: column;
    justify-content: center;
  }

  .screenTitle {
    text-align: center;
  }

  .cardIcon {
    @include adaptive-value('width', 100, 50, 0);
    @include adaptive-value('height', 100, 50, 0);
  }

  .details {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    height: 300px;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    height: 100%;
    @include adaptive-value('max-width', 370, 200, 0);
    @include adaptive-value('border-radius', 6, 4, 0);
    padding: 40px 20px 20px 20px;
    background-color: #2c2d31;
  }

  .cardTitle {
    font-weight: 700;
    @include adaptive-value('font-size', 24, 16, 0);
    line-height: 140%;
    text-align: center;
    color: var(--color-white);
  }

  .cardDescription {
    text-align: center;
    @include adaptive-value('font-size', 16, 10, 0);
    line-height: 150%;
    color: rgba(255, 255, 255, 0.7);
  }
</style>

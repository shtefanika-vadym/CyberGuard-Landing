<script>
  import { Sveltik, Form, Field, ErrorMessage } from 'sveltik'

  import phoneIcon from '../../assets/phone.svg'
  import emailIcon from '../../assets/email.svg'
  import locationIcon from '../../assets/location.svg'
  import { ALT_IMG } from '../../../../common/constants/constants'
  import { CONTACT_FORM_LABELS } from '../../constants/constants'

  let initialContactValues = { name: '', phone: '', email: '', subject: '', message: '' }

  let validate = (values) => {
    const errors = {}
    if (!values.email) errors.email = 'Required'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
      errors.email = 'Invalid email address'

    if (!values.name) errors.name = 'Required'
    else if (values.name.length < 3) errors.name = 'Invalid name'

    if (!values.phone) errors.phone = 'Required'
    else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(values.phone)
      || values.phone.length < 9)
      errors.phone = 'Invalid number phone'

    if (!values.subject) errors.subject = 'Required'
    else if (values.subject.length < 7) errors.subject = 'Invalid subject it must contain at least 7 characters'

    if (!values.message) errors.message = 'Required'
    else if (values.message.length < 20) errors.message = 'Invalid message it must contain at least 20 characters'

    return errors
  }

  let onSubmit = (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
  }


</script>

<div class="screen">
  <div class="content">
    <div class="infoBlock teamDetails">
      <h2 class="screenTitle">
        <span class="textGradient">{CONTACT_FORM_LABELS.CONTACT_INFORM}</span>
        {CONTACT_FORM_LABELS.FROM} <br />
        {CONTACT_FORM_LABELS.CYBERGUARD}
      </h2>
      <p class="description">{CONTACT_FORM_LABELS.TEAM_HISTORY}</p>
      <div class="contactBlock">
        <div class="contactItem">
          <img class="contactIcon" src={locationIcon} alt={ALT_IMG.LOCATION_ICON}>
          <span class="contactInfo">
            <h3 class="contactTitle">{CONTACT_FORM_LABELS.LOCATION}</h3>
            <p class="description">{CONTACT_FORM_LABELS.R_LOCATION}</p>
          </span>
        </div>
        <div class="contactItem">
          <img class="contactIcon" src={phoneIcon} alt={ALT_IMG.PHONE_ICON}>
          <span class="contactInfo">
            <h3 class="contactTitle">{CONTACT_FORM_LABELS.PHONE}</h3>
            <p class="description">{CONTACT_FORM_LABELS.R_PHONE}</p>
          </span>
        </div>
        <div class="contactItem">
          <img class="contactIcon" src={emailIcon} alt={ALT_IMG.EMAIL_ICON}>
          <span class="contactInfo">
            <h3 class="contactTitle">{CONTACT_FORM_LABELS.EMAIL}</h3>
            <p class="description">{CONTACT_FORM_LABELS.R_EMAIL}</p>
          </span>
        </div>
      </div>
    </div>
    <div class="infoBlock">
      <Sveltik initialValues={initialContactValues} {validate} {onSubmit} let:isSubmitting let:errors>
        <Form class="contactForm">
          <div>
            <label class="labelField" for="name">{CONTACT_FORM_LABELS.YOUR_NAME}</label>
            <Field
              id="name"
              placeholder={CONTACT_FORM_LABELS.YOUR_NAME}
              class="inputField"
              type="text"
              name="name"
              as="input"
            />
            <ErrorMessage class="errorMessage" name="name" as="div" />
          </div>
          <div class="formAdditional">
            <div class="fieldParent">
              <label class="labelField" for="phone">{CONTACT_FORM_LABELS.PHONE}</label>
              <Field
                id="phone"
                class="inputField"
                type="text"
                name="phone"
                as="input"
                placeholder={CONTACT_FORM_LABELS.YOUR_PHONE}
              />
              <ErrorMessage class="errorMessage"  name="phone" as="div" />
            </div>
            <div class="fieldParent">
              <label class="labelField" for="email">{CONTACT_FORM_LABELS.EMAIL}</label>
              <Field
                id="email"
                class="inputField"
                type="email"
                name="email"
                as="input"
                placeholder={CONTACT_FORM_LABELS.YOUR_EMAIL}
              />
              <ErrorMessage class="errorMessage" name="email" as="div" />
            </div>
          </div>
          <div>
            <label class="labelField" for="subject">{CONTACT_FORM_LABELS.SUBJECT}</label>
            <Field
              id="subject"
              class="inputField"
              type="text"
              name="subject"
              as="input"
              placeholder={CONTACT_FORM_LABELS.SUBJECT}
            />
            <ErrorMessage class="errorMessage" name="subject" as="div" />
          </div>
          <div>
            <label class="labelField" for="message">{CONTACT_FORM_LABELS.YOUR_MESSAGE}</label>
            <Field
              id="message"
              class="textareaField"
              name="message"
              as="textarea"
              placeholder={CONTACT_FORM_LABELS.YOUR_MESSAGE}
            />
            <ErrorMessage class="errorMessage" name="message" as="div" />
          </div>
          <button
            type="submit"
            class="button"
            disabled={isSubmitting}>
            {CONTACT_FORM_LABELS.SEND_MESSAGE}
          </button>
        </Form>
      </Sveltik>
    </div>

  </div>
</div>

<style lang='scss'>
  @import "src/common/style/responsive";
  .content {
    column-gap: 30px;
    @include device(smallOnly) {
      flex-direction: column;
      row-gap: 40px;
    }
  }

  .fieldParent {
    width: 100%;
  }

  .teamDetails {
    @include device(smallOnly) {
      text-align: center;
    }
  }

  .infoBlock {
    width: 50%;
    @include device(smallOnly) {
      width: 100%;
    }
  }

  .formAdditional {
    display: flex;
    justify-content: space-between;
    @include adaptive-value('column-gap', 16, 10, 0);
  }

  .contactIcon {
    @include adaptive-value('width', 56, 36, 0);
    @include adaptive-value('height', 56, 36, 0);
  }

  .description {
    line-height: 150%;
    @include adaptive-value('font-size', 16, 10, 0);
    color: rgba(255, 255, 255, 0.7);
    padding-top: 16px;
    padding-bottom: 70px;
  }

  .contactBlock {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @include device(smallOnly) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  .contactItem {
    display: flex;
    column-gap: 16px;
    align-items: center;
    text-align: start;

    .description {
      @include adaptive-value('padding-top',5, 4, 0);
      padding-bottom: 0;
    }
  }

  .contactTitle {
    font-style: normal;
    font-weight: 700;
    color: var(--color-white);
    @include adaptive-value('font-size', 20, 16, 0);
    line-height: 100%;
  }

  .contactInfo {
    display: flex;
    height: inherit;
    flex-direction: column;
    justify-content: space-between;
  }
</style>

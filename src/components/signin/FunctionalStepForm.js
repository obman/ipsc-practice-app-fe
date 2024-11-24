import { h } from 'vue';

const FunctionalStepForm = (props, ctx) => {
  const steps = ctx.slots.default();
  console.log ('Active step: ', props.activeStep);
  console.log (steps.length);

  return h(
    steps[(props.activeStep - 1)],
    {
      stepForm: props.stepForm,
      errorsBag: props.errorBags,
      ...ctx.attrs
    }
  );
}

FunctionalStepForm.props = ['activeStep', 'stepForm', 'errorBags'];

export default FunctionalStepForm;

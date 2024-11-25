import { h } from 'vue';

const DynamicStep = (props, ctx) => {
  const steps = ctx.slots.default();

  return h(
    steps[props.activeStep],
    {
      stepForm: props.stepForm,
      ...ctx.attrs
    }
  );
}

DynamicStep.props = ['activeStep', 'stepForm'];

export default DynamicStep;

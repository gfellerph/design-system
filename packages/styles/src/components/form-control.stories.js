import './forms.scss';
import './form-feedback.scss';

export default {
  title: 'Components/Form control',
  argTypes: {
    labelText: {
      control: {
        type: 'text',
      },
    },
    floatingLabel: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'rg', 'md', 'lg'],
      if: {arg: 'floatingLabel', truthy: false},
    },
    inputType: {
      control: {
        type: 'select',
      },
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
    },
    state: {
      control: {
        type: 'radio',
      },
      options: ['default', 'valid', 'invalid'],
    },
  },
};

const STATE_CLASS_MAP = {
  default: '',
  valid: 'is-valid',
  invalid: 'is-invalid',
};

const InputTemplate = (args) => {
  const getState = STATE_CLASS_MAP[args.state];
  const setState = `
    ${args.state === 'valid' ? `<div class="valid-feedback">Everything is fine.</div>` : ``}
    ${args.state === 'invalid' ? `<div class="invalid-feedback">There is an error!</div>` : ``}
  `;

  const getFloatingTemplate = `
    <div class="form-floating">
      <input class="form-control ${getState} form-control-lg" id="floatingInput" placeholder=" " type="${args.inputType}">
      <label class="form-label" for="floatingInput">${args.labelText}</label>
      ${setState}
    </div>
  `;

  const getRegularTemplate = `
    <input aria-label="Required for accessibility on inputs that do not have an associated <label>"
    class="form-control ${getState} form-control-${args.size}" placeholder="${args.labelText}" type="${args.inputType}">
    ${setState}
  `;

  return `
    ${args.floatingLabel ? getFloatingTemplate : getRegularTemplate} 
  `;
};

export const DefaultInput = InputTemplate.bind({});
DefaultInput.parameters = {
  controls: {
    include: ['labelText', 'size', 'floatingLabel', 'inputType', 'state'],
  },
};

DefaultInput.args = {
  labelText: 'Default Input',
  size: 'rg',
  floatingLabel: false,
  inputType: 'text',
  state: 'default',
};

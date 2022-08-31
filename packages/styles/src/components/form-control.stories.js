import './forms.scss';

export default {
  title: 'Components/Form control',
  argTypes: {
    labelText: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    floatingLabel: {
      control: {
        type: 'boolean',
      },
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
      options: ['valid', 'invalid', 'default'],
    },
  },
};

const InputTemplate = (args) => {

};

export const DefaultInput = InputTeamplate.bind({});
DefaultInput.parameters = {
  controls: {
    include: ['labelText', 'size', 'floatingLabel', 'inputType', 'state'],
  },
};

DefaultInput.args = {
  labelText: 'Default Input',
  size: 'rg',
  floatingLabel: true,
  inputType: 'text',
  state: 'valid',
};



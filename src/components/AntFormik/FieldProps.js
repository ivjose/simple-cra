import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export

export const childrenProps = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element.isRequired,
  ]),
};

export const fieldDefaultProps = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
};

export const formItemProps = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  label: PropTypes.string,
  hasFeedback: PropTypes.bool,
  showValidateSuccess: PropTypes.bool,
};

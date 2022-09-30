import PropTypes from 'prop-types';

const Container = ({ children }) => <div>{children}</div>;

Container.propType = {
  children: PropTypes.string.isRequired,
};

export default Container;

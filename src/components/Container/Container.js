import PropTypes from 'prop-types';

const Container = ({ children }) => <div>{children}</div>;

Container.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Container;

import PropTypes from 'prop-types';
export const Loading = ({ center = false }) => {
  return <div className={center ? "loading loading-center" : "loading"}></div>;
};

Loading.propTypes = {
    center : PropTypes.bool,
}

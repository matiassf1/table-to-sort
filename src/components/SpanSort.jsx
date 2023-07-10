import PropTypes from "prop-types";

export const SpanSort = ({ name, type, fromTop, icons }) => {
  return (
    <span>
      {type === name && fromTop !== null ? (
        fromTop ? (
            icons[0]
        ) : (
          icons[1]
        )
      ) : null}
    </span>
  );
};

SpanSort.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  fromTop: PropTypes.bool,
  icons: PropTypes.array
};

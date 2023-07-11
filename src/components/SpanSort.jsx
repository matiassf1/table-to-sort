import PropTypes from "prop-types";

export const SpanSort = ({ name, type, ascending, icons }) => {
  return (
    <span>
      {type === name && ascending !== null ? (
        ascending ? (
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
  ascending: PropTypes.bool,
  icons: PropTypes.array
};

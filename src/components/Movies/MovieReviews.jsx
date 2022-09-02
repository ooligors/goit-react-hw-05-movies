import PropTypes from 'prop-types';

export const MovieReviews = ({ items }) => {
  const elements = items.map(({ id, content, author_details }) => (
    <li key={id}>
      <h3>Author: {author_details.username}</h3>
      <p>{content}</p>
    </li>
  ));
  return elements;
};

MovieReviews.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author_details: PropTypes.shape({
        username: PropTypes.string.isRequired,
      }),
    })
  ),
};

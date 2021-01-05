import PropTypes from 'prop-types';

function ListExample({ items }) {
  return (
    <ul>
      {items.map(({ id = 100, text = 'Работает!' }) => (
        <li key={id}>
          <h2>{`${id}. ${text}`}</h2>
        </li>
      ))}
    </ul>
  );
}

ListExample.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ),
};

export default ListExample;

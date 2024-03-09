import PropTypes from 'prop-types';

const Tablero = ({ children, isSelected, updateBoard, index }) => {
  const seleccionado = `square ${isSelected ? 'is-selected ' : ''}`;

  return (
    <div className={seleccionado}>
      {children}
    </div>
  )
};
Tablero.propTypes = {
  children: PropTypes.number.isRequired,
  isSelected: PropTypes.boolean.isRequired,
  updateBoard: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
export default Tablero;

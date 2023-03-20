import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

const Filter = ({ inputValue, onChange }) => {
    return (
        <Input type="text" value={inputValue} onChange={onChange} />
    );
};

export default Filter;

Filter.propTypes = {
    inputValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
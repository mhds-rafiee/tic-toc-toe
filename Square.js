import React from 'react';
import Button from '@material-ui/core/Button';

const style = {
	background: "lightblue",
	border: "2px solid darkblue",
	fontSize: "30px",
	fontWeight: "800",
	cursor: "pointer",
	outline: "none",
};
const Square = ({ value , onClick }) => (
    <Button style={style} variant="contained" onClick={onClick}>
        {value}
    </Button>
);

export default Square;
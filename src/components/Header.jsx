import React from 'react';


const Header = ({ toggleTheme}) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button className='save' onClick={toggleTheme}>Toggle Mode</button>
		</div>
	);
};

export default Header;

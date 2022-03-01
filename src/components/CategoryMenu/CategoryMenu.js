import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

const CategoryMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const styles = {
		popUpBtn: {
			textDecoration: 'none',
			color: 'white',
			fontSize: 18,
			fontWeight: 'bold',
			textTransform: 'lowercase',
		},
		upperText: {
			textTransform: 'uppercase',
		},
		link: {
			color: 'red',
			fontSize: 18,
			textDecoration: 'none',
		},
	};

	return (
		<div>
			<Button
				style={styles.popUpBtn}
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<span style={styles.upperText}>G</span>enders
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem>
					<Link to='/categories/electronics' style={styles.link}>
						Electronics
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/categories/men-clothing' style={styles.link}>
						Ropa Hombre
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/categories/women-clothing' style={styles.link}>
						Ropa Mujer
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/categories/jewelery' style={styles.link}>
						Joyeria
					</Link>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default CategoryMenu;
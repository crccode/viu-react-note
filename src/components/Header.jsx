import { AppBar, Toolbar, Typography } from '@mui/material';
//import './Header.css';

//Coloco menu bar, barra de herramienta, icono, Texto
//Typography le decimos que use div y le pasamos css
export default function Header(){
	return (
		<header>
			<AppBar position='static'>
				<Toolbar>
					<StickyNote2 sx={{mr: 2}} />
					<Typography variant='h6' component="div" sx={{flexGrow: 1}}>
						React Note
					</Typography>
				</Toolbar>
			</AppBar>
		</header>
	);
}
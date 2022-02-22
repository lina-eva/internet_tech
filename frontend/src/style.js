import { 
	palette
} from '@mui/system';
import { createTheme } from '@mui/material/styles';

const primaryMain = '#ffbba7';

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: '#00796b',
      background: '#99d5cf',
      header: '#80cbc4'
    },
    background: {
    	default: primaryMain
    }
  },
})

export const appStyle = {
	display: 'flex',
	justifyContent: 'center',
	my: '5%',
	width: '100%',
	flexDirection: 'column'
}

export const border = {
	border: 1
}

export const tableBorder = {
	...border,
	borderColor: 'secondary.main'
}

export const borderRadius = {
	borderRadius: '15px'
}

export const borderHeaderRadius = {
	borderTopLeftRadius: borderRadius['borderRadius'],
	borderTopRightRadius: borderRadius['borderRadius']
}

export const fabStyle = {
  position: 'stiky',
  down: '-50%',
  right: '-58%',
  zIndex: 'modal'
}

export const borderHelperText = {
	...border,
	borderBottom: 0
}

export const hrFormBorder = {
	...border,
	borderTop: 0
}

export const blockSize = {
	width: '35%',
	mx: 'auto',
	flexGrow: 0,
	flexShrink: 0,
	minWidth: '450px'
}

export const blockElement = {
	display: 'block'
}

export const hrTableStyle = {
	bgcolor: 'secondary.background'
}

export const tableHeader = {
	bgcolor: 'secondary.header',
	fontSize: '1.1rem'
}

export const hrFormStyle = hrTableStyle;

export const flexRowElement = {
	display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
}

export const flexColumnElement = {
	display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
}

export const cardForm = {
	my: '2%',
	width: '80%'
}

export const itemHeader = {
	px: '5%', 
	py: '1%',
	mb: 0
}

export const card = {
	m: '2%',
	bgcolor: 'secondary.background'
}

export const cardContent = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	flexWrap: 'wrap'
}

export const cardHeader = {
	pb: '5%',
	fontWeight: 'bold'
}

export const formHelperText = {
	p: '0.1rem',
	mt: '0',
	fontSize: '1rem'
}

export const vacancyForm = {
	my: '1.5%',
	mx: 'auto',
	'width': '80%'
}

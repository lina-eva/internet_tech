import React, { useState } from 'react';
import List from '@mui/material/List';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Tooltip from '@mui/material/Tooltip';
import { getServices } from './api';
import {
	flexRowElement,
	flexColumnElement
} from '../style';

function ServiceList({checkedServices, updateCheckedServices, sx}) {
	const [services, setServices] = useState(null);

	const updateServices = () => {
		getServices().then((result) => setServices(result));
	}

	React.useLayoutEffect(() => {
		updateServices();
	}, []);

	const updateChecked = (id, checked) => {
		const newCheckedServices = new Set(checkedServices);

		if (checked)
			newCheckedServices.add(id)
		else
			newCheckedServices.delete(id)

		updateCheckedServices(newCheckedServices);
	};

	if (Array.isArray(services) && services.length == 0 || services == null)
		return null;

	const serviceItems = services.map(service => {
		return (
			<ListItemButton 
				key={service.id} 
				onClick={(event) => updateChecked(service.id, !checkedServices.has(service.id))}
				sx={flexRowElement}
			>
				<Stack direction='row' justifyContent='space-between' sx={{width: '100%'}}>
					<Tooltip title={service.description}>
						<ListItemText primary={service.serviceName} sx={{textWrap: 'wrap'}} />
					</Tooltip>
					<Switch 
						color='secondary'
						checked={checkedServices.has(service.id)} 
						onChange={(event) => updateChecked(service.id, event.target.checked)} 
					/>
				</Stack>
			</ListItemButton>
		)
	});

	const header = (
		<ListSubheader sx={sx}>Список услуг</ListSubheader>
	);

	return (
		<List sx={flexColumnElement} subheader={header}>
			{serviceItems}
		</List>
	);
}

export default ServiceList;
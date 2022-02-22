import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ServiceList from './ServiceList';
import TariffDataForm from './TariffDataForm';
import { 
	changeTariff,
	getTariff,
	deleteTariff
} from './api';
import { buildTariffInfoText } from './utils';
import {
	itemHeader,
	flexRowElement,
	blockElement,
	card
} from '../style';

function TariffItem({tariff}) {
	const [tariffItem, setTariffItem] = useState(tariff);
	const [name, setName] = useState(tariffItem.name);
	const [price, setPrice] = useState(tariffItem.cost);
	const [checkedServices, setCheckedServices] = useState(null);
	const [opened, setOpened] = useState(false);
	const [alert, setAlert] = useState(false);

	console.log(price);

	const update = () => {
		const tariffDto = {
			id: tariffItem.id,
			name: name,
			cost: price,
			serviceList: Array.from(checkedServices)
		}

		console.log(tariffDto);

		changeTariff(tariffDto).then(id => {
			console.log(id);
			getTariff(id).then(result => {
				setTariffItem(result);
				setAlert(true);
			});
		});
	};

	const del = () => {
		deleteTariff(tariffItem.id).then(result => document.location.reload());
	}

	React.useEffect(() => {
		console.log("calling useEffect from TariffItem");

		const services = new Set(
			tariffItem.serviceList.map(service => service.id)
		);
		setCheckedServices(services);
	}, [tariffItem]);

	React.useEffect(() => {
		let timeId;
		if (alert) {
			timeId = setTimeout(() => {
				setAlert(false);
			}, 3000);
		}

		return (() => clearTimeout(timeId));
	}, [alert]);

	console.log(checkedServices);

	return (
		<Box component='li'>
			<ListItemButton onClick={() => setOpened(!opened)} sx={blockElement}>
				<Stack direction='row'>
					<ListItemText 
						primary={tariffItem.name} 
						secondary={buildTariffInfoText(tariffItem)} 
						sx={itemHeader}
						primaryTypographyProps={{fontSize: 'h6.fontSize'}}
					/>
					{opened ? <ExpandLess sx={{my: 'auto'}}/> : <ExpandMore sx={{my: 'auto'}}/>}
				</Stack>
			</ListItemButton>
			<Collapse in={opened} timeout="auto">
				<Card sx={card}>
					<CardContent>
						<Stack sx={{px: '8%'}}>
							<TariffDataForm 
		            			name={name} 
		            			changeName={setName} 
		            			price={price} 
		            			changePrice={setPrice}
		            		/>
			            	<ServiceList 
			            		checkedServices={checkedServices} 
			            		updateCheckedServices={setCheckedServices} 
			            		sx={{bgcolor: 'secondary.background'}}
			            	/>
			            	{alert ? <Alert severity='success' variant='outlined'>Данные тарифа успешно обновлены!</Alert> : null}
						</Stack>
					</CardContent>
					<CardActions>
						<Stack direction='row' justifyContent='space-between' sx={{width: '100%'}}>
							<Button color='secondary' variant='outlined' onClick={update}>Обновить данные тарифа</Button>
							<Button color='secondary' variant='outlined' onClick={del}>Удалить тариф</Button>
						</Stack>
					</CardActions>
				</Card>
			</Collapse>
		</Box>
	);
}

export default TariffItem;

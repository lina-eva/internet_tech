import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ServiceList from './ServiceList';
import TariffDataForm from './TariffDataForm';
import {
	saveTariff
} from './api';
import {
	flexColumnElement
} from '../style';

function TariffForm({open, closeForm}) {
	const [checkedServices, setCheckedServices] = useState(new Set());
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);

	const save = () => {
		const tariff = {
			name: name,
			cost: price,
			services: Array.from(checkedServices)
		};

		console.log(tariff);

		saveTariff(tariff).then((result) => {
			closeForm();
		});
	}

	React.useEffect(() => {
		if (!open) {
			setCheckedServices(new Set());
			setName('');
			setPrice(0);
		}
	}, [open]);

	return (
		<Dialog open={open} onClose={closeForm}>
            <DialogTitle>Добавление тарифа</DialogTitle>
            <DialogContent>
            	<TariffDataForm 
            		name={name} 
            		changeName={setName} 
            		price={price} 
            		changePrice={setPrice}
            	/>
            	<ServiceList 
            		checkedServices={checkedServices} 
            		updateCheckedServices={setCheckedServices} 
            	/>
            </DialogContent>
            <DialogActions>
            	<Button color="secondary" onClick={closeForm}>Отменить</Button>
            	<Button color="secondary" onClick={save}>Сохранить тариф</Button>
            </DialogActions>
        </Dialog>
	);
}

export default TariffForm;
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

function TariffDataForm({name, changeName, price, changePrice}) {
	const [nameError, setNameError] = useState(true);
	const [priceError, setPriceError] = useState(true);

	const validateName = (name) => {
		const regex = /[A-Za-zA-Яа-я]{3,}/;

		return regex.test(name);
	};

	const validatePrice = (price) => {
		const number = parseFloat(price);

		if (Number.isNaN(number) || number < 1) {
			setPriceError(true);
		} else {
			changePrice(number);
		}
	}

	React.useEffect(() => {
		setNameError(!validateName(name));
	}, [name]);

	React.useEffect(() => {
		setPriceError(false);
	}, [price]);

	return (
		<Stack spacing={2} sx={{my: '2%'}}>
	        <TextField
	            color="secondary"
	            value={name}
	            label='Название тарифа'
	            onChange={(event) => changeName(event.target.value)}
	            multiline
	            required
	            helperText={nameError ? 'В поле должно быть минимум 3 знака' : ''}
	        />
	        <TextField
	            color="secondary"
	            value={price}
	            label='Цена тарифа'
	            type='number'
	            onChange={(event) => validatePrice(event.target.value)}
	            InputProps={{
          			startAdornment: (
	            		<InputAdornment position="start">
	              			<CurrencyRubleIcon fontSize='small'/>
	            		</InputAdornment>
          			),
        		}}
        		required
        		helperText={priceError ? 'Тариф должен стоить не менее 1 рубля' : ''}
	        />
        </Stack>
	);
}

export default TariffDataForm;
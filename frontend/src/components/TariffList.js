import React, { useState } from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import TariffItem from './TariffItem';
import { getTariffs } from './api';
import {
	blockSize,
	tableBorder,
	hrTableStyle,
	borderRadius,
	borderHeaderRadius,
	tableHeader,
	fabStyle,
	itemHeader
} from '../style';

function TariffList({opened, openForm}) {
	const [tariffs, setTariffs] = useState(null);

	const updateTariffs = () => {
		getTariffs().then((result) => {
			setTariffs(result)
		});
	}

	React.useEffect(() => {
		console.log("called useEffect from TariffList");
		updateTariffs();
	}, [opened]);

	console.log(tariffs);

	const listHeader = (
		<ListSubheader sx={[tableHeader, borderHeaderRadius]}>
			Список тарифов
			<Fab color="secondary" sx={fabStyle} size='small' onClick={openForm}>
				<AddIcon />
			</Fab>
		</ListSubheader>
	);

	let listBody = <ListItemText primary="Не было добавлено ни одного тарифа!" sx={itemHeader}/>

	if (Array.isArray(tariffs) && tariffs.length > 0) {
		listBody = tariffs.map(tariff => {
			return (
				<TariffItem key={tariff.id} tariff={tariff} />
			)
		})
	}


	return (
		<List subheader={listHeader} sx={[tableBorder, borderRadius, blockSize, hrTableStyle]}>
			{listBody}
		</List>
	);
}


export default TariffList;
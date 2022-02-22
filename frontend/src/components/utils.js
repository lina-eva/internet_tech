export function buildTariffInfoText(tariff) {
	const count = tariff.serviceList.length;
	if (count < 20 && count > 10) {
		return `${count} услуг`;
	}
	switch (count % 10) {
		case 0: return 'Нет услуг';
		case 5:
		case 6:
		case 7:
		case 8:
		case 9: return `${count} услуг`;
		case 1: return `${count} услуга`;
		case 2:
		case 3:
		case 4: return `${count} услуги`;
	}
}
import axios from 'axios';

const axiosConfig = {
	baseURL: "http://localhost:8080/api/"
}

export async function getServices() {
	return await axios.get('tariff/services', axiosConfig).then(response => response.data);
}

export async function getTariffs() {
	return await axios.get('tariff', axiosConfig).then(response => response.data);
}

export async function getTariff(id) {
	return await axios.get(`tariff/${id}`, axiosConfig).then(response => response.data);
}

export async function saveTariff(tariff) {
	return await axios.post('tariff', tariff, axiosConfig).then(response => response.data);
}

export async function changeTariff(tariffDto) {
	return await axios.put('tariff/update', tariffDto, axiosConfig).then(response => response.data);
}

export async function deleteTariff(id) {
	return await axios.delete(`tariff/${id}`, axiosConfig).then(response => response.data);
}
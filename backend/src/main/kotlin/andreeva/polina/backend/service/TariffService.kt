package andreeva.polina.backend.service

import andreeva.polina.backend.dto.TariffCreateDto
import andreeva.polina.backend.dto.TariffUpdateDto
import andreeva.polina.backend.persistence.entity.Tariff
import andreeva.polina.backend.persistence.repository.TariffRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import andreeva.polina.backend.persistence.entity.Service as EnumService

@Service
@Transactional
class TariffService(
    private val tariffRepository: TariffRepository
) {

    fun getTariff(id: Long) = tariffRepository.findById(id).orElse(null)
        ?.also { println("Got tariff $it") }

    fun getAllTariffs() = tariffRepository.findAll().toList()
        .also { println("Got tariffs:") }
        .onEach { println("Got tariff $it") }

    fun saveTariff(tariff: TariffCreateDto) = with(tariff) {
        EnumService.findByOrdinals(services)
            .let {
                tariffRepository.save(
                    Tariff(
                        name = name,
                        cost = cost,
                        serviceList = it.toSet()
                    )
                )
            }
            .also { println("Saved tariff $it") }
    }

    fun deleteTariff(id: Long) = tariffRepository.deleteById(id)
        .also { println("Deleted tariff by $id") }

    fun updateTariff(tariff: TariffUpdateDto) = with(tariff) {
        getTariff(id)
            ?.also {
                tariffRepository.deleteServiceList(id)
                tariffRepository.updateTariffById(
                    id,
                    name ?: it.name,
                    cost ?: it.cost
                )
                EnumService.findByOrdinals(serviceList).forEach { tariffRepository.addService(id, it.name) }
            }
            .let { id }
            .also { println("Updated tariff with id $it") }
    }

    fun getAllServices() = EnumService.values()
        .also { println("All available services:") }
        .onEach { println("$it - ${it.serviceName}") }
}
package andreeva.polina.backend.controller

import andreeva.polina.backend.dto.TariffCreateDto
import andreeva.polina.backend.dto.TariffUpdateDto
import andreeva.polina.backend.service.TariffService
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin
@RequestMapping("/api/tariff")
class TariffController(
    private val tariffService: TariffService
) {
    @GetMapping
    fun getTariffs() = tariffService.getAllTariffs()

    @GetMapping("/services")
    fun getServices() = tariffService.getAllServices()

    @GetMapping("{id}")
    fun getTariff(@PathVariable("id") id: Long) = tariffService.getTariff(id)

    @PostMapping
    fun createTariff(@RequestBody tariffDto: TariffCreateDto) = tariffService.saveTariff(tariffDto)

    @PutMapping("/update")
    fun updateTariff(@RequestBody tariffDto: TariffUpdateDto) = tariffService.updateTariff(tariffDto)

    @DeleteMapping("{id}")
    fun deleteTariff(@PathVariable("id") id: Long) = tariffService.deleteTariff(id)
}
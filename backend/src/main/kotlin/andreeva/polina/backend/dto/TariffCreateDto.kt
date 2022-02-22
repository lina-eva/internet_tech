package andreeva.polina.backend.dto

data class TariffCreateDto(
    val name: String,
    val cost: Long,
    val services: Set<Int>?
)
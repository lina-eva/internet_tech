package andreeva.polina.backend.dto

data class TariffUpdateDto(
    val id: Long,
    val name: String?,
    val cost: Long?,
    val serviceList: Set<Int>?
)

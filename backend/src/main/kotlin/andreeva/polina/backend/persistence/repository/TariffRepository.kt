package andreeva.polina.backend.persistence.repository

import andreeva.polina.backend.persistence.entity.Tariff
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface TariffRepository : JpaRepository<Tariff, Long> {
    @Modifying
    @Query("update Tariff t set t.name=:name, t.cost=:cost where t.id=:id")
    fun updateTariffById(
        @Param("id") id: Long,
        @Param("name") name: String,
        @Param("cost") cost: Long,
    )

    @Modifying
    @Query("delete from service_list where tariff_id=:id", nativeQuery = true)
    fun deleteServiceList(@Param("id") id: Long)

    @Modifying
    @Query("insert into service_list(tariff_id, service) values(:id, :service)", nativeQuery = true)
    fun addService(@Param("id") id: Long,@Param("service") service: String)
}
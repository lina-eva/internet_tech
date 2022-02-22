package andreeva.polina.backend.persistence.entity

import com.fasterxml.jackson.annotation.JsonFormat
import org.springframework.data.jpa.domain.AbstractPersistable
import javax.persistence.CollectionTable
import javax.persistence.Column
import javax.persistence.ElementCollection
import javax.persistence.Entity
import javax.persistence.EnumType
import javax.persistence.Enumerated
import javax.persistence.Table

@Entity
@Table(name = "tariff")
data class Tariff(
    @Column(name = "name", nullable = false)
    val name: String,
    @Column(name = "cost", nullable = false)
    val cost: Long,
    @Column(name = "service")
    @Enumerated(EnumType.STRING)
    @ElementCollection(targetClass = Service::class)
    @CollectionTable(name = "service_list")
    val serviceList: Set<Service>?
): AbstractPersistable<Long>()

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
enum class Service(
    val serviceName: String,
    val description: String,
    var id: Int? = null
) {
    UNLIMITED_INTERNET_PACKAGE(
        "Безлимитный пакет интернета",
        "Подключив эту услугу, вы получите возможность использовать мобильный интернет безлимитно"
    ),

    UNLIMITED_PHONE_CALLS_IN_COUNTRY(
        "Безлимитные звонки по России",
        "Подключив эту услугу, вы получите возможность осуществлять звонки по России"
    ),

    ROAMINING(
        "Скидка на звонки вне страны",
        "Подключив эту услугу, стоимость за роуминг значительно снизится"
    ),

    UNLIMITED_MESSENGER_TRAFFIC(
        "Безлимитный доступ к мессенджерам",
        "Подключив эту услугу, вы получите безлимитный доступ к мессенджерам (Telegram, Whatsapp, Viber)"
    ),

    UNLIMITED_YOUTUBE_TRAFFIC(
        "Безлимитный доступ к Youtube",
        "Подключив эту услугу, вы получите возможность смотреть безлимитно ролики на видеохостинге Youtube"
    ),

    UNLIMITED_SMS_PACKAGE(
        "Безлимитный пакет СМС",
        "Подключив эту услугу, у вас снимается ограничение на кол-во смс в тарифе"
    ),

    INTERNET_DISTRIBUTION_WITHOUT_SPEED_LOSS(
        "Раздача интернета без ограничений скорости",
        "Теперь раздача интернета на другие устройства будет без ограничений в скорости"
    );

    init {
        id = ordinal
    }

    companion object {
        fun findByOrdinals(ordinals: Set<Int>?) = values().filter { ordinals?.contains(it.ordinal) ?: false }
    }
}
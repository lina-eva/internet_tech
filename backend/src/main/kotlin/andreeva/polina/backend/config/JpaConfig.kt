package andreeva.polina.backend.config

import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.context.annotation.Configuration
import org.springframework.data.jpa.repository.config.EnableJpaAuditing
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.transaction.annotation.EnableTransactionManagement

@EnableTransactionManagement
@EnableJpaAuditing
@EntityScan(basePackages = [
    "andreeva.polina.backend.persistence"
])
@EnableJpaRepositories(basePackages = [
    "andreeva.polina.backend.persistence"
])
@Configuration
class JpaConfig
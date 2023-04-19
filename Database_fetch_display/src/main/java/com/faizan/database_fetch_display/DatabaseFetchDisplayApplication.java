package com.faizan.database_fetch_display;

import com.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class DatabaseFetchDisplayApplication {

    @Autowired
    private UserRepository userRepository;

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(DatabaseFetchDisplayApplication.class, args);

        DatabaseFetchDisplayApplication application = context.getBean(DatabaseFetchDisplayApplication.class);

        // Create a new user
//        User user = new User();
//        user.setName("John Doe");
//        user.setEmail("john.doe@example.com");
//        application.userRepository.save(user);
//
//
//        // Retrieve the user from the database and print its details
//        User retrievedUser = application.userRepository.findByName("John Doe").get(0);
//        System.out.println("Retrieved user: " + retrievedUser);
    }
}

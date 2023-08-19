package com.LABchat.LABchat.controller;

import com.LABchat.LABchat.entity.Message;
import com.LABchat.LABchat.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Controller
public class MessageController {
    private static final Logger logger = LoggerFactory.getLogger(MessageController.class);
    private static Integer idCounter = 1;

    @Autowired
    private UsuarioController usuarioController;
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    private List<User> usuariosLogados = new ArrayList<>();

    public MessageController() {
    }

    @MessageMapping("/chat")
    @SendTo("/topic/greetings")
    public Message message (Message messageDTO) throws Exception {
        logger.debug("Received message: {}", messageDTO.getMessage());
        String time = new SimpleDateFormat("HH:mm:ss").format(new Date());
        return messageDTO;
    }

    @MessageMapping("/user-connected")
    @SendTo("/topic/user-connected")
    public User userConnected(@Payload String username) {
        User user = new User(idCounter, username);
        usuariosLogados.add(user);
        idCounter++;
        sendUserListUpdate();
        return user;
    }

    @MessageMapping("/user-disconnected")
    public void userDisconnected(@Payload String username) {
        usuariosLogados.removeIf(user -> user.getUsername().equalsIgnoreCase(username));
        sendUserListUpdate();
    }

    private void sendUserListUpdate() {
        String nome = "nome";
        System.out.println(nome);
        for(User usuario:usuariosLogados){
            System.out.println(usuario.getUsername());
        }
        simpMessagingTemplate.convertAndSend("/topic/user-list", usuariosLogados);
    }


}

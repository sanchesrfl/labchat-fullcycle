package com.LABchat.LABchat.controller;

import com.LABchat.LABchat.dto.MessageDTO;
import com.LABchat.LABchat.entity.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class MessageController {
    private static final Logger logger = LoggerFactory.getLogger(MessageController.class);

    @MessageMapping("/chat")
    @SendTo("/topic/greetings")
    public Message message (Message messageDTO) throws Exception {
        logger.debug("Received message: {}", messageDTO.getMessage());
        String time = new SimpleDateFormat("HH:mm").format(new Date());
        return new Message(messageDTO.getFrom(), messageDTO.getMessage(), time);
    }

}

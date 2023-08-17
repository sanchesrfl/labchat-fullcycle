package com.LABchat.LABchat.controller;

import com.LABchat.LABchat.dto.MessageDTO;
import com.LABchat.LABchat.entity.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
public class MessageController {

    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public MessageDTO send(Message message) throws Exception {
        String time = new SimpleDateFormat("HH:mm").format(new Date());
        return new MessageDTO(message.getFrom(), message.getMessage(), time);
    }
}

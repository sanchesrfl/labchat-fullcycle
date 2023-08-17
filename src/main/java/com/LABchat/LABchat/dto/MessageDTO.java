package com.LABchat.LABchat.dto;

import lombok.*;
import org.springframework.messaging.Message;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MessageDTO{
    private String from;
    private String message;
    private String time;
}

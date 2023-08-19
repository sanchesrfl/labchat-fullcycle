package com.LABchat.LABchat.entity;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Message {
    private Integer id;
    private String from;
    private String message;
    private String time;

}

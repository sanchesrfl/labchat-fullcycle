package com.LABchat.LABchat.controller;

import com.LABchat.LABchat.entity.User;
import com.LABchat.LABchat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class UsuarioController {
    @Autowired
    private UserService service;
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User usuario){
        return new ResponseEntity<>(new User(usuario.getUsername(),this.service.logar(usuario)), HttpStatus.CREATED);
    }
}

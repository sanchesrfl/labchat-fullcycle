package com.LABchat.LABchat.controller;

import com.LABchat.LABchat.entity.User;
import com.LABchat.LABchat.service.UserService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@RestController
@RequestMapping("/user")
public class UsuarioController {
    User usuario = new User();
    List<User> usuariosLogados = new ArrayList<>();
    @Autowired
    private UserService service;
    @PostMapping("/login")
    public User login(@RequestBody User usuario){
        System.out.println(usuario.getUsername()+" "+ usuario.getIsLogged());
        this.usuario.setIsLogged(usuario.getIsLogged());
        this.usuario.setUsername(usuario.getUsername());
        return usuario;
    }

}

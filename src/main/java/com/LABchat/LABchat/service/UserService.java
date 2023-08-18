package com.LABchat.LABchat.service;

import com.LABchat.LABchat.entity.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public boolean logar(User usuario){
        usuario.setIsLogged(true);
        return usuario.getIsLogged();
    }
}

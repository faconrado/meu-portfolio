package com.portfolio.fotoapp.service;

import org.springframework.stereotype.Service;
import com.portfolio.fotoapp.model.Perfil;
import com.portfolio.fotoapp.repository.PerfilRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

    @Service
    public class PerfilService {

        @Autowired
        private PerfilRepository perfilRepository;

        public void salvarFoto(byte[] foto) {
            Perfil perfil = new Perfil();
            perfil.setId(1); // ID fixo
            perfil.setFoto(foto);
            perfilRepository.save(perfil);
        }

        public byte[] buscarFoto() {
            Optional<Perfil> perfil = perfilRepository.findById(1);
            return perfil.map(Perfil::getFoto).orElse(null);
        }
    }



package com.portfolio.fotoapp.controller;

import com.portfolio.fotoapp.service.PerfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

//public class PerfilController {

    @RestController
    @RequestMapping("/perfil")
    public class PerfilController {

        @Autowired
        private PerfilService perfilService;

        @PostMapping("/foto")
        public ResponseEntity<?> uploadFoto(@RequestParam("file") MultipartFile file) {
            try {
                perfilService.salvarFoto(file.getBytes());
                return ResponseEntity.ok("Foto salva com sucesso!");
            } catch (IOException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao salvar a imagem");
            }
        }

        @GetMapping("/foto")
        public ResponseEntity<byte[]> obterFoto() {
            byte[] imagem = perfilService.buscarFoto();
            if (imagem == null) {
                return ResponseEntity.notFound().build();
            }

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG); // ou IMAGE_PNG dependendo do tipo da imagem
            return new ResponseEntity<>(imagem, headers, HttpStatus.OK);
        }
    }



/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.helpmarket.controllers;

import com.helpmarket.models.Pedido;
import javax.inject.Named;
import javax.faces.view.ViewScoped;

/**
 *
 * @author dennix
 */
@Named(value = "pedidoController")
@ViewScoped
public class PedidoController {

    /**
     * Creates a new instance of PedidoController
     */
    public PedidoController() {
    }
    
    public Pedido GetPedido(){
        return null;
    }
    
}

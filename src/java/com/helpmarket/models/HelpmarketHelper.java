/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.helpmarket.models;

import com.helpmarket.util.HelpMarketHibernateUtil;
import java.util.Date;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 *
 * @author dennix
 */
public class HelpmarketHelper {

    Session session = null;

    public HelpmarketHelper() {
        this.session = HelpMarketHibernateUtil.getSessionFactory().getCurrentSession();
    }

    private Integer SaveTmpPedido() {
        Integer id = null;
        Transaction tx = null;
        try {            
            tx = session.beginTransaction();
            Pedido pedido = new Pedido(0, new Date());
            id = (Integer) session.save(pedido);
            tx.commit();
        } catch (HibernateException e) {
            if(tx!=null) tx.rollback();
            e.printStackTrace();
        }
        return id;
    }

    public Pedido GetPedido() {
        Pedido pedido = new Pedido(123, new Date());
        return pedido;
    }
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.project;

import javax.swing.*;
import java.awt.event.ActionEvent;

public class Project extends JFrame {

    private final JLabel lblUser;
    private final JLabel lblPass;
    private JTextField txtUser;
    private JPasswordField txtPass;
    private final JButton btnLogin;

    public Project() {
        setTitle("Hospital System - Login");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(null);

        lblUser = new JLabel("Username:");
        lblUser.setBounds(50, 50, 100, 30);
        add(lblUser);

        txtUser = new JTextField();
        txtUser.setBounds(150, 50, 180, 30);
        add(txtUser);

        lblPass = new JLabel("Password:");
        lblPass.setBounds(50, 100, 100, 30);
        add(lblPass);

        txtPass = new JPasswordField();
        txtPass.setBounds(150, 100, 180, 30);
        add(txtPass);

        btnLogin = new JButton("Login");
        btnLogin.setBounds(150, 160, 100, 40);
        add(btnLogin);

        btnLogin.addActionListener((ActionEvent e) -> {
            String username = txtUser.getText();
            String password = new String(txtPass.getPassword());
            
            if (username.equals("Kegalle") && password.equals("2425")) {
                JOptionPane.showMessageDialog(null, "Login Successful!");
                
                Dashboard dashboard = new Dashboard();
                dashboard.setVisible(true);
                dispose();
            } else {
                JOptionPane.showMessageDialog(null, "Invalid Username or Password!", "Error", JOptionPane.ERROR_MESSAGE);
            }
        }); 
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new Project().setVisible(true);
        });
    }
}

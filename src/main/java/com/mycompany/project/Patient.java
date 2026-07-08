package com.mycompany.project;

import javax.swing.*;
import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Patient extends JFrame {

    private JLabel lblTitle, lblName, lblAge, lblDisease;
    private JTextField txtName, txtAge, txtDisease;
    private JButton btnSave, btnBack;

    public Patient() {
        setTitle("Hospital System - Patient Registration");
        setSize(450, 420);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(null);

        // ---- COLORS & FONTS ----
        Color bgColor = new Color(244, 246, 247);       // Light Gray Background
        Color primaryColor = new Color(44, 62, 80);     // Dark Blue/Slate
        Color accentColor = new Color(52, 152, 219);    // Bright Blue
        Color textColor = new Color(44, 62, 80);
        
        Font titleFont = new Font("Segoe UI", Font.BOLD, 22);
        Font labelFont = new Font("Segoe UI", Font.PLAIN, 14);
        Font buttonFont = new Font("Segoe UI", Font.BOLD, 14);

        getContentPane().setBackground(bgColor);

        // Title
        lblTitle = new JLabel("Patient Registration");
        lblTitle.setFont(titleFont);
        lblTitle.setForeground(primaryColor);
        lblTitle.setBounds(120, 20, 250, 30);
        add(lblTitle);

        // Name
        lblName = new JLabel("Patient Name:");
        lblName.setFont(labelFont);
        lblName.setForeground(textColor);
        lblName.setBounds(40, 90, 100, 30);
        add(lblName);

        txtName = new JTextField();
        txtName.setFont(labelFont);
        txtName.setBounds(150, 90, 230, 30);
        txtName.setBorder(BorderFactory.createLineBorder(new Color(189, 195, 199), 1)); // Clean Border
        add(txtName);

        // Age
        lblAge = new JLabel("Age:");
        lblAge.setFont(labelFont);
        lblAge.setForeground(textColor);
        lblAge.setBounds(40, 150, 100, 30);
        add(lblAge);

        txtAge = new JTextField();
        txtAge.setFont(labelFont);
        txtAge.setBounds(150, 150, 230, 30);
        txtAge.setBorder(BorderFactory.createLineBorder(new Color(189, 195, 199), 1));
        add(txtAge);

        // Disease
        lblDisease = new JLabel("Disease:");
        lblDisease.setFont(labelFont);
        lblDisease.setForeground(textColor);
        lblDisease.setBounds(40, 210, 100, 30);
        add(lblDisease);

        txtDisease = new JTextField();
        txtDisease.setFont(labelFont);
        txtDisease.setBounds(150, 210, 230, 30);
        txtDisease.setBorder(BorderFactory.createLineBorder(new Color(189, 195, 199), 1));
        add(txtDisease);

        // Save Button
        btnSave = new JButton("Save Patient");
        btnSave.setFont(buttonFont);
        btnSave.setBackground(accentColor);
        btnSave.setForeground(Color.WHITE);
        btnSave.setFocusPainted(false); 
        btnSave.setBorderPainted(false);
        btnSave.setBounds(50, 290, 140, 40);
        add(btnSave);

        // Back Button
        btnBack = new JButton("Back");
        btnBack.setFont(buttonFont);
        btnBack.setBackground(primaryColor);
        btnBack.setForeground(Color.WHITE);
        btnBack.setFocusPainted(false);
        btnBack.setBorderPainted(false);
        btnBack.setBounds(240, 290, 140, 40);
        add(btnBack);

        // Save Click
        btnSave.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String name = txtName.getText().trim();
                String age = txtAge.getText().trim();
                String disease = txtDisease.getText().trim();

                if(name.isEmpty() || age.isEmpty() || disease.isEmpty()) {
                    JOptionPane.showMessageDialog(null, "Please fill all the details!", "Error", JOptionPane.ERROR_MESSAGE);
                } else {
                    JOptionPane.showMessageDialog(null, "Patient '" + name + "' Saved Successfully!", "Success", JOptionPane.INFORMATION_MESSAGE);
                    txtName.setText("");
                    txtAge.setText("");
                    txtDisease.setText("");
                }
            }
        });

        // Back Click
        btnBack.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Dashboard dashboard = new Dashboard();
                dashboard.setVisible(true);
                dispose();
            }
        });
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new Patient().setVisible(true);
        });
    }
}
package com.mycompany.project;

import javax.swing.*;
import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Doctor extends JFrame {

    private final JLabel lblTitle;
    private final JLabel lblName;
    private final JLabel lblSpecialty;
    private final JLabel lblContact;
    private JTextField txtName, txtSpecialty, txtContact;
    private final JButton btnSave;
    private final JButton btnBack;

    public Doctor() {
        setTitle("Hospital System - Doctor Registration");
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

        // Background Color
        getContentPane().setBackground(bgColor);

        // Title
        lblTitle = new JLabel("Doctor Registration");
        lblTitle.setFont(titleFont);
        lblTitle.setForeground(primaryColor);
        lblTitle.setBounds(120, 20, 250, 30);
        add(lblTitle);

        // Doctor Name
        lblName = new JLabel("Doctor Name:");
        lblName.setFont(labelFont);
        lblName.setForeground(textColor);
        lblName.setBounds(40, 90, 100, 30);
        add(lblName);

        txtName = new JTextField();
        txtName.setFont(labelFont);
        txtName.setBounds(150, 90, 230, 30);
        txtName.setBorder(BorderFactory.createLineBorder(new Color(189, 195, 199), 1));
        add(txtName);

        // Specialization
        lblSpecialty = new JLabel("Specialization:");
        lblSpecialty.setFont(labelFont);
        lblSpecialty.setForeground(textColor);
        lblSpecialty.setBounds(40, 150, 100, 30);
        add(lblSpecialty);

        txtSpecialty = new JTextField();
        txtSpecialty.setFont(labelFont);
        txtSpecialty.setBounds(150, 150, 230, 30);
        txtSpecialty.setBorder(BorderFactory.createLineBorder(new Color(189, 195, 199), 1));
        add(txtSpecialty);

        // Contact Number
        lblContact = new JLabel("Contact No:");
        lblContact.setFont(labelFont);
        lblContact.setForeground(textColor);
        lblContact.setBounds(40, 210, 100, 30);
        add(lblContact);

        txtContact = new JTextField();
        txtContact.setFont(labelFont);
        txtContact.setBounds(150, 210, 230, 30);
        txtContact.setBorder(BorderFactory.createLineBorder(new Color(189, 195, 199), 1));
        add(txtContact);

        // Save Button
        btnSave = new JButton("Save Doctor");
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
                String specialty = txtSpecialty.getText().trim();
                String contact = txtContact.getText().trim();

                if(name.isEmpty() || specialty.isEmpty() || contact.isEmpty()) {
                    JOptionPane.showMessageDialog(null, "Please fill all the details!", "Error", JOptionPane.ERROR_MESSAGE);
                } else {
                    JOptionPane.showMessageDialog(null, "Doctor '" + name + "' Saved Successfully!", "Success", JOptionPane.INFORMATION_MESSAGE);
                    txtName.setText("");
                    txtSpecialty.setText("");
                    txtContact.setText("");
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
}

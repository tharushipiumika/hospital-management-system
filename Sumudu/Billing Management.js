package com.mycompany.project;

import javax.swing.*;
import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Billing extends JFrame {

    private final JLabel lblTitle;
    private final JLabel lblPatient;

    private JLabel lblTreatmentFee, lblRoomFee;
    private JTextField txtPatient, txtTreatmentFee, txtRoomFee;
    private JButton btnSave, btnBack;

    public Billing() {
        setTitle("Hospital System - Billing Management");
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
        lblTitle = new JLabel("Billing Management");
        lblTitle.setFont(titleFont);
        lblTitle.setForeground(primaryColor);
        lblTitle.setBounds(120, 20, 250, 30);
        add(lblTitle);

        // Patient Info
        lblPatient = new JLabel("Patient Name/ID:");
        lblPatient.setFont(labelFont);
        lblPatient.setForeground(textColor);
        lblPatient.setBounds(40, 90, 110, 30);
        add(lblPatient);

        txtPatient = new JTextField();
        txtPatient.setFont(labelFont);
        txtPatient.setBounds(160, 90, 220, 30);
        txtPatient.setBorder(BorderFactory.createLineBorder(new Color(189, 195, 199), 1));
        add(txtPatient);

        // Treatment Fee
        lblTreatmentFee = new JLabel("Treatment Fee:");
        lblTreatmentFee.setFont(labelFont);
        lblTreatmentFee.setForeground(textColor);
        lblTreatmentFee.setBounds(40, 150, 110, 30);
        add(lblTreatmentFee);

        txtTreatmentFee = new JTextField();
        txtTreatmentFee.setFont(labelFont);
        txtTreatmentFee.setBounds(160, 150, 220, 30);
        txtTreatmentFee.setBorder(BorderFactory.createLineBorder(new Color(189, 195, 199), 1));
        add(txtTreatmentFee);

        // Room Fee
        lblRoomFee = new JLabel("Room Fee:");
        lblRoomFee.setFont(labelFont);
        lblRoomFee.setForeground(textColor);
        lblRoomFee.setBounds(40, 210, 110, 30);
        add(lblRoomFee);

        txtRoomFee = new JTextField();
        txtRoomFee.setFont(labelFont);
        txtRoomFee.setBounds(160, 210, 220, 30);
        txtRoomFee.setBorder(BorderFactory.createLineBorder(new Color(189, 195, 199), 1));
        add(txtRoomFee);

        // Save Button
        btnSave = new JButton("Save Bill");
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
                String patient = txtPatient.getText().trim();
                String treatmentFee = txtTreatmentFee.getText().trim();
                String roomFee = txtRoomFee.getText().trim();

                if(patient.isEmpty() || treatmentFee.isEmpty() || roomFee.isEmpty()) {
                    JOptionPane.showMessageDialog(null, "Please fill all the details!", "Error", JOptionPane.ERROR_MESSAGE);
                } else {
                    JOptionPane.showMessageDialog(null, "Bill for '" + patient + "' Saved Successfully!", "Success", JOptionPane.INFORMATION_MESSAGE);
                    txtPatient.setText("");
                    txtTreatmentFee.setText("");
                    txtRoomFee.setText("");
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

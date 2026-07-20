/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.project;

import javax.swing.*;
import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Appointment extends JFrame {

    private final JLabel lblTitle;
    private final JLabel lblPatient;

    private final JLabel lblDoctor;
    private final JLabel lblDate;
    private JTextField txtPatient, txtDoctor, txtDate;
    private final JButton btnSave;
    private final JButton btnBack;

    public Appointment() {
        setTitle("Hospital System - Appointment Management");
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
        lblTitle = new JLabel("Book Appointment");
        lblTitle.setFont(titleFont);
        lblTitle.setForeground(primaryColor);
        lblTitle.setBounds(120, 20, 250, 30);
        add(lblTitle);

        // Patient Name / ID
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

        // Doctor Name
        lblDoctor = new JLabel("Doctor Name:");
        lblDoctor.setFont(labelFont);
        lblDoctor.setForeground(textColor);
        lblDoctor.setBounds(40, 150, 110, 30);
        add(lblDoctor);

        txtDoctor = new JTextField();
        txtDoctor.setFont(labelFont);
        txtDoctor.setBounds(160, 150, 220, 30);
        txtDoctor.setBorder(BorderFactory.createLineBorder(new Color(189, 195, 199), 1));
        add(txtDoctor);

        // Appointment Date
        lblDate = new JLabel("Date (YYYY-MM-DD):");
        lblDate.setFont(labelFont);
        lblDate.setForeground(textColor);
        lblDate.setBounds(40, 210, 130, 30);
        add(lblDate);

        txtDate = new JTextField();
        txtDate.setFont(labelFont);
        txtDate.setBounds(180, 210, 200, 30);
        txtDate.setBorder(BorderFactory.createLineBorder(new Color(189, 195, 199), 1));
        add(txtDate);

        // Save Button
        btnSave = new JButton("Book Now");
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
        btnSave.addActionListener((ActionEvent e) -> {
            String patient = txtPatient.getText().trim();
            String doctor = txtDoctor.getText().trim();
            String date = txtDate.getText().trim();
            
            if(patient.isEmpty() || doctor.isEmpty() || date.isEmpty()) {
                JOptionPane.showMessageDialog(null, "Please fill all the details!", "Error", JOptionPane.ERROR_MESSAGE);
            } else {
                JOptionPane.showMessageDialog(null, "Appointment Booked Successfully for '" + patient + "'!", "Success", JOptionPane.INFORMATION_MESSAGE);
                
                // Fields clear 
                txtPatient.setText("");
                txtDoctor.setText("");
                txtDate.setText("");
            }
        });

        // Back Click
        btnBack.addActionListener((ActionEvent e) -> {
            Dashboard dashboard = new Dashboard();
            dashboard.setVisible(true);
            dispose();
        });
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new Appointment().setVisible(true);
        });
    }
}

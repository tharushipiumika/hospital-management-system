package com.mycompany.project;

import javax.swing.*;
import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;

public class Dashboard extends JFrame {

    private final JLabel lblTitle;
    private final JButton btnPatient;
    private final JButton btnDoctor;
    private final JButton btnBilling;
    private final JButton btnAppointment;

    public Dashboard() {
        setTitle("Hospital Management System - Dashboard");
        setSize(500, 450); 
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(null);

        // ---- COLORS & FONTS ----
        Color bgColor = new Color(244, 246, 247);       // Light Gray Background
        Color primaryColor = new Color(44, 62, 80);     // Dark Blue/Slate
        Color accentColor = new Color(52, 152, 219);    // Bright Blue
        
        Font titleFont = new Font("Segoe UI", Font.BOLD, 24);
        Font buttonFont = new Font("Segoe UI", Font.BOLD, 15);

        // Background Color 
        getContentPane().setBackground(bgColor);

        // System Main Title
        lblTitle = new JLabel("Hospital Management System");
        lblTitle.setFont(titleFont);
        lblTitle.setForeground(primaryColor);
        lblTitle.setHorizontalAlignment(SwingConstants.CENTER);
        lblTitle.setBounds(50, 30, 400, 40);
        add(lblTitle);

        // 1. Patient Registration Button
        btnPatient = new JButton("Patient Registration");
        btnPatient.setFont(buttonFont);
        btnPatient.setBackground(accentColor);
        btnPatient.setForeground(Color.WHITE);
        btnPatient.setFocusPainted(false);
        btnPatient.setBorderPainted(false);
        btnPatient.setBounds(100, 110, 300, 45);
        add(btnPatient);

        // Doctor Registration Button
        btnDoctor = new JButton("Doctor Registration");
        btnDoctor.setFont(buttonFont);
        btnDoctor.setBackground(accentColor);
        btnDoctor.setForeground(Color.WHITE);
        btnDoctor.setFocusPainted(false);
        btnDoctor.setBorderPainted(false);
        btnDoctor.setBounds(100, 180, 300, 45);
        add(btnDoctor);

        // Book Appointment Button 
        btnAppointment = new JButton("Book Appointment");
        btnAppointment.setFont(buttonFont);
        btnAppointment.setBackground(accentColor);
        btnAppointment.setForeground(Color.WHITE);
        btnAppointment.setFocusPainted(false);
        btnAppointment.setBorderPainted(false);
        btnAppointment.setBounds(100, 250, 300, 45);
        add(btnAppointment);

        // Billing Management Button
        btnBilling = new JButton("Billing Management");
        btnBilling.setFont(buttonFont);
        btnBilling.setBackground(primaryColor); 
        btnBilling.setForeground(Color.WHITE);
        btnBilling.setFocusPainted(false);
        btnBilling.setBorderPainted(false);
        btnBilling.setBounds(100, 320, 300, 45);
        add(btnBilling);

        // ---- BUTTON CLICK EVENTS ----

        // Patient Click
        btnPatient.addActionListener((ActionEvent e) -> {
            new Patient().setVisible(true);
            dispose();
        });

        // Doctor Click
        btnDoctor.addActionListener((ActionEvent e) -> {
            new Doctor().setVisible(true);
            dispose();
        });

        // Appointment Click
        btnAppointment.addActionListener((ActionEvent e) -> {
            new Appointment().setVisible(true);
            dispose();
        });

        // Billing Click
        btnBilling.addActionListener((ActionEvent e) -> {
            new Billing().setVisible(true);
            dispose();
        });
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new Dashboard().setVisible(true);
        });
    }
}

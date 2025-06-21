import React from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TermsOfServiceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <ThemedView style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            Terms of Service
          </ThemedText>
          <ThemedText style={styles.subtitle}>
            Work Chain Bazaar
          </ThemedText>
          <ThemedText style={styles.lastUpdated}>
            Last updated: June 22, 2025
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            1. Agreement to Terms
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            By accessing and using Work Chain Bazaar ("the App"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            2. Description of Service
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            Work Chain Bazaar is a job marketplace platform that connects job seekers with job providers. Our service allows users to:
          </ThemedText>
          <View style={styles.bulletList}>
            <ThemedText style={styles.bulletPoint}>
              • Post job opportunities
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • Browse and apply for jobs
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • Communicate with other users
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • Process payments through Razorpay
            </ThemedText>
          </View>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            3. User Accounts
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            To use our service, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            4. User Conduct
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            You agree not to:
          </ThemedText>
          <View style={styles.bulletList}>
            <ThemedText style={styles.bulletPoint}>
              • Post false or misleading job listings
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • Harass or discriminate against other users
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • Violate any applicable laws or regulations
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • Attempt to gain unauthorized access to our systems
            </ThemedText>
          </View>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            5. Payments and Fees
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            Payment processing is handled by Razorpay. A processing fee may apply to certain transactions. All fees are clearly disclosed before payment confirmation.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            6. Intellectual Property
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            The App and its content are owned by Work Chain Bazaar and protected by intellectual property laws. You may not copy, modify, or distribute our content without permission.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            7. Privacy
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            8. Limitation of Liability
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            Work Chain Bazaar shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            9. Termination
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            We may terminate or suspend your account at any time for violation of these terms or for any other reason at our discretion.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            10. Changes to Terms
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of the revised terms.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            11. Contact Information
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            If you have any questions about these Terms of Service, please contact us through the app or visit our website.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.footer}>
          <ThemedText style={styles.footerText}>
            By using Work Chain Bazaar, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
    opacity: 0.8,
  },
  lastUpdated: {
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.6,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  bulletList: {
    marginLeft: 10,
    marginTop: 8,
  },
  bulletPoint: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 6,
  },
  footer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
    opacity: 0.7,
  },
});

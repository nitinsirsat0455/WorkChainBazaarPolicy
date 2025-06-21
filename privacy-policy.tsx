import React from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function PrivacyPolicyScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <ThemedView style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            Privacy Policy
          </ThemedText>
          <ThemedText style={styles.subtitle}>
            Work Chain Bazaar
          </ThemedText>
          <ThemedText style={styles.lastUpdated}>
            Last updated: June 21, 2025
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Introduction
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            Work Chain Bazaar ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your 
            information when you use our mobile application for job marketplace services.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Information We Collect
          </ThemedText>
          
          <ThemedText type="defaultSemiBold" style={styles.subTitle}>
            Personal Information
          </ThemedText>
          <View style={styles.bulletList}>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Email Address</Text>: For account creation and authentication
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Phone Number</Text>: For payment processing and confirmations
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Profile Information</Text>: Name and profile picture (optional)
            </ThemedText>
          </View>

          <ThemedText type="defaultSemiBold" style={styles.subTitle}>
            Location Information
          </ThemedText>
          <View style={styles.bulletList}>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>GPS Location</Text>: To show nearby jobs and calculate distances
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Location Preferences</Text>: To personalize job recommendations
            </ThemedText>
          </View>

          <ThemedText type="defaultSemiBold" style={styles.subTitle}>
            Payment Information
          </ThemedText>          <View style={styles.bulletList}>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Payment Data</Text>: Processed securely through Razorpay (we do not store payment details)
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Transaction History</Text>: For order tracking and support
            </ThemedText>
          </View>

          <ThemedText type="defaultSemiBold" style={styles.subTitle}>
            User Content and Communications
          </ThemedText>
          <View style={styles.bulletList}>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Job Postings</Text>: Job descriptions, images, and requirements you create
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Messages</Text>: Communications between job posters and workers
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Reviews and Ratings</Text>: Feedback you provide about jobs or workers
            </ThemedText>
          </View>

          <ThemedText type="defaultSemiBold" style={styles.subTitle}>
            Technical Information
          </ThemedText>
          <View style={styles.bulletList}>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Device Information</Text>: Device type, operating system, app version
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Usage Data</Text>: App features used, session duration, crash reports
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Log Data</Text>: Error logs and performance metrics for app improvement
            </ThemedText>
          </View>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            How We Use Your Information
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            We use your information to:
          </ThemedText>
          <View style={styles.bulletList}>
            <ThemedText style={styles.bulletPoint}>• Provide and maintain our job marketplace service</ThemedText>
            <ThemedText style={styles.bulletPoint}>• Process payments and transactions</ThemedText>
            <ThemedText style={styles.bulletPoint}>• Show relevant nearby job opportunities</ThemedText>
            <ThemedText style={styles.bulletPoint}>• Authenticate your account and prevent fraud</ThemedText>
            <ThemedText style={styles.bulletPoint}>• Improve our app performance and user experience</ThemedText>
            <ThemedText style={styles.bulletPoint}>• Send important notifications about your jobs and account</ThemedText>
            <ThemedText style={styles.bulletPoint}>• Provide customer support</ThemedText>
          </View>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Data Security
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            We implement appropriate security measures to protect your information:
          </ThemedText>
          <View style={styles.bulletList}>
            <ThemedText style={styles.bulletPoint}>• Encrypted data transmission (HTTPS/TLS)</ThemedText>
            <ThemedText style={styles.bulletPoint}>• Secure authentication with OTP verification</ThemedText>
            <ThemedText style={styles.bulletPoint}>• Regular security updates and monitoring</ThemedText>
            <ThemedText style={styles.bulletPoint}>• Limited access to personal information</ThemedText>
          </View>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Your Rights and Choices
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            You have the right to:
          </ThemedText>
          <View style={styles.bulletList}>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Access</Text>: Request a copy of your personal data
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Update</Text>: Modify your profile information in the app
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Delete</Text>: Request deletion of your account and data
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Location</Text>: Turn off location services in device settings
            </ThemedText>
          </View>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Third-Party Services
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            Our app integrates with:
          </ThemedText>
          <View style={styles.bulletList}>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Razorpay</Text>: Payment processing
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Google Maps</Text>: Location services
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Expo</Text>: App development platform
            </ThemedText>
          </View>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Information Sharing and Disclosure
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            We may share your information in the following circumstances:
          </ThemedText>
          <View style={styles.bulletList}>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Job Marketplace Function</Text>: Job posters can see basic profile information of applicants
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Service Providers</Text>: With Razorpay for payment processing, Google for location services
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Legal Requirements</Text>: When required by law or to protect our rights and users
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>With Your Consent</Text>: Any other sharing only with your explicit permission
            </ThemedText>
          </View>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Data Retention
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            We retain your information for the following periods:
          </ThemedText>
          <View style={styles.bulletList}>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Account Data</Text>: Until you delete your account
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Transaction Records</Text>: For 7 years (legal requirement)
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Job Postings</Text>: Until you delete them or account closure
            </ThemedText>
            <ThemedText style={styles.bulletPoint}>
              • <Text style={styles.bold}>Log Data</Text>: For 90 days maximum
            </ThemedText>
          </View>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Children's Privacy
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            Our service is not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children under 13. If you are a parent or guardian 
            and believe your child has provided personal information, please contact us to have 
            the information removed.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            International Data Transfers
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            Your information may be transferred to and processed in countries other than your 
            country of residence, including India and the United States, where our service 
            providers operate. We ensure appropriate safeguards are in place for such transfers.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Changes to This Privacy Policy
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by:
          </ThemedText>
          <View style={styles.bulletList}>
            <ThemedText style={styles.bulletPoint}>• Posting the new Privacy Policy in the app</ThemedText>
            <ThemedText style={styles.bulletPoint}>• Sending an email notification for significant changes</ThemedText>
            <ThemedText style={styles.bulletPoint}>• Displaying an app notification when you next open the app</ThemedText>
          </View>
          <ThemedText style={styles.paragraph}>
            Your continued use of the app after changes become effective constitutes acceptance 
            of the new Privacy Policy.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.footer}>
          <ThemedText style={styles.footerText}>
            By using Work Chain Bazaar, you agree to the collection and use of information 
            in accordance with this Privacy Policy.
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
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  lastUpdated: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingLeft: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 12,
  },
  bulletList: {
    marginLeft: 8,
    marginBottom: 15,
  },
  bulletPoint: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 6,
  },
  bold: {
    fontWeight: 'bold',
  },
  contactBox: {
    backgroundColor: '#F8F9FA',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  contactText: {
    fontSize: 15,
    marginBottom: 5,
  },
  footer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
  },
  footerText: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#666',
  },
});

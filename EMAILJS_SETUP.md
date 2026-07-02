# EmailJS Setup Instructions

Your contact form is now configured to send emails using EmailJS. Follow these steps to complete the setup:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email (chinyokaenrique@gmail.com)
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Body:**
```
You have a new message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "General" in the EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy it

## Step 5: Update Your Website Code

1. Open `/workspaces/default/code/src/app/App.tsx`
2. Find the `handleSubmit` function (around line 20-30)
3. Replace these placeholders with your actual values:

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Step 6: Test Your Form

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email (chinyokaenrique@gmail.com) for the test message

## Free Plan Limits

- 200 emails per month
- Perfect for a portfolio website

## Troubleshooting

- **Emails not arriving?** Check your spam folder
- **Form not sending?** Check the browser console for errors
- **Service blocked?** Make sure you verified your email in EmailJS
- **Need help?** Visit [EmailJS Documentation](https://www.emailjs.com/docs/)

## Security Note

Your Public Key is safe to use in client-side code. EmailJS is designed for frontend applications and your email credentials are never exposed.

# EmailJS Setup Guide

Follow these steps to set up EmailJS so you can receive messages from your contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** - you'll need this later

### For Gmail:
- You'll need to enable 2-factor authentication
- Create an App Password for EmailJS
- Use your Gmail address and the App Password

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

### Template Content:
```
Subject: New Contact Form Message from {{from_name}}

Hello Limo,

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}
Project Type: {{project_type}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
Reply directly to this email to respond to {{from_name}}.
```

### Template Variables:
Make sure these variables are included in your template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{project_type}}` - Selected project type
- `{{to_name}}` - Your name (Limo Kiprono)

4. **Copy the Template ID** - you'll need this later

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy the Public Key** - you'll need this later

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in your project root
2. Add your EmailJS configuration:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the values with your actual IDs from EmailJS:
- `your_service_id_here` → Your Service ID from Step 2
- `your_template_id_here` → Your Template ID from Step 3
- `your_public_key_here` → Your Public Key from Step 4

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your email for the message
5. Check the browser console for any errors

## Step 7: Deploy with Environment Variables

### For Vercel:
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each environment variable:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Redeploy your project

### For Netlify:
1. Go to **Site settings** → **Environment variables**
2. Add the same environment variables
3. Redeploy your site

## Troubleshooting

### Common Issues:

1. **"EmailJS configuration is missing" error**
   - Check that your `.env.local` file exists
   - Verify all three environment variables are set
   - Restart your development server

2. **Emails not being received**
   - Check your spam folder
   - Verify your email service is properly configured
   - Test the template in EmailJS dashboard

3. **"Failed to send email" error**
   - Check browser console for detailed error
   - Verify your Service ID, Template ID, and Public Key
   - Make sure your email service is active

4. **CORS errors**
   - EmailJS should handle CORS automatically
   - If issues persist, check EmailJS dashboard for service status

## EmailJS Free Plan Limits

- **200 emails/month** for free accounts
- **50 emails/day** maximum
- For higher limits, consider upgrading to a paid plan

## Security Notes

- The Public Key is safe to expose in frontend code
- Never expose your Private Key in frontend code
- EmailJS handles the secure email sending on their servers
- All environment variables starting with `NEXT_PUBLIC_` are exposed to the browser

## Alternative Email Template (Professional)

For a more professional look, you can use this template:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
    New Portfolio Contact Message
  </h2>
  
  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>From:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Subject:</strong> {{subject}}</p>
    <p><strong>Project Type:</strong> {{project_type}}</p>
  </div>
  
  <div style="margin: 20px 0;">
    <h3 style="color: #333;">Message:</h3>
    <div style="background: white; padding: 15px; border-left: 4px solid #7c3aed; border-radius: 4px;">
      {{message}}
    </div>
  </div>
  
  <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
  
  <p style="color: #666; font-size: 14px;">
    This message was sent from your portfolio website contact form.<br>
    Reply directly to this email to respond to {{from_name}}.
  </p>
</div>
```
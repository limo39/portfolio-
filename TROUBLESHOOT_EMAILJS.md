# EmailJS Troubleshooting Guide

## Quick Diagnosis Steps

### Step 1: Check Environment Variables
1. Open your browser's developer tools (F12)
2. Go to the Console tab
3. Look for the message "EmailJS Config Check:" when you submit the form
4. Verify all three values show "Set" instead of "Missing"

### Step 2: Test EmailJS Connection
1. Go to your contact page in development mode
2. You should see a yellow "EmailJS Test" box at the top of the contact form
3. Click "Test EmailJS" button
4. Check the console for detailed error messages

### Step 3: Verify EmailJS Dashboard Setup

#### Check Your Service:
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Navigate to **Email Services**
3. Ensure your service is **Connected** (green status)
4. Copy the **Service ID** and verify it matches your `.env.local`

#### Check Your Template:
1. Go to **Email Templates**
2. Find your template and click **Edit**
3. Verify these variables exist in your template:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{project_type}}`
   - `{{to_name}}`
   - `{{reply_to}}`

#### Test Template in Dashboard:
1. In your template editor, click **Test it**
2. Fill in test values for all variables
3. Send a test email to verify your template works

### Step 4: Check Your Email Template Content

Your EmailJS template should look like this:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

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

## Common Issues & Solutions

### Issue 1: "EmailJS configuration is missing"
**Cause**: Environment variables not loaded
**Solutions**:
1. Restart your development server: `npm run dev`
2. Check `.env.local` file exists in project root
3. Verify variable names start with `NEXT_PUBLIC_`
4. Check for typos in variable names

### Issue 2: "Failed to send email" with 400 error
**Cause**: Template variables don't match
**Solutions**:
1. Check template variables in EmailJS dashboard
2. Ensure all variables in template match the ones sent from code
3. Remove any unused variables from template

### Issue 3: "Failed to send email" with 401 error
**Cause**: Authentication issue
**Solutions**:
1. Verify your Public Key is correct
2. Check if your EmailJS service is properly connected
3. Regenerate your Public Key if needed

### Issue 4: "Failed to send email" with 402 error
**Cause**: EmailJS quota exceeded
**Solutions**:
1. Check your EmailJS usage in dashboard
2. Upgrade your plan if needed
3. Wait for quota reset (monthly)

### Issue 5: Form submits but no email received
**Cause**: Email delivery issue
**Solutions**:
1. Check spam/junk folder
2. Verify your email service configuration
3. Test with a different email address
4. Check EmailJS email log in dashboard

### Issue 6: CORS errors
**Cause**: Domain restrictions
**Solutions**:
1. Add your domain to EmailJS allowed origins
2. For localhost, use `http://localhost:3000`
3. For production, add your actual domain

## Debug Console Messages

### Successful Send:
```
EmailJS Config Check: {serviceId: "Set", templateId: "Set", publicKey: "Set"}
Sending email with params: {from_name: "...", ...}
Email sent successfully: {status: 200, text: "OK"}
```

### Failed Send:
```
EmailJS Config Check: {serviceId: "Missing", templateId: "Set", publicKey: "Set"}
Detailed error sending email: Error: EmailJS configuration is missing
```

## Testing Checklist

- [ ] Environment variables are set correctly
- [ ] Development server restarted after adding `.env.local`
- [ ] EmailJS service is connected and active
- [ ] Email template exists and has correct variables
- [ ] Template tested successfully in EmailJS dashboard
- [ ] Public key is correct and active
- [ ] No quota limits exceeded
- [ ] Email address is valid and accessible

## Production Deployment

### Vercel:
1. Add environment variables in Vercel dashboard
2. Redeploy your application
3. Test the contact form on live site

### Environment Variables for Vercel:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_5iadsho
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = template_yoykudi
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = Qp2DIOahQenGppIxC
```

## Alternative Solutions

If EmailJS continues to fail, consider these alternatives:

### Option 1: Formspree
```bash
npm install @formspree/react
```

### Option 2: Next.js API Route + Nodemailer
Create `/pages/api/contact.js` with server-side email sending

### Option 3: Netlify Forms
If deploying to Netlify, use built-in form handling

## Getting Help

1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Check EmailJS status page: https://status.emailjs.com/
3. Contact EmailJS support if service issues persist
4. Check browser network tab for detailed HTTP errors
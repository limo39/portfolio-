# Testing EmailJS Integration

## Quick Test Checklist

### 1. Environment Variables Check
Make sure your `.env.local` file contains:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 2. Development Test
1. Run `npm run dev`
2. Go to `http://localhost:3000/contact-me`
3. Fill out the contact form with test data:
   - **Name**: Test User
   - **Email**: test@example.com
   - **Project Type**: Web Development
   - **Subject**: Test Message
   - **Message**: This is a test message from the contact form.
4. Click "Send Message"
5. Check for success/error messages
6. Check your email inbox (and spam folder)

### 3. Browser Console Check
Open browser developer tools (F12) and check the Console tab for:
- ✅ "Email sent successfully" message
- ❌ Any error messages about missing configuration
- ❌ Network errors or CORS issues

### 4. EmailJS Dashboard Check
1. Log into your EmailJS dashboard
2. Go to **Email Log** to see sent emails
3. Verify the email was processed successfully

## Common Issues & Solutions

### Issue: "EmailJS configuration is missing"
**Solution**: 
- Check that `.env.local` exists in your project root
- Verify all three environment variables are set correctly
- Restart your development server (`npm run dev`)

### Issue: Form submits but no email received
**Solutions**:
- Check spam/junk folder
- Verify email service is properly configured in EmailJS
- Test the template directly in EmailJS dashboard
- Check EmailJS email log for delivery status

### Issue: CORS or network errors
**Solutions**:
- Verify your EmailJS public key is correct
- Check that your EmailJS service is active
- Try testing from EmailJS dashboard first

### Issue: Template variables not showing
**Solutions**:
- Verify template variable names match exactly:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{subject}}`
  - `{{message}}`
  - `{{project_type}}`
- Check template syntax in EmailJS dashboard

## Production Deployment Test

### For Vercel:
1. Add environment variables in Vercel dashboard
2. Deploy your site
3. Test the contact form on the live site
4. Verify emails are received

### Environment Variables in Vercel:
1. Go to your Vercel project
2. Settings → Environment Variables
3. Add:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = your_service_id
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = your_template_id
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = your_public_key
4. Redeploy

## Success Indicators

✅ **Form submission shows loading spinner**
✅ **Success message appears after submission**
✅ **Form fields are cleared after successful submission**
✅ **Email received in your inbox**
✅ **Email contains all form data correctly formatted**
✅ **Reply-to address is set to sender's email**

## Test Email Template

When testing, you should receive an email like this:

```
Subject: New Contact Form Message from Test User

Hello Limo,

You have received a new message from your portfolio contact form:

From: Test User (test@example.com)
Subject: Test Message
Project Type: Web Development

Message:
This is a test message from the contact form.

---
This message was sent from your portfolio website contact form.
Reply directly to this email to respond to Test User.
```

## Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Verify your EmailJS dashboard configuration
3. Test the template directly in EmailJS
4. Check the EmailJS documentation: https://www.emailjs.com/docs/
# Fix EmailJS on Vercel - Step by Step Guide

## 🚨 Quick Fix Checklist

### Step 1: Add Environment Variables to Vercel
1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add these three variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_l2jp0oj
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = template_yoykudi
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = Qp2DIOahQenGppIxC
```

4. **IMPORTANT**: After adding variables, click **Redeploy** (don't just save)

### Step 2: Add Your Vercel Domain to EmailJS
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Navigate to **Account** → **General**
3. Find **Allowed Origins** section
4. Add your Vercel domain: `https://your-project-name.vercel.app`
5. Also add: `https://*.vercel.app` (for all Vercel deployments)
6. Save the changes

### Step 3: Test Your Live Site
1. Go to your live Vercel site
2. Navigate to the contact page
3. Click "Show EmailJS Debug Info" (small link at top of form)
4. Check if all three config items show "✓ Set"
5. Try submitting the form
6. Check browser console (F12) for error details

## 🔍 Debugging Steps

### Check 1: Environment Variables in Vercel
```bash
# In your Vercel dashboard, verify you have:
NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_l2jp0oj
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = template_yoykudi  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = Qp2DIOahQenGppIxC
```

### Check 2: EmailJS Service Status
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Check **Email Services** - should show "Connected" in green
3. Check **Email Templates** - your template should exist
4. Test your template directly in the dashboard

### Check 3: Domain Configuration
In EmailJS Dashboard → Account → General → Allowed Origins:
```
https://your-project.vercel.app
https://*.vercel.app
http://localhost:3000
```

## 🐛 Common Error Messages & Solutions

### Error: "EmailJS configuration is missing"
**Cause**: Environment variables not set in Vercel
**Solution**: 
1. Add environment variables in Vercel dashboard
2. Redeploy the project
3. Clear browser cache

### Error: "Failed to send email" (400 Bad Request)
**Cause**: Template variables mismatch
**Solution**:
1. Check your EmailJS template has these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{project_type}}`
   - `{{to_name}}`
   - `{{reply_to}}`

### Error: "Failed to send email" (401 Unauthorized)
**Cause**: Invalid public key or service not connected
**Solution**:
1. Verify public key in Vercel matches EmailJS dashboard
2. Check if your email service is properly connected
3. Try regenerating your public key

### Error: "Failed to send email" (403 Forbidden)
**Cause**: Domain not allowed
**Solution**:
1. Add your Vercel domain to EmailJS allowed origins
2. Make sure to include `https://` prefix
3. Add wildcard `https://*.vercel.app` for all deployments

### Error: "Failed to send email" (404 Not Found)
**Cause**: Service ID or Template ID incorrect
**Solution**:
1. Double-check Service ID in EmailJS dashboard
2. Double-check Template ID in EmailJS dashboard
3. Verify these match your environment variables exactly

## 🧪 Testing Process

### 1. Local Testing (Should Work)
```bash
npm run dev
# Go to http://localhost:3000/contact-me
# Test the form - should work locally
```

### 2. Production Testing (Fix if Broken)
```bash
# Go to your live Vercel site
# Open browser console (F12)
# Try submitting the form
# Check console for detailed error messages
```

### 3. EmailJS Dashboard Testing
1. Go to EmailJS Dashboard → Email Templates
2. Click your template → "Test it"
3. Send a test email to verify template works

## 🔧 Alternative Solutions

### Option 1: Recreate EmailJS Service
If issues persist:
1. Create a new EmailJS service
2. Update your Service ID in Vercel
3. Redeploy

### Option 2: Use Formspree (Backup Solution)
```bash
npm install @formspree/react
```

### Option 3: Next.js API Route
Create `/pages/api/contact.js` for server-side email sending

## 📋 Verification Checklist

- [ ] Environment variables added to Vercel
- [ ] Project redeployed after adding variables
- [ ] Vercel domain added to EmailJS allowed origins
- [ ] EmailJS service shows "Connected" status
- [ ] EmailJS template exists and has correct variables
- [ ] Template tested successfully in EmailJS dashboard
- [ ] Browser console shows detailed error messages
- [ ] Debug component shows all config as "✓ Set"

## 🆘 Emergency Contact Method

If EmailJS continues to fail, users can still contact you via:
- Direct email: kipronolimo39@gmail.com
- Social media links on your contact page
- GitHub: https://github.com/limo39/

## 📞 Getting Help

1. **EmailJS Support**: Check https://www.emailjs.com/docs/
2. **Vercel Support**: Check https://vercel.com/docs
3. **Browser Console**: Always check for detailed error messages
4. **EmailJS Status**: Check https://status.emailjs.com/

## 🎯 Expected Success

When working correctly, you should see:
```
✅ EmailJS Config Check: {serviceId: "Set", templateId: "Set", publicKey: "Set"}
✅ Sending email with params: {...}
✅ Email sent successfully: {status: 200, text: "OK"}
```

And you should receive an email at kipronolimo39@gmail.com with the form data.
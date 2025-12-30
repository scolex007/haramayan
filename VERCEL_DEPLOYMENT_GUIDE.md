# Vercel Deployment & DNS Configuration Guide
## Haramayan Website Deployment

---

## Current Configuration Status

✅ **Vercel Config File:** `/haramayan-web/vercel.json` configured
✅ **Build Command:** `npm run build`
✅ **Output Directory:** `dist`
✅ **Framework:** Vite
✅ **GitHub Repository:** https://github.com/scolex007/haramayan

---

## Step 1: Deploy to Vercel (Choose One Method)

### Method A: Deploy via Vercel Dashboard (Recommended - Easiest)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/
   - Sign in with your GitHub account

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose: `scolex007/haramayan`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset:** Vite
   - **Root Directory:** `haramayan-web` (IMPORTANT!)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for build to complete
   - You'll get a URL like: `haramayan-web-xyz.vercel.app`

---

### Method B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to Project**
   ```bash
   cd /home/scolex/haramayan/haramayan-web
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```

4. **Deploy**
   ```bash
   vercel
   ```
   - Follow prompts:
     - Set up and deploy? **Y**
     - Which scope? Choose your account
     - Link to existing project? **N** (first time)
     - Project name? **haramayan-web**
     - In which directory? **./haramayan-web** or **./** (if already in directory)
     - Want to override settings? **N**

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

---

## Step 2: Add Custom Domain to Vercel

### Option 1: Main Domain (haramayan.com)

1. **Go to Vercel Dashboard**
   - Open your project: https://vercel.com/dashboard
   - Select "haramayan-web" project
   - Go to "Settings" → "Domains"

2. **Add Domain**
   - Click "Add Domain"
   - Enter: `haramayan.com`
   - Click "Add"

3. **Add www Subdomain (Optional)**
   - Click "Add Domain" again
   - Enter: `www.haramayan.com`
   - Click "Add"
   - Vercel will automatically redirect www → non-www (or vice versa)

---

### Option 2: Subdomain (e.g., app.haramayan.com)

1. **Add Subdomain**
   - In Domains section, click "Add Domain"
   - Enter: `app.haramayan.com` (or any subdomain you prefer)
   - Click "Add"

---

## Step 3: DNS Configuration

After adding your domain to Vercel, you'll see DNS instructions. Here's what you need:

### DNS Records for haramayan.com

#### Option A: Root Domain (haramayan.com)

**A Records** (Add these to your DNS provider):

```
Type: A
Name: @ (or root/blank)
Value: 76.76.21.21
TTL: 3600 (or Auto)
```

**CNAME for www** (if using www.haramayan.com):

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

---

#### Option B: Subdomain Only (app.haramayan.com)

**CNAME Record**:

```
Type: CNAME
Name: app (or your chosen subdomain)
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

---

### Where to Add DNS Records

Based on your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

#### GoDaddy:
1. Go to https://dcc.godaddy.com/domains
2. Find "haramayan.com" → Click "DNS"
3. Scroll to "Records"
4. Click "Add" for each record above

#### Namecheap:
1. Go to https://ap.www.namecheap.com/domains/list/
2. Find "haramayan.com" → Click "Manage"
3. Go to "Advanced DNS" tab
4. Click "Add New Record" for each record

#### Cloudflare:
1. Go to https://dash.cloudflare.com
2. Select "haramayan.com"
3. Go to "DNS" → "Records"
4. Click "Add record" for each record above

---

## Step 4: Verify DNS Configuration

### Check DNS Propagation

After adding DNS records, use these tools to verify:

1. **Vercel Dashboard**
   - Go to Settings → Domains
   - Look for "Valid Configuration" checkmark ✓
   - May show "Invalid Configuration" initially (wait 5-60 minutes)

2. **DNS Checker Tools**
   - https://dnschecker.org/
   - Enter: `haramayan.com` or your subdomain
   - Check Type: A or CNAME
   - Verify it points to Vercel's servers

3. **Command Line Check**
   ```bash
   # Check A record
   dig haramayan.com

   # Check CNAME
   dig www.haramayan.com
   ```

---

## Step 5: SSL Certificate (Automatic)

Vercel automatically provisions SSL certificates:
- ✅ Free SSL via Let's Encrypt
- ✅ Auto-renewal
- ✅ HTTPS forced by default
- Wait 1-5 minutes after DNS verification

---

## Recommended Domain Configuration

For **haramayan.com** website:

### Recommended Setup:

**Primary Domain:** `www.haramayan.com` → Website (Vercel)
**Root Domain:** `haramayan.com` → Redirects to www (Vercel auto-redirect)
**Subdomain:** `secure.haramayan.com` → Authentication backend (existing)

### DNS Records:

```dns
# Root domain - Points to Vercel
Type: A
Name: @
Value: 76.76.21.21

# WWW subdomain - Points to Vercel
Type: CNAME
Name: www
Value: cname.vercel-dns.com

# Secure subdomain - Points to your PHP backend (existing)
Type: A or CNAME
Name: secure
Value: [Your current backend server IP/hostname]
```

---

## Current Authentication URLs

Your current authentication is at `secure.haramayan.com`:
- Login: https://secure.haramayan.com/page-auth-login.php
- Register: https://secure.haramayan.com/page-auth-register.php

**These will continue working** - they're on a separate subdomain pointing to your PHP backend.

---

## Verification Checklist

After DNS configuration, verify:

- [ ] Vercel dashboard shows "Valid Configuration" ✓
- [ ] https://haramayan.com loads (may take 5-60 min)
- [ ] https://www.haramayan.com loads
- [ ] SSL certificate is active (🔒 in browser)
- [ ] https://secure.haramayan.com still works (auth backend)
- [ ] All navigation links work
- [ ] Testimonials section loads with images/video
- [ ] Login/Register redirect to secure.haramayan.com

---

## Troubleshooting

### DNS Not Propagating
- **Wait:** DNS can take 5 minutes to 48 hours
- **Check TTL:** Lower TTL for faster propagation
- **Clear cache:** Flush DNS cache on your computer
  ```bash
  # Windows
  ipconfig /flushdns

  # Mac/Linux
  sudo dscacheutil -flushcache
  ```

### SSL Certificate Pending
- Wait 5-10 minutes after DNS verification
- Vercel auto-provisions Let's Encrypt certificate
- Check Vercel dashboard for status

### Wrong Root Directory
If build fails:
- Vercel Settings → General → Root Directory
- Set to: `haramayan-web`
- Redeploy

### Build Command Issues
If build fails:
- Check Vercel build logs
- Ensure Node.js version: 20.x
- Verify package.json scripts are correct

---

## Quick Deploy Commands (CLI Method)

```bash
# One-time setup
cd /home/scolex/haramayan/haramayan-web
npm install -g vercel
vercel login

# Deploy to preview (testing)
vercel

# Deploy to production
vercel --prod

# Link domain (after CLI deploy)
vercel domains add haramayan.com
vercel domains add www.haramayan.com
```

---

## Environment Variables (If Needed)

If you have environment variables:

1. **Vercel Dashboard:**
   - Settings → Environment Variables
   - Add variables (e.g., API keys)
   - Redeploy after adding

2. **Via CLI:**
   ```bash
   vercel env add VITE_API_URL production
   ```

---

## Deployment Workflow (GitHub Auto-Deploy)

Once connected to GitHub:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

2. **Vercel Auto-Deploys:**
   - Detects push to `main` branch
   - Builds automatically
   - Deploys to production
   - Takes 1-3 minutes

3. **Preview Deployments:**
   - Every PR/branch gets a preview URL
   - Test before merging to main

---

## Summary: DNS Records You Need

### For haramayan.com (root domain):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 3600 |
| CNAME | www | cname.vercel-dns.com | 3600 |

### Keep existing record for authentication:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A or CNAME | secure | [Your backend server] | 3600 |

---

## Next Steps

1. ✅ Deploy to Vercel (via Dashboard or CLI)
2. ✅ Add custom domain in Vercel settings
3. ✅ Configure DNS records at your domain registrar
4. ⏰ Wait 5-60 minutes for DNS propagation
5. ✅ Verify site loads at https://haramayan.com
6. ✅ Test all features (navigation, testimonials, auth links)

---

## Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **DNS Setup:** https://vercel.com/docs/concepts/projects/domains
- **Troubleshooting:** https://vercel.com/docs/concepts/deployments/troubleshoot-a-build

---

**Last Updated:** December 30, 2025
**Project:** Haramayan Website
**Repository:** https://github.com/scolex007/haramayan

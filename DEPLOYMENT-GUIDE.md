# Deployment Guide for human-creative.co.uk

## 🚨 CRITICAL: Read This Before Deploying

This guide provides step-by-step instructions for deploying this codebase to **human-creative.co.uk**.

## Step 1: Fix Broken Image Paths (REQUIRED)

### Problem
The site currently has hardcoded local file paths that will NOT work on the live website:
```html
<img src="file:///C:/Users/Scott/.gemini/antigravity/brain/a00316bb-e9ec-4b6f-a5ca-7c2653bfc855/uploaded_media_1769787825261.png" alt="HUMAN." class="w-full h-auto">
```

### Solution
1. **Locate the actual image files** on your local system
2. **Copy images to the repository:**
   ```bash
   # Example structure
   cp /path/to/logo.png assets/logo.png
   cp /path/to/hand-scratch.png assets/hand-scratch.png
   cp /path/to/badge.png assets/badge.png
   ```

3. **Update HTML files** to use relative paths:

   **Find and replace in all HTML files:**
   
   OLD:
   ```html
   file:///C:/Users/Scott/.gemini/antigravity/brain/a00316bb-e9ec-4b6f-a5ca-7c2653bfc855/uploaded_media_1769787825261.png
   ```
   NEW:
   ```html
   assets/logo.png
   ```

4. **Files to update:**
   - index.html (line 32)
   - manifesto.html (lines 32, 75, 76)
   - work.html (line 32)
   - impact.html (lines 32, 70)
   - enquire.html (check for logo)
   - shop.html (check for logo)
   - All files in work/ directory (line 37)

## Step 2: Test Locally

```bash
# Navigate to project directory
cd /path/to/HMN-Front-end-2026

# Start a local server
python -m http.server 8000

# Open in browser
# Visit: http://localhost:8000
```

### What to Test:
- [ ] All images load correctly
- [ ] Navigation works on all pages
- [ ] Links go to correct pages
- [ ] Marquee animation works
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile device (resize browser or use device)

## Step 3: Optimize Images

```bash
# Install image optimization tool (if not installed)
npm install -g sharp-cli

# Optimize all PNG images
find assets -name "*.png" -exec sharp -i {} -o {}.optimized.png \;

# Or use online tools:
# - TinyPNG.com
# - Squoosh.app
```

**Image optimization checklist:**
- [ ] Compress all PNG files
- [ ] Ensure images are appropriate size (not oversized)
- [ ] Convert large images to WebP (with PNG fallback)

## Step 4: Add Essential SEO Elements

Add to each page's `<head>` section:

```html
<!-- Example for index.html -->
<meta name="description" content="Human Creative - A curated crew agency providing exceptional filmmaking talent while prioritizing freelancer welfare and sustainable working conditions.">
<meta name="keywords" content="filmmaking, crew agency, shooting editors, freelance filmmakers, production crew">
<meta property="og:title" content="Human Creative | Crew Agency">
<meta property="og:description" content="Exceptional filmmaking talent with a focus on welfare and sustainability">
<meta property="og:url" content="https://human-creative.co.uk">
<meta property="og:image" content="https://human-creative.co.uk/assets/og-image.png">
<link rel="canonical" href="https://human-creative.co.uk/">
```

Repeat for each page with appropriate content.

## Step 5: Create Necessary Files

### Create robots.txt
```bash
cat > robots.txt << 'EOF'
User-agent: *
Allow: /
Sitemap: https://human-creative.co.uk/sitemap.xml
EOF
```

### Create sitemap.xml
```bash
cat > sitemap.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://human-creative.co.uk/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://human-creative.co.uk/manifesto.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://human-creative.co.uk/work.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://human-creative.co.uk/impact.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://human-creative.co.uk/enquire.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://human-creative.co.uk/shop.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
EOF
```

### Add favicon
Place a `favicon.ico` file in the root directory, then add to all HTML `<head>` sections:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

## Step 6: Backup Current Site

**BEFORE making ANY changes to the live site:**

```bash
# If you have SSH access:
ssh user@human-creative.co.uk
cd /path/to/web/root
tar -czf ~/backup-human-creative-$(date +%Y%m%d-%H%M).tar.gz .
exit

# Download the backup to your local machine
scp user@human-creative.co.uk:~/backup-human-creative-*.tar.gz ./backups/
```

**Or use your hosting control panel:**
- Log into cPanel/Plesk/etc
- Use File Manager to create a zip of the entire public_html folder
- Download the backup

## Step 7: Deploy to Staging (Recommended)

If possible, deploy to a staging environment first:
- `staging.human-creative.co.uk`
- `beta.human-creative.co.uk`
- Or a subdirectory like `human-creative.co.uk/new/`

**Test thoroughly in staging before going to production.**

## Step 8: Deploy to Production

### Option A: FTP/SFTP Upload
```bash
# Using command line SFTP
sftp user@human-creative.co.uk

# Upload all files
put -r * /path/to/public_html/

# Or use FileZilla, Cyberduck, etc.
```

### Option B: cPanel File Manager
1. Log into cPanel
2. Open File Manager
3. Navigate to public_html
4. Upload files (use zip for faster upload, then extract)

### Option C: Git Deployment (if supported)
```bash
# On server
cd /path/to/public_html
git clone https://github.com/SnotBoogie1987/HMN-Front-end-2026.git .
git checkout main
```

## Step 9: Post-Deployment Testing

**Immediately after deployment, test:**

- [ ] Visit https://human-creative.co.uk
- [ ] Check SSL certificate is working (should see 🔒)
- [ ] Test all navigation links
- [ ] Verify images load correctly
- [ ] Test on mobile device
- [ ] Check email links work (mailto:studio@human-creative.co.uk)
- [ ] Verify www redirect (www.human-creative.co.uk → human-creative.co.uk)
- [ ] Test in different browsers
- [ ] Check Google PageSpeed Insights score
- [ ] Submit sitemap to Google Search Console

## Step 10: Post-Launch Tasks

1. **Monitor for 24-48 hours**
   - Check server error logs
   - Monitor website uptime
   - Watch for user reports

2. **SEO Setup**
   ```bash
   # Submit to Google Search Console
   # 1. Go to search.google.com/search-console
   # 2. Add property for human-creative.co.uk
   # 3. Verify ownership
   # 4. Submit sitemap
   ```

3. **Analytics** (optional)
   - Add Google Analytics
   - Set up conversion tracking
   - Monitor traffic sources

4. **Performance Monitoring**
   - Set up uptime monitoring (UptimeRobot, Pingdom)
   - Monitor page load times
   - Check Core Web Vitals

## Common Issues & Solutions

### Issue: Images not loading
**Solution:** Check file paths are relative, not absolute or local

### Issue: SSL not working
**Solution:** Contact hosting provider to install/renew SSL certificate

### Issue: www not redirecting
**Solution:** Add .htaccess rule:
```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.human-creative\.co\.uk [NC]
RewriteRule ^(.*)$ https://human-creative.co.uk/$1 [L,R=301]
```

### Issue: Mobile navigation broken
**Solution:** The current design uses fixed widths. Consider implementing responsive design.

### Issue: Slow page load
**Solution:** 
- Optimize images (compress, use WebP)
- Enable gzip compression on server
- Use browser caching
- Consider CDN for static assets

## Rollback Procedure

If something goes wrong:

```bash
# SSH into server
ssh user@human-creative.co.uk

# Stop web server (if needed)
# sudo systemctl stop apache2  # or nginx

# Remove new files
cd /path/to/public_html
rm -rf *

# Restore from backup
tar -xzf ~/backup-human-creative-YYYYMMDD-HHMM.tar.gz

# Restart web server
# sudo systemctl start apache2  # or nginx
```

## Getting Help

- **Repository:** https://github.com/SnotBoogie1987/HMN-Front-end-2026
- **Full Documentation:** See HANDOFF.md
- **Hosting Support:** Contact your hosting provider
- **Emergency Rollback:** Use backup created in Step 6

## Final Checklist Before Going Live

- [ ] All images paths fixed and tested
- [ ] Images optimized for web
- [ ] Tested on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Tested on mobile devices (iOS, Android)
- [ ] All navigation links work
- [ ] Email addresses verified (studio@human-creative.co.uk)
- [ ] SEO meta tags added
- [ ] robots.txt created
- [ ] sitemap.xml created
- [ ] favicon added
- [ ] Current site backed up
- [ ] Tested in staging environment (if available)
- [ ] SSL certificate is active
- [ ] Analytics code added (if using)
- [ ] Rollback plan understood and tested

---

**Good luck with your deployment! 🚀**

For detailed information, see the full [HANDOFF.md](HANDOFF.md) documentation.

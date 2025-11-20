# Upload Images to S3

## Summary
✅ Updated portfolioData.js with 46 images
✅ Updated AboutUs.jsx with photo_Panh.jpg and photo_Minh.jpg
✅ Updated Carousel.jsx with 3 images from your collection

## Images to Upload

You need to upload these folders to your S3 bucket `love-site`:

```
love-site/
├── normal/ (19 images)
├── hehe/ (9 images)
├── geneve/ (6 images)
├── azur/ (4 images)
├── normandie/ (2 images)
├── porto/ (6 images)
├── photo_Minh.jpg
└── photo_Panh.jpg

Total: 48 files
```

## Option 1: AWS Console (Easy)

1. Go to [AWS S3 Console](https://s3.console.aws.amazon.com/s3/buckets/love-site)
2. Click **Upload**
3. Click **Add folder**
4. Select each folder (normal, hehe, geneve, azur, normandie, porto)
5. Also upload photo_Minh.jpg and photo_Panh.jpg to the root
6. Click **Upload**

## Option 2: AWS CLI (Fast)

```bash
# Install AWS CLI if not installed
# https://aws.amazon.com/cli/

# Configure AWS CLI (one time)
aws configure

# Upload all files at once
cd love-site
aws s3 sync . s3://love-site/ --acl public-read

# This will upload:
# - All folders with their contents
# - Maintain the folder structure
# - Set files as public-read
```

## Option 3: Upload Individual Folders

```bash
# Upload each folder
aws s3 cp normal/ s3://love-site/normal/ --recursive --acl public-read
aws s3 cp hehe/ s3://love-site/hehe/ --recursive --acl public-read
aws s3 cp geneve/ s3://love-site/geneve/ --recursive --acl public-read
aws s3 cp azur/ s3://love-site/azur/ --recursive --acl public-read
aws s3 cp normandie/ s3://love-site/normandie/ --recursive --acl public-read
aws s3 cp porto/ s3://love-site/porto/ --recursive --acl public-read

# Upload root photos
aws s3 cp photo_Minh.jpg s3://love-site/photo_Minh.jpg --acl public-read
aws s3 cp photo_Panh.jpg s3://love-site/photo_Panh.jpg --acl public-read
```

## After Upload

1. Make sure all files are public (see bucket policy in previous instructions)
2. Test a few URLs in your browser:
   - https://love-site.s3.eu-west-3.amazonaws.com/photo_Minh.jpg
   - https://love-site.s3.eu-west-3.amazonaws.com/normal/IMG_9729.jpg
   - https://love-site.s3.eu-west-3.amazonaws.com/azur/IMG_8143.jpg

3. Run your dev server:
   ```bash
   npm run dev
   ```

4. Check if images load correctly!

## Troubleshooting

If images don't load after upload:
1. Check bucket policy is applied (see previous instructions)
2. Check "Block Public Access" is OFF
3. Verify file names match exactly (case-sensitive!)
4. Check CORS configuration is set

## Image Count by Category

- Normal: 19 images
- Hehe: 9 images
- Genève: 6 images
- Porto: 6 images
- Azur: 4 images
- Normandie: 2 images
- Root photos: 2 images

**Total: 48 images**

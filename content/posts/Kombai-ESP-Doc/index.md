---
title: "Sending Email through ESPs"
date: "2023-11-11"
template: "post"
draft: false
slug: "/posts/top-javascript-frameworks-overview-and-comparison"
category: "documentation"
tags:
  - "Email"
description: ""
---

Kombai generated code is compatible with almost all the popular Email Service Providers(ESPs). For images, we support base64 strings and the relative path(assets folder) method.

In this guide, we will cover how you can send Kombai’s HTML email through various ESPs in both methods:

## Klaviyo

### Base64

To send the Kombai(base64) generated HTML email code through Klaviyo, you have to:

1. Download the code from Kombai and sign up for Klaviyo.
2. In Klaviyo, go to **Campaigns** and click **Create Campaigns.**

   ![Klaviyo screenshot](./images/kombai-esp-guide/klaviyo/klaviyo1.png)

3. Select **Email** in Type and click **Save and Continue.**

   ![Klaviyo screenshot](./images/kombai-esp-guide/klaviyo/klaviyo2.png)

4. Now, add your recipients and click **Continue to Content**.

   ![Klaviyo screenshot](./images/kombai-esp-guide/klaviyo/klaviyo3.png)

5. In the **Campaign Content** box, add the email title, preview text, etc, and hit **HTML** in **How would you like to design your email?** section.

   ![Klaviyo screenshot](./images/kombai-esp-guide/klaviyo/klaviyo4.png)

6. Paste the HTML code you downloaded from Kombai into the editor, save, and click **Back to Content**.

   ![Klaviyo screenshot](./images/kombai-esp-guide/klaviyo/klaviyo5.png)

7. Now, continue to review your details and schedule or send the mail.

**Note:** If you don’t have an unsubscribe link in the code, Klaviyo will add it automatically.

### Assets

To send the Kombai email along with external assets through Klaviyo, you have to create a template followed by creating a campaign:

#### Creating a template

1. In Klaviyo, go to **Content > Templates**.

   ![Klaviyo screenshot](./images/kombai-esp-guide/klaviyo/klaviyo7.png)

2. Click on **Import Template** and give a name to it.

   ![Klaviyo screenshot](./images/kombai-esp-guide/klaviyo/klaviyo8.png)

3. Upload the HTML file or paste the code into the editor.
4. Upload a zip file of the assets folder and upload it. Now save the template.

**Note:** When creating a template, having  `{% unsubscribe %}`  tag in your code is mandatory. You can bypass it, though, for non-marketing emails. Also, the template shouldn’t contain any base64 string.

#### Creating the campaign

The process of creating a campaign is same as what you read in the base64 section.

However, in the **How would you like to design your email?** section, choose **Drag and Drop** instead of HTML, and select the template you have saved.

![Klaviyo screenshot](./images/kombai-esp-guide/klaviyo/klaviyo9.png)

## MailChimp

### Base64

To send the Kombai(base64) generated HTML email code through Klaviyo, you have to:

1. In the MailChimp dashboard, click **Create**.

![MailChimp screenshot](./images/kombai-esp-guide/mailchimp/mailchimp1.png)

2. Name your email and click **Create email**.

![MailChimp screenshot](./images/kombai-esp-guide/mailchimp/mailchimp2.png)

3. Fill all email related info(sender, subject, send time, etc.) and click **Design Email**.

![MailChimp screenshot](./images/kombai-esp-guide/mailchimp/mailchimp3.png)

4. Click **Code your own** and select **Paste in Code**.

![MailChimp screenshot](./images/kombai-esp-guide/mailchimp/mailchimp4.png)

5. Paste the code inside the editor and click **Continue**.

![MailChimp screenshot](./images/kombai-esp-guide/mailchimp/mailchimp5.png)

6. Now, send the email.

### Assets

For the assets method, you can either send the email directly through the campaign or create a template. Let's discuss both these steps:

#### Direct Campaign

The process of creating an email campaign in MailChimp is same as what you read in the Base64 section. However, in content section, click **Design Email**, go to **Code your own**, choose **Import zip** instead of **Paste in Code** and upload the zip file that contains HTML and assets.

![MailChimp screenshot](./images/kombai-esp-guide/mailchimp/mailchimp6.png)

#### Creating a template

To create an email template in MailChimp, you have to:

1. Click **Content > Email templates** in the dashboard.

![MailChimp screenshot](./images/kombai-esp-guide/mailchimp/mailchimp7.png)

2. Click **Create Template**.

![MailChimp screenshot](./images/kombai-esp-guide/mailchimp/mailchimp8.png)

3. Go to **Code your own** and click **Import zip**.

![MailChimp screenshot](./images/kombai-esp-guide/mailchimp/mailchimp9.png)

4. Name your template, upload the zip file and click **Upload**.

![MailChimp screenshot](./images/kombai-esp-guide/mailchimp/mailchimp10.png)

5. Save the template once it's loaded in the MailChimp editor.

#### Sending the template as email

To send an email template, you have to create a MailChimp campaign. The process of creating a campaign is same as what you read in the Base64 section. However, in content section, click **Design Email**, go to **Saved Templates** and select your template.

## Constant Contact

### Base64

To send Kombai-generated(base64) HTML email code through Constant Contact, you have to:

1. Download the code from Kombai and sign up for Constant Contact.
2. On the Constant Contact website, click **Marketing Campaigns > Email**.

   ![Constant Contact screenshot](./images/kombai-esp-guide/constant-contact/cc1.png)

3. Click **Create an Email**.

   ![Constant Contact screenshot](./images/kombai-esp-guide/constant-contact/cc2.png)

4. Select **Use your own HTML**.

   ![Constant Contact screenshot](./images/kombai-esp-guide/constant-contact/cc3.png)

5. In the HTML editor, replace the existing code with Kombai-generated code and add the **`[[trackingImage]]`** tag just below the opening body tag.(see the below example)

6. Now, add email info (subject, sender details, recipients, etc.) and send your mail.

**Note:** `[[trackingImage]]` tag is mandatory to have in your code.

### Assets

Constant Contact doesn't support direct upload of zip file for images. So you have to upload the HTML code in the editor, upload the images in the library, and replace them manually in the code.

#### Adding Images

1. Create an HTML email campaign(same steps as above).
2. Inside the HTML editor, select Images from the Insert dropdown.
3. Now, upload the images to Constant Contact.
4. Select the `<img>` tag for image you want to replace and add the concerned image from the library.
5. Once done, save and send the mail.

## Active Campaign

### Base64

To send the Kombai-generated(base64) HTML code through Active Campaign, you have to:

1. Download the code from Kombai and sign up for Active Campaign.
2. In your dashboard, click on **Create a Campaign**.

   ![Active campaign screenshot](./images/kombai-esp-guide/active-campaign/ac1.png)

3. Name your campaign, select **Standard** and click Next.

   ![Active campaign screenshot](./images/kombai-esp-guide/active-campaign/ac2.png)

4. Select the recipient list and click next.

   ![Active campaign screenshot](./images/kombai-esp-guide/active-campaign/ac3.png)

5. Choose the **Custom HTML** template type and continue.

   ![Active campaign screenshot](./images/kombai-esp-guide/active-campaign/ac4.png)

6. Select new template, type email subject and continue.

   ![Active campaign screenshot](./images/kombai-esp-guide/active-campaign/ac5.png)

7. In the editor, paste your code and click Next.

   ![Active campaign screenshot](./images/kombai-esp-guide/active-campaign/ac6.png)

8. Fill all the campaign details(sender, subject etc.) and send/schedule the mail.

### Assets

Active Campaign doesn't support direct upload of zip file for images. You have to upload the images in the library and replace them manually in the code, similar to Contant Contact.

#### Adding Images

1. Create an HTML email campaign(same steps as above).
2. Inside the HTML editor, select Image from the Insert dropdown.
3. Now, upload the images to Active Campaign.
4. Select the `<img>` tag for the image you want to replace and add the concerned image from the library.
5. Once done, save and send the mail.

## Campaign Monitor

### Base64

To send the Kombai-generated(base64) HTML code through Campaign Monitor, you have to:

1. Download the code from Kombai and sign up for Campaign Monitor.
2. In the dashboard, click **Create**, then select **Campaign**.

   ![Campaign Monitor screenshot](./images/kombai-esp-guide/campaign-monitor/cm1.png)

3. Name your campaign and continue.

   ![Campaign Monitor screenshot](./images/kombai-esp-guide/campaign-monitor/cm2.png)

4. Fill in the necessary info like subject, from, etc. and click **Design Email**.

   ![Campaign Monitor screenshot](./images/kombai-esp-guide/campaign-monitor/cm3.png)

5. Select **Import HTML.**

   ![Campaign Monitor screenshot](./images/kombai-esp-guide/campaign-monitor/cm4.png)

6. Import your HTML file and click **Start Import**.

   ![Campaign Monitor screenshot](./images/kombai-esp-guide/campaign-monitor/cm5.png)

7. Now, continue further and send or schedule the mail.

### Assets

The process for this method is exactly similar to the above steps we discussed, except that you have to also upload the assets zip file along with the HTML.

![Campaign Monitor screenshot](./images/kombai-esp-guide/campaign-monitor/cm6.png)

## Moosend

### Base64

To send the Kombai-generated(base64) HTML code through Moosend, you have to:

1. Download the code from Kombai and sign up for Moosend.
2. Choose **Campaigns > Regular** in the menu bar.

   ![Moosend screenshot](./images/kombai-esp-guide/moosend/moo1.png)

3. Click **New**, then **Regular**.

   ![Moosend screenshot](./images/kombai-esp-guide/moosend/moo2.png)

4. Fill the email-related details(sender, subject etc.) and click Next.

   ![Moosend screenshot](./images/kombai-esp-guide/moosend/moo3.png)

5. Select mailing list and continue.
6. In the design section, turn on the **Imported Campaign Template**, import HTML and click **Next**.
7. Add personalization tags(if you want), then click Next.
8. Now send or schedule the campaign.

### Assets

The process for this method is same as above steps, except that you have to upload the zip file that contains both HTML and assets in the **Imported Campaign Template**.

![Moosend screenshot](./images/kombai-esp-guide/moosend/moo5.png)

## Brevo

### Base64

To send the Kombai-generated(base64) HTML code through Brevo, you have to:

1. Download the code from Kombai and sign up for Brevo.
2. In the left sidebar, go to **Campaigns > Email > Create an email campaign**.

   ![Brevo screenshot](./images/kombai-esp-guide/brevo/brevo1.png)

3. Name your campaign and click **Create campaign**.

   ![Brevo screenshot](./images/kombai-esp-guide/brevo/brevo2.png)

4. Fill in all the email details and click **Start Designing**.

   ![Brevo screenshot](./images/kombai-esp-guide/brevo/brevo3.png)

5. Click **Code your own**, then **Use HTML Editor**.

   ![Brevo screenshot](./images/kombai-esp-guide/brevo/brevo4.png)

6. Paste your HTML code in the editor and continue.

   ![Brevo screenshot](./images/kombai-esp-guide/brevo/brevo5.png)

7. Now send or schedule the email.

### Assets

To send an HTML email with the assets method, you have to first create a template and then send it through a campaign:

#### Creating a Campaign

1. Go to Campaigns, Templates, then New Template.

   ![Brevo screenshot](./images/kombai-esp-guide/brevo/brevo6.png)

2. Fill the required info(template name, sender, subject, etc.) and click Next Step.

   ![Brevo screenshot](./images/kombai-esp-guide/brevo/brevo7.png)

3. Now select **Code your own > Paste your code.**

   ![Brevo screenshot](./images/kombai-esp-guide/brevo/brevo8.png)

4. In the HTML editor, paste your code and continue.

   ![Brevo screenshot](./images/kombai-esp-guide/brevo/brevo9.png)

5. Once the preview is loaded, click on the image icon(**Picture Manager**).
6. Replace each image with its local counterparts in your system and save.
7. Now, click on **Save and Activate**.

#### Sending the template in a campaign

The process of creating a campaign is same as what we discussed in the base64 section. However, in **Start Designing** section, select **My Templates** instead of **Code your own** and choose your saved template.

**Note:** When creating a template, putting an unsubscribe link in your code is necessary.

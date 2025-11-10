import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, businessType, message, needsHosting } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const hostingInfo = needsHosting ? `\nHosting Requested: Yes - Client wants Webs4U to host their website.` : `\nHosting Requested: No`;
    const emailSubject = encodeURIComponent(`New Contact Form Submission from ${name}`);
    const emailBody = encodeURIComponent(
      `New contact form submission:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Business Type: ${businessType || 'Not specified'}` +
      hostingInfo + `\n\n` +
      `Message:\n${message}\n\n` +
      `---\n` +
      `This message was sent from the Webs4U contact form.`
    );

    // For now, we'll return a mailto link
    // In production, you can integrate with an email service like:
    // - SendGrid
    // - Resend
    // - Nodemailer with SMTP
    // - AWS SES
    
    // For immediate functionality, we'll use mailto
    // The frontend will handle opening the mailto link
    const mailtoLink = `mailto:prowebs4you@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // In a production environment, you would send the email here using an email service
    // Example with a service:
    // await sendEmail({
    //   to: 'prowebs4you@gmail.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   body: emailBody
    // });

    return NextResponse.json(
      { 
        success: true,
        mailtoLink: mailtoLink,
        message: 'Form submitted successfully'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}


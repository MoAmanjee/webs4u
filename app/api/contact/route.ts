import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, businessType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const emailSubject = `New Contact Form Submission from ${name}`;
    const emailBody = `
New contact form submission from Webs4U website:

Name: ${name}
Email: ${email}
Business Type: ${businessType || 'Not specified'}

Message:
${message}

---
This message was sent from the Webs4U contact form.
Reply directly to: ${email}
    `.trim();

    // Send email using Web3Forms (free and easy)
    // Get your free access key from https://web3forms.com
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      // If no access key is set, return error with instructions
      console.error('Web3Forms access key not configured. Please set WEB3FORMS_ACCESS_KEY in your environment variables.');
      return NextResponse.json(
        { 
          error: 'Email service not configured. Please contact the website administrator.',
          setupRequired: true
        },
        { status: 500 }
      );
    }

    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: emailSubject,
        from_name: name,
        from_email: email,
        message: emailBody,
        to_email: 'prowebs4you@gmail.com',
      }),
    });

    const web3formsData = await web3formsResponse.json();

    if (!web3formsResponse.ok || !web3formsData.success) {
      console.error('Web3Forms error:', web3formsData);
      throw new Error('Failed to send email via Web3Forms');
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Your message has been sent successfully! We will get back to you within 24 hours.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later or contact us directly at prowebs4you@gmail.com' },
      { status: 500 }
    );
  }
}


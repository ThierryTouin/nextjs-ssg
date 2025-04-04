import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequest {
    name: string;
    email: string;
    message: string;
  }

export async function POST(req: Request) {
  try {
    //const { to, subject, text } = await req.json();
    const { name, email, message }: ContactRequest = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const response = await resend.emails.send({
      //from: 'hello@yourdomain.com', // Doit être un domaine vérifié
      from: 'onboarding@resend.dev',
      //to: ['thierrytouin.pro@gmail.com','cathytouin@gmail.com'],
      to: ['cathytouin@gmail.com','thierrytouin.pro@gmail.com'],
      subject : 'Nouveau contact',
      html : `Nouveau message reçu de ${name} (${email}) : <br>${message}`,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

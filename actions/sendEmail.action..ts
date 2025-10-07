"use server";

import transporter from "@/lib/nodemailer";

// if you want to use resent
// import { Resend } from "resend";

// const resend = new Resend("re_xxxxxxxxx");

const styles = {
	container: "max-width:500px;margin:20px auto;padding:20px;border:1px solid #ddd;border-radius:6px;",
	heading: "font-size:20px;color:#333;",
	paragraph: "font-size:16px;",
	link: "display:inline-block;margin-top:15px;padding:10px 15px;background:#007bff;color:#fff;text-decoration:none;border-radius:4px;",
};

export async function sendEmailAction({
	to,
	subject,
	meta,
}: {
	to: string;
	subject: string;
	meta: {
		description: string;
		link: string;
	};
}) {
	const mailOptions = {
		from: process.env.NODEMAILER_USER,
		to,
		subject: `SecureStart - ${subject}`,
		html: `
    <div style="${styles.container}">
      <h1 style="${styles.heading}">${subject}</h1>
      <p style="${styles.paragraph}">${meta.description}</p>
      <a href="${meta.link}" style="${styles.link}">Click Here</a>
    </div>
    `,
	};

	try {
		await transporter.sendMail(mailOptions);
		return { success: true };
	} catch (err) {
		console.error("[SendEmail]:", err);
		return { success: false };
	}
}

// if you want to use resend email service

// export async function sendEmailAction({
// 	to,
// 	subject,
// 	meta,
// }: {
// 	to: string;
// 	subject: string;
// 	meta: {
// 		description: string;
// 		link: string;
// 	};
// }) {
// 	try {
// 		const { data, error } = await resend.emails.send({
// 			from: process.env.RESENT_EMAIL || "<your_email@example.com>",
// 			to,
// 			subject: `SecureStart - ${subject}`,
// 			html: `
//     <div style="${styles.container}">
//       <h1 style="${styles.heading}">${subject}</h1>
//       <p style="${styles.paragraph}">${meta.description}</p>
//       <a href="${meta.link}" style="${styles.link}">Click Here</a>
//     </div>
//     `,
// 		});

// 		if (error) {
// 			return { success: false, error };
// 		}

// 		return { success: true, data };
// 	} catch (error) {
// 		console.error("[SendEmail]:", error);
// 		return { success: false, error };
// 	}
// }

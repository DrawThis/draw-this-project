import crypto from 'crypto';  
import type { Actions } from './$types';
import { db } from '$lib/server/database/client';  
import { usuarios } from '$lib/server/database/data';  
import { eq } from 'drizzle-orm';  
import nodemailer from 'nodemailer';

export const actions: Actions = {
    forgotPassword: async ({ request }) => {
        const data = Object.fromEntries(await request.formData());
        const email = String(data.email);
    
        // Verifica que el correo esté registrado
        const user = await db.select().from(usuarios).where(eq(usuarios.email, email));
        if (!user || user.length === 0) {
          return { success: false, message: 'No se encontró el correo electrónico' };
        }
    
        // Genera un token y guárdalo en la base de datos
        const resetToken = crypto.randomUUID();
        await db.update(usuarios).set({ resetToken: resetToken as any }).where(eq(usuarios.email, email));
    
        // Configura nodemailer para enviar el correo
        const transporter = nodemailer.createTransport({
          service: 'Gmail', // o tu servicio de correo
          auth: {
            user: 'drawthis6@gmail.com',
            pass: 'viry ylhh jgvb sivy', // Contraseña de aplicación
          },
          tls: {
            rejectUnauthorized: false, // En algunos casos esto es necesario para evitar problemas de autenticación
          },
        });
    
        // Enviar el correo con el enlace de restablecimiento
        const resetLink = `drawthis.vercel.app/olvido-contraseña?token=${resetToken}`;
        await transporter.sendMail({
          from: 'drawthis6@gmail.com',
          to: email,
          subject: 'Restablece tu contraseña',
          text: `Haz clic en el siguiente enlace para restablecer tu contraseña: ${resetLink}`,
        });
    
        return { success: true, message: 'Correo enviado' };
      },
};    
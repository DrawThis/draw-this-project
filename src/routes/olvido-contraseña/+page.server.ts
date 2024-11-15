import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit'; 
import { db } from '$lib/server/database/client';
import { usuarios } from '$lib/server/database/data';
import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { json } from '@sveltejs/kit';

export const actions: Actions = {
  resetPassword: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const token = String(data.token);
    const newPassword = String(data.password);

    // Verifica el token y encuentra al usuario
    const user = await db.select().from(usuarios).where(eq(usuarios.resetToken, token));
    if (!user || user.length === 0) {
      return json({ success: false, message: 'Token inválido o expirado' });
    }

    // Actualiza la contraseña y elimina el token de la base de datos
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await db.update(usuarios)
      .set({ password: hashedPassword, resetToken: null })
      .where(eq(usuarios.resetToken, token));

    // Redirecciona después de la actualización
    throw redirect(302, `/`);
  },
};


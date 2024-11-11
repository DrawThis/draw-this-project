import type { Actions } from './$types';
import { db } from '$lib/server/database/client';  
import { usuarios } from '$lib/server/database/data';  
import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';  

export const actions: Actions = {
    resetPassword: async ({ request }) => {
      const data = Object.fromEntries(await request.formData());
      const token = String(data.token);
      const newPassword = String(data.password);
  
      // Verifica el token y encuentra al usuario
      const user = await db.select().from(usuarios).where(eq(usuarios.resetToken, token));
      if (!user || user.length === 0) {
        return { success: false, message: 'Token inválido o expirado' };
      }
  
      // Actualiza la contraseña y elimina el token de la base de datos
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await db.update(usuarios)
        .set({ password: hashedPassword, resetToken: null })
        .where(eq(usuarios.resetToken, token));
  
      return { success: true, message: 'Contraseña actualizada' };
    },
  };
  
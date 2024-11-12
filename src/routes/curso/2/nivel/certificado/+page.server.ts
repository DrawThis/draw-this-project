import type { Cookies } from '@sveltejs/kit';
import { db } from '$lib/server/database/client';
import { usuarios } from '$lib/server/database/data';
import { eq } from 'drizzle-orm';

export const load = async ({ cookies }: { cookies: Cookies }) => {
    try {
        // Leer la cookie 'session' que contiene el token del usuario autenticado
        const userSession = cookies.get('session');

        if (!userSession) {
            // Si no hay sesión, devolvemos 'Invitado'
            return { username: 'Invitado' };
        }

        // Consulta el usuario correspondiente al token de sesión en la base de datos
        const user = await db
            .select()
            .from(usuarios)
            .where(eq(usuarios.token, userSession))
            .limit(1);

        return {
            username: user[0]?.username || 'Invitado'
        };
    } catch (error) {
        console.error('Error obteniendo el username:', error);
        return { username: 'Invitado' };
    }
};

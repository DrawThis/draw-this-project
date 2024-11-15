import type { Cookies } from '@sveltejs/kit';
import { db } from '$lib/server/database/client';
import { usuarios } from '$lib/server/database/data';
import { contacto } from '$lib/server/database/data';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit'
import type { RequestEvent } from '@sveltejs/kit';

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

export const actions = {
  logout: async ({ cookies }) => {
    // Eliminar la cookie de sesión
    cookies.set('session', '', {
      path: '/',
      expires: new Date(0), // Fecha en el pasado para eliminar la cookie
    });

    // Redirigir al usuario a la página de login
    throw redirect(302, '/');
  },

 contact: async ({ request }: RequestEvent) => {  
    const formData = await request.formData();  
    const data = Object.fromEntries(formData);  

    // Insertar en la base de datos  
    try {  
        await db.insert(contacto).values({  
            username: data.username as string,  
            email: data.email as string,  
            message: data.message as string  
        });  
        return { success: true };  
    } catch (error) {  
        console.error("Error:", error);
        return { status: 500, error: 'Se ha producido un error' };  
    }  
  }
};


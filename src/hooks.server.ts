import { db } from '$lib/server/database/client'
import { usuarios } from '$lib/server/database/schema'
import { eq } from 'drizzle-orm'
import { redirect } from '@sveltejs/kit'

export const handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session');

    if (session) {
        // Buscar el usuario con el token de sesión
        const user = await db.select().from(usuarios).where(eq(usuarios.token, session));

        if (user && user.length > 0) {
            event.locals.user = user[0];
            
            // Redirigir al usuario si intenta acceder a la página de login estando autenticado
            if (event.url.pathname === '/') {
                throw redirect(302, '/landing-page');
            }
        } else {
            // Eliminar la cookie si la sesión no es válida
            event.cookies.set('session', '', {
                path: '/',
                expires: new Date(0),
            });
        }
    }

    return await resolve(event);
};

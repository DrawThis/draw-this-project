import {
    Uno,
    Dos,
    Tres,
    Cuatro,
    Cinco,
    historia,
	dibujo,
	puntillismo,
	pixel,
	anatomia,
	perspectiva,
	c1,
	c2,
	c3,
	c4
} from '$lib/IMAGES/todas';

export let courses = [
    { title: 'Historia del Arte', description: 'Aprende técnicas de pintura.', link: '/curso/1/nivel/1', image: historia,},
    { title: 'Dibujo Básico', description: 'Domina el arte del dibujo para principiantes.', link: '/curso/2/nivel/1', image: dibujo, },
    { title: 'Puntillismo', description: 'Domina el arte del puntillismo.', link: '/curso/3/nivel/1', image: puntillismo, },
    { title: 'Pixel Art', description: 'Domina el arte de dibujar con pixeles.', link: '/curso/4/nivel/1', image: pixel, },
    { title: 'Perspectiva', description: 'Domina el arte de dibujar con perspectiva.', link: '/curso/5/nivel/1', image: perspectiva, },
    { title: 'Anatomía', description: 'Domina el arte de dibujar cuerpos humanos.', link: '/curso/6/nivel/1', image: anatomia, },
    { title: 'Libera tu Creatividad - Dibujo', description: 'Dibuja lo que quieras', link: '/curso/7/nivel/1', image: c1, },
    { title: 'Libera tu Creatividad - Pixel Art', description: 'Dibuja lo que quieras con pixeles', link: '/curso/8/nivel/1', image: c2, },
    { title: 'Libera tu Creatividad - Puntillismo', description: 'Dibuja lo que quieras con puntos', link: '/curso/9/nivel/1', image: c3, },
    { title: 'Libera tu Creatividad - Líneas', description: 'Dibuja lo que quieras con líneas rectas', link: '/curso/10/nivel/1', image: c4, },
];

export const slides = [
    { id: 's1', image: Uno },
    { id: 's2', image: Dos },
    { id: 's3', image: Tres },
    { id: 's4', image: Cuatro },
    { id: 's5', image: Cinco }
];


<script lang="ts">
	import './certificado.css';
	import { logo } from '$lib/IMAGES/todas';
	import Next from '$lib/button.svelte';
	import html2canvas from 'html2canvas';
	import Icon from '@iconify/svelte';
	
	export let data: { username: string };

	const getTodayDate = (): string => {
		const today = new Date();
		const day = today.getDate().toString().padStart(2, '0');
		const month = (today.getMonth() + 1).toString().padStart(2, '0');
		const year = today.getFullYear();
		return `${day}/${month}/${year}`;
	};

	const todayDate = getTodayDate();

	const downloadAsImage = (event: MouseEvent): void => {
		const certificate = document.querySelector('.certificate-container');
		if (certificate instanceof HTMLElement) {
			// Verificamos si es un HTMLElement
			html2canvas(certificate)
				.then((canvas) => {
					const link = document.createElement('a');
					link.download = 'certificado.png';
					link.href = canvas.toDataURL('image/png');
					link.click();
				})
				.catch((err) => {
					console.error('Error al generar la imagen del certificado:', err);
				});
		}
	};

	const confetti = {
		maxCount: 150,
		speed: 2,
		frameInterval: 15,
		alpha: 1.0,
		gradient: false,
		start: null as (() => void) | null,
		stop: null as (() => void) | null,
		toggle: null as (() => void) | null,
		pause: null as (() => void) | null,
		resume: null as (() => void) | null,
		togglePause: null as (() => void) | null,
		remove: null as (() => void) | null,
		isPaused: null as (() => boolean) | null,
		isRunning: null as (() => boolean) | null
	};

	(function () {
		confetti.start = startConfetti;
		confetti.stop = stopConfetti;
		confetti.toggle = toggleConfetti;
		confetti.pause = pauseConfetti;
		confetti.resume = resumeConfetti;
		confetti.togglePause = toggleConfettiPause;
		confetti.isPaused = isConfettiPaused;
		confetti.remove = removeConfetti;
		confetti.isRunning = isConfettiRunning;

		const colors = [
			'rgba(30,144,255,',
			'rgba(107,142,35,',
			'rgba(255,215,0,',
			'rgba(255,192,203,',
			'rgba(106,90,205,',
			'rgba(173,216,230,',
			'rgba(238,130,238,',
			'rgba(152,251,152,',
			'rgba(70,130,180,',
			'rgba(244,164,96,',
			'rgba(210,105,30,',
			'rgba(220,20,60,'
		];
		let streamingConfetti = false;
		let animationTimer: number | null = null;
		let pause = false;
		let lastFrameTime = Date.now();
		const particles: Particle[] = [];
		let waveAngle = 0;
		let context: CanvasRenderingContext2D | null = null;

		interface Particle {
			color: string;
			color2: string;
			x: number;
			y: number;
			diameter: number;
			tilt: number;
			tiltAngleIncrement: number;
			tiltAngle: number;
		}

		function resetParticle(particle: Particle, width: number, height: number): Particle {
			particle.color = colors[(Math.random() * colors.length) | 0] + confetti.alpha + ')';
			particle.color2 = colors[(Math.random() * colors.length) | 0] + confetti.alpha + ')';
			particle.x = Math.random() * width;
			particle.y = Math.random() * height - height;
			particle.diameter = Math.random() * 10 + 5;
			particle.tilt = Math.random() * 10 - 10;
			particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
			particle.tiltAngle = Math.random() * Math.PI;
			return particle;
		}

		function toggleConfettiPause() {
			pause ? resumeConfetti() : pauseConfetti();
		}

		function isConfettiPaused() {
			return pause;
		}

		function pauseConfetti() {
			pause = true;
		}

		function resumeConfetti() {
			pause = false;
			runAnimation();
		}

		function runAnimation() {
			if (pause) return;
			if (particles.length === 0) {
				context?.clearRect(0, 0, window.innerWidth, window.innerHeight);
				animationTimer = null;
			} else {
				const now = Date.now();
				const delta = now - lastFrameTime;
				if (delta > confetti.frameInterval) {
					context?.clearRect(0, 0, window.innerWidth, window.innerHeight);
					updateParticles();
					drawParticles(context);
					lastFrameTime = now - (delta % confetti.frameInterval);
				}
				animationTimer = requestAnimationFrame(runAnimation);
			}
		}

		function startConfetti(timeout?: number, min?: number, max?: number) {
			// Asegurarse de que el código solo se ejecute en el navegador
			if (typeof window === 'undefined') return;

			const width = window.innerWidth;
			const height = window.innerHeight;
			let canvas = document.getElementById('confetti-canvas') as HTMLCanvasElement | null;
			if (!canvas) {
				canvas = document.createElement('canvas');
				canvas.id = 'confetti-canvas';
				canvas.style.cssText =
					'display:block;z-index:999999;pointer-events:none;position:fixed;top:0';
				document.body.prepend(canvas);
				canvas.width = width;
				canvas.height = height;
				window.addEventListener('resize', () => {
					canvas!.width = window.innerWidth;
					canvas!.height = window.innerHeight;
				});
				context = canvas.getContext('2d');
			} else {
				context = canvas.getContext('2d');
			}
			const count = confetti.maxCount;
			while (particles.length < count) {
				particles.push(resetParticle({} as Particle, width, height));
			}
			streamingConfetti = true;
			pause = false;
			runAnimation();
			if (timeout) {
				setTimeout(stopConfetti, timeout);
			}
		}

		function stopConfetti() {
			streamingConfetti = false;
		}

		function removeConfetti() {
			stopConfetti();
			pause = false;
			particles.length = 0;
		}

		function toggleConfetti() {
			streamingConfetti ? stopConfetti() : startConfetti();
		}

		function isConfettiRunning() {
			return streamingConfetti;
		}

		function drawParticles(context: CanvasRenderingContext2D | null) {
			if (!context) return;
			particles.forEach((particle) => {
				const x2 = particle.x + particle.tilt;
				const y2 = particle.y + particle.tilt + particle.diameter / 2;
				context.beginPath();
				context.lineWidth = particle.diameter;
				context.strokeStyle = particle.color;
				context.moveTo(particle.x, particle.y);
				context.lineTo(x2, y2);
				context.stroke();
			});
		}

		function updateParticles() {
			const width = window.innerWidth;
			const height = window.innerHeight;
			waveAngle += 0.01;
			particles.forEach((particle, i) => {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle) - 0.5;
				particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
				if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
					if (streamingConfetti && particles.length <= confetti.maxCount) {
						resetParticle(particle, width, height);
					} else {
						particles.splice(i, 1);
					}
				}
			});
		}
	})();

	const start = () => setTimeout(() => confetti.start?.(), 1000);
	const stop = () => setTimeout(() => confetti.stop?.(), 5000);

	start();
	stop();
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>¡Felicidades! Completaste este curso de Draw This</title>
</svelte:head>

<div class="certificate-container">
	<div class="square-top"></div>
	<img src={logo} alt="" />
	<h1 class="header">Certificado</h1>
	<h2 class="sub-header">De reconocimiento a:</h2>
	<p class="recipient" contenteditable="true">{data.username || 'Invitado'}</p>
	<p class="certificate-body">
		Por haber concluido de manera satisfactoria el curso <strong>Pixel Art</strong>,
		impartido por la página de Draw This.
	</p>
	<p class="certificate-body">Certificado Obtenido el {todayDate}</p>
	<div class="signature-container">
		<div class="signature">
			<p class="signature-text">Draw this</p>
			<hr />
			<p>Tutor</p>
		</div>
	</div>
	<div class="square-bottom"></div>
</div>

<button class="button" on:click={downloadAsImage}>
	<span class="button-text">Descargar</span>
	<span class="button-icon"><Icon icon="material-symbols:download" class="i" /></span>
</button>

<a href="/ingreso-cursos" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>


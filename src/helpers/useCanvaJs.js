/* eslint-disable no-unused-vars */

const color = [
	{
		name: 'cancelled',
		value: '#cc2d1b',
	},
	{
		name: 'review',
		value: '#ffd834',
	},
	{
		name: 'progress',
		value: '#54c5eb',
	},
	{
		name: 'completed',
		value: '#00a389',
	},
	{
		name: 'started',
		value: 'rgb(243, 110, 95)',
	},
];

export default function useCanvaJs(canvas, spanProcen, porcent, status) {
	const can = canvas;
	const spanProcent = spanProcen;
	const sts = status.split(' ')[1] || status.split(' ')[0];
	const c = can.getContext('2d');

	const posX = can.width / 2;
	const posY = can.height / 2;
	const fps = 1000 / 200;
	let procent = 0;
	const oneProcent = 360 / 100;
	const result = oneProcent * parseInt(`${porcent}0`);

	c.lineCap = 'round';
	let deegres = 0;
	const acrInterval = setInterval(() => {
		deegres += 1;
		c.clearRect(0, 0, can.width, can.width);
		procent = deegres / oneProcent;

		spanProcent.innerHTML = procent.toFixed();

		c.beginPath();
		c.arc(posX, posY, 18, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
		c.strokeStyle = '#e8e3e3';
		c.lineWidth = '4';
		c.stroke();

		c.beginPath();
		c.strokeStyle = color.find(item => item.name === sts).value;
		c.lineWidth = '4';
		c.arc(
			posX,
			posY,
			18,
			(Math.PI / 180) * 270,
			(Math.PI / 180) * (270 + deegres)
		);
		c.stroke();
		if (deegres >= result) clearInterval(acrInterval);
	}, fps);
}

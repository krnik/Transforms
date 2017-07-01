
class Particle {
    constructor (x, y, maxLife) {
        this.x = x;
        this.y = y;
        this.startSize = 100;
        this.size = this.startSize;
        this.endSize = window.innerWidth >> 1;
        this.angle = Math.random() * 360;
        this.lifeStarted = Date.now();
        this.lifeTime = 0;
        this.maxLifeTime = maxLife;
        this.alpha = null;
        this.play = false;

        this.velX = Math.floor(Math.random() * (-6) + 3) / 10;
        this.velY = (-1) - Math.random() * 0.4;
    }

    update () {
        this.lifeTime = Date.now() - this.lifeStarted;
        this.angle = this.angle + 0.2;
        const lifeP = this.lifeTime / this.maxLifeTime;
        this.size = this.startSize + (this.endSize - this.startSize) * lifeP;
        // this.alpha = Math.max(0.1 * (1 - (lifeP * 1.1)), 0);
        this.alpha = Math.max(0.02 * Math.sin((lifeP) * Math.PI), 0);
        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
    }

    draw (context, img) {
        this.update();
        context.save();
        context.globalAlpha = this.alpha;
        context.drawImage(img, this.x - 50, this.y - 50, this.size, this.size);
        context.restore();
    }
}

export default class Smoke {
    constructor (wrapper, imgUrl) {
        // Canvas, context
        this.wrapper = wrapper;
        this.canvas = document.createElement('CANVAS');
        this.ctx = this.canvas.getContext('2d');
        this.img = new Image();
        this.img.src = imgUrl;
        this.ctx.fillStyle = 'black';
        // Particles
        this.parts = [];
        this.minRespawn = 50;
        this.prevTime = Date.now();
        this.maxLifeTime = Math.min(10000, this.canvas.height / 18 * 1000);
        this.emittX = window.innerWidth >> 1;
        this.emittY = window.innerHeight >> 1;
        // Set canvas Width / height
        this.setUp();
    }

    setUp () {
        this.wrapper.appendChild(this.canvas);
        this.canvas.width = this.wrapper.offsetWidth;
        this.canvas.height = this.wrapper.offsetHeight;
        window.addEventListener('mousemove', (ev) => {
            this.emittX = ev.clientX;
            this.emittY = ev.clientY;
            this.play = true;
            if (window.camProgression !== 0) return;
            this.spawn();
        });
        window.addEventListener('resize', () => {
            this.canvas.width = this.wrapper.offsetWidth;
            this.canvas.height = this.wrapper.offsetHeight;
        });
    }

    spawn () {
        if (Date.now() > this.prevTime + this.minRespawn) {
            this.prevTime = Date.now();
            this.parts.push(new Particle(this.emittX, this.emittY, this.maxLifeTime));
        }
    }

    draw () {
        if (!this.play) return;
        const l = this.parts.length;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        for (const [i, part] of this.parts.entries()) {
            if (part.lifeTime > this.maxLifeTime) {
                this.parts[i] = null;
                continue;
            } else {
                part.draw(this.ctx, this.img);
            }
        }
        this.parts = this.parts.filter(p => p);
    }

}

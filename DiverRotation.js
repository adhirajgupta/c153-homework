AFRAME.registerComponent('diver-rotate', {
    schema: {
        rotateX: { type: 'number', default: 0 },

    },

    init: function () {
        window.addEventListener('keydown', (e) => {
            if (e.key === "ArrowRight") {
                console.log("Arrow Right pressed")
                
                this.data.rotateX += 0.2
            }
            if (e.key === "ArrowLeft") {
                console.log("Arrow Left pressed")
                this.data.rotateX -= 0.2
            }
        })
    },
    tick: function () {
        rotate = this.el.getAttribute('rotation')
        rotate.z = this.data.rotateX
        this.el.setAttribute('rotation', {
            x: rotate.x,
            y: rotate.y,
            z: rotate.z
        })
    }
});

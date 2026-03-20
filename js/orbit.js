document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".orbit li");
  const radius = 350;
  const centerX = 0;
  const centerY = 0;

  const total = items.length;
  const angleStep = (Math.PI * 2) / total;

  let baseAngle = 0;

  function animate() {
    baseAngle += 0.0010;
    items.forEach((item, index) => {
      const angle = baseAngle + index * angleStep;

      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      item.style.transform = `
        translate(${x}px, ${y}px)
      `;
    });

    requestAnimationFrame(animate);
  }

  animate();
});

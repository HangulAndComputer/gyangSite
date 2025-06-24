const circlenum = 20;
const cirlist = [];
const container = document.getElementById("circles_container");
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
sizmul = containerWidth / circlenum;

for (let i = 0; i < circlenum; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    
    circle.style.backgroundColor = `hsl(${i * 60}, 100%, 50%)`; // Different color for each circle
    circle.style.width = `${(circlenum - i) * sizmul}px`;
    circle.style.height = `${(circlenum - i) * sizmul}px`;
    size = (circlenum - i) * sizmul
    circle.style.left = `${(containerWidth / 2) - (size / 2)}px`;
    circle.style.top = `${(containerHeight / 2) - (size / 2)}px`;
    cirlist.push(circle);
    container.appendChild(circle);
}

function kudeta(si, jong, su, jje) {
    let x = si[0] + (jong[0] - si[0]) / (su - 1) * (jje);
    let y = si[1] + (jong[1] - si[1]) / (su - 1) * (jje);
    return [x, y];
}
document.addEventListener('mousemove', function(e) {
    for (let i = 0; i < circlenum; i++) {
        size = (circlenum - i) * sizmul
        const circle =cirlist[i];
        chungsim = kudeta([0,0], [e.clientX-(containerWidth / 2), e.clientY - (containerHeight / 2)], circlenum, i);
        circle.style.left = `${(containerWidth / 2) - (size / 2) + chungsim[0]}px`;
        circle.style.top = `${(containerHeight / 2) - (size / 2) + chungsim[1]}px`;
    }

});
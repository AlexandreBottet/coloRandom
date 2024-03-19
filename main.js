const getNewPalette = () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const hexCode = [];

    for (let i = 0; i < 5; i++) {
        let hexCaracter = '';
        for (let j = 0; j < 6; j++) {
            if (j % 2 === 0) {
                hexCaracter += letters[Math.floor(Math.random() * letters.length)];
            } else {
                hexCaracter += numbers[Math.floor(Math.random() * numbers.length)];
            }
        }
        hexCode.push(hexCaracter);
    }

    return hexCode;
}

const updatePalette = () => {
    const newPalette = getNewPalette();

    const colorItems = document.querySelectorAll('.color-item');

    colorItems.forEach((item, index) => {
        const square = item.querySelector('.color-item__square');
        const name = item.querySelector('.color-item__name');
        square.style.backgroundColor = '#' + newPalette[index];
        name.textContent = '#' + newPalette[index];
    });
};

const newPaletteButton = document.querySelector('.new-palette');

newPaletteButton.addEventListener('click', updatePalette);

function calcAge() {
    const input = document.getElementById('year').value;
    const result = document.getElementById('res');
    const currentYear = new Date().getFullYear();
    const year = parseInt(input);

    if (!isNaN(year) && year > 1900 && year <= currentYear) {
        result.textContent = `Ваш возраст: ${currentYear - year} лет`;
    } else {
        result.textContent = 'введите корректный год.';
    }
}
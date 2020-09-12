const url = ' http://localhost:3000/request'

async function sendForm(url, formData) {
    const response = await fetch(url, {
        method: 'POST',
        body: data
    });

    if (!response.ok) {
        throw new Error(`Не удалось отправить форму, статус: ${response.status}`);
    }
    return await response.json();
}

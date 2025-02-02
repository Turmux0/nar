const messages = [
    "Итгэлтэй байна уу?",
    "Нээрээ юу??",
    "Сонгосон сонголт нь зөв үү?",
    "Үгүй ээ битгий...",
    "Өшөө сайн бод!",
    "Үгүй гэвэл би гуниглана шүү...",
    "Тийм гэдгээ андуураагүй биз...",
    "Худлаа маниараа тоглоол...",
    "Заза бууж өглөө...",
    "Тоглосымаа зүгээр зөв хариултаа сонгоо ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

document.addEventListener('DOMContentLoaded', (event) => {
    const playButton = document.getElementById('play-button');
    const audio = document.getElementById('background-audio');
    const poemContainer = document.getElementById('poem-container');

    const poemLines = [
        "We met just a few years past,",
        "In moments brief, yet bonds steadfast.",
        "Not born of blood, but hearts entwine,",
        "In you, a sister I define.",
        "", // Empty string for stanza separation
        "Few words we've shared, few glances too,",
        "Yet the warmth I felt, I always knew.",
        "A special place you've carved in me,",
        "A precious bond, pure and free.",
        "", // Empty string for stanza separation
        "No sister by birth, but fate's kind hand,",
        "Blessed me with you, in life's grand plan.",
        "Grateful am I, for your presence near,",
        "On this day, your birthday dear.",
        "", // Empty string for stanza separation
        "Happy birthday, my cherished sister,",
        "On whom my love and wishes extend.",
        "Though paths may part, and times may shift,",
        "Our bond remains, a treasured gift."
    ];

    playButton.addEventListener('click', () => {
        audio.play().catch(error => {
            console.log('Audio playback failed: ', error);
        });

        let delay = 0;
        poemLines.forEach((line, index) => {
            if (line === "") {
                const stanzaElement = document.createElement('div');
                stanzaElement.className = 'stanza';
                poemContainer.appendChild(stanzaElement);
            } else {
                const lineElement = document.createElement('div');
                lineElement.className = 'line';
                lineElement.textContent = line;
                poemContainer.appendChild(lineElement);

                setTimeout(() => {
                    lineElement.style.opacity = 1;
                }, delay);
                delay += 2000; // 2 seconds delay between lines
            }
        });

        // Hide the button after clicking
        playButton.style.display = 'none';
    });
});

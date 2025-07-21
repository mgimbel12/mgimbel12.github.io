const quotes = [
      "Architecture begins where engineering ends.",
      "In every brick is a whisper of belonging.",
      "Space is the silence between thoughts.",
      "We don't just build walls—we shape dreams.",
      "Form follows feeling."
    ];

    function generateQuote() {
      const index = Math.floor(Math.random() * quotes.length);
      document.getElementById('quote').textContent = `"${quotes[index]}"`;
    }

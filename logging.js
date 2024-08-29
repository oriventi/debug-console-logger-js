(function() {
    const originalConsoleLog = console.log;

    console.log = function(message) {
        originalConsoleLog.apply(console, arguments); // Log to the browser's console
        fetch('http://localhost:3000/log', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message.toString() })
        });
    };
})();
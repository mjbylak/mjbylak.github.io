document.addEventListener('DOMContentLoaded', function() {
    var welcomeElement = document.getElementById('welcomeMessage');
    var consoleElement = document.getElementById('console');
    var inputElement = document.getElementById('userInput');
    var commands = {};  // Initialize commands at a higher scope
    var index = 0;
    var developing = true;
    var welcomeText = "";
 

    

    // Function to load commands from content.json
    function loadContent() {
        fetch('content.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok - Status:', response.status);
                }
                return response.json();
            })
            .then(content => {
                commands = {
                    'help': content.en.help,
                    'about': content.en.about,
                    'contact': content.en.contact,
                    'skip': content.en.skip
                };
                welcomeText = content.en.welcome;  // Set welcome text from JSON
                console.log('Commands loaded:', commands);
                console.log('Welcome message loaded:', welcomeText);
                typeWriter(); // Start the typewriter effect once content is loaded
            })
            .catch(error => console.error('Failed to load content:', error));
    }
    
    loadContent();

    function handleCommand(input) {
        if (Object.keys(commands).length === 0) {
            return 'Commands are still loading, please wait...';
        }
        return commands[input] || 'Unknown command. Type "help" for a list of commands.';
    }
    

    // Function to simulate typing the welcome message
    function typeWriter() {
        if (index < welcomeText.length) {
            welcomeElement.textContent += welcomeText.charAt(index);
            index++;
            setTimeout(typeWriter, 31);
        } else {
            inputElement.focus(); // Focus on input after welcome message
        }
    }
    

    // Event listener for user input
    inputElement.addEventListener('keydown', async function(event) {
        const whereToScroll = inputElement;
        if (event.key === 'Enter') {
            event.preventDefault();
            var userInput = inputElement.textContent.trim();
            if (userInput) {
                // Display user input
                var newLine = document.createElement('div');
                newLine.textContent = "> " + userInput;
                consoleElement.appendChild(newLine);

                // Display command output
                var commandOutput = handleCommand(userInput);
                var commandResponse = document.createElement('div');
                consoleElement.appendChild(commandResponse);
                inputElement.textContent = ""; // Reset input field
                
                for (let i = 0; i < commandOutput.length; i++) {
                    commandResponse.textContent += commandOutput.charAt(i);
                    consoleElement.replaceChild(consoleElement.lastChild,commandResponse);
                    if(!developing) await new Promise(r => setTimeout(r, 13));
                    whereToScroll.scrollIntoView();
                }
            }
        }
    });

    typeWriter(); // Start the welcome message typing effect
});

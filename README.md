# 🔐 Random Password Generator

A sleek, web application that generates secure, randomized passwords instantly. Built with HTML5, CSS3, and Vanilla JavaScript, this tool helps users prioritize their digital security by creating complex strings that are difficult to crack.

## 🖼️ Demo
[Project Screenshot](https://drive.google.com/file/d/1QxsMrs9-qfQUtB0LoJ7FinDPV93UIQZP/view?usp=sharing)

[Project link demo](https://assadullahhassan.github.io/password-generator/)


## 🚀 Features
* **Custom Length**: Users can specify the desired length of their password (defaulted to 15).
* **Dual Generation**: Generates two unique options at once, giving users an immediate choice.
* **Copy to Clipboard**: One-click functionality to copy the generated password for immediate use.
* **Modern UI**: A dark-themed, minimalist interface designed for focus and ease of use.
* **High Entropy**: Utilizes a diverse character set including uppercase, lowercase, numbers, and symbols.

## 🛠 Tech Stack
* **HTML5**: Structured the semantic layout and input fields.
* **CSS3 (Flexbox)**: Styled the dark-mode aesthetic and responsive button layouts.
* **Vanilla JavaScript**: Handled the logic for random string generation and clipboard API integration.

## 📖 How It Works
The core logic uses a predefined string of characters and a mathematical function to pick indices at random.

1. **Define Characters:** A variable stores all possible characters: A-Z, a-z, 0-9, and symbols (!@#$%^&*).

2. **Loop & Randomize:** The script runs a loop based on the "Password length" input value.

3. **Math.random:** In each iteration, it uses Math.random() to pick a character.

4. **Display:** The resulting strings are injected into the two display boxes.


### ⚡ Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/assadullahhassan/password-generator.git

2. **Open the project:**
    Simply open index.html in any modern web browser.

3. **Generate:**
    Enter your preferred length (minimum of 6 characters and maximum of 25 characters) and hit the Generate passwords button.


Made from Scrimba by Assadullah Hassan


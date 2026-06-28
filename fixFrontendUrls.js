const fs = require('fs');
const path = require('path');

const DIRECTORY = path.join(__dirname, 'frontend', 'src');
const SEARCH_STRING_1 = '"https://personal-portfolio-production-da8a.up.railway.app/api';
const SEARCH_STRING_2 = '`https://personal-portfolio-production-da8a.up.railway.app/api';

const REPLACEMENT_1 = '(window.location.hostname === "localhost" ? "http://localhost:5000/api" : "https://personal-portfolio-production-da8a.up.railway.app/api") + "';
const REPLACEMENT_2 = '`${window.location.hostname === "localhost" ? "http://localhost:5000/api" : "https://personal-portfolio-production-da8a.up.railway.app/api"}';

function walkDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            // Replace double quote strings
            content = content.split(SEARCH_STRING_1).join(REPLACEMENT_1);
            // Replace template literals
            content = content.split(SEARCH_STRING_2).join(REPLACEMENT_2);
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    });
}

console.log("Starting frontend URL replacement...");
walkDir(DIRECTORY);
console.log("Finished replacing URLs!");

const fs = require('fs');
const path = require('path');

const files = [
    path.join(__dirname, 'Bengkulu/README.md'),
    path.join(__dirname, 'Gorontalo/README.md')
];

for(let file of files) {
    if(fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        // Fix table break (empty line between table items)
        content = content.replace(/\|\n\n\|/g, '|\n|');
        
        // Fix list break (empty line between list items) if any
        content = content.replace(/\.\)\n\n\- \*\*Tokoh/g, '.)\n- **Tokoh');
        content = content.replace(/Gorontalo\)\n\n\- \*\*Tokoh/g, 'Gorontalo)\n- **Tokoh');

        fs.writeFileSync(file, content);
    }
}
console.log('Fixed markdown gaps.');

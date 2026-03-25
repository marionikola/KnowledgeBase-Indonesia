const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const folders = fs.readdirSync(rootDir).filter(f => {
    return fs.statSync(path.join(rootDir, f)).isDirectory() && f !== '_docs' && f !== '.git' && f !== '.gemini';
});

for (let folder of folders) {
    const readmePath = path.join(rootDir, folder, 'README.md');
    if (!fs.existsSync(readmePath)) continue;

    let content = fs.readFileSync(readmePath, 'utf8');
    
    // Check using a more robust regex since Prettier pads spaces around pipes
    if (/\|\s*No\s*\|\s*Nama Destinasi\s*\|\s*Kabupaten\/Kota\s*\|\s*Kategori Singkat\s*\|/.test(content)) {
        let lines = content.split('\n');
        let inTable = false;
        
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            
            // Check header
            if (/\|\s*No\s*\|\s*Nama Destinasi\s*\|\s*Kabupaten\/Kota\s*\|\s*Kategori Singkat\s*\|/.test(line)) {
                if (!line.includes('Google Maps')) {
                    // Match trailing pipe and add the new header
                    lines[i] = line.replace(/\|\s*$/, ' | Google Maps / Koordinat |');
                }
                inTable = true;
                continue;
            }
            
            // Check separator line `|---|---|...`
            if (inTable && /^\|\s*-+\s*\|\s*-+\s*\|\s*-+\s*\|\s*-+\s*\|$/.test(line)) {
                // Since there are 4 columns, we need to append another `---` for the 5th column
                lines[i] = line.replace(/\|\s*$/, '|---|');
                continue;
            }
            
            // Data Rows
            if (inTable && line.trim().startsWith('|') && !/^\|\s*-/.test(line)) {
                let cols = line.split('|').map(c => c.trim());
                // Length will be >=6: ["", "1", "Nama", "Lokasi", "Kat", ""]
                if (cols.length >= 6) {
                    let noObj = cols[1];
                    let destNameObj = cols[2];
                    let kabKotaClean = cols[3];
                    
                    if (/^\d+$/.test(noObj)) { // Ensure it's a data row with a number
                        // Cleanup trailing numbers inside **text**
                        let nameClean = destNameObj.replace(/\*\*/g, '').trim();
                        // Removing trailing numbers: "Air Terjun Eksotis 149" -> "Air Terjun Eksotis"
                        nameClean = nameClean.replace(/\s+\d+$/, '').trim();
                        destNameObj = `**${nameClean}**`; // Rebuild with strong bold markdown
                        cols[2] = destNameObj; // assign back
                        
                        let query = encodeURIComponent(`${nameClean} ${kabKotaClean}`);
                        let mapLink = `[Peta](https://www.google.com/maps/search/?api=1&query=${query})`;
                        
                        // If it doesn't have the 5th real column yet (cols.length === 6)
                        if (cols.length === 6 && line.trim().endsWith('|')) {
                            cols[5] = mapLink; // Fill the previously empty last slot
                            cols.push(''); // Add the empty slot to recreate trailing `|` when joined
                        } else if (cols.length >= 7) {
                            // If it already has it, update the 5th data slot
                            cols[5] = mapLink;
                        }
                        
                        lines[i] = cols.join(' | ').trim();
                        if (!lines[i].startsWith('|')) lines[i] = '| ' + lines[i];
                        if (!lines[i].endsWith('|')) lines[i] += ' |';
                    }
                }
            } else if (inTable && !line.trim().startsWith('|')) {
                if (line.trim() !== '') {
                    inTable = false; // Left the table
                }
            }
        }
        
        fs.writeFileSync(readmePath, lines.join('\n'));
        console.log(`Updated table for ${folder}`);
    }
}
console.log('Table cleaning and expansion complete.');

const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const roadmapPath = path.join(rootDir, '_docs', 'ROADMAP.md');
const content = fs.readFileSync(roadmapPath, 'utf8');

// Regex to capture province blocks
const provinceRegex = /### \d+\. (.*?)\n\*\*Kabupaten \(\d+\):\*\* (.*?)\n\*\*Kota \(\d+\):\*\* (.*?)\n/g;
let match;

function toTitleCase(str) {
    if (str === '-') return '';
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function createReadme(dirPath, title) {
    const readmePath = path.join(dirPath, 'README.md');
    if (!fs.existsSync(readmePath)) {
        const content = `# ${title}\n\nDokumentasi untuk ${title} sedang dalam pengembangan. Silakan berkontribusi!\n`;
        fs.writeFileSync(readmePath, content);
    }
}

while ((match = provinceRegex.exec(content)) !== null) {
    let rawProvName = match[1].trim();
    let kabString = match[2].trim();
    let kotaString = match[3].trim();

    // The folder format uses hyphens for spaces
    let provFolder = rawProvName.replace(/ /g, '-');
    let provPath = path.join(rootDir, provFolder);

    // If province folder doesn't exist, we skip or create? It should exist according to Phase 1.
    if (!fs.existsSync(provPath)) {
        console.warn(`Province folder does not exist: ${provFolder}`);
        continue;
    }

    createReadme(provPath, rawProvName);

    const kabs = kabString !== '-' ? kabString.split(',').map(s => s.trim()).filter(Boolean) : [];
    const kotas = kotaString !== '-' ? kotaString.split(',').map(s => s.trim()).filter(Boolean) : [];

    // KABUPATEN
    if (kabs.length > 0) {
        let kabBaseDir = path.join(provPath, 'kabupaten');
        if (!fs.existsSync(kabBaseDir)) fs.mkdirSync(kabBaseDir, { recursive: true });
        createReadme(kabBaseDir, `Daftar Kabupaten di ${rawProvName}`);

        for (let kab of kabs) {
            let kabDir = path.join(kabBaseDir, kab);
            if (!fs.existsSync(kabDir)) fs.mkdirSync(kabDir, { recursive: true });
            createReadme(kabDir, `Kabupaten ${toTitleCase(kab)}`);
        }
    }

    // KOTA
    if (kotas.length > 0) {
        let kotaBaseDir = path.join(provPath, 'kota');
        if (!fs.existsSync(kotaBaseDir)) fs.mkdirSync(kotaBaseDir, { recursive: true });
        createReadme(kotaBaseDir, `Daftar Kota di ${rawProvName}`);

        for (let kota of kotas) {
            let kotaDir = path.join(kotaBaseDir, kota);
            if (!fs.existsSync(kotaDir)) fs.mkdirSync(kotaDir, { recursive: true });
            createReadme(kotaDir, `Kota ${toTitleCase(kota)}`);
        }
    }
    
    console.log(`Structured: ${provFolder} (${kabs.length} Kabupaten, ${kotas.length} Kota)`);
}
console.log("Phase 2 complete.");

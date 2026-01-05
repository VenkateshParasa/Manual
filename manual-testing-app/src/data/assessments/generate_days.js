const fs = require('fs');

// Read original assessments
const originalContent = fs.readFileSync('../assessments.js', 'utf8');

// Function to extract day object from the file
function extractDayObject(dayName) {
  const regex = new RegExp(`${dayName}:\\s*{`, 'g');
  const match = regex.exec(originalContent);
  
  if (\!match) return null;
  
  let braceCount = 0;
  let start = match.index + match[0].length - 1;
  let end = start;
  let inString = false;
  let escapeNext = false;
  let stringChar = '';
  
  for (let i = start; i < originalContent.length; i++) {
    const char = originalContent[i];
    const prevChar = i > 0 ? originalContent[i-1] : '';
    
    if (escapeNext) {
      escapeNext = false;
      continue;
    }
    
    if (char === '\\') {
      escapeNext = true;
      continue;
    }
    
    if ((char === '"' || char === "'" || char === '`') && \!inString) {
      inString = true;
      stringChar = char;
    } else if (char === stringChar && inString) {
      inString = false;
      stringChar = '';
    }
    
    if (\!inString) {
      if (char === '{') braceCount++;
      else if (char === '}') {
        braceCount--;
        if (braceCount === 0) {
          end = i + 1;
          break;
        }
      }
    }
  }
  
  return originalContent.substring(start, end);
}

// Extract and create files for days 2-4
for (let i = 2; i <= 4; i++) {
  const dayName = `day${i}`;
  const dayObject = extractDayObject(dayName);
  
  if (dayObject) {
    const fileContent = `export default ${dayObject};\n`;
    fs.writeFileSync(`${dayName}.js`, fileContent);
    console.log(`Created ${dayName}.js`);
  }
}

console.log('Generation complete\!');

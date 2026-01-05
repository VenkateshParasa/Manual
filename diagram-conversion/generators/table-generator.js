/**
 * Table Generator
 * Converts ASCII tables to PNG images using HTML/Canvas
 */

import fs from 'fs';
import path from 'path';
import config from '../config.js';

export class TableGenerator {
  constructor() {
    this.cellPadding = 12;
    this.borderWidth = 1;
    this.headerHeight = 45;
    this.rowHeight = 40;
  }

  /**
   * Generate PNG from ASCII table
   */
  async generate(diagram, outputPath) {
    console.log(`  📊 Generating table diagram: ${diagram.id}`);

    try {
      // Parse ASCII table
      const table = this.parseTable(diagram.content);

      // Generate HTML
      const html = this.createHTML(table);

      // For now, save as HTML (PNG conversion requires puppeteer)
      const htmlPath = outputPath.replace(/\.(png|jpg|jpeg)$/i, '.html');
      
      // Ensure output directory exists
      const dir = path.dirname(htmlPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Write HTML file
      fs.writeFileSync(htmlPath, html);

      // Note: Actual PNG conversion would require puppeteer
      // For now, we'll create a placeholder or use the HTML
      console.log(`    ℹ️  HTML table saved. PNG conversion requires puppeteer.`);

      return {
        success: true,
        path: htmlPath,
        note: 'HTML generated. Use puppeteer for PNG conversion.'
      };
    } catch (error) {
      console.error(`    ❌ Error generating table: ${error.message}`);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Parse ASCII table into structured data
   */
  parseTable(content) {
    const lines = content.split('\n').filter(line => line.trim());
    const table = { headers: [], rows: [] };

    let inHeader = true;
    let headerRow = [];

    for (const line of lines) {
      // Skip border lines
      if (this.isBorderLine(line)) {
        if (headerRow.length > 0) {
          table.headers = headerRow;
          headerRow = [];
          inHeader = false;
        }
        continue;
      }

      // Extract cells from line
      const cells = this.extractCells(line);
      
      if (cells.length === 0) continue;

      if (inHeader) {
        headerRow = cells;
      } else {
        table.rows.push(cells);
      }
    }

    // If no headers were set, use first row as headers
    if (table.headers.length === 0 && table.rows.length > 0) {
      table.headers = table.rows.shift();
    }

    return table;
  }

  /**
   * Check if line is a border line
   */
  isBorderLine(line) {
    const borderChars = /^[\s│├┤┌┐└┘┬┴┼─═]+$/;
    return borderChars.test(line);
  }

  /**
   * Extract cells from table line
   */
  extractCells(line) {
    // Split by pipe or box drawing characters
    const cells = line
      .split(/[│┤├]/)
      .map(cell => cell.trim())
      .filter(cell => cell.length > 0);

    return cells;
  }

  /**
   * Create HTML table
   */
  createHTML(table) {
    const { headers, rows } = table;

    let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Table Diagram</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      padding: ${config.imageSettings.svg.padding}px;
      font-family: ${config.imageSettings.svg.fontFamily};
      background: ${config.theme.background};
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
    }
    
    .table-container {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      max-width: 100%;
    }
    
    table {
      border-collapse: collapse;
      width: 100%;
      font-size: ${config.imageSettings.svg.fontSize}px;
    }
    
    th {
      background: ${config.theme.primary};
      color: white;
      padding: ${this.cellPadding}px;
      text-align: left;
      font-weight: 600;
      border: ${this.borderWidth}px solid ${config.theme.border};
    }
    
    td {
      padding: ${this.cellPadding - 2}px ${this.cellPadding}px;
      border: ${this.borderWidth}px solid ${config.theme.border};
      color: ${config.theme.text};
    }
    
    tr:nth-child(even) {
      background: #f9fafb;
    }
    
    tr:hover {
      background: ${config.theme.highlight};
    }
    
    @media print {
      body {
        padding: 0;
      }
      
      .table-container {
        box-shadow: none;
      }
    }
  </style>
</head>
<body>
  <div class="table-container">
    <table>
      <thead>
        <tr>
`;

    // Add headers
    headers.forEach(header => {
      html += `          <th>${this.escapeHtml(header)}</th>\n`;
    });

    html += `        </tr>
      </thead>
      <tbody>
`;

    // Add rows
    rows.forEach(row => {
      html += `        <tr>\n`;
      row.forEach(cell => {
        html += `          <td>${this.escapeHtml(cell)}</td>\n`;
      });
      html += `        </tr>\n`;
    });

    html += `      </tbody>
    </table>
  </div>
</body>
</html>`;

    return html;
  }

  /**
   * Escape HTML special characters
   */
  escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Convert HTML to PNG using puppeteer (optional)
   */
  async convertToPNG(htmlPath, pngPath) {
    try {
      // This would require puppeteer to be installed
      // Placeholder for actual implementation
      console.log(`    ℹ️  PNG conversion requires puppeteer installation`);
      console.log(`    Run: npm install puppeteer`);
      console.log(`    Then use: await page.screenshot({ path: '${pngPath}' })`);
      
      return {
        success: false,
        message: 'Puppeteer not implemented in this version'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
}

export default TableGenerator;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from '../config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class InfrastructureSetup {
  constructor() {
    this.createdDirs = [];
    this.createdFiles = [];
  }

  /**
   * Main setup function
   */
  async setup() {
    console.log('🏗️  Setting up infrastructure for diagram conversion...\n');

    try {
      // Create folder structure
      this.createFolderStructure();

      // Create template files
      this.createTemplates();

      // Create utility files
      this.createUtilities();

      // Create naming convention document
      this.createNamingConventionDoc();

      // Print summary
      this.printSummary();

      console.log('\n✅ Infrastructure setup complete!');
    } catch (error) {
      console.error('❌ Error during setup:', error.message);
      throw error;
    }
  }

  /**
   * Create folder structure
   */
  createFolderStructure() {
    console.log('📁 Creating folder structure...');

    const folders = [
      // Output directories
      config.outputDir,
      config.imagesDir,
      
      // Week directories
      ...this.generateWeekDayFolders(),
      
      // Common directories
      path.join(config.imagesDir, 'common'),
      path.join(config.imagesDir, 'common/icons'),
      path.join(config.imagesDir, 'common/templates'),
      
      // Script directories
      './generators',
      './templates',
      './utils',
      './output/backups'
    ];

    for (const folder of folders) {
      const fullPath = path.join(__dirname, '..', folder);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        this.createdDirs.push(folder);
        console.log(`  ✓ Created: ${folder}`);
      }
    }
  }

  /**
   * Generate week/day folder structure
   */
  generateWeekDayFolders() {
    const folders = [];
    
    // Week 1: Days 1-7
    for (let day = 1; day <= 7; day++) {
      folders.push(path.join(config.imagesDir, `week1/day${day}`));
    }
    
    // Week 2: Days 8-14
    for (let day = 8; day <= 14; day++) {
      folders.push(path.join(config.imagesDir, `week2/day${day}`));
    }
    
    // Week 3: Days 15-21
    for (let day = 15; day <= 21; day++) {
      folders.push(path.join(config.imagesDir, `week3/day${day}`));
    }

    return folders;
  }

  /**
   * Create template files
   */
  createTemplates() {
    console.log('\n📝 Creating template files...');

    // SVG tree template
    this.createTreeTemplate();

    // Mermaid flowchart template
    this.createFlowchartTemplate();

    // HTML table template
    this.createTableTemplate();
  }

  /**
   * Create tree diagram SVG template
   */
  createTreeTemplate() {
    const template = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <defs>
    <style>
      .tree-node {
        fill: ${config.theme.primary};
        stroke: ${config.theme.border};
        stroke-width: 2;
      }
      .tree-text {
        fill: ${config.theme.text};
        font-family: ${config.imageSettings.svg.fontFamily};
        font-size: ${config.imageSettings.svg.fontSize}px;
        text-anchor: middle;
      }
      .tree-line {
        stroke: ${config.theme.border};
        stroke-width: 2;
        fill: none;
      }
    </style>
  </defs>
  
  <!-- Tree structure will be generated here -->
  <g id="tree-content">
    <!-- Nodes and connections -->
  </g>
</svg>`;

    const filePath = path.join(__dirname, '..', 'templates', 'tree-template.svg');
    fs.writeFileSync(filePath, template);
    this.createdFiles.push('templates/tree-template.svg');
    console.log('  ✓ Created: tree-template.svg');
  }

  /**
   * Create flowchart Mermaid template
   */
  createFlowchartTemplate() {
    const template = `graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Process 1]
    B -->|No| D[Process 2]
    C --> E[End]
    D --> E

    style A fill:${config.theme.primary}
    style E fill:${config.theme.accent}
    style B fill:${config.theme.secondary}`;

    const filePath = path.join(__dirname, '..', 'templates', 'flowchart-template.mmd');
    fs.writeFileSync(filePath, template);
    this.createdFiles.push('templates/flowchart-template.mmd');
    console.log('  ✓ Created: flowchart-template.mmd');
  }

  /**
   * Create table HTML template
   */
  createTableTemplate() {
    const template = `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      padding: 20px;
      font-family: ${config.imageSettings.svg.fontFamily};
      background: ${config.theme.background};
    }
    table {
      border-collapse: collapse;
      width: 100%;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    th {
      background: ${config.theme.primary};
      color: white;
      padding: 12px;
      text-align: left;
      font-weight: 600;
    }
    td {
      padding: 10px 12px;
      border: 1px solid ${config.theme.border};
    }
    tr:nth-child(even) {
      background: #f9fafb;
    }
    tr:hover {
      background: ${config.theme.highlight};
    }
  </style>
</head>
<body>
  <table>
    <!-- Table content will be generated here -->
  </table>
</body>
</html>`;

    const filePath = path.join(__dirname, '..', 'templates', 'table-template.html');
    fs.writeFileSync(filePath, template);
    this.createdFiles.push('templates/table-template.html');
    console.log('  ✓ Created: table-template.html');
  }

  /**
   * Create utility files
   */
  createUtilities() {
    console.log('\n🔧 Creating utility files...');

    // File naming utility
    this.createNamingUtility();

    // Metadata generator utility
    this.createMetadataUtility();
  }

  /**
   * Create naming utility
   */
  createNamingUtility() {
    const content = `/**
 * Utility for generating consistent file names
 */

import config from '../config.js';

export class FileNaming {
  /**
   * Generate filename for diagram
   * @param {Object} diagram - Diagram object from inventory
   * @returns {string} - Generated filename
   */
  static generateFilename(diagram) {
    const { week, day, type, description } = diagram;
    
    // Format week and day
    const weekStr = \`\${config.naming.weekPrefix}\${week}\`;
    const dayStr = \`\${config.naming.dayPrefix}\${day}\`;
    
    // Clean and format description
    const descStr = this.cleanDescription(description);
    
    // Determine extension
    const ext = this.getExtension(type);
    
    // Build filename
    return \`\${weekStr}_\${dayStr}_\${type}_\${descStr}.\${ext}\`;
  }

  /**
   * Clean description for filename
   */
  static cleanDescription(description) {
    return description
      .toLowerCase()
      .replace(/[^a-z0-9\\s]/g, '')
      .trim()
      .replace(/\\s+/g, config.naming.descriptionSeparator)
      .substring(0, 50);
  }

  /**
   * Get file extension based on diagram type
   */
  static getExtension(type) {
    const extensions = {
      [config.diagramTypes.TREE]: 'svg',
      [config.diagramTypes.FLOWCHART]: 'svg',
      [config.diagramTypes.TABLE]: 'png',
      [config.diagramTypes.MERMAID]: 'svg',
      [config.diagramTypes.CUSTOM]: 'svg'
    };
    
    return extensions[type] || 'png';
  }

  /**
   * Get relative path for diagram
   */
  static getRelativePath(diagram) {
    const filename = this.generateFilename(diagram);
    return \`week\${diagram.week}/day\${diagram.day}/\${filename}\`;
  }

  /**
   * Get full output path
   */
  static getFullPath(diagram) {
    const relativePath = this.getRelativePath(diagram);
    return \`\${config.imagesDir}/\${relativePath}\`;
  }
}

export default FileNaming;
`;

    const filePath = path.join(__dirname, '..', 'utils', 'file-naming.js');
    fs.writeFileSync(filePath, content);
    this.createdFiles.push('utils/file-naming.js');
    console.log('  ✓ Created: file-naming.js');
  }

  /**
   * Create metadata utility
   */
  createMetadataUtility() {
    const content = `/**
 * Utility for generating and managing image metadata
 */

import fs from 'fs';
import path from 'path';

export class MetadataGenerator {
  /**
   * Generate metadata for a diagram
   */
  static generateMetadata(diagram, imagePath, dimensions) {
    return {
      id: diagram.id,
      filename: path.basename(imagePath),
      title: diagram.description,
      description: \`Diagram from \${diagram.file}\`,
      altText: this.generateAltText(diagram),
      source: diagram.file,
      lineNumber: diagram.lineStart,
      type: diagram.type,
      createdDate: new Date().toISOString().split('T')[0],
      dimensions: dimensions || { width: 800, height: 600 },
      fileSize: this.getFileSize(imagePath),
      format: path.extname(imagePath).substring(1)
    };
  }

  /**
   * Generate descriptive alt text
   */
  static generateAltText(diagram) {
    const typeDescriptions = {
      tree: 'Tree diagram showing',
      flowchart: 'Flowchart illustrating',
      table: 'Table displaying',
      mermaid: 'Diagram depicting',
      custom: 'Visual representation of'
    };

    const prefix = typeDescriptions[diagram.type] || 'Diagram showing';
    return \`\${prefix} \${diagram.description}\`;
  }

  /**
   * Get file size in human-readable format
   */
  static getFileSize(filePath) {
    try {
      const stats = fs.statSync(filePath);
      const bytes = stats.size;
      
      if (bytes < 1024) return \`\${bytes}B\`;
      if (bytes < 1024 * 1024) return \`\${(bytes / 1024).toFixed(1)}KB\`;
      return \`\${(bytes / (1024 * 1024)).toFixed(1)}MB\`;
    } catch {
      return 'Unknown';
    }
  }

  /**
   * Save metadata to JSON file
   */
  static saveMetadata(metadata, outputDir) {
    const metadataPath = path.join(outputDir, 'metadata.json');
    
    let existingMetadata = {};
    if (fs.existsSync(metadataPath)) {
      existingMetadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
    }

    existingMetadata[metadata.filename] = metadata;
    
    fs.writeFileSync(metadataPath, JSON.stringify(existingMetadata, null, 2));
  }
}

export default MetadataGenerator;
`;

    const filePath = path.join(__dirname, '..', 'utils', 'metadata-generator.js');
    fs.writeFileSync(filePath, content);
    this.createdFiles.push('utils/metadata-generator.js');
    console.log('  ✓ Created: metadata-generator.js');
  }

  /**
   * Create naming convention document
   */
  createNamingConventionDoc() {
    console.log('\n📋 Creating naming convention document...');

    const content = `# Diagram Naming Convention

## Format

\`\`\`
{week}_{day}_{type}_{description}.{ext}
\`\`\`

## Components

### Week
- **Format:** \`w1\`, \`w2\`, \`w3\`
- **Description:** Week number with 'w' prefix

### Day
- **Format:** \`d1\`, \`d2\`, ..., \`d21\`
- **Description:** Day number with 'd' prefix

### Type
- **tree** - Tree diagrams and hierarchies
- **flowchart** - Process flows and flowcharts
- **table** - Tables and data grids
- **mermaid** - Mermaid-generated diagrams
- **custom** - Custom or complex diagrams

### Description
- **Format:** kebab-case (lowercase with hyphens)
- **Max Length:** 50 characters
- **Rules:**
  - Only alphanumeric characters and hyphens
  - No special characters
  - Descriptive and meaningful

### Extension
- **svg** - Vector graphics (preferred for diagrams)
- **png** - Raster graphics (for complex renders)
- **webp** - Modern format (for optimization)

## Examples

### Good Examples
\`\`\`
w1_d1_tree_test-design-techniques.svg
w1_d1_flowchart_sdlc-process.svg
w2_d8_table_browser-compatibility.png
w3_d15_mermaid_agile-workflow.svg
w2_d10_custom_mobile-testing-architecture.svg
\`\`\`

### Bad Examples
\`\`\`
❌ diagram1.svg (not descriptive)
❌ Week1_Day1_Tree.svg (wrong format)
❌ w1-d1-tree-test design techniques.svg (spaces not allowed)
❌ w1_d1_tree_this-is-a-very-long-description-that-exceeds-the-maximum-length.svg (too long)
\`\`\`

## Directory Structure

\`\`\`
output/images/diagrams/
├── week1/
│   ├── day1/
│   │   ├── w1_d1_tree_test-design-techniques.svg
│   │   ├── w1_d1_flowchart_sdlc-process.svg
│   │   └── metadata.json
│   ├── day2/
│   └── ...
├── week2/
│   ├── day8/
│   └── ...
└── week3/
    ├── day15/
    └── ...
\`\`\`

## Metadata

Each directory contains a \`metadata.json\` file with image information:

\`\`\`json
{
  "w1_d1_tree_test-design-techniques.svg": {
    "title": "Test Design Techniques Hierarchy",
    "description": "Categorization of test design techniques",
    "altText": "Tree diagram showing test design techniques hierarchy",
    "source": "Week1_Day1_Manual_Testing_Fundamentals_SDLC.md",
    "lineNumber": 145,
    "createdDate": "2026-01-05",
    "dimensions": { "width": 800, "height": 600 },
    "fileSize": "45KB"
  }
}
\`\`\`

## Usage in Markdown

\`\`\`markdown
![Test Design Techniques](./images/diagrams/week1/day1/w1_d1_tree_test-design-techniques.svg)

*Figure 1.1: Test Design Techniques categorized by approach*
\`\`\`

## Automation

The naming convention is automatically applied by the \`FileNaming\` utility:

\`\`\`javascript
import { FileNaming } from './utils/file-naming.js';

const filename = FileNaming.generateFilename(diagram);
const path = FileNaming.getFullPath(diagram);
\`\`\`
`;

    const filePath = path.join(__dirname, '..', 'output', 'NAMING_CONVENTION.md');
    fs.writeFileSync(filePath, content);
    this.createdFiles.push('output/NAMING_CONVENTION.md');
    console.log('  ✓ Created: NAMING_CONVENTION.md');
  }

  /**
   * Print setup summary
   */
  printSummary() {
    console.log('\n📊 Setup Summary:');
    console.log('─'.repeat(50));
    console.log(`Directories created: ${this.createdDirs.length}`);
    console.log(`Files created: ${this.createdFiles.length}`);
    
    console.log('\n✅ Infrastructure is ready for diagram generation!');
    console.log('\nNext steps:');
    console.log('1. Run: npm install (to install dependencies)');
    console.log('2. Run: npm run scan (to scan for diagrams)');
    console.log('3. Run: npm run generate (to generate images)');
  }
}

// Run the setup
const setup = new InfrastructureSetup();
setup.setup().catch(console.error);
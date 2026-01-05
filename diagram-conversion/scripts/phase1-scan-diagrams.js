import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from '../config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DiagramScanner {
  constructor() {
    this.inventory = [];
    this.diagramId = 1;
    this.stats = {
      totalFiles: 0,
      totalDiagrams: 0,
      byType: {},
      byComplexity: {},
      byPriority: {}
    };
  }

  /**
   * Main scanning function
   */
  async scan() {
    console.log('🔍 Starting diagram discovery and audit...\n');
    
    // Ensure output directory exists
    this.ensureOutputDir();

    // Scan all markdown files
    for (const filename of config.weekFiles) {
      await this.scanFile(filename);
    }

    // Generate reports
    this.generateInventoryJson();
    this.generateInventoryMarkdown();
    this.printSummary();

    console.log('\n✅ Scanning complete!');
    console.log(`📊 Found ${this.stats.totalDiagrams} diagrams across ${this.stats.totalFiles} files`);
    console.log(`📁 Inventory saved to: ${config.inventoryFile}`);
  }

  /**
   * Ensure output directory exists
   */
  ensureOutputDir() {
    const outputDir = path.join(__dirname, '..', config.outputDir);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
  }

  /**
   * Scan a single markdown file
   */
  async scanFile(filename) {
    const filePath = path.join(__dirname, '..', config.sourceDir, filename);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filename}`);
      return;
    }

    console.log(`📄 Scanning: ${filename}`);
    this.stats.totalFiles++;

    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    // Find all code blocks
    const codeBlocks = this.extractCodeBlocks(content, lines);

    // Analyze each code block
    for (const block of codeBlocks) {
      const diagram = this.analyzeCodeBlock(block, filename);
      if (diagram) {
        this.inventory.push(diagram);
        this.stats.totalDiagrams++;
        this.updateStats(diagram);
      }
    }
  }

  /**
   * Extract all code blocks from content
   */
  extractCodeBlocks(content, lines) {
    const blocks = [];
    const codeBlockRegex = /```[\s\S]*?```/g;
    let match;

    while ((match = codeBlockRegex.exec(content)) !== null) {
      const blockContent = match[0];
      const startIndex = match.index;
      
      // Find line numbers
      const beforeBlock = content.substring(0, startIndex);
      const lineStart = beforeBlock.split('\n').length;
      const lineEnd = lineStart + blockContent.split('\n').length - 1;

      blocks.push({
        content: blockContent,
        lineStart,
        lineEnd,
        raw: blockContent.replace(/```/g, '').trim()
      });
    }

    return blocks;
  }

  /**
   * Analyze a code block to determine if it's a diagram
   */
  analyzeCodeBlock(block, filename) {
    const { content, raw, lineStart, lineEnd } = block;

    // Check for different diagram types
    const type = this.detectDiagramType(raw);
    
    if (type === config.diagramTypes.UNKNOWN) {
      return null; // Not a diagram
    }

    // Extract description from content
    const description = this.extractDescription(raw, type);
    
    // Determine complexity
    const complexity = this.assessComplexity(raw, type);
    
    // Determine priority
    const priority = this.determinePriority(type, complexity);

    // Generate diagram ID
    const id = `DIAG-${String(this.diagramId++).padStart(3, '0')}`;

    // Extract week and day from filename
    const { week, day } = this.parseFilename(filename);

    return {
      id,
      file: filename,
      week,
      day,
      lineStart,
      lineEnd,
      type,
      description,
      complexity,
      priority,
      conversionMethod: this.getConversionMethod(type),
      status: 'pending',
      estimatedTime: this.estimateTime(complexity),
      content: raw,
      preview: this.generatePreview(raw)
    };
  }

  /**
   * Detect diagram type from content
   */
  detectDiagramType(content) {
    // Check for Mermaid
    if (content.includes('graph') || content.includes('flowchart') || 
        content.includes('sequenceDiagram') || content.includes('classDiagram')) {
      return config.diagramTypes.MERMAID;
    }

    // Check for tree diagrams
    if (config.patterns.tree.test(content)) {
      return config.diagramTypes.TREE;
    }

    // Check for flowcharts
    if (config.patterns.flowchart.test(content)) {
      return config.diagramTypes.FLOWCHART;
    }

    // Check for tables
    if (config.patterns.table.test(content)) {
      return config.diagramTypes.TABLE;
    }

    // Check if it looks like a visual diagram (has structure)
    if (this.looksLikeDiagram(content)) {
      return config.diagramTypes.CUSTOM;
    }

    return config.diagramTypes.UNKNOWN;
  }

  /**
   * Check if content looks like a diagram
   */
  looksLikeDiagram(content) {
    // Check for visual structure indicators
    const indicators = [
      /\|/g,  // Pipes
      /\+/g,  // Plus signs
      /-{3,}/g,  // Multiple dashes
      /={3,}/g,  // Multiple equals
      /\*/g,  // Asterisks
      /\[.*\]/g,  // Brackets
      /\(.*\)/g   // Parentheses
    ];

    let score = 0;
    for (const pattern of indicators) {
      const matches = content.match(pattern);
      if (matches && matches.length > 3) {
        score++;
      }
    }

    // If multiple indicators present, likely a diagram
    return score >= 3;
  }

  /**
   * Extract description from diagram content
   */
  extractDescription(content, type) {
    const lines = content.split('\n').filter(line => line.trim());
    
    if (lines.length === 0) return 'Untitled diagram';

    // First non-empty line is usually the title
    const firstLine = lines[0].trim();
    
    // Clean up the description
    return firstLine
      .replace(/[├└│─┌┐┘┴┬┤]/g, '')
      .replace(/[→←↑↓⇒⇐⇑⇓]/g, '')
      .replace(/[┌─┬─┐├─┼─┤└─┴─┘]/g, '')
      .trim()
      .substring(0, 100);
  }

  /**
   * Assess complexity of diagram
   */
  assessComplexity(content, type) {
    const lines = content.split('\n').length;
    const chars = content.length;

    if (type === config.diagramTypes.TREE) {
      if (lines < 10) return config.complexity.SIMPLE;
      if (lines < 20) return config.complexity.MEDIUM;
      return config.complexity.COMPLEX;
    }

    if (type === config.diagramTypes.TABLE) {
      if (lines < 8) return config.complexity.SIMPLE;
      if (lines < 15) return config.complexity.MEDIUM;
      return config.complexity.COMPLEX;
    }

    // Default complexity assessment
    if (chars < 200) return config.complexity.SIMPLE;
    if (chars < 500) return config.complexity.MEDIUM;
    return config.complexity.COMPLEX;
  }

  /**
   * Determine priority based on type and complexity
   */
  determinePriority(type, complexity) {
    // High priority for common diagram types
    if (type === config.diagramTypes.TREE || type === config.diagramTypes.FLOWCHART) {
      return config.priority.HIGH;
    }

    // Medium priority for tables
    if (type === config.diagramTypes.TABLE) {
      return config.priority.MEDIUM;
    }

    // Priority based on complexity for others
    if (complexity === config.complexity.COMPLEX) {
      return config.priority.LOW;
    }

    return config.priority.MEDIUM;
  }

  /**
   * Get conversion method for diagram type
   */
  getConversionMethod(type) {
    const methods = {
      [config.diagramTypes.TREE]: 'SVG Generation (D3.js)',
      [config.diagramTypes.FLOWCHART]: 'SVG Generation (Custom)',
      [config.diagramTypes.TABLE]: 'PNG Generation (Canvas)',
      [config.diagramTypes.MERMAID]: 'Mermaid CLI',
      [config.diagramTypes.CUSTOM]: 'Manual/Custom SVG'
    };

    return methods[type] || 'Manual Review Required';
  }

  /**
   * Estimate time for conversion
   */
  estimateTime(complexity) {
    const times = {
      [config.complexity.SIMPLE]: '15-20 minutes',
      [config.complexity.MEDIUM]: '30-45 minutes',
      [config.complexity.COMPLEX]: '60-90 minutes'
    };

    return times[complexity] || '30 minutes';
  }

  /**
   * Parse week and day from filename
   */
  parseFilename(filename) {
    const weekMatch = filename.match(/Week(\d+)/);
    const dayMatch = filename.match(/Day(\d+)/);

    return {
      week: weekMatch ? parseInt(weekMatch[1]) : 0,
      day: dayMatch ? parseInt(dayMatch[1]) : 0
    };
  }

  /**
   * Generate preview of diagram content
   */
  generatePreview(content) {
    const lines = content.split('\n').slice(0, 5);
    return lines.join('\n') + (content.split('\n').length > 5 ? '\n...' : '');
  }

  /**
   * Update statistics
   */
  updateStats(diagram) {
    // By type
    this.stats.byType[diagram.type] = (this.stats.byType[diagram.type] || 0) + 1;
    
    // By complexity
    this.stats.byComplexity[diagram.complexity] = 
      (this.stats.byComplexity[diagram.complexity] || 0) + 1;
    
    // By priority
    this.stats.byPriority[diagram.priority] = 
      (this.stats.byPriority[diagram.priority] || 0) + 1;
  }

  /**
   * Generate inventory JSON file
   */
  generateInventoryJson() {
    const outputPath = path.join(__dirname, '..', config.inventoryFile);
    const data = {
      generatedAt: new Date().toISOString(),
      stats: this.stats,
      diagrams: this.inventory
    };

    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  }

  /**
   * Generate inventory Markdown file
   */
  generateInventoryMarkdown() {
    const outputPath = path.join(__dirname, '..', config.inventoryMdFile);
    
    let md = '# Diagram Inventory\n\n';
    md += `**Generated:** ${new Date().toLocaleString()}\n\n`;
    md += '## Summary Statistics\n\n';
    md += `- **Total Files Scanned:** ${this.stats.totalFiles}\n`;
    md += `- **Total Diagrams Found:** ${this.stats.totalDiagrams}\n\n`;

    md += '### By Type\n\n';
    for (const [type, count] of Object.entries(this.stats.byType)) {
      md += `- **${type}:** ${count}\n`;
    }

    md += '\n### By Complexity\n\n';
    for (const [complexity, count] of Object.entries(this.stats.byComplexity)) {
      md += `- **${complexity}:** ${count}\n`;
    }

    md += '\n### By Priority\n\n';
    for (const [priority, count] of Object.entries(this.stats.byPriority)) {
      md += `- **${priority}:** ${count}\n`;
    }

    md += '\n## Detailed Inventory\n\n';
    md += '| ID | File | Lines | Type | Complexity | Priority | Description |\n';
    md += '|----|------|-------|------|------------|----------|-------------|\n';

    for (const diagram of this.inventory) {
      md += `| ${diagram.id} | ${diagram.file} | ${diagram.lineStart}-${diagram.lineEnd} | `;
      md += `${diagram.type} | ${diagram.complexity} | ${diagram.priority} | `;
      md += `${diagram.description.substring(0, 50)}... |\n`;
    }

    md += '\n## Diagrams by Week\n\n';
    
    // Group by week
    const byWeek = {};
    for (const diagram of this.inventory) {
      const week = `Week ${diagram.week}`;
      if (!byWeek[week]) byWeek[week] = [];
      byWeek[week].push(diagram);
    }

    for (const [week, diagrams] of Object.entries(byWeek).sort()) {
      md += `### ${week} (${diagrams.length} diagrams)\n\n`;
      for (const diagram of diagrams) {
        md += `#### ${diagram.id}: ${diagram.description}\n\n`;
        md += `- **File:** ${diagram.file}\n`;
        md += `- **Lines:** ${diagram.lineStart}-${diagram.lineEnd}\n`;
        md += `- **Type:** ${diagram.type}\n`;
        md += `- **Complexity:** ${diagram.complexity}\n`;
        md += `- **Priority:** ${diagram.priority}\n`;
        md += `- **Estimated Time:** ${diagram.estimatedTime}\n`;
        md += `- **Conversion Method:** ${diagram.conversionMethod}\n\n`;
        md += '**Preview:**\n```\n' + diagram.preview + '\n```\n\n';
      }
    }

    fs.writeFileSync(outputPath, md);
  }

  /**
   * Print summary to console
   */
  printSummary() {
    console.log('\n📊 Summary Statistics:');
    console.log('─'.repeat(50));
    console.log(`Total Files Scanned: ${this.stats.totalFiles}`);
    console.log(`Total Diagrams Found: ${this.stats.totalDiagrams}`);
    
    console.log('\nBy Type:');
    for (const [type, count] of Object.entries(this.stats.byType)) {
      console.log(`  ${type}: ${count}`);
    }

    console.log('\nBy Complexity:');
    for (const [complexity, count] of Object.entries(this.stats.byComplexity)) {
      console.log(`  ${complexity}: ${count}`);
    }

    console.log('\nBy Priority:');
    for (const [priority, count] of Object.entries(this.stats.byPriority)) {
      console.log(`  ${priority}: ${count}`);
    }
  }
}

// Run the scanner
const scanner = new DiagramScanner();
scanner.scan().catch(console.error);
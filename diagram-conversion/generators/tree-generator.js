/**
 * Tree Diagram Generator
 * Converts ASCII tree structures to SVG images
 */

import fs from 'fs';
import path from 'path';
import config from '../config.js';

export class TreeGenerator {
  constructor() {
    this.nodeWidth = 180;
    this.nodeHeight = 40;
    this.horizontalSpacing = 60;
    this.verticalSpacing = 80;
    this.padding = 40;
  }

  /**
   * Generate SVG from ASCII tree
   */
  async generate(diagram, outputPath) {
    console.log(`  🌳 Generating tree diagram: ${diagram.id}`);

    try {
      // Parse ASCII tree structure
      const tree = this.parseTree(diagram.content);

      // Calculate dimensions
      const dimensions = this.calculateDimensions(tree);

      // Generate SVG
      const svg = this.createSVG(tree, dimensions);

      // Ensure output directory exists
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Write SVG file
      fs.writeFileSync(outputPath, svg);

      return {
        success: true,
        path: outputPath,
        dimensions
      };
    } catch (error) {
      console.error(`    ❌ Error generating tree: ${error.message}`);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Parse ASCII tree into structured data
   */
  parseTree(content) {
    const lines = content.split('\n').filter(line => line.trim());
    const tree = { name: '', children: [] };
    const stack = [{ node: tree, level: -1 }];

    for (const line of lines) {
      // Calculate indentation level
      const level = this.getIndentLevel(line);
      
      // Extract node text
      const text = this.extractNodeText(line);
      
      if (!text) continue;

      // Create new node
      const node = { name: text, children: [] };

      // Find parent based on indentation
      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (stack.length > 0) {
        stack[stack.length - 1].node.children.push(node);
      }

      stack.push({ node, level });
    }

    return tree.children.length > 0 ? tree.children[0] : tree;
  }

  /**
   * Get indentation level from line
   */
  getIndentLevel(line) {
    const match = line.match(/^(\s*)/);
    return match ? Math.floor(match[1].length / 2) : 0;
  }

  /**
   * Extract node text from line
   */
  extractNodeText(line) {
    // Remove tree characters and clean up
    return line
      .replace(/[├└│─┌┐┘┴┬┤]/g, '')
      .replace(/^[\s\-]+/, '')
      .trim();
  }

  /**
   * Calculate SVG dimensions based on tree structure
   */
  calculateDimensions(tree) {
    const depth = this.getTreeDepth(tree);
    const width = this.getTreeWidth(tree);

    return {
      width: Math.max(800, width * (this.nodeWidth + this.horizontalSpacing) + this.padding * 2),
      height: depth * (this.nodeHeight + this.verticalSpacing) + this.padding * 2
    };
  }

  /**
   * Get tree depth
   */
  getTreeDepth(node, depth = 0) {
    if (!node.children || node.children.length === 0) {
      return depth + 1;
    }

    return Math.max(...node.children.map(child => 
      this.getTreeDepth(child, depth + 1)
    ));
  }

  /**
   * Get tree width (max nodes at any level)
   */
  getTreeWidth(node) {
    const levelCounts = {};
    this.countNodesAtLevel(node, 0, levelCounts);
    return Math.max(...Object.values(levelCounts));
  }

  /**
   * Count nodes at each level
   */
  countNodesAtLevel(node, level, counts) {
    counts[level] = (counts[level] || 0) + 1;
    
    if (node.children) {
      node.children.forEach(child => 
        this.countNodesAtLevel(child, level + 1, counts)
      );
    }
  }

  /**
   * Create SVG from tree structure
   */
  createSVG(tree, dimensions) {
    const { width, height } = dimensions;
    
    let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <style>
      .tree-node {
        fill: ${config.theme.primary};
        stroke: ${config.theme.border};
        stroke-width: 2;
        rx: 5;
      }
      .tree-text {
        fill: white;
        font-family: ${config.imageSettings.svg.fontFamily};
        font-size: ${config.imageSettings.svg.fontSize}px;
        text-anchor: middle;
        dominant-baseline: middle;
      }
      .tree-line {
        stroke: ${config.theme.border};
        stroke-width: 2;
        fill: none;
      }
      .tree-node:hover {
        fill: ${config.theme.secondary};
      }
    </style>
  </defs>
  <rect width="${width}" height="${height}" fill="${config.imageSettings.svg.backgroundColor || 'white'}"/>
  <g id="tree-content">
`;

    // Position nodes and create connections
    const positions = this.calculatePositions(tree, width);
    svg += this.renderTree(tree, positions, null);

    svg += `  </g>
</svg>`;

    return svg;
  }

  /**
   * Calculate positions for all nodes
   */
  calculatePositions(tree, totalWidth) {
    const positions = new Map();
    const startX = totalWidth / 2;
    const startY = this.padding + this.nodeHeight / 2;

    this.positionNode(tree, startX, startY, totalWidth, positions);
    return positions;
  }

  /**
   * Position a node and its children
   */
  positionNode(node, x, y, availableWidth, positions) {
    positions.set(node, { x, y });

    if (!node.children || node.children.length === 0) {
      return;
    }

    const childY = y + this.nodeHeight + this.verticalSpacing;
    const childWidth = availableWidth / node.children.length;

    node.children.forEach((child, index) => {
      const childX = x - availableWidth / 2 + childWidth * (index + 0.5);
      this.positionNode(child, childX, childY, childWidth * 0.8, positions);
    });
  }

  /**
   * Render tree nodes and connections
   */
  renderTree(node, positions, parent) {
    let svg = '';
    const pos = positions.get(node);

    // Draw connection to parent
    if (parent) {
      const parentPos = positions.get(parent);
      svg += `    <line class="tree-line" x1="${parentPos.x}" y1="${parentPos.y + this.nodeHeight / 2}" x2="${pos.x}" y2="${pos.y - this.nodeHeight / 2}"/>\n`;
    }

    // Draw node
    const textWidth = Math.min(this.nodeWidth, node.name.length * 8);
    svg += `    <rect class="tree-node" x="${pos.x - textWidth / 2}" y="${pos.y - this.nodeHeight / 2}" width="${textWidth}" height="${this.nodeHeight}"/>\n`;
    
    // Draw text (wrap if needed)
    const wrappedText = this.wrapText(node.name, textWidth - 10);
    wrappedText.forEach((line, i) => {
      const lineY = pos.y + (i - (wrappedText.length - 1) / 2) * 16;
      svg += `    <text class="tree-text" x="${pos.x}" y="${lineY}">${this.escapeXml(line)}</text>\n`;
    });

    // Render children
    if (node.children) {
      node.children.forEach(child => {
        svg += this.renderTree(child, positions, node);
      });
    }

    return svg;
  }

  /**
   * Wrap text to fit width
   */
  wrapText(text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      if (testLine.length * 8 <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }

    if (currentLine) lines.push(currentLine);
    return lines.length > 0 ? lines : [text];
  }

  /**
   * Escape XML special characters
   */
  escapeXml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }
}

export default TreeGenerator;
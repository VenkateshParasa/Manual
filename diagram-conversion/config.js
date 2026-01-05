export const config = {
  // Source directories
  sourceDir: '../', // Root directory containing markdown files
  weekFiles: [
    'Week1_Day1_Manual_Testing_Fundamentals_SDLC.md',
    'Week1_Day2_Testing_Levels_Types.md',
    'Week1_Day3_Test_Design_Techniques_Part1.md',
    'Week1_Day4_Test_Design_Techniques_Part2.md',
    'Week1_Day5_Test_Documentation_Artifacts.md',
    'Week1_Day6_Defect_Management_Bug_Life_Cycle.md',
    'Week1_Day7_Review_Practical_Assessment.md',
    'Week2_Day8_Web_Application_Testing_Part1.md',
    'Week2_Day9_Web_Application_Testing_Part2.md',
    'Week2_Day10_Mobile_Application_Testing.md',
    'Week2_Day11_Specialized_Testing_Types.md',
    'Week2_Day12_Regression_Smoke_Testing_Strategies.md',
    'Week2_Day13_Exploratory_Testing_SBTM.md',
    'Week2_Day14_Review_Assessment.md',
    'Week3_Day15_Agile_Testing_Scrum.md',
    'Week3_Day16_Test_Management_Metrics.md',
    'Week3_Day17_Risk_Based_Testing.md',
    'Week3_Day18_Test_Tools.md',
    'Week3_Day19_Communication_Soft_Skills.md',
    'Week3_Day20A_Quality_Standards_ISO.md',
    'Week3_Day20B_ISTQB_Test_Maturity.md',
    'Week3_Day20C_Agile_DevOps_Testing.md',
    'Week3_Day20D_Industry_Specific_Testing.md',
    'Week3_Day21_Final_Review_Certification.md'
  ],

  // Output directories
  outputDir: './output',
  imagesDir: './output/images/diagrams',
  inventoryFile: './output/diagram_inventory.json',
  inventoryMdFile: './output/DIAGRAM_INVENTORY.md',

  // Diagram detection patterns
  patterns: {
    // ASCII tree diagrams
    tree: /[├└│─┌┐┘┴┬┤├]/,
    treeBlock: /```[\s\S]*?[├└│─┌┐┘┴┬┤├][\s\S]*?```/g,
    
    // Flowcharts
    flowchart: /[→←↑↓⇒⇐⇑⇓]/,
    flowchartBlock: /```[\s\S]*?[→←↑↓⇒⇐⇑⇓][\s\S]*?```/g,
    
    // Tables with box drawing
    table: /[┌─┬─┐├─┼─┤└─┴─┘]/,
    tableBlock: /```[\s\S]*?[┌─┬─┐├─┼─┤└─┴─┘][\s\S]*?```/g,
    
    // Mermaid diagrams
    mermaid: /```mermaid[\s\S]*?```/g,
    
    // Generic code blocks that might contain diagrams
    codeBlock: /```[\s\S]*?```/g
  },

  // Diagram types
  diagramTypes: {
    TREE: 'tree',
    FLOWCHART: 'flowchart',
    TABLE: 'table',
    MERMAID: 'mermaid',
    CUSTOM: 'custom',
    UNKNOWN: 'unknown'
  },

  // Complexity levels
  complexity: {
    SIMPLE: 'simple',
    MEDIUM: 'medium',
    COMPLEX: 'complex'
  },

  // Priority levels
  priority: {
    HIGH: 'high',
    MEDIUM: 'medium',
    LOW: 'low'
  },

  // Image generation settings
  imageSettings: {
    svg: {
      width: 1200,
      height: 800,
      backgroundColor: 'transparent',
      fontSize: 14,
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.5,
      padding: 20
    },
    png: {
      width: 1200,
      quality: 90,
      backgroundColor: '#ffffff'
    },
    webp: {
      quality: 85
    }
  },

  // Naming convention
  naming: {
    format: '{week}_{day}_{type}_{description}.{ext}',
    weekPrefix: 'w',
    dayPrefix: 'd',
    separator: '_',
    descriptionSeparator: '-'
  },

  // Theme colors (matching app theme)
  theme: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#10b981',
    text: '#1f2937',
    background: '#ffffff',
    border: '#e5e7eb',
    highlight: '#fef3c7'
  }
};

export default config;
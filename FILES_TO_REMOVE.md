# Files to Remove - Image Conversion Cleanup

Since we've decided to keep the original ASCII diagrams instead of using SVG images, the following files and directories are no longer needed and can be safely removed.

## 📁 Directories to Remove

### 1. **diagram-conversion/** (entire directory)
**Location:** `/diagram-conversion/`  
**Size:** ~850 KB + scripts  
**Reason:** Contains all image generation infrastructure that's no longer needed

**Contents:**
- `diagram-conversion/generators/` - Image generation scripts
- `diagram-conversion/output/` - Generated SVG files and metadata
- `diagram-conversion/scripts/` - Migration and processing scripts
- `diagram-conversion/templates/` - SVG/HTML templates
- `diagram-conversion/utils/` - Utility functions
- `diagram-conversion/config.js` - Configuration file
- `diagram-conversion/package.json` - Dependencies

**Command to remove:**
```bash
rm -rf diagram-conversion/
```

---

## 📄 Documentation Files to Remove

### 2. **DIAGRAM_CONVERSION_COMPLETE.md**
**Location:** `/DIAGRAM_CONVERSION_COMPLETE.md`  
**Reason:** Progress report for completed (but unused) image conversion

### 3. **DIAGRAM_CONVERSION_PROGRESS.md**
**Location:** `/DIAGRAM_CONVERSION_PROGRESS.md`  
**Reason:** Progress tracking for image conversion project

### 4. **DIAGRAM_CONVERSION_PROJECT_COMPLETE.md**
**Location:** `/DIAGRAM_CONVERSION_PROJECT_COMPLETE.md`  
**Reason:** Final completion report for image conversion

### 5. **DIAGRAM_IMAGE_USAGE_GUIDE.md**
**Location:** `/DIAGRAM_IMAGE_USAGE_GUIDE.md`  
**Reason:** Usage guide for DiagramImage component (not being used)

### 6. **DIAGRAM_IMPLEMENTATION_GUIDE.md**
**Location:** `/DIAGRAM_IMPLEMENTATION_GUIDE.md`  
**Reason:** Implementation guide for image conversion system

### 7. **DIAGRAM_QUICK_START.md**
**Location:** `/DIAGRAM_QUICK_START.md`  
**Reason:** Quick start guide for image conversion

### 8. **DIAGRAM_TO_IMAGE_COMPARISON_ANALYSIS.md**
**Location:** `/DIAGRAM_TO_IMAGE_COMPARISON_ANALYSIS.md`  
**Reason:** Analysis comparing ASCII vs SVG diagrams

### 9. **DIAGRAM_TO_IMAGE_CONVERSION_PLAN.md**
**Location:** `/DIAGRAM_TO_IMAGE_CONVERSION_PLAN.md`  
**Reason:** Original conversion plan document

### 10. **IMAGE_CONVERSION_COMPLETION_REPORT.md**
**Location:** `/IMAGE_CONVERSION_COMPLETION_REPORT.md`  
**Reason:** Completion report (created but not finalized)

**Command to remove all documentation:**
```bash
rm DIAGRAM_CONVERSION_COMPLETE.md \
   DIAGRAM_CONVERSION_PROGRESS.md \
   DIAGRAM_CONVERSION_PROJECT_COMPLETE.md \
   DIAGRAM_IMAGE_USAGE_GUIDE.md \
   DIAGRAM_IMPLEMENTATION_GUIDE.md \
   DIAGRAM_QUICK_START.md \
   DIAGRAM_TO_IMAGE_COMPARISON_ANALYSIS.md \
   DIAGRAM_TO_IMAGE_CONVERSION_PLAN.md \
   IMAGE_CONVERSION_COMPLETION_REPORT.md
```

---

## 🔧 Component Files to Remove

### 11. **DiagramImage.jsx**
**Location:** `/manual-testing-app/src/components/DiagramImage.jsx`  
**Size:** ~272 lines  
**Reason:** React component for displaying SVG diagrams (not being used)

### 12. **DiagramImage.css**
**Location:** `/manual-testing-app/src/components/DiagramImage.css`  
**Size:** ~349 lines  
**Reason:** Styles for DiagramImage component (not being used)

**Command to remove:**
```bash
rm manual-testing-app/src/components/DiagramImage.jsx \
   manual-testing-app/src/components/DiagramImage.css
```

---

## 🔍 Code References to Clean Up

### 13. **DayPage.jsx - Remove DiagramImage import**
**Location:** `/manual-testing-app/src/pages/DayPage.jsx`  
**Action:** Remove the following lines:

**Line 13:**
```javascript
import DiagramImage from '../components/DiagramImage';
```

**Lines 184-197 (in ReactMarkdown components):**
```javascript
// Custom rendering for images (diagrams)
img({ node, src, alt, title, ...props }) {
  // Check if this is a diagram image
  if (src && src.includes('/images/diagrams/')) {
    return (
      <DiagramImage
        src={src}
        alt={alt || 'Diagram'}
        caption={title}
        zoomable={true}
        {...props}
      />
    );
  }
  // Regular images
  return (
```

**Replace with:**
```javascript
// Custom rendering for images
img({ node, src, alt, title, ...props }) {
  return (
```

---

## 📊 Summary

### Total Files to Remove: 13 items
- **1 directory** (diagram-conversion/)
- **9 documentation files**
- **2 component files** (DiagramImage.jsx, DiagramImage.css)
- **1 code cleanup** (DayPage.jsx import and custom renderer)

### Estimated Space Saved: ~1.5 MB
- SVG images: ~850 KB (already deleted)
- Scripts and generators: ~300 KB
- Documentation: ~200 KB
- Components: ~50 KB

### Files to KEEP:
- ✅ All markdown content files (Week*.md)
- ✅ All assessment files
- ✅ Core application components (Header, Sidebar, etc.)
- ✅ All other documentation (GitHub_Setup, Manual_Testing_Plan, etc.)

---

## 🚀 Quick Cleanup Script

To remove everything at once, run:

```bash
# Remove diagram conversion directory
rm -rf diagram-conversion/

# Remove documentation files
rm DIAGRAM_CONVERSION_COMPLETE.md \
   DIAGRAM_CONVERSION_PROGRESS.md \
   DIAGRAM_CONVERSION_PROJECT_COMPLETE.md \
   DIAGRAM_IMAGE_USAGE_GUIDE.md \
   DIAGRAM_IMPLEMENTATION_GUIDE.md \
   DIAGRAM_QUICK_START.md \
   DIAGRAM_TO_IMAGE_COMPARISON_ANALYSIS.md \
   DIAGRAM_TO_IMAGE_CONVERSION_PLAN.md \
   IMAGE_CONVERSION_COMPLETION_REPORT.md

# Remove component files
rm manual-testing-app/src/components/DiagramImage.jsx \
   manual-testing-app/src/components/DiagramImage.css

# Remove this cleanup list
rm FILES_TO_REMOVE.md
```

Then manually edit `manual-testing-app/src/pages/DayPage.jsx` to remove the DiagramImage import and custom image renderer.

---

**Note:** After cleanup, the application will be lighter, cleaner, and will continue to work perfectly with the original ASCII diagrams!
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DiagramImage.css';

/**
 * DiagramImage Component
 * Displays diagram images with zoom, lazy loading, and accessibility features
 */
const DiagramImage = ({ 
  src, 
  alt, 
  caption, 
  zoomable = true,
  maxWidth = '100%',
  loading = 'lazy'
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    if (zoomable && !imageError) {
      setIsZoomed(true);
    }
  };

  const handleError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  if (imageError) {
    return (
      <div className="diagram-error" role="alert">
        <svg 
          className="diagram-error-icon" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
          />
        </svg>
        <p className="diagram-error-text">
          Failed to load diagram: {alt}
        </p>
        <p className="diagram-error-hint">
          The image may be missing or the path may be incorrect.
        </p>
      </div>
    );
  }

  return (
    <div className="diagram-container">
      {isLoading && (
        <div className="diagram-loading" aria-label="Loading diagram">
          <div className="diagram-spinner"></div>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        onClick={handleClick}
        onError={handleError}
        onLoad={handleLoad}
        onKeyPress={handleKeyPress}
        loading={loading}
        style={{
          maxWidth,
          cursor: zoomable ? 'zoom-in' : 'default',
          display: isLoading ? 'none' : 'block'
        }}
        className="diagram-image"
        tabIndex={zoomable ? 0 : -1}
        role="img"
        aria-label={alt}
      />
      
      {caption && !isLoading && (
        <div className="diagram-caption">
          {caption}
        </div>
      )}
      
      {isZoomed && (
        <DiagramLightbox
          src={src}
          alt={alt}
          onClose={() => setIsZoomed(false)}
        />
      )}
    </div>
  );
};

/**
 * DiagramLightbox Component
 * Full-screen view with zoom controls
 */
const DiagramLightbox = ({ src, alt, onClose }) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === '+' || e.key === '=') {
      handleZoomIn();
    } else if (e.key === '-') {
      handleZoomOut();
    } else if (e.key === '0') {
      handleReset();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className="diagram-lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Diagram viewer"
    >
      <div className="diagram-lightbox-controls">
        <button
          onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
          className="diagram-control-btn"
          aria-label="Zoom out"
          title="Zoom out (-)"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
          </svg>
        </button>
        
        <span className="diagram-zoom-level">{Math.round(zoom * 100)}%</span>
        
        <button
          onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
          className="diagram-control-btn"
          aria-label="Zoom in"
          title="Zoom in (+)"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
        </button>
        
        <button
          onClick={(e) => { e.stopPropagation(); handleReset(); }}
          className="diagram-control-btn"
          aria-label="Reset zoom"
          title="Reset (0)"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
        
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="diagram-control-btn diagram-close-btn"
          aria-label="Close"
          title="Close (Esc)"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div 
        className="diagram-lightbox-content"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={src}
          alt={alt}
          style={{
            transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
            cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
          }}
          className="diagram-lightbox-image"
          draggable={false}
        />
      </div>
      
      <div className="diagram-lightbox-hint">
        Click outside or press ESC to close • Use +/- to zoom • Drag to pan
      </div>
    </div>
  );
};

DiagramImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  zoomable: PropTypes.bool,
  maxWidth: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager'])
};

DiagramLightbox.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default DiagramImage;
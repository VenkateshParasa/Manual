import { useState, useEffect } from 'react';
import { List } from 'lucide-react';

const TableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Extract headings from the content
    const extractHeadings = () => {
      const article = document.querySelector('article');
      if (!article) return [];

      const headingElements = article.querySelectorAll('h1, h2, h3, h4');
      const headingList = Array.from(headingElements).map((heading) => ({
        id: heading.id,
        text: heading.textContent,
        level: parseInt(heading.tagName.charAt(1)),
        element: heading
      }));

      return headingList;
    };

    // Set headings after a short delay to ensure content is rendered
    const timer = setTimeout(() => {
      const extracted = extractHeadings();
      setHeadings(extracted);
    }, 100);

    return () => clearTimeout(timer);
  }, [content]);

  useEffect(() => {
    // Intersection Observer to track active heading
    const observerOptions = {
      rootMargin: '-80px 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    headings.forEach((heading) => {
      if (heading.element) {
        observer.observe(heading.element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        if (heading.element) {
          observer.unobserve(heading.element);
        }
      });
    };
  }, [headings]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav 
      className="hidden xl:block sticky top-20 w-64 h-fit max-h-[calc(100vh-6rem)] overflow-y-auto"
      aria-label="Table of contents"
    >
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 w-full text-left font-semibold text-gray-900 mb-3"
          aria-expanded={isOpen}
        >
          <List className="w-4 h-4" />
          <span>On This Page</span>
        </button>

        {isOpen && (
          <ul className="space-y-2 text-sm">
            {headings.map((heading) => {
              const isActive = activeId === heading.id;
              const paddingLeft = `${(heading.level - 1) * 0.75}rem`;

              return (
                <li key={heading.id} style={{ paddingLeft }}>
                  <button
                    onClick={() => scrollToHeading(heading.id)}
                    className={`
                      w-full text-left py-1 px-2 rounded transition-colors
                      hover:bg-gray-100 hover:text-primary-700
                      ${isActive 
                        ? 'text-primary-700 font-medium bg-primary-50' 
                        : 'text-gray-600'
                      }
                    `}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {heading.text}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mt-4 w-full btn-secondary text-sm"
        aria-label="Scroll to top"
      >
        ↑ Back to Top
      </button>
    </nav>
  );
};

export default TableOfContents;
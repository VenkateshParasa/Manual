import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.querySelector('#root')).toBeTruthy();
  });

  it('renders header component', () => {
    render(<App />);
    const header = document.querySelector('header');
    expect(header).toBeTruthy();
  });
});

describe('Progress Tracker', () => {
  it('initializes with zero progress', () => {
    localStorage.clear();
    const { getCompletedDays } = require('./utils/progressTracker');
    const completed = getCompletedDays();
    expect(completed).toEqual([]);
  });

  it('marks day as completed', () => {
    localStorage.clear();
    const { markDayCompleted, isDayCompleted } = require('./utils/progressTracker');
    markDayCompleted('day1');
    expect(isDayCompleted('day1')).toBe(true);
  });

  it('toggles day completion', () => {
    localStorage.clear();
    const { toggleDayCompletion, isDayCompleted } = require('./utils/progressTracker');
    toggleDayCompletion('day1');
    expect(isDayCompleted('day1')).toBe(true);
    toggleDayCompletion('day1');
    expect(isDayCompleted('day1')).toBe(false);
  });
});

describe('Content Structure', () => {
  it('has correct number of weeks', () => {
    const { courseStructure } = require('./utils/contentStructure');
    expect(courseStructure.weeks).toHaveLength(3);
  });

  it('has correct number of days per week', () => {
    const { courseStructure } = require('./utils/contentStructure');
    expect(courseStructure.weeks[0].days).toHaveLength(7);
    expect(courseStructure.weeks[1].days).toHaveLength(7);
    expect(courseStructure.weeks[2].days).toHaveLength(7);
  });

  it('gets all days correctly', () => {
    const { getAllDays } = require('./utils/contentStructure');
    const allDays = getAllDays();
    expect(allDays).toHaveLength(21);
  });

  it('finds day by ID', () => {
    const { getDayById } = require('./utils/contentStructure');
    const day = getDayById('day1');
    expect(day).toBeTruthy();
    expect(day.id).toBe('day1');
  });
});
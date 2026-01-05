// Content structure for the Manual Testing course
export const courseStructure = {
  weeks: [
    {
      id: 'week1',
      title: 'Week 1: Foundations & Core Concepts',
      days: [
        {
          id: 'day1',
          title: 'Day 1: Manual Testing Fundamentals & SDLC',
          file: 'Week1_Day1_Manual_Testing_Fundamentals_SDLC.md',
          completed: false
        },
        {
          id: 'day2',
          title: 'Day 2: Testing Levels & Types',
          file: 'Week1_Day2_Testing_Levels_Types.md',
          completed: false
        },
        {
          id: 'day3',
          title: 'Day 3: Test Design Techniques - Part 1',
          file: 'Week1_Day3_Test_Design_Techniques_Part1.md',
          completed: false
        },
        {
          id: 'day4',
          title: 'Day 4: Test Design Techniques - Part 2',
          file: 'Week1_Day4_Test_Design_Techniques_Part2.md',
          completed: false
        },
        {
          id: 'day5',
          title: 'Day 5: Test Documentation & Artifacts',
          file: 'Week1_Day5_Test_Documentation_Artifacts.md',
          completed: false
        },
        {
          id: 'day6',
          title: 'Day 6: Defect Management & Bug Life Cycle',
          file: 'Week1_Day6_Defect_Management_Bug_Life_Cycle.md',
          completed: false
        },
        {
          id: 'day7',
          title: 'Day 7: Review & Practical Assessment',
          file: 'Week1_Day7_Review_Practical_Assessment.md',
          completed: false
        }
      ]
    },
    {
      id: 'week2',
      title: 'Week 2: Advanced Testing Techniques',
      days: [
        {
          id: 'day8',
          title: 'Day 8: Web Application Testing - Part 1',
          file: 'Week2_Day8_Web_Application_Testing_Part1.md',
          completed: false
        },
        {
          id: 'day9',
          title: 'Day 9: Web Application Testing - Part 2',
          file: 'Week2_Day9_Web_Application_Testing_Part2.md',
          completed: false
        },
        {
          id: 'day10',
          title: 'Day 10: Mobile Application Testing',
          file: 'Week2_Day10_Mobile_Application_Testing.md',
          completed: false
        },
        {
          id: 'day11',
          title: 'Day 11: Specialized Testing Types',
          file: 'Week2_Day11_Specialized_Testing_Types.md',
          completed: false
        },
        {
          id: 'day12',
          title: 'Day 12: Regression & Smoke Testing',
          file: 'Week2_Day12_Regression_Smoke_Testing_Strategies.md',
          completed: false
        },
        {
          id: 'day13',
          title: 'Day 13: Exploratory Testing',
          file: 'Week2_Day13_Exploratory_Testing_SBTM.md',
          completed: false
        },
        {
          id: 'day14',
          title: 'Day 14: Week 2 Review & Assessment',
          file: 'Week2_Day14_Review_Assessment.md',
          completed: false
        }
      ]
    },
    {
      id: 'week3',
      title: 'Week 3: Professional Skills & Industry Practices',
      days: [
        {
          id: 'day15',
          title: 'Day 15: Agile Testing & Scrum',
          file: 'Week3_Day15_Agile_Testing_Scrum.md',
          completed: false
        },
        {
          id: 'day16',
          title: 'Day 16: Test Management & Metrics',
          file: 'Week3_Day16_Test_Management_Metrics.md',
          completed: false
        },
        {
          id: 'day17',
          title: 'Day 17: Risk-Based Testing',
          file: 'Week3_Day17_Risk_Based_Testing.md',
          completed: false
        },
        {
          id: 'day18',
          title: 'Day 18: Test Tools & Systems',
          file: 'Week3_Day18_Test_Tools.md',
          completed: false
        },
        {
          id: 'day19',
          title: 'Day 19: Communication & Soft Skills',
          file: 'Week3_Day19_Communication_Soft_Skills.md',
          completed: false
        },
        {
          id: 'day20',
          title: 'Day 20: Industry Best Practices',
          file: 'Week3_Day20_Industry_Best_Practices.md',
          completed: false
        },
        {
          id: 'day21',
          title: 'Day 21: Final Review & Certification Prep',
          file: 'Week3_Day21_Final_Review_Certification.md',
          completed: false
        }
      ]
    }
  ],
  supplementary: [
    {
      id: 'overview',
      title: 'Learning Plan Overview',
      file: 'Manual_Testing_3Week_Learning_Plan.md'
    },
    {
      id: 'week1-supplementary',
      title: 'Week 1 Supplementary Materials',
      file: 'Week1_Supplementary_Materials.md'
    }
  ]
};

// Helper function to get all days flattened
export const getAllDays = () => {
  return courseStructure.weeks.flatMap(week => 
    week.days.map(day => ({
      ...day,
      weekId: week.id,
      weekTitle: week.title
    }))
  );
};

// Helper function to find a day by ID
export const getDayById = (dayId) => {
  for (const week of courseStructure.weeks) {
    const day = week.days.find(d => d.id === dayId);
    if (day) {
      return {
        ...day,
        weekId: week.id,
        weekTitle: week.title
      };
    }
  }
  return null;
};

// Helper function to get next/previous day
export const getAdjacentDays = (currentDayId) => {
  const allDays = getAllDays();
  const currentIndex = allDays.findIndex(d => d.id === currentDayId);
  
  return {
    previous: currentIndex > 0 ? allDays[currentIndex - 1] : null,
    next: currentIndex < allDays.length - 1 ? allDays[currentIndex + 1] : null
  };
};

// Helper function to calculate progress
export const calculateProgress = (completedDays) => {
  const totalDays = getAllDays().length;
  const completed = completedDays.length;
  return {
    completed,
    total: totalDays,
    percentage: Math.round((completed / totalDays) * 100)
  };
};
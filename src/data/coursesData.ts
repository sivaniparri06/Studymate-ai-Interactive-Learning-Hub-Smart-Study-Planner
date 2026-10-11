import { Course, CourseCategory } from '../types';
import { softwareDevCourses } from './courses/softwareDev';
import { dataAICourses } from './courses/dataAI';
import { uiuxDesignCourses } from './courses/uiuxDesign';
import { digitalMarketingCourses } from './courses/digitalMarketing';
import { cloudTechCourses } from './courses/cloudTech';
import { careerSkillsCourses } from './courses/careerSkills';

export const ALL_COURSES: Course[] = [
  ...softwareDevCourses,
  ...dataAICourses,
  ...uiuxDesignCourses,
  ...digitalMarketingCourses,
  ...cloudTechCourses,
  ...careerSkillsCourses,
];

export const COURSE_CATEGORIES: CourseCategory[] = [
  'Software Development',
  'Data and Artificial Intelligence',
  'UI/UX and Design',
  'Digital Marketing',
  'Cloud and Emerging Technologies',
  'Career and Professional Skills',
];

export const getCourseById = (id: string): Course | undefined => {
  return ALL_COURSES.find(c => c.id === id);
};

export const getCoursesByCategory = (category: CourseCategory): Course[] => {
  return ALL_COURSES.filter(c => c.category === category);
};

export type CourseView = {
  id: string;
  name: string;
  slug: string;
  summary: string;
  description: string;
  audience: string;
  duration: string;
  lessons: number;
  image: string;
  categories: string[];
  outcomes: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  feedback: string;
};

const fallbackCourses: CourseView[] = [
  {
    id: 'english-confidence-builder',
    name: 'English Confidence Builder',
    slug: 'english-confidence-builder',
    summary: 'Live English classes with phonics, reading practice, and conversation exercises.',
    description:
      'A structured program focused on reading fluency, vocabulary growth, and confident speaking through storytelling and discussion.',
    audience: 'Ages 5-12',
    duration: '8 weeks',
    lessons: 16,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80',
    categories: ['English'],
    outcomes: ['Stronger reading fluency', 'Vocabulary expansion', 'Confident classroom speaking']
  },
  {
    id: 'math-mastery-program',
    name: 'Math Mastery Program',
    slug: 'math-mastery-program',
    summary: 'Hands-on math sessions for confident problem solving and number sense.',
    description:
      'Children build foundations in arithmetic, reasoning, and speed math with interactive explanations and guided worksheet drills.',
    audience: 'Ages 6-12',
    duration: '10 weeks',
    lessons: 20,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    categories: ['Maths'],
    outcomes: ['Improved number sense', 'Faster mental calculations', 'Confidence in word problems']
  },
  {
    id: 'handwriting-practice-lab',
    name: 'Handwriting Practice Lab',
    slug: 'handwriting-practice-lab',
    summary: 'Structured writing practice with beautiful worksheets to build neat handwriting.',
    description:
      'A motor-skill-centered curriculum for better pencil control, letter formation, and writing rhythm through daily practice plans.',
    audience: 'Ages 5-10',
    duration: '6 weeks',
    lessons: 12,
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1400&q=80',
    categories: ['Handwriting'],
    outcomes: ['Cleaner letter formation', 'Improved writing speed', 'Better notebook presentation']
  },
  {
    id: 'communication-confidence',
    name: 'Communication Confidence',
    slug: 'communication-confidence',
    summary: 'Interactive speaking drills and story-building to improve clarity and confidence.',
    description:
      'Kids practice everyday speaking, expression, and stage confidence with role-play, presentations, and personalized feedback.',
    audience: 'Ages 6-12',
    duration: '8 weeks',
    lessons: 18,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80',
    categories: ['Communication'],
    outcomes: ['Clear speech delivery', 'Reduced stage hesitation', 'Confident self-expression']
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Ayesha Khan',
    role: 'Parent of 7-year-old',
    feedback: 'The trial class helped my daughter open up and enjoy learning English. The teacher was calm and engaging.'
  },
  {
    name: 'Priya Sharma',
    role: 'Parent of 9-year-old',
    feedback: 'The progress reports are simple but useful. We can clearly see where our son is improving each week.'
  },
  {
    name: 'Rahul Mehta',
    role: 'Parent of 6-year-old',
    feedback: 'Excellent support team and clear guidance. The free trial made it easy to choose the right program.'
  }
];

export async function getCourses() {
  return fallbackCourses;
}

export async function getCourseBySlug(slug: string) {
  return fallbackCourses.find((course) => course.slug === slug) ?? null;
}

export async function getAdminMetrics() {
  return { users: 120, courses: 4, bookings: 52 };
}

export async function getDashboardData() {
  return {
    bookings: [
      {
        id: 'booking-1',
        childName: 'Aarav',
        status: 'PENDING',
        course: { name: 'English Confidence Builder' }
      },
      {
        id: 'booking-2',
        childName: 'Maya',
        status: 'CONFIRMED',
        course: { name: 'Math Mastery Program' }
      }
    ],
    progress: [
      {
        id: 'progress-1',
        course: { name: 'English Confidence Builder' },
        completion: 72
      },
      {
        id: 'progress-2',
        course: { name: 'Math Mastery Program' },
        completion: 58
      }
    ],
    worksheets: [
      { id: 'w1', title: 'Reading Worksheet - Level 1', url: '#' },
      { id: 'w2', title: 'Math Practice Sheet - Week 2', url: '#' }
    ],
    recordings: [
      { id: 'r1', title: 'English Live Class Recording', url: '#' },
      { id: 'r2', title: 'Math Foundation Class Recording', url: '#' }
    ]
  };
}

export async function getAdminTables() {
  return {
    users: [
      {
        id: 'u1',
        name: 'Admin User',
        email: 'admin@nurtureminds.com',
        role: 'ADMIN'
      },
      {
        id: 'u2',
        name: 'Parent User',
        email: 'parent@example.com',
        role: 'PARENT'
      }
    ],
    courses: fallbackCourses,
    bookings: [
      {
        id: 'b1',
        parentName: 'Priya Sharma',
        childName: 'Vivaan',
        status: 'PENDING',
        course: { name: 'Communication Confidence' }
      }
    ]
  };
}

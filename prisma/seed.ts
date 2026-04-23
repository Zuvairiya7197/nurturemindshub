import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const parent = await prisma.user.upsert({
    where: { email: 'parent@example.com' },
    update: { name: 'Priya Sharma', role: 'PARENT' },
    create: {
      email: 'parent@example.com',
      name: 'Priya Sharma',
      role: 'PARENT'
    }
  });

  await prisma.user.upsert({
    where: { email: 'admin@nurtureminds.com' },
    update: { name: 'Admin User', role: 'ADMIN' },
    create: {
      email: 'admin@nurtureminds.com',
      name: 'Admin User',
      role: 'ADMIN'
    }
  });

  const coursePayload = [
    {
      name: 'English Confidence Builder',
      slug: 'english-confidence-builder',
      summary: 'Live English classes with phonics, reading practice, and conversation exercises.',
      audience: 'Ages 5-12',
      duration: '8 weeks',
      lessons: 16,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80',
      categories: ['English']
    },
    {
      name: 'Math Mastery Program',
      slug: 'math-mastery-program',
      summary: 'Hands-on math sessions for confident problem solving and number sense.',
      audience: 'Ages 6-12',
      duration: '10 weeks',
      lessons: 20,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
      categories: ['Maths']
    },
    {
      name: 'Handwriting Practice Lab',
      slug: 'handwriting-practice-lab',
      summary: 'Structured writing practice with beautiful worksheets to build neat handwriting.',
      audience: 'Ages 5-10',
      duration: '6 weeks',
      lessons: 12,
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1400&q=80',
      categories: ['Handwriting']
    },
    {
      name: 'Communication Confidence',
      slug: 'communication-confidence',
      summary: 'Interactive speaking drills and story-building to improve clarity and confidence.',
      audience: 'Ages 6-12',
      duration: '8 weeks',
      lessons: 18,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80',
      categories: ['Communication']
    }
  ];

  let firstCourseId = '';

  for (const payload of coursePayload) {
    const course = await prisma.course.upsert({
      where: { slug: payload.slug },
      update: payload,
      create: payload
    });

    if (!firstCourseId) {
      firstCourseId = course.id;
    }
  }

  if (firstCourseId) {
    await prisma.booking.upsert({
      where: { id: 'seed-booking-1' },
      update: {
        parentName: 'Priya Sharma',
        childName: 'Aarav Sharma',
        age: 8,
        phone: '+91 99999 99999',
        email: parent.email,
        courseId: firstCourseId,
        parentId: parent.id,
        scheduledFor: new Date(),
        status: 'CONFIRMED'
      },
      create: {
        id: 'seed-booking-1',
        parentName: 'Priya Sharma',
        childName: 'Aarav Sharma',
        age: 8,
        phone: '+91 99999 99999',
        email: parent.email,
        courseId: firstCourseId,
        parentId: parent.id,
        scheduledFor: new Date(),
        status: 'CONFIRMED'
      }
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

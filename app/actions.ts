// 'use server';

// import { Role } from '@prisma/client';
// import { revalidatePath } from 'next/cache';
// import { prisma } from '@/lib/prisma';
// import { getAuthSession } from '@/lib/auth';

// export type ActionResult = {
//   success: boolean;
//   message: string;
// };

// function readField(formData: FormData, key: string) {
//   return String(formData.get(key) ?? '').trim();
// }

// export async function bookTrialAction(_: ActionResult, formData: FormData): Promise<ActionResult> {
//   const parentName = readField(formData, 'parentName');
//   const childName = readField(formData, 'childName');
//   const age = Number(readField(formData, 'age'));
//   const phone = readField(formData, 'phone');
//   const email = readField(formData, 'email').toLowerCase();
//   const courseId = readField(formData, 'courseId');

//   if (!parentName || !childName || !phone || !email || !courseId || !Number.isFinite(age)) {
//     return { success: false, message: 'Please fill all required booking fields.' };
//   }

//   if (age < 4 || age > 16) {
//     return { success: false, message: 'Please enter a valid age between 4 and 16.' };
//   }

//   try {
//     const session = await getAuthSession();
//     const existingParent = session?.user?.email
//       ? await prisma.user.findUnique({ where: { email: session.user.email } })
//       : await prisma.user.findUnique({ where: { email } });
//     const parent =
//       existingParent ??
//       (await prisma.user.create({
//         data: {
//           name: parentName,
//           email,
//           role: Role.PARENT
//         }
//       }));

//     await prisma.booking.create({
//       data: {
//         parentName,
//         childName,
//         age,
//         phone,
//         email,
//         courseId,
//         parentId: parent.id,
//         scheduledFor: new Date(),
//         status: 'PENDING'
//       }
//     });

//     revalidatePath('/dashboard');
//     revalidatePath('/admin');

//     return { success: true, message: 'Trial request submitted. We will contact you shortly.' };
//   } catch {
//     return { success: false, message: 'Unable to submit booking right now. Please try again.' };
//   }
// }

// export async function teacherOnboardingAction(_: ActionResult, formData: FormData): Promise<ActionResult> {
//   const name = readField(formData, 'name');
//   const email = readField(formData, 'email').toLowerCase();
//   const experience = readField(formData, 'experience');
//   const subjectsRaw = readField(formData, 'subjects');
//   const availability = readField(formData, 'availability');

//   if (!name || !email || !experience || !subjectsRaw || !availability) {
//     return { success: false, message: 'Please complete every onboarding field.' };
//   }

//   const subjects = subjectsRaw.split(',').map((item) => item.trim()).filter(Boolean);
//   const normalizedSubjects = subjects.length > 0 ? subjects.join(', ') : subjectsRaw;
//   void normalizedSubjects;

//   return { success: true, message: 'Application submitted. Our academic team will reach out soon.' };
// }

// export async function signupAction(_: ActionResult, formData: FormData): Promise<ActionResult> {
//   const name = readField(formData, 'name');
//   const email = readField(formData, 'email').toLowerCase();
//   const password = readField(formData, 'password');

//   if (!name || !email || !password) {
//     return { success: false, message: 'Please provide name, email, and password.' };
//   }

//   if (password.length < 8) {
//     return { success: false, message: 'Password must be at least 8 characters long.' };
//   }

//   try {
//     const existing = await prisma.user.findUnique({ where: { email } });

//     if (existing) {
//       return { success: false, message: 'An account with this email already exists.' };
//     }

//     await prisma.user.create({
//       data: { name, email, role: Role.PARENT }
//     });

//     return { success: true, message: 'Signup successful. Please log in to continue.' };
//   } catch {
//     return { success: false, message: 'Could not create your account. Please try again.' };
//   }
// }

// export async function contactAction(_: ActionResult, formData: FormData): Promise<ActionResult> {
//   const name = readField(formData, 'name');
//   const email = readField(formData, 'email');
//   const message = readField(formData, 'message');

//   if (!name || !email || !message) {
//     return { success: false, message: 'Please fill out all contact fields.' };
//   }

//   return {
//     success: true,
//     message: 'Message received. Our support team will contact you shortly.'
//   };
// }

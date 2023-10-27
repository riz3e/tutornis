// pages/api/auth/register.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';// Adjust the import path if necessary
import bcrypt from 'bcrypt';
import { createUserSchema } from '../../validators/userSchema'; // Adjust the import path if necessary

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createUserSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      password: hashedPassword,
      name: body.name,
      role: body.role || 'STUDENT',
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}

import { NextResponse } from 'next/server';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const DATA_FILE = join(process.cwd(), 'data', 'visits.json');

function getVisits(): number {
  if (!existsSync(DATA_FILE)) return 0;
  try {
    const data = readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data).count || 0;
  } catch {
    return 0;
  }
}

function saveVisits(count: number) {
  const dir = join(process.cwd(), 'data');
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(DATA_FILE, JSON.stringify({ count }));
}

export async function GET() {
  const count = getVisits();
  return NextResponse.json({ count });
}

export async function POST() {
  const count = getVisits() + 1;
  saveVisits(count);
  return NextResponse.json({ count });
}

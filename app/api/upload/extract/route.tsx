import { NextRequest, NextResponse } from 'next/server';
import { pdfToPages } from 'pdf-ts';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File | null;

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }
        if (file.type !== "application/pdf") {
            return NextResponse.json({ error: "Only PDF files are allowed" }, { status: 400 });
        }
        const MAX_FILE_SIZE = 5 * 1024 * 1024;

        if (file.size > MAX_FILE_SIZE) {
            return NextResponse.json(
                { error: 'File too large. Maximum size is 5MB.' },
                { status: 413 } // 413 Payload Too Large
            );
        }


        const arrayBuffer = await file.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);


        const pages = await pdfToPages(uint8Array);
        const filteredPages = pages.filter(p => p.text.trim() !== '');

        if (filteredPages.length == 0) {
            return NextResponse.json({ error: "corrupted file" }, { status: 400 });
        }
        return NextResponse.json({ pages: filteredPages });

    } catch (error) {
        console.error('PDF Extraction Error:', error);
        return NextResponse.json({ error: 'Failed to extract text' }, { status: 500 });
    }
}

import type { PdfData } from "../types/pdfTypes";

export function filterPDFpages(data: PdfData[]): PdfData[] {
    return data.map(item => ({
        ...item,
        text: item.text
            .replace(/\n/g, ' ')    // Replace newlines with a space
            .replace(/\s+/g, ' ')   // Replace multiple spaces with a single space
            .trim(),                // Remove leading/trailing spaces
    }));
}
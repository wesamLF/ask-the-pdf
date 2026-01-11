import Link from "next/link";

export default function ErrorMessage({ msg }: { msg: string }) {
    return (
        <div className="flex items-center justify-center py-40 md:py-10 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white shadow-lg border border-gray-200">
                <div className="flex flex-col items-center text-center gap-4 p-8">

                    {/* Icon */}
                    <div className="text-red-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-red-600">
                        Something went wrong
                    </h1>

                    {/* Message */}
                    <p className="text-gray-600">
                        {msg}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-3 mt-6">
                       
                        <Link
                            href="/quiz/upload"
                            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                        >
                            Upload Another File
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

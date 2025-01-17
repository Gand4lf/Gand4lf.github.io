import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageNavigationProps {
    onPrevious: () => void
    onNext: () => void
}

export function ImageNavigation({ onPrevious, onNext }: ImageNavigationProps) {
    return (
        <>
            <div className="absolute left-0 inset-y-0 w-12 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-start bg-gradient-to-r from-black/50 to-transparent">
                <button
                    className="h-8 w-8 ml-1 flex items-center justify-center hover:scale-150 transition-transform origin-center"
                    onClick={(e) => {
                        e.stopPropagation()
                        onPrevious()
                    }}
                >
                    <ChevronLeft className="h-4 w-4 text-white" />
                </button>
            </div>
            <div className="absolute right-0 inset-y-0 w-12 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-end bg-gradient-to-l from-black/50 to-transparent">
                <button
                    className="h-8 w-8 mr-1 flex items-center justify-center hover:scale-150 transition-transform origin-center"
                    onClick={(e) => {
                        e.stopPropagation()
                        onNext()
                    }}
                >
                    <ChevronRight className="h-4 w-4 text-white" />
                </button>
            </div>
        </>
    )
} 
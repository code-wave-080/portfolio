export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="animate-slide-wrapper-up">
                <div className="h-screen bg-[#303030]" />
                <div className="h-screen bg-pink-500" />
            </div>
        </div>
    );
}

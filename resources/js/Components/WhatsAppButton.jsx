import React from 'react';

export default function WhatsAppButton() {
    const whatsappNumber = '94712345678'; // Replace with actual number
    const prefilledMessage = encodeURIComponent(
        'Hi JAAN Travels, I need air tickets from ___ to ___. Travel date: ___'
    );

    return (
        <>
            {/* Floating WhatsApp Button */}
            <a
                href={`https://wa.me/${whatsappNumber}?text=${prefilledMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 animate-bounce"
                title="Chat with us on WhatsApp"
            >
                <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center cursor-pointer">
                    <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.729.743 5.395 2.151 7.746l-2.288 7.364 7.783-2.251c2.199 1.317 4.721 2.016 7.331 2.016 9.839 0 17.845-8.009 17.845-17.951 0-4.794-1.865-9.298-5.25-12.682-3.384-3.385-7.889-5.25-12.682-5.25" />
                    </svg>
                </div>
            </a>

            {/* Pulse Animation */}
            <style>{`
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-bounce {
                    animation: bounce 2s infinite;
                }

                .animate-pulse-ring::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    border: 2px solid currentColor;
                    border-radius: 50%;
                    animation: pulse-ring 2s infinite;
                }

                @keyframes pulse-ring {
                    0% {
                        transform: scale(0.8);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1.4);
                        opacity: 0;
                    }
                }
            `}</style>
        </>
    );
}

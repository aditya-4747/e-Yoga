
// Benefits Section (Home Page)

export default function Benefits() {
    return (
        <section id="benefits" className="bg-gray-100 py-12">
            <div className="container mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Choose Smart Yoga?</h2>
    
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Image Column */}
                    <div>
                        <img
                            src="/smart-yoga.jpg"
                            alt="Smart Yoga Benefits"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
        
                    {/* Benefits List Column */}
                    <div>
                        <ul className="space-y-9">
                            <li className="flex items-start space-x-4">
                                <div className="bg-green-500 text-white p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 15l-3.5-3.5 1.42-1.42L10 12.17l5.08-5.08L16.5 8.5 10 15z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700">Personalized Guidance</h3>
                                    <p className="text-gray-600">
                                    Smart yoga devices offer tailored guidance, adjusting poses and sequences based on your individual skill level and goals.
                                    </p>
                                </div>
                            </li>
            
                            <li className="flex items-start space-x-4">
                                <div className="bg-green-500 text-white p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 15l-3.5-3.5 1.42-1.42L10 12.17l5.08-5.08L16.5 8.5 10 15z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700">Real-time Feedback</h3>
                                    <p className="text-gray-600">
                                    With built-in sensors, smart yoga mats and wearables provide real-time feedback on your posture, helping you correct alignment and improve balance.
                                    </p>
                                </div>
                            </li>
            
                            <li className="flex items-start space-x-4">
                                <div className="bg-green-500 text-white p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 15l-3.5-3.5 1.42-1.42L10 12.17l5.08-5.08L16.5 8.5 10 15z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700">Progress Tracking</h3>
                                    <p className="text-gray-600">
                                    Track your practice, set goals, and monitor your progress with app integrations, making it easy to see improvements over time.
                                    </p>
                                </div>
                            </li>
            
                            <li className="flex items-start space-x-4">
                                <div className="bg-green-500 text-white p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 15l-3.5-3.5 1.42-1.42L10 12.17l5.08-5.08L16.5 8.5 10 15z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700">Enhanced Convenience</h3>
                                    <p className="text-gray-600">
                                    Practice yoga anytime, anywhere with smart devices that guide you, whether at home, in the park, or on the go.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
  
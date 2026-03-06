function CourseCard({ title, duration, description }) {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
            <p className="text-sm text-gray-600 mb-2">
                <strong>Duration:</strong> {duration}
            </p>
            <p className="text-gray-700 mb-4">{description}</p>

            <button className="bg-primary text-blue px-5 py-2 rounded-lg hover:bg-secondary transition">
                Enroll Now
            </button>
        </div>
    );
}

export default CourseCard;
const RecommendationsUnderway = () => {
  const items = [
    {
      icon: "📍",
      title: "Start with your location",
      description: "Get home recommendations tailored to your area.",
    },
    {
      icon: "🔍",
      title: "Tell us what you’re looking for",
      description: "Let us know your preferences and we’ll do the rest.",
    },
    {
      icon: "🏡",
      title: "Explore recommended homes",
      description: "Browse personalized listings that match your needs.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Recommendations underway
        </h2>
        <p className="text-gray-600 mb-10">
          We’re preparing your personalized home journey. Here's how it works:
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsUnderway;

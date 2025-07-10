const BuyAbilitySection = () => {
  return (
    <section className="bg-blue-50 py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Find homes you can afford with{" "}
            <span className="text-blue-600">BuyAbility℠</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Discover listings that match your budget before you even start
            touring. BuyAbility℠ helps you search confidently by highlighting
            homes you can actually afford.
          </p>
          <button className="bg-white border border-blue-500 text-blue-600 font-semibold px-5 py-3 rounded-full hover:bg-blue-100 transition">
            Explore BuyAbility℠
          </button>
        </div>

        <div
          className="w-full h-64 md:h-80 bg-cover bg-center rounded-xl shadow-md"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=987&q=80')`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default BuyAbilitySection;

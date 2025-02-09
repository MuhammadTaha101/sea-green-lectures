
import Background from "../components/Background";
import NavBar from "../components/NavBar";
import ModuleCard from "../components/ModuleCard";

const Home = () => {
  return (
    <>
      <Background />
      <NavBar />
      <main className="min-h-screen pt-24 px-4">
        <div className="container mx-auto animate-fade-in">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Welcome to MathLectures
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access high-quality math lectures for first and second-year students.
              Learn at your own pace with our comprehensive video content.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ModuleCard
              title="First Year Lectures"
              description="Fundamental mathematics concepts including calculus, algebra, and more."
              path="/portal/first-year"
            />
            <ModuleCard
              title="Second Year Lectures"
              description="Advanced mathematics topics building upon first-year foundations."
              path="/portal/second-year"
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;

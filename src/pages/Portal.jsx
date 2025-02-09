
import { useParams } from "react-router-dom";
import Background from "../components/Background";
import NavBar from "../components/NavBar";

const Portal = () => {
  const { year } = useParams();
  const title = year === "first-year" ? "First Year Lectures" : "Second Year Lectures";

  return (
    <>
      <Background />
      <NavBar />
      <main className="min-h-screen pt-24 px-4">
        <div className="container mx-auto animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">{title}</h1>
          <div className="grid gap-6">
            {/* Placeholder for video lectures */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">Coming Soon</h3>
              <p className="mt-2 text-gray-600">
                Video lectures will be available here shortly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Portal;

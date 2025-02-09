
import { Link } from "react-router-dom";

const ModuleCard = ({ title, description, path }) => {
  return (
    <Link
      to={path}
      className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary"
    >
      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4 flex items-center text-primary">
        <span>Explore</span>
        <svg
          className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
};

export default ModuleCard;

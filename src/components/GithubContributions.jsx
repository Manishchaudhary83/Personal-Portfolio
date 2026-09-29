
import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubContributions = () => {
  const currentYear = new Date().getFullYear();

  const years = [
    currentYear,
    currentYear - 1,
    currentYear - 2,
  ];

  const [selectedYear, setSelectedYear] = useState(currentYear);

  const blueTheme = {
    light: [
      "#ebedf0",
      "#c6e0ff",
      "#8cc4ff",
      "#4da3ff",
      "#1677ff",
    ],
    dark: [
      "#161b22",
      "#0d419d",
      "#0969da",
      "#218bff",
      "#58a6ff",
    ],
  };

  return (
    <section className="py-20 bg-dark-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            GitHub <span className="text-blue">Contributions</span>
          </h2>

          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            A look at my coding activity and open-source contributions.
          </p>
        </div>

        {/* GitHub Calendar */}
        <div className="flex items-start gap-8 overflow-x-auto rounded-xl border p-6">

          <div className="min-w-max">
            <GitHubCalendar
              username="manishchaudhary83"
              year={selectedYear}
              theme={blueTheme}
            />
          </div>

          {/* Years */}
          <div className="flex flex-col gap-2 border-l pl-6">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`rounded-md px-3 py-2 text-sm transition ${
                  selectedYear === year
                    ? "bg-blue-500 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default GithubContributions;



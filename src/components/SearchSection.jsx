import React, { useState, useMemo } from "react";
import "./SearchSections.css";

const data = [
  { name: "University of Oxford", country: "UK", amount: "$50,000", type: "International", description: "Fully funded scholarship for outstanding international students pursuing graduate study at Oxford." },
  { name: "Harvard University", country: "USA", amount: "$60,000", type: "International", description: "Merit-based fellowship covering tuition and living expenses for exceptional students worldwide." },
  { name: "Chevening Scholarship", country: "UK", amount: "$45,000", type: "International", description: "UK government scholarship for future leaders to pursue a one-year Master's degree in the UK." },
  { name: "DAAD Scholarship", country: "Germany", amount: "$20,000", type: "International", description: "Fully funded scholarships for international students to study or research in Germany." },
  { name: "MTN Scholarship", country: "Nigeria", amount: "₦500,000", type: "Local", description: "Financial support for talented Nigerian students pursuing higher education across the country." },
  { name: "NNPC Scholarship", country: "Nigeria", amount: "₦750,000", type: "Local", description: "Supports Nigerian students in science and engineering disciplines at top universities." },
  { name: "Undergraduate Grant", country: "Nigeria", amount: "₦300,000", type: "Undergraduate", description: "Need-based grant for undergraduate students covering tuition, books, and living expenses." },
  { name: "Graduate Fellowship", country: "USA", amount: "$37,000", type: "Graduate", description: "Competitive fellowship for graduate students conducting research in their chosen field." },
];

const pills = ["All", "Undergraduate", "Graduate", "Local", "International", "Closing soon"];

const SearchSection = () => {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const results = useMemo(() => {
    return data.filter((item) => {
      const matchesQuery =
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.country.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = activeFilter === "All" || item.type === activeFilter;
      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  return (
    <div className="page">
      

     
      <div className="search-bar">
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search by Field, Country, Scholarship name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-bar__btn" onClick={() => {}}>Search</button>
      </div>

      
      <div className="filters">
        {pills.map((pill) => (
          <button
            key={pill}
            className={`pill ${activeFilter === pill ? "pill--active" : ""}`}
            onClick={() => setActiveFilter(pill)}
          >
            {pill}
          </button>
        ))}
      </div>

      
      
      <div className="cards-list">
        {results.length === false ? (
          <div className="empty-state">
            
            <p>No scholarships match your search.</p>
            <button
              className="empty-state__reset"
              onClick={() => { setQuery(""); setActiveFilter("All"); }}
            >
              Reset filters
            </button>
          </div>
        ) : (
          results.map((item, i) => (
            <div className="card" key={item.name}>
              <div className="card__body">
                <h3 className="card__name">{item.name}</h3>
                <p className="card__country">{item.country}</p>
                <p className="card__amount">{item.amount}</p>
                <p className="card__desc">{item.description}</p>
              </div>
              <button className="card__cta">View Details</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchSection;
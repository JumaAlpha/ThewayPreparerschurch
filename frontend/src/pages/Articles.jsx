import React, { useEffect, useState } from "react";
import { fetchArticles } from "../services/articleService"; // Import the API call to fetch articles
import ArticleCard from "../components/ArticleCard"; // Assuming you have an ArticleCard component for each article

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [filteredArticles, setFilteredArticles] = useState([]); // State for filtered articles

    useEffect(() => {
        // Fetch articles when the component loads
        const getArticles = async () => {
            try {
                const data = await fetchArticles();
                setArticles(data);
                setFilteredArticles(data); // Initially, show all articles
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };

        getArticles();
    }, []);

    useEffect(() => {
        // Filter articles based on the search query
        const filtered = articles.filter((article) =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (article.content && article.content.toLowerCase().includes(searchQuery.toLowerCase())) // You can filter by title and content
        );
        setFilteredArticles(filtered);
    }, [searchQuery, articles]); // Re-filter when searchQuery or articles changes

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Explore Articles</h1>
            <p className="text-center mb-5">Browse spiritual articles and insights from our community.</p>

            {/* Search Input */}
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // Update search query on change
                />
            </div>

            {filteredArticles.length > 0 ? (
                <div className="row">
                    {filteredArticles.map((article) => (
                        <div key={article.article_id} className="col-md-4 col-sm-6 mb-4">
                            <ArticleCard article={article} />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">No articles found. Check back later!</p>
            )}
        </div>
    );
};

export default Articles;

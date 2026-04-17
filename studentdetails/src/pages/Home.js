function Home() {
  return (
    <div className="home">

      <h1>Student Dashboard 🚀</h1>
      <p className="subtitle">
        Manage Students • Track Progress • Grow Skills
      </p>

      {/* SIMPLE IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="students"
        className="home-image"
      />

      {/* FEATURES */}
      <div className="home-cards">
        <div className="card">
          <h3>📊 Students</h3>
          <p>View all student details</p>
        </div>

        <div className="card">
          <h3>📁 Dashboard</h3>
          <p>Profile and settings</p>
        </div>

        <div className="card">
          <h3>🚀 Performance</h3>
          <p>Track progress easily</p>
        </div>
      </div>

    </div>
  );
}

export default Home;
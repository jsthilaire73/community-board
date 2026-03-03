import "./App.css";

function App() {

  const resources = [
    {title:"Free Coding Bootcamp", description:"Learn web development online for free."},
    {title:"Local Basketball League", description:"Weekly games for all skill levels."},
    {title:"Community Food Bank", description:"Free groceries available every Saturday."},
    {title:"Public Library Workshops", description:"Tech and writing workshops monthly."},
    {title:"City Volunteer Program", description:"Help clean parks and public spaces."},
    {title:"Startup Networking Event", description:"Meet entrepreneurs and developers."},
    {title:"Yoga in the Park", description:"Free outdoor yoga classes every Sunday."},
    {title:"Job Search Assistance", description:"Resume help and interview practice."},
    {title:"Music Open Mic Night", description:"Perform or watch local musicians."},
    {title:"Art & Design Meetup", description:"Connect with creatives in your area."}
  ];

  return (
    <div className="container">
      <h1>Community Resources Board</h1>

      <div className="card-grid">
        {resources.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
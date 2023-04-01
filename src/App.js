import Blog from "./components/blog/Blog";
import Faq from "./components/faq/Faq";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <section className="container">
            <Navbar />
            <Blog />
            <Faq />
        </section>
    );
}

export default App;

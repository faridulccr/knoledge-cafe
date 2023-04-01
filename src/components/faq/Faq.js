import "./Faq.style.css";

export default function Blog() {
    return (
        <div className="blog-section">
            <h1 id="blog-title">Frequently Question and Answer</h1>
            <div className="question-container">
                <h1 className="question-name">
                    1. What is the difference between Props vs State?
                </h1>
                <p className="answer">
                    <strong>props:</strong> are component's attribute in react
                    which are very useful for customization. A prop modifies the
                    behavior of any react component, its like an parameter.
                    <br />
                    <br />
                    <strong>state:</strong> is a build in react object which is
                    used to store data or details about the component. used to
                    rendering component each time it happens. The component's
                    behavior and rendering are determined by changes in state,
                    which may occur in reaction to user input or system
                    generated events.
                </p>
            </div>
            <div className="question-container">
                <h1 className="question-name">2. How does useState work?</h1>
                <p className="answer">
                    useState is a React Hook. We call it inside a function
                    component to add some local state to that component. The
                    only argument of useState is the initial value. useState
                    returns a pair: the current value and a function that lets
                    us update the value with a new value.
                </p>
            </div>
            <div className="question-container">
                <h1 className="question-name">
                    3. Purpose of useEffect other than fetching data.
                </h1>
                <p className="answer">
                    useEffect is React hook, which use to handle side effects
                    functions (side Effects are those functions that interact
                    with the outside world, or out of React Js ecosystem) and
                    with useEffect, we can separate them into another function.
                    main purpose of useEffect, when your component depends on
                    the outside world data, and we can not guarantee that data
                    will come or not (maybe the server is down there). So,
                    Instead of throwing errors and stop other components from
                    being rendered, move them into useEffect hook.
                </p>
            </div>
            <div className="question-container">
                <h1 className="question-name">4. How Does React work?</h1>
                <p className="answer">
                    React is an open−source, front−end JavaScript library,
                    solely in charge of the application's view layer, and
                    Facebook takes care of it. React offers component based
                    approach which means you can divide your page into
                    components. <br /> In order to write react components we
                    need two JS files. <br /> 1. React <br /> 2. ReactDOM Once
                    included, these JS files will give you access to two global
                    objects namely React and ReactDOM. <br /> It provides a
                    method called render that helps you to render elements into
                    the DOM.
                </p>
            </div>
        </div>
    );
}

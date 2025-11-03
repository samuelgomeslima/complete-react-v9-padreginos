import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
    state = { hasError: false };
    constructor (props) {
        super (props);
        
        this.celebrateError = this.celebrateError.bind(this);
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
       console.error("ErrorBoundary caught an error", error, info);
    }
    componentDidMount() {}
    componentWillUnmount() {}
    componentDidUpdate() {}
    celebrateError = () => {
        this.setState({
            celebratinon: "lol"
        });
    }

    render() {
        console.log(this.props.lol);
        if (this.state.hasError) {
            return (
                <div onClick={this.celebrateError} className="error-boundary">
                    <h2>Something went wrong.</h2>
                    <p>
                        Please try refreshing the page or contact support if the problem persists. <Link to="/">Click here </Link> to go back to the home page.
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
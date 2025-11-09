import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state = { hasError:false };
  }

  static getDerivedStateFromError(){
    return { hasError:true };
  }

  componentDidCatch(error, info){
    console.error("ErrorBoundary caught:", error, info);
  }

  render(){
    if(this.state.hasError){
      return (
        <div className="container">
          <div style={{padding:24, borderRadius:12, background:'#fff', boxShadow:'0 8px 24px rgba(0,0,0,0.06)'}}>
            <h2>Oops — something went wrong.</h2>
            <p>Try refreshing or go back to the home page.</p>
            <a href="/" style={{color:'#6a4a58', fontWeight:700}}>Go Home</a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

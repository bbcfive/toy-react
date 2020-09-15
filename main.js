import { createElement, Component, render } from './toy-react';
 

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      a: 1,
      b: 2
    }
  }
  render() {
    return (
      <div>
        <h1>my component</h1>
        {this.children}
        <button onclick={() => {this.setState({a: this.state.a+1})}}>add</button>
        <div> 
          {this.state.a.toString()}
        </div>
      </div>
    );
  };
};


render(<MyComponent id="a" class="c">
    <div>abc</div>
    <div>def</div>
    <div>ghi</div>
  </MyComponent>, document.body);
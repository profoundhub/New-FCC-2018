class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibility: false
		};
	}
	// change code below this line

	// change code above this line
	render() {
		if (this.state.visibility) {
	  	return (
		    <div>
	        <button onClick = {this.toggleVisibility}>Click Me</button>
	        <h1>Now you see me!</h1>
		    </div>
	    );
  	} else {
  		return (
		    <div>
	        <button onClick = {this.toggleVisibility}>Click Me</button>
		    </div>
	    );
  	}
  }
};
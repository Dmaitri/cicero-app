import React from 'react';

class ConfigEditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                        </label>
                        <input type="text" value={this.state.value} />
                    <label>
                        sonarCommand:
              <input type="text" value={this.state.value} />
                    </label>
                    <br />
                    <label>
                        sonarCommandWithoutType:
              <input type="text" value={this.state.value} />
                    </label>
                    <br />
                    <label>
                        cleanuprepos:
              <input type="text" value={this.state.value} />
                    </label>
                    <br />
                    <label>
                        ciceroServerHost:
              <input type="text" value={this.state.value} />
                    </label>
                    <br />
                    <label>
                        ciceroServerPort:
              <input type="text" value={this.state.value} />
                    </label>
                    <br />
                    <label>
                        anamolyLOCCount:
              <input type="text" value={this.state.value} />
                    </label>
                    <br />
                    <label>
                        anamolyLOCCountPerCommit:
              <input type="text" value={this.state.value} />
                    </label>
                    <br />
                    <label>
                        exCludeFiles:
              <input type="text" value={this.state.value} />
                    </label>
                    <br />
                    <label>
                        projectName:
              <input type="text" value={this.state.value} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                );
            }
        }
        
        export default ConfigEditPage;

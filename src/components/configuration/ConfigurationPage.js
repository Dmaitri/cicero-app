import React from 'react';
import * as files1 from '../json/fileData';
// const files1 = [
//     {
//         id: 1,
//         fileName: 'config.json'
//     },
//     {
//         id: 2,
//         fileName: 'repoType.json'
//     },
//     {
//         id: 3,
//         fileName: 'git-log-anamoly.json'
//     },
//     {
//         id: 4,
//         fileName: 'emailAliases.json'
//     },
//     {
//         id: 5,
//         fileName: 'processStatus.json'
//     },
// ];
class ConfigurationPage extends React.Component {
    constructor() {
        super();
        this.state = { files: files1.files };
    }
    createFileRow(files) {
        return (
            <tr key={files.id}>
                <td>{files.id}</td>
                <td>{files.fileName}</td>
                <td><a href={"configedit"} >Edit</a></td>
            </tr>
        );
    }
    render() {
        return (
            <div>
                <h1>Configurations:</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Configuration File Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.files.map(this.createFileRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ConfigurationPage;
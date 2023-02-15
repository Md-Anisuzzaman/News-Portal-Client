import React from 'react'

function AllMessage() {
    return (
        <div>
            <div id="borderlessTable" className="mb-5">
                <h4>Borderless table</h4>
                <p />
                <div className="card">
                    <div className="card-body">
                        <table className="table table-borderless mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-arrow">
                        <div className="card-arrow-top-left" />
                        <div className="card-arrow-top-right" />
                        <div className="card-arrow-bottom-left" />
                        <div className="card-arrow-bottom-right" />
                    </div>
                    <div className="hljs-container"><pre><code className="hljs language-xml"><span className="hljs-comment">&lt;!-- table-borderless --&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">table</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"table table-borderless"</span>&gt;</span>{"\n"}{"  "}...{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">table</span>&gt;</span></code></pre>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AllMessage
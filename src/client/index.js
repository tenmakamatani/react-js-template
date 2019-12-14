"use strict";

import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Button from "./component/Button";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: "aaa",
            apiType: "test1"
        };
    }
    connectApi() {
        if (this.state.apiType == "test1") {
            try {
                axios.get("/api/test1").then(res => {
                    this.setState({ api: res.data.api, apiType: "test2" });
                });

            } catch (e) {
                console.error("下記のエラーでAPIの通信に失敗しました\n" + e);
            }
        } else if (this.state.apiType == "test2") {
            try {
                axios.get("/api/test2").then(res => {
                    this.setState({ api: res.data.api, apiType: "test1" });
                });
            } catch (e) {
                console.error("下記のエラーでAPIの通信に失敗しました\n" + e);
            }
        } else {
            console.error("存在しないAPIです");
        }
    }
    render() {
        return (
            <div>
                <Button connectAPI={ this.connectApi.bind(this) } />
                <div>{this.state.api}</div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("index"));
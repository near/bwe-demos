const devLayoutStyles = {
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
    },
    column: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    },
    header: {
        fontSize: "2rem",
        fontWeight: "bold",
    },
    body: {
        fontSize: "1.2rem",
    },
}

return (
    <div>
        <Widget src="monkeypatcher.near/App.Header" trust={{ mode: "trusted-author" }} />
        <div style={devLayoutStyles.row}>
            <div style={devLayoutStyles.column}>
            <Widget src="monkeypatcher.near/App.DevResultGraph"  trust={{ mode: "trusted-author" }}/>
            </div>
        </div>
        <div style={devLayoutStyles.row}>
            <div style={devLayoutStyles.column}>
            <Widget src="monkeypatcher.near/App.DevResultText"  trust={{ mode: "trusted-author" }}/>
            </div>
        </div>
    </div>
);
const footerStyles = {
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
        backgroundColor: 'black',
        color: 'white',
    },
    column: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    },
}

return (
    <div>
        <div style={footerStyles.row}>
        <div style={footerStyles.column}>
            <a href="/monkeypatcher.near/scc">HOME</a>
        </div>
        <div style={footerStyles.column}>
            <a href="/monkeypatcher.near/App.ProviderForm">PROVIDER FORM</a>
        </div>
        <div style={footerStyles.column}>
            <a href="/monkeypatcher.near/App.DevForm" >DEVELOPER FORM</a>
        </div>
        </div>
    </div>
);

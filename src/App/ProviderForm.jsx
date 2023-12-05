const providerStyles = {
    header: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        fontSize: "2rem",
    },
    body: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        width: "100%",
    },
  };

return (
    <div>
        <Widget src="monkeypatcher.near/App.Header" trust={{ mode: "trusted-author" }} />
        <h1 style={providerStyles.header}>PROVIDER FORM</h1>
        <div style={providerStyles.body}></div>
        <div><Widget src="monkeypatcher.near/App.Footer" trust={{ mode: "trusted-author" }} /></div>
    </div>
);
ß
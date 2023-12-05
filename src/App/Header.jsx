const headerStyles = {
    header: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        fontSize: "2rem",
    },
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
        <div style={headerStyles.row}>
        <h1 style={headerStyles.header}>BOS Services Calculator</h1>
        </div>
    </div>
);

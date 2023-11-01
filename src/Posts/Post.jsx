const { content: contentRaw, account_id: author, block_timestamp } = props;

let content = "bad content";
console.log(contentRaw);
try {
  content = JSON.parse(contentRaw).text;
} catch (e) {
  console.log("error parsing content", e);
}

// debugger;

return (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      maxWidth: "100%",
      borderBottom: "1px solid #e7e7e7",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        columnGap: "0.5rem",
        alignItems: "center",
      }}
    >
      <Widget
        src="bwe-demos.near/widget/Posts.Account"
        props={{ account: author }}
      />
      <span style={{ color: "gray" }}>
        {new Date(block_timestamp / 1000000).toLocaleString()}
      </span>
    </div>
    <Widget
      src="bwe-demos.near/widget/Posts.Markdown"
      props={{ content }}
      // id={post.receipt_id}
    />
  </div>
);

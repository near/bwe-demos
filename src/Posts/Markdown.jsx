// ! This component uses a package imported from a cdn which is not
// ! yet officially supported by BOS Web Engine. It is meant for
// ! demonstration purposes only and will likely change in the future.

// Originally tried to use the `marked-react` package but custom React
// components (e.g. <Markdown />) do not function under BWE. Ideally
// that would be a valid approach eventually.

// };
const [markdown, setMarkdown] = useState(null);
const importMarkdown = async () => {
  try {
    // ! This will kick of an individual net request for every instance of
    // ! this component rendered to the page since iframes do not share
    // ! cached resources
    const markdownDyn = await import("https://esm.sh/markdown-to-jsx@7.3.2");
    console.log("markdown imported");
    setMarkdown(markdownDyn);
  } catch (err) {
    console.log("markdown import error", err);
  }
};

useEffect(() => {
  importMarkdown();
}, []);

const [rendered, setRendered] = useState(null);

useEffect(() => {
  if (!markdown) return;

  setRendered(
    markdown.compiler(props.content, {
      forceBlock: true,
      enforceAtxHeadings: true,
    })
  );
}, [markdown]);

return markdown ? <div>{rendered}</div> : <div>Loading</div>;

const {
  circle,
  square,
  triangle,
  updateCircle,
  updateSquare,
  updateTriangle,
  id,
} = props;

return (
  <div>
    <Widget
      id={id}
      src="bwe-demos.near/widget/StateAndTrust.ShapeSet"
      props={{
        circle,
        square,
        triangle,
        updateCircle,
        updateSquare,
        updateTriangle,
      }}
    />
  </div>
);

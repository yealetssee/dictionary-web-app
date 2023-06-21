const Notfound = () => {
  return (
    <div className="notFound-parent">
      <p className="emoji">😕</p>
      <h3>No Definitions Found</h3>
      <p className="text">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default Notfound;

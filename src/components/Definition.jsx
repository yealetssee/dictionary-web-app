const Definition = ({ searchResult }) => {
  console.log(searchResult);

  return (
    <div className="defComp">
      {searchResult.map((result, index) => (
        <div key={index}>
          {result.meanings.map((meaning, index) => (
            <div key={index}>
              <div className="noun">
                <span className="sub-noun">{meaning.partOfSpeech}</span>
                <span className="line"></span>
              </div>
              <p className="meaning">Meaning</p>
              <div className="first-list">
                {meaning.definitions.map((definition, index) => (
                  <div className="parent" key={index}>
                    <span className="bullet"></span>
                    <div className="definition">
                      <span className="content">{definition.definition}</span>
                      {meaning.partOfSpeech === "verb" && (
                        <p className="example">
                          {definition.example && (
                            <span>"{definition.example}"</span>
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {meaning.synonyms.length > 0 && (
                <div className="syn">
                  <p className="synonyms">
                    Synonyms <span>{meaning.synonyms.join(", ")}</span>
                  </p>
                </div>
              )}
              {meaning.antonyms.length > 0 && (
                <div className="ant">
                  <p className="antonyms">
                    Antonyms <span>{meaning.antonyms.join(", ")}</span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Definition;

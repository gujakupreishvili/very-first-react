export default function Main(props) {
  return (
    <div className="flex">
      {/* write left corncer */}
      <div className="column">
        {/* this is first div */}
        <div className="container">
          <img src={props.photo} />
          <h2>{props.firstText}</h2>
          <p className="shortP">
            {props.shortP}
            <span>{props.shortpSpan}</span>
          </p>
          <p>{props.longP}</p>
          <div className="read-more">
            <button className="read-more-btn">{props.button}</button>
            <p>
              {props.comment}
              <sapn className="span-comment">0</sapn>
            </p>
          </div>
        </div>
        {/* this is second div  */}
        <div className="container">
          <img src={props.photo2} />
          <h2>{props.SecondText}</h2>
          <p className="shortP">
            {props.shortP2}
            <span>{props.shortpSpan2}</span>
          </p>
          <p>{props.longP2}</p>
          <div className="read-more">
            <button className="read-more-btn">{props.button}</button>
            <p>
              {props.comment}
              <sapn className="span-comment">2</sapn>
            </p>
          </div>
        </div>
      </div>
      {/* write right corner  */}
      <div className="column2">
        <div className="box-1">
          <img src={props.photo3} />
          <h1>{props.YourName}</h1>
          <p>{props.AboutYour}</p>
        </div>
        <div className="box-2">
          <h1>{props.post}</h1>
          <div className="box-2-first-div">
            <img src={props.postImg1} />
            <div className="colum-post">
              <h2>{props.lorem}</h2>
              <p>{props.sed}</p>
            </div>
          </div>
          <div className="box-2-first-div">
            <img src={props.postImg1} />
            <div className="colum-post">
              <h2>Ipsum</h2>
              <p>Praes tinci sed</p>
            </div>
          </div>
          <div className="box-2-first-div">
            <img src={props.postImg1} />
            <div className="colum-post">
              <h2>Dorum</h2>
              <p>Ultricies congue</p>
            </div>
          </div>
          <div className="box-2-first-div">
            <img src={props.postImg1} />
            <div className="colum-post">
              <h2>Dorum</h2>
              <p>Ultricies congue</p>
            </div>
          </div>
        </div>
        <div className="box-3">
          <h1>{(props = "Tags")}</h1>
          <div>
            <button className="travel">{(props = "Travel")}</button>
            <button className="other">{(props = "New York")}</button>
            <button className="other">{(props = "London")}</button>
            <button className="other">{(props = "IKEA")}</button>
            <button className="other">{(props = "NORWAY")}</button>
            <button className="other">{(props = "DIY")}</button>
            <button className="other"> {(props = "Ideas")}</button>
            <button className="other">{(props = "Baby")}</button>
            <button className="other">{(props = "Family")}</button>
            <button className="other">{(props = "News")}</button>
            <button className="other" >{(props = "Clothing")}</button>
            <button className="other">{(props = "Shopping")}</button>
            <button className="other">{(props = "Sports")}</button>
            <button className="other">{(props = " Games")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

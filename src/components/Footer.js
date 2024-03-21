export default function Footer(props) {
  return (
    <footer>
      <div>
        <button className="previous">{(props = "Previous")}</button>
        <button className="next">{(props = "Next")}</button>
      </div>
      <p>
        {(props = "Powered by")}
        <span>
          <a href=" w3.css">{(props = " w3.css")}</a>
        </span>
      </p>
    </footer>
  );
}
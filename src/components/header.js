export default function Header(props) {
  return (
    <header className="header">
      <p className="first-header-p">{props.text}</p>
      <p className="second-header-p">
        {props.text_2}
        <span>{props.span}</span>
      </p>
    </header>
  );
}
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header text="MY BLOG" text_2="Welcome to the blog of" span="unknown" />
      <Main
        photo="	https://www.w3schools.com/w3images/woods.jpg"
        firstText="TITLE HEADING"
        shortP="Title description, "
        shortpSpan="April 7, 2014"
        longP="Mauris neque quam, fermentum ut nisl vitae, 
        convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. 
        Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed
         ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum.
          Sed vitae justo condimentum, 
        porta lectus vitae, ultricies congue gravida diam non fringilla."
        button="READ MORE"
        comment="Comments "
        photo2="https://www.w3schools.com/w3images/bridge.jpg"
        SecondText="BLOG ENTRY"
        shortP2="Title description,"
        shortpSpan2="April 2, 2014"
        longP2="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
         Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim,
          ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.
           Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, 
        porta lectus vitae, ultricies congue gravida diam non fringilla."
        photo3="https://www.w3schools.com/w3images/avatar_g.jpg"
        YourName="My Name"
        AboutYour="Just me, myself and I, exploring the universe of uknownment.
         I have a heart of love and a interest
         of lorem ipsum and mauris neque quam blog. I want to share my world with you."
        post="Popular Posts"
        postImg1="https://blog-lac-nine-19.vercel.app/srcc/work.jpg"
        lorem="Lorem"
        sed="Sed mattis nunc"
      />
      <Footer />
    </div>
  );
}

export default App;

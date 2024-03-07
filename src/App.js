
import './App.css';
// import Boxes from './component/Boxes';
// import Footer from './component/Footer';
// import NaveBar from './component/NaveBar';
// import Props from './component/Props';
import ColorBox from './component/ColorBox';
function App() {
  return (
    <div className="App">
      <div className='colorParent'>
          <ColorBox color = "black" cod = "#FF6663" name = "pink"/>
          <ColorBox color = "black" cod = "#333333" name = "Gray"/>
          <ColorBox color = "black" cod = "#000000" name = "Black"/>
          <ColorBox color = "black" cod = "#38BB14" name = "GREEN"/>
          <ColorBox color = "black" cod = "#C90B0B" name = "RED"/>
          <ColorBox color = "black" cod = "#FF8000" name = "ORANGE"/>
          <ColorBox color = "black" cod = "#FFF500" name = "YELLOW"/>
          <ColorBox color = "black" cod = "#7E41A2" name = "PURPLE"/>
          <ColorBox color = "black" cod = "#C14911" name = "BROUNE"/>
          <ColorBox color = "black" cod = "#CCCCCC" name = "LIGHT GRAY"/>
          <ColorBox color = "black" cod = "#FF6663" name = "pink"/>
          <ColorBox color = "black" cod = "#FF6663" name = "pink"/>
      </div>
      {/* <NaveBar/>
      <Props text = "aerh piargoi gpoiehgopia ehheop ihepheho feoihovopei oihv osh e" name = "oairh poi rhoihr"/>
      <Props text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos incidunt aliquam eveniet nam ipsam atque officia nesciunt fugiat quo placeat, repellendus quae autem, dolor alias!" name="P.T Barmer" />
      <Props text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, culpa molestiae et repellendus laborum asperiores voluptatem provident error deleniti est quas illo mollitia omnis esse sit nisi quaerat tenetur. Voluptas dolorem soluta doloribus facere dignissimos dolorum nostrum nobis, saepe natus ut quod reprehenderit mollitia aliquid delectus exercitationem, omnis officia fuga?" name="kai po che" />
      <Props text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, culpa molestiae et repellendus laborum asperiores voluptatem provident error deleniti est quas illo mollitia omnis esse sit nisi quaerat tenetur. Voluptas dolorem soluta doloribus facere dignissimos dolorum nostrum nobis," name="jadu sahu"/>
      <Props text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, culpa molestiae et repellendus laborum asperiores voluptatem provident error deleniti est quas illo mollitia omnis esse sit nisi quaerat tenetur. Voluptas dolorem soluta doloribus facere dignissimos dolorum nostrum nobis, saepe natus ut quod reprehenderit mollitia aliquid delectus exercitationem, omnis officia fuga?" name="jb oiwr" />
      <Props text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, culpa molestiae et repellendus laborum asperiores voluptatem provident error deleniti est quas illo mollitia omnis esse sit nisi quaerat tenetur. Voluptas dolorem soluta doloribus facere dignissimos dolorum nostrum nobis, saepe natus ut quod reprehenderit mollitia aliquid delectus exercitationem, omnis officia fuga?" name="bvub din" />
      <Props text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, culpa molestiae et repellendus laborum asperiores voluptatem provident error deleniti est quas illo mollitia omnis esse sit nisi quaerat tenetur. Voluptas dolorem soluta doloribus facere dignissimos dolorum nostrum nobis, saepe natus ut quod reprehenderit mollitia aliquid delectus exercitationem, omnis officia fuga?" name="kjsd ddj" />
      <Props text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, culpa molestiae et repellendus laborum asperiores voluptatem provident error deleniti est quas illo mollitia omnis esse sit nisi quaerat tenetur. Voluptas dolorem soluta doloribus " name="S.D. shav" />
      {/* <div className="hero">
        <div className='side'>
          <span className='fontLarg'>Let us find your</span>
          <span className='fontLarg fontColor'>Forever Food.</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos incidunt aliquam eveniet nam ipsam atque officia nesciunt fugiat quo placeat, repellendus quae autem, dolor alias!</p>
          <div className="butn">
            <button className='butenStyle'>Search Now</button>
            <button className='butenStyle2'>
              Know More
            </button>
          </div>
        </div>
      </div>
      <div className="secondPage">
        <div className='image'>
          <img id='home' src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
        </div>
        <div className='text'>
          <div className='text2'>
          <span className='textSid fontSizeBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet libero obcaecati dolores repudiandae quibusdam</span>
          <span className='textSid'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!</span>

          <button className='textSid'>Get in Touch</button>
          </div>
        </div>
      </div>
      <div className="theardPage">
        <Boxes text='kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!' />

        <Boxes text='kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia?' />

        <Boxes text='kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia?' />

        <Boxes text='kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia?' />

        <Boxes text=' Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!' />

        <Boxes text='kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!' />

        <Boxes text='kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!' />

        <Boxes text='kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto,!' />

        <Boxes text='kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia? Ab!kuch to log khenge Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam, esse ratione nobis iusto, quos cupiditate laudantium modi commodi asperiores illo sunt nihil quia?' />
      </div> */}
      {/* <div className="forth">
        <Footer/>
      </div> */}
    </div>
  );
}

export default App;

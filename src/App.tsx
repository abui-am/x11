import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';
import Confirmation from './confirmation';

function App() {
  const [confirmed, setConfirmed] = React.useState(false);

  if (confirmed) {
    return <Confirmation />;
  }
  return (
    <div className='container'>
      <h1>Untuk Caca❤️❤️❤️</h1>
      <p>Cahaya Aulia Firdausyah, Surat ini aku tulis dalam keaadan sadar,</p>
      <p>
        Awal kita bertemue, aku merasa kamu adalah satu puncak yang tidak bisa
        aku capai. "It was pure luck, it won't last long", I thought. <br />
      </p>
      <p>
        Namun kurasa aku hanya perlu mencoba, dan sepertinya kita bisa bersama.{' '}
        <br />
      </p>
      <p>
        <b>"Gadis yang lucu, cantik, ceria, dan penuh kejutan. </b>
        <br />
        Walaupun kalau ngomong kadang suka ngak mikir dulu 😊. Namun kurasa
        hatinya baik, dan aku ingin bersamanya." <br />
      </p>
      <p>
        Kita mungkin punya banyak persamaan, tapi kita juga punya banyak
        perbedaan. <br />
      </p>
      <p>
        Mulai dari kebiasaan, keinginan, dan cara berpikir. <br />
      </p>
      <p>
        Tapi mungkin itu tidak penting, yang penting adalah kita bisa saling
        mengerti, saling berkerja sama dan saling tumbuh ke arah yang lebih
        baik. <br />
      </p>
      <p>
        Mungkin kita tidak bisa banyak bertemu, tapi aku ingin kita bisa saling
        mengerti, saling percaya, dan saling mendukung. <br />
        <b>"Trust, respect, and love. I think that's all we need."</b>
      </p>
      <p>
        Untuk alasan aku mencari pacar, sebenarnya aku lebih mencari teman
        hidup, teman bermain, teman berdiskusi, dan teman berbagi. <br />
        Aku bukan tipe orang yang suka bermain-main, aku selalu serius dalam
        segala hal. <br />
      </p>
      <p>
        I took this as investment, I want to invest my time, my energy, and my
        love.
      </p>
      <p>As Nadin Amizah said</p>
      <p>
        <i>
          Aku tahu, kamu lahir dari Cantik utuh cahaya rembulan Sedang aku dari
          badai marah riuh yang berisik Juga banyak hal-hal yang sedih"
        </i>
      </p>
      <p>
        <i>
          Tapi menurut aku, kamu cemerlang Mampu melahirkan bintang-bintang
          Menurutku, ini juga kar'na hebatnya badaimu Juga kar'na lembutnya
          tuturmu
        </i>
      </p>
      <p
        style={{
          marginBottom: 32,
        }}
      >
        So Do you wanna be my <b>Girlfriend?</b> 💐
        <br />
      </p>
      <button
        onClick={() => {
          setConfirmed(true);
        }}
      >
        Yes
      </button>
      <ButtonWithEffect />
      <Toaster />
    </div>
  );
}
// create button that travel to random absolute position on screen when clicked
// So the button will move to random position when clicked

function ButtonWithEffect() {
  const [hover, setHovered] = React.useState(false);
  const [position, setPosition] = React.useState({
    x: 0,
    y: 0,
  });
  const handleClick = () => {
    toast.error('Gak kena :( ', {
      duration: 1000,
    });
    setPosition({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    });
  };
  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => {
        handleClick();

        setHovered(true);
      }}
      style={
        !hover
          ? {}
          : {
              position: 'fixed',
              left: position.x,
              top: position.y,
            }
      }
    >
      No
    </button>
  );
}

export default App;

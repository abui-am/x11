import CanvasAnimation from './canvas-animation';
const Confirmation = () => {
  return (
    <>
      <CanvasAnimation />
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <h1
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#522e38',
          }}
        >
          Thank you <br />
          🌷🌷🥺
        </h1>
      </div>
    </>
  );
};

export default Confirmation;
